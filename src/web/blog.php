<?php

include dirname(__DIR__) . "/../src/framework/bootstrap.php";

class App {
    
    /**
     * View blog post
     * 
     * View blog post
     * 
     * @uses view
    */
    public function index() {
        View::Display([
            "title" => "title"            
        ]);
    }
}