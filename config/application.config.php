<?php
return array(
    // This should be an array of module namespaces used in the application.
    'modules' => array(
        'DoctrineModule',
        'DoctrineORMModule',
        'DoctrineDataFixtureModule',
        //'OcraCachedViewResolver',
        'ZendDeveloperTools',
        'Jhu\ZdtLoggerModule',
        'PlaygroundTemplateHint',
        'AsseticBundle',
        'ZfcBase',
        'ZfcUser',
        'BjyAuthorize',
        'PlaygroundCore',
        'PlaygroundDesign',
        'PlaygroundUser',
        'PlaygroundTranslate',
    ),

    // These are various options for the listeners attached to the ModuleManager
    'module_listener_options' => array(
        // This should be an array of paths in which modules reside.
        // If a string key is provided, the listener will consider that a module
        // namespace, the value of that key the specific path to that module's
        // Module class.
        'module_paths' => array(
            './module',
            './vendor',
        ),

        // An array of paths from which to glob configuration files after
        // modules are loaded. These effectively override configuration
        // provided by modules themselves. Paths may use GLOB_BRACE notation.
        'config_glob_paths' => array(
            'config/autoload/{,*.}{global,local}.php',
        ),

        'config_cache_enabled' => false,
        
        // The key used to create the configuration cache file name.
        'config_cache_key' => 'playground_config',
        
        // Whether or not to enable a module class map cache.
        // If enabled, creates a module class map cache which will be used
        // by in future requests, to reduce the autoloading process.
        'module_map_cache_enabled' => false,
        
        // The key used to create the class map cache file name.
        'module_map_cache_key' => 'playground_map',
        
        // The path in which to cache merged configuration.
        'cache_dir' => './data/cache',
    ),

    // Used to create an own service manager. May contain one or more child arrays.
    //'service_listener_options' => array(
    //     array(
    //         'service_manager' => $stringServiceManagerName,
    //         'config_key'      => $stringConfigKey,
    //         'interface'       => $stringOptionalInterface,
    //         'method'          => $stringRequiredMethodName,
    //     ),
    // )

   // Initial configuration with which to seed the ServiceManager.
   // Should be compatible with Zend\ServiceManager\Config.
   // 'service_manager' => array(),
);
