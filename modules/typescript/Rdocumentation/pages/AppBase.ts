namespace pages {

    const cookieName: string = "cookie-checked"
    const cookieAccept: string = "accept";

    export abstract class AppBase extends Bootstrap {

        protected init() {
            let cookieValue: string;

            if (!isNullOrUndefined(cookieValue = localStorage.getItem(cookieName)) && cookieValue == cookieAccept) {
                $ts("#cookie-banner").hide();
            } else {
                $ts("#cookie-banner").show();
            }

            this.runInit();
        }

        abstract runInit();

        public cookieBannerRemove() {
            $ts("#cookie-banner").hide();
            // write lock
            localStorage.setItem(cookieName, cookieAccept);
        }
    }
}


