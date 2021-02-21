namespace pages {

    const cookieName: string = "cookie-checked"
    const cookieAccept: string = "accept";

    export abstract class AppBase extends Bootstrap {

        protected init() {
            let cookieValue: string;

            if (!isNullOrUndefined(cookieValue = localStorage.getItem(cookieName)) && cookieValue == cookieAccept) {
                $ts("#cookieBannerRemove").hide();
            } else {
                $ts("#cookieBannerRemove").show();
            }

            this.runInit();
        }

        abstract runInit();

        public cookieBannerRemove() {
            $ts("#cookieBannerRemove").hide();
            // write lock
            localStorage.setItem(cookieName, cookieAccept);
        }
    }
}


