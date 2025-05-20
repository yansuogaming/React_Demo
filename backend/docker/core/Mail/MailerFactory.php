<?php

namespace Vietiso\Core\Mail;

use Symfony\Component\Mailer\Bridge\Mailtrap\Transport\MailtrapTransportFactory;
use Symfony\Component\Mailer\Transport\Smtp\EsmtpTransportFactory;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mailer\Transport\RoundRobinTransport;
use Symfony\Component\Mailer\Transport\Dsn;
use Vietiso\Core\Macro\Macroable;
use Vietiso\Core\Support\Manager;
use Vietiso\Core\Log\Log;

class MailerFactory extends Manager
{
    use Macroable;

    public function getDefaultDriver(): string
    {
        return config('mail.default');
    }

    protected function getConfigDriver(string $driver): array
    {
        return config("mail.mailers.$driver");
    }

    public function createSmtpDriver(bool $returnMailer = true): Mailer|TransportInterface
    {
        $config = $this->getConfigDriver('smtp');
        $dsn = new Dsn(
            $config['scheme'],
            $config['host'],
            $config['username'],
            $config['password']
        );
        $transport = (new EsmtpTransportFactory(logger: Log::get()))->create($dsn);
        return $this->getMailerOrTransport($transport, $returnMailer);
    }

    public function createMailtrapDriver(bool $returnMailer = true): Mailer|TransportInterface
    {
        $config = $this->getConfigDriver('mailtrap');
        $dsn = new Dsn(
            $config['scheme'],
            $config['host']
        );
        $transport = (new MailtrapTransportFactory(logger: Log::get()))->create($dsn);
        return $this->getMailerOrTransport($transport, $returnMailer);
    }

    protected function getMailerOrTransport(TransportInterface $transport, bool $returnMailer = true): Mailer|TransportInterface
    {
        if ($returnMailer) {
            return new Mailer($transport); 
        }
        return $transport;
    }

    public function createRoundrobinDriver(): Mailer
    {
        $drivers = config('mail.mailers.roundrobin');
        $transports = array_map(function ($driver) {
            return $this->driver($driver, [false]);
        }, $drivers);

        $transport = new RoundRobinTransport($transports);
        return $this->getMailerOrTransport($transport);
    }
}