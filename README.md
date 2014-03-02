PlaygroundFuse
==================

Playground dev driven by Composer

This project is directly inspired by http://en.wikipedia.org/wiki/AppFuse

I wanted a ZF2 based framework with instant user / frontend / theme / admin / i18n management included. 
I wanted to create a Loyalty framework

Playground was born

Here you have playground/fuse, a Playground bootstrap rocketed with the best modules and extensions ever created by fabulous people.

This project aims to ease your life as a Playground dev :
- With Magento Fuse, you install a bootstrap version of Playground in just 1 line. The installation includes the database creation. Once installed, you're ready to develop the features your customer needs, not the infrastructure you need to do it properly : PlaygroundFuse is here for that !


##Composer
- core (https://github.com/gregorybesson/PlaygroundCore)
- design (https://github.com/gregorybesson/PlaygroundDesign)
- user (https://github.com/gregorybesson/PlaygroundUser)
- translate (https://github.com/gregorybesson/PlaygroundTranslate)


#Usage
## Create a new project

(you need root privileges)
```
composer create-project -s dev playground/fuse my-project
```
(Check available branches to know which versions of PlaygroundFuse are available)

This command will : 
- download the PlaygroundFuse config
- Install the playground/core module
- Install the playground/design module
- Install the playground/user module
- Install the playground/translate module


Once done, update your /etc/hosts file + your web server configuration. 

launch the install script (with root privileges)
```
./install.sh
```
Relaunch the web server, and you're ready to go !
