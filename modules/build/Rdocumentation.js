var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="../../build/linq.d.ts" />
var app;
(function (app) {
    function start() {
        Router.AddAppHandler(new pages.blog.BlogReader());
        Router.RunApp();
    }
    app.start = start;
})(app || (app = {}));
$ts.mode = Modes.debug;
$ts(app.start);
var pages;
(function (pages) {
    var cookieName = "cookie-checked";
    var cookieAccept = "accept";
    var AppBase = /** @class */ (function (_super) {
        __extends(AppBase, _super);
        function AppBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppBase.prototype.init = function () {
            var cookieValue;
            if (!isNullOrUndefined(cookieValue = localStorage.getItem(cookieName)) && cookieValue == cookieAccept) {
                $ts("#cookie-banner").hide();
            }
            else {
                $ts("#cookie-banner").show();
            }
            this.runInit();
        };
        AppBase.prototype.cookieBannerRemove = function () {
            $ts("#cookie-banner").hide();
            // write lock
            localStorage.setItem(cookieName, cookieAccept);
        };
        return AppBase;
    }(Bootstrap));
    pages.AppBase = AppBase;
})(pages || (pages = {}));
var pages;
(function (pages) {
    var blog;
    (function (blog) {
        var BlogReader = /** @class */ (function (_super) {
            __extends(BlogReader, _super);
            function BlogReader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(BlogReader.prototype, "appName", {
                get: function () {
                    return "BlogReader";
                },
                enumerable: false,
                configurable: true
            });
            BlogReader.prototype.runInit = function () {
            };
            return BlogReader;
        }(pages.AppBase));
        blog.BlogReader = BlogReader;
    })(blog = pages.blog || (pages.blog = {}));
})(pages || (pages = {}));
//# sourceMappingURL=Rdocumentation.js.map