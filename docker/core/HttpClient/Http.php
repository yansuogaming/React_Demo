<?php

namespace Vietiso\Core\HttpClient;

use Vietiso\Core\Macro\Macroable;
use Swoole\Coroutine\Http\Client;
use Swoole\Coroutine\Http2\Client as Http2Client;

class Http
{
    use Macroable;

    protected array $headers = [
        'Content-Type' => 'application/json; charset=UTF-8'
    ];

    protected array $query = [];

    protected string $username;

    protected string $password;

    protected array $configs = [
        'timeout' => 30,
        'connect_timeout' => 5,
    ];

    protected float $version = 1.1;

    protected int $maxRetries = 1;

    protected array $files = [];

    public function get(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'GET', $params);
    }

    public function post(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'POST', $params);
    }

    public function put(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'PUT', $params);
    }

    public function delete(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'DELETE', $params);
    }

    public function head(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'HEAD', $params);
    }

    public function patch(string $url, array $params = []): Response
    {
        return $this->sendRequest($url, 'PATCH', $params);
    }

    public function timeout(float $timeout): static
    {
        $this->configs['timeout'] = $timeout;
        return $this;
    }

    public function connectTimeout(float $timeout): static
    {
        $this->configs['connect_timeout'] = $timeout;
        return $this;
    }

    public function withBasicAuth(string $username, string $password): static
    {
        $this->username = $username;
        $this->password = $password;
        return $this;
    }

    public function withHeaders(array $headers): static
    {
        foreach ($headers as $key => $value) {
            $this->withHeader($key, $value);
        }
        return $this;
    }

    public function withHeader(string $key, string $value): static
    {
        $this->headers[$key] = $value;
        return $this;
    }

    public function withToken(string $token): static
    {
        return $this->withHeader('Authorization', "Bearer $token");
    }

    public function withApiKey(string $key): static
    {
        return $this->withHeader('X-Api-Key', $key);
    }

    public function asJson(): static
    {
        return $this->withHeader('Content-Type', 'application/json; charset=UTF-8');
    }

    public function asForm(): static
    {
        return $this->withHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    public function accept(string $type): static
    {
        return $this->withHeader('Accept', $type);
    }

    public function acceptJson(): static
    {
        return $this->accept('application/json; charset=UTF-8');
    }

    public function attach(
        string $path,
        string $name,
        ?string $mimeType = null,
        ?string $fileName = null,
        int $offset = 0,
        int $length = 0
    ): static
    {
        $this->withHeader('Content-Type', 'multipart/form-data');
        $this->files[$path] = [
            $name,
            $mimeType,
            $fileName,
            $offset,
            $length
        ];
        return $this;
    }

    public function replaceHeaders(array $headers): static
    {
        $this->headers = [];
        return $this->withHeaders($headers);
    }

    protected function sendRequest(string $url, string $method, array $params = []): Response
    {
        $urlInfo = parse_url($url);
        $host = $urlInfo['host'] ?? $urlInfo['path'];
        if (
            (empty($urlInfo['host']) && !empty($urlInfo['path']))
            || (!empty($urlInfo['host']) && empty($urlInfo['path']))
        ) {
            $path = '/';
        } else {
            $path = $urlInfo['path'];
        }

        if (isset($urlInfo['query']) && in_array($method, ['GET', 'HEAD'])) {
            parse_str($urlInfo['query'], $query);
            $this->query = array_merge($this->query, $query, $params);
        }

        if ($this->version == 2) {
            $swooleClient = new Http2Client($host);
        } else {
            $swooleClient = new Client($host, 443, true);
        }

        if (!empty($this->headers)) {
            $swooleClient->setHeaders($this->headers);
        }

        if (in_array($method, ['POST', 'PUT', 'DELETE', 'PATCH'])) {
            $swooleClient->setData(json_encode($params));
        }

        foreach ($this->files as $path => $file) {
            $swooleClient->addFile($path, ...$file);
        }

        $swooleClient->set($this->configs);
        $swooleClient->setMethod($method);

        if (!empty($this->username)) {
            $swooleClient->setBasicAuth($this->username, $this->password);
        }

        $swooleClient->execute($path);
        $swooleClient->close();

        return new Response($swooleClient);
    }
}