<?php

namespace Vietiso\Core\Queue\Transport\AMQP;

use Vietiso\Core\Queue\Exception\LogicException;

class Connection
{
    protected $amqpConnection;

    /**
     * Create an instance of AMQPConnection.
     *
     * Creates an AMQPConnection instance representing a connection to an AMQP
     * broker. A connection will not be established until
     * AMQPConnection::connect() is called.
     *
     *  $connectionOptions = array(
     *      'host'  => amqp.host The host to connect too. Note: Max 1024 characters.
     *      'port'  => amqp.port Port on the host.
     *      'vhost' => amqp.vhost The virtual host on the host. Note: Max 128 characters.
     *      'login' => amqp.login The login name to use. Note: Max 128 characters.
     *      'password' => amqp.password Password. Note: Max 128 characters.
     *      'read_timeout'  => Timeout in for consume. Note: 0 or greater seconds. May be fractional.
     *      'write_timeout' => Timeout in for publish. Note: 0 or greater seconds. May be fractional.
     *      'connect_timeout' => Connection timeout. Note: 0 or greater seconds. May be fractional.
     *      'rpc_timeout' => Timeout for RPC-style AMQP methods. Note: 0 or greater seconds. May be fractional.
     *
     *      Connection tuning options (see http://www.rabbitmq.com/amqp-0-9-1-reference.html#connection.tune for details):
     *      'channel_max' => Specifies highest channel number that the server permits. 0 means standard extension limit
     *                       (see PHP_AMQP_MAX_CHANNELS constant)
     *      'frame_max'   => The largest frame size that the server proposes for the connection, including frame header
     *                       and end-byte. 0 means standard extension limit (depends on librabbimq default frame size limit)
     *      'heartbeat'   => The delay, in seconds, of the connection heartbeat that the server wants.
     *                       0 means the server does not want a heartbeat. Note, librabbitmq has limited heartbeat support,
     *                       which means heartbeats checked only during blocking calls.
     *
     *      TLS support (see https://www.rabbitmq.com/ssl.html for details):
     *      'cacert' => Path to the CA cert file in PEM format..
     *      'cert'   => Path to the client certificate in PEM foramt.
     *      'key'    => Path to the client key in PEM format.
     *      'verify' => Enable or disable peer verification. If peer verification is enabled then the common name in the
     *                  server certificate must match the server name. Peer verification is enabled by default.
     *
     *      'connection_name' => A user determined name for the connection
     * )
     */
    public function __construct(#[\SensitiveParameter] protected array $connectionOptions)
    {
        if (!\extension_loaded('amqp')) {
            throw new LogicException(\sprintf(
                'You cannot use the "%s" as the "amqp" extension is not installed.',
                __CLASS__
            ));
        }

        $this->amqpConnection = new \AMQPConnection($connectionOptions);
        if (!empty($connectionOptions['persistent'])) {
            $this->amqpConnection->pconnect();
        }
        $this->amqpConnection->connect();
    }

    public function channel()
    {
        return $channel = new \AMQPChannel($this->amqpConnection);
    }
}