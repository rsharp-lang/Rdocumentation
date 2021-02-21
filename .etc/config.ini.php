<?php

if (!defined("AppViews")) {
    define("AppViews", dirname(__DIR__) . "/src/views");
}

/**
 * 配置文件
*/
return [

    // 默认的数据库连接参数配置
	//
	// 使用默认的数据库配置：  $query = (new Table("tableName"))->where([....])->select();
	// 
    'DB_TYPE' => 'mysql',
    'DB_HOST' => "127.0.0.1",
    'DB_NAME' => '',
    'DB_USER' => '',
    'DB_PWD'  => '',
    'DB_PORT' => '3306',
    
    // 框架配置参数
	"ERR_HANDLER_DISABLE" => "FALSE",
	"RFC7231"       => AppViews . "/http_errors/",
    "CACHE" => FALSE,
    "CACHE.MINIFY" => FALSE,
    "APP_NAME" => "Rdocumentation",
    "APP_TITLE" => "R# documentation",
    "APP_VERSION" => "2.3.111.13-alpha",
	"MVC_VIEW_ROOT" => [
        "index" => AppViews,
        "blog" => AppViews . "/blog",
        "rdocs" => AppViews . "/rdocs"
    ]
];