<?php

return array(
    'bjyauthorize' => array(
        'default_role' => 'guest',
        'identity_provider' => 'BjyAuthorize\Provider\Identity\AuthenticationDoctrineEntity',
        'role_providers' => array(
            'BjyAuthorize\Provider\Role\Config' => array(
                'guest' => array(),
                'user'  => array('children' => array(
                    'admin' =>  array(),
                ))
            ),

            'BjyAuthorize\Provider\Role\DoctrineEntity' => array(
                'role_entity_class' => 'PlaygroundUser\Entity\Role',
            ),
        ),

        'resource_providers' => array(
            'BjyAuthorize\Provider\Resource\Config' => array(
                'core'      => array(),
                'admin'     => array(),
                'user'      => array(),
            ),
        ),

        'rule_providers' => array(
            'BjyAuthorize\Provider\Rule\Config' => array(
                'allow' => array(
                    array(array('admin'), 'core',   array('dashboard', 'edit')),
                    array(array('admin'), 'user',   array('list','add','edit','delete')),
                ),
            ),
        ),

        'guards' => array(
            'BjyAuthorize\Guard\Controller' => array(
                array('controller' => 'playgrounduser_user',                               'roles' => array('guest', 'user')),
                array('controller' => 'playgrounduser_forgot',                             'roles' => array('guest', 'user')),
             
                // CRON / Console
                array('controller' => 'AsseticBundle\Controller\Console',                  'roles' => array('guest', 'user')),
                array('controller' => 'DoctrineModule\Controller\Cli',                     'roles' => array('guest', 'user')),
                array('controller' => 'playgroundcore_console',                            'roles' => array('guest', 'user')),
              
                // Admin area
                array('controller' => 'playgrounduseradmin_login',                          'roles' => array('guest', 'admin')),
                array('controller' => 'playgrounduseradmin',                                'roles' => array('admin')),
                array('controller' => 'PlaygroundDesign\Controller\Dashboard',              'roles' => array('admin')),
                array('controller' => 'PlaygroundTranslate\Controller\Admin\TranslateAdmin','roles' => array('admin')),
            ),
        ),
    ),
);