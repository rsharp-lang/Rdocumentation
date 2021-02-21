/// <reference path="linq.d.ts" />
declare module app {
    function start(): void;
}
declare namespace pages {
    abstract class AppBase extends Bootstrap {
        protected init(): void;
        abstract runInit(): any;
        cookieBannerRemove(): void;
    }
}
declare namespace pages.blog {
    class BlogReader extends AppBase {
        get appName(): string;
        runInit(): void;
    }
}
