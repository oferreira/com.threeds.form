namespace Com.Threeds.Http {

    export class Request {

        public static getParam(param:string):string {
            let vars:any = {};
            window.location.href.replace(
                /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
                function (m, key, value) { // callback
                    vars[key] = value !== undefined ? value : '';
                }
            );

            if (param) {
                return vars[param] ? vars[param] : null;
            }

            return vars;
        }
    }
}