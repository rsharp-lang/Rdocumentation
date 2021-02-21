<?php

define("__ROOT__", realpath(dirname(__DIR__) . "/../"));
define("__CONFIG__", __ROOT__ . "/.etc/config.ini.php");
define("__FRAMEWORK__", __ROOT__ . "/modules/php.NET/package.php");

# load framework source files
include __FRAMEWORK__;
include __DIR__ . "/access.php";
include __DIR__ . "/framework.php";

# run web app
dotnet::AutoLoad(__CONFIG__);
dotnet::HandleRequest(new App(), new accessController());