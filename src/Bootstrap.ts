interface Document {
    registerElement(tagName:string, implementation:any):any;
}

interface JQuery {
    masonry(data?:any, options?:any): JQuery;
    chosen(data?:any, options?:any): JQuery;
    imagesLoaded(data?:any, options?:any): JQuery;
    always(data?:any, options?:any): JQuery;
    done(data?:any, options?:any): JQuery;
    fail(data?:any, options?:any): JQuery;
    progress(data?:any, options?:any): JQuery;
    t(key:string):string;
}

interface JQueryStatic {
    namespace(name?:any, options?:any): JQuery;
    i18n(name?:any, options?:any): JQuery;
}


interface Object {
    find(o:any, s:string):boolean;
}

Object.prototype.find = function (o:any, s:string):boolean {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}