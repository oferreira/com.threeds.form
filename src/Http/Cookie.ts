

namespace Com.Threeds.Http {

    export class Cookie {
        public static _instance:Cookie;
        public settings:any = {
            domain:'3ds.com',
            lifetime: (60 * 60 * 24 * 1),
            path: '/',
        };

        constructor(options:Object) {
            this.settings = $.extend({}, this.settings, options);
        }

        public static instance(options:any):Cookie {
            if (Cookie._instance == undefined) {
                Cookie._instance = new Cookie(options);
            }

            return Cookie._instance;
        }

        get(name:string) {
            var nameEQ = name + "=";
            var ca = window.document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        set(name:string, value:string) {
            let date:any = new Date();
            date.setTime(date.getTime() + (this.settings.lifetime));
            let expires:string = "; expires=" + date.toGMTString();

            let cookie:string = name + "=" + value + expires + "; path=" + this.settings.path;
            if (this.settings.domain !== undefined && this.settings.domain !== null && this.settings.domain != '') {
                cookie += "; domain=" + this.settings.domain;
            }
            window.document.cookie = cookie;
        }
    }
}