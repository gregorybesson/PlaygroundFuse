<?php
return array(
	'assetic_configuration' => array(
		'modules' => array(
			'admin_default_playground' => array(
				'root_path' => array(
					__DIR__ . '/../../../../design/admin/default/playground/assets',
				),
				'collections' => array(
				    
                    'admin_images' => array(
                        'assets' => array(
                            'images/*.ico',
                            'images/**/*.gif',
                            'images/**/*.jpg',
                            'images/**/*.png',
                        ),
                        'options' => array(
                            'move_raw' => true,
                            'output' => 'zfcadmin/',
                        ),
                    ),
                    
                    'admin_fonts' => array(
                        'assets' => array(
                            'fonts/*.eot',
                            'fonts/*.svg',
                            'fonts/*.ttf',
                            'fonts/*.woff',
                        ),
                        'options' => array(
                            'move_raw' => true,
                            'output' => 'zfcadmin/',
                        ),
                    ),
                    
                    /**
                     * MAIN CSS FILES
                     */
                    'playground_css' => array(
                        'assets' => array(
                            'bootstrap.min.css'              => 'css/lib/bootstrap.min.css',
                            'bootstrap-switch.min.css'       => 'css/lib/bootstrap-switch.css',
                            'bootstrap-multiselect.css'      => 'css/lib/bootstrap-multiselect.css',
                            'datepicker.css'                 => 'css/lib/datepicker.css',
                            'isotope.css'                    => 'css/isotope.css',
                            'style.css'                      => 'css/style.css',
                        ),
                        'options' => array(
                            'output' => 'zfcadmin/css/playground'
                        ),
                    ),
                    
                    /**
                     * MAIN JS FILES
                     */
                    'playground_js' => array(
                        'assets' => array(
                            'jquery-1.10.2.min.js'          => 'js/lib/jquery-1.10.2.min.js',
                            //'jquery-1.10.2.min.map'          => 'js/lib/jquery-1.10.2.min.map',
                            'bootstrap.min.js'              => 'js/lib/bootstrap.min.js',
                            'bootstrap-switch.min.js'       => 'js/lib/bootstrap-switch.min.js',
                            'bootstrap-multiselect.js'      => 'js/lib/bootstrap-multiselect.js',
                            'bootstrap-datepicker.js'       => 'js/lib/bootstrap-datepicker.js',
                            'isotope.min.js'                => 'js/lib/jquery.isotope.min.js',
                            'main.js'                       => 'js/main.js',
                        ),
                        'filters' => array(),
                        'options' => array(
                            'output' => 'zfcadmin/js/script_playground'
                        ),
                    ),
                    
                    /**
                     * USER CSS FILES
                     */
                    'playground_user_css' => array(
                        'assets' => array(
                            'user-style.css'                      => 'css/playground-user/style.css',
                        ),
                        'options' => array(
                            'output' => 'zfcadmin/css/user'
                        ),
                    ),
                    
                   
                    /**
                     * CKEDITOR
                     */
                    'admin_ckeditor' => array(
                        'assets' => array(
                            'js/lib/ckeditor/*',
                            'js/lib/ckeditor/**/*',
                            'js/lib/ckeditor/**/**/*',
                            'js/lib/ckeditor/**/**/**/*',
                            'js/ckeditor-custom/*',
                            'js/ckeditor-custom/**/*',
                            'css/ckeditor-custom/*',
                        ),
                        'options' => array(
                            'move_raw' => true,
                            'output' => 'zfcadmin',
                        )
                    ),
				),
			),
		),
        
        'routes' => array(
            'admin.*' => array(
                '@playground_css',
                '@playground_js',
            ),
            'admin' => array(
                '@playground_user_css',
            ), 
        ),
	),
);