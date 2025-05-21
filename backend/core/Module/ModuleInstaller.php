<?php

namespace Vietiso\Core\Module;

use Symfony\Component\Finder\Finder;
use Vietiso\Core\Console\Application as ConsoleApplication;
use Vietiso\Core\Middleware\MiddlewareCollection;
use Vietiso\Core\Route\RouteCollectionInterfade;
use Vietiso\Core\Console\Input;
use Vietiso\Core\Console\Output;
use Vietiso\Core\App;

class ModuleInstaller
{
    public function __construct(
        protected ModuleManager $modules,
        protected RouteCollectionInterfade $routeCollection,
        protected ConsoleApplication $console,
        protected Input $consoleInput,
        protected Output $consoleOutput,
        protected MiddlewareCollection $middlewares
    ) {}

    /**
     * Cài đặt module cho ứng dụng.
     */
    public function install(): void
    {
        $finder = new Finder();
        $finder->files()->in(join_paths(App::root(), 'modules'))->name('/\.module\.php$/');
        if ($finder->hasResults()) {
            $moduleList = [];
            foreach ($finder as $file) {
                $folderName = basename(dirname($file->getRealPath()));
                $fileName = basename($file->getRealPath(), ".module.php");
                if ($folderName === $fileName) {
                    $moduleList[$folderName] = new Module($file->getRealPath());
                }
            }

            $functionExtends = $this->modules->getExtends();
            foreach ($moduleList as $key => $module) {
                if ($module->getName()) {
                    $this->registerAutoload($module->getPath());
                    $this->modules->add($key, $module);

                    foreach ($module->getCommands() as $command) {
                        $this->console->add(new $command($this->consoleInput, $this->consoleOutput));
                    }
    
                    foreach ($module->getMiddlewares() as $middleware) {
                        $this->middlewares->add($middleware, $module->getId());
                    }
    
                    foreach ($module->getControllers() as $controller) {
                        $this->routeCollection->register($controller, $module);
                    }
    
                    foreach ($functionExtends as $key => $func) {
                        $config = $module->getConfig($key);
                        if (!empty($config)) {
                            $func($config);
                        }
                    }
                }
            }
        }
    }

    protected function registerAutoload($pathModule)
    {
        spl_autoload_register(function ($class) use ($pathModule) {
            if (strpos($class, 'Vietiso\Modules') === 0) {
                $segments = array_slice(explode("\\", $class), 3);
                $file = join_paths($pathModule, 'src', join_paths(...$segments) . '.php');
                if (file_exists($file)) {
                    require $file;
                }
            }
        });
    }
}