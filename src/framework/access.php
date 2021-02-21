<?php

imports("MVC.controller");

class accessController extends controller {

    public function accessControl() {
        return true;
    }

    public function Redirect($code) {

    }
}