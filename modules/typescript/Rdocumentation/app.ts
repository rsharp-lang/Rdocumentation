///<reference path="../../build/linq.d.ts" />

module app {

    export function start() {
        Router.AddAppHandler(new pages.blog.BlogReader());

        Router.RunApp();
    }
}

$ts.mode = Modes.debug;
$ts(app.start);