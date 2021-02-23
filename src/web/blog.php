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
        $blog_data = [
            "title" => "test title",
            "sub_title" => "test secondary title",
            "content" => ""
        ];

        View::Display($blog_data);
    }

    public function write() {
        View::Display();
    }
}