namespace pages.blog {

    export class BlogReader extends AppBase {

        public get appName(): string {
            return "BlogReader";
        }

        runInit() {
            $ts.getText("@data:markdown", function (md) {
                $ts("#blog_content").display(marked(md));
            });
        }
    }
}