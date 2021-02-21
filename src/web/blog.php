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
            "content" => "
                # test header
                ## test header2

                |a|b|c|
                |-|-|-|
                |a|a|a|
                |b|b|b|
            "
        ];

        View::Display($blog_data);
    }
}