<?php

include dirname(__DIR__) . "/../src/framework/bootstrap.php";

class App {

    /**
     * get typescript build js file
     * 
     * /typescripts/file.js
     * 
     * @uses file
     * @access *
    */
    public function typescripts($file) {
        $file = __ROOT__ . "/modules/build/$file";

        if (file_exists($file)) {
            Utils::PushDownload($file);
        } else {
            dotnet::PageNotFound(basename($file) . " is not exists on the server file system...");
        }
    }
}