/*! 
 * AMapJS v0.1.1
 *
 * Copyright (c) 2018 Derry Li
 * Released under the MIT License - https://github.com/derry-li/amap-js/LICENSE
 *
 * https://github.com/derry-li/amap-js
  */
!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.AMapJS = n() : t.AMapJS = n();
}(window, function() {
    return function(e) {
        var o = {};
        function r(t) {
            if (o[t]) return o[t].exports;
            var n = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
        }
        return r.m = e, r.c = o, r.d = function(t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            });
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(n, t) {
            if (1 & t && (n = r(n)), 8 & t) return n;
            if (4 & t && "object" == typeof n && n && n.__esModule) return n;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n) for (var o in n) r.d(e, o, function(t) {
                return n[t];
            }.bind(null, o));
            return e;
        }, r.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(n, "a", n), n;
        }, r.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, r.p = "", r(r.s = 0);
    }([ function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(1);
        n.default = o.default;
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(2), r = e(5);
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        var a, c, u, f = (a = "undefined" != typeof window ? window : void 0, c = a, u = {
            version: "0.1.1",
            load: function(t) {
                var o = [];
                return t.forEach(function(t) {
                    var n;
                    "object" === i(t) && t.load && (n = t.load());
                    var e = Object.prototype.toString.call(n);
                    if (!("[object Promise]" === e || n instanceof Promise)) throw Error("".concat(t, " 不是一个Promise对象或者由它的load函数包装得到的一个Promise对象"));
                    o.push(n);
                }), Promise.all(o);
            },
            loaders: {
                AMapJSAPILoader: o.default,
                AMapUILoader: r.default
            }
        }, c.AMapJS = u);
        n.default = f;
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "AMapJSAPIload", function() {
            return p;
        });
        var i = e(3), o = e(4);
        function r(t, n) {
            for (var e = 0; e < n.length; e++) {
                var o = n[e];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var a, c, u, f, l, s = (a = "undefined" != typeof window ? window : void 0, u = (c = a).document, 
        f = {
            key: null,
            v: "1.4.8",
            protocol: "https:",
            hostAndPath: "webapi.amap.com/maps",
            callback: "onAMapLoaded"
        }, (l = function() {
            function e(t) {
                !function(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
                var n = e;
                this.config = o.default.assign({}, n.config, t), this.src = this._getScriptSrc();
            }
            var t, n;
            return n = [ {
                key: "_initStatic",
                value: function() {
                    o.default.assign(e, {
                        config: f
                    });
                }
            } ], r((t = e).prototype, [ {
                key: "load",
                value: function() {
                    if (this._checkWhetherAMapIsSound()) return Promise.resolve(c.AMap);
                    var e = this.config, o = u.createElement("script");
                    o.charset = "utf-8", o.type = "text/javascript", o.async = !0, o.defer = !0, o.src = this.src;
                    var t = new Promise(function(t, n) {
                        c[e.callback] = function() {
                            return t(c.AMap);
                        }, o.onerror = function(t) {
                            return n(t);
                        };
                    });
                    return u.head.appendChild(o), t;
                }
            }, {
                key: "_checkWhetherAMapIsSound",
                value: function() {
                    return !(!c.AMap || !c.AMap.Map);
                }
            }, {
                key: "_getScriptSrc",
                value: function() {
                    var t = this.config, n = Object(i.default)({
                        v: t.v,
                        key: t.key,
                        callback: t.callback
                    }), e = t.protocol, o = t.hostAndPath, r = "".concat(e, "//").concat(o, "?").concat(n);
                    return r;
                }
            } ]), n && r(t, n), e;
        }())._initStatic(), l);
        function p(t) {
            return new s(t).load();
        }
        n.default = s;
    }, function(t, n, e) {
        "use strict";
        e.r(n), n.default = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "?" : "", o = [], n = function(n) {
                var t = e[n];
                if ([ "", void 0, null ].includes(t)) return "continue";
                t.constructor === Array ? t.forEach(function(t) {
                    o.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(t));
                }) : o.push(encodeURIComponent(n) + "=" + encodeURIComponent(t));
            };
            for (var r in e) n(r);
            return o.length ? t + o.join("&") : "";
        };
    }, function(t, n, e) {
        "use strict";
        e.r(n), n.default = {
            assign: function(t) {
                if (void 0 === t) throw Error("Cannot convert undefined or null to object");
                function n(t, n) {
                    for (var e in n) t[e] = n[e];
                    return t;
                }
                for (var e = 1, o = arguments.length; e < o; e++) n(t, arguments[e]);
                return t;
            }
        };
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "AMapUILoad", function() {
            return s;
        });
        var o = e(4);
        function r(t, n) {
            for (var e = 0; e < n.length; e++) {
                var o = n[e];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var i, a, c, u, f, l = (i = "undefined" != typeof window ? window : void 0, c = (a = i).document, 
        u = {
            v: "1.0",
            protocol: "https:",
            hostAndPath: "webapi.amap.com/ui/{v}/main-async.js",
            AMapUIProtocol: void 0,
            isAutoInitAMapUI: !1
        }, (f = function() {
            function e(t) {
                !function(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
                var n = e;
                this.config = o.default.assign({
                    init: "initAMapUI"
                }, n.config, t), "string" == typeof this.config.AMapUIProtocol && (a.AMapUIProtocol = "https:" === this.config.AMapUIProtocol ? "https:" : "http:"), 
                this.src = this._getScriptSrc();
            }
            var t, n;
            return n = [ {
                key: "_initStatic",
                value: function() {
                    o.default.assign(e, {
                        config: u
                    });
                }
            } ], r((t = e).prototype, [ {
                key: "load",
                value: function() {
                    var o = this.config;
                    if (this._checkWhetherAMapUIIsSound()) {
                        var t = function() {
                            return a.AMapUI;
                        }, n = o.isAutoInitAMapUI ? t() : t;
                        return Promise.resolve(n);
                    }
                    var r = c.createElement("script");
                    r.charset = "utf-8", r.type = "text/javascript", r.async = !0, r.defer = !0, r.src = this.src;
                    var e = new Promise(function(e, n) {
                        r.onload = function() {
                            var t = function() {
                                return a[o.init]() || a.AMapUI;
                            }, n = o.isAutoInitAMapUI ? t() : t;
                            e(n);
                        }, r.onerror = function(t) {
                            return n(t);
                        };
                    });
                    return c.head.appendChild(r), e;
                }
            }, {
                key: "_checkWhetherAMapUIIsSound",
                value: function() {
                    return !!a.AMapUI;
                }
            }, {
                key: "_getScriptSrc",
                value: function() {
                    var t = this.config, n = t.protocol, e = t.hostAndPath.replace("{v}", t.v), o = "".concat(n, "//").concat(e);
                    return o;
                }
            } ]), n && r(t, n), e;
        }())._initStatic(), f);
        function s(t) {
            return new l(t).load();
        }
        n.default = l;
    } ]).default;
});