<?php

use Vietiso\Core\App;
use Vietiso\Core\Watcher\Event;
use Vietiso\Core\Watcher\Watcher;

$basePath = dirname(__FILE__, 2);

require "$basePath/core/constants.php";
require "$basePath/core/functions.php";
require "$basePath/vendor/autoload.php";
$config = require "$basePath/config/watcher.php";

$regex = join('|', array_map(function ($regex) {
    return "($regex)";
}, $config['watches']));

App::getInstance()->setBasePath($basePath);
$watcher = Watcher::create((bool) $config['use_polling']);
if ($config['use_polling']) {
    /** @var \Vietiso\Core\Watcher\Driver\Polling $watcher */
    $watcher->setTimeInterval(!empty($config['interval']) ? $config['interval'] : 300);
}
$watcher
->add(App::root(), !empty($regex) ? $regex : null)
->on([Event::CHANGE, Event::ADD, Event::ADD_DIR, Event::UNLINK], function ($event, $path) {
    echo "Reload";
})
->run();