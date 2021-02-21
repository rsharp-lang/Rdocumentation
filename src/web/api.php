<?php

include dirname(__DIR__) . "/../src/framework/bootstrap.php";

class App {

    public function index() {

    }

    /**
     * get blog article content
     * 
     * @uses text
     * 
    */
    public function content($id) {
        echo "
# test header
## test header2

|a|b|c|
|-|-|-|
|a|a|a|
|b|b|b|

```R
let hello_world as function() {
    print(\"hello world!\");    
}
```


this is the content text.
        ";
    }
}