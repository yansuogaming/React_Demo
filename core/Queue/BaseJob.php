<?php

namespace Vietiso\Core\Queue;

abstract class BaseJob
{
    public int $retries = 1;

    protected $channel;

    protected $queue;

    protected $message;
    
    public function setChannel($channel): static
    {
        $this->channel = $channel;
        return $this;
    }

    public function setQueue($queue): static
    {
        $this->queue = $queue;
        return $this;
    }

    public function setMessage($message): static
    {
        $this->message = $message;
        return $this;
    }

    public function getBody()
    {
        return $this->message->getBody();
    }

    public function getJson(): array|false
    {
        $body = $this->message->getBody();
        $body = json_decode($body, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            return $body;
        }
        return false;
    }

    public function delete()
    {
        $this->queue->ack($this->message->getDeliveryTag());
    }

    abstract public function handle(): void;
}