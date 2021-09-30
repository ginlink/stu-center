webpackJsonp([11, 13], [,
function(t, n, a) {
    t.exports = a(2)(297)
},
function(t, n) {
    t.exports = commons
},
function(t, n, a) {
    t.exports = a(2)(1)
},
function(t, n, a) {
    t.exports = a(2)(311)
},
function(t, n) {
    "use strict";
    function a(t, n, a) {
        var r = "";
        if (t = "" + t, n = "" + n, !a) return t;
        var i = a - t.length;
        if (i <= 0) return t;
        for (;;) {
            if (1 === (1 & i) && (r += n), i >>>= 1, 0 === i) break;
            n += n
        }
        return r + t
    }
    function r(t) {
        try {
            return p && !M ? g === 1.1.toLocaleString(t).substring(1, 2) ? b: y: h.indexOf(t) === -1 ? b: y
        } catch(t) {
            return b
        }
    }
    function i(t) {
        return t.match(/[\.,]/g) || []
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, n) {
            var a = [],
            r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done) && (a.push(s.value), !n || a.length !== n); r = !0);
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l["return"] && l["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return a
        }
        return function(n, a) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    s = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    },
    u = {
        "fr": "fr-FR",
        "de": "de-DE",
        "ja": "ja",
        "cn": "zh",
        "tw": "zh",
        "en": "en-US",
        "ru": "ru-Latn",
        "it": "it"
    },
    c = {
        "fr": "EUR",
        "de": "EUR",
        "ja": "JPY",
        "cn": "CNY",
        "tw": "TWD",
        "en": "USD",
        "ru": "RUB",
        "it": "EUR"
    },
    d = {
        "fr": -1,
        "de": -1,
        "ja": 1,
        "cn": 1,
        "tw": 1,
        "en": 1,
        "ru": -1,
        "it": -1
    },
    f = {
        "EUR": ["€", "€"],
        "JPY": ["¥", "JP¥"],
        "TWD": ["NT$", "NT$"],
        "CNY": ["￥", "CNY"],
        "RUB": ["₽", "RUB"],
        "USD": ["$", "$"]
    },
    m = navigator.language ? navigator.language: navigator.userLanguage,
    p = !("object" !== ("undefined" == typeof Intl ? "undefined": l(Intl)) || !Intl || "function" != typeof Intl.NumberFormat),
    h = ["fr", "fr-FR", "fr-BE", "fr-CA", "fr-CH", "fr-LU", "it", "it-CH", "ru", "ru-Latn", "ru-MI", "de", "de-DE", "de-CH", "de-AT", "de-LU", "de-LI"],
    g = ".",
    v = ",",
    b = {
        decimal: g,
        group: v
    },
    y = {
        decimal: v,
        group: g
    },
    E = window.navigator.userAgent,
    C = E.match(/(Android);?[\s\/]+([\d.]+)?/),
    T = /micromessenger/i.test(E),
    S = /MQQBrowser/i.test(E) || / QQ/i.test(E),
    M = C && (T || S),
    I = u[m],
    N = m,
    A = s({
        decimal: ".",
        group: ","
    },
    r(I), {
        currency: c[I] || "USD"
    });
    n.
default = {
        preferCulture: function(t) {
            N = t,
            I = u[t] ? u[t] : t,
            A = s({},
            A, r(I), {
                currency: c[t] || "USD"
            })
        },
        getProperties: function() {
            return s({},
            A, {
                isPrefix: d[N] > 0
            })
        },
        localeNumberFormatter: function(t, n, r) {
            var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            n = isNaN( + n) ? null: n,
            r = isNaN( + r) ? null: r;
            var s = ("" + t).indexOf(".") > -1,
            l = parseFloat("" + t, 10);
            if (s || (l = Math.round(l)), isNaN(l)) return t;
            if (!isFinite(t)) return "" + t;
            var u = l,
            c = "" + (l || 0);
            if (/e\+/.test(c)) {
                var d = c.split("e+"),
                f = o(d, 2),
                m = f[0],
                p = f[1],
                h = m.indexOf("."),
                g = "";
                if ( + m < 0 && (g = "-"), h > -1) {
                    var _ = m.length - 1 - h;
                    c = g + _.replace(".", "") + a("", 0, p - _)
                }
            } else if (/e-/.test(c)) {
                var v = c.split("e-"),
                b = o(v, 2),
                y = b[0],
                E = b[1],
                C = ""; + y < 0 && (C = "-"),
                c = C + "0." + a("", 0, E - 1) + y.replace(".", "")
            }
            u = "";
            var T = c.split("."),
            S = o(T, 2),
            M = S[0],
            I = void 0 === M ? "": M,
            N = S[1],
            k = void 0 === N ? "": N;
            if (k) {
                var x = parseFloat("0." + k),
                D = Math.pow(10, r),
                O = null,
                P = null;
                r ? (x *= D, O = Math.floor(x), P = x - O) : (O = 0, P = x),
                P <= 1e-6 ? P = 0 : P >= .999999 && (O += 1, P = 0);
                var L = ("" + (O + P) / D).split(".");
                k = L[1],
                +L[0] > 0 && (I = "" + Math.round( + I + +L[0]))
            }
            for (var w = I.length; w > 3;) u = A.group + I.slice( - 3) + u,
            I = I.slice(0, w - 3),
            w = I.length;
            return I && (u = I + u),
            r && !isNaN( + r) && (k = (k || "").slice(0, +r)),
            n && !isNaN( + n) && +n > k.length && (k += a("", 0, +n - k.length)),
            0 === r && 0 === n && (k = ""),
            u += k ? A.decimal + k: "",
            u.replace(new RegExp("\\" + A.group, "g"), i ? " ": "")
        },
        localeCurrencyFormatter: function(t, n, a, r) {
            r || (r = A.currency);
            var i = +t;
            if (isNaN(i)) return t;
            if (!isFinite(i)) return "" + i;
            if (p) {
                var o = {
                    currency: r,
                    style: "currency"
                };
                _.isNumber(n) && (o.minimumFractionDigits = n),
                _.isNumber(a) && (o.maximumFractionDigits = a),
                _.isEmpty(o) && (o = void 0);
                var s = new Intl.NumberFormat(I, o);
                return s.format(i).replace(new RegExp("\\" + A.group, "g"), " ")
            }
            var l = "",
            u = "";
            if (r) {
                var m = c[N] !== r ? 1 : 0;
                d[N] > 0 ? l = f[r][m] : u = " " + f[r][m]
            }
            return l + this.localeNumberFormatter(t, n, a) + u
        },
        localeStringToNumber: function(t) {
            t = "" + t;
            var n = t.indexOf(".") > -1,
            a = n ? t.split(".")[1].length: 0,
            r = 0;
            if (h.indexOf(I) > -1 || A.decimal === v) if (i(t).length > 1) {
                var o = t.replace(/\s/g, "").replace(new RegExp("\\" + A.group, "g"), "").replace(new RegExp("\\" + A.decimal, "g"), g);
                r = +o
            } else {
                var s = t.replace(/\s/g, "").replace(/[\.,]/g, g);
                r = +s
            } else r = +t.replace(/\s|,/g, "");
            if (isNaN(r) || !isFinite(r)) return NaN;
            var l = n ? Math.pow(10, a) : 1;
            return r = Math.round(r * l) / l
        }
    },
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = a(22),
    s = r(o),
    l = a(19),
    u = r(l),
    c = a(23),
    d = r(c),
    f = a(63),
    m = r(f),
    p = a(65),
    h = r(p),
    g = {
        1 : "alipay",
        2 : "wechat_pay"
    },
    _ = {
        1 : m.
    default,
        2 : h.
    default
    },
    v = u.
default.createClass({
        displayName:
        "PaymentWorker",
        mixins: [d.
    default],
        render: function() {
            var t = this.props,
            n = t.type,
            a = i(t, ["type"]),
            r = _[n] || "div";
            return u.
        default.createElement("div", {
                className: (0, s.
            default)("pay_worker", g[n])
            },
            u.
        default.createElement(r, a))
        }
    });
    n.
default = v,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(6),
    o = r(i),
    s = a(19),
    l = r(s),
    u = a(23),
    c = r(u),
    d = a(17),
    f = a(8),
    m = a(64),
    p = navigator.userAgent.match(/QQ\//i),
    h = l.
default.createClass({
        displayName:
        "Alipay",
        mixins: [c.
    default],
        getInitialState: function() {
            return this.form = (0, d.getFormStructure)(),
            this.extensions = this.form.extensions,
            this.config = (0, d.getConfig)(),
            this.ifp = {},
            this.extensions.inFormPay && !this.props.prdMode && (this.ifp = this.extensions.inFormPayInfo),
            {}
        },
        renderAliPay: function() {
            var t = this.props.cashier,
            n = (0, d.getLang)(),
            a = f.deviceInfo.isFuzzyMobile,
            r = this.ifp.pvt;
            if (!a) {
                if (r) {
                    var i = null;
                    if (this.ifp.isKuaiQian) i = (t.rKq_qrPath || {}).rKq_qrPath;
                    else if (this.ifp.isQianFang) i = t.rQf_qrPath;
                    else if (this.ifp.isMikeMerchant) return i = t.rData_qr,
                    l.
                default.createElement(m.AliMixPayment, {
                        qrCode: i,
                        title: n.cPayAliPayQrCode,
                        url: t.rData_jump
                    });
                    return i ? l.
                default.createElement(m.QrCodePayment, {
                        qrCode: i,
                        title: n.cPayAliPayQrCode
                    }) : null
                }
                return l.
            default.createElement(m.AliMixPayment, {
                    qrCode: t.rData_host + t.rData_qr,
                    title: n.cPayAliPayQrCode,
                    url: t.rData_host + t.rData_jump
                })
            }
            if (!r) {
                if (p || this.config.isWx()) {
                    var s = o.
                default.omit(t, ["rData_qr", "inWechat", "type"]);
                    return l.
                default.createElement(m.MiddlewarePayment, {
                        params: s
                    })
                }
                return l.
            default.createElement(m.DirectPayment, {
                    url: t.rData_host + t.rData_jump
                })
            }
            if (this.ifp.isKuaiQian) {
                var u = o.
            default.omit(t, ["rData_qr", "inWechat", "type"]);
                return u.isKuaiQian = 1,
                l.
            default.createElement(m.MiddlewarePayment, {
                    params: u
                })
            }
            if (this.ifp.isQianFang) {
                if (t.rQf_jump) {
                    if (p || this.config.isWx()) {
                        var c = o.
                    default.omit(t, ["rData_qr", "inWechat", "type"]);
                        return c.isQianFang = 1,
                        l.
                    default.createElement(m.MiddlewarePayment, {
                            params: c
                        })
                    }
                    return l.
                default.createElement(m.DirectPayment, {
                        url: t.rQf_jump
                    })
                }
                return l.
            default.createElement(m.QrCodePayment, {
                    qrCode: t.rQf_qrPath,
                    title: n.cPayAliPayQrCode
                })
            }
            if (this.ifp.isMikeMerchant) {
                if (p || this.config.isWx()) {
                    var h = o.
                default.omit(t, ["rData_qr", "inWechat", "type"]);
                    return h.isMMS = 1,
                    l.
                default.createElement(m.MiddlewarePayment, {
                        params: h
                    })
                }
                return l.
            default.createElement(m.DirectPayment, {
                    url: t.rData_jump
                })
            }
        },
        render: function() {
            return l.
        default.createElement("div", {
                className: "pay_content alipay"
            },
            this.renderAliPay())
        }
    });
    n.
default = h,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.AliMixPayment = n.QrCodePayment = n.DirectPayment = n.MiddlewarePayment = void 0;
    var i = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    o = a(19),
    s = r(o),
    l = a(23),
    u = r(l),
    c = a(17),
    d = a(36),
    f = s.
default.createClass({
        displayName:
        "MiddlewarePayment",
        mixins: [u.
    default],
        render: function() {
            var t = this.props.params,
            n = "pg_wc/alipayInWc.php?d=" + encodeURIComponent(JSON.stringify(i({
                t: (0, c.getFormStructure)().token
            },
            t)));
            return s.
        default.createElement(m, {
                url: n
            })
        }
    }),
    m = s.
default.createClass({
        displayName:
        "DirectPayment",
        mixins: [u.
    default],
        render: function() {
            var t = this.props.url,
            n = (0, c.getLang)();
            return s.
        default.createElement("div", {
                className: "pay_method"
            },
            s.
        default.createElement(d.BaseBtn, {
                className: "fbc_button orange btn_goToPay",
                target: "_blank",
                href: t,
                rel: "noreferrer"
            },
            n.cPayGoToPay))
        }
    }),
    p = s.
default.createClass({
        displayName:
        "QrCodePayment",
        mixins: [u.
    default],
        render: function() {
            var t = this.props,
            n = t.qrCode,
            a = t.title;
            return s.
        default.createElement("div", {
                className: "pay_method onlyQRCode"
            },
            s.
        default.createElement("div", {
                className: "pay_qrCode"
            },
            s.
        default.createElement("p", {
                className: "pay_mTitle"
            },
            a), s.
        default.createElement("img", {
                className: "pay_mQRCode",
                src: n,
                style: {
                    maxWidth: "100%"
                }
            })), s.
        default.createElement("div", {
                className: "clearB"
            }))
        }
    }),
    h = s.
default.createClass({
        displayName:
        "AliMixPayment",
        mixins: [u.
    default],
        render: function() {
            var t = this.props,
            n = t.qrCode,
            a = t.url,
            r = t.title,
            i = (0, c.getLang)();
            return s.
        default.createElement("div", {
                className: "pay_method aliPay"
            },
            s.
        default.createElement("div", {
                className: "pay_aliWeb"
            },
            s.
        default.createElement("p", {
                className: "pay_mTitle"
            },
            i.cPayWebPay), s.
        default.createElement("div", {
                className: "pay_mImg"
            }), s.
        default.createElement(d.BaseBtn, {
                className: "btn_normal orange btn_goToPay",
                target: "_blank",
                href: a,
                rel: "noreferrer"
            },
            i.cPayGoToPay)), s.
        default.createElement("div", {
                className: "pay_aliQRCode"
            },
            s.
        default.createElement("p", {
                className: "pay_mTitle"
            },
            r), s.
        default.createElement("iframe", {
                className: "pay_mQRCode",
                scrolling: "no",
                frameBorder: "0",
                src: n
            })), s.
        default.createElement("div", {
                className: "clearB"
            }))
        }
    });
    n.MiddlewarePayment = f,
    n.DirectPayment = m,
    n.QrCodePayment = p,
    n.AliMixPayment = h
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(19),
    o = r(i),
    s = a(23),
    l = r(s),
    u = a(17),
    c = a(64),
    d = a(8),
    f = o.
default.createClass({
        displayName:
        "WeChatPay",
        mixins: [l.
    default],
        getInitialState: function() {
            return this.form = (0, u.getFormStructure)(),
            this.extensions = this.form.extensions,
            this.config = (0, u.getConfig)(),
            this.ifp = {},
            this.extensions.inFormPay && !this.props.prdMode && (this.ifp = this.extensions.inFormPayInfo),
            {}
        },
        renderWeChatPay: function() {
            var t = this.props.cashier,
            n = (0, u.getLang)(),
            a = this.ifp.pvt;
            if (a && this.ifp.isMikeMerchant && t.rWx_jump) {
                if (t.tkvQrUrl || t.tkvCode || t.redirectUrl) {
                    var r = (0, d.parseUrl)(t.rWx_jump),
                    i = (0, d.addUrlParams)(r.params.redirect_uri, {
                        rc: t.randomCode,
                        rdu: t.redirectUrl,
                        tkvc: t.tkvCode,
                        tkvqr: t.tkvQrUrl
                    });
                    return location.href = (0, d.addUrlParams)(t.rWx_jump, {
                        redirect_uri: i
                    }),
                    null
                }
                return location.href = (0, d.addUrlParams)(t.rWx_jump),
                null
            }
            if (a && this.ifp.isQianFang && t.rQf_jump) return o.
        default.createElement(c.DirectPayment, {
                url: t.rQf_jump
            });
            if (a && this.ifp.isKuaiQian && t.rKq_jump) return o.
        default.createElement(c.DirectPayment, {
                url: t.rKq_jump
            });
            if (t.rWx_jump) return o.
        default.createElement(c.DirectPayment, {
                url: t.rWx_jump
            });
            var s = null;
            return a ? this.ifp.isKuaiQian ? s = (t.rKq_qrPath || {}).rKq_qrPath: this.ifp.isQianFang ? s = t.rQf_qrPath: this.ifp.isMikeMerchant && (s = t.rWx_qrPath) : s = t.rWx_qrPath,
            s ? o.
        default.createElement(c.QrCodePayment, {
                qrCode: s,
                title: n.cPayWxPayQrCode
            }) : null
        },
        render: function() {
            return o.
        default.createElement("div", {
                className: "pay_content wechat-pay"
            },
            this.renderWeChatPay())
        }
    });
    n.
default = f,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.IFPSNormal = void 0;
    var i = a(22),
    o = r(i),
    s = a(19),
    l = r(s),
    u = a(23),
    c = r(u),
    d = a(17),
    f = a(38),
    m = "800180039",
    p = l.
default.createClass({
        displayName:
        "ContactUs",
        mixins: [c.
    default],
        handleOpenQQ: function() {
            window.open("http://q.url.cn/ab78yP?_type=wpa&qidian=true")
        },
        render: function() {
            var t = (0, d.getLang)();
            return l.
        default.createElement("div", {
                className: "pay_contactUs"
            },
            l.
        default.createElement("p", {
                className: "pay_cuTitle"
            },
            t.cContactUs), l.
        default.createElement("div", {
                className: "pay_cuInfo"
            },
            l.
        default.createElement("div", {
                className: "pay_cuInfoTr"
            },
            l.
        default.createElement("p", {
                className: "pay_cuItem"
            },
            l.
        default.createElement("i", {
                className: "iconfont pay_cuiIcon"
            },
            String.fromCharCode(59095)), l.
        default.createElement("a", {
                className: "pay_cuiVal",
                onClick: this.handleOpenQQ
            },
            m))), l.
        default.createElement("div", {
                className: "pay_cuInfoTr"
            },
            l.
        default.createElement("p", {
                className: "pay_cuItem"
            },
            l.
        default.createElement("i", {
                className: "iconfont pay_cuiIcon"
            },
            String.fromCharCode(59075)), l.
        default.createElement("a", {
                className: "pay_cuiVal",
                target: "_blank",
                rel: "noreferrer",
                href: "mailTo:service@mikecrm.com"
            },
            "service@mikecrm.com"))), l.
        default.createElement("div", {
                className: "clearB"
            })))
        }
    }),
    h = n.IFPSNormal = l.
default.createClass({
        displayName:
        "IFPSNormal",
        mixins: [c.
    default],
        render: function() {
            var t = (0, d.getLang)(),
            n = this.props,
            a = n.isPrd,
            r = n.payment,
            i = n.onClose;
            return l.
        default.createElement("div", {
                className: (0, o.
            default)("pay_succeed", {
                    "is-prd": a
                })
            },
            l.
        default.createElement("i", {
                className: "pay_sImg"
            }), l.
        default.createElement("p", {
                className: "pay_sTips"
            },
            t.cPaySucceedTips), l.
        default.createElement("div", {
                className: "pay_sDes"
            },
            t.cPaySucceedDes({
                strong: {
                    className: "strong"
                }
            })), l.
        default.createElement("div", {
                className: "pay_tradeInfo"
            },
            l.
        default.createElement("div", {
                className: "pay_orderNo"
            },
            l.
        default.createElement("span", null, t.cPayOrderNo), l.
        default.createElement("span", {
                className: "orderNo"
            },
            a ? r._DNT: r.cashier.ordiNo))), l.
        default.createElement(p, null), l.
        default.createElement("div", {
                className: "pay_sLogoWrapper"
            },
            l.
        default.createElement("div", {
                className: "pay_sLogo"
            })), l.
        default.createElement("p", {
                className: "pay_sDetermination"
            },
            t.cPaySucceedDetermination), l.
        default.createElement("div", {
                className: "pay_operate"
            },
            l.
        default.createElement("a", {
                className: "btn_normal btn_finish",
                onClick: i
            },
            t.cPayFinish)))
        }
    }),
    g = l.
default.createClass({
        displayName:
        "FollowWx",
        mixins: [c.
    default],
        render: function() {
            var t = (0, d.getLang)();
            return l.
        default.createElement("div", {
                className: "pay_followWx"
            },
            l.
        default.createElement("img", {
                src: window.rootPath("/images/mikeMerchant/wechatQrCode@3x.png")
            }), l.
        default.createElement("div", {
                className: "pfw_content"
            },
            t.cPaySucceed_wxFollow))
        }
    }),
    _ = l.
default.createClass({
        displayName:
        "FindOrder",
        mixins: [c.
    default],
        render: function() {
            var t = (0, d.getLang)();
            return l.
        default.createElement("div", {
                className: "pay_contactUs pay_findOrder"
            },
            l.
        default.createElement("div", {
                className: "pfo_content"
            },
            t.cPaySucceedDetail_normal(this.props.contentExtProps)), l.
        default.createElement("img", {
                src: window.rootPath("/images/mikeMerchant/wechatQrCode@3x.png")
            }), l.
        default.createElement("div", {
                className: "clearB"
            }))
        }
    }),
    v = l.
default.createClass({
        displayName:
        "IFPSMMS",
        mixins: [c.
    default],
        gotoSearchOrder: function() {
            var t = this.props.payment,
            n = t.ordiNo;
            window.open("https://mikecrm.com/mms/orderQuery.php?no=" + encodeURIComponent(n))
        },
        render: function() {
            var t = (0, d.getLang)(),
            n = (0, d.getDeviceInfo)(),
            a = (n.os, n.isWx),
            r = this.props,
            i = (r.isPrd, r.payment),
            s = r.onClose,
            u = {
                strong: {
                    className: "strong"
                },
                order: {
                    className: "order",
                    onClick: this.gotoSearchOrder
                }
            };
            return l.
        default.createElement("div", {
                className: (0, o.
            default)("pay_succeed", "pay_in_mikeMerchant")
            },
            l.
        default.createElement("div", {
                className: "mms_brand"
            },
            l.
        default.createElement("img", {
                className: "mms_logo",
                src: window.rootPath("/images/mikeMerchant/" + ("cn" === (0, d.getCurrentLang)() ? "logo@3x.png": "logo_en@3x.png"))
            })), l.
        default.createElement("div", {
                className: "mms_succeed_border"
            }), l.
        default.createElement("div", {
                className: "ps_content"
            },
            l.
        default.createElement("div", {
                className: "mms_succeed_ball"
            }), l.
        default.createElement("div", {
                className: "mms_succeed"
            }), l.
        default.createElement("p", {
                className: "pay_sTips"
            },
            t.cPaySucceedTips), l.
        default.createElement("div", {
                className: "pay_sDes"
            },
            a ? t.cPaySucceedDes_inWx(u) : t.cPaySucceedDes_normal(u)), a ? l.
        default.createElement(g, {
                no: i.cashier.ordiNo,
                contentExtProps: u
            }) : null, l.
        default.createElement("div", {
                className: "pay_tradeInfo pay_ordInfo"
            },
            i.cashier.pubName ? l.
        default.createElement("div", {
                className: "pay_pubName"
            },
            l.
        default.createElement("span", {
                className: "po_title"
            },
            t.cMerchantPubName), l.
        default.createElement("span", {
                className: "pubName"
            },
            i.cashier.pubName)) : null, l.
        default.createElement("div", {
                className: "pay_orderNo"
            },
            l.
        default.createElement("span", {
                className: "po_title"
            },
            t.cPayOrderNo), l.
        default.createElement("span", {
                className: "orderNo"
            },
            i.cashier.ordiNo))), a ? null: l.
        default.createElement(_, {
                no: i.cashier.ordiNo,
                contentExtProps: u
            }), l.
        default.createElement("div", {
                className: "pay_operate"
            },
            l.
        default.createElement("a", {
                className: "btn_mms",
                onClick: s
            },
            t.cPayFinish)), l.
        default.createElement("div", {
                className: "pay_sLogoWrapper"
            },
            l.
        default.createElement("div", {
                className: "pay_sLogo"
            })), l.
        default.createElement("p", {
                className: "pay_sDetermination"
            },
            t.cPaySucceedDetermination)))
        }
    }),
    b = l.
default.createClass({
        displayName:
        "IFPSucceed",
        mixins: [c.
    default],
        getInitialState: function() {
            return this.store = (0, d.getStore)(),
            this.form = (0, d.getFormStructure)(),
            null
        },
        handleClose: function() {
            this.store.dispatch((0, f.IFP_CONFIRM)()),
            this.props.onClose && this.props.onClose(!0)
        },
        renderNormal: function() {
            var t = this.props.isPrd,
            n = this.store.getState(),
            a = n.payment;
            return l.
        default.createElement(h, {
                isPrd: t,
                payment: a,
                onClose: this.handleClose
            })
        },
        renderMikeMerchant: function() {
            var t = this.props.isPrd,
            n = this.store.getState(),
            a = n.payment;
            return l.
        default.createElement(v, {
                isPrd: t,
                payment: a,
                onClose: this.handleClose
            })
        },
        render: function() {
            var t = this.form.extensions,
            n = this.props.isPrd;
            t.inFormPayInfo;
            return n ? this.renderNormal() : this.renderMikeMerchant()
        }
    });
    n.
default = b
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    s = a(19),
    l = r(s),
    u = a(22),
    c = r(u),
    d = a(28),
    f = r(d),
    m = a(37),
    p = r(m),
    h = a(33),
    g = r(h),
    v = a(23),
    b = r(v),
    y = a(17),
    E = a(36),
    C = a(68),
    T = r(C),
    S = (0, f.
default)((0, p.
default)(g.
default)),
    M = l.
default.createClass({
        displayName:
        "PopSubmitJump",
        mixins: [b.
    default],
        getInitialState: function() {
            return this.form = (0, y.getFormStructure)(),
            this.store = (0, y.getStore)(),
            this.embed = (0, y.getEmbed)(),
            {}
        },
        handleFinishCountdown: function() {
            var t = this.store.getState(),
            n = t.data;
            if (this.embed && this.embed.inEmbed && this.embed.topFrameLocationHref) try {
                return void(window.top.location.href = (0, T.
            default)(n))
            } catch(t) {}
            location.href = (0, T.
        default)(n)
        },
        renderContent: function() {
            var t = this.form.settings,
            n = (0, y.getLang)(),
            a = [].concat(t.asTextTitle ? t.asTextTitle: n.asSubmitSucceed);
            return _.reduce(a,
            function(t, n, a) {
                return t.length > 0 && t.push(l.
            default.createElement("br", {
                    key: "br_" + a
                })),
                t.push(l.
            default.createElement("span", {
                    key: "c_" + a
                },
                n)),
                t
            },
            [])
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = (t.onClose, i(t, ["className", "onClose"])),
            r = this.store.getState(),
            s = r.data,
            u = (this.form.settings, (0, y.getCurrentLang)()),
            d = (0, y.getLang)();
            return l.
        default.createElement(S, o({
                className: (0, c.
            default)("cp-popwin", "sys-popwin", n)
            },
            a), l.
        default.createElement("div", {
                className: "cp-popBox submitJump"
            },
            l.
        default.createElement("div", {
                className: "mj_img"
            }), l.
        default.createElement("p", {
                className: "mj_succeedTips"
            },
            this.renderContent()), l.
        default.createElement("div", {
                className: "mj_jumpTips"
            },
            l.
        default.createElement("p", {
                className: "mj_jtTitle mj_jtBLink"
            },
            l.
        default.createElement(E.BaseCutDown, {
                duration: 3e3,
                key: "authCountdown",
                onRender: function(t) {
                    return d.succeedJumpTips({
                        sec: Math.floor(t.remain / 1e3)
                    })
                },
                onFinishCutDown: this.handleFinishCountdown
            })), l.
        default.createElement("p", {
                className: "mj_jtInfo"
            },
            (0, T.
        default)(s)), "ja" === u ? l.
        default.createElement("p", {
                className: "mj_jtTitle mj_jtALink"
            },
            "へ移動する") : null)))
        }
    });
    n.
default = M,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        var n = (0, o.getFormStructure)(),
        a = n.settings,
        r = (0, o.getStore)().getState(),
        i = null;
        return r.form && r.form.submitFin && r.form.extData && r.form.extData.force_redirectUrl && (i = r.form.extData.force_redirectUrl),
        2 !== a.afterSubmitPage || i || (a.asIsJumpToLuxury && l.
    default.forEach(a.asJumpToLuxury,
        function(a, r) {
            if (t && t[r]) {
                var o = n.getComponent(r),
                s = l.
            default.find(o.options, {
                    sId: t[r][0]
                });
                s && (i = a[s.pid || s.id])
            }
        }), i || (i = a.asJumpTo || null)),
        i ? (0, u.autoMbrmLinkify)(i) : null
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = a(17),
    s = a(6),
    l = r(s),
    u = a(8);
    n.
default = i,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    s = a(28),
    l = r(s),
    u = a(37),
    c = r(u),
    d = a(33),
    f = r(d),
    m = a(19),
    p = r(m),
    h = a(23),
    g = r(h),
    v = a(22),
    b = r(v),
    y = a(17),
    E = a(36),
    C = a(38),
    T = (0, l.
default)((0, c.
default)(f.
default)),
    S = p.
default.createClass({
        displayName:
        "PopSubmitQueue",
        mixins: [g.
    default],
        getInitialState: function() {
            return this.store = (0, y.getStore)(),
            o({
                saving: !1
            },
            this.store.getState().form)
        },
        componentDidMount: function() {
            this.unsubscribe = this.store.addChangeListener(this.onStateChange)
        },
        componentWillUnmount: function() {
            this.unsubscribe && this.unsubscribe()
        },
        onStateChange: function(t) {
            var n = o({},
            this.store.getState().form);
            t.type === C._SUBMIT_QUEUE && (n.saving = !1),
            this.setState(n)
        },
        onFinishCutDown: function() {
            var t = this;
            this.state.saving || this.setState({
                saving: this.state.pending
            },
            function() {
                t.state.pending ? (t.store.dispatch((0, C.SUBMIT_QUEUE_FIN)()), t.store.dispatch((0, C.START_SUBMIT)())) : t.store.dispatch((0, C.SUBMIT_QUEUE_END)())
            })
        },
        renderQueueInfo: function(t) {
            var n = this.state.saving,
            a = (0, y.getLang)();
            return n ? a.gQueueSaving: _.map(a.gQueue,
            function(n, a) {
                return _.isFunction(n) ? p.
            default.createElement("p", {
                    className: "fbsq_line",
                    key: "line" + a
                },
                n({
                    countdown: Math.round(t.remain / 1e3),
                    countdownClassName: {
                        className: "strong"
                    }
                })) : p.
            default.createElement("p", {
                    className: "fbsq_line",
                    key: "line" + a
                },
                n)
            })
        },
        render: function() {
            var t = this.state,
            n = t.saving,
            a = t.pending,
            r = t.queue,
            s = this.props,
            l = s.className,
            u = (s.onError, i(s, ["className", "onError"])),
            c = (0, y.getLang)();
            return p.
        default.createElement(T, o({
                className: (0, b.
            default)("cp-popwin", "cp-popwin-blur", l)
            },
            u), p.
        default.createElement("div", {
                className: "cp-popBox submitQueue"
            },
            p.
        default.createElement("div", {
                className: "sq_Container"
            },
            p.
        default.createElement("div", {
                className: (0, b.
            default)("sq_img", {
                    "sq_queue": !n,
                    "sq_submit": n
                })
            }), p.
        default.createElement("div", {
                className: (0, b.
            default)("sq_content", {
                    "sq_submit": n
                })
            },
            p.
        default.createElement(E.BaseCutDown, {
                onRender: this.renderQueueInfo,
                key: "cutdown" + n + a + r,
                duration: r ? 1e3 * r: 0,
                onFinishCutDown: this.onFinishCutDown
            })), n ? null: p.
        default.createElement("div", {
                className: (0, b.
            default)("sq_hint")
            },
            p.
        default.createElement("i", {
                className: "iconfont"
            },
            String.fromCharCode(58938)), c.gQueueHint))))
        }
    });
    n.
default = S,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    o = a(22),
    s = r(o),
    l = a(19),
    u = r(l),
    c = a(71),
    d = r(c),
    f = a(23),
    m = r(f),
    p = a(72),
    h = r(p),
    g = a(8),
    _ = a(17),
    v = function(t) {
        var n = (0, g.parseUrl)(location.href),
        a = (0, g.addUrlParams)(location.origin + "/mbrm/" + t, {
            _cpv: n.params._cpv
        });
        window.open(a)
    },
    b = u.
default.createClass({
        displayName:
        "MemberBaseInfo",
        mixins: [m.
    default],
        onClose: function(e) {
            this.props.onClose && this.props.onClose(e)
        },
        handleGotoMemberCenter: function() {
            var t = this.props.memberInfo;
            v(t.mbrmToken)
        },
        render: function() {
            var t = this.props.memberInfo,
            n = (0, _.getLang)();
            return u.
        default.createElement("div", {
                className: "cm_info",
                style: {
                    width: (0, _.getDeviceInfo)().getClientWidth() - 10
                }
            },
            u.
        default.createElement("div", {
                className: "cm_name"
            },
            t.name), t.isLevel ? u.
        default.createElement("div", {
                className: "cm_lvlIcon"
            },
            u.
        default.createElement("img", {
                src: t.levelIcon || t.defaultLevelIcon
            })) : null, u.
        default.createElement("div", {
                className: "cm_mbrm_center"
            },
            u.
        default.createElement("span", {
                className: "cmbc_btn",
                onClick: this.handleGotoMemberCenter
            },
            u.
        default.createElement("i", {
                className: "iconfont"
            },
            String.fromCharCode(59504)), n.gMyMemberCenter)), u.
        default.createElement("div", {
                className: "close",
                onClick: this.onClose
            },
            u.
        default.createElement("i", {
                className: "iconfont"
            },
            String.fromCharCode(58982))))
        }
    }),
    y = u.
default.createClass({
        displayName:
        "MemberBaseInfoBox",
        mixins: [m.
    default],
        handleGotoMemberCenter: function() {
            var t = this.props.memberInfo;
            v(t.mbrmToken)
        },
        render: function() {
            var t = this.props.memberInfo,
            n = (0, _.getLang)();
            return u.
        default.createElement("div", {
                className: "cm_infoBox"
            },
            u.
        default.createElement("div", {
                className: "cmi_name"
            },
            u.
        default.createElement("span", {
                className: "cmin_name"
            },
            t.mbrmName), u.
        default.createElement("span", {
                className: "cmin_member"
            },
            n.fMember)), u.
        default.createElement("div", {
                className: "cmi_card"
            },
            u.
        default.createElement("div", {
                className: (0, s.
            default)("cmc_lvl", {
                    "has-level": t.isLevel
                })
            },
            u.
        default.createElement("img", {
                src: t.levelIcon || t.defaultLevelIcon
            })), u.
        default.createElement("div", {
                className: "cmc_info"
            },
            u.
        default.createElement("div", {
                className: "cmci_name"
            },
            t.name), u.
        default.createElement("div", {
                className: "cmci_lvl"
            },
            t.account))), u.
        default.createElement("div", {
                className: "cmi_mbrm_center"
            },
            u.
        default.createElement("span", {
                className: "cmim_btn",
                onClick: this.handleGotoMemberCenter
            },
            u.
        default.createElement("i", {
                className: "iconfont"
            },
            String.fromCharCode(59504)), n.gMyMemberCenter)))
        }
    }),
    E = u.
default.createClass({
        displayName:
        "MemberInfo",
        mixins: [m.
    default],
        getInitialState: function() {
            return this.displayTimer = null,
            {
                showMemberInfo: !1
            }
        },
        componentWillUnmount: function() {
            clearTimeout(this.displayTimer)
        },
        onMouseEnter: function() {
            clearTimeout(this.displayTimer),
            this.state.showMemberInfo || this.setState({
                showMemberInfo: !0
            })
        },
        onMouseLeave: function() {
            var t = this;
            clearTimeout(this.displayTimer),
            this.displayTimer = setTimeout(function() {
                t.setState({
                    showMemberInfo: !1
                })
            },
            400)
        },
        onClick: function() {
            clearTimeout(this.displayTimer),
            this.setState({
                showMemberInfo: !0
            })
        },
        onClose: function(e) {
            e.stopPropagation(),
            this.setState({
                showMemberInfo: !1
            })
        },
        render: function() {
            var t = this.state.showMemberInfo,
            n = this.props,
            a = n.isLogin,
            r = n.memberInfo,
            o = n.hasShareQR,
            l = (0, _.getDeviceInfo)().isMobile,
            c = {};
            return a && r && r.account && (c = l ? {
                onClick: this.onClick
            }: {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }),
            u.
        default.createElement(h.
        default, i({
                component: "div",
                className: (0, s.
            default)("c_member", {
                    "expand": l && t,
                    "is-mobile": l,
                    "has_share_btn": o
                }),
                leaveTimeout: 300,
                enterTimeout: 240,
                transitionName: "info_box"
            },
            c), u.
        default.createElement(d.
        default, {
                key: "identify",
                memberLogged: a,
                style: {
                    transform: t && l ? "translateX(" + ( - Math.min(610, (0, _.getDeviceInfo)().getClientWidth()) + 30 + 20) + "px)": null
                }
            }), t && !l ? u.
        default.createElement(y, {
                key: "box",
                memberInfo: r
            }) : null, t && l ? u.
        default.createElement(b, {
                key: "line",
                onClose: this.onClose,
                memberInfo: r
            }) : null)
        }
    });
    n.
default = E,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(19),
    o = r(i),
    s = a(22),
    l = r(s),
    u = a(72),
    c = r(u),
    d = a(76),
    f = r(d),
    m = a(77),
    p = r(m),
    h = a(23),
    g = r(h),
    _ = o.
default.createClass({
        displayName:
        "MemberIdentify",
        mixins: [g.
    default],
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.memberLogged,
            r = t.style;
            return o.
        default.createElement("div", {
                className: (0, l.
            default)("memberIdentify", n, {
                    "memberLogged": a
                }),
                style: r
            },
            o.
        default.createElement("div", {
                className: "mi_exCircle"
            },
            o.
        default.createElement(c.
        default, {
                component: "div",
                className: "mi_innerCircle",
                transitionName: "memberLogged",
                enterTimeout: 1100,
                leaveTimeout: 1e3
            },
            a ? o.
        default.createElement(p.
        default, {
                key: "contact",
                className: "mi_contact"
            }) : o.
        default.createElement(f.
        default, {
                key: "key",
                className: "mi_key"
            }))))
        }
    });
    n.
default = _,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = a(19),
    s = r(o),
    l = a(73),
    u = r(l),
    c = a(9),
    d = r(c),
    f = a(23),
    m = r(f),
    p = s.
default.createClass({
        displayName:
        "AnimationGroup",
        mixins: [m.
    default],
        getInitialState: function() {
            var t = u.
        default;
            return (d.
        default.browserCheck.msie && parseInt(d.
        default.browserCheck.version) <= 11 || document.documentMode && document.documentMode < 9) && (t = this.props.component ? this.props.component: "div"),
            this.animationGroup = t,
            {}
        },
        render: function() {
            var t = this.animationGroup,
            n = this.props,
            a = n.children,
            r = i(n, ["children"]);
            return s.
        default.createElement(t, r, a)
        }
    });
    n.
default = p,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        return t.classList ? t.classList.add(n) : s(t, n) || (t.className = t.className + " " + n),
        t
    }
    function o(t, n) {
        return s(n) && (t.classList ? t.classList.remove(n) : t.className = (" " + t.className + " ").replace(" " + n + " ", " ").trim()),
        t
    }
    function s(t, n) {
        return t.classList ? t.classList.contains(n) : (" " + t.className + " ").indexOf(" " + n + " ") > -1
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var l = a(19),
    u = r(l),
    c = a(20),
    d = r(c),
    f = a(6),
    m = r(f),
    p = a(74),
    h = r(p),
    g = a(75),
    _ = r(g),
    v = h.
default.rAF,
    b = h.
default.rAF_cancel,
    y = h.
default.getNow,
    E = u.
default.createClass({
        displayName:
        "ListTransitionGroupChild",
        propTypes: {
            name: u.
        default.PropTypes.string.isRequired,
            appear: u.
        default.PropTypes.bool,
            enter: u.
        default.PropTypes.bool,
            leave: u.
        default.PropTypes.bool,
            appearTimeout: u.
        default.PropTypes.number,
            enterTimeout: u.
        default.PropTypes.number,
            leaveTimeout: u.
        default.PropTypes.number
        },
        _transition: function(t, n, a) {
            function r() {
                var t = y();
                return t >= p ? (m(), void b(f)) : void(f = v(r))
            }
            var s = d.
        default.findDOMNode(this),
            l = this;
            if (s) {
                var u = this.props.name + "-" + t,
                c = u + "-active",
                f = null,
                m = function(e) {
                    if ((!e || e.target === s) && (b(f), o(s, u), o(s, c), l.classList = null, n && l.isMounted())) try {
                        n()
                    } catch(t) {}
                };
                i(s, u),
                this._queueClass(s, c);
                var p = y() + (a || 0) + 27;
                r(),
                this.transitionTimeouts.push(f)
            } else if (n && l.isMounted()) try {
                n()
            } catch(t) {}
        },
        _queueClass: function(t, n) {
            var a = this;
            this.classNameQueue.push({
                className: n,
                node: t
            }),
            this.timeout || (this.timeout = v(function() {
                v(a._flushClassNameQueue)
            }))
        },
        _flushClassNameQueue: function() {
            this.isMounted() && m.
        default.forEach(this.classNameQueue,
            function(t) {
                i(t.node, t.className)
            }),
            this.classNameQueue.length = 0,
            this.timeout = null
        },
        componentWillMount: function() {
            this.classNameQueue = [],
            this.transitionTimeouts = []
        },
        componentWillAppear: function(t) {
            this.props.appear && this.props.appearTimeout > 0 ? this._transition("appear", t, this.props.appearTimeout) : t()
        },
        componentWillEnter: function(t) {
            var n = this;
            this.props.enter && this.props.enterTimeout > 0 ? this._transition("enter",
            function() {
                n.props.transitionEnterEnd && n.props.transitionEnterEnd(),
                t()
            },
            this.props.enterTimeout) : t()
        },
        componentWillLeave: function(t) {
            var n = this;
            this.props.leave && this.props.leaveTimeout > 0 ? this._transition("leave",
            function() {
                n.props.transitionLeaveEnd && n.props.transitionLeaveEnd(),
                t()
            },
            this.props.leaveTimeout) : t()
        },
        componentWillUnmount: function() {
            this.timeout && (clearTimeout(this.timeout), this.timeout = null),
            m.
        default.forEach(this.transitionTimeouts,
            function(t) {
                b(t)
            }),
            this.classNameQueue.length = 0
        },
        render: function() {
            return u.
        default.Children.only(this.props.children)
        }
    }),
    C = u.
default.createClass({
        displayName:
        "MGCSSTransitionGroup",
        propTypes: {
            transitionName: u.
        default.PropTypes.string.isRequired,
            transitionAppear: u.
        default.PropTypes.bool,
            transitionEnter: u.
        default.PropTypes.bool,
            transitionLeave: u.
        default.PropTypes.bool,
            enterTimeout: u.
        default.PropTypes.number.isRequired,
            leaveTimeout: u.
        default.PropTypes.number.isRequired,
            transitionEnterEnd: u.
        default.PropTypes.func,
            transitionLeaveEnd: u.
        default.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                transitionAppear: !1,
                transitionEnter: !0,
                transitionLeave: !0
            }
        },
        _wrapChild: function(t) {
            var n = this.props;
            return u.
        default.createElement(E, {
                name: n.transitionName,
                appear: n.transitionAppear,
                enter: n.transitionEnter,
                leave: n.transitionLeave,
                appearTimeout: n.appearTimeout,
                enterTimeout: n.enterTimeout,
                leaveTimeout: n.leaveTimeout,
                transitionEnterEnd: n.transitionEnterEnd,
                transitionLeaveEnd: n.transitionLeaveEnd
            },
            t)
        },
        render: function() {
            var t = m.
        default.assign({},
            this.props, {
                childFactory: this._wrapChild
            });
            return u.
        default.createElement(_.
        default, t)
        }
    });
    n.
default = C,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return t.replace(/^\s+|\s+$/gm, "")
    }
    function s(t) {
        return Array.prototype.slice.call(t)
    }
    function l() {
        var t;
        for (t in o) if (o.hasOwnProperty(t)) return ! 0;
        return ! 1
    }
    function u(t, n) {
        return null === n ? "Null" === t: "undefined" == typeof n ? "Undefined" === t: Object.prototype.toString.call(n) === "[object " + t + "]"
    }
    function c(t) {
        if ("undefined" == typeof t || null === t || u("Array", t) && 0 === t.length || u("String", t) && 0 === t.length) return ! 0;
        if (u("Object", t)) {
            for (var n in t) if (t.hasOwnProperty(n)) return ! 1;
            return ! 0
        }
        return ! 1
    }
    function d(t, n) {
        if (t === n) return ! 0;
        if ("object" !== ("undefined" == typeof t ? "undefined": g(t)) || null === t || "object" !== ("undefined" == typeof n ? "undefined": g(n)) || null === n) return ! 1;
        var a = Object.keys(t),
        r = Object.keys(n);
        if (a.length !== r.length) return ! 1;
        for (var i = Object.prototype.hasOwnProperty,
        o = 0; o < a.length; o++) {
            if (!i.call(n, a[o])) return ! 1;
            var s = t[a[o]],
            l = n[a[o]];
            if (s !== l || "object" === ("undefined" == typeof s ? "undefined": g(s)) || "object" === ("undefined" == typeof l ? "undefined": g(l))) return ! 1
        }
        return ! 0
    }
    function f(t) {
        var n = t.get(0),
        a = 0;
        if ("selectionStart" in n) a = n.selectionStart;
        else if ("selection" in document) {
            n.focus();
            var r = document.selection.createRange(),
            i = document.selection.createRange().text.length;
            r.moveStart("character", -n.value.length),
            a = r.text.length - i
        }
        return a
    }
    function m(t, n, a) {
        if (t[0].createTextRange) {
            var r = t[0].createTextRange();
            r.moveEnd("character", n),
            r.moveStart("character", a),
            r.select()
        } else t[0].setSelectionRange(n, a),
        t.focus()
    }
    function p(t, n, a) {
        if (t == n) return ! 0;
        if (!n || !n.nodeType || 1 != n.nodeType) return ! 1;
        if (t.contains) return t.contains(n);
        if (t.compareDocumentPosition) return !! (16 & t.compareDocumentPosition(n));
        for (var r = n.parentNode; r && r != a;) {
            if (r == t) return ! 0;
            r = r.parentNode
        }
        return ! 1
    }
    function h(t) {
        var n = "",
        a = Math.floor(Math.round(10 * t / 27) / 10),
        r = t - 26 * a;
        return a > 0 && (n = String.fromCharCode(a + 64)),
        r > 0 && (n += String.fromCharCode(r + 64)),
        n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    },
    _ = a(9),
    v = r(_),
    b = function() {
        var t = document.createElement("div"),
        n = ["Khtml", "Ms", "O", "Moz", "Webkit"],
        a = n.length;
        return function(r) {
            if (r in t.style) return ! 0;
            r = r.replace(/^[a-z]/,
            function(t) {
                return t.toUpperCase()
            });
            var i = 0;
            for (i; i < a; i++) if (n[a] + r in t.style) return ! 0;
            return ! 1
        }
    } (),
    y = function() {
        var t = {
            transitionend: {
                "transition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd",
                "MozTransition": "mozTransitionEnd",
                "OTransition": "oTransitionEnd",
                "msTransition": "MSTransitionEnd"
            }
        },
        n = [];
        if ("undefined" != typeof window) {
            var a = document.createElement("div"),
            r = a.style;
            "TransitionEvent" in window || delete t.transitionend.transition;
            for (var i in t) if (t.hasOwnProperty(i)) {
                var o = t[i];
                for (var s in o) s in r && n.push(o[s])
            }
            return 0 == n.length ? "transitionend": n.join(" ")
        }
    } (),
    E = function() {
        function t(t) {
            var n = location.pathname.split("/"),
            a = " path=";
            document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            for (var r = 0; r < n.length; r++) a += ("/" != a.substr( - 1) ? "/": "") + n[r],
            document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;" + a + ";"
        }
        function n(n, a, r) {
            var i = null;
            return r.expires && (i = new Date, r.expires = parseInt(r.expires, 0), isNaN(r.expires) || (i = new Date(i - 0 + 6048e5 * r.expires))),
            i && (i = i.toUTCString()),
            t(n),
            document.cookie = [n, "=", escape(a), i ? "; expires=" + i: "", r.path ? "; path=" + r.path: "", r.domain ? "; domain=" + r.domain: "", r.secure ? "; secure": ""].join("")
        }
        function a(t) {
            var n, a, r, o = document.cookie.split(";");
            for (n = 0, a = o.length; n < a; n++) if (r = i(o[n]).split("="), r[0] === t) return unescape(r[1]);
            return null
        }
        function r(n) {
            var a = document.cookie.match(new RegExp("([^ ;][^;]*)(?=(=[^;]*)(;|$))", "gi"));
            for (var r in a) t(a[r])
        }
        function o(n) {
            for (var a = document.cookie.split(";"), r = 0; r < a.length; r++) {
                var i = a[r],
                o = i.indexOf("="),
                l = o > -1 ? i.substr(0, o) : i,
                u = [].concat(n || []);
                s(u, l) || t(l)
            }
        }
        var s = function(t, n) {
            for (var a = !1,
            r = 0,
            i = t.length; r < i; r++) {
                var o = t[r];
                if (o.indexOf("*") > -1) {
                    var s = new RegExp("^" + o.replace("*", ".*") + "$");
                    a = n.match(s)
                } else a = o === n;
                if (a) break
            }
            return a
        };
        return {
            set: n,
            get: a,
            remove: t,
            clear: r,
            clearAll: o
        }
    } ();
    n.
default = {
        inIframe: v.
    default.inIFrame,
        deviceCheck: v.
    default.deviceCheck,
        browserCheck: v.
    default.browserCheck,
        fuzzyDeviceCheck: v.
    default.fuzzyDeviceCheck,
        getImageSize: v.
    default.getImageSize,
        parseURL: v.
    default.parseURL,
        getWindowSize: v.
    default.getWindowSize,
        getNow: v.
    default.getNow,
        rAF: v.
    default.rAF,
        rAF_cancel: v.
    default.cAF,
        args: s,
        objectCheck: l,
        typeIs: u,
        isEmpty: c,
        isSupports: b,
        transitionEndEvent: y,
        shallowEqual: v.
    default.shallowEqual,
        shallowEqualScalar: d,
        getCursorPosition: f,
        setCursorPosition: m,
        contains: p,
        convertToLetter: h,
        cookie: E,
        cdnizer: v.
    default.cdnizerFactory(""),
        linkify: v.
    default.linkify,
        memo: v.
    default.memo,
        isPromise: v.
    default.isPromise
    },
    t.exports = n["default"]
},
function(t, n, a) {
    t.exports = a(2)(471)
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return l.
    default.createElement("svg", o({
            viewBox: "0 0 10 13",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        t), l.
    default.createElement("path", {
            d: "M10.282 11.25c0 .362-.363.75-.842.75H.884c-.48 0-.88-.375-.88-.75l.012-5.36c0-.362.363-.75.842-.75h.854l.026-2.473C1.738 1.191 3.266 0 5.156 0c1.89 0 3.417 1.191 3.417 2.667V5.14h.842c.466 0 .88.375.88.75l-.013 5.36zM5.169 1.334c-.945 0-1.722.505-1.722 1.243v2.576h3.417l.013-2.576c-.013-.738-.763-1.243-1.708-1.243z",
            fill: "#535a61"
        }))
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    };
    n.
default = i;
    var s = a(19),
    l = r(s);
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return l.
    default.createElement("svg", o({
            viewBox: "0 0 8 16",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        t), l.
    default.createElement("path", {
            d: "M8 3.997A3.998 3.998 0 0 0 3.939 0C1.902.03.152 1.677.01 3.707a3.984 3.984 0 0 0 2.967 4.151h.003v5.635c0 .129.048.25.135.347l1.146 1.255a.283.283 0 0 0 .421 0l1.651-1.802a.316.316 0 0 0-.01-.437l-.843-.843a.344.344 0 0 1 0-.483l.908-.908a.445.445 0 0 0 0-.633L5.297 8.898a.558.558 0 0 1-.164-.396v-.663A4 4 0 0 0 8 3.997zM4 2.21c.567 0 1.027.457 1.027 1.02 0 .566-.46 1.02-1.027 1.02a1.02 1.02 0 0 1 0-2.04z",
            fill: "#535a61",
            fillRule: "nonzero"
        }))
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    };
    n.
default = i;
    var s = a(19),
    l = r(s);
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(6),
    o = (r(i), a(19)),
    s = r(o),
    l = a(23),
    u = r(l),
    c = a(17),
    d = a(27),
    f = r(d),
    m = s.
default.createClass({
        displayName:
        "Background",
        mixins: [u.
    default, f.
    default],
        getInitialState: function() {
            return this.form = (0, c.getFormStructure)(),
            this.style = this.form.style,
            this.embed = (0, c.getEmbed)(),
            {}
        },
        _getBgStyle: function() {
            var t = this.style || {},
            n = {};
            if (this.embed && this.embed.inEmbed && this.embed.opacityBg) return n;
            if (t.background) if (n.backgroundImage = "url(" + (this.isMobile() ? t.optBackground: t.background) + ")", n.backgroundRepeat = "no-repeat", n.backgroundPositionX = "center", n.backgroundPositionY = "center", t.bgLayoutHorizontal !== t.bgLayoutVertical || 3 !== t.bgLayoutHorizontal && 4 !== t.bgLayoutHorizontal) {
                switch (t.bgLayoutHorizontal) {
                case 3:
                    n.backgroundRepeat = "repeat-x";
                    break;
                case 4:
                    n.backgroundSize = "100% auto";
                    break;
                case 5:
                    n.backgroundPositionX = "left";
                    break;
                case 7:
                    n.backgroundPositionX = "right";
                    break;
                case 6:
                default:
                    n.backgroundPositionX = "center"
                }
                switch (t.bgLayoutVertical) {
                case 3:
                    n.backgroundRepeat = "repeat-y";
                    break;
                case 4:
                    n.backgroundSize = "auto 100%",
                    n.backgroundPositionX = null,
                    n.backgroundPositionY = null;
                    break;
                case 8:
                    n.backgroundPositionY = "top";
                    break;
                case 9:
                    n.backgroundPositionY = "bottom";
                    break;
                case 6:
                default:
                    n.backgroundPositionY = "center"
                }
            } else 3 === t.bgLayoutHorizontal && (n.backgroundRepeat = "repeat"),
            4 === t.bgLayoutHorizontal && (n.backgroundSize = "cover");
            return n
        },
        render: function() {
            var t = 1 === this.style.backgroundFixed;
            return s.
        default.createElement("div", {
                className: t ? "background-fixed": "background-normal",
                style: this._getBgStyle()
            })
        }
    });
    n.
default = m,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    o = a(19),
    s = r(o),
    l = a(17),
    u = a(22),
    c = r(u),
    d = a(7),
    f = a(8),
    m = a(27),
    p = r(m),
    h = a(23),
    g = r(h),
    _ = a(26),
    v = r(_),
    b = "http://www.mikecrm.com/indexForm.php?ref=form",
    y = s.
default.createClass({
        displayName:
        "Copyright",
        mixins: [p.
    default, g.
    default],
        getInitialState: function() {
            this.store = (0, l.getStore)();
            var t = this.form = (0, l.getFormStructure)();
            return this.tail = t.tail,
            this.style = t.style,
            this.organizationName = t.meta.orgName,
            this.renderQueue = Promise.resolve(!0),
            {
                updateCount: 0
            }
        },
        componentDidMount: function() {
            this.unbind = (0, d.onResize)(this.handleResize)
        },
        componentWillUnmount: function() {
            this.unbind && this.unbind()
        },
        handleResize: function() {
            var t = this;
            this.inResize || (this.inResize = !0, this.renderQueue = this.renderQueue.then(function() {
                return new Promise(function(n) {
                    t.inResize = !1,
                    t.setState({
                        updateCount: ++t.state.updateCount % 10
                    }),
                    n(!0)
                })
            }))
        },
        _renderBase: function() {
            var t = (0, f.grayLevel)(this.style.bgColor) < 170,
            n = null;
            n = this.tail && 2 === this.tail.copyrightType && this.organizationName ? (0, l.getLang)().gPoweredByWithCompanyFunc({
                company: this.organizationName
            }) : (0, l.getLang)().gPoweredBy;
            var a = {};
            return t && (a = {
                color: "#FFF",
                textShadow: "0 1px 4px rgba(0,0,0,0.3)"
            }),
            s.
        default.createElement("a", {
                className: "poweredBy",
                target: "_blank",
                rel: "noreferrer",
                href: b,
                key: "cpr"
            },
            s.
        default.createElement("span", {
                className: (0, c.
            default)("poweredBy_logo", {
                    "poweredBy_light": t
                })
            }), s.
        default.createElement("span", {
                className: "poweredBy_title",
                style: i({
                    maxWidth: (0, l.getFormDisplayWidth)() - 100
                },
                a)
            },
            n))
        },
        renderNormal: function() {
            return this._renderBase()
        },
        renderSelfLogo: function(t) {
            if (3 === this.tail.copyrightType) {
                var n = (0, f.grayLevel)(this.style.bgColor) < 170,
                a = this.tail,
                r = a.companyLogo,
                i = a.companyLink,
                o = a.companyName,
                u = null,
                c = this.isMobile();
                c && (u = {
                    maxWidth: (0, l.getFormDisplayWidth)(),
                    width: "auto"
                });
                var d = {};
                return n && (d = {
                    color: "#FFF",
                    textShadow: "0 1px 4px rgba(0,0,0,0.3)"
                }),
                s.
            default.createElement("div", {
                    className: "pb_hasSelfLogo",
                    style: u,
                    key: "selfLogo"
                },
                s.
            default.createElement("div", {
                    key: "company",
                    className: "pb_companyInfo"
                },
                r ? s.
            default.createElement("a", {
                    className: "pb_companyLogoWrapper",
                    target: "_blank",
                    href: i,
                    rel: "noreferrer"
                },
                s.
            default.createElement(v.
            default, {
                    className: "pb_companyLogo",
                    src: r
                })) : null, o ? s.
            default.createElement("p", {
                    className: "pb_companyName"
                },
                s.
            default.createElement("a", {
                    className: "pb_caLink",
                    target: "_blank",
                    href: i,
                    rel: "noreferrer",
                    style: d
                },
                o || "")) : null), t ? null: c ? this._renderBase() : s.
            default.createElement("a", {
                    key: "mike",
                    className: "pb_mikeLogo",
                    target: "_blank",
                    rel: "noreferrer",
                    href: b
                }))
            }
            return t ? null: this._renderBase()
        },
        render: function() {
            var t = (this.form.extensions || {}).nologo,
            n = null;
            return n = t ? this.renderSelfLogo(!0) : this.form.extensions.copyrightLogo ? this.renderSelfLogo(!1) : this.renderNormal(),
            s.
        default.createElement("div", {
                className: (0, c.
            default)("copyright", {
                    "sm-display": this.isMobile()
                })
            },
            s.
        default.createElement("div", {
                className: (0, c.
            default)("c_main", {
                    "is-noLogo": t
                })
            },
            n))
        }
    });
    n.
default = y,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(19),
    o = r(i),
    s = a(27),
    l = r(s),
    u = a(23),
    c = r(u),
    d = a(22),
    f = r(d),
    m = a(17),
    p = a(8),
    h = a(26),
    g = r(h),
    v = a(7),
    b = a(81),
    y = r(b),
    E = a(86),
    C = a(87),
    T = r(C),
    S = a(38),
    M = "http://www.mikecrm.com?ref=form",
    I = o.
default.createClass({
        displayName:
        "FormLimitedError",
        mixins: [c.
    default, l.
    default],
        getInitialState: function() {
            return this.config = (0, m.getConfig)(),
            {
                wannaBuy: !1,
                confirmed_1: !1,
                confirmed_2: !1,
                confirmed_3: !1,
                prdPayVisible: !1
            }
        },
        openOneDayCDN: function() {
            this.setState({
                wannaBuy: !0
            })
        },
        onRefresh: function() {
            return this.config.isWx() ? void(location.href = (0, p.forceFreshUrl)(this.config.getBaseURL())) : void location.reload()
        },
        onConfirm_1: function() {
            this.setState({
                confirmed_1: !this.state.confirmed_1
            })
        },
        onConfirm_2: function() {
            this.setState({
                confirmed_2: !this.state.confirmed_2
            })
        },
        onConfirm_3: function() {
            this.setState({
                confirmed_3: !this.state.confirmed_3
            })
        },
        onBuyOneDayCDN: function() {
            var t = this.state,
            n = t.wannaBuy,
            a = t.confirmed_1,
            r = t.confirmed_2,
            i = t.confirmed_3,
            o = a && r && i;
            return o && n && this.setState({
                prdPayVisible: !0
            }),
            null
        },
        onClose: function() {
            this.setState({
                prdPayVisible: !1
            })
        },
        render: function() {
            var t = this.state,
            n = t.wannaBuy,
            a = t.confirmed_1,
            r = t.confirmed_2,
            i = t.confirmed_3,
            s = t.prdPayVisible,
            l = a && r && i,
            u = (0, m.getLang)();
            return o.
        default.createElement("div", {
                className: "err_form_limited"
            },
            o.
        default.createElement("div", {
                className: "err_item text limited",
                key: "tips"
            },
            o.
        default.createElement("p", {
                className: "err_title"
            },
            u.tLimitedTitle), o.
        default.createElement("p", {
                className: "err_blueTitle"
            },
            u.tLimitedSubTitle), o.
        default.createElement("p", {
                className: "err_subTitle hasMargin"
            },
            u.tLimitedDescribe, o.
        default.createElement("a", {
                className: "toWiki",
                target: "_blank",
                href: "http://wiki.mikecrm.com/cdn"
            },
            u.tTitleViewMore)), o.
        default.createElement("p", {
                className: "err_subTitle"
            },
            o.
        default.createElement("span", null, u.tLimitedGuide), o.
        default.createElement("span", {
                className: "err_stSupply"
            },
            u.tLimitedGuideBuy({
                buyLink: {
                    className: "buyLink",
                    onClick: this.openOneDayCDN
                }
            }))), n ? o.
        default.createElement("div", {
                className: "fb_submitterBuy"
            },
            o.
        default.createElement("p", {
                className: "fb_sbTitle"
            },
            u.tCDNTitle), o.
        default.createElement("div", {
                className: "fb_sbContent"
            },
            o.
        default.createElement("div", {
                className: "fb_sbTips"
            },
            o.
        default.createElement("p", {
                className: "fb_sbtTitle"
            },
            "我已阅读并确认以下信息："), o.
        default.createElement("p", {
                className: (0, f.
            default)("fb_sbTip", {
                    "checked": a
                }),
                onClick: this.onConfirm_1
            },
            o.
        default.createElement(E.BaseCheckButton, {
                className: "fb_sbTip_btn",
                active: a
            }), o.
        default.createElement("span", {
                className: "fb_sbTip_label"
            },
            "“专属访问资源”是在表单制作人不愿或暂未承担相应成本的情况下，麦客CRM产品提供的保障性服务，用于紧急情况下的表单访问与提交，与表单制作人无利益相关性。")), o.
        default.createElement("p", {
                className: (0, f.
            default)("fb_sbTip", {
                    "checked": r
                }),
                onClick: this.onConfirm_2
            },
            o.
        default.createElement(E.BaseCheckButton, {
                className: "fb_sbTip_btn",
                active: r
            }), o.
        default.createElement("span", {
                className: "fb_sbTip_label"
            },
            "为避免纠纷，我们并不推荐您购买此访问资源，因为表单制作人可能设置了选项配额等限制性业务逻辑，麦客对此无法感知与预料。")), o.
        default.createElement("p", {
                className: (0, f.
            default)("fb_sbTip", {
                    "checked": i
                }),
                onClick: this.onConfirm_3
            },
            o.
        default.createElement(E.BaseCheckButton, {
                className: "fb_sbTip_btn",
                active: i
            }), o.
        default.createElement("span", {
                className: "fb_sbTip_label"
            },
            "购买代表您清楚地知晓上述可能导致您最终并不能成功提交表单的风险，愿意自行承担此风险，并付出资金成本。"))), o.
        default.createElement("a", {
                className: (0, f.
            default)("fb_sbBtn", {
                    "disabled": !l
                }),
                onClick: this.onBuyOneDayCDN
            },
            u.tCDNOneDayBtn), o.
        default.createElement("p", {
                className: "fb_sbPrice"
            },
            u.tCDNOneDayPrice), o.
        default.createElement("p", {
                className: "fb_sbDes"
            },
            u.tCDNOneDayDes[0]), o.
        default.createElement("p", {
                className: "fb_sbDes"
            },
            u.tCDNOneDayDes[1]))) : o.
        default.createElement("p", {
                className: "err_subTitle"
            },
            u.tLimitedGuideUser), n ? null: o.
        default.createElement("div", {
                className: "fb_ssItem button"
            },
            o.
        default.createElement("a", {
                className: "fbc_button orange fbc_open",
                href: "mailBuyCDN.php"
            },
            u.tLimitedOpen), o.
        default.createElement("a", {
                className: "fbc_button fbc_refresh",
                onClick: this.onRefresh
            },
            u.tFormRefresh))), o.
        default.createElement(T.
        default, {
                visible: s,
                onClickAway: _.noop,
                onClose: this.onClose
            }))
        }
    }),
    N = o.
default.createClass({
        displayName:
        "HugeError",
        mixins: [c.
    default, l.
    default],
        childContextTypes: {
            updateEmbedContainer: o.
        default.PropTypes.func
        },
        getChildContext: function() {
            return {
                updateEmbedContainer: this.updateEmbedContainer
            }
        },
        getInitialState: function() {
            return this.form = (0, m.getFormStructure)(),
            this.store = (0, m.getStore)(),
            this.embed = (0, m.getEmbed)(),
            this.updateEmbedContainer = _.debounce(this._updateEmbedContainer, 300),
            this.sld = this.form.sld,
            {
                updateCount: 0
            }
        },
        componentDidMount: function() {
            this.unbind = (0, v.onResize)(this.handleResize),
            this.store.dispatch((0, S.CHECK_STYLE)()),
            this.updateEmbedContainer()
        },
        componentWillUnmount: function() {
            this.unbind && this.unbind()
        },
        _updateEmbedContainer: function() {
            this.embed && this.embed.inEmbed && this.embed.contentHeight()
        },
        handleResize: function() {
            var t = this;
            this.setState({
                updateCount: ++this.state.updateCount % 10
            },
            function() {
                t.updateEmbedContainer()
            })
        },
        render: function() {
            var t = null,
            n = this.store.getState();
            switch (n.form.formStatus) {
            case - 51 : t = {
                    image: window.rootPath("./images/form/err_encryption.png"),
                    title: (0, m.getLang)().rErrEncryption,
                    subTitle: (0, m.getLang)().rErrEncryptionDescribe
                };
                break;
            case - 52 : t = {
                    image: window.rootPath("./images/form/err_unExisted.png"),
                    title: (0, m.getLang)().tUneExitForm,
                    subTitle: (0, m.getLang)().tUneExitFormDescribe
                };
                break;
            case - 801 : t = {
                    image: window.rootPath("./images/form/err_banned.png"),
                    title: (0, m.getLang)().tBannedForm,
                    subTitle: (0, m.getLang)().tBannedFormDescribe
                };
                break;
            case - 802 : t = {
                    image: window.rootPath("./images/form/err_banned.png"),
                    title: (0, m.getLang)().tFrozenForm,
                    subTitle: (0, m.getLang)().tFrozenFormDescribe
                };
                break;
            case - 805 : t = {
                    image: window.rootPath("./images/form/err_banned.png"),
                    title: (0, m.getLang)().tUnPublishForm,
                    subTitle: (0, m.getLang)().tUnPublishFormDescribe
                };
                break;
            case - 812 : t = {
                    image: window.rootPath("./images/form/err_wrongSLD.png"),
                    title: (0, m.getLang)().tBannedForm,
                    subTitle: (0, m.getLang)().tBannedFormDescribe
                };
                break;
            case - 888 : t = {
                    image: window.rootPath("./images/form/err_sysUpdating.png"),
                    title: (0, m.getLang)().tUpdatingTitle,
                    subTitle: (0, m.getLang)().tUpdatingDescribe
                };
                break;
            case - 840 : t = {
                    image: window.rootPath("./images/form/err_limited.png"),
                    content: o.
                default.createElement(I, null)
                };
                break;
            case - 841 : t = {
                    image: window.rootPath("./images/form/err_protect.png"),
                    title: (0, m.getLang)().tFormProtect,
                    subTitle: [o.
                default.createElement("span", {
                        key: "c_1"
                    },
                    (0, m.getLang)().tFormProtectDescribe), o.
                default.createElement("br", {
                        key: "g_1"
                    }), o.
                default.createElement("span", {
                        key: "c_2"
                    },
                    (0, m.getLang)().tFormProtectGuide({
                        authCode: {
                            className: "toWiki",
                            onClick: function() {
                                window.open("http://wiki.mikecrm.com/captcha")
                            }
                        }
                    }))]
                };
                break;
            case - 80013 : t = {
                    image: window.rootPath("./images/form/err_wrongSLD.png"),
                    title: (0, m.getLang)().ckiClosedTitle,
                    subTitle: (0, m.getLang)().ckiClosedSubTitle
                };
                break;
            case - 9999 : var a = n.form.extData,
                r = a ? a.errInfo: null;
                t = {
                    image: window.rootPath("./images/form/err_netError.png"),
                    title: (0, m.getLang)().tSubmitErrorTitle,
                    subTitle: [o.
                default.createElement("span", {
                        key: "c_1"
                    },
                    (0, m.getLang)().tSubmitErrorFrontDescribe), o.
                default.createElement("br", {
                        key: "g_1"
                    }), o.
                default.createElement("span", {
                        key: "c_2"
                    },
                    (0, m.getLang)().tSubmitErrorFrontGuide), o.
                default.createElement("br", {
                        key: "g_2"
                    }), r ? o.
                default.createElement("span", {
                        key: "errorInfo"
                    },
                    r.status ? o.
                default.createElement("span", null, "[", o.
                default.createElement("strong", {
                        title: r.statusText
                    },
                    r.status), 200 !== r.status ? o.
                default.createElement("span", null, " | " + r.statusText) : null, "]") : null, r.responseText ? " : " + r.responseText: null) : null]
                }
            }
            return t ? o.
        default.createElement("div", {
                className: (0, f.
            default)("error_wrapper", {
                    "isMobile": this.isMobile()
                })
            },
            o.
        default.createElement("div", {
                className: "err_item image"
            },
            o.
        default.createElement(g.
        default, {
                className: "err_img",
                src: t.image
            })), t.title || t.subTitle ? o.
        default.createElement("div", {
                className: "err_item text",
                key: "tips"
            },
            o.
        default.createElement("p", {
                className: "err_title"
            },
            t.title), o.
        default.createElement("p", {
                className: "err_subTitle"
            },
            t.subTitle)) : null, t.content, o.
        default.createElement("div", {
                className: "copyright"
            },
            o.
        default.createElement("a", {
                className: "poweredBy_logo",
                target: "_blank",
                rel: "noreferrer",
                href: M
            })), o.
        default.createElement(y.
        default, {
                errorCode: n.form.formStatus
            })) : (console.error("[RENDER ERROR] no fit err type:", n.form.formStatus), null)
        }
    });
    n.
default = N,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    o = a(19),
    s = r(o),
    l = a(23),
    u = r(l),
    c = a(82),
    d = r(c),
    f = a(17),
    m = a(84),
    p = r(m),
    h = a(55),
    g = a(85),
    _ = s.
default.createClass({
        displayName:
        "ErrorAd",
        mixins: [u.
    default],
        getInitialState: function() {
            return this.deviceInfo = (0, f.getDeviceInfo)(),
            this.embed = (0, f.getEmbed)(),
            null
        },
        onDisplay: function(t) {
            var n = this.props.errorCode;
            return p.
        default.display(i({
                position:
                n,
                isMobile: this.deviceInfo.isMobile && !this.deviceInfo.os.tablet
            },
            t))
        },
        render: function() {
            var t = this.props.errorCode,
            n = (0, f.getMode)() === h.MODE_FILLING && p.
        default.getPositionCode(t) && (0, g.pltDisplay)();
            return n ? s.
        default.createElement(d.
        default, {
                size: this.deviceInfo.isMobile && !this.deviceInfo.os.tablet ? "360*120": "800*180",
                overThrough: !0,
                position: t,
                inEmbed: this.embed && this.embed.inEmbed,
                onDisplay: this.onDisplay
            }) : null
        }
    });
    n.
default = _,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    s = a(19),
    l = r(s),
    u = a(83),
    c = r(u),
    d = a(84),
    f = r(d),
    m = {
        display: "block",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        transform: "translateZ(0px)"
    },
    p = l.
default.createClass({
        displayName:
        "DRunner",
        getInitialState: function() {
            return {
                load: !1
            }
        },
        componentDidMount: function() {
            var t = this;
            this.props.onDisplay && (this.props.onDisplay({
                onFinish: this.props.onFinish
            }).then(function(n) {
                if (t.isMounted()) {
                    var a = n(t.content);
                    t.unlink = a.unlink
                }
            }), this.props.onLoad && this.props.onLoad())
        },
        componentWillUnmount: function() {
            this.unlink && this.unlink()
        },
        refContent: function(t) {
            this.content = t
        },
        render: function() {
            return l.
        default.createElement("span", {
                ref: this.refContent,
                style: m
            })
        }
    }),
    h = l.
default.createClass({
        displayName:
        "MAdDynamic",
        contextTypes: {
            updateEmbedContainer: l.
        default.PropTypes.func
        },
        getInitialState: function() {
            return {
                needHidden: !1,
                load: !!this.props.plt,
                plt: this.props.plt,
                failed: !1
            }
        },
        componentDidUpdate: function() {
            var t = this; ! this.state.load || this.state.plt || this.state.failed || f.
        default.position(this.props.position).then(function(n) {
                n ? t.setState({
                    plt: n
                }) : t.setState({
                    failed: !0
                })
            })
        },
        handleFinish: function() {
            var t = this;
            this.setState({
                needHidden: !0
            },
            function() {
                t.props.onFinish && t.props.onFinish(),
                t.context.updateEmbedContainer && t.context.updateEmbedContainer()
            })
        },
        handleLoad: function() {
            var t = this;
            this.setState({
                load: !0
            },
            function() {
                t.props.onLoad && t.props.onLoad(),
                t.context.updateEmbedContainer && t.context.updateEmbedContainer()
            })
        },
        render: function() {
            var t = this.state,
            n = t.plt,
            a = (t.load, t.needHidden),
            r = t.failed,
            s = this.props,
            u = s.style,
            d = s.onDisplay,
            m = (s.onLoad, s.onFinish, i(s, ["style", "onDisplay", "onLoad", "onFinish"])),
            h = n ? f.
        default.getHref(n):
            null;
            if (r) return null;
            var g = r || !n,
            _ = o({},
            u || {}),
            v = {};
            return a && (v.overflow = "hidden"),
            n || (_.height = 1, _.visibility = "hidden", _.margin = 0),
            l.
        default.createElement(c.
        default, o({
                style: _,
                contentStyle: v,
                href: h,
                hidden: g
            },
            m), l.
        default.createElement(p, {
                onFinish: this.handleFinish,
                onDisplay: d,
                onLoad: this.handleLoad
            }))
        }
    });
    n.
default = h,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    o = function() {
        function t(t, n) {
            var a = [],
            r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done) && (a.push(s.value), !n || a.length !== n); r = !0);
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l["return"] && l["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return a
        }
        return function(n, a) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    s = a(6),
    l = r(s),
    u = a(19),
    c = r(u),
    d = a(20),
    f = r(d),
    m = a(23),
    p = r(m),
    h = function() {
        return ( + ("" + (Math.random() * Math.random() * 2222 >>> 0) + +new Date)).toString(36)
    },
    g = "data:image/svg+xml,%3Csvg viewBox='0 0 78 24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2'%3E%3Cpath d='M78 0H12C5.377 0 0 5.377 0 12v12h66c6.623 0 12-5.377 12-12V0z' fill='%235d5d5d' fill-opacity='.2'/%3E%3Cg fill='%23fff' fill-rule='nonzero'%3E%3Cpath d='M48.107 6.63h-2.246c1.029-.568 1.029-2.561-2.527-2.622l-.11.076c.515.598 1.03 1.518 1.17 2.408a.806.806 0 0 0 .25.138h-3.416l-2.824-.905v4.83c0 2.637-.062 5.627-1.404 7.943l.109.092c3.557-2.086 3.76-5.444 3.76-8.035V7.059h10.218c.234 0 .405-.077.452-.245-.795-.736-2.199-1.871-2.199-1.871L48.107 6.63zM57.186 16.781v-3.682h5.648v3.682h-5.648zm5.476-4.109h-5.335l-2.356-.89v6.791h.312c.921 0 1.903-.475 1.903-.674v-.69h5.648v1.211h.39c.733 0 1.856-.383 1.872-.491v-4.446c.358-.077.561-.23.67-.353l-2.09-1.548-1.014 1.09zm1.42-2.423h-2.855V7.365h4.571c.234 0 .405-.077.452-.245-.811-.704-2.184-1.732-2.184-1.732l-1.217 1.549h-1.622v-2.27c.437-.062.546-.218.577-.435L58.887 4v2.937h-2.122c.359-.567.655-1.135.889-1.702.359 0 .546-.154.609-.338l-2.917-.774c-.219 1.94-.796 4.224-1.638 5.651l.171.122c1.045-.644 1.919-1.549 2.605-2.531h2.403v2.884H52.74l.125.428h14.087c.234 0 .406-.077.452-.245-.78-.704-2.137-1.748-2.137-1.748l-1.185 1.565z'/%3E%3C/g%3E%3Cpath d='M24.476 12.048l4.542 6.928h3.086L28.447 5.791l-3.971 6.257zM9 19l2.405-.028 3.214-3.353-3.667-5.048L9 19z' fill='%23fff' fill-rule='nonzero'/%3E%3Cpath d='M17.786 12.357l-1.929-2.786-.011 2.552 1.94.234z' fill='%234cdb3b'/%3E%3Cpath d='M17.926 13.752l-.164-1.407-1.901-.234 2.065 1.641z' fill='%2300d670'/%3E%3Cpath d='M18.524 19l-.598-5.248-2.069-1.629L18.524 19z' fill='%2300b158' fill-rule='nonzero'/%3E%3Cpath d='M24.619 5l-6.826 7.317 4.625-2.262L24.619 5z' fill='%2353a8f5' fill-rule='nonzero'/%3E%3Cpath d='M17.922 13.709l-.16-1.376 4.656-2.278-.001.001-4.495 3.653z' fill='%234cb8f3'/%3E%3Cpath d='M17.922 13.71l.602 5.29 3.893-8.944-4.495 3.654z' fill='%230089de' fill-rule='nonzero'/%3E%3Cpath d='M18.524 19l5.861-8.679-1.973-.257L18.524 19z' fill='%230071c0' fill-rule='nonzero'/%3E%3Cpath d='M24.619 5l-.282 5.432L28.048 5h-3.429z' fill='%234a40bc' fill-rule='nonzero'/%3E%3Cpath d='M22.429 10.059l1.968.274.222-5.327-2.19 5.053z' fill='%236a61ce' fill-rule='nonzero'/%3E%3Cpath d='M14.819 14.17L18.524 19l-2.678-6.889-1.027 2.059z' fill='%23fac200' fill-rule='nonzero'/%3E%3Cpath d='M11.286 9.571l2.952 1.334 1.619-1.334h-4.571z' fill='%23fe6f65'/%3E%3Cpath d='M14.804 14.202l-.566-3.297 1.608 1.206-1.042 2.091z' fill='%23f67800'/%3E%3Cpath d='M15.857 9.571v2.54l-1.619-1.206 1.619-1.334z' fill='%23f99b49'/%3E%3Cpath d='M11.286 9.571l2.952 1.334.55 3.234-3.502-4.568z' fill='%23fc3930'/%3E%3C/svg%3E",
    _ = [],
    v = l.
default.debounce(function(e) {
        l.
    default.forEach(_,
        function(t) {
            l.
        default.isFunction(t) && t(e)
        }),
        setTimeout(function() {
            l.
        default.forEach(_,
            function(t) {
                l.
            default.isFunction(t) && t(e)
            })
        },
        600)
    },
    300);
    "onresize" in window && window.addEventListener("resize", v),
    "onorientationchange" in window && window.addEventListener("orientationchange", v);
    var b = function(t) {
        var n = _.length;
        return l.
    default.isFunction(t) ? (_.push(t), n) : -1
    },
    y = function(t) {
        t > -1 && (_ = _.slice(), _.splice(t, 1))
    },
    E = c.
default.createClass({
        displayName:
        "MAd",
        mixins: [p.
    default],
        getDefaultProps: function() {
            return {
                size: "720*100"
            }
        },
        getInitialState: function() {
            var t = this.className = "g" + h(),
            n = this.props,
            a = n.size,
            r = n.position,
            i = n.overThrough,
            o = n.inEmbed;
            return this.unStyled = this.styled(t, {
                size: a,
                position: r,
                overThrough: i,
                inEmbed: o
            }),
            this._measureIdx = null,
            {
                display: !0,
                height: null
            }
        },
        styled: function(t, n) {
            var a = this,
            r = "styled_" + t,
            i = (n.size || "").split("*"),
            s = o(i, 2),
            u = s[0],
            c = s[1];
            this.ratio = u / c;
            var d = null,
            f = document.head || document.getElementsByTagName("head")[0],
            m = document.createElement("style");
            if (d = n.overThrough ? ["." + t + " { width:100%; margin-left:auto; margin-right: auto; margin-bottom: 20px; margin-top:10px; position: relative; " + (n.inEmbed ? "": "position: sticky; bottom: 10px; ") + "transform: translateZ(1px) }", "." + t + "c { display: block; max-width: 100%; max-height: 100%; margin: 0 auto; }"] : ["." + t + " { max-width: " + +u + "px; max-height: " + +c + "px; margin-left:auto; margin-right: auto; margin-bottom: 20px; margin-top:10px; position: relative; " + (n.inEmbed ? "": "position: sticky; bottom: 10px; ") + "}", "." + t + "w { display: block; height: 100%; position: relative }", "." + t + "c { display: block; width: 100%; height: 100%; }"], d.push("." + t + 'tag { position:absolute; right: 0; bottom: 0; font-size: 12px; padding: 2px; transform-origin: right bottom; background-image: url("' + g + '"); background-size: contain; width:26px; height:8px; background-repeat: no-repeat; }'), this._baseStyle = d.join(" "), this._measureStyle = [], this.needSizeMeasure = !0, n.position) switch (n.position) {
            case "afterSubmit":
                d.push("." + t + " { margin-top: 32px; margin-bottom: 12px; }");
                break;
            case "error":
                d.push("." + t + " { margin-top: 5px; margin-bottom: 8px; }")
            }
            return m.type = "text/css",
            m.id = r,
            f.appendChild(m),
            m.styleSheet ? m.styleSheet.cssText = d.join(" ") : l.
        default.forEach(d,
            function(t) {
                m.appendChild(document.createTextNode(t))
            }),
            this._style = m,
            function() {
                f.removeChild(m),
                m = a._style = null
            }
        },
        styleMeasure: function() {
            var t = this,
            n = this.props,
            a = n.overThrough,
            r = n.position,
            i = n.hidden,
            s = n.sticky;
            if (!i) {
                var u = (this.props.size || "").split("*"),
                c = o(u, 2),
                d = c[0],
                m = (c[1], f.
            default.findDOMNode(this.ad)),
                p = m.offsetLeft,
                h = m.parentNode.clientWidth - m.clientWidth - m.offsetLeft,
                g = Math.min(m.parentNode.clientWidth, d);
                if (this._style) {
                    var _ = ["." + this.className + " { height: " + Math.round(g / this.ratio) + "px; }", "." + this.className + "w { display: block; position: absolute; left: " + (a ? -p: 0) + "px; right: " + (a ? -h: 0) + "px; top: 0; height: " + Math.round(g / this.ratio) + "px; text-align: center; max-width: " + g + "px; margin: 0 auto; }"];
                    2 === r && s && _.push(".submitWrapper_sticky {bottom: " + Math.round(g / this.ratio) + "px; box-shadow: none; }"),
                    this._style.styleSheet ? (this._baseStyle || (this._baseStyle = this._style.styleSheet.cssText), this._style.styleSheet.cssText = this._baseStyle + _.join(" ")) : (this._measureStyle && this._measureStyle.length > 0 && (l.
                default.forEach(this._measureStyle,
                    function(n) {
                        t._style.removeChild(n)
                    }), this._measureStyle = []), l.
                default.forEach(_,
                    function(n) {
                        var a = document.createTextNode(n);
                        t._measureStyle.push(a),
                        t._style.appendChild(a)
                    }))
                }
            }
        },
        componentDidMount: function() {
            this.needSizeMeasure && (this.styleMeasure(), this._measureIdx = b(this.styleMeasure.bind(this)))
        },
        componentDidUpdate: function() {
            this.needSizeMeasure && this.styleMeasure()
        },
        componentWillUnmount: function() {
            this.unStyled && this.unStyled(),
            null != this._measureIdx && y(this._measureIdx),
            this._measureIdx = null
        },
        handleError: function() {
            this.setState({
                display: !1
            })
        },
        _refAd: function(t) {
            this.ad = t
        },
        renderContent: function() {
            var t = this.props,
            n = t.src,
            a = t.href,
            r = t.contentStyle,
            i = t.children,
            o = null;
            return o = i ? i: c.
        default.createElement("img", {
                className: this.className + "c",
                src: n,
                onError: this.handleError
            }),
            c.
        default.createElement("a", {
                className: this.className + "w",
                href: a,
                target: "_blank",
                style: r
            },
            o)
        },
        render: function() {
            var t = this.state,
            n = t.display,
            a = t.height,
            r = this.props.style;
            return c.
        default.createElement("div", {
                className: this.className,
                style: i({
                    display: n ? null: "none",
                    height: a
                },
                r),
                ref: this._refAd
            },
            n ? this.renderContent() : null, c.
        default.createElement("span", {
                className: this.className + "tag"
            }))
        }
    });
    n.
default = E,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    i = "210304",
    o = function() {},
    s = "https://cdnq2plt.mikecrm.com/",
    l = "https://plt.mikecrm.com/runtime/",
    u = function(t, n) {
        return new Promise(function(a, r) {
            var i = new XMLHttpRequest;
            i.open("POST", t, !0),
            i.withCredentials = !0,
            i.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"),
            i.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"),
            i.onreadystatechange = function() {
                if (i.readyState === XMLHttpRequest.DONE && 200 === i.status) if (i.responseText) try {
                    a(JSON.parse(i.responseText))
                } catch(t) {
                    r(t)
                } else a(null)
            };
            var o = [];
            for (var s in n) n.hasOwnProperty(s) && n[s] && o.push(s + "=" + n[s]);
            i.send(o)
        })
    },
    c = {},
    d = function(t, n, a) {
        var r = void 0;
        if (n && n.trim && (r = n), r && r in c) return c[r];
        var i = function t(n, a, r, i) {
            var o = 3,
            s = r,
            l = window.document,
            e = l.createElement("script");
            e.type = "text/javascript",
            e.charset = "utf-8",
            e.src = n,
            e.async = !a || (void 0 === a.async || a.async),
            e.onload = e.onerror = function(r) {
                var u = r.type[0];
                return "e" === u && (s += 1, l.head.removeChild(e), s <= o) ? t(n, a, s, i) : void i(n, u, r.defaultPrevented)
            },
            l.head.appendChild(e)
        },
        o = new Promise(function(n, r) {
            i(t, a, 0,
            function(t, a) {
                "l" === a ? n(!0) : r()
            })
        });
        return r && (c[r] = o),
        o
    },
    f = function(t) {
        return h[t]
    },
    m = function(t) {
        if (1 === t) return "VST";
        if (2 === t) return "VST";
        if (0 === t) return "SMTTED";
        switch (t) {
        case - 801 : case - 802 : case - 804 : case - 822 : case - 823 : case - 824 : case - 825 : case - 826 : case - 827 : case - 840 : return "VSTERR." + Math.abs(t)
        }
        return null
    },
    p = function(t) {
        var n = /micromessenger/i.test(window.navigator.userAgent);
        return {
            "SYS.ENV.WC": n ? "1": "0"
        }
    } (),
    h = {},
    g = {},
    v = function(t) {
        return ! 1
    },
    b = function() {
        return d(s + "plt.js?v=" + i, "plt")
    },
    y = function(t, n, a) {
        n && _.forEach(t.getPayloadList(n.pu, n.u, a),
        function(n) {
            var a = "",
            r = null;
            n.match(/\.js$/) ? a = "script": n.match(/\.json$/) ? (a = "fetch", r = "anonymous") : n.match(/\.(png|jpg)$/) && (a = "image", r = "anonymous"),
            t.preload("" + s + n + ("image" === a ? "": "?v=" + i), a, r)
        })
    },
    E = function(t) {
        var n = t.position,
        a = t.isMobile,
        i = m(n);
        i && (h[i] = b().then(function() {
            return u(l + "preload_pos.php", {
                d: JSON.stringify({
                    cvs: r({
                        "SYS.POS": i
                    },
                    p)
                })
            })
        }).then(function(t) {
            return PLT ? (y(PLT, t, a), t) : null
        }).
        catch(function(t) {
            return console.error(t),
            null
        }))
    },
    C = function(t) {
        var n = t.position,
        a = t.isMobile,
        r = t.onFinish,
        c = m(n);
        return f(c).then(function(t) {
            if (t) {
                if (v(c)) return null;
                g[c] = !0;
                var n = function() {
                    u(l + "disp_pos.php", {
                        d: JSON.stringify({
                            cvs: {
                                u: t.u,
                                "SYS.POS": c
                            }
                        })
                    })
                },
                d = new window.PLT.Render(1, t.pu, t.u, {
                    version: i,
                    host: s,
                    onStart: n,
                    onFinish: r || o
                });
                return function(t) {
                    return d.render(t, {
                        href: location.href,
                        isMobile: a
                    })
                }
            }
            return null
        })
    },
    T = function(t) {
        var n = t.position,
        a = t.isMobile,
        c = t.onFinish,
        d = m(n);
        if (d) return h[d] = b().then(function() {
            return u(l + "ldisp_pos.php", {
                d: JSON.stringify({
                    cvs: r({
                        "SYS.POS": d
                    },
                    p)
                })
            })
        }).then(function(t) {
            return v(d) ? null: (g[d] = !0, PLT && t ? (y(PLT, t, a), t) : null)
        }).
        catch(function(t) {
            return console.error(t),
            null
        }),
        h[d].then(function(t) {
            if (t) {
                var n = new window.PLT.Render(1, t.pu, t.u, {
                    version: i,
                    host: s,
                    onFinish: c || o
                });
                return function(t) {
                    return n.render(t, {
                        href: location.href,
                        isMobile: a
                    })
                }
            }
            return function() {
                return {}
            }
        })
    },
    S = function(t) {
        var n = m(t);
        return Promise.resolve(f(n))
    },
    M = function(t) {
        return l + "visit.php?u=" + t.u
    };
    n.
default = {
        position: S,
        getPositionCode: m,
        getHref: M,
        prepare: E,
        displayPrepared: C,
        display: T
    },
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.getFillingPosition = n.pltDisplayRInView = n.pltDisplayInView = n.pltDisplay = void 0;
    var r = a(17),
    i = a(55),
    o = n.pltDisplay = function() {
        var t = (0, r.getFormStructure)(),
        n = t.tail,
        a = t.extensions.nologo,
        i = t.extensions.copyrightLogo;
        return ! (!window._PLT || !window._PLT[0] || i && 3 === n.copyrightType || a)
    },
    s = n.pltDisplayInView = function() {
        return o() && window._PLT[1]
    },
    l = function(t) {
        return 1e3 * Math.random() <= (t || 200)
    },
    u = n.pltDisplayRInView = function() {
        return o() && l(window._PLT[2])
    };
    n.getFillingPosition = function() {
        var t = (0, r.getFormStructure)();
        if (t.settings.isOnlyWeChat && !(0, r.getConfig)().isWx()) return null;
        if ((0, r.getMode)() === i.MODE_PREVIEW) return null;
        if (s()) return 2;
        var n = !1,
        a = 0,
        o = t.tail.isHideBtn;
        return _.forEach(t.components,
        function(t) { (0, i.isFillingComponent)(t) && a++,
            "button" === (0, i.getComponentType)(t) && t && t.btnAction && 1 === +t.btnAction && (o = !0)
        }),
        o || (n = !0),
        n || 0 !== a || t.components && !(Object.keys(t.components).length < 5) || (n = !0),
        n && u() ? 1 : null
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = a(22),
    o = r(i),
    s = a(19),
    l = r(s),
    u = a(23),
    c = r(u),
    d = l.
default.createClass({
        displayName:
        "BaseRadio",
        mixins: [c.
    default],
        getStyle: function(t) {
            var n = this.props,
            a = n.active,
            r = n.disabled;
            if (t && t.
        default) {
                var i = t.
            default;
                return r && t.disabled ? i = _.assign({},
                i, t.disabled) : t.active && a && (i = _.assign({},
                i, t.active)),
                i
            }
            return t
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.active,
            r = t.disabled,
            i = t.style,
            s = "bb-radio";
            return l.
        default.createElement("span", {
                className: (0, o.
            default)(s, {
                    "active": a,
                    "disabled": r
                },
                n),
                style: this.getStyle(i)
            },
            l.
        default.createElement("span", {
                className: s + "-outCircle"
            }), l.
        default.createElement("span", {
                className: s + "-innerCircle"
            }))
        }
    }),
    f = l.
default.createClass({
        displayName:
        "BaseCheckbox",
        mixins: [c.
    default],
        getStyle: function(t) {
            var n = this.props,
            a = n.active,
            r = n.disabled;
            if (t && t.
        default) {
                var i = t.
            default;
                return r && t.disabled ? i = _.assign({},
                i, t.disabled) : t.active && a && (i = _.assign({},
                i, t.active)),
                i
            }
            return t
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.active,
            r = t.disabled,
            i = t.style,
            s = "bb-checkbox";
            return l.
        default.createElement("span", {
                className: (0, o.
            default)(s, {
                    "active": a,
                    "disabled": r
                },
                n),
                style: this.getStyle(i)
            },
            l.
        default.createElement("svg", {
                className: s + "-inner",
                viewBox: "0 0 24 24"
            },
            l.
        default.createElement("path", {
                className: s + "-check",
                fill: "none",
                stroke: "white",
                d: "M1.73,12.91 8.1,19.28 22.79,4.59"
            })))
        }
    }),
    m = l.
default.createClass({
        displayName:
        "BaseCheckButton",
        mixins: [c.
    default],
        getStyle: function(t) {
            var n = this.props,
            a = n.active,
            r = n.disabled;
            if (t && t.
        default) {
                var i = t.
            default;
                return r && t.disabled ? i = _.assign({},
                i, t.disabled) : t.active && a && (i = _.assign({},
                i, t.active)),
                i
            }
            return t
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.active,
            r = t.disabled,
            i = t.style,
            s = "bb-check-button";
            return l.
        default.createElement("span", {
                className: (0, o.
            default)(s, {
                    "active": a,
                    "disabled": r
                },
                n),
                style: this.getStyle(i)
            },
            l.
        default.createElement("svg", {
                className: s + "-inner",
                viewBox: "0 0 24 24"
            },
            l.
        default.createElement("path", {
                className: s + "-check",
                fill: "none",
                stroke: "white",
                d: "M1.73,12.91 8.1,19.28 22.79,4.59"
            })))
        }
    });
    n.
default = {
        BaseRadio: d,
        BaseCheckbox: f,
        BaseCheckButton: m
    },
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    s = a(19),
    l = r(s),
    u = a(22),
    c = r(u),
    d = a(28),
    f = r(d),
    m = a(37),
    p = r(m),
    h = a(33),
    g = r(h),
    v = a(36),
    b = a(60),
    y = r(b),
    E = a(23),
    C = r(E),
    T = a(88),
    S = r(T),
    M = a(17),
    I = a(89),
    N = a(55),
    A = a(8),
    k = a(93),
    x = a(62),
    D = r(x),
    O = a(66),
    P = (a(94), (0, f.
default)((0, p.
default)(g.
default))),
    L = l.
default.createClass({
        displayName:
        "PrdPaying",
        mixins: [C.
    default],
        getInitialState: function() {
            return null
        },
        componentDidMount: function() {
            this.props.store.dispatch((0, I.PRD_CHECK)())
        },
        handleForgoPayment: function(e) {
            this.props.store.dispatch((0, I.PRD_CANCEL)()),
            this.props.onCancel && this.props.onCancel(e)
        },
        renderPaymentContent: function() {
            var t = this.props,
            n = t.paymentRes,
            a = t.paymentMethod;
            return l.
        default.createElement(D.
        default, {
                type: a,
                onForgoPayment: this.handleForgoPayment,
                prdMode: !0,
                cashier: n
            })
        },
        render: function() {
            var t = this.props,
            n = t.paymentRes,
            a = t.prdList,
            r = t.prdSelected,
            i = a ? _.find(a, {
                prdId: r
            }) : null,
            o = (0, M.getLang)();
            return l.
        default.createElement("div", {
                className: "pay_online"
            },
            l.
        default.createElement("div", {
                className: "pay_orderInfo"
            },
            l.
        default.createElement("p", {
                className: "pay_oNo"
            },
            l.
        default.createElement("span", {
                className: "title"
            },
            o.cPayOrderNo), l.
        default.createElement("span", {
                className: "orderNo"
            },
            n._DNT)), l.
        default.createElement("p", {
                className: "pay_oPrice"
            },
            l.
        default.createElement("span", {
                className: "title"
            },
            o.cPayNeedPay), l.
        default.createElement(y.
        default, {
                className: "price",
                symbol: "￥",
                price: (i.prdPrice || {})[1]
            }))), this.renderPaymentContent(), l.
        default.createElement("p", {
                className: "pay_operate"
            },
            l.
        default.createElement(v.BaseBtn, {
                className: "pay_oOtherMode",
                onClick: this.handleForgoPayment
            },
            o.cPayChooseOtherMethod), l.
        default.createElement(v.BaseBtn, {
                className: "pay_oAlterOrder",
                onClick: this.handleForgoPayment
            },
            o.cPayAlterOrder)))
        }
    }),
    w = l.
default.createClass({
        displayName:
        "PrdItem",
        mixins: [C.
    default],
        render: function() {
            var t = this.props,
            n = t.active,
            a = t.loading,
            r = t.info;
            return l.
        default.createElement(v.BaseBtn, {
                component: "div",
                className: (0, c.
            default)("fb_sbpItem", {
                    active: n
                })
            },
            l.
        default.createElement("p", {
                className: (0, c.
            default)("fb_sbpiPrice")
            },
            l.
        default.createElement("span", {
                className: (0, c.
            default)({
                    "skeleton_mode":
                    a
                })
            },
            r ? l.
        default.createElement(y.
        default, {
                symbol: "￥",
                price: (r.prdPrice || {})[1]
            }) : "￥ 0.00")), l.
        default.createElement("p", {
                className: (0, c.
            default)("fb_sbpiName")
            },
            l.
        default.createElement("span", {
                className: (0, c.
            default)({
                    "skeleton_mode":
                    a
                })
            },
            r ? r.prdName: "prd name")))
        }
    }),
    R = l.
default.createClass({
        displayName:
        "PopPrdPay",
        mixins: [C.
    default],
        getInitialState: function() {
            return this.config = (0, M.getConfig)(),
            this.store = S.
        default.init(),
            this.store.getState()
        },
        componentDidMount: function() {
            this.unsubscribe = this.store.addChangeListener(this.onStateChange)
        },
        componentDidUpdate: function(t) { ! this.props.visible && t.visible ? this.store.dispatch((0, I.RESET)()) : !this.props.visible || t.visible || this.state.prdInfo || this.store.dispatch((0, I.PRD_PREPARE)({
                prdGrId: 48
            }))
        },
        componentWillUnmount: function() {
            this.unsubscribe && this.unsubscribe(),
            this.store.close()
        },
        onStateChange: function() {
            var t = this.store.getState();
            this.setState(t)
        },
        onChangePaymentMethod: function(e, t) {
            this.store.dispatch((0, I.CHANGE_PRD_PAY_METHOD)({
                paymentMethod: t.id
            }))
        },
        onPayment: function() {
            this.store.dispatch((0, I.PRD_PAY)())
        },
        onFinishPaidClose: function() {
            var t = this.props.onClose;
            return this.config.isWx() ? void(location.href = (0, A.forceFreshUrl)(this.config.getBaseURL())) : (location.reload(), void(t && t()))
        },
        _renderPrd: function() {
            var t = this,
            n = this.state,
            a = n.prdInfo,
            r = n.prdList,
            i = n.prdSelected,
            o = n.paymentMethod,
            s = n.prdError,
            u = (0, M.getLang)();
            if (s) {
                var d = this.props.onClose,
                f = null;
                switch (s) {
                case - 804 : f = u.tStoppedForm;
                    break;
                default:
                    f = "[" + s + "] ERROR!"
                }
                return l.
            default.createElement("div", {
                    className: "pay_error"
                },
                l.
            default.createElement("p", {
                    className: "pay_errTips"
                },
                f), l.
            default.createElement("div", {
                    className: "pay_operate"
                },
                l.
            default.createElement(v.BaseBtn, {
                    className: "btn_normal btn_close",
                    onClick: d
                },
                u.cPayKnowIt)))
            }
            var m = null,
            p = r ? _.find(r, {
                prdId: i
            }) : null;
            return p && i && (m = p.prdNo),
            l.
        default.createElement("div", {
                className: "fb_sbPop"
            },
            l.
        default.createElement("p", {
                className: (0, c.
            default)("fb_sbpName")
            },
            l.
        default.createElement("span", {
                className: (0, c.
            default)({
                    "skeleton_mode":
                    !a
                })
            },
            a ? a.name: "loading name")), l.
        default.createElement("p", {
                className: (0, c.
            default)("fb_sbpNo")
            },
            l.
        default.createElement("span", {
                className: (0, c.
            default)({
                    "skeleton_mode":
                    !a
                })
            },
            m || "  ")), l.
        default.createElement("div", {
                className: "fb_sbpList"
            },
            r ? _.map(r,
            function(t) {
                return l.
            default.createElement(w, {
                    key: "prd" + t.prdId,
                    info: t,
                    active: t.prdId === i
                })
            }) : l.
        default.createElement(w, {
                loading: !0,
                key: "loading"
            })), l.
        default.createElement("ul", {
                className: "fb_paymentMethod"
            },
            _.map((0, N.SUPPORT_PAYMENT_METHOD)(),
            function(n) {
                return [1, 2].indexOf(n.id) === -1 ? null: ((0, A.inIframe)() || t.config.isWx() || T.isInQQ) && 1 === n.id ? null: l.
            default.createElement(k.PayMethod, {
                    className: "fb_pmItemNum2",
                    frozen: !a,
                    key: "pay" + n.id,
                    data: n,
                    active: o === n.id,
                    onClick: t.onChangePaymentMethod
                })
            })), l.
        default.createElement("div", {
                className: "fb_sbpOperate"
            },
            l.
        default.createElement(v.BaseBtn, {
                className: "btn_normal orange",
                onClick: this.onPayment,
                loading: !a,
                disabled: !a
            },
            u.tGoToPay)))
        },
        renderContent: function() {
            var t = this.props.onClose,
            n = this.state,
            a = n.step,
            r = n.paymentRes;
            switch (a) {
            case T._STEP_PRD:
                return this._renderPrd();
            case T._STEP_PAID:
                return l.
            default.createElement(O.IFPSNormal, {
                    isPrd: !0,
                    payment: r,
                    onClose: this.onFinishPaidClose
                });
            case T._STEP_PAYING:
                return l.
            default.createElement(L, o({},
                this.state, {
                    store: this.store,
                    onCancel: t
                }))
            }
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.onClose,
            r = i(t, ["className", "onClose"]),
            s = this.state.step,
            u = (0, M.getLang)(),
            d = u.tCDNOneDayBtn;
            return s === T._STEP_PAYING && (d = u.cPayOnlineTitle),
            l.
        default.createElement(P, o({
                className: (0, c.
            default)("cp-popwin", "sys-popwin", n)
            },
            r), l.
        default.createElement("div", {
                className: "cp-popBox prd-pay"
            },
            l.
        default.createElement("div", {
                className: "pop-header"
            },
            l.
        default.createElement("p", {
                className: "pop-title"
            },
            u.tCDNOneDayBtn), l.
        default.createElement("a", {
                className: "iconfont pop_close",
                onClick: a
            },
            String.fromCharCode(58982))), this.renderContent()))
        }
    });
    n.
default = R,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    function o() {
        var t, n, a;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
            case 0:
                return r.next = 3,
                (0, m.take)(f._PRD_PREPARE);
            case 3:
                return t = r.sent,
                r.next = 6,
                (0, m.call)(p.getFormStructure);
            case 6:
                return n = r.sent,
                r.next = 9,
                (0, m.call)(h.prepareProduction, {
                    t: n.token,
                    pgi: t.prdGrId
                });
            case 9:
                return a = r.sent,
                r.next = 12,
                (0, m.put)((0, f.PRD_PREPARE_FIN)({
                    res: a
                }));
            case 12:
                r.next = 0;
                break;
            case 14:
            case "end":
                return r.stop()
            }
        },
        b, this)
    }
    function s() {
        var t, n, a, r, o, s, l;
        return regeneratorRuntime.wrap(function(u) {
            for (;;) switch (u.prev = u.next) {
            case 0:
                return u.next = 3,
                (0, m.take)(f._PRD_PAY);
            case 3:
                return t = u.sent,
                u.next = 6,
                (0, m.get)();
            case 6:
                return n = u.sent,
                u.next = 9,
                (0, m.call)(p.getFormStructure);
            case 9:
                return a = u.sent,
                r = _.
            default.find(n.prdList, {
                    prdId: n.prdSelected
                }),
                u.next = 13,
                (0, m.call)(h.buyProduct, {
                    p: n.prdSelected,
                    c: 1,
                    a: r ? (r.prdPrice || {})[1] : null,
                    m: n.paymentMethod,
                    d: v.deviceInfo.isFuzzyMobile ? 2 : 1,
                    ext: {
                        frToken: a.token
                    }
                });
            case 13:
                if (o = u.sent, 0 !== o.r) {
                    u.next = 20;
                    break
                }
                return s = o.r,
                l = i(o, ["r"]),
                u.next = 18,
                (0, m.put)((0, f.PRD_PAY_SUCCEED)({
                    data: l
                }));
            case 18:
                u.next = 22;
                break;
            case 20:
                return u.next = 22,
                (0, m.put)((0, f.PRD_PAY_FAILED)({
                    data: o
                }));
            case 22:
                u.next = 0;
                break;
            case 24:
            case "end":
                return u.stop()
            }
        },
        y, this)
    }
    function l(t, n) {
        var a, r, i, o, s;
        return regeneratorRuntime.wrap(function(l) {
            for (;;) switch (l.prev = l.next) {
            case 0:
                l.prev = 0,
                a = !1,
                r = 1500,
                i = 0;
            case 2:
                if (a) {
                    l.next = 15;
                    break
                }
                return l.next = 5,
                (0, m.delay)(r * (1 + ++i % 2));
            case 5:
                return l.next = 7,
                (0, m.call)(h.checkPaymentStatus, {
                    t: t,
                    n: n
                });
            case 7:
                if (o = l.sent, 0 !== o.r || 1 !== +o.dn) {
                    l.next = 13;
                    break
                }
                return s = {
                    isFin: 1 === +o.dn,
                    isSuccess: 1 === +o.sc,
                    message: o.msg || null
                },
                l.next = 12,
                (0, m.put)((0, f.PRD_FINISH_PAY)({
                    data: s
                }));
            case 12:
                a = !0;
            case 13:
                l.next = 2;
                break;
            case 15:
                return l.prev = 15,
                l.next = 18,
                (0, m.cancelled)();
            case 18:
                if (!l.sent) {
                    l.next = 19;
                    break
                }
            case 19:
                return l.finish(15);
            case 20:
            case "end":
                return l.stop()
            }
        },
        E, this, [[0, , 15, 20]])
    }
    function u() {
        var t, n, a;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
            case 0:
                return r.next = 3,
                (0, m.take)(f._PRD_CHECK);
            case 3:
                return r.next = 5,
                (0, m.get)();
            case 5:
                if (t = r.sent, n = t.paymentRes, !n._DMWT || !n._NODE) {
                    r.next = 15;
                    break
                }
                return r.next = 10,
                (0, m.fork)(l, n._DMWT, n._NODE);
            case 10:
                return a = r.sent,
                r.next = 13,
                (0, m.take)(f._PRD_CANCEL);
            case 13:
                return r.next = 15,
                (0, m.cancel)(a);
            case 15:
                r.next = 0;
                break;
            case 17:
            case "end":
                return r.stop()
            }
        },
        C, this)
    }
    function c(t) {
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
            case 0:
                return t.next = 2,
                (0, m.all)([(0, m.fork)(o), (0, m.fork)(s), (0, m.fork)(u)]);
            case 2:
            case "end":
                return t.stop()
            }
        },
        T, this)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n._STEP_PAID = n._STEP_PAYING = n._STEP_PRD = n.isInQQ = void 0;
    var d = a(39),
    f = a(89),
    m = a(42),
    p = a(17),
    h = a(90),
    g = a(6),
    _ = r(g),
    v = a(8),
    b = regeneratorRuntime.mark(o),
    y = regeneratorRuntime.mark(s),
    E = regeneratorRuntime.mark(l),
    C = regeneratorRuntime.mark(u),
    T = regeneratorRuntime.mark(c),
    S = (n.isInQQ = navigator.userAgent.match(/QQ\//i), n._STEP_PRD = 1),
    M = n._STEP_PAYING = 2,
    I = n._STEP_PAID = 3,
    N = {
        paymentMethod: 2,
        step: S,
        paymentRes: null,
        prdError: null,
        prdInfo: null,
        prdList: null,
        prdSelected: null
    },
    A = function(t) {
        var n = t,
        a = [];
        return _.
    default.forEach(n.p.l,
        function(t) {
            var n = _.
        default.zipObject(["prdId", "prdNo", "prdName", "prdPriceCn", "prdPriceEn"], t);
            n.prdPrice = {
                1 : n.prdPriceCn,
                2 : n.prdPriceEn
            },
            a.push(n)
        }),
        {
            prdGrName: n.p.mt,
            prdList: a
        }
    },
    k = function(t, n) {
        var a = {};
        switch (n.type) {
        case f._PRD_PREPARE:
            break;
        case f._PRD_PREPARE_FIN:
            var r = n.res;
            if (r) if (0 === r.r) {
                var i = A(r);
                a.prdInfo = {
                    name: i.prdGrName
                },
                a.prdList = i.prdList,
                a.prdSelected = i.prdList[0].prdId,
                a.prdError = null
            } else a.prdError = r.r;
            break;
        case f._CHANGE_PRD_PAY_METHOD:
            a.paymentMethod = n.paymentMethod;
            break;
        case f._PRD_PAY_FAILED:
            a.paymentRes = null,
            a.prdError = n.data.r;
            break;
        case f._PRD_PAY_SUCCEED:
            a.paymentRes = n.data,
            a.step = M,
            a.prdError = null;
            break;
        case f._PRD_FINISH_PAY:
            if (n.data.isFin) if (n.data.isSuccess) {
                if (n.data.message && n.data.message.d.fcdnex) {
                    var o = (0, v.getCookie)("fcdnex"),
                    s = [n.data.message.d.fcdnex];
                    o && (s = [].concat(s, o.split(";")));
                    for (var l = [], u = 0, c = s.length; u < c; u++) s[u] && l.indexOf(s[u]) === -1 && l.push(s[u]);
                    l.length > 100 && (s = l.slice(0, 100)),
                    (0, v.setCookie)("fcdnex", s.join(";"), {
                        expires: 1
                    }),
                    (0, v.setCookie)("fcdnex", s.join(";"), {
                        domain: v._COOKIE_STATIC.DOMAIN,
                        expires: 1,
                        path: "/"
                    })
                }
                a.step = I
            } else a.step = S,
            a.prdError = "-2 : " + n.data.message;
            break;
        case f._RESET:
            a = N
        }
        return _.
    default.isEmpty(a) ? t: _.
    default.assign({},
        t, a)
    },
    x = function() {
        var t = (0, d.createStore)(N, k, {
            LEGAL_CATEGORIES: [f.PRD_PAY_CATEGORY]
        });
        return t.runSaga(c, t.dispatch),
        t
    };
    n.
default = {
        init: x
    }
},
function(t, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.PRD_CHECK = n.PRD_CANCEL = n.PRD_FINISH_PAY = n.PRD_PAY_FAILED = n.PRD_PAY_SUCCEED = n.PRD_PAY = n.CHANGE_PRD_PAY_METHOD = n.PRD_PREPARE_FIN = n.PRD_PREPARE = n.RESET = n._PRD_CHECK = n._PRD_CANCEL = n._PRD_FINISH_PAY = n._PRD_PAY_FAILED = n._PRD_PAY_SUCCEED = n._PRD_PAY = n._CHANGE_PRD_PAY_METHOD = n._PRD_PREPARE_FIN = n._PRD_PREPARE = n._RESET = n.PRD_PAY_CATEGORY = void 0;
    var r = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    i = a(39),
    o = n.PRD_PAY_CATEGORY = "_PRD_PAY",
    s = function(t) {
        return "PRD_P_" + t
    },
    l = function(t) {
        return (0, i.handleAction)(t, o)
    },
    u = "_succeed",
    c = "_failed",
    d = "_fin",
    f = function(t) {
        return function(n) {
            return l(r({
                type: t
            },
            n))
        }
    },
    m = n._RESET = s("reset"),
    p = n._PRD_PREPARE = s("prd_prepare"),
    h = n._PRD_PREPARE_FIN = p + d,
    g = n._CHANGE_PRD_PAY_METHOD = s("change_p_pay_method"),
    _ = n._PRD_PAY = s("prd_pay"),
    v = n._PRD_PAY_SUCCEED = _ + u,
    b = n._PRD_PAY_FAILED = _ + c,
    y = n._PRD_FINISH_PAY = s("prd_finish_pay"),
    E = n._PRD_CANCEL = s("prd_cancel"),
    C = n._PRD_CHECK = s("prd_check");
    n.RESET = f(m),
    n.PRD_PREPARE = f(p),
    n.PRD_PREPARE_FIN = f(h),
    n.CHANGE_PRD_PAY_METHOD = f(g),
    n.PRD_PAY = f(_),
    n.PRD_PAY_SUCCEED = f(v),
    n.PRD_PAY_FAILED = f(b),
    n.PRD_FINISH_PAY = f(y),
    n.PRD_CANCEL = f(E),
    n.PRD_CHECK = f(C)
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.mbrmPreRegister = n.mbrmLogin = n.getMbrmAuthCode = n.getMbrmBalance = n.getLoginAccountNextStep = n.checkPaymentStatus = n.checkIn = n.submit = n.checkCaptcha = n.generateCaptcha = n.checkRawData = n.getAndRefreshWeChatAuthData = n.getCtcfCnIdLocation = n.getLocationStructureData = n.getLocationByTyping = n.getLocation = n.verifyMobileAuthCode = n.generateMobileAuthCode = n.buyProduct = n.prepareProduction = n.verifyVisitPass = n.generateQRCode = n.getUrl = void 0;
    var o = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    s = a(6),
    l = r(s),
    u = a(91),
    c = r(u),
    d = !1,
    f = function(t, n) {
        var a = {
            url: t,
            type: "POST",
            dataType: "json"
        };
        return new Promise(function(t, r) {
            c.
        default.ajax(l.
        default.assign({
                mode:
                "abort"
            },
            a, n)).then().fail(function(a) {
                if ("abort" === a.statusText) return void r(null);
                var i = {
                    r: -2
                };
                n.onErrorResolve && (i = n.onErrorResolve(a)),
                t(i)
            }).done(function(n) {
                return t(n)
            })
        })
    },
    m = function(t, n) {
        var a = {
            url: t,
            type: "GET",
            dataType: "json"
        };
        return new Promise(function(t, r) {
            c.
        default.ajax(l.
        default.assign({
                mode:
                "abort"
            },
            a, n)).then().fail(function(t) {
                r(t)
            }).done(function(n) {
                return t(n)
            })
        })
    },
    p = "handler/web/form_runtime/",
    h = "handler/web/form/util/",
    g = function(t, n) {
        return f(t, {
            hideErrorAlert: !0,
            data: {
                d: JSON.stringify({
                    cvs: n
                })
            }
        })
    },
    _ = (n.getUrl = function(t, n) {
        return m(t, n)
    },
    n.generateQRCode = function(t) {
        return g(p + "handleGenQr.php", t)
    },
    n.verifyVisitPass = function(t) {
        return g(p + "handleVerifyVisitPass.php", t)
    },
    n.prepareProduction = function(t) {
        return d ? new Promise(function(t) {
            setTimeout(function() {
                t({
                    "r": 0,
                    "p": {
                        "mt": "表单访问专属资源",
                        "l": [[109, "FCDN-EX", "当前表单24小时内适用", 8, 1.99, 1, 1.99, .99, 14.88, 199, 2.99, 1.99, 99]]
                    }
                })
            },
            1e3)
        }) : g(p + "dnt/handleGetInfoBeforePay.php", t)
    },
    n.buyProduct = function(t) {
        return d ? new Promise(function(t) {
            setTimeout(function() {
                t({
                    "r": 0,
                    "_DMWT": "CDd4ZbzJj3USDydt",
                    "_DNT": "CN151-FCDN-EX-210222000036042",
                    "_NODE": 15,
                    "rData_host": "https://mapi.alipay.com/gateway.do?",
                    "rData_qr": "_input_charset=utf-8&body=Current+Form+within+24+Hours+%28FCDN-EX%29&enable_paymethod=directPay%5EbankPay%5Ecartoon%5Ecash%5EcreditCardExpress%5EdebitCardExpress&it_b_pay=24h&notify_url=https%3A%2F%2Fcn.mikecrm.com%2Fcallback%2Falipay_notify_dp_dnt.php&out_trade_no=CN151-FCDN-EX-210222000036042&partner=2088521305970442&payment_type=1&qr_pay_mode=4&qrcode_width=154&return_url=http%3A%2F%2Fcn.mikecrm.com%2Fdnt_success.php%3Ftpat%3D2%26no%3DCN151-FCDN-EX-210222000036042%26s%3DExclusive%2BResources%2Bfor%2BForm%2BVisit%26f%3D8%26_DMWT%3DCDd4ZbzJj3USDydt%26_NODE%3D15%26_T%3D51pHOkw%26_SLD%3Dcn&seller_id=2088521305970442&service=create_direct_pay_by_user&show_url=http%3A%2F%2Fwiki.cn.mikecrm.com%2Fprd%2Fintro.php%3Fid%3D109&subject=Exclusive+Resources+for+Form+Visit&total_fee=8&sign=2764089d74e797c8f06fe20940aa6db1&sign_type=MD5",
                    "rData_jump": "_input_charset=utf-8&app_pay=Y&body=Current+Form+within+24+Hours+%28FCDN-EX%29&enable_paymethod=directPay%5EbankPay%5Ecartoon%5Ecash%5EcreditCardExpress%5EdebitCardExpress&it_b_pay=24h&notify_url=https%3A%2F%2Fcn.mikecrm.com%2Fcallback%2Falipay_notify_dp_dnt.php&out_trade_no=CN151-FCDN-EX-210222000036042&partner=2088521305970442&payment_type=1&qr_pay_mode=2&return_url=http%3A%2F%2Fcn.mikecrm.com%2Fdnt_success.php%3Ftpat%3D2%26no%3DCN151-FCDN-EX-210222000036042%26s%3DExclusive%2BResources%2Bfor%2BForm%2BVisit%26f%3D8%26_DMWT%3DCDd4ZbzJj3USDydt%26_NODE%3D15%26_T%3D51pHOkw%26_SLD%3Dcn&seller_id=2088521305970442&service=create_direct_pay_by_user&show_url=http%3A%2F%2Fwiki.cn.mikecrm.com%2Fprd%2Fintro.php%3Fid%3D109&subject=Exclusive+Resources+for+Form+Visit&total_fee=8&sign=5a212fa7bc662f3e6713bd78cb1bf084&sign_type=MD5"
                })
            },
            1e3)
        }) : g(p + "dnt/handleConfirmPay.php", t)
    },
    n.generateMobileAuthCode = function(t) {
        return d ? new Promise(function(t) {
            setTimeout(function() {
                t({
                    "r": 0,
                    "d": {
                        "t": "3PkpWuslC8Vz52mUrgsKfmQfniXF7DuM",
                        "vv": "6abe0dae066db895dfe98aaa67b53871"
                    }
                })
            },
            1e3)
        }) : g(p + "handleGetPhoneVerificationCode.php", t)
    },
    n.verifyMobileAuthCode = function(t) {
        return d ? g("dev/mockAPI/handleVerifyVC.json", t) : g(p + "handleVerifyVC.php", t)
    },
    n.getLocation = function(t) {
        return f(p + "handleGetADsByPid.php", {
            hideErrorAlert: !0,
            mode: "queue",
            portKey: "FS_",
            queueKey: "addr-pid",
            data: {
                d: JSON.stringify({
                    cvs: t
                })
            }
        })
    },
    n.getLocationByTyping = function(t) {
        return g(p + "handleGetADsByTyping.php", t)
    },
    n.getLocationStructureData = function(t) {
        return g(p + "handleGetADsFromRawAddress.php", t)
    },
    n.getCtcfCnIdLocation = function(t) {
        return g(p + "handleGetCNRIDLocInfo.php", t)
    },
    n.getAndRefreshWeChatAuthData = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "uvd": {
                "wc": {
                    "nickname": "我是想成为一块的五毛",
                    "sex": 1,
                    "country": "China",
                    "province": "Shanghai",
                    "city": "Zhabei",
                    "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/SsPEoZTVvcjiaj0nFeNZFZTicfeCAVtwSjtc9ueMEAzJkhttwiac2TTLnAjvetUc9NvUNkM3Hr4OGA6vN8HOaoMyw/132"
                },
                "ct": {
                    28 : 1,
                    30 : {
                        "I": 1,
                        "II": 793,
                        "III": 799
                    },
                    23 : {
                        "n": "梁姗姗"
                    },
                    24 : "18510511102",
                    25 : "441652491@qq.com"
                }
            }
        }) : g(p + "handleGetOrRefreshWcUserInfo.php", t)
    },
    n.checkRawData = function(t) {
        return g(p + "handleGetCurAcc.php", t)
    },
    n.generateCaptcha = function(t) {
        return g(p + "handleGenCaptcha.php", t)
    },
    n.checkCaptcha = function(t) {
        return g(p + "handleVerifyCaptcha.php", t)
    },
    function(t, n) {
        var a = n || {},
        r = a.files,
        s = a.onProgress,
        u = i(a, ["files", "onProgress"]),
        c = void 0,
        d = {};
        r ? (c = new FormData, c.append("d", JSON.stringify({
            cvs: t
        })), l.
    default.forEach(r,
        function(t, n) {
            c.append(n, t.file, t.name)
        }), d = {
            cache: !1,
            processData: !1,
            contentType: !1
        }) : c = {
            d: JSON.stringify({
                cvs: t
            })
        };
        var m = function(e) {
            if (e.lengthComputable) {
                var t = e.loaded / e.total;
                s && s(t)
            }
        };
        return f(p + "handleSubmit.php", o({
            xhr: function t() {
                var t = new window.XMLHttpRequest;
                return s && r && (t.upload.addEventListener("progress", m, !1), t.addEventListener("progress", m, !1)),
                t
            },
            onErrorResolve: function(t) {
                var n = {
                    status: t.status,
                    statusText: t.statusText,
                    response: t.responseText
                };
                return {
                    r: -9999,
                    errInfo: n
                }
            },
            data: c,
            hideErrorAlert: !0
        },
        d, u))
    });
    n.submit = _;
    n.checkIn = function(t) {
        var n = {
            d: JSON.stringify({
                cvs: t
            })
        };
        return f(p + "handleFcki_checkIn.php", {
            data: n,
            onErrorResolve: function() {
                return {
                    r: -9999
                }
            },
            hideErrorAlert: !0
        })
    },
    n.checkPaymentStatus = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "dn": 1,
            "sc": 1,
            "msg": {
                "d": {
                    "fcdnex": "jsIgTXa7UFA5YFu4aHjle68DK5bAS0X8"
                }
            }
        }) : g(h + "handleGetDmwProgress.php", t)
    },
    n.getLoginAccountNextStep = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "d": [1, null, null, null, null]
        }) : g(p + "mbrm/handleGetLoginAccountNextStep.php", t)
    },
    n.getMbrmBalance = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "d": [2.3]
        }) : g(p + "mbrm/handleGetInfoBeforePay.php", t)
    },
    n.getMbrmAuthCode = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "d": [1, {
                "t": "IBnPe9iUeqTKQP9ZIaXgJXWHHYVDiomV",
                "vv": "6abe0dae066db895dfe98aaa67b53871"
            }]
        }) : g(p + "mbrm/handleSendVerificationCode.php", t)
    },
    n.mbrmLogin = function(t) {
        return d ? Promise.resolve({
            "r": 0,
            "d": {
                "JHR": 0,
                "SOUL": '{"w":800,"h":{"t":"旗舰级会员专享商品","ly":2,"lys":1},"t":null,"st":{"h":{"bgl":{"h":3,"v":9},"yof":0,"bg":"_header_bg_duRuo.png","bgc":"#3B67A0","bgo":1,"tc":"#FFFFFF","dc":"#FFFFFF"},"bgc":"#EDF0F8","thc":"#2D8FD9","b":{"bgc":"#FDFDFE","bgo":1,"tc":"#000000","dc":"#666666","oc":"#000000"},"s":{"bgc":"#FAFBFC","bgo":1,"btc":"#3B67A0","btct":"#FFFFFF","btw":2}},"se":null,"ext":{"mbrm_frglg":{"s":1,"frg":{"s":0},"flg":{"s":1,"p":{"imgrpl":1,"mgrpl":[1],"irgf":1,"rgf":"200000008","rgft":"PJeSJ"}}},"mbrm_fsl":{"s":1},"ifp":{"s":1,"pvt":10,"p":{"iapta":1,"aptaf":null,"aptat":1},"pvtpom":[1,2]}},"cpo":"200000032","cpl":"-","cp":{"200000032":[60,0,{"l":[[1,"商品名","",{"l":null}],[2,"商品名","",{"l":null}],[3,"商品名","",{"l":null}]],"df":[],"l2p":{"1":1,"2":2,"3":3},"opt":[],"mx":10003,"t":"商品","l2s":{"1":200000013,"2":200000014,"3":200000015}},{"cn":3},0]},"cp_ctcf":null,"x_ifp_pms":[null,null,1],"_m":{"FRS":200000049,"ACC":"K0DuyhSX9L6RndlYxrOyKh8i8IYKtPmH","T":"9VadR","I":200000011,"U":"\\/ugc\\/pub\\/xf\\/xfy6surdpvaqgxsr4ruuucnvxlpmtwft\\/form\\/image\\/","CLN":"北京易多客信息技术有限公司","mbrm":[2,"MikeX旗舰云",{"e":"png","u":"jl4rtgt5gs57x87wiaotg740ydlf6fvg","s":3502,"w":136,"h":26},1,null]}}',
                "VST": {
                    "mbrm": ["Nq9xVxRB", "MikeX旗舰云", 1, ["旗舰客户", 4, null]],
                    "mbrmm": ["8618160019080", "shenmo", ["旗舰客户", 4, null]]
                }
            }
        }) : g(p + "mbrm/handleLogin.php", t)
    },
    n.mbrmPreRegister = function(t) {
        return d ? Promise.resolve({
            r: 0
        }) : g(p + "mbrm/handlePreRegister.php", t)
    }
},
function(t, n, a) { (function(n) {
        "use strict";
        function r(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = "wsMG" + (n.port || "mgajax_" + t + (n.abortKey || "")) + ("pending" === n.mode ? n.queueKey || "": "");
            c[a] && c[a].abort()
        }
        var $ = a(92),
        i = a(74),
        jQuery = n.jQuery = n.$ = $,
        o = new Date,
        s = {
            "a": new Date(o - 0 + 31536e6).toUTCString(),
            "t": new Date(o - 0 + 31536e6).toUTCString(),
            "ap": new Date(o - 0 + 31536e6).toUTCString(),
            "n": new Date(o - 0 + 31536e6).toUTCString(),
            "_ga": new Date(o - 0 + 63072e6).toUTCString(),
            "MK_L_UVD": new Date(o - 0 + 2592e6).toUTCString(),
            "lang": new Date(o - 0 + 31536e6).toUTCString(),
            "uvi": new Date(o - 0 + 126144e6).toUTCString(),
            "uvis": new Date(o - 0 + 126144e6).toUTCString(),
            "wxoaid": new Date(o - 0 + 31536e6).toUTCString(),
            "fcdnex": new Date(o - 0 + 864e5).toUTCString(),
            "mbrm_t_*": new Date(o - 0 + 6048e5).toUTCString(),
            "mbrm_k_*": new Date(o - 0 + 6048e5).toUTCString(),
            "PHPSESSID": "SESSION"
        },
        l = location.hostname.split(".");
        l.length > 2 ? l[0] = "": l = [""].concat(l),
        l = l.join(".");
        var u = l,
        c = [],
        d = function(t) {
            var n = t.ajax,
            a = [],
            r = [],
            i = [];
            return t.ajax = function(t) {
                var o = $.Deferred(),
                s = o.promise();
                t = jQuery.extend(t, jQuery.extend({},
                jQuery.ajaxSettings, t));
                var l = "wsMG" + (t.port || "mgajax_" + t.url + (t.abortKey || ""));
                switch (t.mode) {
                case "abort":
                    return c[l] && c[l].abort(),
                    c[l] = n.apply(this, arguments);
                case "pending":
                    var u = l + (t.queueKey || "");
                    c[u] && c[u].abort && c[u].abort();
                    var d = [].concat(jQuery([n]).queue("ajax" + l));
                    jQuery([n]).queue("ajax" + l, (d || []).map(function(t) {
                        return t.Q === u ? t.bind({
                            abort: !0
                        }) : t
                    })),
                    s.success = s.done,
                    s.error = s.fail,
                    s.complete = s.always;
                    var f = t.complete;
                    t.complete = function() {
                        f && f.apply(this, arguments),
                        jQuery([n]).queue("ajax" + l).length > 0 ? jQuery([n]).dequeue("ajax" + l) : i[l] = !1
                    };
                    var m = this,
                    p = function(a) {
                        return function() {
                            if (!this.abort) {
                                var r = c[a] = n(t);
                                return r.done(function() {
                                    o.resolve.apply(m, arguments)
                                }),
                                r.fail(function() {
                                    o.reject.apply(m, arguments)
                                }),
                                r
                            }
                            jQuery([n]).queue("ajax" + l).length > 0 ? jQuery([n]).dequeue("ajax" + l) : i[l] = !1
                        }
                    } (u);
                    return p.Q = "" + u,
                    jQuery([n]).queue("ajax" + l, p),
                    1 != jQuery([n]).queue("ajax" + l).length || i[l] || (i[l] = !0, jQuery([n]).dequeue("ajax" + l)),
                    s;
                case "queue":
                    l = (t.portKey ? t.portKey: l) + (t.queueKey || ""),
                    s.success = s.done,
                    s.error = s.fail,
                    s.complete = s.always;
                    var f = t.complete;
                    return t.complete = function() {
                        f && f.apply(this, arguments),
                        jQuery([n]).queue("ajax" + l).length > 0 ? jQuery([n]).dequeue("ajax" + l) : i[l] = !1
                    },
                    jQuery([n]).queue("ajax" + l,
                    function() {
                        var a = n(t);
                        return a.done(function() {
                            o.resolve.apply(this, arguments)
                        }),
                        a.fail(function() {
                            o.reject.apply(this, arguments)
                        }),
                        a
                    }),
                    1 != jQuery([n]).queue("ajax" + l).length || i[l] || (i[l] = !0, jQuery([n]).dequeue("ajax" + l)),
                    s;
                case "sync":
                    var h = a.length;
                    a[h] = {
                        error: t.error,
                        success: t.success,
                        complete: t.complete,
                        done: !1
                    },
                    r[h] = {
                        error: [],
                        success: [],
                        complete: []
                    },
                    t.error = function() {
                        r[h].error = arguments
                    },
                    t.success = function() {
                        r[h].success = arguments
                    },
                    t.complete = function() {
                        if (r[h].complete = arguments, a[h].done = !0, 0 == h || !a[h - 1]) for (var t = h; t < a.length && a[t].done; t++) a[t].error && a[t].error.apply(jQuery, r[t].error),
                        a[t].success && a[t].success.apply(jQuery, r[t].success),
                        a[t].complete && a[t].complete.apply(jQuery, r[t].complete),
                        a[t] = null,
                        r[t] = null
                    }
                }
                return n.apply(this, arguments)
            },
            t.ajax
        } ($),
        f = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = null,
            a = null,
            r = "wsMG" + (t.port || "mgajax_" + t.url + (t.abortKey || ""));
            if (t.data) {
                a = [];
                for (var i in t.data) a.push(i + "=" + encodeURIComponent(t.data[i]));
                a = a.join("&")
            }
            c[r] && c[r].abort();
            var o = new Promise(function(r, i) {
                var o = new XMLHttpRequest;
                o.open(t.type, t.url, !0),
                o.onload = function() {
                    var t = "response" in o ? o.response: o.responseText;
                    4 === o.readyState && 200 === o.status ? r(t) : i(o)
                },
                o.onerror = function() {
                    i(o)
                },
                n = function() {
                    o.abort(),
                    i(o)
                },
                o.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                o.responseType = "blob",
                o.withCredentials = !0,
                o.send(a)
            });
            return o.abort = n,
            c[r] = o,
            o
        },
        m = function(t, n) {
            var a = !1;
            for (var r in t) if (t.hasOwnProperty(r)) {
                if (r.indexOf("*") > -1) {
                    var i = new RegExp("^" + r.replace("*", ".*") + "$");
                    a = n.match(i)
                } else a = r === n;
                if (a) break
            }
            return a
        },
        p = function(t, n) {
            var a = !1,
            r = null;
            for (var i in t) if (t.hasOwnProperty(i)) {
                if (i.indexOf("*") > -1) {
                    var o = new RegExp("^" + i.replace("*", ".*") + "$");
                    a = n.match(o)
                } else a = i === n;
                if (a) {
                    r = t[i];
                    break
                }
            }
            return r
        },
        h = function() {
            var t = null,
            n = !1;
            return {
                eat: function(a) {
                    t = (t || "") + ";" + document.cookie;
                    var r = i.cookie.get("PHPSESSID"),
                    o = i.cookie.get("uvi"),
                    l = i.cookie.get("uvis"),
                    c = i.cookie.get("wxoaid"),
                    d = i.cookie.get("fcdnex"),
                    f = i.cookie.get("MK_L_UVD");
                    if (i.cookie.clearAll(a ? [] : ["PHPSESSID", "uvi", "uvis", "wxoaid", "fcdnex", "mbrm_t_*", "mbrm_k_*", "MK_L_UVD"]), !a) {
                        if (r && "null" !== r && (document.cookie = "PHPSESSID=" + escape(unescape(r)) + "; path=/;" + (u ? "domain=" + u + ";": "")), o) {
                            var m = p(s, "uvi");
                            document.cookie = "uvi=" + escape(unescape(o)) + "; expires=" + m + "; path=/; " + (u ? "domain=" + u + ";": "")
                        }
                        if (l) {
                            var h = p(s, "uvis");
                            document.cookie = "uvis=" + escape(unescape(l)) + "; expires=" + h + "; path=/;" + (u ? "domain=" + u + ";": "") + "SameSite=None;secure;"
                        }
                        if (c) {
                            var g = p(s, "wxoaid");
                            document.cookie = "wxoaid=" + escape(unescape(c)) + "; expires=" + g + "; path=/;" + (u ? "domain=" + u + ";": "")
                        }
                        if (d) {
                            var _ = p(s, "fcdnex");
                            document.cookie = "fcdnex=" + escape(unescape(d)) + "; expires=" + _ + "; path=/;" + (u ? "domain=" + u + ";": "")
                        }
                        if (f) {
                            var v = p(s, "MK_L_UVD");
                            document.cookie = "MK_L_UVD=" + escape(unescape(f)) + "; expires=" + v + "; path=/;" + (u ? "domain=" + u + ";": "")
                        }
                    }
                    n = !0
                },
                vomit: function(a) {
                    t += "; " + document.cookie,
                    a && (a = [].concat(a)),
                    document.cookie = "uvi=" + escape(unescape("")) + "; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;",
                    t.split(";").forEach(function(t) {
                        t = $.trim(t).split("=");
                        var n = function(t) {
                            var n = p(s, t[0]);
                            "SESSION" === n ? document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; path=/;" + (u ? "domain=" + u + ";": "") : "uvi" === t[0] || "lang" === t[0] ? (document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; expires=" + n + "; path=/;", document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; expires=" + n + "; path=/;" + (u ? "domain=" + u + ";": "")) : "uvis" === t[0] ? document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; expires=" + n + "; path=/;" + (u ? "domain=" + u + ";": "") + "SameSite=None;secure;": m({
                                "mbrm_t_*": 1,
                                "mbrm_k_*": 1
                            },
                            t[0]) ? document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; expires=" + n + "; path=/;" + (u ? "domain=" + u + ";": "") : document.cookie = t[0] + "=" + escape(unescape(t[1])) + "; expires=" + n + "; path=/;"
                        };
                        if (a) {
                            var r = {};
                            a.forEach(function(t) {
                                r[t] = 1
                            }),
                            m(s, t[0]) && m(r, t[0]) && t[1] && n(t)
                        } else m(s, t[0]) && t[1] && n(t)
                    }),
                    n = !1,
                    t = null
                }
            }
        } ();
        t.exports = {
            ajax: d,
            ajaxFile: f,
            abort: r,
            cookieMonster: h
        }
    }).call(n,
    function() {
        return this
    } ())
},
function(t, n, a) {
    t.exports = a(2)(314)
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.PayMethod = void 0;
    var i = a(22),
    o = r(i),
    s = a(6),
    l = r(s),
    u = a(19),
    c = r(u),
    d = a(23),
    f = r(d),
    m = a(17),
    p = a(55),
    h = a(60),
    g = r(h),
    _ = a(38),
    v = n.PayMethod = c.
default.createClass({
        displayName:
        "PayMethod",
        mixins: [f.
    default],
        handleClick: function(e) {
            var t = this.props,
            n = t.onClick,
            a = t.data;
            n && n(e, a)
        },
        render: function() {
            var t = this.props,
            n = t.className,
            a = t.data,
            r = t.active,
            i = t.frozen;
            return c.
        default.createElement("li", {
                className: (0, o.
            default)("fb_pmItem", a.type, {
                    active: !i && r,
                    frozen: i
                },
                n),
                onClick: i ? null: this.handleClick
            },
            c.
        default.createElement("div", {
                className: "fb_pmImg"
            }), c.
        default.createElement("p", {
                className: "fb_pmTitle"
            },
            a.name), !i && r ? c.
        default.createElement("div", {
                className: "fb_pmChosenImg"
            }) : null)
        }
    }),
    b = c.
default.createClass({
        displayName:
        "NormalPaymentField",
        mixins: [f.
    default],
        getInitialState: function() {
            return this.lang = (0, m.getLang)(),
            this.store = (0, m.getStore)(),
            {}
        },
        handleChangePaymentMethod: function(e, t) {
            this.store.dispatch((0, _.CHANGE_PAYMENT_METHOD)({
                id: t.id
            }))
        },
        render: function() {
            var t = this,
            n = this.props,
            a = n.supportPayMethod,
            r = n.legalPayMethod,
            i = n.payMethodInfo,
            s = n.cartInfo,
            u = n.symbol,
            d = n.paymentInfo,
            f = null,
            m = l.
        default.reduce(s,
            function(t, n) {
                return t + n.price * n.quantity
            },
            0);
            return a && m > 0 && (f = [], l.
        default.forEach((0, p.SUPPORT_PAYMENT_METHOD)(),
            function(n) {
                if (r.indexOf(n.id) !== -1) {
                    var a = i.isFrozen && 4 !== +n.id;
                    f.push(c.
                default.createElement(v, {
                        data: n,
                        key: "payM" + n.id,
                        frozen: a,
                        active: d && d.type === n.id,
                        onClick: t.handleChangePaymentMethod
                    }))
                }
            })),
            c.
        default.createElement("div", {
                className: "paymentField"
            },
            c.
        default.createElement("p", {
                className: "fb_cartTotal"
            },
            (a ? this.lang.cCommodityPayTotal: this.lang.cCommodityNoPayTotal)({
                priceClass: {},
                price: ""
            }), c.
        default.createElement(g.
        default, {
                className: "price",
                symbol: u,
                price: m
            })), c.
        default.createElement("ul", {
                className: (0, o.
            default)("fb_paymentMethod", f ? "pm_items_" + f.length: null)
            },
            f), i.isFrozen ? c.
        default.createElement("div", {
                className: "fb_pmf_wrapper"
            },
            c.
        default.createElement("div", {
                className: "fb_paymentMethod_frozen"
            },
            c.
        default.createElement("i", {
                className: "iconfont fb_pmfIcon"
            },
            String.fromCharCode(58938)), this.lang.gPayMethodFrozen)) : null)
        }
    });
    n.
default = b
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.saga = n.payment = n.filling = n.validation = n.cki = n.group = n.form = void 0;
    var i = a(95),
    o = a(111),
    s = a(112),
    l = a(118),
    u = a(119),
    c = a(120),
    d = a(121),
    f = r(d);
    n.form = l.form,
    n.group = i.group,
    n.cki = o.cki,
    n.validation = s.validation,
    n.filling = u.filling,
    n.payment = c.payment,
    n.saga = f.
default
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return Array.isArray(t) ? t: Array.from(t)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.group = n._getCurrentOrder = n._getId = void 0;
    var o = function() {
        function t(t, n) {
            var a = [],
            r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done) && (a.push(s.value), !n || a.length !== n); r = !0);
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l["return"] && l["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return a
        }
        return function(n, a) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    s = a(6),
    l = r(s),
    u = a(8),
    c = a(38),
    d = a(17),
    f = a(55),
    m = a(96),
    p = n._getId = function(t) {
        return f.L_NORMAL === t.type ? t.id: f.L_SQUEEZEBOX === t.type ? l.
    default.filter(t.children).join("-"):
        void 0
    },
    h = function(t, n) {
        t = [].concat(t),
        n = [].concat(n);
        for (var a = !1,
        r = 0,
        i = Math.max(t, n); r < i; r++) {
            if (t[r] > n[r]) {
                a = !0;
                break
            }
            if (t[r] < n[r]) {
                a = !1;
                break
            }
        }
        return a
    },
    g = n._getCurrentOrder = function(t, n) {
        var a = {};
        if (t.extensions.logic && t.extensions.logic.defaultShown && !l.
    default.isEmpty(t.extensions.logic.defaultShown)) {
            var r = function(n, a) {
                var r = t.components[n];
                if (r) {
                    if (null != a && 0 === +a && r.otherId) return r.otherId;
                    var i = r.options;
                    if (i) {
                        var o = l.
                    default.find(i, {
                            id: +a
                        });
                        if (o) return + o.sId
                    }
                }
                return null
            },
            i = function(t, n) {
                var a = !1;
                return l.
            default.forEach([].concat(t),
                function(t) {
                    if (l.
                default.isPlainObject(t)) {
                        if (t.id === n) return a = !0,
                        !1
                    } else if (t === n) return a = !0,
                    !1
                }),
                a
            },
            o = t.extensions.logic,
            s = [];
            l.
        default.forEach(t.layout,
            function(t) {
                f.L_NORMAL === t.type ? s.push(t) : f.L_SQUEEZEBOX === t.type && l.
            default.forEach(t.children,
                function(t) {
                    s.push({
                        type: f.L_NORMAL,
                        id: t
                    })
                })
            });
            var u = function u(c, d) {
                var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (o.defaultShown.indexOf(c) > -1 || "paging" === t.components[c].type ? a[c] = d: null != f && (h(d, f) ? a[c] = d: n.form.position && n.form.position[c] ? a[c] = n.form.position[c] : a[c] = [].concat(f, d + 1)), n.data && n.data[c]) {
                    var m = n.data[c],
                    p = o.info[c];
                    p && (m = [].concat(m), l.
                default.forEach(p,
                    function(t, n) {
                        var o = r(c, n);
                        l.
                    default.forEach(t,
                        function(t) {
                            if (i(m, o)) {
                                var n = l.
                            default.findIndex(s, {
                                    id: t
                                });
                                u(t, n, a[c])
                            } else u(t, null, null)
                        })
                    }))
                }
            };
            l.
        default.forEach(s,
            function(t, n) {
                u(t.id, n, null)
            })
        } else l.
    default.forEach(t.layout,
        function(t, n) {
            a[p(t)] = n
        });
        return a
    },
    _ = function(t, n) {
        var a = function(t) {
            var n = [].concat(t),
            a = i(n),
            r = a[0],
            o = a.slice(1);
            return o && !l.
        default.isEmpty(o) && (o = l.
        default.map(o,
            function(t) {
                return (0, u.leftPad)(t, "0", 3)
            })),
            +(r + "." + o.join(""))
        },
        r = l.
    default.filter(t.layout,
        function(t) {
            return null != n[p(t)]
        }).sort(function(t, r) {
            return a(n[p(t)]) - a(n[p(r)])
        }),
        o = [],
        s = [];
        return l.
    default.forEach(r,
        function(n) {
            n.id && "paging" === t.components[n.id].type ? (l.
        default.isEmpty(s) || o.push(s), s = []) : s.push(n)
        }),
        l.
    default.isEmpty(s) ? l.
    default.isEmpty(o) && o.push(s) : o.push(s),
        o
    },
    v = function(t) {
        var n = t.config,
        a = t.form,
        r = +new Date,
        i = {};
        if (l.
    default.forEach(n.getCache(d.SUBMIT_ONCE_LIST) || {},
        function(t, n) { + new Date(t) > r && (i[n] = t)
        }), n.setCache(d.SUBMIT_ONCE_LIST, i), a.settings.isOnlySubmitPerDay || a.settings.isOnlySubmit) {
            var s = (0, u.getCookie)(a.identifier.SUBMIT_ONCE),
            c = i[a.token],
            f = new Date;
            f.setHours(0, 0, 0, 0);
            var m = new Date;
            if (m.setHours(23, 59, 59, 999), c && !s) return a.settings.isOnlySubmitPerDay ? (0, u.setCookie)(a.identifier.SUBMIT_ONCE, "1|" + +f, {
                domain: u._COOKIE_STATIC.DOMAIN,
                isExpiresDate: !0,
                expires: m,
                path: "/"
            }) : a.settings.isOnlySubmit && (m.setDate(m.getDate() + u._COOKIE_STATIC.SUBMIT_ONCE_DAY), (0, u.setCookie)(a.identifier.SUBMIT_ONCE, "2|" + +f, {
                domain: u._COOKIE_STATIC.DOMAIN,
                isExpiresDate: !0,
                expires: m,
                path: "/"
            })),
            !0;
            if (s) {
                var p = ("" + s).split("|"),
                h = o(p, 2),
                g = h[0],
                _ = h[1];
                return 1 === +g && a.settings.isOnlySubmit ? (m.setDate(m.getDate() + u._COOKIE_STATIC.SUBMIT_ONCE_DAY), (0, u.setCookie)(a.identifier.SUBMIT_ONCE, "2|" + _, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    isExpiresDate: !0,
                    expires: m,
                    path: "/"
                }), i[a.token] = +m, n.setCache(d.SUBMIT_ONCE_LIST, i), !0) : 2 !== +g || !a.settings.isOnlySubmitPerDay || ( + _ < +f ? ((0, u.setCookie)(a.identifier.SUBMIT_ONCE, "", {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: -1,
                    path: "/"
                }), delete i[a.token], n.setCache(d.SUBMIT_ONCE_LIST, i), !1) : (m.setDate(f.getDate()), (0, u.setCookie)(a.identifier.SUBMIT_ONCE, "1|" + _, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    isExpiresDate: !0,
                    expires: m,
                    path: "/"
                }), i[a.token] = +m, n.setCache(d.SUBMIT_ONCE_LIST, i), !0))
            }
        }
        return ! 1
    };
    n.group = function(t) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments[1],
            r = t(),
            i = {},
            s = !1,
            p = function() {
                var t = g(r, n),
                a = _(r, t);
                if (i.form = l.
            default.assign(i.form || {},
                {
                    position: t,
                    pages: a
                }), a) {
                    var o = null != i.form.page ? i.form.page: n.form.page;
                    o > a.length && (i.form.page = a.length)
                }
            },
            h = function(t) {
                var i = function(t) {
                    var i = r.getComponent(t),
                    o = (0, f.getComponentType)(i);
                    switch (o) {
                    case "mobile":
                        var s = n.data[t];
                        s && l.
                    default.isPlainObject(s) && s.verificationToken && s.verificationMobileToken && !s.checked && (a.async || (a.async = []), a.async.push(["authCode", {
                            id: t
                        }]));
                        break;
                    case "address":
                        if (2 === i.componentType) {
                            var u = n.data[t];
                            u && l.
                        default.isPlainObject(u) && u.content && !u.struct && (a.async || (a.async = []), a.async.push(["inputAddress", {
                                id: t,
                                data: u
                            }]))
                        }
                        break;
                    case "ctcf_11":
                        if (i.cfIsLimitLocation && i.cfLimitLocation && !l.
                    default.isEmpty(i.cfLimitLocation)) {
                            var c = n.data[t]; ! c || l.
                        default.isPlainObject(c) && c.location || (a.async || (a.async = []), a.async.push(["cnIdLocation", {
                                id: t,
                                data: c
                            }]))
                        }
                    }
                };
                l.
            default.forEach(t,
                function(t) {
                    f.L_NORMAL === t.type ? i(t.id) : f.L_SQUEEZEBOX === t.type && l.
                default.forEach(t.children,
                    function(t) {
                        i(t)
                    })
                })
            },
            b = function() {
                var t = new Date;
                t.setHours(0, 0, 0, 0);
                var a = new Date(t);
                a.setDate(a.getDate() + u._COOKIE_STATIC.LOCAL_UVD),
                a.setHours(23, 59, 59, 999);
                var i = (0, m.getUvdData)({
                    components: r.components,
                    data: n.data,
                    uvd: r.visitorData && r.visitorData.uvd ? r.visitorData.uvd.ct || null: null
                }); (0, u.setCookie)(r.identifier.LOCAL_UVD, JSON.stringify(i), {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    isExpiresDate: !0,
                    expires: a,
                    path: "/"
                })
            },
            y = function() {
                var t = l.
            default.assign({},
                (0, d.getConfig)().getCache(d.SUBMIT_ONCE_LIST) || {}),
                n = new Date;
                if (n.setHours(0, 0, 0, 0), r.settings.isOnlySubmitPerDay) {
                    var a = new Date(n);
                    a.setHours(23, 59, 59, 999),
                    (0, u.setCookie)(r.identifier.SUBMIT_ONCE, "1|" + +n, {
                        domain: u._COOKIE_STATIC.DOMAIN,
                        isExpiresDate: !0,
                        expires: a,
                        path: "/"
                    }),
                    t[r.token] = +a,
                    (0, d.getConfig)().setCache(d.SUBMIT_ONCE_LIST, t)
                } else if (r.settings.isOnlySubmit) {
                    var i = new Date(n);
                    i.setDate(i.getDate() + u._COOKIE_STATIC.SUBMIT_ONCE_DAY),
                    i.setHours(23, 59, 59, 999),
                    (0, u.setCookie)(r.identifier.SUBMIT_ONCE, "2|" + +n, {
                        domain: u._COOKIE_STATIC.DOMAIN,
                        isExpiresDate: !0,
                        expires: i,
                        path: "/"
                    }),
                    t[r.token] = +i,
                    (0, d.getConfig)().setCache(d.SUBMIT_ONCE_LIST, t)
                }
            };
            switch (a.type) {
            case c._VERIFY_PASSWORD_SUCCEED:
            case c._MBRM_AUTH_MEMBER_SUCCEED:
                var E = a.data;
                l.
            default.forEach(E,
                function(t, n) {
                    if (l.
                default.isPlainObject(t)) return void(window[n] = l.
                default.assign({},
                    window[n], t));
                    if (l.
                default.isString(t)) try {
                        t = JSON.parse(t)
                    } catch(a) {
                        console.error("ERROR -> PARSE [" + n + "] FAILED:" + t)
                    }
                    window[n] = t
                });
                var C = (0, d.updateSOUL)((0, d.getConfig)().structure()),
                T = C.data,
                S = C.formStructure;
                i = {
                    data: T
                },
                a.pwd ? i.form = {
                    pwd: a.pwd,
                    formStatus: S.JHR
                }: i.form = {
                    formStatus: S.JHR
                };
                break;
            case c._WX_AUTH_SUCCEED:
                if (a.rWx_jump)(0, d.wxJumpAuth)(a.rWx_jump);
                else if (a.uvd) {
                    var M = a.uvd;
                    a.id && (M.triggerCp = a.id),
                    i = (0, d.updateUVD)(M),
                    i.form = {
                        ckiAuto: !1
                    }
                }
                break;
            case c._CHECK_ONLY_WX:
                (0, d.getMode)() === f.MODE_FILLING && r.settings.isOnlyWeChat && !(0, d.getConfig)().isWx() && (i.form = {
                    onlyWx: !0
                });
                break;
            case c._WX_CKI_AUTO:
                (0, d.getMode)() === f.MODE_FILLING && 0 === r.JHR && (i.form = {
                    ckiAuto: !0
                });
                break;
            case c._WX_CKI_AUTO_FIN:
                i.form = {
                    ckiAuto: !1
                };
                break;
            case c._CHECK_SUBMIT_ONCE:
                if ((0, d.getMode)() === f.MODE_FILLING && 0 === r.JHR) {
                    var I = v({
                        config: (0, d.getConfig)(),
                        form: r
                    });
                    I && (r.setJHR( - 827), i.form = {
                        formStatus: r.JHR
                    })
                }
                break;
            case c._CHECK_FORM_START:
                if (0 === r.JHR) {
                    var N = (0, u.getCookie)(r.identifier.WAITING),
                    A = (0, u.getCookie)(r.identifier.WAITING_EVERYDAY); (N || A) && (N ? ((0, u.setCookie)(r.identifier.WAITING, 1, {
                        domain: u._COOKIE_STATIC.DOMAIN,
                        expires: new Date( + new Date + 6e4),
                        isExpiresDate: !0,
                        path: "/"
                    }), r.setJHR( - 822), i.form = {
                        formStatus: r.JHR
                    }) : A && ((0, u.setCookie)(r.identifier.WAITING_EVERYDAY, 1, {
                        domain: u._COOKIE_STATIC.DOMAIN,
                        expires: new Date( + new Date + 6e4),
                        isExpiresDate: !0,
                        path: "/"
                    }), r.setJHR( - 824), i.form = {
                        formStatus: r.JHR
                    }))
                } else r.JHR === -822 ? (0, u.setCookie)(r.identifier.WAITING, 1, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: new Date( + new Date + 3e4 + 1e3 * window.JHD),
                    isExpiresDate: !0,
                    path: "/"
                }) : r.JHR === -824 && (0, u.setCookie)(r.identifier.WAITING_EVERYDAY, 1, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: new Date( + new Date + 3e4 + 1e3 * window.JHD),
                    isExpiresDate: !0,
                    path: "/"
                });
                break;
            case c._CHECK_SOUL_FIN:
                var k = a.data;
                0 === k.r && k.d !== r.meta.ACC ? location.reload(!0) : [ - 801, -802, -804].indexOf(k.r) > -1 ? (r.setJHR(k.r), i.form = {
                    formStatus: r.JHR,
                    checkSoul: +new Date
                }) : i.form = {
                    checkSoul: +new Date
                };
                break;
            case c._FORM_START_FILLING_FIN:
                var x = a.isReload; (0, u.setCookie)(r.identifier.WAITING, 1, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: -1,
                    path: "/"
                }),
                (0, u.setCookie)(r.identifier.WAITING_EVERYDAY, 1, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: -1,
                    path: "/"
                }),
                x ? location.reload(!0) : (r.setJHR(0), i.form = {
                    formStatus: r.JHR
                });
                break;
            case c._START_GOTO_PAGE:
                h(n.form.pages[n.form.page]);
                break;
            case c._GOTO_PAGE:
                var D = n.form.page > a.page,
                O = !0,
                P = n.validated || {};
                if (D) {
                    var L = {},
                    w = l.
                default.reduce(n.form.pages.slice(0, a.page + 1),
                    function(t, n) {
                        return t.concat(n)
                    },
                    []);
                    l.
                default.forEach(w,
                    function(t) {
                        if (f.L_NORMAL === t.type) P[t.id] && !l.
                    default.isEmpty(P[t.id]) && (L[t.id] = P[t.id]);
                        else if (f.L_SQUEEZEBOX === t.type && (l.
                    default.forEach(t.children,
                        function(t) {
                            P[t] && !l.
                        default.isEmpty(P[t]) && (L[t] = P[t])
                        }), !O)) return ! 1
                    }),
                    s = !0,
                    i.validated = L
                } else l.
            default.forEach(n.form.pages[n.form.page],
                function(t) {
                    if (f.L_NORMAL === t.type) {
                        if (P[t.id] && !l.
                    default.isEmpty(P[t.id])) return O = !1,
                        !1
                    } else if (f.L_SQUEEZEBOX === t.type && (l.
                default.forEach(t.children,
                    function(t) {
                        if (P[t] && !l.
                    default.isEmpty(P[t])) return O = !1,
                        !1
                    }), !O)) return ! 1
                });
                O && (i.form = {
                    page: a.page
                }),
                p();
                break;
            case c._START_SUBMIT:
                h(l.
            default.reduce(n.form.pages,
                function(t, n) {
                    return t.concat(n)
                },
                [])),
                i.form = {
                    pending: !0
                };
                break;
            case c._SUBMIT_PROGRESS:
                i.form = {
                    progress: a.data
                };
                break;
            case c._IFP_PENDING:
                i.form = {
                    pending: !0,
                    progress: 0,
                    extData: a.data,
                    formStatus: 0
                },
                a.data && a.data.ext && l.
            default.forEach(a.data.ext,
                function(t, n) {
                    i.form.extData[n] = t
                });
                break;
            case c._IFP_CANCEL:
                i.form = {
                    pending: !1,
                    progress: 0,
                    extData: null
                };
                break;
            case c._IFP_FINISH_PAY:
                y();
                break;
            case c._IFP_CONFIRM:
                i.form = {
                    pending: !1,
                    progress: 0,
                    submitFin: !0
                };
                break;
            case c._SUBMIT_ERROR:
                i.form = {
                    pending: !1,
                    progress: 0
                };
                break;
            case c._SUBMIT_FAILED:
                i.form = {
                    pending: !1,
                    progress: 0,
                    submitFin: !0,
                    extData: a.data,
                    formStatus: a.errorCode
                };
                break;
            case c._SUBMIT_SUCCEED:
                i.form = {
                    pending: !1,
                    progress: 0,
                    submitFin: !0,
                    formStatus: 0
                },
                a.data && (i.form.extData = a.data, a.data.ext && l.
            default.forEach(a.data.ext,
                function(t, n) {
                    i.form.extData[n] = t
                })),
                b(),
                y();
                break;
            case c._SUBMIT_QUEUE:
                var R = (0, u.getCookie)(r.identifier.QUEUE),
                F = null;
                if (R) {
                    var U = R.split("|"),
                    B = o(U, 2),
                    H = B[0],
                    j = B[1],
                    G = +new Date,
                    W = +j + 1e3 * H;
                    W > G && (F = H)
                }
                var V = F ? Math.min(60, Math.round(1.25 * F)) : Math.round(10 + 20 * Math.random()); (0, u.setCookie)(r.identifier.QUEUE, V + "|" + +new Date, {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: u._COOKIE_STATIC.SUBMIT_ONCE_DAY,
                    path: "/"
                }),
                i.form = {
                    progress: 0,
                    extData: null,
                    queue: V
                };
                break;
            case c._SUBMIT_QUEUE_END:
                (0, u.setCookie)(r.identifier.QUEUE, "", {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: -1,
                    path: "/"
                }),
                i.form = {
                    pending: !1,
                    progress: 0,
                    extData: null,
                    queue: null
                };
                break;
            case c._SUBMIT_QUEUE_FIN:
                (0, u.setCookie)(r.identifier.QUEUE, "", {
                    domain: u._COOKIE_STATIC.DOMAIN,
                    expires: -1,
                    path: "/"
                }),
                i.form = {
                    pending: !1,
                    progress: 0,
                    extData: null
                };
                break;
            default:
                p()
            }
            if (l.
        default.isEmpty(i)) return n;
            var z = l.
        default.assign({},
            n);
            return l.
        default.forEach(i,
            function(t, n) {
                z[n] = l.
            default.assign({},
                z[n], t)
            }),
            s && i.validated && (z.validated = i.validated),
            z
        }
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    function o(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.getSubmitData = n.getUvdData = n.getPresetData = n.getDefaultData = n.TreeManager = void 0;
    var s = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    l = a(97),
    u = r(l),
    c = a(6),
    d = r(c),
    f = a(57),
    m = a(61),
    p = r(m),
    h = a(8),
    g = a(55),
    _ = a(98),
    v = a(108),
    b = (0, f.FORM_COMPONENTS_NAME_DETAILS)({}),
    y = function(t) {
        var n = null,
        a = t.optionsDefaultValue,
        r = t.options,
        i = o(t, ["optionsDefaultValue", "options"]);
        if (a && !d.
    default.isEmpty(a)) {
            n = [];
            var s = i.isLimitOptions && i.optionsQuotaInfo;
            d.
        default.forEach(r,
            function(t) {
                if (t.isDefaultValue) {
                    if (s && t.sId in i.optionsQuotaInfo) {
                        var a = (0, h.quotaCalculate)(i.optionsQuotaInfo[t.sId]),
                        r = a.remaining;
                        if (r <= 0) return
                    }
                    n.push(t.sId)
                }
            })
        }
        return n
    },
    E = function(t, n) {
        if (n.match(/:/)) {
            n = d.
        default.trim(n);
            var a = /(\d+):(\d+)(:(\d+))?$/,
            r = n.match(a),
            i = [r[1], r[2], r[4]].concat("00", "00").slice(0, +t).concat("00", "00").slice(0, 3).join(":");
            return n.replace(a, i)
        }
        return n
    },
    C = function(t, n) {
        var a = t.dayDefault,
        r = t.defaultDay,
        i = t.timeDefault,
        o = t.defaultTime,
        s = t.dayTimeDefault,
        l = t.defaultDayTime,
        c = t.timePrecision,
        d = null,
        f = (0, u.
    default)();
        if (t.isCustomField && (n = t.cfDateTimeType), "dateTime_date" !== n && n)"dateTime_time" === n ? ("2" === i ? d = f.getTime() : "-1" === i && (d = o || null), d && c && (d = E(c, d))) : "dateTime_both" === n && ("2" === s ? d = f.getFullDateTime() : "-1" === s && (d = l || null), d && c && (d = E(c, d)));
        else switch ("" + a) {
        case "2":
            d = f.getFullDate();
            break;
        case "3":
            d = f.add( - 1, "D").getFullDate();
            break;
        case "4":
            d = f.add(1, "D").getFullDate();
            break;
        case "5":
            d = f.month();
            break;
        case "6":
            d = f.year();
            break;
        case "-1":
            d = r || null
        }
        if (d) {
            var m = new _.CalendarObject(d);
            d = m.toObject()
        }
        return d
    },
    T = function(t) {
        var n = null,
        a = t.commoditiesDefaultValue,
        r = t.commodities,
        i = o(t, ["commoditiesDefaultValue", "commodities"]);
        if (a && !d.
    default.isEmpty(a)) {
            n = {};
            var s = i.optionsQuotaInfo && i.isLimitOptions && i.isLimitStock;
            d.
        default.forEach(r,
            function(t) {
                if (t.defaultValue) {
                    var a = t.defaultValue;
                    if (s && t.sId in i.optionsQuotaInfo) {
                        var r = (0, h.maxCanUseCalculate)((0, h.quotaCalculate)(i.optionsQuotaInfo[t.sId]));
                        isFinite(r) || (a = Math.min(a, r))
                    }
                    a > 0 && d.
                default.isNumber(a) && isFinite(a) && (n[t.sId] = a)
                }
            })
        }
        return n
    },
    S = n.TreeManager = function() {
        function t(n) {
            i(this, t),
            this.tree = n
        }
        return s(t, [{
            key: "getChildren",
            value: function(t) {
                return t || (t = null),
                d.
            default.filter(this.tree,
                function(n) {
                    return n.pId === t
                })
            }
        },
        {
            key: "dfs",
            value: function(t, n) {
                var a = this,
                r = -1,
                i = function t(n, i) {
                    0 === n.length ? r = Math.max(i, r) : d.
                default.forEach(n,
                    function(n) {
                        var r = a.getChildren(n.id);
                        t(r, i + 1)
                    })
                };
                return i(t, n),
                r
            }
        },
        {
            key: "getDepth",
            value: function() {
                return this._treeDepth ? this._treeDepth: (this._treeDepth = this.dfs(this.getChildren(null), 0), this._treeDepth)
            }
        },
        {
            key: "getCurrentLeafDepth",
            value: function(t) {
                if (null === t) return this.getDepth();
                var n = 0,
                a = d.
            default.find(this.tree, {
                    id: t
                });
                do n++,
                a = d.
            default.find(this.tree, {
                    id: a.pId
                });
                while (a);
                return this.dfs(this.getChildren(t), n)
            }
        }]),
        t
    } (),
    M = function(t) {
        var n = new S(t.options),
        a = null,
        r = function t(r, i) {
            d.
        default.forEach(n.getChildren(r),
            function(r) {
                r.defaultValue && (a || (a = []), a.push(r), i < n.getCurrentLeafDepth(r.id) && t(r.id, i + 1))
            })
        };
        return r(null, 0),
        a = a ? {
            current: a,
            id: a[a.length - 1].sId
        }: {
            current: [],
            id: null
        }
    },
    I = function(t) {
        var n = +t.rateDefault,
        a = +(t.rateMax || 5);
        return d.
    default.isNumber(n) && !isNaN(n) && isFinite(n) ? Math.min(n, a) : null
    },
    N = function(t) {
        var n = null;
        return [1, 2].indexOf( + t.tabularType) > -1 || void 0 === t.tabularType ? (n = {},
        d.
    default.forEach(t.options,
        function(a) {
            a.isDefaultValue && d.
        default.forEach(t.questions,
            function(r) {
                n[r.id] || (n[r.id] = []),
                n[r.id].push(t.ql2sMapping[r.id][a.id])
            })
        })) : 4 === +t.tabularType && t.rateDefault && (n = {},
        d.
    default.forEach(t.questions,
        function(a) {
            n[a.id] = +t.rateDefault
        })),
        d.
    default.isEmpty(n) && (n = null),
        n
    },
    A = function(t) {
        var n = null,
        a = (t.isCustomField, o(t, ["isCustomField"])),
        r = (0, g.getComponentType)(t);
        switch (r) {
        case "radio":
        case "checkbox":
        case "dropDown":
        case "picRadio":
        case "picCheckbox":
        case "title":
        case "gender":
        case "ctcf_6":
        case "ctcf_7":
            n = y(t);
            break;
        case "commodity":
            n = T(t);
            break;
        case "multiLevel":
            n = M(t);
            break;
        case "dateTime_date":
        case "dateTime_time":
        case "dateTime_both":
        case "ctcf_9":
            var i = r;
            "ctcf_9" === r && (i = t.cfDateTimeType),
            n = C(t, i);
            break;
        case "rate":
        case "ctcf_4":
            n = I(t);
            break;
        case "tabular":
            n = N(t);
            break;
        case "company":
        case "department":
        case "position":
            var s = !(1 === +a.searchComponentType || void 0 === a.searchComponentType);
            s && (n = y(t));
            break;
        case "ctcf_5":
            a.cfDefaultSymbol && (n = [ + a.cfDefaultSymbol]);
            break;
        case "ctcf_12":
            n = W(t)
        }
        return null == n || d.
    default.isObject(n) && d.
    default.isEmpty(n) ? null: n
    };
    n.getDefaultData = A;
    var k = function(t) {
        var n = [];
        return d.
    default.forEach(t,
        function(t) {
            t && n.indexOf(t) === -1 && n.push(t)
        }),
        d.
    default.isEmpty(n) ? null: n
    },
    x = function(t, n) {
        var a = function n(a) {
            var r = null,
            i = null;
            if (d.
        default.isNumber(a) || d.
        default.isNumber( + a) && !isNaN( + a)) {
                var o = d.
            default.find(t.options, {
                    sId: +a
                });
                o ? r = o.sId: +a === t.otherId && (r = t.otherId)
            } else if (d.
        default.isString(a)) {
                var s = d.
            default.find(t.options, {
                    value: a
                });
                s && (r = s.sId)
            } else {
                if (d.
            default.isArray(a)) return d.
            default.map(a, n);
                d.
            default.isPlainObject(a) && a.id && (r = n(a.id), i = a.value)
            }
            if (r && t.isLimitOptions && t.optionsQuotaInfo && r in t.optionsQuotaInfo) {
                var l = t.optionsQuotaInfo[r],
                u = (0, h.quotaCalculate)(l),
                c = u.remaining;
                c <= 0 && (r = null)
            }
            return r && i && (r = {
                id: r,
                value: i
            }),
            r
        };
        return k([].concat(a(n)))
    },
    D = function(t, n) {
        var a = function n(a) {
            var r = null,
            i = null;
            if (d.
        default.isNumber(a) || d.
        default.isNumber( + a) && !isNaN( + a)) {
                var o = d.
            default.find(t.options, {
                    sId: +a
                });
                o || (o = d.
            default.find(t.options, {
                    id: +a
                })),
                o && (r = o.sId)
            } else if (d.
        default.isString(a)) {
                var s = d.
            default.find(t.options, {
                    value: a
                });
                s && (r = s.sId)
            } else {
                if (d.
            default.isArray(a)) return d.
            default.map(a, n);
                d.
            default.isPlainObject(a) && a.id && (r = n(a.id), i = a.value)
            }
            if (r && t.isLimitOptions && t.optionsQuotaInfo && r in t.optionsQuotaInfo) {
                var l = t.optionsQuotaInfo[r],
                u = (0, h.quotaCalculate)(l),
                c = u.remaining;
                c <= 0 && (r = null)
            }
            return r && i && (r = {
                id: r,
                value: i
            }),
            r
        };
        return k([].concat(a(n)))
    },
    O = function(t, n) {
        var a = null;
        return d.
    default.isArray(n) && (a = [], d.
    default.forEach(n,
        function(n) {
            d.
        default.find(t.options, {
                sId: n
            }) && a.push(n)
        }), d.
    default.isEmpty(a) && (a = null)),
        a
    },
    P = function(t, n) {
        return d.
    default.isNumber( + n) && !isNaN( + n) && isFinite( + n) ? Math.min( + t.rateMax, +n) : null
    },
    L = function(t, n) {
        var a = null;
        if (2 === t.componentType) {
            var r = n || "";
            d.
        default.isPlainObject(n) && (r = n.content || ""),
            a = {
                content: r
            }
        } else if (d.
    default.isPlainObject(n) && n.struct) {
            if (a = {
                struct: n.struct
            },
            a.struct[0]) {
                var i = a.struct[0];
                if (t.isLimitCountry && +i !== +t.limitCountry) a.struct = null;
                else {
                    var o = +(t.minLevel || 3);
                    o && (a.struct = a.struct.slice(0, o))
                }
            } else a.struct = null;
            n.content && (a.content = n.content),
            n.zipCode && (a.zipCode = n.zipCode)
        }
        return a
    },
    w = function(t, n) {
        var a = null;
        if (d.
    default.isPlainObject(n)) {
            var r = {};
            if (t.isOpenDetails) {
                var i = t.detailsItem || [2, 4];
                d.
            default.forEach(b,
                function(t) {
                    i.indexOf( + t.id) > -1 && n[t.name] && (r[t.name] = "" + (n[t.name] || ""))
                })
            } else n.n && (r = {
                n: n.n
            });
            d.
        default.isEmpty(r) || (a = r)
        } else a = {
            n: "" + (n || "")
        };
        return a
    },
    R = function(t, n) {
        var a = null;
        return 1 === +t.searchComponentType || null == t.searchComponentType ? d.
    default.isString(n) && (a = n) : d.
    default.isArray(n) && (a = x(t, n)),
        a
    },
    F = function(t, n) {
        var a = null;
        return t.isSendMsgAuth ? d.
    default.isArray(n) ? d.
    default.isString(n[0]) && (a = {
            mobile: n[0] || ""
        }) : d.
    default.isPlainObject(n) && n.mobile && (a = {
            mobile: n.mobile
        }) : d.
    default.isPlainObject(n) ? n.mobile && (a = [].concat("" + n.mobile)) : a = [].concat(n),
        [].concat(a || [])
    },
    U = function(t, n) {
        var a = {},
        r = 4 === +t.tabularType,
        i = [1, 2].indexOf( + t.tabularType) > -1 || null == t.tabularType;
        return d.
    default.forEach(n,
        function(n, o) {
            if (d.
        default.find(t.questions, {
                id: +o
            }) && n) if (r) d.
        default.isNumber(n) && +n <= 20 && (a[o] = +n);
            else if (i) {
                if (d.
            default.isArray(n) && !d.
            default.isEmpty(n)) {
                    var s = [],
                    l = t.ql2sMapping[ + o];
                    d.
                default.forEach(l,
                    function(t) {
                        n.indexOf( + t) > -1 && s.push( + t)
                    }),
                    d.
                default.isEmpty(s) || (a[o] = s)
                }
            } else d.
        default.isObject(n) || d.
        default.isArray(n) || (a[o] = n)
        }),
        d.
    default.isEmpty(a) && (a = null),
        a
    },
    B = function(t, n) {
        var a = null;
        return d.
    default.isPlainObject(n) && (a = {},
        d.
    default.forEach(n,
        function(n, r) {
            var i = d.
        default.find(t.commodities, {
                sId: +r
            });
            if (i && n) {
                if (t.isLimitOptions && t.isLimitStock && t.optionsQuotaInfo && r in t.optionsQuotaInfo) {
                    var o = t.optionsQuotaInfo[r],
                    s = (0, h.quotaCalculate)(o),
                    l = (0, h.maxCanUseCalculate)(s),
                    u = Math.min(s.remaining, l);
                    isFinite(u) ? a[ + r] = Math.min(u, +n) : a[ + r] = +n
                } else a[ + r] = +n;
                t.isLimitStock && t.setMaxBuyNum && t.setMaxBuyNum[i.id] && (a[ + r] = Math.min(a[ + r], t.setMaxBuyNum[i.id]))
            }
        }), d.
    default.isEmpty(a) && (a = null)),
        a
    },
    H = function(t, n) {
        var a = null;
        if (d.
    default.isPlainObject(n) && !d.
    default.isEmpty(n)) {
            a = {};
            var r = [],
            i = n.id;
            if (n.current) {
                var o = !1;
                if (i && (d.
            default.find(t.options, {
                    sId: i
                }) && d.
            default.find(n.current, {
                    sId: i
                }) || (o = !0)), !o) {
                    var s = null;
                    d.
                default.forEach(n.current,
                    function(n) {
                        var a = d.
                    default.find(t.options, {
                            sId: n.sId
                        });
                        return ! a || a.pId && a.pId !== s ? (o = !0, !1) : (s = a.id, void r.push(n))
                    })
                }
                if (!o) {
                    if (t.isAllowPartEmpty) i || d.
                default.isEmpty(r) || (i = d.
                default.last(r).sId);
                    else if (i) {
                        var l = d.
                    default.find(t.options, {
                            sId: i
                        }).id;
                        l && d.
                    default.filter(t.options, {
                            pId: l
                        }).length > 0 && (i = null)
                    }
                    var u = null;
                    i && (u = d.
                default.find(t.options, {
                        sId: i
                    }));
                    var c = null;
                    u && [2, 3].indexOf( + u.type) > -1 && (c = n.value || null),
                    a = {
                        id: i,
                        value: c,
                        current: r
                    }
                }
            }
            d.
        default.isEmpty(a) && (a = null)
        }
        return a
    },
    j = function(t, n) {
        var a = (0, g.getComponentType)(t),
        r = a;
        if ("ctcf_9" === a && (r = t.cfDateTimeType), "dateTime_date" === r || !r) {
            var i = (0, u.
        default)();
            switch ("" + t.dayDefault) {
            case "2":
                n = i.getFullDate();
                break;
            case "3":
                n = i.add( - 1, "D").getFullDate();
                break;
            case "4":
                n = i.add(1, "D").getFullDate()
            }
        }
        if (n) {
            var o = new _.CalendarObject(n),
            s = o.toObject();
            if (t.dateFormat.indexOf(s.dateType) > -1 || !s.dateType) return t.timePrecision && n.timeType && (n.timeType = +t.timePrecision),
            s
        }
        return null
    },
    G = function(t, n) {
        var a = [];
        return d.
    default.forEach([].concat(n),
        function(t) {
            d.
        default.isPlainObject(t) ? a.push(t) : t && a.push("" + t)
        }),
        d.
    default.uniq(a)
    },
    W = function(t, n) {
        var a = null;
        if (2 !== t.componentType && (a = {
            vpType: +(t.defaultVpLocation || 1)
        }), n) if (2 === t.componentType && n.vpType) {
            var r = d.
        default.find(h.CF_VEHICLE_TYPE_SELECT, {
                id: +n.vpType
            });
            r && (a = {
                vpVal: "" + r.value + n.vpVal
            })
        } else if (2 !== t.componentType && !n.vpType && n.vpVal && 0 !== n.vpVal.indexOf("WJ")) {
            var i = n.vpVal.substr(0, 1),
            o = n.vpVal.substr(1),
            s = d.
        default.find(h.CF_VEHICLE_TYPE_SELECT, {
                value: i
            });
            s && (a = {
                vpType: s.id,
                vpVal: o
            })
        }
        return a
    },
    V = function(t, n) {
        var a = null;
        return t.isAcceptMulti ? (a = [], d.
    default.forEach([].concat(n),
        function(t) {
            d.
        default.isPlainObject(t) ? a.push(t) : a.push("" + t)
        }), d.
    default.uniq(a)):
        a = n
    },
    z = (n.getPresetData = function(t, n) {
        var a = this.components,
        r = null,
        i = t,
        o = null;
        if (!n) return null;
        if (f.DT_CONTACT_MAPPING[i]) {
            var s = f.DT_CONTACT_MAPPING[i];
            r = d.
        default.find(a, {
                type: s
            }),
            r && (i = r.id)
        }
        if (r || (r = d.
    default.find(a, {
            id: i
        })), r || (r = d.
    default.find(a, {
            type: i
        }), r && (i = r.id)), !r) return null;
        var l = (0, g.getComponentType)(r);
        switch (l) {
        case "radio":
        case "checkbox":
        case "dropDown":
        case "picRadio":
        case "picCheckbox":
        case "ctcf_6":
        case "ctcf_7":
            o = x(r, n);
            break;
        case "title":
        case "gender":
            o = D(r, n);
            break;
        case "attachment":
        case "picAttachment":
        case "avatar":
            break;
        case "rank":
            o = O(r, n);
            break;
        case "rate":
        case "ctcf_4":
            o = P(r, n);
            break;
        case "city":
        case "address":
        case "location":
            o = L(r, n);
            break;
        case "name":
            o = w(r, n);
            break;
        case "company":
        case "department":
        case "position":
            o = R(r, n);
            break;
        case "mobile":
            o = F(r, n);
            break;
        case "tabular":
            o = U(r, n);
            break;
        case "commodity":
            o = B(r, n);
            break;
        case "multiLevel":
            o = H(r, n);
            break;
        case "dateTime_both":
        case "dateTime_date":
        case "dateTime_time":
        case "birthDate":
        case "ctcf_9":
            o = j(r, n);
            break;
        case "email":
        case "tel":
        case "wechat":
        case "qq":
        case "website":
        case "fax":
        case "IM":
        case "skype":
        case "whatsApp":
        case "messenger":
        case "viber":
        case "line":
        case "telegram":
        case "SNS":
        case "weibo":
        case "linkedIn":
        case "twitter":
        case "facebook":
        case "instagram":
        case "mkGooglePlus":
            o = G(r, n);
            break;
        case "ctcf_12":
            o = W(r, n);
            break;
        default:
            o = V(r, n)
        }
        return o ? [i, o] : o
    },
    function(t, n) {
        var a = [],
        r = function t(n) {
            n && (d.
        default.isArray(n) ? d.
        default.forEach(n,
            function(n) {
                return t(n)
            }) : d.
        default.isPlainObject(n) && !isNaN( + n.id) ? a.push([n.id, n.value]) : isNaN( + n) || a.push(n))
        };
        if (d.
    default.forEach([].concat(n),
        function(t) {
            t && r(t)
        }), d.
    default.isEmpty(a)) a = null;
        else {
            var i = (0, g.getComponentType)(t);
            if (["dropDown", "radio", "picRadio", "ctcf_6"].indexOf(i) > -1) a = a[0];
            else if (["title", "gender"].indexOf(i) > -1) {
                a = a[0];
                var o = d.
            default.find(t.options, {
                    sId: a
                });
                a = o ? a + ";" + o.id: null
            }
        }
        return (null == a || d.
    default.isArray(a) && d.
    default.isEmpty(a)) && (a = null),
        a
    }),
    K = function(t, n) {
        var a = {},
        r = 0;
        return d.
    default.forEach([].concat(n),
        function(n) {
            n && n.name && (a["ATTA_" + t.id + "_" + r] = n, r++)
        }),
        d.
    default.isEmpty(a) ? null: a
    },
    q = function(t, n) {
        var a = {};
        if (n && !n.isEmpty) try {
            var r = (0, v.dataURLToBlob)(n.dataURL),
            i = new File([r], "SIGN_" + t.id + ".png", {
                type: r.type
            });
            a["SIGN_" + t.id + "_0"] = new h.FileBox(i, !1)
        } catch(t) {
            console.log(t)
        }
        return d.
    default.isEmpty(a) ? null: a
    },
    Y = function(t, n) {
        var a = [];
        return d.
    default.forEach(n,
        function(t) {
            t && a.push(t)
        }),
        d.
    default.isEmpty(a) ? null: a
    },
    Q = function(t, n) {
        var a = null;
        return d.
    default.isNumber( + n) && !isNaN( + n) && isFinite( + n) && (a = Math.min( + t.rateMax, +n)),
        a
    },
    J = function(t, n) {
        var a = null;
        if (n && n.struct && d.
    default.isArray(n.struct)) for (var r = t.isLimitCountry && t.limitCountry,
        i = 2 === t.componentType,
        o = n.struct.length; o >= (r && !i) ? 1 : 0; o--) if (n.struct[o]) {
            a = +n.struct[o];
            break
        }
        return a
    },
    X = function(t, n) {
        var a = null;
        if (n) {
            var r = null,
            i = null,
            o = null;
            if (n.struct && d.
        default.isArray(n.struct)) {
                var s = t.isLimitCountry && t.limitCountry,
                l = 2 === t.componentType;
                if ((!s || s && 1 !== +s) && l);
                else for (var u = n.struct.length; u >= (s && !l) ? 1 : 0; u--) if (n.struct[u]) {
                    r = +n.struct[u];
                    break
                }
            }
            i = n.content || null,
            o = n.zipCode || null,
            (r || i || o) && (a = [[r, i, o]])
        }
        return a
    },
    Z = function(t, n) {
        var a = {};
        return d.
    default.forEach(n,
        function(t, n) {
            t && (a[n] = t)
        }),
        d.
    default.isEmpty(a) ? null: a
    },
    ee = function(t, n) {
        var a = null;
        return 1 === +t.searchComponentType || null == t.searchComponentType ? n && (a = n) : (a = z(t, n), a && d.
    default.isArray(a) && !d.
    default.isEmpty(a) && (a = a[0])),
        a
    },
    te = function(t, n) {
        var a = null;
        if (n) if (t.isSendMsgAuth && d.
    default.isPlainObject(n) && !d.
    default.isEmpty(n)) {
            var r = {};
            n.mobile && d.
        default.trim(n.mobile) && (r.mb = d.
        default.trim(n.mobile)),
            n.verificationToken && (n.verificationMobileToken ? n.verificationCode && n.verificationMobileToken && (r.vt = n.verificationToken, r.vv = n.verificationMobileToken, r.vc = n.verificationCode) : r.vt = n.verificationToken),
            a = [r]
        } else a = [],
        d.
    default.forEach([].concat(n),
        function(t) {
            t = d.
        default.trim(t),
            t && a.indexOf(t) === -1 && a.push(t)
        }),
        d.
    default.isEmpty(a) && (a = null);
        return a
    },
    ne = {
        1 : function(t) {
            var n = null;
            return d.
        default.forEach([].concat(t),
            function(t) {
                if (t) return n = t,
                !1
            }),
            n
        },
        2 : function(t) {
            var n = [];
            return d.
        default.forEach([].concat(t),
            function(t) {
                t && n.push(t)
            }),
            d.
        default.isEmpty(n) && (n = null),
            n
        },
        3 : function(t) {
            var n = null;
            return null != t && (n = "" + t),
            n
        },
        4 : function(t, n) {
            var a = null;
            return null != t && !isNaN( + t) && isFinite( + t) && (a = -Math.min( + (n.rateMax || 5), +t)),
            a
        }
    },
    ae = function(t, n) {
        var a = null,
        r = ne[t.tabularType || 1];
        return n && d.
    default.isPlainObject(n) && (a = {},
        d.
    default.forEach(n,
        function(n, i) {
            var o = r(n, t);
            null != o && (a[i] = o)
        }), d.
    default.isEmpty(a) && (a = null)),
        a
    },
    re = function(t, n) {
        var a = null;
        if (n && !d.
    default.isEmpty(n)) {
            var r = n;
            r.id && r.value ? a = [r.id, r.value] : r.id && (a = r.id)
        }
        return a
    },
    ie = function(t, n) {
        var a = null;
        return null != n && (a = Number(p.
    default.localeStringToNumber(n)), d.
    default.isNumber(a) && !isNaN(a) && isFinite(a) || (a = null)),
        a
    },
    oe = function(t, n) {
        var a = null;
        return n && (a = {},
        d.
    default.forEach(n,
        function(t) {
            var n = a[t.type] || [];
            t.info && d.
        default.trim(t.info) && n.indexOf(t.info) === -1 && n.push(t.info),
            d.
        default.isEmpty(n) || (a[t.type] = n)
        }), d.
    default.isEmpty(a) && (a = null)),
        a
    },
    se = function(t, n) {
        var a = null;
        return null != n && "" !== n && (d.
    default.isArray(n) || d.
    default.isPlainObject(n) ? d.
    default.isEmpty(n) || (d.
    default.isArray(n) ? (a = [], d.
    default.forEach(n,
        function(t) {
            t && a.push(t)
        })) : d.
    default.isPlainObject(n) && (a = {},
        d.
    default.forEach(n,
        function(t, n) {
            t && (a[n] = t)
        })), d.
    default.isEmpty(a) && (a = null)) : a = n),
        a
    },
    le = function(t, n) {
        var a = null;
        return d.
    default.isPlainObject(n) && (a = n.value ? (0, h.strSerialNoNormalize)(n.value) : null),
        a
    },
    ue = function(t, n) {
        var a = null;
        return n && n.vpVal && (a = 2 !== t.componentType && n.vpType ? (0, h.getVehicleCNStr)(n) : (0, h.getVehicleCNStr)({
            vpVal: n.vpVal
        })),
        a
    },
    ce = function(t, n) {
        var a = null;
        return null != n && (a = Number(p.
    default.localeStringToNumber(n[1])), d.
    default.isNumber(a) && !isNaN(a) && isFinite(a) || (a = null), null !== a && (a = [n[0], a])),
        a
    },
    de = function(t, n) {
        if (n) {
            var a = new _.CalendarObject(n),
            r = (0, g.getComponentType)(t);
            "ctcf_9" === r && (r = t.cfDateTimeType);
            var i = null,
            o = 0;
            switch (r) {
            case "dateTime_date":
            case "birthDate":
                i = t.dateFormat;
                break;
            case "dateTime_time":
                o = +(t.timePrecision || 3);
                break;
            case "dateTime_both":
                i = t.dateFormat,
                o = +(t.timePrecision || 3)
            }
            return i && i.indexOf(a.getDateType()) !== -1 || a.updateDateType(0),
            o && a.getTimeType() === o || a.updateTimeType(o),
            a.toString()
        }
        return null
    },
    fe = function(t, n) {
        var a = {
            id: t.id
        },
        r = (0, g.getComponentType)(t);
        switch (r) {
        case "radio":
        case "checkbox":
        case "dropDown":
        case "picRadio":
        case "picCheckbox":
        case "title":
        case "gender":
        case "ctcf_6":
        case "ctcf_7":
            a.data = z(t, n);
            break;
        case "attachment":
        case "picAttachment":
        case "avatar":
            a.attachment = K(t, n);
            break;
        case "signature":
            a.attachment = q(t, n);
            break;
        case "rank":
            a.data = Y(t, n);
            break;
        case "rate":
        case "ctcf_4":
            a.data = Q(t, n);
            break;
        case "city":
        case "location":
            a.data = J(t, n);
            break;
        case "address":
            a.data = X(t, n);
            break;
        case "name":
            a.data = Z(t, n);
            break;
        case "company":
        case "department":
        case "position":
            a.data = ee(t, n);
            break;
        case "mobile":
            a.data = te(t, n);
            break;
        case "tabular":
            a.data = ae(t, n);
            break;
        case "multiLevel":
        case "ctcf_8":
            a.data = re(t, n);
            break;
        case "number":
        case "currency":
        case "ctcf_3":
            a.data = ie(t, n);
            break;
        case "SNS":
        case "IM":
            a.data = oe(t, n);
            break;
        case "ctcf_11":
            a.data = le(t, n);
            break;
        case "ctcf_12":
            a.data = ue(t, n);
            break;
        case "ctcf_5":
            a.data = ce(t, n);
            break;
        case "dateTime_both":
        case "dateTime_date":
        case "dateTime_time":
        case "birthDate":
        case "ctcf_9":
            a.data = de(t, n);
            break;
        default:
            a.data = se(t, n)
        }
        return a
    },
    me = function(t, n) {
        var a = (0, g.getComponentType)(t);
        if (n && f.FORM_CONTACT_INFO_COMPONENT_LIST.indexOf(a) > -1) switch (a) {
        case "title":
        case "gender":
            var r = n[0],
            i = d.
        default.find(t.options, {
                sId: r
            });
            if (i) return i.id;
            break;
        case "company":
        case "department":
        case "position":
            if ([2, 3].indexOf( + t.searchComponentType) === -1) return n;
            break;
        case "email":
        case "mobile":
            return d.
        default.flatten([].concat(n).map(function(t) {
                try {
                    return d.
                default.isPlainObject(t) && "mobile" === a ? t.mobile: t.split(";")
                } catch(t) {
                    return ""
                }
            }))[0];
        case "name":
            return n;
        case "location":
            if (n && n.struct) {
                var o = {};
                return n.struct && (n.struct[0] && (o.I = n.struct[0]), n.struct[1] && (o.II = n.struct[1]), n.struct[2] && (o.III = n.struct[2]), n.struct[3] && (o.IV = n.struct[3])),
                o
            }
            break;
        case "address":
            if (n) {
                var s = {};
                return n.struct && (n.struct[0] && (s.I = n.struct[0]), n.struct[1] && (s.II = n.struct[1]), n.struct[2] && (s.III = n.struct[2]), n.struct[3] && (s.IV = n.struct[3])),
                [s, n.content || null, n.zipCode || null]
            }
            break;
        default:
            return d.
        default.isArray(n) && n.join("") ? n[0] : n
        }
        return null
    },
    pe = function(t, n, a) {
        var r = (0, g.getComponentType)(t);
        if (n && f.FORM_CONTACT_INFO_COMPONENT_LIST.indexOf(r) > -1) {
            var i = me(t, n);
            if (null != i) switch (r) {
            case "name":
            case "location":
            case "address":
                return JSON.stringify(i) !== JSON.stringify(a);
            default:
                return i !== a
            }
        }
        return ! 1
    };
    n.getUvdData = function(t) {
        var n = t.components,
        a = t.data,
        r = t.uvd,
        i = "ctcf#";
        return r = d.
    default.assign({},
        r),
        d.
    default.forEach(n,
        function(t) {
            if (t) {
                var n = d.
            default.startsWith("" + t.id, i) && t.isCustomField,
                o = fe(t, a[t.id]);
                if (!n) {
                    var s = !1;
                    if ("IM" === t.type || "SNS" === t.type) d.
                default.forEach(o.data,
                    function(t, n) {
                        var a = f.METAID_COMPONENT_MAPPING[n];
                        if (a && t && t[0] && t[0] !== r[a]) return s = !0,
                        !1
                    });
                    else if (s = pe(t, a[t.id], r[f.COMPONENT_METAID_MAPPING[t.type]])) {
                        var l = me(t, a[t.id]);
                        null != l && ("name" === t.type ? r[f.COMPONENT_METAID_MAPPING[t.type]] = d.
                    default.assign({},
                        r[f.COMPONENT_METAID_MAPPING[t.type]], l) : r[f.COMPONENT_METAID_MAPPING[t.type]] = l)
                    }
                }
            }
        }),
        r
    },
    n.getSubmitData = function(t) {
        var n = t.components,
        a = t.data,
        r = t.visitor,
        i = null;
        r && (i = (r.uvd || {}).ct || {});
        var o = {},
        s = {},
        l = {},
        u = [],
        c = "ctcf#";
        return d.
    default.forEach(n,
        function(t) {
            if (t) {
                var n = d.
            default.startsWith("" + t.id, c) && t.isCustomField,
                r = fe(t, a[t.id]);
                if (r && (r.attachment ? (l.files || (l.files = {}), l.files = d.
            default.assign({},
                l.files, r.attachment)) : null != r.data && (n ? s[r.id.replace(c, "")] = r.data: o[r.id] = r.data), i && !n)) {
                    var m = !1;
                    "IM" === t.type || "SNS" === t.type ? d.
                default.forEach(r.data,
                    function(t, n) {
                        var a = f.METAID_COMPONENT_MAPPING[n];
                        if (a && t && t[0] && t[0] !== i[a]) return m = !0,
                        !1
                    }) : m = pe(t, a[t.id], i[f.COMPONENT_METAID_MAPPING[t.type]]),
                    m && u.push( + t.id)
                }
            }
        }),
        {
            cp: o,
            cp_ctcf: s,
            ext: l,
            uvdList: u
        }
    }
},
function(t, n) {
    "use strict";
    function a(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    function r(t) {
        return new Date(t.getTime())
    }
    function i(t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!t || !n) return ! 1;
        var i = r(t),
        o = r(n);
        return a || (i.setHours(0, 0, 0, 0), o.setHours(0, 0, 0, 0)),
        i.getSeconds() === o.getSeconds() && i.getMinutes() === o.getMinutes() && i.getHours() === o.getHours() && i.getDate() === o.getDate() && i.getMonth() === o.getMonth() && i.getFullYear() === o.getFullYear()
    }
    function o(t, n) {
        var a = r(t),
        i = r(n);
        a.setHours(0, 0, 0, 0),
        i.setHours(0, 0, 0, 0);
        var o = Math.abs(a.getTime() - i.getTime());
        return Math.round(o / 864e5)
    }
    function s(t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r(t),
        o = r(n);
        return a || (i.setHours(0, 0, 0, 0), o.setHours(0, 0, 0, 0)),
        i < o
    }
    function l(t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r(t),
        o = r(n);
        return a || (i.setHours(0, 0, 0, 0), o.setHours(0, 0, 0, 0)),
        i > o
    }
    function u(t, n, a) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = r(t);
        return i || o.setHours(0, 0, 0, 0),
        l(o, n, i) && s(o, a, i) || l(o, a, i) && s(o, n, i)
    }
    function c(t) {
        var n = new Date;
        return n.setHours(0, 0, 0, 0),
        s(t, n)
    }
    function f(t) {
        var n = new Date;
        return n.setHours(0, 0, 0, 0),
        l(t, n)
    }
    function m(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            from: null,
            to: null
        },
        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = n.from,
        o = n.to;
        return r ? r && o ? i(r, o) && i(t, r) ? a && (r = null, o = null) : i(t, r) || i(t, o) || s(t, o) && l(t, r) ? (r = t, o = null) : s(t, r) ? r = t: l(t, o) ? o = t: (o = t, s(o, r) && (o = r, r = t)) : i(t, r) || i(t, o) ? a && (r = null, o = null) : (o = t, s(o, r) && (o = r, r = t)) : r = t,
        {
            from: r,
            to: o
        }
    }
    function p(t, n, a) {
        var r = n.from,
        o = n.to;
        return r && o ? u(t, r, o, a) || i(t, r, a) || i(t, o, a) : r ? i(t, r, a) || l(t, r, a) : !!o && (i(t, o, a) || s(t, o, a))
    }
    function h(t) {
        return t > 1 && t < 9999 ? t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 : null
    }
    function g(t, n) {
        var a = ("" + t).length;
        return a > n ? ("" + t).slice( - n) : ("0000" + t).slice( - n)
    }
    function _() {
        for (var t = arguments.length,
        n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return new(Function.prototype.bind.apply(S, [null].concat(n)))
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var v = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    b = /(MM?M?M?|DD?D?D?|WW?|YYYY|YY|HH?|mm?|ii?|ss?|S{1,4}|.)/g,
    y = "MDWYHmisS",
    E = ["年", "月", "日", "时", "分", "秒", "毫秒"],
    C = ["y", "M", "d", "h", "m", "s", "ms"],
    T = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    S = function() {
        function t(n, r) {
            return a(this, t),
            this._Date = t._dateTimeFormatter(n),
            r && (this._Date = new Date(this.getUTCFullDateTime())),
            this.__isMGMoment = !0,
            this
        }
        return v(t, [{
            key: "isMGMoment",
            value: function() {
                return this.__isMGMoment
            }
        },
        {
            key: "__getN",
            value: function() {
                return this._Date
            }
        },
        {
            key: "clone",
            value: function() {
                return new t(this)
            }
        },
        {
            key: "_year",
            value: function(t) {
                return t ? this._Date.getUTCFullYear() : this._Date.getFullYear()
            }
        },
        {
            key: "_month",
            value: function(t) {
                return t ? this._Date.getUTCMonth() : this._Date.getMonth()
            }
        },
        {
            key: "_date",
            value: function(t) {
                return t ? this._Date.getUTCDate() : this._Date.getDate()
            }
        },
        {
            key: "_day",
            value: function(t) {
                return t ? this._Date.getUTCDay() : this._Date.getDay()
            }
        },
        {
            key: "_hours",
            value: function(t) {
                return t ? this._Date.getUTCHours() : this._Date.getHours()
            }
        },
        {
            key: "_minutes",
            value: function(t) {
                return t ? this._Date.getUTCMinutes() : this._Date.getMinutes()
            }
        },
        {
            key: "_seconds",
            value: function(t) {
                return t ? this._Date.getUTCSeconds() : this._Date.getSeconds()
            }
        },
        {
            key: "_ms",
            value: function(t) {
                return t ? this._Date.getUTCMilliseconds() : this._Date.getMilliseconds()
            }
        },
        {
            key: "_time",
            value: function() {
                return this._Date.getTime()
            }
        },
        {
            key: "isLeapYear",
            value: function() {
                return h(this.year())
            }
        },
        {
            key: "decade",
            value: function() {
                return 10 * Math.floor(this._year() / 10)
            }
        },
        {
            key: "year",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._year(t) : (t = +t, h(t) || 1 !== this._month() || 29 !== this._date() || this.date(28), this._Date.setFullYear(t), this)
            }
        },
        {
            key: "month",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._month(t) : (t = +t, this.isLeapYear() && 1 === t && this._date() >= 29 ? this.date(29) : this._date() > T[t] && this.date(T[t]), this._Date.setMonth(t), this)
            }
        },
        {
            key: "week",
            value: function() {
                return this._day()
            }
        },
        {
            key: "date",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._date(t) : (t = +t, this.isLeapYear() && 1 === this._month() && t >= 29 ? t = 29 : t > T[this._month()] ? t = T[this._month()] : t < 1 && (t = 1), this._Date.setDate(t), this)
            }
        },
        {
            key: "hours",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._hours(t) : (t = +t, this._Date.setHours(Math.max(0, Math.min(t, 23))), this)
            }
        },
        {
            key: "minutes",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._minutes(t) : (t = +t, this._Date.setMinutes(Math.max(0, Math.min(t, 59))), this)
            }
        },
        {
            key: "seconds",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._seconds(t) : (t = +t, this._Date.setSeconds(Math.max(0, Math.min(t, 59))), this)
            }
        },
        {
            key: "milliseconds",
            value: function(t) {
                return void 0 === t || isNaN( + t) || "boolean" == typeof t ? this._ms(t) : (t = +t, this._Date.setMilliseconds(Math.max(0, Math.min(t, 999))), this)
            }
        },
        {
            key: "time",
            value: function() {
                return this._time()
            }
        },
        {
            key: "add",
            value: function(t, n) {
                switch (n = n.toLowerCase(), t = +t, n) {
                case "y":
                    this.year(this._year() + t);
                    break;
                case "m":
                    var a = (t < 0 ? -1 : 1) * Math.floor(Math.abs(t) / 12),
                    r = (t < 0 ? -1 : 1) * (Math.abs(t) % 12);
                    this.month(this._month() + r),
                    this.year(this._year() + a);
                    break;
                case "d":
                    this._Date.setDate(this._date() + t);
                    break;
                case "w":
                    this._Date.setDate(this._date() + 7 * t);
                    break;
                case "h":
                    this._Date.setHours(this._hours() + t);
                    break;
                case "min":
                    this._Date.setMinutes(this._minutes() + t);
                    break;
                case "s":
                    this._Date.setSeconds(this._seconds() + t)
                }
                return this
            }
        },
        {
            key: "startOf",
            value: function(t) {
                switch (t) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "date":
                    this.hours(0);
                case "hours":
                    this.minutes(0);
                case "minutes":
                    this.seconds(0);
                case "seconds":
                    this.milliseconds(0)
                }
                return this
            }
        },
        {
            key: "endOf",
            value: function(t) {
                switch (t) {
                case "year":
                    this.month(11);
                case "month":
                    this.date(31);
                case "date":
                    this.hours(23);
                case "hours":
                    this.minutes(59);
                case "minutes":
                    this.seconds(59);
                case "seconds":
                    this.milliseconds(999)
                }
                return this
            }
        },
        {
            key: "day",
            value: function(t) {
                return void 0 === t || isNaN( + t) ? this._day() : this.add(t - this._day(), "d")
            }
        },
        {
            key: "age",
            value: function(t) {
                var n = t.split(" ")[0].split("-");
                if (2 === n.length && 2 === n[1].length) return ! 1;
                var a = _(t),
                r = this.year() - a.year(),
                i = this.month() - a.month();
                return this.month() < a.month() ? (r--, i = 12 + i) : this.month() === a.month() && this.date() < a.date() && (r--, i = 11),
                {
                    year: r,
                    month: i
                }
            }
        },
        {
            key: "isSameDay",
            value: function(t) {
                return !! t && i(this._Date, _(t)._Date)
            }
        },
        {
            key: "gap",
            value: function(t) {
                return o(this._Date, _(t)._Date)
            }
        },
        {
            key: "isDayBefore",
            value: function(t) {
                return !! t && s(this._Date, _(t)._Date)
            }
        },
        {
            key: "isDayAfter",
            value: function(t) {
                return !! t && l(this._Date, _(t)._Date)
            }
        },
        {
            key: "isPastDay",
            value: function() {
                return !! d && c(this._Date)
            }
        },
        {
            key: "isFutureDay",
            value: function() {
                return !! d && f(this._Date)
            }
        },
        {
            key: "isBetween",
            value: function(t, n) {
                return ! (!t || !n) && u(this._Date, _(t)._Date, _(n)._Date)
            }
        },
        {
            key: "isInRange",
            value: function(t) {
                return ! (!t.from || !t.to) && p(this._Date, t)
            }
        },
        {
            key: "addToRange",
            value: function(t) {
                return m(this._Date, t)
            }
        },
        {
            key: "_formatDate",
            value: function(t, n) {
                var a = this,
                r = t.match(b);
                return r ? r.map(function(t) {
                    if (y.indexOf(t[0]) > -1) {
                        var r = t.length,
                        i = "";
                        switch (t[0]) {
                        case "Y":
                            i = g(a.year( !! n), r);
                            break;
                        case "M":
                            i = g(a.month( !! n) + 1, r);
                            break;
                        case "D":
                            i = g(a.date( !! n), r);
                            break;
                        case "W":
                            i = g(a.week( !! n) + 1, r);
                            break;
                        case "H":
                            i = g(a.hours( !! n), r);
                            break;
                        case "m":
                        case "i":
                            i = g(a.minutes( !! n), r);
                            break;
                        case "s":
                        case "S":
                            i = g(a.seconds( !! n), r)
                        }
                        return i
                    }
                    return t
                }).join("") : null
            }
        },
        {
            key: "getFullDate",
            value: function() {
                return this._formatDate("YYYY-MM-DD")
            }
        },
        {
            key: "getFullDateTime",
            value: function() {
                return this._formatDate("YYYY-MM-DD HH:mm:ss")
            }
        },
        {
            key: "getUTCFullDateTime",
            value: function() {
                return this._formatDate("YYYY-MM-DD HH:mm:ss", !0)
            }
        },
        {
            key: "getYearMonth",
            value: function() {
                return this._formatDate("YYYY-MM")
            }
        },
        {
            key: "getMonthDay",
            value: function() {
                return this._formatDate("MM-DD")
            }
        },
        {
            key: "getShortDate",
            value: function() {
                return this._formatDate("DD/MM/YY")
            }
        },
        {
            key: "getMonthYear",
            value: function() {
                return this._formatDate("MM/YY")
            }
        },
        {
            key: "getTime",
            value: function() {
                return this._formatDate("HH:mm:ss")
            }
        },
        {
            key: "getTimeHourMinute",
            value: function() {
                return this._formatDate("HH:mm")
            }
        },
        {
            key: "toString",
            value: function() {
                return this._Date.toString()
            }
        },
        {
            key: "format",
            value: function(t) {
                return t ? this._formatDate(t) : this.toString()
            }
        }], [{
            key: "_dateTimeFormatter",
            value: function(n) {
                if (null === n || void 0 === n) return new Date;
                var a = Object.prototype.toString.call(n);
                if ("[object Date]" === a) return new Date(n.getTime());
                if ("[object Number]" === a) return new Date(n);
                if ("[object String]" === a) {
                    var r = n.match(/\d+((ms)|[yMdhms年月日时分秒]|(毫秒))/gi),
                    i = [0, 0, 0, 0, 0, 0, 0];
                    if (r && r.length >= 3) r.forEach(function(t) {
                        var n = /(\d+)([yMdhms年月日时分秒]|(毫秒))/.exec(t);
                        n && (void 0 === i[C.indexOf(n[2])] ? i[E.indexOf(n[2])] = n[1] : i[C.indexOf(n[2])] = n[1])
                    });
                    else {
                        var o = n.replace(/^\s+|\s+$/gm, "").split(/\-|\_|\:|\s/g);
                        n.match(/[\-\_]/) ? o.forEach(function(t, n) {
                            t && (i[n] = t)
                        }) : o.forEach(function(t, n) {
                            t && (i[n + 3] = t)
                        })
                    }
                    if (0 === i.reduce(function(t, n) {
                        t += n
                    },
                    0)) return new Date;
                    var s = i[0],
                    l = i[1],
                    u = i[2],
                    c = i[3],
                    d = i[4],
                    f = i[5],
                    m = i[6];
                    return new Date(s, l - 1, u, c, d, f, m)
                }
                return "[object Object]" === a && n instanceof t ? new Date(n.time()) : void 0
            }
        }]),
        t
    } ();
    _.gap = o,
    _.isSameDay = i,
    _.isDayBefore = s,
    _.isDayAfter = l,
    _.isPastDay = c,
    _.isFutureDay = f,
    _.isDayBetween = u,
    _.addDayToRange = m,
    _.isDayInRange = p,
    n.
default = _,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.CalendarObject = n.TIME_TYPE_H = n.TIME_TYPE_HM = n.TIME_TYPE_HMS = n.TIME_TYPE_NULL = n.DATE_TYPE_D = n.DATE_TYPE_M = n.DATE_TYPE_Y = n.DATE_TYPE_MD = n.DATE_TYPE_YM = n.DATE_TYPE_YMD = n.DATE_TYPE_NULL = void 0;
    var o = function() {
        function t(t, n) {
            var a = [],
            r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done) && (a.push(s.value), !n || a.length !== n); r = !0);
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l["return"] && l["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return a
        }
        return function(n, a) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    s = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    l = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    u = a(99),
    c = r(u),
    d = a(97),
    f = r(d),
    m = n.DATE_TYPE_NULL = 0,
    p = n.DATE_TYPE_YMD = 1,
    h = n.DATE_TYPE_YM = 2,
    g = n.DATE_TYPE_MD = 3,
    _ = n.DATE_TYPE_Y = 4,
    v = n.DATE_TYPE_M = 5,
    b = n.DATE_TYPE_D = 6,
    y = n.TIME_TYPE_NULL = 0,
    E = n.TIME_TYPE_HMS = 3,
    C = n.TIME_TYPE_HM = 2,
    T = n.TIME_TYPE_H = 1,
    S = {
        0 : m,
        7 : p,
        6 : h,
        3 : g,
        4 : _,
        2 : v,
        1 : b
    },
    M = {
        year: "YEAR",
        month: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        day: "DAY",
        hour: "H"
    },
    I = (n.CalendarObject = function() {
        function t(n, a) {
            i(this, t),
            this.lang = a || M;
            var r = n; (0, c.
        default)(n) && (r = A(r)),
            this._init(r)
        }
        return l(t, [{
            key: "_init",
            value: function(t) {
                this.obj = N(t)
            }
        },
        {
            key: "getDateType",
            value: function() {
                return this.obj.dateType
            }
        },
        {
            key: "updateDateType",
            value: function(t) {
                this.obj.dateType = t
            }
        },
        {
            key: "getTimeType",
            value: function() {
                return this.obj.timeType
            }
        },
        {
            key: "updateTimeType",
            value: function(t) {
                this.obj.timeType = t
            }
        },
        {
            key: "toObject",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = s({},
                this.obj),
                a = t ? null: 2e3,
                r = t ? null: 0,
                i = t ? null: 1,
                o = t ? null: 0;
                switch (n.dateType) {
                case m:
                    n.y = null,
                    n.m = null,
                    n.d = null;
                    break;
                case g:
                    n.y = a;
                    break;
                case h:
                    n.d = i;
                    break;
                case _:
                    n.m = r,
                    n.d = i;
                    break;
                case v:
                    n.y = a,
                    n.d = i;
                    break;
                case b:
                    n.y = a,
                    n.m = r
                }
                switch (n.timeType) {
                case y:
                    n.H = null,
                    n.M = null,
                    n.S = null;
                    break;
                case C:
                    n.S = o;
                    break;
                case T:
                    n.M = o,
                    n.S = o
                }
                return n
            }
        },
        {
            key: "toString",
            value: function() {
                return k(this.toObject())
            }
        },
        {
            key: "toDisplay",
            value: function() {
                var t = this.toObject(),
                n = new Date(t.y || 0, t.m || 0, t.d || 0, t.H || 0, t.M || 0, t.S || 0, 0),
                a = (0, f.
            default)(n),
                r = [];
                switch (t.dateType) {
                case m:
                    break;
                case p:
                    r.push(a.format("YYYY-MM-DD"));
                    break;
                case h:
                    r.push(a.format("YYYY-MM"));
                    break;
                case g:
                    r.push(a.format("MM-DD"));
                    break;
                case _:
                    r.push(a.format("YYYY") + this.lang.year);
                    break;
                case v:
                    r.push(this.lang.month[a.month()]);
                    break;
                case b:
                    r.push(a.format("DD") + this.lang.day)
                }
                if (!t.dateType || [b, g, p, m].indexOf(t.dateType) > -1) switch (t.timeType) {
                case y:
                    break;
                case T:
                    r.push(a.format("HH") + this.lang.hour);
                    break;
                case C:
                    r.push(a.format("HH:mm"));
                    break;
                case E:
                    r.push(a.format("HH:mm:ss"))
                }
                return r.join(" ")
            }
        }]),
        t
    } (),
    function(t) {
        return t instanceof Date && !isNaN(t)
    }),
    N = function(t) {
        var n = s({},
        t);
        if (n.y = null != n.y ? n.y >>> 0 : null, n.m = null != n.m ? n.m >>> 0 : null, n.d = null != n.d ? n.d >>> 0 : null, n.H = null != n.H ? n.H >>> 0 : null, n.M = null != n.M ? n.M >>> 0 : null, n.S = null != n.S ? n.S >>> 0 : null, t.dateType === p) {
            var a = new Date(n.y, n.m, n.d, 0, 0, 0, 0);
            I(a) || (a = new Date),
            n.y = a.getFullYear(),
            n.m = a.getMonth(),
            n.d = a.getDate()
        } else t.dateType !== m && (n.m > 11 && (n.m = 0), n.d < 1 ? n.d = 1 : n.d > 29 && ([1, 3, 5, 7, 8, 10, 12].indexOf(n.m + 1) > -1 ? n.d = Math.min(31, n.d) : 1 === n.m ? n.d = Math.min(29, n.d) : n.d = Math.min(30, n.d)));
        return t.timeType === y || null == n.H && null == n.M && null == n.S ? n.timeType = y: (null != n.H && (n.H >= 24 && (n.H = 0), n.timeType = T), null != n.M && (n.M >= 60 && (n.M = 0), n.timeType = C), null != n.S && (n.S >= 60 && (n.S = 0), n.timeType = E)),
        n
    },
    A = function(t) {
        var n = ("" + t).split(" "),
        a = o(n, 2),
        r = a[0],
        i = a[1];
        i || r.indexOf(":") > -1 && (i = r, r = null);
        var s = {};
        if (r) {
            var l = 1,
            u = 1,
            c = 1,
            d = void 0,
            f = void 0,
            p = void 0,
            h = function(t) {
                t[0] > 12 && t.length > 1 ? (d = +t[0], d < 100 && (d = 2e3 + d), t[1] ? f = t[1] - 1 : u = 0, c = 0, s.dateType = S[parseInt("" + l + u + c, 2)], s.y = d, s.m = f || 0, s.d = 1) : t[0] > 12 && 1 === t.length ? (l = 0, u = 0, s.dateType = S[parseInt("" + l + u + c, 2)], s.y = 2e3, s.m = 0, s.d = +t[0]) : (l = 0, f = t[0] - 1, t[1] ? p = +t[1] : c = 0, s.dateType = S[parseInt("" + l + u + c, 2)], s.y = 2e3, s.m = f || 0, s.d = p || 1)
            },
            g = function(t, n, a) {
                t ? (t = +t, t < 100 && (t = 2e3 + t)) : (t = 2e3, l = 0),
                n ? n -= 1 : (n = 0, u = 0),
                a ? a = +a: (a = 1, c = 0),
                s.dateType = S[parseInt("" + l + u + c, 2)],
                s.y = t,
                s.m = n,
                s.d = a
            };
            if (r.indexOf("-") > -1) {
                var _ = r.split("-");
                if (3 === _.length) {
                    var v = o(_, 3);
                    d = v[0],
                    f = v[1],
                    p = v[2],
                    g(d, f, p)
                } else h(_)
            } else if (r.indexOf("/") > -1) {
                var b = r.split("/");
                if (3 === b.length) {
                    if ( + b[0] > 1900) {
                        var C = o(b, 3);
                        d = C[0],
                        f = C[1],
                        p = C[2]
                    } else if (b[1] > 12 && b[0] <= 12) {
                        var T = o(b, 3);
                        f = T[0],
                        p = T[1],
                        d = T[2]
                    } else {
                        var M = o(b, 3);
                        p = M[0],
                        f = M[1],
                        d = M[2]
                    }
                    g(d, f, p)
                } else h(b)
            } else {
                var I = r.split("<?>");
                h(I)
            }
        } else s.dateType = m;
        if (i) {
            var A = i.split(":"),
            k = o(A, 3),
            x = k[0],
            D = k[1],
            O = k[2];
            s.H = (x || 0) >>> 0,
            s.M = (D || 0) >>> 0,
            s.S = (O || 0) >>> 0,
            s.timeType = E
        } else s.timeType = y;
        return N(s)
    },
    k = function(t) {
        var n = new Date(t.y || 0, t.m || 0, t.d || 0, t.H || 0, t.M || 0, t.S || 0, 0),
        a = (0, f.
    default)(n),
        r = [];
        switch (t.dateType) {
        case m:
            break;
        case p:
            r.push(a.format("YYYY-MM-DD"));
            break;
        case h:
            r.push(a.format("YYYY-MM-"));
            break;
        case g:
            r.push(a.format("-MM-DD"));
            break;
        case _:
            r.push(a.format("YYYY--"));
            break;
        case v:
            r.push(a.format("-MM-"));
            break;
        case b:
            r.push(a.format("--DD"))
        }
        if (!t.dateType || t.dateType === m || t.dateType === p || t.dateType === g || t.dateType === b) switch (t.timeType) {
        case y:
            break;
        case T:
            r.push(a.format("HH:00:00"));
            break;
        case C:
            r.push(a.format("HH:mm:00"));
            break;
        case E:
            r.push(a.format("HH:mm:ss"))
        }
        return r.join(" ")
    }
},
function(t, n, a) {
    function r(t) {
        return "string" == typeof t || !o(t) && s(t) && i(t) == l
    }
    var i = a(100),
    o = a(106),
    s = a(107),
    l = "[object String]";
    t.exports = r
},
function(t, n, a) {
    function r(t) {
        return null == t ? void 0 === t ? u: l: c && c in Object(t) ? o(t) : s(t)
    }
    var i = a(101),
    o = a(104),
    s = a(105),
    l = "[object Null]",
    u = "[object Undefined]",
    c = i ? i.toStringTag: void 0;
    t.exports = r
},
function(t, n, a) {
    var r = a(102),
    i = r.Symbol;
    t.exports = i
},
function(t, n, a) {
    var r = a(103),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
    t.exports = o
},
function(t, n) { (function(n) {
        var a = "object" == typeof n && n && n.Object === Object && n;
        t.exports = a
    }).call(n,
    function() {
        return this
    } ())
},
function(t, n, a) {
    function r(t) {
        var n = s.call(t, u),
        a = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch(t) {}
        var i = l.call(t);
        return r && (n ? t[u] = a: delete t[u]),
        i
    }
    var i = a(101),
    o = Object.prototype,
    s = o.hasOwnProperty,
    l = o.toString,
    u = i ? i.toStringTag: void 0;
    t.exports = r
},
function(t, n) {
    function a(t) {
        return i.call(t)
    }
    var r = Object.prototype,
    i = r.toString;
    t.exports = a
},
function(t, n) {
    var a = Array.isArray;
    t.exports = a
},
function(t, n) {
    function a(t) {
        return null != t && "object" == typeof t
    }
    t.exports = a
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    function o(t) {
        for (var n = t.split(";base64,"), a = n[0].split(":")[1], r = window.atob(n[1]), i = r.length, o = new Uint8Array(i), s = 0; s < i; ++s) o[s] = r.charCodeAt(s);
        return new Blob([o], {
            type: a
        })
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    };
    n.dataURLToBlob = o;
    var l = a(22),
    u = r(l),
    c = a(19),
    d = r(c),
    f = a(23),
    m = r(f),
    p = a(109),
    h = r(p),
    g = a(110),
    v = r(g),
    b = d.
default.createClass({
        displayName:
        "MGSign",
        mixins: [m.
    default],
        getDefaultProps: function() {
            return {
                velocityFilterWeight: .7,
                minWidth: 1.1,
                maxWidth: 3.3,
                throttle: 20,
                minDistance: 5,
                penColor: "#0b1616",
                backgroundColor: "rgba(0,0,0,0)",
                onChange: null
            }
        },
        getInitialState: function() {
            return this.ratio = Math.max(1.5, Math.min(2.5, .9 * window.devicePixelRatio || 1)),
            this.dotSize = (this.props.minWidth + this.props.maxWidth) / 2,
            this.minDistance = 5,
            this.handleStrokeMoveUpdate = _.throttle(this._strokeMoveUpdate, this.props.throttle),
            {}
        },
        componentDidMount: function() {
            this._ctx = this.sign.getContext("2d"),
            this._ctx.scale(this.ratio, this.ratio),
            this.clear();
            var t = this.props.defaultValue;
            t && ("[object Array]" === Object.prototype.toString.call(t) ? this.fromData(t) : this.fromDataURL(t)),
            document.addEventListener("mouseup", this.handleMouseEnd),
            this.sign.addEventListener("touchstart", this.handleTouchStart, {
                passive: !1
            }),
            document.addEventListener("touchmove", this.handleStopMove, {
                passive: !1
            })
        },
        componentDidUpdate: function(t) {
            if (t.width !== this.props.width || t.height !== this.props.height) {
                var n = this._data;
                this._ctx = this.sign.getContext("2d"),
                this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                this._ctx.scale(this.ratio, this.ratio),
                this.clear(),
                this.fromData(n)
            }
        },
        componentWillUnmount: function() {
            this.clear(),
            document.removeEventListener("mouseup", this.handleMouseEnd),
            this.sign.removeEventListener("touchstart", this.handleTouchStart, {
                passive: !1
            }),
            document.removeEventListener("touchmove", this.handleStopMove, {
                passive: !1
            }),
            this.handleStrokeMoveUpdate.cancel && this.handleStrokeMoveUpdate.cancel()
        },
        handleStopMove: function(e) {
            this.stopMove && (e.preventDefault(), e.stopPropagation())
        },
        handleStrokeStart: function(e) {
            var t = {
                color: this.props.penColor,
                points: []
            };
            this._data.push(t),
            this._reset(),
            this._strokeMoveUpdate(e)
        },
        _strokeMoveUpdate: function(e) {
            var t = e.clientX,
            n = e.clientY,
            a = this._createPoint(t, n),
            r = this._data[this._data.length - 1],
            i = r.points,
            o = i.length > 0 && i[i.length - 1],
            s = !!o && a.distanceTo(o) <= this.minDistance,
            l = r.color;
            if (!o || !o || !s) {
                var u = this._addPoint(a);
                o ? u && this._drawCurve({
                    color: l,
                    curve: u
                }) : this._drawDot({
                    color: l,
                    point: a
                }),
                i.push({
                    time: a.time,
                    x: a.x,
                    y: a.y
                })
            }
        },
        handleStrokeEnd: function(e) {
            var t = this.props.onChange;
            this._strokeMoveUpdate(e),
            t && t(e, this.getData())
        },
        fromData: function(t) {
            var n = this;
            this.clear(),
            this._fromData(t,
            function(t) {
                var a = t.color,
                r = t.curve;
                return n._drawCurve({
                    color: a,
                    curve: r
                })
            },
            function(t) {
                var a = t.color,
                r = t.point;
                return n._drawDot({
                    color: a,
                    point: r
                })
            }),
            this._data = t
        },
        _fromData: function(t, n, a) {
            var r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done); r = !0) {
                    var u = s.value,
                    c = u.color,
                    d = u.points;
                    if (d.length > 1) for (var f = 0; f < d.length; f += 1) {
                        var m = d[f],
                        p = new h.
                    default(m.x, m.y, m.time);
                        this.penColor = c,
                        0 === f && this._reset();
                        var g = this._addPoint(p);
                        g && n({
                            color: c,
                            curve: g
                        })
                    } else this._reset(),
                    a({
                        color: c,
                        point: d[0]
                    })
                }
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l.
                    return && l.
                    return ()
                } finally {
                    if (i) throw o
                }
            }
        },
        fromDataURL: function(t) {
            if (t) {
                var n = new Image,
                a = this.ratio,
                r = this.sign.width / a,
                i = this.sign.height / a;
                this._reset();
                var o = this._ctx;
                n.onload = function() {
                    var t = this.width,
                    a = this.height,
                    s = Math.min(1, r / t, i / a);
                    t *= s,
                    a *= s,
                    o.drawImage(n, (r - t) / 2, (i - a) / 2, t, a)
                },
                n.onerror = function(t) {},
                n.src = t,
                this._isEmpty = !1
            }
        },
        _createPoint: function(t, n) {
            var a = this.props.rotation,
            r = this.sign.getBoundingClientRect();
            if (1 === a) {
                var i = n - r.top,
                o = r.right - t;
                return new h.
            default(i, o, +new Date)
            }
            return new h.
        default(t - r.left, n - r.top, +new Date)
        },
        _addPoint: function(t) {
            if (this._lastPoints.push(t), this._lastPoints.length > 2) {
                3 === this._lastPoints.length && this._lastPoints.unshift(this._lastPoints[0]);
                var n = this._calculateCurveWidths(this._lastPoints[1], this._lastPoints[2]),
                a = v.
            default.fromPoints(this._lastPoints, n);
                return this._lastPoints.shift(),
                a
            }
            return null
        },
        _calculateCurveWidths: function(t, n) {
            var a = this.props.velocityFilterWeight,
            r = a * n.velocityFrom(t) + (1 - a) * this._lastVelocity,
            i = this._strokeWidth(r),
            o = {
                end: i,
                start: this._lastWidth
            };
            return this._lastVelocity = r,
            this._lastWidth = i,
            o
        },
        _strokeWidth: function(t) {
            var n = this.props,
            a = n.minWidth,
            r = n.maxWidth;
            return Math.max(r / (t + 1), a)
        },
        _drawCurveSegment: function(t, n, a) {
            var r = this._ctx;
            r.moveTo(t, n),
            r.arc(t, n, a, 0, 2 * Math.PI, !1),
            this._isEmpty = !1
        },
        _drawCurve: function(t) {
            var n = t.color,
            a = t.curve,
            r = this._ctx,
            i = a.endWidth - a.startWidth,
            o = 2 * Math.floor(a.length());
            r.beginPath(),
            r.fillStyle = n;
            for (var s = 0; s < o; s += 1) {
                var l = s / o,
                u = l * l,
                c = u * l,
                d = 1 - l,
                f = d * d,
                m = f * d,
                p = m * a.startPoint.x;
                p += 3 * f * l * a.control1.x,
                p += 3 * d * u * a.control2.x,
                p += c * a.endPoint.x;
                var h = m * a.startPoint.y;
                h += 3 * f * l * a.control1.y,
                h += 3 * d * u * a.control2.y,
                h += c * a.endPoint.y;
                var g = Math.min(a.startWidth + c * i, this.props.maxWidth);
                this._drawCurveSegment(p, h, g)
            }
            r.closePath(),
            r.fill()
        },
        _drawDot: function(t) {
            var n = t.color,
            a = t.point,
            r = this._ctx,
            i = this.dotSize;
            r.beginPath(),
            this._drawCurveSegment(a.x, a.y, i),
            r.closePath(),
            r.fillStyle = n,
            r.fill()
        },
        _toDataURL: function(t) {
            return this.sign.toDataURL("image/png", t)
        },
        getData: function() {
            return {
                isEmpty: this._isEmpty,
                dataURL: this._toDataURL(),
                data: this._data
            }
        },
        clear: function() {
            var t = this._ctx,
            n = this.sign;
            t.fillStyle = this.props.backgroundColor,
            t.clearRect(0, 0, n.width, n.height),
            t.fillRect(0, 0, n.width, n.height),
            this._data = [],
            this._reset(),
            this._isEmpty = !0
        },
        _reset: function() {
            var t = this.props,
            n = t.minWidth,
            a = t.maxWidth,
            r = t.penColor;
            this._lastPoints = [],
            this._lastVelocity = 0,
            this._lastWidth = (n + a) / 2,
            this._ctx.fillStyle = r
        },
        handleMouseDown: function(e) {
            e.button < 2 && (this._mouseDown = !0, this.handleStrokeStart(e))
        },
        handleMouseMove: function(e) {
            this._mouseDown && (e.persist(), e.preventDefault(), e.stopPropagation(), this.handleStrokeMoveUpdate(e))
        },
        handleMouseEnd: function(e) {
            e.button < 2 && this._mouseDown && (this._mouseDown = !1, this.handleStrokeEnd(e))
        },
        handleTouchStart: function(e) {
            if (e.preventDefault(), 1 === e.targetTouches.length) {
                this.stopMove = !0;
                var t = e.changedTouches[0];
                this.handleStrokeStart(t)
            }
        },
        handleTouchMove: function(e) {
            e.persist(),
            e.preventDefault(),
            e.stopPropagation();
            var t = e.targetTouches[0];
            this.handleStrokeMoveUpdate(t)
        },
        handleTouchEnd: function(e) {
            var t = e.target === this.sign;
            if (t) {
                this.stopMove = !1,
                e.preventDefault();
                var n = e.changedTouches[0];
                this.handleStrokeEnd(n)
            }
        },
        refSign: function(t) {
            this.sign = t
        },
        render: function() {
            var t = this.props,
            n = (t.onChange, t.className),
            a = t.width,
            r = t.height,
            o = (t.rotation, t.style),
            l = i(t, ["onChange", "className", "width", "height", "rotation", "style"]),
            c = {
                onMouseDown: this.handleMouseDown,
                onMouseMove: this.handleMouseMove,
                onTouchMove: this.handleTouchMove,
                onTouchEnd: this.handleTouchEnd
            };
            return d.
        default.createElement("canvas", s({
                className: (0, u.
            default)("mg-sign", n),
                ref: this.refSign,
                width: a ? a * this.ratio: null,
                height: r ? r * this.ratio: null,
                style: s({},
                o, {
                    touchAction: "none"
                })
            },
            l, c))
        }
    });
    n.
default = b
},
function(t, n) {
    "use strict";
    function a(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    i = function() {
        function t(n, r, i) {
            a(this, t),
            this.time = null,
            this.x = n,
            this.y = r,
            this.time = i || Date.now()
        }
        return r(t, [{
            key: "distanceTo",
            value: function(t) {
                return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
            }
        },
        {
            key: "equals",
            value: function(t) {
                return this.x === t.x && this.y === t.y && this.time === t.time
            }
        },
        {
            key: "velocityFrom",
            value: function(t) {
                return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0
            }
        }]),
        t
    } ();
    n.
default = i,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    s = a(109),
    l = r(s),
    u = function() {
        function t(n, a, r, o, s, l) {
            i(this, t),
            this.startPoint = n,
            this.control1 = r,
            this.control2 = a,
            this.endPoint = o,
            this.startWidth = s,
            this.endWidth = l
        }
        return o(t, null, [{
            key: "fromPoints",
            value: function(n) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    start: null,
                    end: null
                },
                r = this.calculateControlPoints(n[0], n[1], n[2]).c2,
                i = this.calculateControlPoints(n[1], n[2], n[3]).c1;
                return new t(n[1], r, i, n[2], a.start, a.end)
            }
        },
        {
            key: "calculateControlPoints",
            value: function(t, n, a) {
                var r = t.x - n.x,
                i = t.y - n.y,
                o = n.x - a.x,
                s = n.y - a.y,
                u = {
                    x: (t.x + n.x) / 2,
                    y: (t.y + n.y) / 2
                },
                c = {
                    x: (n.x + a.x) / 2,
                    y: (n.y + a.y) / 2
                },
                d = Math.sqrt(r * r + i * i),
                f = Math.sqrt(o * o + s * s),
                m = u.x - c.x,
                p = u.y - c.y,
                h = f / (d + f),
                g = {
                    x: c.x + m * h,
                    y: c.y + p * h
                },
                _ = n.x - g.x,
                v = n.y - g.y;
                return {
                    c1: new l.
                default(u.x + _, u.y + v),
                    c2: new l.
                default(c.x + _, c.y + v)
                }
            }
        }]),
        o(t, [{
            key: "length",
            value: function t() {
                for (var n = 10,
                t = 0,
                a = 0,
                r = 0,
                i = 0; i <= n; i += 1) {
                    var o = i / n,
                    s = this.point(o, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x),
                    l = this.point(o, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
                    if (i > 0) {
                        var u = s - +a,
                        c = l - +r;
                        t += Math.sqrt(u * u + c * c)
                    }
                    a = s,
                    r = l
                }
                return t
            }
        },
        {
            key: "point",
            value: function(t, n, a, r, i) {
                return n * (1 - t) * (1 - t) * (1 - t) + 3 * a * (1 - t) * (1 - t) * t + 3 * r * (1 - t) * t * t + i * t * t * t
            }
        }]),
        t
    } ();
    n.
default = u,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return Array.isArray(t) ? t: Array.from(t)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.cki = void 0;
    var o = a(6),
    s = r(o),
    l = a(95),
    u = a(8),
    c = a(38),
    d = a(17),
    f = a(55),
    m = function(t, n) {
        var a = function(t) {
            var n = [].concat(t),
            a = i(n),
            r = a[0],
            o = a.slice(1);
            return o && !s.
        default.isEmpty(o) && (o = s.
        default.map(o,
            function(t) {
                return (0, u.leftPad)(t, "0", 3)
            })),
            +(r + "." + o.join(""))
        },
        r = s.
    default.filter(t.layout,
        function(t) {
            return null != n[(0, l._getId)(t)]
        }).sort(function(t, r) {
            return a(n[(0, l._getId)(t)]) - a(n[(0, l._getId)(r)])
        }),
        o = [],
        c = t.extensions.checkInInfo;
        if (c && c.ckiOpen && c.ckiOpenComponent && c.ckiOpenComponent.length > 0) {
            var d = c.ckiOpenComponent;
            s.
        default.forEach(r,
            function(n) {
                n.id && "paging" !== t.components[n.id].type && d.indexOf(n.id) > -1 && n.id !== c.ckiComponent && o.push(n)
            })
        }
        return [o]
    },
    p = function(t) {
        var n = t.config,
        a = t.form,
        r = +new Date,
        i = {};
        s.
    default.forEach(n.getCache(d.CKI_ONCE_LIST) || {},
        function(t, n) { + new Date(t) > r && (i[n] = t)
        }),
        n.setCache(d.CKI_ONCE_LIST, i);
        var o = a.extensions.checkInInfo;
        return !! (o && o.ckiOnlyOnce && i[a.token])
    },
    h = null;
    n.cki = function(t) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments[1],
            r = t(),
            i = {},
            o = !1,
            g = function() {
                var t = (0, l._getCurrentOrder)(r, n),
                a = m(r, t);
                i.form = s.
            default.assign(i.form || {},
                {
                    position: t,
                    pages: a
                })
            };
            if (!r.extensions.checkIn || !r.extensions.checkInInfo) return n;
            var _ = (r.extensions.checkInInfo || {}).ckiComponent;
            switch (a.type) {
            case c._BLUR_MULTI_INPUT:
                +a.id === +_ && h && h !== n.data[a.id].join(";") && (h = null, i.form = s.
            default.assign(i.form || {},
                {
                    formStatus: 0
                }));
                break;
            case c._BLUR_INPUT:
                +a.id === +_ && h && h !== n.data[a.id] && (h = null, i.form = s.
            default.assign(i.form || {},
                {
                    formStatus: 0
                }));
                break;
            case c._CHECK_IN:
                h = n.data[_],
                s.
            default.isArray(h) && (h = h.join(";"));
                break;
            case c._CHECK_IN_SUCCEED:
                i.form = s.
            default.assign(i.form || {},
                {
                    pending: !1,
                    submitFin: !0,
                    formStatus: 0
                }),
                a.data && a.data.hello && (i.form.extData = {
                    hello: a.data.hello
                });
                var v = r.extensions.checkInInfo;
                if (v && v.ckiOnlyOnce) {
                    var b = s.
                default.assign({},
                    (0, d.getConfig)().getCache(d.CKI_ONCE_LIST) || {}),
                    y = new Date;
                    y.setHours(0, 0, 0, 0);
                    var E = new Date(y);
                    E.setDate(E.getDate() + u._COOKIE_STATIC.SUBMIT_ONCE_DAY),
                    E.setHours(23, 59, 59, 999),
                    b[r.token] = +E,
                    (0, d.getConfig)().setCache(d.CKI_ONCE_LIST, b)
                }
                break;
            case c._CHECK_IN_FAILED:
                i.form = s.
            default.assign(i.form || {},
                {
                    pending: !1,
                    submitFin: !1,
                    formStatus: a.data.r
                });
                break;
            case c._CHECK_CKI_ONCE:
                if ((0, d.getMode)() === f.MODE_FILLING && 0 === r.JHR) {
                    var C = p({
                        config: (0, d.getConfig)(),
                        form: r
                    });
                    C && (r.setJHR( - 827), i.form = s.
                default.assign(i.form || {},
                    {
                        formStatus: r.JHR
                    }))
                }
                break;
            default:
                g()
            }
            if (s.
        default.isEmpty(i)) return n;
            var T = s.
        default.assign({},
            n);
            return s.
        default.forEach(i,
            function(t, n) {
                T[n] = s.
            default.assign({},
                T[n], t)
            }),
            o && i.validated && (T.validated = i.validated),
            T
        }
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.validation = void 0;
    var i = a(6),
    o = r(i),
    s = a(113),
    l = a(38),
    u = a(55),
    c = function(t) {
        var n = {};
        return o.
    default.forEach(t,
        function(t, a) {
            null != t && (n[a] = t)
        }),
        n
    },
    d = function(t) {
        var n = o.
    default.filter(o.
    default.uniq(t));
        return o.
    default.isEmpty(n) ? null: n
    },
    f = function(t, n) {
        var a = -1;
        return o.
    default.forEach(t,
        function(t, r) {
            if (o.
        default.isPlainObject(t) && t.type === n || t === n) return a = r,
            !1
        }),
        a
    },
    m = function() {
        return ! 1
    },
    p = function(t, n, a) {
        var r = [].concat(t),
        i = !1,
        s = f(t, n);
        if (s > -1) {
            var l = a(this.cp, this.value, {
                data: this.data
            });
            l ? (o.
        default.isString(l) && t[s] !== l || o.
        default.isPlainObject(l) && JSON.stringify((t[s] || {}).info) !== JSON.stringify(l.info)) && (r.splice(s, 1, l), i = !0) : (r.splice(s, 1), i = !0)
        }
        return i ? r: t
    },
    h = function(t, n) {
        var a = {};
        return o.
    default.forEach(t,
        function(t) {
            var r = [],
            i = n[t.id],
            l = (0, u.getComponentType)(t);
            switch (l) {
            case "input":
            case "email":
            case "tel":
            case "fax":
            case "website":
            case "wechat":
            case "qq":
            case "skype":
            case "whatsApp":
            case "messenger":
            case "viber":
            case "line":
            case "telegram":
            case "weibo":
            case "linkedIn":
            case "twitter":
            case "facebook":
            case "instagram":
            case "mkGooglePlus":
            case "IM":
            case "SNS":
            case "ctcf_1":
                r = r.concat((0, s.contentLength)(t, i), (0, s.required)(t, i), (0, s.contentRegexp)(t, i));
                break;
            case "name":
                r = r.concat((0, s.nameLegalLength)(t, i), (0, s.required)(t, i));
                break;
            case "mobile":
                var c = i;
                t.isSendMsgAuth && o.
            default.isObject(c) && (c = c.mobile),
                r = r.concat((0, s.contentLength)(t, c), (0, s.required)(t, c), (0, s.contentRegexp)(t, c), (0, s.base_needAuthMobile)(t, i), (0, s.base_authedMobileResConfirm)(t, i));
                break;
            case "number":
            case "currency":
            case "ctcf_3":
                r = r.concat((0, s.numberLegal)(t, i), (0, s.numberRange)(t, i), (0, s.required)(t, i));
                break;
            case "city":
            case "location":
            case "address":
                r = r.concat((0, s.required)(t, i));
                break;
            case "checkbox":
            case "radio":
            case "picCheckbox":
            case "picRadio":
            case "dropDown":
            case "gender":
            case "title":
            case "ctcf_6":
            case "ctcf_7":
                r = r.concat((0, s.choiceLimit)(t, i), (0, s.required)(t, i), (0, s.choiceInputRequired)(t, i));
                break;
            case "company":
            case "department":
            case "position":
                [2, 3].indexOf( + t.searchComponentType) > -1 && (r = r.concat((0, s.choiceLimit)(t, i), (0, s.choiceInputRequired)(t, i))),
                r = r.concat((0, s.required)(t, i));
                break;
            case "picAttachment":
            case "attachment":
            case "avatar":
                r = r.concat((0, s.attachmentLegal)(t, i), (0, s.attachmentType)(t, i), (0, s.attachmentSize)(t, i), (0, s.attachmentImageSize)(t, i), (0, s.required)(t, i), (0, s.base_attachmentNumber)(t, i));
                break;
            case "dateTime_both":
            case "dateTime_date":
            case "dateTime_time":
            case "birthDate":
            case "ctcf_9":
                r = r.concat((0, s.dateLegal)(t, i), (0, s.required)(t, i));
                break;
            case "multiLevel":
            case "ctcf_8":
                r = r.concat((0, s.levelFillingEnd)(t, i), (0, s.required)(t, i));
                break;
            case "ctcf_5":
                r = r.concat((0, s.numberLegal)(t, i[1]), (0, s.numberRange)(t, i[1]), (0, s.required)(t, i));
                break;
            case "ctcf_11":
                r = r.concat((0, s.required)(t, i), (0, s.contentCNID)(t, i ? i.value: null), (0, s.contentCNIDLocation)(t, i));
                break;
            case "ctcf_12":
                r = r.concat((0, s.required)(t, i), (0, s.contentCNVehicle)(t, i));
                break;
            default:
                r = r.concat((0, s.required)(t, i))
            }
            r = d(r),
            a[t.id] = r
        }),
        a
    };
    n.validation = function(t) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = arguments[1],
            r = t(),
            i = n.data,
            f = n.validated || {},
            g = {},
            _ = r.components[a.id],
            v = a.id ? i[a.id] : null;
            switch (a.type) {
            case l._BLUR_NUMBER:
                var b = [];
                f[a.id] && (b = p.call({
                    cp: _,
                    value: v
                },
                b, "required", s.required)),
                b = b.concat((0, s.numberLegal)(_, v), (0, s.numberRange)(_, v)),
                g[a.id] = d(b);
                break;
            case l._BLUR_INPUT:
            case l._BLUR_GROUP_INPUT:
            case l._BLUR_MULTI_INPUT:
            case l._REMOVE_MULTI_INPUT_ITEM:
            case l._BLUR_DATE_TIME_VALUE:
                var y = [];
                f[a.id] && (y = p.call({
                    cp: _,
                    value: v
                },
                y, "required", s.required), y = p.call({
                    cp: _,
                    value: v
                },
                y, "duplicateData", s.verificationClean)),
                y = y.concat((0, s.contentLength)(_, v), (0, s.contentRegexp)(_, v)),
                g[a.id] = d(y);
                break;
            case l._CHECK_INDEPENDENT_DATA_FAILED:
                var E = f[a.id];
                E = (E || []).concat("duplicateData"),
                g[a.id] = d(E);
                break;
            case l._SET_VALUE:
            case l._SET_GROUP_VALUE:
            case l._SET_MULTI_INPUT_VALUE:
            case l._SET_DATE_TIME_VALUE:
                if (f[a.id]) {
                    var C = f[a.id];
                    switch (C = p.call({
                        cp: _,
                        value: v
                    },
                    C, "required", s.required), C = p.call({
                        cp: _,
                        value: v
                    },
                    C, "contentRegex", s.contentRegexp), C = p.call({
                        cp: _,
                        value: v
                    },
                    C, "duplicateData", s.verificationClean), _.type) {
                    case "input":
                        C = p.call({
                            cp: _,
                            value: v
                        },
                        C, "tips", s.contentLength);
                        break;
                    case "number":
                        C = p.call({
                            cp: _,
                            value: v
                        },
                        C, "tips", s.numberRange)
                    }
                    f[a.id] !== C && (g[a.id] = d(C))
                }
                break;
            case l._SET_MULTILEVEL_VALUE:
                if (f[a.id]) {
                    var T = f[a.id];
                    T = p.call({
                        cp: _,
                        value: v
                    },
                    T, "required", s.required),
                    f[a.id] !== T && (g[a.id] = d(T))
                }
                break;
            case l._SET_RANK:
            case l._SET_NEXT_RANK:
            case l._REMOVE_RANK:
            case l._SET_LOCATION_VALUE:
            case l._SET_TABULAR_VALUE:
                if (f[a.id]) {
                    var S = f[a.id];
                    S = p.call({
                        cp: _,
                        value: v
                    },
                    S, "required", s.required),
                    f[a.id] !== S && (g[a.id] = d(S))
                }
                break;
            case l._BLUR_AUTH_MOBILE:
                var M = [],
                I = v ? v.mobile: null;
                f[a.id] && (M = p.call({
                    cp: _,
                    value: I
                },
                M, "required", s.required), M = p.call({
                    cp: _,
                    value: I
                },
                M, "requestFailed", s.verificationClean), M = p.call({
                    cp: _,
                    value: I
                },
                M, "requestNetFailed", s.verificationClean), M = p.call({
                    cp: _,
                    value: I
                },
                M, "contentRegex", s.verificationClean), M = p.call({
                    cp: _,
                    value: I
                },
                M, "verificationLimit", s.verificationClean), M = p.call({
                    cp: _,
                    value: I
                },
                M, "mobileAuthRegex", s.verificationClean), M = p.call({
                    cp: _,
                    value: I
                },
                M, "mobileRequired", s.verificationClean)),
                M = M.concat((0, s.contentLength)(_, I), (0, s.contentRegexp)(_, I)),
                g[a.id] = d(M);
                break;
            case l._SET_AUTH_MOBILE_VALUE:
                if (f[a.id]) {
                    var N = f[a.id],
                    A = v ? v.mobile: null;
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "required", s.required),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "contentRegex", s.contentRegexp),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "requestFailed", s.verificationClean),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "requestNetFailed", s.verificationClean),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "verificationLimit", s.verificationClean),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "mobileAuthRegex", s.verificationClean),
                    N = p.call({
                        cp: _,
                        value: A
                    },
                    N, "mobileRequired", s.verificationClean),
                    f[a.id] !== N && (g[a.id] = d(N))
                }
                break;
            case l._CLEAN_REQUIRE_AUTH_MSG_FAILED_ERR:
                if (f[a.id]) {
                    var k = f[a.id],
                    x = v ? v.mobile: null;
                    k = p.call({
                        cp: _,
                        value: x
                    },
                    k, "requestFailed", s.verificationClean),
                    k = p.call({
                        cp: _,
                        value: x
                    },
                    k, "requestNetFailed", s.verificationClean),
                    k = p.call({
                        cp: _,
                        value: x
                    },
                    k, "verificationLimit", s.verificationClean),
                    k = p.call({
                        cp: _,
                        value: x
                    },
                    k, "contentRegex", s.verificationClean),
                    k = p.call({
                        cp: _,
                        value: x
                    },
                    k, "mobileAuthRegex", s.verificationClean),
                    f[a.id] !== k && (g[a.id] = d(k))
                }
                break;
            case l._REQUIRE_AUTH_MSG:
                var D = v ? v.mobile: null;
                g[a.id] = d([].concat((0, s.verificationMobile)(_, v), (0, s.contentLength)(_, D), (0, s.contentRegexp)(_, D)));
                break;
            case l._REQUIRE_AUTH_MSG_FAILED:
                var O = {
                    "-57": "requestFailed",
                    "-841": "verificationLimit",
                    "-910": "contentRegex",
                    "-911": "mobileAuthRegex"
                };
                g[a.id] = d((f[a.id] || []).concat(O[a.data.r] || "requestNetFailed"));
                break;
            case l._CHECK_AUTH_CODE_SUCCEED:
                if (f[a.id]) {
                    var P = f[a.id],
                    L = v ? v.mobile: null;
                    P = p.call({
                        cp: _,
                        value: L,
                        data: a.data
                    },
                    P, "mobileAuthCodeError", s.verificationMobileAuthCodeCheck),
                    f[a.id] !== P && (g[a.id] = d(P))
                }
                break;
            case l._CHECK_AUTH_CODE_FAILED:
                g[a.id] = d((f[a.id] || []).concat((0, s.verificationMobileAuthCodeCheck)(_, v ? v.mobile: null, {
                    data: a.data
                })));
                break;
            case l._SELECT_OPT:
                if (f[a.id]) {
                    var w = f[a.id];
                    w = p.call({
                        cp: _,
                        value: v
                    },
                    w, "required", s.required),
                    w = p.call({
                        cp: _,
                        value: v
                    },
                    w, "tips", s.choiceLimit),
                    w = p.call({
                        cp: _,
                        value: v
                    },
                    w, "inputRequired", s.choiceInputRequired),
                    w = p.call({
                        cp: _,
                        value: v
                    },
                    w, "optionQuota", s.verificationClean),
                    f[a.id] !== w && (g[a.id] = d(w))
                }
                break;
            case l._SET_OPT_EXT_VALUE:
                if (f[a.id]) {
                    var R = f[a.id];
                    R = p.call({
                        cp: _,
                        value: v
                    },
                    R, "inputRequired", s.choiceInputRequired),
                    f[a.id] !== R && (g[a.id] = d(R))
                }
                break;
            case l._CHECK_OPTION_QUOTA_FAILED:
                var F = f[a.id] || [];
                g[a.id] = d(F.concat({
                    type: "optionQuota",
                    info: [a.optId]
                }));
                break;
            case l._SET_COMMODITY_VALUE:
                if (f[a.id]) {
                    var U = f[a.id];
                    U = p.call({
                        cp: _,
                        value: v
                    },
                    U, "commodityQuota", s.verificationClean),
                    f[a.id] !== U && (g[a.id] = d(U))
                }
                break;
            case l._CHECK_COMMODITY_LIMIT:
                a.data && (g = o.
            default.assign(g, a.data));
                break;
            case l._CHECK_COMMODITY_QUOTA_FAILED:
                var B = f[a.id] || [];
                g[a.id] = d(B.concat({
                    type: "commodityQuota",
                    info: [a.commodityId]
                }));
                break;
            case l._SET_FILE_DONE:
                var H = [];
                f[a.id] && (H = p.call({
                    cp: _,
                    value: v
                },
                H, "required", s.required), H = p.call({
                    cp: _,
                    value: v
                },
                H, "attachmentLimitNumber", s.base_attachmentNumber)),
                H = H.concat((0, s.attachmentLegal)(_, v), (0, s.attachmentType)(_, v), (0, s.attachmentSize)(_, v), (0, s.attachmentImageSize)(_, v)),
                g[a.id] = d(H);
                break;
            case l._REMOVE_FILE:
                if (f[a.id]) {
                    var j = f[a.id];
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "required", s.required),
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "attachmentIllegal", s.attachmentLegal),
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "attachmentSize", s.attachmentSize),
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "attachmentType", s.attachmentType),
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "attachmentResolution", s.attachmentImageSize),
                    j = p.call({
                        cp: _,
                        value: v
                    },
                    j, "attachmentLimitNumber", s.base_attachmentNumber),
                    f[a.id] !== j && (g[a.id] = d(j))
                }
                break;
            case l._SET_CTCF_CNID_VALUE:
                if (f[a.id]) {
                    var G = f[a.id];
                    G = p.call({
                        cp: _,
                        value: v
                    },
                    G, "required", m),
                    G = p.call({
                        cp: _,
                        value: v ? v.value: null
                    },
                    G, "contentRegex", m),
                    G = p.call({
                        cp: _,
                        value: v
                    },
                    G, "cnIdLocationRange", m),
                    f[a.id] !== G && (g[a.id] = d(G))
                }
                break;
            case l._BLUR_CTCF_CNID_VALUE:
                var W = f[a.id];
                W = p.call({
                    cp: _,
                    value: v
                },
                W, "cnIdLocationRange", m),
                g[a.id] = d((W || []).concat((0, s.required)(_, v), (0, s.contentCNID)(_, v ? v.value: null)));
                break;
            case l._CHECK_CNID_LOCATION_SUCCEED:
            case l._CHECK_CNID_LOCATION_FAILED:
                var V = f[a.id];
                V = p.call({
                    cp: _,
                    value: v
                },
                V, "cnIdLocationRange", m),
                g[a.id] = d((0, s.required)(_, v), (0, s.contentCNID)(_, v ? v.value: null));
                break;
            case l._SET_CTCF_CNVEHICLE_VALUE:
                if (f[a.id]) {
                    var z = f[a.id];
                    z = p.call({
                        cp: _,
                        value: v
                    },
                    z, "required", s.required),
                    z = p.call({
                        cp: _,
                        value: v
                    },
                    z, "contentRegex", s.contentCNVehicle),
                    f[a.id] !== z && (g[a.id] = d(z))
                }
                break;
            case l._BLUR_CTCF_CNVEHICLE_VALUE:
                var K = [];
                f[a.id] && (K = p.call({
                    cp: _,
                    value: v
                },
                K, "required", s.required)),
                K = K.concat((0, s.contentCNVehicle)(_, v)),
                g[a.id] = d(K);
                break;
            case l._SET_CTCF_CURRENCY:
                break;
            case l._BLUR_CTCF_CURRENCY:
                var q = [],
                Y = v ? v[1] : null;
                f[a.id] && (q = p.call({
                    cp: _,
                    value: Y
                },
                q, "required", s.required)),
                q = q.concat((0, s.numberLegal)(_, Y), (0, s.numberRange)(_, Y)),
                g[a.id] = d(q);
                break;
            case l._START_GOTO_PAGE:
                var Q = n.form.pages[n.form.page],
                J = [];
                o.
            default.forEach(Q,
                function(t) {
                    u.L_SQUEEZEBOX === t.type ? o.
                default.forEach(t.children,
                    function(t) {
                        t && J.push(r.components[t])
                    }) : J.push(r.components[t.id])
                }),
                g = o.
            default.assign({},
                h(J, i));
                break;
            case l._START_SUBMIT:
                var X = o.
            default.reduce(n.form.pages,
                function(t, n) {
                    return t.concat(n)
                },
                []),
                Z = [];
                o.
            default.forEach(X,
                function(t) {
                    u.L_SQUEEZEBOX === t.type ? o.
                default.forEach(t.children,
                    function(t) {
                        t && Z.push(r.components[t])
                    }) : Z.push(r.components[t.id])
                }),
                g = o.
            default.assign({},
                h(Z, i));
                break;
            case l._CHECK_IN:
                if (0 === n.form.formStatus) {
                    var ee = o.
                default.assign({},
                    r.components[r.extensions.checkInInfo.ckiComponent], {
                        isRequired: !0
                    });
                    g = o.
                default.assign({},
                    h([ee], i))
                } else if (n.form.formStatus === -80012) {
                    o.
                default.reduce(n.form.pages,
                    function(t, n) {
                        return t.concat(n)
                    },
                    [])
                }
            }
            if (o.
        default.isEmpty(g) || [u.MODE_IRO, u.MODE_PREVIEW].indexOf(a.__MODE__) > -1) return n.validated ? n: o.
        default.assign({},
            n, {
                validated: {}
            });
            var te = c(o.
        default.assign({},
            f, g));
            return o.
        default.assign({},
            n, {
                validated: te
            })
        }
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.levelFillingEnd = n.dateLegal = n.base_attachmentNumber = n.attachmentImageSize = n.attachmentType = n.attachmentSize = n.attachmentLegal = n.numberLegal = n.numberRange = n.choiceInputRequired = n.choiceLimit = n.nameLegalLength = n.contentLength = n.base_authedMobileResConfirm = n.base_needAuthMobile = n.verificationMobileAuthCodeCheck = n.verificationMobile = n.contentCNVehicle = n.contentCNIDLocation = n.contentCNID = n.contentRegexp = n.required = n.verificationClean = void 0;
    var i = a(6),
    o = r(i),
    s = a(11),
    l = r(s),
    u = a(61),
    c = r(u),
    d = a(97),
    f = r(d),
    m = a(114),
    p = a(55),
    h = a(8),
    g = a(96),
    _ = (n.verificationClean = function() {
        return null
    },
    n.required = function(t, n) {
        var a = "required";
        if (n) {
            var r = (0, p.getComponentType)(t);
            switch (r) {
            case "name":
                if (!t.isRequired) return null;
                var i = !1;
                if (o.
            default.forEach(n,
                function(t) {
                    if (o.
                default.trim(t)) return i = !0,
                    !1
                }), i) return null;
                break;
            case "SNS":
            case "IM":
                if (!t.isRequired) return null;
                var s = !1;
                if (o.
            default.forEach(n,
                function(t) {
                    if (null != t.type && null != t.info && o.
                default.trim("" + t.info)) return s = !0,
                    !1
                }), s) return null;
                break;
            case "tabular":
                if (!t.isRequired) return null;
                var l = !0;
                if (o.
            default.forEach(t.questions,
                function(t) {
                    var a = n[t.id];
                    if (!a || o.
                default.isArray(a) && o.
                default.isEmpty(a)) return l = !1,
                    !1
                }), l) return null;
                break;
            case "commodity":
                if (!t.isRequired) return null;
                var u = 0;
                if (o.
            default.forEach(n,
                function(t) {
                    u += +t
                }), u > 0) return null;
                break;
            case "attachment":
            case "picAttachment":
            case "avatar":
                if (!t.isRequired) return null;
                if (o.
            default.isArray(n) && !o.
            default.isEmpty(n)) {
                    var c = !0;
                    if (o.
                default.forEach(n,
                    function(t) {
                        if (t.error) return c = !1,
                        !1
                    }), c) return null
                }
                break;
            case "multiLevel":
            case "ctcf_8":
                var d = n || null;
                if (d && d.current && d.current[0]) {
                    if (d.id) {
                        var f = o.
                    default.find(t.options, {
                            sId: +d.id
                        });
                        return f && (2 !== f.type && 3 !== f.type || d.value) ? null: a
                    }
                    return a
                }
                if ((!d || !d.current[0] || !d.id) && t.isRequired) return a;
                break;
            case "rank":
                var m = [];
                o.
            default.forEach(t.options,
                function(t) {
                    m.indexOf(t.sId) === -1 && m.push(t.sId)
                });
                var h = Math.min( + t.trueDigits, m.length);
                if (t.isRequired && o.
            default.isEmpty(n || [])) return a;
                var g = o.
            default.filter(n).length;
                return g > 0 && g !== h ? a: null;
            case "city":
            case "location":
                if (!t.isRequired) return null;
                if (n && n.struct && !o.
            default.isEmpty(n.struct) && o.
            default.last(n.struct)) return null;
                break;
            case "address":
                if (!t.isRequired) return null;
                if (n && (n.struct && !o.
            default.isEmpty(n.struct) && o.
            default.last(n.struct) || n.content || n.zipCode)) return null;
                break;
            case "ctcf_11":
                if (!t.isRequired) return null;
                if (n && n.value) return null;
                break;
            case "ctcf_12":
                if (!t.isRequired) return null;
                if (n && n.vpVal) return null;
                break;
            case "ctcf_5":
                if (!t.isRequired) return null;
                if (n && n[1]) return null;
                break;
            default:
                if (!o.
            default.isArray(n) || "" !== n.join("")) return null
            }
        }
        return t.isRequired ? a: null
    },
    n.contentRegexp = function(t, n) {
        var a = "contentRegex";
        if (!t.isUseRegEx && !t.isValidate) return null;
        var r = o.
    default.isArray(n);
        if (r && n.join("") || !r && n) {
            var i = t.regExType || 2;
            if (t.isValidate) switch (t.type) {
            case "email":
                i = 2;
                break;
            case "website":
                i = 3;
                break;
            case "qq":
                i = 4;
                break;
            case "mobile":
                if (i = 5, t.acceptArea && !o.
            default.isEmpty(t.acceptArea)) {
                    var s = {
                        1 : "",
                        2 : "tw",
                        3 : "hk"
                    };
                    i = o.
                default.map(t.acceptArea,
                    function(t) {
                        return s[t] + "5"
                    })
                }
            }
            var u = [];
            o.
        default.forEach([].concat(n),
            function(t) {
                if (t) {
                    var n = t.split(/[;；]/g);
                    n.length > 1 && (n = o.
                default.filter(n,
                    function(t) {
                        return o.
                    default.trim(t)
                    })),
                    u = u.concat(n)
                }
            });
            var c = [].concat(i),
            d = !1;
            if (o.
        default.forEach(u,
            function(n) {
                if (!n) return ! 0;
                var a = !1,
                r = o.
            default.trim(n);
                o.
            default.forEach(c,
                function(i) {
                    switch ("" + i) {
                    case "3":
                        a = l.
                    default.isUrl(r);
                        break;
                    case "4":
                        a = l.
                    default.isQQ(r);
                        break;
                    case "5":
                        a = l.
                    default.isMobileCN(r);
                        break;
                    case "hk5":
                        a = l.
                    default.isMobileHK(r);
                        break;
                    case "tw5":
                        a = l.
                    default.isMobileTW(r);
                        break;
                    case "6":
                        a = l.
                    default.isCnIdCard(r);
                        break;
                    case "7":
                        a = l.
                    default.isIP(r);
                        break;
                    case "8":
                        a = l.
                    default.isNumber(r);
                        break;
                    case "-1":
                        a = !t.regEx || l.
                    default.strRegCheck(o.
                    default.trim("" + t.regEx), n);
                        break;
                    case "2":
                    default:
                        a = l.
                    default.isEmail(r)
                    }
                    if (a) return ! 1
                }),
                a || (d = [].concat(d || [], n))
            }), d !== !1 || 0 === u.length) return r ? {
                type: a,
                info: {
                    errorContent: d
                }
            }: a
        }
        return null
    },
    n.contentCNID = function(t, n) {
        var a = o.
    default.trim(n || ""),
        r = "contentRegex";
        if (a) {
            var i = l.
        default.isCnIdCard(n);
            if (!i) return r
        } else if (!a && n) return r;
        return null
    },
    n.contentCNIDLocation = function(t, n) {
        var a = "cnIdLocationRange";
        if (t.cfIsLimitLocation && t.cfLimitLocation && !o.
    default.isEmpty(t.cfLimitLocation) && n && n.value) {
            var r = [],
            i = n.location;
            r = o.
        default.filter(o.
        default.intersection(t.cfLimitLocation, i));
            var s = r.length > 0;
            if (!s) return a
        }
        return null
    },
    n.contentCNVehicle = function(t, n) {
        var a = o.
    default.trim(o.
    default.isPlainObject(n) ? n.vpVal: null),
        r = "contentRegex",
        i = !1,
        s = void 0;
        return s = 2 === t.componentType ? (0, h.getVehicleCNStr)({
            vpVal: a
        }) : (0, h.getVehicleCNStr)(n),
        (0, h.isVehicleCN)(s) && (((0, h.isNewEnergyCN)(s) || (0, h.isVehicleCNWJ)(s)) && 8 === s.length ? i = !0 : 7 === s.length && (i = !0)),
        !a && n && n.vpVal || a && !i ? r: null
    },
    n.verificationMobile = function(t, n) {
        return n && n.mobile ? l.
    default.isMobileCN(n.mobile) ? null: "mobileAuthRegex": "mobileRequired"
    },
    n.verificationMobileAuthCodeCheck = function(t, n, a) {
        var r = a.data;
        return 0 === r.r ? null: "mobileAuthCodeError"
    },
    n.base_needAuthMobile = function(t, n) {
        var a = "mobileAuthCodeRequired";
        if (n && o.
    default.isPlainObject(n) && n.mobile) {
            if (!n.verificationToken) return a;
            if (n.verificationMobileToken && !n.verificationCode) return a
        }
        return null
    },
    n.base_authedMobileResConfirm = function(t, n) {
        return n && o.
    default.isPlainObject(n) && n.mobile && n.checked && n.error ? "mobileAuthCodeError": null
    },
    n.contentLength = function(t, n) {
        if (n && t.isWordLimit && !o.
    default.isEmpty(n)) {
            var a = n.length,
            r = t.wordLimitFrom,
            i = t.wordLimitTo;
            if (a && (r && r > a || i && i < a)) return "tips"
        }
        return null
    },
    n.nameLegalLength = function(t, n) {
        var a = {
            n: 255,
            np: 63,
            nf: 63,
            nm: 63,
            nl: 63,
            ns: 63,
            nn: 63
        };
        if (n) {
            var r = [];
            if (o.
        default.forEach(n,
            function(t, n) {
                t && ("" + t).length > a[n] && r.push(n)
            }), !o.
        default.isEmpty(r)) return {
                type:
                "length",
                info: r
            }
        }
        return null
    },
    n.choiceLimit = function(t, n) {
        var a = "tips";
        if (n && !o.
    default.isEmpty(n) && ("checkbox" === t.type || "picCheckbox" === t.type || t.isCheckbox) && 1 === t.isLimitChooseNum) {
            var r = t.chooseNumFrom,
            i = t.chooseNumTo;
            if (null != r && "" !== r && n && n.length < +r) return a;
            if (null != i && "" !== i && n && n.length > +i) return a
        }
        return null
    },
    function(t) {
        return o.
    default.isObject(t) ? t: {
            id: t
        }
    }),
    v = (n.choiceInputRequired = function(t, n) {
        var a = [];
        return o.
    default.forEach(n,
        function(n) {
            var r = _(n),
            i = r.id,
            s = r.value; (1 === t.isAddOtherOption && 1 === t.otherOptionIsRequired && i === t.otherId || 1 === t.isAfterInput && 1 === t.afterInputIsRequired) && (s && o.
        default.trim("" + (s || "")) || a.push(i))
        }),
        o.
    default.isEmpty(a) ? null: {
            type: "inputRequired",
            info: a
        }
    },
    n.numberRange = function(t, n) {
        if (t.isNumRange && null != n && "" !== n) {
            var a = c.
        default.localeStringToNumber(n);
            if (o.
        default.isNumber(a) && (o.
        default.isNumber(t.numRangeFrom) && a < t.numRangeFrom || o.
        default.isNumber(t.numRangeTo) && a > t.numRangeTo)) return "tips"
        }
        return null
    },
    n.numberLegal = function(t, n) {
        if (n) {
            var a = c.
        default.localeStringToNumber(n);
            if (isNaN(a)) return "number";
            var r = Math.floor(a) !== a;
            if (!r && (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER)) return "numberSaveRange";
            if (r && 1 !== t.isAcceptDecimals) return "numberDecimals";
            if (a < 0 && 1 !== t.isAcceptNegative) return "numberNegative"
        }
        return null
    },
    n.attachmentLegal = function(t, n) {
        var a = [],
        r = /[\\\/\:\*\?\"\<\>\|\0]/,
        i = /[\?\@\#\$\&\(\)\/\|\;\'\"\’\‘\“\”\<\>\*\\]/;
        return n && (o.
    default.forEach(n,
        function(n) {
            if (n) {
                var o = n.name.split("."),
                s = void 0,
                l = void 0;
                o.length > 1 ? (s = "" + o.slice(0, o.length - 1).join("."), l = o[o.length - 1]) : (s = n.name, l = null),
                (s.match(r) || ("" + (l || "")).match(i) || (1 === t.isLimitFileType || "picAttachment" === t.type) && !l) && a.push(n.name)
            }
        }), !o.
    default.isEmpty(a)) ? {
            type: "attachmentIllegal",
            info: {
                errorContent: a
            }
        }: null
    },
    n.attachmentSize = function(t, n) {
        var a = [];
        if (n) {
            var r = t.isLimitFileSize && +t.fileSize ? +t.fileSize: 500;
            if (r) {
                var i = 1048576 * r;
                o.
            default.forEach(n,
                function(t) {
                    t && t.size && t.size > i && a.push(t.name)
                })
            }
            if (!o.
        default.isEmpty(a)) return {
                type:
                "attachmentSize",
                info: {
                    errorContent: a
                }
            }
        }
        return null
    },
    n.attachmentType = function(t, n) {
        var a = [],
        r = m.ATTACHMENT_IMAGE_SUFFIX_LIST,
        i = m.ATTACHMENT_TYPE_LIST;
        if (n) {
            if (t.isLimitFileType && t.fileTypes && !o.
        default.isEmpty(t.fileTypes)) {
                var s = o.
            default.map(t.fileTypes,
                function(t) {
                    return i[t]
                });
                o.
            default.forEach(n,
                function(t) {
                    if (t.suffix) {
                        var n = !0;
                        o.
                    default.forEach(s,
                        function(a) {
                            if (a.toLowerCase().indexOf((t.suffix || "").toLowerCase()) > -1) return n = !1,
                            !1
                        }),
                        n && a.push(t.name)
                    }
                })
            } else "picAttachment" !== t.type && "avatar" !== t.type || o.
        default.forEach(n,
            function(t) { (t.type && t.type.toLowerCase().indexOf("image/") === -1 || t.suffix && r.indexOf(t.suffix) === -1) && a.push(t.name)
            });
            if (!o.
        default.isEmpty(a)) return {
                type:
                "attachmentType",
                info: {
                    errorContent: a
                }
            }
        }
        return null
    },
    n.attachmentImageSize = function(t, n) {
        var a = [];
        if (n) {
            if (t.isLimitPicResolution) {
                var r = t.picMaxHeight,
                i = t.picMinHeight,
                s = t.picMaxWidth,
                l = t.picMinWidth;
                o.
            default.forEach(n,
                function(t) {
                    t && t.displaySize && (r && t.displaySize.height > r || i && t.displaySize.height < i || s && t.displaySize.width > s || l && t.displaySize.width < l) && a.push(t.name)
                })
            }
            if (!o.
        default.isEmpty(a)) return {
                type:
                "attachmentResolution",
                info: {
                    errorContent: a
                }
            }
        }
        return null
    },
    n.base_attachmentNumber = function(t, n) {
        var a = "attachmentLimitNumber";
        if (n) {
            if (t.isAcceptMultipleFile && t.isLimitFileNumber && t.fileNumber && t.fileNumber < n.length) return a;
            if (!t.isAcceptMultipleFile && n.length > 1) return a
        }
        return null
    },
    function(t) {
        return t.reduce(function(t, n, a) {
            return t + n * Math.pow(10, 4 - 2 * a)
        },
        0)
    });
    n.dateLegal = function(t, n) {
        var a = t.dateFormat || ("birthDate" === t.type ? [1, 3] : [1]),
        r = ( + (t.timePrecision || 3), void 0),
        i = void 0;
        if (t.isCustomField ? (r = "dateTime_time" !== t.cfDateTimeType, i = ["dateTime_both", "dateTime_time"].indexOf(t.cfDateTimeType) > -1) : (r = "dateTime_time" !== t.type, i = ["dateTime_both", "dateTime_time"].indexOf(t.type) > -1), o.
    default.isPlainObject(n)) {
            if (r && a.indexOf( + n.dateType) === -1) return "calendarTypeError";
            if (i && !n.timeType) return "calendarTypeError";
            if (1 === n.dateType) {
                var s = (0, f.
            default)(new Date(n.y, n.m, n.d));
                if (t.isLimitDays && t.limitDays && t.limitDays.length > 0 && t.limitDays.indexOf(s.week() + 1) === -1) return "calendarValidError";
                if (t.isLimitDayInterval && (t.dayIntervalFrom || t.dayIntervalTo)) {
                    var l = t.dayIntervalFrom ? (0, f.
                default)(t.dayIntervalFrom):
                    null,
                    u = t.dayIntervalTo ? (0, f.
                default)(t.dayIntervalTo):
                    null;
                    if (l && l.isDayAfter(s) || u && u.isDayBefore(s)) return "calendarValidError"
                }
            }
            if (i && n.timeType && t.isLimitTimeInterval) {
                var c = (t.timeIntervalFrom || "00:00:00").split(":").map(function(t) {
                    return + t
                }),
                d = (t.timeIntervalTo || "23:59:59").split(":").map(function(t) {
                    return + t
                }),
                m = v(c),
                p = v(d),
                h = m > p,
                g = v([n.H || 0, n.M || 0, n.S || 0]);
                if (h) {
                    if (! (g >= m && g <= 235959 || g <= p && g >= 0)) return "calendarValidError"
                } else if (! (g >= m && g <= p)) return "calendarValidError"
            }
        } else if (n) return "calendarTypeError";
        return null
    },
    n.levelFillingEnd = function(t, n) {
        var a = "required",
        r = n || null;
        if (r && r.current && r.current[0] && r.id) {
            var i = o.
        default.find(t.options, {
                sId: +r.id
            });
            if (i) {
                var s = new g.TreeManager(t.options),
                l = s.getChildren(i.id);
                if (l && l.length > 0 && !t.isAllowPartEmpty) return a
            }
        }
        return null
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n, a) {
        return n in t ? Object.defineProperty(t, n, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = a,
        t
    }
    function o(t, n) {
        var a = {};
        for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
        return a
    }
    function s(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.FormStructure = n.ATTACHMENT_IMAGE_SUFFIX_LIST = n.ATTACHMENT_TYPE_LIST = void 0;
    var l = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
        }
        return t
    },
    u = function() {
        function t(t, n) {
            var a = [],
            r = !0,
            i = !1,
            o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); ! (r = (s = l.next()).done) && (a.push(s.value), !n || a.length !== n); r = !0);
            } catch(t) {
                i = !0,
                o = t
            } finally {
                try { ! r && l["return"] && l["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return a
        }
        return function(n, a) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } (),
    c = function() {
        function t(t, n) {
            for (var a = 0; a < n.length; a++) {
                var r = n[a];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, a, r) {
            return a && t(n.prototype, a),
            r && t(n, r),
            n
        }
    } (),
    d = a(6),
    f = r(d),
    m = a(97),
    p = r(m),
    h = a(8),
    g = a(57),
    _ = a(115),
    v = a(116),
    b = a(55),
    y = navigator.language ? navigator.language: navigator.userLanguage,
    E = "./images/formTemplate/",
    C = function(t) {
        return t ? ("" + (t || "")).split(/\r?\n/g) : null
    },
    T = function t(n) {
        var a = {};
        return f.
    default.forEach(n,
        function(n, r) {
            var i = n;
            f.
        default.isPlainObject(i) && (i = t(i)),
            null != i && (a[r] = i)
        }),
        a
    };
    n.ATTACHMENT_TYPE_LIST = [null, "txt", "doc/docx", "xls/xlsx", "ppt/pptx", "html/htm", "pdf", "jpg/jpeg", "png", "gif", "bmp", "psd", "tiff", "avi", "swf", "wmv", "rmvb", "m4a/mp4", "m4a/3gp", "m4a/mov", "mp3", "m4a", "wma", "rar", "zip", "7z"],
    n.ATTACHMENT_IMAGE_SUFFIX_LIST = ["art", "bm", "bmp", "dwg", "dxf", "fif", "flo", "fpx", "g3", "gif", "psd", "ico", "ief", "iefs", "jfif", "jfif-tbnl", "jpe", "jpeg", "jpg", "jps", "jut", "mcf", "nap", "nif", "niff", "pbm", "pct", "pcx", "pgm", "pic", "pict", "pm", "png", "pnm", "ppm", "qif", "qti", "qtif", "ras", "rf", "rgb", "rp", "svf", "tif", "tiff", "turbot", "xbm", "xif", "xpm", "x-png", "xwd"],
    n.FormStructure = function() {
        function t(n) {
            s(this, t);
            var a = n.vst,
            r = n.jhr,
            i = n.token,
            l = n.oq,
            u = n.LFP,
            c = n.CDN,
            d = n.sld,
            m = n.clSld,
            p = n.raw || {},
            g = p._m || {},
            _ = g.U,
            v = (g.T, o(g, ["U", "T"]));
            this.langCode = (0, h.getLanCode)(y),
            this.token = i,
            this.JHR = r,
            this.visitorData = a,
            this.meta = v,
            this.meta.orgName = v.CLN,
            this.isCdn = c,
            this.isPcdn = null != u && !c,
            this.LFP = Math.min(Math.max(0, u || 0), 1),
            this.BASE_UGC = "." + _,
            this.QR_UGC = this.BASE_UGC.replace("/image/", "/qr/"),
            this.MBRM_UGC = this.BASE_UGC.replace("/form/", "/sye_mbrm/");
            var b = "mk_seed";
            this.seed = +((0, h.getCookie)(b) || f.
        default.random(10, 99)),
            (0, h.setCookie)(b, this.seed, {
                domain: h._COOKIE_STATIC.DOMAIN,
                expires: 7
            }),
            this.seedWorker = new h.SeedRandom(this.seed),
            this.images = [],
            this.sld = d,
            this.clSld = m,
            this.doConvert(p, l),
            this.doVisitorConvert(),
            this.doVisitMemberConvert(),
            this.identifier = {
                QUEUE: "SUBMIT_QUEUE_" + this.token,
                FX: "MK_fx",
                WAITING: "WAITING_START_" + this.token,
                WAITING_EVERYDAY: "PD_WAITING_START_" + this.token,
                SUBMIT_ONCE: "MKSO_" + this.token,
                LAST_SUBMIT_ONCE: "MKSO_L_" + this.token,
                LOCAL_UVD: "MK_L_UVD"
            }
        }
        return c(t, [{
            key: "remove",
            value: function() {
                this.images = null
            }
        },
        {
            key: "qrCode",
            value: function(t) {
                t = t || "-";
                var n = [this.sld || "-", this.clSld || "-", this.token, "https:" === location.protocol ? "e": "-", t];
                return this._qrCode && this._qrCodeExtVer === t || (this._qrCodeExtVer = t, this._qrCode = (0, h.addUrlParams)(this._cdnify("" + this.QR_UGC + this.token + ".png"), {
                    v: n.join("")
                })),
                this._qrCode
            }
        },
        {
            key: "setJHR",
            value: function(t) {
                this.JHR = t
            }
        },
        {
            key: "_rateCheck",
            value: function() {
                if (this._rate_n = this._rate_n || 0, this._rate_p = this._rate_p || 0, 0 === this._rate_n) return ! 1;
                if (this._rate_n + this._rate_p) {
                    var t = this._rate_p / (this._rate_n + this._rate_p);
                    return t > this.LFP || 0 === t
                }
                return ! 1
            }
        },
        {
            key: "_cdnifyProcessor",
            value: function(t, n) {
                var a = this;
                return t = f.
            default.assign({},
                t),
                f.
            default.forEach(n,
                function(n) {
                    f.
                default.update(t, n,
                    function(t) {
                        return t ? a._cdnify(t) : null
                    })
                }),
                t
            }
        },
        {
            key: "_cdnify",
            value: function(t) {
                if (t && f.
            default.isString(t)) {
                    var n = null;
                    if ("_" === t.charAt(0)) return n = this._cdnify(E + "" + t.substring(1)),
                    n && this.images.push(n),
                    n;
                    if (0 === t.indexOf(this.QR_UGC) || 0 === t.indexOf(this.BASE_UGC) || 0 === t.indexOf(E)) {
                        if (this.isCdn) return n = (0, h.getCDNUrl)(this.sld, t),
                        n && this.images.push(n),
                        n;
                        if (this.isPcdn && this.LFP < 1) {
                            if (this._rateCheck()) return this._rate_p = (this._rate_p || 0) + 1,
                            n = (0, h.getPCDNUrl)(this.sld, t),
                            n && this.images.push(n),
                            n;
                            if (this.LFP - this.seedWorker.random() < .2) return this._rate_p = (this._rate_p || 0) + 1,
                            n = (0, h.getPCDNUrl)(this.sld, t),
                            n && this.images.push(n),
                            n;
                            this._rate_n = (this._rate_n || 0) + 1
                        }
                    }
                }
                return t
            }
        },
        {
            key: "_doExtConvert",
            value: function(t, n) {
                var a = n.xPayments,
                r = {},
                i = [1, 2, 4],
                o = null;
                if (a && (o = f.
            default.zipObject(["alipay", "wxpay", "paypal"], a), o && o.paypal && i.push(5)), t) {
                    if (t.logic && 1 === t.logic.s) {
                        var s = t.logic.p || {},
                        l = s.ldf,
                        u = s.ls;
                        r.logic = {
                            defaultShown: l,
                            info: u
                        }
                    }
                    if (t.ifp && 1 === t.ifp.s) {
                        r.inFormPay = !0;
                        var c = {};
                        if (c.payOnlineMethod = i, t.ifp.p) {
                            var d = t.ifp.p;
                            c.payOnlineMethod = [].concat(d.appom || i),
                            c.isLimitAmount = d.iapta,
                            c.limitAmountFrom = d.aptaf,
                            c.limitAmountTo = d.aptat,
                            c.isLimitQuantity = d.iaptq,
                            c.limitQuantityFrom = d.aptqf,
                            c.limitQuantityTo = d.aptqt
                        }
                        if (c.pvt = t.ifp.pvt, c.isKuaiQian = 8 === t.ifp.pvt, c.isQianFang = 9 === t.ifp.pvt, c.isMikeMerchant = 10 === t.ifp.pvt, c.isFrozen = t.ifp.pvtif, c.mmsPayMethod = t.ifp.pvtpom || [], c.mmsPayMethod && c.isMikeMerchant) {
                            var m = f.
                        default.uniq([4].concat(c.mmsPayMethod || []));
                            o && o.paypal && (m = f.
                        default.uniq([5].concat(m))),
                            c.legalPayMethod = m,
                            c.payOnlineMethod = f.
                        default.intersection(m, c.payOnlineMethod).sort()
                        }
                        c.ifpX = o,
                        r.inFormPayInfo = c || {}
                    }
                    if (t.ftkv && 1 === t.ftkv.s) {
                        r.ticket = !0;
                        var p = {};
                        if (t.ftkv.p) {
                            var h = t.ftkv.p;
                            p.title = C(h.t),
                            p.describe = C(h.d),
                            p.isRemindPreparer = h.inutn,
                            p.coRemindPreparerByMail = h.inutnem,
                            p.coMailNtComponent = h.nutnemcp,
                            p.coRemindPreparerByMsg = h.inutnsms,
                            p.coMsgNtComponent = h.nutnsmscp
                        }
                        r.ticketInfo = p
                    }
                    if (t.fcki && 1 === t.fcki.s) {
                        r.checkIn = !0;
                        var g = {};
                        if (t.fcki.p) {
                            var _ = t.fcki.p;
                            g.ckiWeChat = 0 !== _.iwc,
                            g.ckiShowImage = "ihimg" in _ ? _.ihimg: 1,
                            g.ckiImage = !!_.himg && {
                                "isLink": 2 === _.himg.himgs,
                                "linkUri": _.himg.himgr,
                                "imageUri": _.himg.himgu ? this.BASE_UGC + _.himg.himgu + "." + _.himg.himge: null,
                                "u": _.himg.himgu || null,
                                "e": _.himg.himge || null
                            },
                            g.ckiTitle = C(_.t),
                            g.ckiSubtitle = C(_.d),
                            g.ckiComponent = _.cp,
                            g.ckiComponentTitle = C(_.cpt),
                            g.ckiOnlyOnce = _.irdev,
                            g.ckiIsLimitPlace = _.irloc,
                            g.ckiPlace = _.rloc,
                            g.ckiOpen = _.iopen,
                            g.ckiOpenComponent = _.opencp,
                            g.ckiIsJumpTo = _.icj,
                            g.ckiJumpTo = _.cj
                        }
                        r.checkInInfo = g
                    }
                    if (t.nologo && 1 === t.nologo.s && (r.nologo = !0), t.crl && 1 === t.crl.s && (r.copyrightLogo = !0), t.fcpt && 1 === t.fcpt.s && (r.formCaptcha = !0), t.fcrs && 1 === t.fcrs.s && (r.componentPicCarousel = !0), t.fwbt && 1 === t.fwbt.s && (r.componentButton = !0), t.fsgn && 1 === t.fsgn.s && (r.componentSignature = !0), t.fwvp && 1 === t.fwvp.s && (r.componentVideo = !0), t.frte && 1 === t.frte.s && (r.renderRichText = !0), t.mbrm_frglg && 1 === t.mbrm_frglg.s) {
                        r.member = !0;
                        var v = f.
                    default.zipObject(["loginType", "pubName", "pubLogo", "balanceCurrency", "customBalanceCurrency"], this.meta.mbrm);
                        v.pubLogo && (v.pubLogo = "" + this.MBRM_UGC + v.pubLogo.u + "." + v.pubLogo.e);
                        var y = {},
                        E = t.mbrm_frglg;
                        y.loginState = E.flg && E.flg.s ? 1 : 0,
                        y.regState = E.frg && E.frg.s ? 1 : 0;
                        var S = 0;
                        if (y.regState) r.inFormPay = !1,
                        S = 1,
                        y.loginState = 0;
                        else if (y.loginState) {
                            if (S = 2, E.flg.p) {
                                var M = E.flg.p;
                                y.openRegData = {
                                    isOpenRegister: M.irgf || 0,
                                    registerFormToken: M.rgft || null
                                }
                            }
                            var I = (E.flg.p || {}).iumb;
                            y.allowMemberBalance = null == I ? 1 : +I
                        }
                        y.mode = S,
                        r.memberInfo = v,
                        r.memberFrglg = y,
                        v && (v.isMemberId = v.loginType === b.MBRM_LOGIN.UNI_ID_PASSWORD, v.isEmail = [b.MBRM_LOGIN.UNI_EMAIL_AUTH, b.MBRM_LOGIN.UNI_EMAIL_AUTH_ALLOW_PASSWORD].indexOf(v.loginType) > -1, v.isMobile = [b.MBRM_LOGIN.UNI_MOBILE_AUTH, b.MBRM_LOGIN.UNI_MOBILE_AUTH_ALLOW_PASSWORD].indexOf(v.loginType) > -1, v.isNeedPassword = [b.MBRM_LOGIN.UNI_ID_PASSWORD, b.MBRM_LOGIN.UNI_EMAIL_AUTH_ALLOW_PASSWORD, b.MBRM_LOGIN.UNI_MOBILE_AUTH_ALLOW_PASSWORD].indexOf(v.loginType) > -1),
                        r.member && y && 1 === y.regState && 1 === y.mode && (r.inFormPay = !1)
                    }
                }
                return T(r)
            }
        },
        {
            key: "_doSettingsConvert",
            value: function(t) {
                var n = void 0,
                a = ["asImage.linkUri", "asImage.imageUri"];
                return this.rawSettings = t,
                n = this._cdnifyProcessor((0, _.convertSettings)(t, this.BASE_UGC), a),
                T(n)
            }
        },
        {
            key: "_doStyleConvert",
            value: function(t) {
                var n = {
                    lineHeight: 14
                },
                a = ["background", "optBackground", "headerStyle.background", "submitStyle.background"];
                n = f.
            default.assign({},
                n, this._cdnifyProcessor((0, _.convertStyle)(t, this.BASE_UGC), a));
                var r = [null, 1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0],
                i = ["bgOpacity", "headerStyle.bgOpacity", "bodyStyle.bgOpacity", "submitStyle.bgOpacity"],
                o = function(t, n) {
                    var a = f.
                default.get(t, n);
                    a && f.
                default.set(t, n + "Value", r[ + a])
                };
                return f.
            default.forEach(i,
                function(t) {
                    return o(n, t)
                }),
                T(n)
            }
        },
        {
            key: "doConvert",
            value: function() {
                var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = arguments[1];
                if (this.style = this._doStyleConvert(n.st || {}), this.settings = this._doSettingsConvert(n.se || {}), this.extensions = this._doExtConvert(n.ext || {},
                {
                    xPayments: n.x_ifp_pms
                }), this.width = n.w, this.layout = (0, v.convertLayout)(n.cpl, n.cpo, this.extensions.logic), this.header = {},
                this.components = {},
                this.tail = {},
                n && n.h) {
                    var r = ["logo"];
                    this.header = T(this._cdnifyProcessor((0, _.convertHeader)(n.h, this.BASE_UGC), r))
                }
                if (n && n.t) {
                    var i = ["companyLogo"];
                    this.tail = T(this._cdnifyProcessor((0, _.convertTail)(n.t, this.BASE_UGC), i))
                }
                this.mobileAuth = null,
                (n && n.cp && !f.
            default.isEmpty(n.cp) || n.cp_ctcf && !f.
            default.isEmpty(n.cp_ctcf)) && (this.components = (0, v.convertComponentData)({
                    cp: n.cp,
                    cp_ctcf: n.cp_ctcf
                },
                this.BASE_UGC,
                function(n) {
                    var r = (n.isCustomField, o(n, ["isCustomField"])),
                    i = (0, b.getComponentType)(n);
                    if ("picCarousel" === i && !t.extensions.componentPicCarousel) return {
                        illegal: "picCarousel"
                    };
                    if ("staticVideo" === i && !t.extensions.componentVideo) return {
                        illegal: "staticVideo"
                    };
                    if ("button" === i && !t.extensions.componentButton) return {
                        illegal: "button"
                    };
                    if ("signature" === i && !t.extensions.componentSignature) return {
                        illegal: "signature"
                    };
                    "avatar" === i && (n.fileSize = 8, n.isLimitFileSize = 1),
                    ["IM", "SNS"].indexOf(i) > -1 && (n.hasOwnProperty("isAcceptMulti") || (n.isAcceptMulti = !0)),
                    (["ctcf_4", "rate"].indexOf(i) > -1 || "tabular" === i && n.tabularType === b.TABULAR_RATE) && 4 === n.rateIcon && (n.heatBarColorForm = n.heatBarColorForm || "#F5D964", n.heatBarColorTo = n.heatBarColorTo || "#E94C3C");
                    var s = a ? a.SO: null;
                    "commodity" === i && a && (s = a ? a.SL: null),
                    r.isLimitOptions && s && s[r.id] && (n.optionsQuotaInfo = s[r.id]),
                    n.isRandomOptions && (n.options = f.
                default.shuffle(n.options)),
                    "mobile" === i && r.isSendMsgAuth && (t.mobileAuth && t.mobileAuth !== r.id ? n.isSendMsgAuth = 0 : (n.isSendMsgAuth = 1, t.mobileAuth = r.id));
                    var l = "ctcf_9" === i && ["dateTime_date", "dateTime_both"].indexOf(n.cfDateTimeType) > -1;
                    if ((["dateTime_date", "dateTime_both"].indexOf(i) > -1 || l) && r.isLimitAfterDays) {
                        var u = Math.max(r.limitAfterDays >> 0, 0),
                        c = (0, p.
                    default)().startOf("date"),
                        d = null;
                        c.add(u, "d"),
                        r.isLimitDayInterval && (r.dayIntervalFrom && c.isDayBefore(r.dayIntervalFrom) && (c = (0, p.
                    default)(r.dayIntervalFrom)), d = r.dayIntervalTo),
                        n.isLimitDayInterval = 1,
                        n.dayIntervalFrom = c.getFullDate(),
                        n.dayIntervalTo = d
                    } (["dateTime_date", "dateTime_both", "birthDate"].indexOf(i) > -1 || l) && (n.dateFormat || (n.dateFormat = "birthDate" === i ? [1, 3] : [1])),
                    n.limitDays && (n.limitDays = f.
                default.filter(n.limitDays,
                    function(t) {
                        return null != t
                    }));
                    var m = function(n) {
                        return f.
                    default.map(n,
                        function(n) {
                            return n && n.image && n.image.imageUri && (n.image.imageUri = t._cdnify(n.image.imageUri), n.image.imageFullUri && (n.image.imageFullUri = t._cdnify(n.image.imageFullUri))),
                            n
                        })
                    },
                    h = function(n) {
                        return f.
                    default.map(n,
                        function(n) {
                            return n && n.imageUri && (n.imageUri = t._cdnify(n.imageUri)),
                            n
                        })
                    };
                    switch (i) {
                    case "picRadio":
                    case "picCheckbox":
                        n.options = m(n.options);
                        break;
                    case "commodity":
                        n.commodities = m(n.commodities);
                        break;
                    case "staticPic":
                        n.pictures = h(n.pictures);
                        break;
                    case "picCarousel":
                        n.carouselPictures = h(n.carouselPictures)
                    }
                    return n
                }))
            }
        },
        {
            key: "getComponent",
            value: function(t) {
                return this.components[t] || null
            }
        },
        {
            key: "findComponent",
            value: function(t) {
                var n = this,
                a = null;
                if (!t || f.
            default.isEmpty(t)) return null;
                var r = function(t, n) {
                    var a = !0;
                    return f.
                default.forEach(n,
                    function(n, r) {
                        if (t[r] !== n) return a = !1,
                        !1
                    }),
                    a
                },
                i = function(i) {
                    var o = n.components[i];
                    return ! o || !r(o, t) || (a = o, !1)
                };
                return f.
            default.forEach(this.layout,
                function(t) {
                    t.type === b.L_SQUEEZEBOX ? f.
                default.forEach(t.children, i) : i(t.id)
                }),
                a
            }
        },
        {
            key: "getComponentsByType",
            value: function(t) {
                var n = this;
                if (this.cacheComponentType && this.cacheComponentType[t]) return this.cacheComponentType[t];
                var a = [],
                r = function(r) {
                    var i = n.components[r];
                    i && i.type === t && a.push(i)
                };
                return f.
            default.forEach(this.layout,
                function(t) {
                    t.type === b.L_SQUEEZEBOX ? f.
                default.forEach(t.children, r) : r(t.id)
                }),
                this.cacheComponentType || (this.cacheComponentType = {}),
                this.cacheComponentType[t] = a,
                this.cacheComponentType[t]
            }
        },
        {
            key: "doVisitorConvert",
            value: function() {
                var t = this,
                n = this.visitorData && this.visitorData.uvd ? this.visitorData.uvd: null;
                if (this.isWxAuthorized = !(!n || !n.wc || f.
            default.isEmpty(n.wc)), n && (this.visitorInfo = {},
                n.ct || n.wc)) {
                    var a = f.
                default.assign({},
                    n.ct, n.wc ? i({},
                    g.COMPONENT_METAID_MAPPING.wechat, n.wc.nickname || "") : null);
                    for (var r in a) a.hasOwnProperty(r) && !
                    function() {
                        var n = g.METAID_COMPONENT_MAPPING[r],
                        i = a[r];
                        switch (n) {
                        case "location":
                            var o = []; ["I", "II", "III", "IV"].forEach(function(t) {
                                return ! (!i || !i[t]) && void o.push(i[t])
                            }),
                            i = {
                                struct: o
                            };
                            break;
                        case "address":
                            var s = i,
                            l = u(s, 3),
                            c = l[0],
                            d = l[1],
                            f = l[2],
                            m = []; ["I", "II", "III", "IV"].forEach(function(t) {
                                return ! (!c || !c[t]) && void m.push(c[t])
                            }),
                            i = {
                                struct: m,
                                content: d,
                                zipCode: f
                            }
                        }
                        t.visitorInfo[n] = i
                    } ()
                }
            }
        },
        {
            key: "doVisitMemberConvert",
            value: function() {
                var t = {};
                if (!this.visitorData) return void(this.visitedMember = null);
                if (this.visitorData.mbrm) {
                    var n = f.
                default.zipObject(["mbrmToken", "mbrmName", "isLevel", "defaultLevelInfo"], this.visitorData.mbrm);
                    if (n.defaultLevelIcon = window.rootPath("images/member/defaultMbAvatar@2x.png"), n.isLevel && n.defaultLevelInfo && n.defaultLevelInfo[2]) {
                        var a = n.defaultLevelInfo[2].lvi;
                        n.defaultLevelIcon = this.MBRM_UGC + (a.u + "." + a.e)
                    }
                    t = l({},
                    t, n)
                }
                if (this.visitorData.mbrmm) {
                    var r = f.
                default.zipObject(["account", "name", "memberLevelInfo"], this.visitorData.mbrmm),
                    i = this.extensions.member,
                    o = this.extensions.memberInfo;
                    if (i && o && [b.MBRM_LOGIN.UNI_MOBILE_AUTH, b.MBRM_LOGIN.UNI_MOBILE_AUTH_ALLOW_PASSWORD].indexOf(o.loginType) > -1 && (r.account = ("" + (r.account || "")).replace(/^(\s*)(86)*/, "")), t.isLevel && r.memberLevelInfo && r.memberLevelInfo[2]) {
                        var s = r.memberLevelInfo[2].lvi;
                        r.levelIcon = this.MBRM_UGC + (s.u + "." + s.e)
                    }
                    t = l({},
                    t, r)
                }
                f.
            default.isEmpty(t) ? this.visitedMember = null: this.visitedMember = t
            }
        }]),
        t
    } ()
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        return t.replace(/([\*\.\?\+\$\^\[\]\(\)\|\\\/])/g, "\\$1")
    }
    function o(t, n) {
        return t ? {
            headline: (t.t || "").split("\n"),
            headline_style: (0, E.convertRawTextStyle)(t.ts || null),
            description: (t.d || "").split("\n"),
            description_style: (0, E.convertRawTextStyle)(t.ds || null),
            layout: t.ly,
            layoutStr: v.FORM_HEADER_LAYOUT_MAPPING[t.ly],
            hasValue: [t.t ? "T": "", t.d ? "D": "", t.l ? "L": ""].join(""),
            logo: l(t.l, n),
            logoInfo: u(t.l),
            logoBorder: t.lb,
            logoDisplay: t.ld,
            logoHeight: t.lh,
            logoWidth: t.lw,
            isSetLayout: 1 === +t.lys
        }: {}
    }
    function s(t, n) {
        return {
            isHideBtn: t.ihb,
            stickyBottom: t.ibsb,
            isDefaultSubmitText: t.sb,
            submitText: t.sbt,
            copyrightType: t.crs,
            companyName: t.crn,
            companyLink: t.crl,
            companyLogo: l(t.crlg, n),
            companyLogoInfo: u(t.crlg),
            companyLogoHeight: t.crlgh,
            companyLogoWidth: t.crlgw
        }
    }
    function l(t, n, a) {
        var r = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] && arguments[4]),
        i = null;
        if (t) if (_.
    default.isPlainObject(t)) i = t.ul;
        else if ("_" === t.charAt(0)) {
            var o = t.substring(1);
            o = location.protocol + y.
        default.CDN_PATH_WITHOUT_PROTOCOL + "images/formTemplate/" + o,
            i = o
        } else i = _.
    default.startsWith(t, "http") || _.
    default.startsWith(t, "//") ? t: n + (r ? "opt_": "") + t;
        return i
    }
    function u(t) {
        return _.
    default.isPlainObject(t) ? {
            linkUri: t.ul,
            isCoop: !0,
            type: t._tpt,
            projectId: t._tppid,
            extInfo: t._tpext
        }: null
    }
    function c(t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, ["", 1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]),
        i = {
            themeColor: t.thc,
            lineHeight: t.ls || 14,
            bgColor: t.bgc,
            background: l(t.bg, n, a),
            backgroundInfo: u(t.bg),
            bgOpt: t.opt_bg,
            optBackground: t.bg ? l(t.bg, n, a, null, t.opt_bg) : null,
            bgLayoutHorizontal: t.bgl ? t.bgl.h || 6 : 6,
            bgLayoutVertical: t.bgl ? t.bgl.v || 6 : 6,
            backgroundFixed: void 0 !== t.bgs && null !== t.bgs ? t.bgs ? 0 : 1 : 0
        };
        if (t.h) {
            var o = t.h,
            s = r.indexOf(o.bgo);
            i.headerStyle = {
                bgColor: o.bgc,
                bgOpacity: s === -1 ? "1": "" + s,
                headlineColor: o.tc,
                headlineFontSize: o.tfs,
                headlineFontWeight: o.tfw,
                subheadColor: o.dc,
                subheadFontSize: o.dfs,
                subheadFontWeight: o.dfw,
                headerContentOffsetY: o.yof,
                background: l(o.bg, n, a),
                backgroundInfo: u(o.bg),
                bgLayoutHorizontal: o.bgl ? o.bgl.h || 6 : 6,
                bgLayoutVertical: o.bgl ? o.bgl.v || 6 : 6
            }
        }
        if (t.b) {
            var c = t.b,
            d = r.indexOf(c.bgo);
            i.bodyStyle = {
                cpTitleWidth: c.tw,
                bgColor: c.bgc,
                bgOpacity: d === -1 ? "1": "" + d,
                titleColor: c.tc,
                titleFontSize: c.tfs,
                titleFontWeight: c.tfw,
                describeColor: c.dc,
                describeFontSize: c.dfs,
                describeFontWeight: c.dfw,
                optionColor: c.oc,
                optionFontSize: c.ofs,
                optionFontWeight: c.ofw
            }
        }
        if (t.s) {
            var f = t.s,
            m = r.indexOf(f.bgo);
            i.submitStyle = {
                bgColor: f.bgc,
                bgOpacity: m === -1 ? "1": "" + m,
                background: l(f.bg, n, a),
                backgroundInfo: u(f.bg),
                bgLayoutHorizontal: f.bgl ? f.bgl.h || 6 : 6,
                bgLayoutVertical: f.bgl ? f.bgl.v || 6 : 6,
                btnColor: f.btc,
                fontColor: f.btct,
                submitFontSize: f.btts,
                fontWeight: f.bttw,
                btnWidthLayout: f.btw,
                isFormWith: 4 === f.btw ? "1": "0",
                btnAlign: 4 === f.btw ? 2 : f.btw || 2
            }
        }
        return i
    }
    function d(t, n, a) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ("customMailInfo" === t && a) {
            var o = _.
        default.zipObject(["id", "subject", "sendAddress", "sendName"], n);
            if (o && o.id && a[o.id] && (o.chooseMail = {
                id: o.id,
                name: a[o.id]
            }), o.subject) {
                var s = o.subject;
                s && (_.
            default.forEach(r,
                function(t, n) {
                    s = s.replace(new RegExp(i(n), "g"), t)
                }), o.subject = s)
            }
            return o
        }
        if ("customSmsInfo" === t && a) {
            var l = _.
        default.zipObject(["id"], n);
            if (l && l.id && a[l.id]) {
                var u = _.
            default.zipObject(["name", "auditStatus"], a[l.id]);
                3 === u.auditStatus && (l.chooseSms = _.
            default.assign(u, {
                    id: l.id
                }))
            }
            return l
        }
        return n
    }
    function f(t, n, a, r, i) {
        return {
            "language": t.lang,
            "showQuestionNo": t.qn,
            "questionNoType": t.qnt,
            "showFillingProgress": t.fp,
            "fillingProgressType": t.fpt,
            "isAutoCreate": t.icc,
            "isAddGroups": t.icg,
            "groups": t.cg,
            "tags": t.ct,
            "afterSubmitPage": t.s,
            "asIsShowImage": t.sp,
            "asIsDefaultImg": t.spd || void 0 === t.spd ? 1 : 0,
            "asImage": !t.spd && void 0 !== t.spd && {
                "isLink": 2 === t.sps,
                "isCoop": !!t.sp_tpt,
                "linkUri": l(t.spr, n),
                "type": t.sp_tpt,
                "projectId": t.sp_tppid,
                "extInfo": t.sp_tpext,
                "imageUri": t.spu ? n + t.spu + "." + t.spe: null,
                "u": t.spu,
                "e": t.spe
            },
            "asIsShowText": t.st,
            "asTextTitle": t.stt ? t.stt.split("\n") : t.stt,
            "asTextTitle_style": (0, E.convertRawTextStyle)(t.stts || null),
            "asTextSubTitle": t.std ? t.std.split("\n") : t.std,
            "asTextSubTitle_style": (0, E.convertRawTextStyle)(t.stds || null),
            "asIsShowRandomCode": t.sr,
            "asRandomCodeTitle": t.srt,
            "asRandomCodeFormat": t.srf,
            "asIsShowFeedbackNum": t.sn,
            "asFeedbackNumText": t.snt,
            "asIsShowFeedbackResult": t.si,
            "isShowStatistics": t.sis,
            "asSShowField": t.sisi,
            "isShowData": t.sid,
            "isSetDatePassword": t.sidp,
            "datePassword": t.sidpp,
            "asDShowField": t.sidi,
            "asIsShowButton": t.rb,
            "asButtonText": t.rbtx,
            "asButtonLinkType": t.rbl && "_SELF" === t.rbl ? "1": "2",
            "asButtonLink": t.rbl && "_SELF" !== t.rbl ? t.rbl: "",
            "asJumpTo": t.sj,
            "asIsJumpToLuxury": t.sjs,
            "asJumpToLuxury": t.sjss,
            "isOnlyWeChat": t.oiw,
            "isShowShare": t.ss,
            "isShowProgress": t.fp,
            "progressType": t.fpt,
            "isSetUsableTime": t.ap,
            "usableTimeFrom": t.apf,
            "usableTimeTo": t.apt,
            "isSetUsableTimeDaily": t.apd,
            "usableTimeDailyFrom": t.apdf,
            "usableTimeDailyTo": t.apdt,
            "usableTimeTextBefore": t.aptxbf,
            "usableTimeTextAfter": t.aptxaf,
            "isMensurableSubmit": t.ms,
            "mensurableSubmitNum": t.msn,
            "isMensurableSubmitRemain": t.msr,
            "mensurableSubmitText": t.mstx,
            "isVisitPassword": t.vp,
            "visitPassword": t.vpp,
            "isOnlySubmit": t.os,
            "isOnlySubmitIP": t.osip,
            "onlySubmitText": t.ostx,
            "isOnlySubmitPerDay": t.osd,
            "isOnlySubmitPerDayIP": t.osdip,
            "onlySubmitPerDayText": t.osdtx,
            "isLimitTime": t.itl,
            "timeMax": t.tlmx,
            "overTimeHandle": t.tlr,
            "isRemindMe": t.inm,
            "remindMeByMail": t.inmem,
            "remindMeMails": t.nmeml,
            "remindMeByMsg": t.inmsms,
            "remindMeTels": t.nmsmsl,
            "msgContentType": t.nmsmsp,
            "remindMeByWeChat": t.inmwc,
            "isShowAllPageNum": t.tpw,
            "isShowCurrentPageNum": t.cpn,
            "isBanReturn": t.nb,
            "isHidePageBtn": t.hpb,
            "cartSymbol": t.cps,
            "payMode": t.pmo,
            "cartSymbolDefined": t.sc,
            "isRemindPreparer": t.inu,
            "remindPreparerByMail": t.inuem,
            "mailNtComponent": t.inuemcp,
            "remindPreparerByMsg": t.inusms,
            "msgNtComponent": t.inusmscp,
            "remindPreparerByWeChat": t.inuswc,
            "remindPreparerByCustomMail": t.inucem,
            "customMailNtComponent": t.inucemcp,
            "customMailInfo": d("customMailInfo", t.inucemd, a, i),
            "remindPreparerByCustomMsg": t.inucsms,
            "customMsgNtComponent": t.inucsmscp,
            "customSmsInfo": d("customSmsInfo", t.inucsmsd, r),
            "isWcShare": t.iwcs,
            "weChatTitle": t.wcst,
            "weChatDescribe": t.wcsd,
            "weChatImage": t.wcsi ? l(t.wcsi, n) : null,
            "weChatImageInfo": u(t.wcsi)
        }
    }
    function m(t, n, a) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ("customMailInfoWhenPaid" === t && a) {
            var o = _.
        default.zipObject(["id", "subject", "sendAddress", "sendName"], n);
            if (o && o.id && a[o.id] && (o.chooseMail = {
                id: o.id,
                name: a[o.id]
            }), o.subject) {
                var s = o.subject;
                s && (_.
            default.forEach(r,
                function(t, n) {
                    s = s.replace(new RegExp(i(n), "g"), t)
                }), o.subject = s)
            }
            return o
        }
        if ("customSmsInfoWhenPaid" === t && a) {
            var l = _.
        default.zipObject(["id"], n);
            if (l && l.id && a[l.id]) {
                var u = _.
            default.zipObject(["name", "auditStatus"], a[l.id]);
                3 === u.auditStatus && (l.chooseSms = _.
            default.assign(u, {
                    id: l.id
                }))
            }
            return l
        }
        return n
    }
    function p(t, n, a, r, i) {
        var o = {};
        return _.
    default.forEach(t,
        function(t, s) {
            if ("logic" === s) {
                var l = {},
                u = {
                    "ldf": "logicDefaultShows",
                    "ls": "logicSet"
                };
                l.state = t.s,
                t.p && _.
            default.forEach(t.p,
                function(t, n) {
                    u[n] && t && (l[u[n]] = t)
                }),
                _.
            default.isEmpty(l) || (o.logic = l)
            } else if ("ifp" === s) {
                var c = {};
                c.state = t.s,
                c.pvt = t.pvt,
                _.
            default.isEmpty(c) || (o.ifp = c),
                t.p && (o.ifp = _.
            default.assign(o.ifp, {
                    isLimitAmount: t.p.iapta,
                    limitAmountFrom: null != t.p.aptaf ? "" + t.p.aptaf: "",
                    limitAmountTo: null != t.p.aptat ? "" + t.p.aptat: "",
                    isLimitQuantity: t.p.iaptq,
                    limitQuantityFrom: null != t.p.aptqf ? "" + t.p.aptqf: "",
                    limitQuantityTo: null != t.p.aptqt ? "" + t.p.aptqt: "",
                    isRemindMeWhenPaid: t.p.iapnm,
                    remindMeWhenPaidByMail: t.p.iapnmem,
                    remindMeWhenPaidMails: t.p.apnmeml,
                    remindMeWhenPaidByMsg: t.p.iapnmsms,
                    remindMeWhenPaidTels: t.p.apnmsmsl,
                    paidMsgContentType: t.p.apnmsmsp,
                    payOnlineMethod: t.p.appom,
                    isRemindPreparerWhenPaid: t.p.iapnu,
                    remindPreparerWhenPaidByMail: t.p.iapnuem,
                    mailNtComponentWhenPaid: t.p.iapnuemcp,
                    remindPreparerWhenPaidByMsg: t.p.iapnusms,
                    msgNtComponentWhenPaid: t.p.iapnusmscp,
                    remindPreparerWhenPaidByCustomMail: t.p.iapnucem,
                    customMailNtComponentWhenPaid: t.p.iapnucemcp,
                    customMailInfoWhenPaid: m("customMailInfoWhenPaid", t.p.iapnucemd, a, i),
                    remindPreparerWhenPaidByCustomMsg: t.p.iapnucsms,
                    customMsgNtComponentWhenPaid: t.p.iapnucsmscp,
                    customSmsInfoWhenPaid: m("customSmsInfoWhenPaid", t.p.iapnucsmsd, r)
                }))
            } else if ("ftkv" === s) {
                var d = {};
                d.state = t.s,
                _.
            default.isEmpty(d) || (o.ftkv = d),
                t.p && (o.ftkv = _.
            default.assign(o.ftkv, {
                    ticketValidationTitle: t.p.t ? (t.p.t || "").split("\n") : null,
                    ticketValidationDescribe: (t.p.d || "").split("\n"),
                    isTicketValidationRemindPreparer: t.p.inutn,
                    coRemindPreparerByMail: t.p.inutnem,
                    coMailNtComponent: t.p.nutnemcp,
                    coRemindPreparerByMsg: t.p.inutnsms,
                    coMsgNtComponent: t.p.nutnsmscp,
                    isTkvAllowCancel: "iac" in t.p ? t.p.iac: 1
                }))
            } else if ("fcki" === s) {
                var f = {};
                f.state = t.s,
                _.
            default.isEmpty(f) || (o.fcki = f),
                t.p && (o.fcki = _.
            default.assign(o.fcki, {
                    ckiShowImage: "ihimg" in t.p ? t.p.ihimg: 1,
                    ckiImage: !!t.p.himg && {
                        "isLink": 2 === t.p.himg.himgs,
                        "isCoop": 3 === t.p.himg.himgs,
                        "linkUri": t.p.himg.himgr,
                        "type": t.p.himg.himg_tpt,
                        "projectId": t.p.himg.himg_tppid,
                        "extInfo": t.p.himg.himg_tpext,
                        "imageUri": t.p.himg.himgu ? n + t.p.himg.himgu + "." + t.p.himg.himge: null,
                        "u": t.p.himg.himgu,
                        "e": t.p.himg.himge
                    },
                    ckiTitle: (t.p.t || "").split("\n"),
                    ckiSubtitle: (t.p.d || "").split("\n"),
                    ckiComponent: t.p.cp,
                    ckiComponentTitle: (t.p.cpt || "").split("\n"),
                    ckiWeChat: t.p.iwc,
                    ckiOnlyOnce: t.p.irdev,
                    ckiIsLimitPlace: t.p.irloc,
                    ckiPlace: t.p.rloc,
                    ckiOpen: t.p.iopen,
                    ckiOpenComponent: t.p.opencp,
                    ckiIsJump: t.p.icj,
                    ckiJumpTo: t.p.cj
                }))
            } else if ("flto" === s) {
                var p = {};
                p.state = t.s,
                _.
            default.isEmpty(p) || (o.flto = p),
                t.p && (o.flto = _.
            default.assign(o.flto, {
                    ltoTitle: t.p.t || "",
                    ltoImageType: t.p.bgt || 1,
                    ltoIsImage: t.p.ibg ? 1 : 0,
                    ltoImage: !!t.p.bgimg && {
                        "isLink": 2 === t.p.bgimg.himgs,
                        "isCoop": 3 === t.p.bgimg.himgs,
                        "linkUri": t.p.bgimg.himgr,
                        "type": t.p.bgimg.himg_tpt,
                        "projectId": t.p.bgimg.himg_tppid,
                        "extInfo": t.p.bgimg.himg_tpext,
                        "imageUri": t.p.bgimg.himgu ? n + t.p.bgimg.himgu + "." + t.p.bgimg.himge: null,
                        "u": t.p.bgimg.himgu,
                        "e": t.p.bgimg.himge
                    },
                    ltoList: t.p.wl || null,
                    ltoComponent: t.p.cp,
                    ltoIsHidePartData: t.p.ihpd ? 1 : 0,
                    ltoShowComponent: t.p.showcp,
                    ltoMode: "a" === t.p.m ? 2 : 1,
                    ltoNumber: t.p.wn || 1,
                    ltoIsLimit: t.p.iCond ? 1 : 0,
                    ltoConditions: t.p.cond,
                    ltoIsCkiOp: t.p.ickiop ? 1 : 0
                }))
            } else if ("frvg" === s) {
                var h = {};
                if (h.state = t.s, _.
            default.isEmpty(h) || (o.frvg = h), t.p && t.p.cpl && t.p.cpl.length > 0) {
                    var g = t.p.cpl[0],
                    v = (t.p.cpst || {})[g] || {};
                    o.frvg = _.
                default.assign(o.frvg, {
                        rvgComponent: g,
                        rvgTitle: v.t || "",
                        rvgSubTitle: v.st || "",
                        rvgTemplate: v.tp,
                        rvgIsImage: v.ibg ? 1 : 0,
                        rvgImage: !!v.bgimg && {
                            "isLink": 2 === v.bgimg.himgs,
                            "isCoop": 3 === v.bgimg.himgs,
                            "linkUri": v.bgimg.himgr,
                            "type": v.bgimg.himg_tpt,
                            "projectId": v.bgimg.himg_tppid,
                            "extInfo": v.bgimg.himg_tpext,
                            "imageUri": v.bgimg.himgu ? n + v.bgimg.himgu + "." + v.bgimg.himge: null,
                            "u": v.bgimg.himgu,
                            "e": v.bgimg.himge
                        }
                    })
                }
            } else if ("mbrm_frglg" === s) {
                var b = {};
                if (b.state = t.s, t) {
                    var y = {
                        "nt": "note",
                        "crd": "credit",
                        "imgrp": "isAddMemberGroup",
                        "mgrp": "group",
                        "dlv": "memberLevel",
                        "ion": "isDisplay"
                    },
                    E = {
                        "irgf": "isAllowRegister",
                        "rgf": "registerForm",
                        "imgrpl": "isLimitMemberGroups",
                        "mgrpl": "limitMemberGroups",
                        "iumb": "isAllowUseMemberBalance"
                    };
                    if (t.frg) {
                        var C = t.frg;
                        b.regState = C.s,
                        b.regInfo = {},
                        _.
                    default.forEach(C.p,
                        function(t, n) {
                            y[n] && (b.regInfo[y[n]] = t)
                        })
                    }
                    if (t.flg) {
                        var T = t.flg;
                        b.loginState = T.s,
                        b.loginInfo = T.p,
                        b.loginInfo = {},
                        _.
                    default.forEach(T.p,
                        function(t, n) {
                            E[n] && (b.loginInfo[E[n]] = t)
                        })
                    }
                }
                o["mbrm_frglg"] = _.
            default.assign({},
                o["mbrm_frglg"], b)
            } else if ("mbrm_msg" === s) {
                var S = {};
                if (t) {
                    var M = {
                        "inm": "mbrmMsgIsRemindMe",
                        "inmem": "mbrmMsgRemindMeByMail",
                        "nmeml": "mbrmMsgRemindMeMails",
                        "inmsms": "mbrmMsgRemindMeByMsg",
                        "nmsmsl": "mbrmMsgRemindMeTels",
                        "nmwc": "wcPusher_newSubmit"
                    };
                    if (t.urg) {
                        var I = t.urg;
                        S.urgent = I,
                        S.urgent = {},
                        _.
                    default.forEach(I,
                        function(t, n) {
                            M[n] && (S.urgent[M[n]] = t)
                        })
                    }
                }
                o["mbrm_frglg"] = _.
            default.assign({},
                o["mbrm_frglg"], S)
            } else {
                var N = {};
                N.state = t.s,
                _.
            default.isEmpty(N) || (o[s] = N)
            }
        }),
        o
    }
    function h(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!t) return [];
        t = t.split("");
        for (var a = [], r = t.length, i = 0, o = !1, s = 0, l = !1, u = ""; i < r;) {
            var c = t[i];
            o ? ">" === c && 0 === s ? (l || (n ? _.
        default.forEach(u.split("~"),
            function() {
                a.push({
                    type: "normal"
                })
            }) : a.push({
                type: "squeezeBox",
                layout: u.split("~").map(function(t) {
                    return + t
                })
            })), o = !1, u = "", l = !1) : ("<" === c ? s++:">" === c && s--, u += c) : "<" === c ? o = !0 : "-" === c && a.push({
                type: "normal"
            }),
            i++
        }
        return a
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var g = a(6),
    _ = r(g),
    v = a(57),
    b = a(14),
    y = r(b),
    E = a(25);
    n.
default = {
        convertHeader: o,
        convertTail: s,
        convertStyle: c,
        convertSettings: f,
        convertExtend: p,
        convertLayoutString: h
    },
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t, n, a) {
        var r = null;
        if (t) if ("_" === t.charAt(0)) {
            var i = (g.
        default.random(.1, .8), t.substring(1));
            i = location.protocol + C.
        default.CDN_PATH_WITHOUT_PROTOCOL + "images/formTemplate/" + i,
            r = i
        } else r = t;
        return r
    }
    function o(t, n, a, r, o) {
        var s = null,
        l = null;
        switch (t) {
        case "radio":
        case "checkbox":
        case "dropDown":
        case "company":
        case "department":
        case "position":
        case "fscRadio":
        case "fscCheckbox":
            return s = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                var r = t[0];
                if (0 === +r) return l = n.l2s ? n.l2s["" + r] : null,
                !0;
                var i = {};
                if (n.ptl) {
                    var o = null;
                    g.
                default.forEach(n.ptl,
                    function(n, a) {
                        if (n === g.
                    default.trim(t[1])) return o = a,
                        !1
                    }),
                    o && (i = {
                        pid: o
                    })
                }
                s.push(g.
            default.assign({
                    isDefaultValue:
                    (n.df || []).indexOf(r) > -1,
                    sId: n.l2s ? n.l2s[r] : null
                },
                g.
            default.zipObject(["id", "value"], t), i))
            }),
            {
                options: s,
                optionsDefaultValue: n.df || [],
                otherId: n.l2s ? n.l2s[0] : null
            };
        case "title":
        case "gender":
        case "fscTf":
            return s = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                var r = t,
                i = g.
            default.find(n.lo,
                function(t) {
                    return t[0] === r
                });
                s.push(g.
            default.assign({
                    isDefaultValue:
                    (n.df || []).indexOf(r) > -1,
                    sId: n.l2s ? n.l2s[r] : null
                },
                g.
            default.zipObject(["id", "value"], i)))
            }),
            {
                options: s,
                optionsDefaultValue: n.df || []
            };
        case "picRadio":
        case "picCheckbox":
        case "fscPicRadio":
        case "fscPicCheckbox":
            return s = [],
            g.
        default.forEach(n.l,
            function(t, l) {
                var u = t[0];
                if (0 !== +u) {
                    var c = {
                        id: u,
                        sId: n.l2s ? n.l2s[u] : null,
                        value: t[1],
                        isDefaultValue: (n.df || []).indexOf(u) > -1
                    },
                    d = t[2];
                    d && !g.
                default.isEmpty(d) && g.
                default.isPlainObject(d) && (d.u && d.e ? (c.image = {},
                    c.image.isOpt = (n.opt || []).indexOf(u) > -1, c.image.imageUri = a + (c.image.isOpt ? "opt_": "") + d.u + "." + d.e, c.image.imageFullUri = a + d.u + "." + d.e, c.image.u = d.u, c.image.e = d.e, c.image.width = d.w, c.image.height = d.h) : d.ul && (c.image = {},
                    c.image.isLink = !0, c.image.linkUri = i(d.ul, r, o), c.image.width = d.w, c.image.height = d.h)),
                    s.push(c)
                }
            }),
            {
                options: s,
                optionsDefaultValue: n.df || []
            };
        case "staticPic":
            return s = [],
            n && n.p && g.
        default.forEach(n.p,
            function(t) {
                if (t && g.
            default.isArray(t)) {
                    var n = t[0],
                    l = t[1] || 2,
                    u = {
                        picAlign: l
                    };
                    n && !g.
                default.isEmpty(n) && g.
                default.isPlainObject(n) && (u.isJumpTo = !!n.l, u.jumpTo = n.l || null, n.u && n.e ? (u.u = n.u, u.e = n.e, u.imageUri = a + n.u + "." + n.e, u.width = n.w, u.height = n.h) : n.ul ? (u.isLink = !0, u.linkUri = i(n.ul, r, o), u.width = n.w, u.height = n.h) : u.imageUri = null),
                    s.push(u)
                } else s.push(null)
            }),
            {
                pictures: s
            };
        case "picCarousel":
            return s = [],
            n && n.p && g.
        default.forEach(n.p,
            function(t) {
                if (t && !g.
            default.isEmpty(t) && g.
            default.isPlainObject(t)) {
                    var n = {
                        id: t.id,
                        isJumpTo: !!t.l,
                        jumpTo: t.l || null,
                        name: t.n || null
                    };
                    t.u && t.e ? (n.u = t.u, n.e = t.e, n.imageUri = a + t.u + "." + t.e, n.width = t.w, n.height = t.h) : t.ul ? (n.isLink = !0, n.linkUri = i(t.ul, r, o), n.width = t.w, n.height = t.h) : n.imageUri = null,
                    s.push(n)
                } else s.push(null)
            }),
            {
                carouselPictures: s
            };
        case "commodity":
            return s = [],
            g.
        default.forEach(n.l,
            function(t, l) {
                var u = t[2];
                g.
            default.isArray(u) || (u = ("" + (u || "")).split("\n"));
                var c = {
                    id: t[0],
                    sId: n.l2s ? n.l2s[t[0]] : null,
                    defaultValue: Math.max((n.df || {})[t[0]] >> 0, 0),
                    name: t[1],
                    describe: u,
                    price: (n.l2p ? n.l2p[t[0]] : 0) || 0
                },
                d = t[3];
                d && !g.
            default.isEmpty(d) && g.
            default.isPlainObject(d) && (d.u && d.e ? (c.image = {},
                c.image.isOpt = (n.opt || []).indexOf(t[0]) > -1, c.image.imageUri = a + (c.image.isOpt ? "opt_": "") + d.u + "." + d.e, c.image.imageFullUri = a + d.u + "." + d.e, c.image.u = d.u, c.image.e = d.e) : d.ul && (c.image = {},
                c.image.isLink = !0, c.image.linkUri = i(d.ul, r, o)), c.isJumpTo = !!d.l, c.jumpTo = d.l || null),
                s.push(c)
            }),
            {
                commodities: s,
                commoditiesDefaultValue: n.df || {},
                cpId: n.mx,
                priceList: n.l2p
            };
        case "multiLevel":
            if (!n) return;
            return s = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                var r = t[0];
                s.push(g.
            default.assign({
                    defaultValue:
                    (n.df || []).indexOf(r) > -1,
                    sId: n.l2s ? n.l2s[r] : null
                },
                g.
            default.zipObject(["id", "pId", "type", "content", "inputRequired"], t)))
            }),
            {
                options: s,
                optionsDefaultValue: n.df || []
            };
        case "rank":
            if (!n) return;
            return s = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                var r = t[0];
                s.push(g.
            default.assign({
                    isDefaultValue:
                    (n.df || []).indexOf(r) > -1,
                    sId: n.l2s ? n.l2s[r] : null
                },
                g.
            default.zipObject(["id", "value"], t)))
            }),
            {
                options: s
            };
        case "tabular":
            var u = [],
            c = [];
            g.
        default.forEach(n.l,
            function(t, a) {
                u.push(g.
            default.assign({
                    isDefaultValue:
                    (n.df || []).indexOf(t[0]) > -1
                },
                g.
            default.zipObject(["id", "value"], t)))
            }),
            g.
        default.forEach(n.ql,
            function(t, n) {
                c.push(g.
            default.zipObject(["id", "value"], t))
            });
            var d = {};
            return n.l && (d.options = u),
            n.ql && (d.questions = c),
            n.ql2s && (d.ql2sMapping = n.ql2s),
            n.ch && (d.tipText = n.ch),
            d
        }
        return s
    }
    function s(t, n, a, r, i) {
        var o = {};
        if (!n) return {};
        switch (t) {
        case 6:
        case 7:
            return o = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                t[2] && o.push({
                    isDefaultValue: (n.df || []).indexOf(t[0]) > -1,
                    id: t[0],
                    sId: n.l2s ? n.l2s[t[0]] : null,
                    value: t[1]
                })
            }),
            {
                options: o,
                optionsDefaultValue: n.df || []
            };
        case 8:
            if (!n) return;
            return o = [],
            g.
        default.forEach(n.l,
            function(t, a) {
                o.push(g.
            default.assign({
                    defaultValue:
                    (n.df || []).indexOf(t[0]) > -1,
                    sId: n.l2s ? n.l2s[t[0]] : null
                },
                g.
            default.zipObject(["id", "pId", "type", "content"], t)))
            }),
            {
                options: o,
                optionsDefaultValue: n.df || []
            }
        }
        return o
    }
    function l(t, n) {
        var a = {};
        switch (t) {
        case "input":
        case "textarea":
            g.
        default.forEach(n,
            function(t, n) {
                var r = b.invert_propsMapping[n];
                r && null !== t && void 0 !== t && (a[r] = t)
            });
            break;
        case "radio":
        case "checkbox":
        case "dropDown":
        case "fscRadio":
        case "fscCheckbox":
            g.
        default.forEach(n,
            function(t, n) {
                var r = b.invert_propsMapping[n];
                r && null !== t && void 0 !== t && (a[r] = t)
            });
            break;
        default:
            g.
        default.forEach(n,
            function(t, n) {
                var r = b.invert_propsMapping[n];
                r && ("localityRange" === r && (t = t.map(function(t) {
                    return {
                        type: "" + t[0],
                        locationId: t[1]
                    }
                })), "picDescribe" !== r && "describeFoldText" !== r && "foldContent" !== r || t && !g.
            default.isEmpty(t) && g.
            default.isString(t) && (t = t.split("\n")), "picDescribe_style" !== r && "describeFoldText_style" !== r && "foldContent_style" !== r || (t = (0, y.convertRawTextStyle)(t || null)), null !== t && void 0 !== t && (a[r] = t))
            })
        }
        return a
    }
    function u(t) {
        return t ? t.split("\n") : []
    }
    function c(t, n, a, r, i) {
        var s = g.
    default.zipObject(["type", "isRequired", "content", "props"], t);
        i && (s = g.
    default.zipObject(["id", "type", "content", "props"], t));
        var c = b.METAID_COMPONENT_MAPPING[s.type];
        switch (s.title = s.content ? u(s.content.t) : null, s.subtitle = s.content ? u(s.content.d) : null, s.title_style = s.content ? (0, y.convertRawTextStyle)(s.content.ts) : null, s.subtitle_style = s.content ? (0, y.convertRawTextStyle)(s.content.ds) : null, s.type = c, c) {
        case "textarea":
            s.isOnlySingle = "0",
            s.type = "input";
            break;
        case "input":
            s.isOnlySingle = "1";
            break;
        case "rank":
            s.trueDigits || (s.trueDigits = (s.content.l || []).length)
        }
        return s = g.
    default.assign(s, l(c, s.props), o(c, s.content, n, a, r)),
        delete s.props,
        delete s.content,
        s
    }
    function d(t, n, a, r, i) {
        var o = g.
    default.zipObject(["type", "isRequired", "content", "props"], t);
        switch (i && (o = g.
    default.zipObject(5 === t.length ? ["sId", "ctcfId", "type", "content", "props"] : ["id", "type", "content", "props"], t)), o.isCustomField = !0, o.title = o.content ? u(o.content.t) : null, o.subtitle = o.content ? u(o.content.d) : null, o.title_style = o.content ? (0, y.convertRawTextStyle)(o.content.ts) : null, o.subtitle_style = o.content ? (0, y.convertRawTextStyle)(o.content.ds) : null, o.type) {
        case 2:
            o.isOnlySingle = "0",
            o.type = 1;
            break;
        case 1:
            o.isOnlySingle = "1";
            break;
        case 7:
            o.isCheckbox = 1
        }
        return o = g.
    default.assign(o, l(o.type, o.props), s(o.type, o.content, n, a, r)),
        delete o.props,
        delete o.content,
        o
    }
    function f(t, n, a) {
        var r = t.cp,
        i = t.cp_ctcf,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        l = arguments[5],
        u = {};
        return r && g.
    default.forEach(r,
        function(t, r) {
            l && (r = t[0]);
            var i = g.
        default.assign({
                id:
                r
            },
            c(t, n, o, s, l));
            a && (i = a(i)),
            u[r] = i
        }),
        i && g.
    default.forEach(i,
        function(t, r) {
            l && (r = t[0]);
            var i = g.
        default.assign({
                id:
                "ctcf#" + r
            },
            d(t, n, o, s, l));
            a && (i = a(i)),
            u["ctcf#" + r] = i
        }),
        u
    }
    function m(t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null;
        if (!t || !n) return r;
        var i = (0, v.convertLayoutString)(t, a),
        o = g.
    default.map(n.split(";"),
        function(t) {
            return g.
        default.startsWith(t, "ctcf#") ? t: +t
        });
        return r = g.
    default.map(i,
        function(t) {
            return "normal" === t.type ? t.id = o.shift() : "squeezeBox" === t.type && (t.children = t.layout.map(function(t) {
                return o.shift()
            })),
            t
        })
    }
    function p(t, n) {
        return g.
    default.map(t,
        function(t) {
            if (t) {
                var a = {};
                return a.id = t[0],
                a.ticketNum = t[1],
                a.ticketStatus = t[2],
                a.ticketValidWay = t[3],
                a.feedbackId = t[4],
                t[5] && n.user && n.user[t[5]] && (a.verificationUser = n.user[t[5]][0]),
                n.create && (a.createdDate = n.create[a.id]),
                n.update && (a.verificationDate = n.update[a.id]),
                a
            }
            return null
        })
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.viewRawCtcfComponent = n.viewRawComponent = void 0,
    n.convertRawComponentContent = o,
    n.convertRawCtcfComponentContent = s,
    n.convertRawComponentPropsInfo = l,
    n.convertComponentData = f,
    n.convertLayout = m,
    n.convertFormTicket = p;
    var h = a(6),
    g = r(h),
    _ = a(117),
    v = (r(_), a(115)),
    b = a(57),
    y = a(25),
    E = a(14),
    C = r(E);
    n.viewRawComponent = c,
    n.viewRawCtcfComponent = c
},
function(t, n, a) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r, i = arguments;
    window.mkErrorLog = [];
    var o = function() {},
    s = {
        log: o,
        warn: o,
        info: o,
        error: function() {
            window.mkErrorLog.push(i)
        }
    };
    if (r = !0, !r && window.console) try {
        s = {
            log: console.log.bind(window.console),
            warn: console.warn.bind(window.console),
            info: console.info.bind(window.console),
            error: console.error.bind(window.console)
        }
    } catch(t) {
        s.log = console.log
    }
    n.
default = s,
    t.exports = n["default"]
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.form = void 0;
    var i = a(6),
    o = r(i),
    s = a(38),
    l = a(17);
    n.form = function(t) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments[1],
            a = {},
            r = !1;
            switch (n.type) {
            case s._CHUNK_MEASURE:
                break;
            case s._CHUNK_LOADED:
                a.loadedChunk = [].concat(t.loadedChunk || [], n.chunks || []),
                (0, l.setComponents)(n.data);
                break;
            case s._GEN_CAPTCHA_SUCCEED:
                a.captcha = n.data,
                a.captchaValid = null,
                r = !0;
                break;
            case s._GEN_CAPTCHA_FAILED:
                a.captcha = o.
            default.assign({},
                t.captcha, {
                    error: !0
                }),
                a.captchaValid = null,
                r = !0;
                break;
            case s._CHECK_CAPTCHA_SUCCEED:
            case s._CHECK_SUBMIT_CAPTCHA_SUCCEED:
                a.captcha = o.
            default.assign({},
                t.captcha, {
                    captcha: n.data,
                    error: !1
                }),
                a.captchaValid = "checked";
                break;
            case s._CHECK_CAPTCHA_FAILED:
            case s._CHECK_SUBMIT_CAPTCHA_FAILED:
                a.captchaValid = "error"
            }
            if (o.
        default.isEmpty(a)) return t;
            var i = o.
        default.assign({},
            t, a);
            return r && (i.captcha = a.captcha),
            i
        }
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function i(t) {
        if (Array.isArray(t)) {
            for (var n = 0,
            a = Array(t.length); n < t.length; n++) a[n] = t[n];
            return a
        }
        return Array.from(t)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.filling = void 0;
    var o = a(38),
    s = a(61),
    l = r(s),
    u = a(6),
    c = r(u),
    d = a(8),
    f = a(55);
    n.filling = function(t) {
        var n = {};
        return function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments[1],
            s = t(),
            u = {};
            switch (r.type) {
            case o._BLUR_NUMBER:
                if (r.value) {
                    var m = l.
                default.localeStringToNumber(r.value);
                    if (!isNaN(m) && c.
                default.isNumber(m)) {
                        var p = s.getComponent(r.id);
                        1 === p.isAcceptDecimals && 1 === p.isLimitDecDigits && p.decDigits && (m = m.toFixed( + p.decDigits));
                        var h = 1 === p.isAcceptDecimals && 1 === p.isLimitDecDigits;
                        u[r.id] = l.
                    default.localeNumberFormatter(m, h ? +p.decDigits: null, h ? +p.decDigits: null, !1)
                    } else u[r.id] = r.value
                } else u[r.id] = r.value;
                break;
            case o._SET_VALUE:
            case o._BLUR_INPUT:
                r.id && (c.
            default.isPlainObject(r.value) ? u[r.id] = c.
            default.assign({},
                a[r.id], r.value) : u[r.id] = r.value);
                break;
            case o._SET_DATE_TIME_VALUE:
            case o._BLUR_DATE_TIME_VALUE:
                r.id && (r.value ? u[r.id] = c.
            default.assign({},
                a[r.id] || {},
                r.value) : u[r.id] = null);
                break;
            case o._SET_MULTI_INPUT_VALUE:
            case o._BLUR_MULTI_INPUT:
                r.id && (u[r.id] = [].concat(a[r.id] || []), u[r.id][r.idx] = r.value);
                break;
            case o._ADD_MULTI_INPUT_ITEM:
                if (r.id) {
                    u[r.id] = [].concat(a[r.id] || []);
                    var g = u[r.id].length;
                    u[r.id] && g > r.idx ? u[r.id].splice(r.idx + 1, 0, "") : 0 === g && (u[r.id] = ["", ""])
                }
                break;
            case o._REMOVE_MULTI_INPUT_ITEM:
                r.id && (u[r.id] = [].concat(a[r.id] || []), u[r.id] && u[r.id].length > r.idx && u[r.id].splice(r.idx, 1));
                break;
            case o._SET_GROUP_VALUE:
            case o._BLUR_GROUP_INPUT:
                r.id && (u[r.id] = [].concat(a[r.id] || []), u[r.id][r.idx] = c.
            default.assign({},
                u[r.id][r.idx], r.data));
                break;
            case o._ADD_GROUP_ITEM:
                if (r.id) {
                    u[r.id] = [].concat(a[r.id] || []);
                    var _ = u[r.id].length;
                    u[r.id] && _ > r.idx ? u[r.id].splice(r.idx + 1, 0, "") : 0 === _ && (u[r.id] = ["", ""])
                }
                break;
            case o._REMOVE_GROUP_ITEM:
                r.id && (u[r.id] = [].concat(a[r.id] || []), u[r.id] && u[r.id].length > r.idx && u[r.id].splice(r.idx, 1));
                break;
            case o._SET_TABULAR_VALUE:
                if (r.id) {
                    var v = c.
                default.assign({},
                    a[r.id] || {});
                    switch (r.tabularType) {
                    case f.TABULAR_TEXT:
                        v[r.question] = r.value;
                        break;
                    case f.TABULAR_CHECKBOX:
                        v[r.question] = [].concat(v[r.question] || []);
                        var b = v[r.question].indexOf(r.value);
                        b === -1 ? v[r.question].push(r.value) : v[r.question].splice(b, 1);
                        break;
                    case f.TABULAR_RATE:
                        v[r.question] = +r.value;
                        break;
                    case f.TABULAR_RADIO:
                    default:
                        v[r.question] && v[r.question].indexOf(r.value) !== -1 ? v[r.question] = null: v[r.question] = [r.value]
                    }
                    u[r.id] = v
                }
                break;
            case o._SET_AUTH_MOBILE_VALUE:
            case o._BLUR_AUTH_MOBILE:
                if (r.id) {
                    var y = a[r.id] || {};
                    r.value !== y.mobile ? u[r.id] = {
                        mobile: r.value
                    }: u[r.id] = c.
                default.assign({},
                    y, {
                        mobile: r.value
                    })
                }
                break;
            case o._REQUIRE_AUTH_MSG_SUCCEED:
                r.id && (u[r.id] = c.
            default.assign({},
                a[r.id] || {},
                {
                    verificationToken: r.data.t,
                    verificationMobileToken: r.data.vv
                }));
                break;
            case o._SET_AUTH_CODE_VALUE:
                r.id && (u[r.id] = c.
            default.assign({},
                a[r.id] || {},
                {
                    verificationCode: r.value,
                    checked: !1
                }));
                break;
            case o._CHECK_AUTH_CODE_FAILED:
            case o._CHECK_AUTH_CODE_SUCCEED:
                r.id && a[r.id] && (u[r.id] = c.
            default.assign({},
                a[r.id] || {},
                {
                    checked: !0,
                    error: 0 !== r.data.r
                }));
                break;
            case o._SET_RATE:
                a[r.id] === r.value ? u[r.id] = null: u[r.id] = r.value;
                break;
            case o._SET_RANK:
                if (r.id) {
                    var E = s.getComponent(r.id),
                    C = [].concat(a[r.id] || []),
                    T = C.indexOf(r.data);
                    T !== r.index && (T > -1 && (C[T] = null), T > -1 && C[r.index] && (C[T] = C[r.index]), C[r.index] = r.data, C = C.slice(0, E.trueDigits), u[r.id] = C)
                }
                break;
            case o._SET_NEXT_RANK:
                if (r.id) {
                    for (var S = s.getComponent(r.id), M = [].concat(a[r.id] || []), I = 0, N = S.trueDigits; I < N; I++) if (!M[I]) {
                        M[I] = r.data;
                        break
                    }
                    M = M.slice(0, S.trueDigits),
                    u[r.id] = M
                }
                break;
            case o._REMOVE_RANK:
                var A = [].concat(a[r.id] || []),
                k = A.indexOf(r.data);
                k > -1 && (A[k] = null, u[r.id] = A);
                break;
            case o._SELECT_OPT:
                if (r.id) {
                    var x = s.getComponent(r.id),
                    D = c.
                default.map(a[r.id] || [],
                    function(t) {
                        return c.
                    default.isPlainObject(t) ? t.id: t
                    }).indexOf(r.value);
                    if ("checkbox" === x.type || "picCheckbox" === x.type || x.isCheckbox) {
                        var O = [].concat(a[r.id] || []);
                        if (D > -1) O.splice(D, 1);
                        else {
                            var P = r.value;
                            n[r.value] && (P = {
                                id: P,
                                value: n[r.value]
                            }),
                            O.push(P)
                        }
                        u[r.id] = O
                    } else if (null === r.value || D > -1) u[r.id] = null;
                    else {
                        var L = r.value;
                        n[r.value] && (L = {
                            id: L,
                            value: n[r.value]
                        }),
                        u[r.id] = [L]
                    }
                }
                break;
            case o._SET_OPT_EXT_VALUE:
                if (r.id && r.data && r.data.optId) {
                    var w = c.
                default.map(a[r.id] || [],
                    function(t) {
                        return c.
                    default.isPlainObject(t) ? t.id: t
                    }).indexOf(r.data.optId);
                    if (w > -1) {
                        var R = a[r.id][w];
                        R = c.
                    default.isPlainObject(R) ? c.
                    default.assign({},
                        R, {
                            value: r.data.value
                        }) : {
                            id: r.data.optId,
                            value: r.data.value
                        },
                        n[R.id] = R.value,
                        u[r.id] = a[r.id].slice(),
                        u[r.id][w] = R
                    }
                }
                break;
            case o._SET_FILE_DONE:
                if (r.id) {
                    u[r.id] = [].concat(a[r.id] || []);
                    var F = r.files;
                    if (u[r.id][r.index]) {
                        var U; (U = u[r.id]).splice.apply(U, [r.index, 1].concat(i(F)))
                    } else u[r.id] = [].concat(u[r.id], F)
                }
                break;
            case o._REMOVE_FILE:
                r.id && (u[r.id] = [].concat(a[r.id] || []), u[r.id][r.index] && u[r.id].splice(r.index, 1));
                break;
            case o._SET_COMMODITY_VALUE:
                if (r.id) {
                    var B = c.
                default.assign({},
                    a[r.id] || {}),
                    H = +r.data.num;
                    H <= 0 || isNaN(H) || !isFinite(H) ? delete B[r.data.id] : B[r.data.id] = H,
                    u[r.id] = B
                }
                break;
            case o._SET_LOCATION_VALUE:
                if (r.id) {
                    var j = r.data,
                    G = c.
                default.assign({},
                    a[r.id] || {});
                    j.hasOwnProperty("lvl") && (G.struct = (G.struct || []).slice(0, j.lvl), G.struct[j.lvl] = j.id),
                    j.hasOwnProperty("searchText") && (G.searchText = j.searchText),
                    j.hasOwnProperty("select") && (G.select = j.select ? j.select[0] : null, G.struct = j.select ? [j.select[0].id] : null),
                    j.hasOwnProperty("content") && (G.content = j.content),
                    j.hasOwnProperty("zipCode") && (G.zipCode = j.zipCode),
                    u[r.id] = G
                }
                break;
            case o._SET_LOCATION_CONTENT_STRUCTURE:
                if (r.id) {
                    var W = r.data,
                    V = c.
                default.assign({},
                    a[r.id] || {}),
                    z = []; ["I", "II", "III", "IV"].forEach(function(t) {
                        return ! (!W || !W[t]) && void z.push(W[t])
                    }),
                    V.struct = z,
                    u[r.id] = V
                }
                break;
            case o._SET_MULTILEVEL_VALUE:
                if (r.id) {
                    var K = r.data,
                    q = c.
                default.assign({},
                    a[r.id] || {}),
                    Y = s.getComponent(r.id);
                    if (null != K.lvl) {
                        q.current = (q.current || []).slice(0, K.lvl),
                        K.opt && (q.current[K.lvl] = K.opt);
                        var Q = q.current.length,
                        J = Q > 0 ? q.current[Q - 1] : null; ! J || !Y.isAllowPartEmpty && J.hasNext ? q.id = null: q.id = J.sId,
                        a[r.id] && a[r.id].id === q.id || (q.value = null)
                    } else if (null != K.node && null != K.value) {
                        if (!c.
                    default.find(q.current, {
                            sId: K.node
                        })) {
                            var X = c.
                        default.find(Y.options, {
                                sId: K.node
                            });
                            if (!X || 3 !== X.type) {
                                console.error("ILLEGAL NODE :", K.node);
                                break
                            }
                            q.current = [].concat(q.current, X)
                        }
                        q.id = K.node,
                        q.value = K.value || null
                    }
                    u[r.id] = q
                }
                break;
            case o._SET_SIGN_VALUE:
                r.id && (u[r.id] = r.value);
                break;
            case o._SET_CTCF_CNID_VALUE:
                r.id && (u[r.id] = {
                    value: r.value
                });
                break;
            case o._BLUR_CTCF_CNID_VALUE:
                r.id && (a[r.id] && a[r.id].value === r.value || (u[r.id] = {
                    value: r.value
                }));
                break;
            case o._SET_CTCF_CNVEHICLE_VALUE:
                r.id && (u[r.id] = c.
            default.assign({},
                a[r.id], r.data));
                break;
            case o._BLUR_CTCF_CNVEHICLE_VALUE:
                if (r.id) {
                    var Z = s.getComponent(r.id),
                    ee = r.data;
                    if (2 !== Z.componentType) {
                        var te = r.data.vpVal.substr(0, 1),
                        ne = c.
                    default.find(d.CF_VEHICLE_TYPE_SELECT, {
                            value: te
                        });
                        ne && (ee = {
                            vpType: ne.id,
                            vpVal: r.data.vpVal.substr(1)
                        })
                    }
                    u[r.id] = c.
                default.assign({},
                    a[r.id], ee)
                }
                break;
            case o._CHECK_CNID_LOCATION_FAILED:
            case o._CHECK_CNID_LOCATION_SUCCEED:
                u[r.id] = c.
            default.assign({},
                a[r.id], {
                    location: r.data
                });
                break;
            case o._SET_CTCF_CURRENCY:
                r.id && r.data && (u[r.id] = [].concat(a[r.id] || []), r.data.hasOwnProperty("type") && (u[r.id][0] = +r.data.type), r.data.hasOwnProperty("value") && (u[r.id][1] = r.data.value));
                break;
            case o._BLUR_CTCF_CURRENCY:
                if (u[r.id] = a[r.id].slice(), r.data && r.data.value) {
                    var ae = r.data.value,
                    re = l.
                default.localeStringToNumber(ae);
                    if (!isNaN(re) && c.
                default.isNumber(re)) {
                        var ie = s.getComponent(r.id);
                        1 === ie.isAcceptDecimals && 1 === ie.isLimitDecDigits && ie.decDigits && (re = re.toFixed( + ie.decDigits));
                        var oe = 1 === ie.isAcceptDecimals && 1 === ie.isLimitDecDigits;
                        ae = l.
                    default.localeNumberFormatter(re, oe ? +ie.decDigits: null, oe ? +ie.decDigits: null, !1)
                    }
                    u[r.id][1] = ae
                } else u[r.id][1] = ""
            }
            return c.
        default.isEmpty(u) ? a: c.
        default.assign({},
            a, u)
        }
    }
},
function(t, n, a) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.payment = void 0;
    var i = a(6),
    o = r(i),
    s = a(38),
    l = a(68),
    u = r(l);
    n.payment = function(t) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments[1],
            a = {};
            switch (n.type) {
            case s._CHANGE_PAYMENT_METHOD:
                a.type = n.id;
                break;
            case s._CHANGE_USE_MBRM_BALANCE:
                a.useMemberBalance = n.data;
                break;
            case s._CHECK_MBRM_BALANCE_SUCCEED:
                a.memberBalance = n.data,
                a.memberBalance && a.memberBalance.balance > 0 && (a.useMemberBalance = !0);
                break;
            case s._IFP_PENDING:
                if (n.data && n.data.cashier) {
                    if (a.cashier = n.data.cashier, a.cashier.inWechat = window.IN_WECHAT, a.cashier.randomCode = n.data.randomCode || null, n.data && n.data.ext && n.data.ext.ftkv) {
                        var r = n.data.ext.ftkv;
                        a.cashier.tkvCode = r.code,
                        a.cashier.tkvQrUrl = r.qrUrl
                    }
                    n.raw && (a.cashier.redirectUrl = (0, u.
                default)(n.raw.data))
                }
                break;
            case s._IFP_FINISH_PAY:
                n.data && (a.paymentRes = n.data)
            }
            return o.
        default.isEmpty(a) ? t: o.
        default.assign({},
            t, a)
        }
    }
},
function(t, n, a) {
default = z;
    var Y = a(6),
    Q = r(Y),
    J = a(42),
    X = a(38),
    Z = a(122),
    ee = r(Z),
    te = a(123),
    ne = a(90),
    ae = a(17),
    re = a(57),
    ie = a(55),
    oe = a(8),
    se = a(96),
    le = a(154),
    ue = regeneratorRuntime.mark(s),
    ce = regeneratorRuntime.mark(l),
    de = regeneratorRuntime.mark(u),
    fe = regeneratorRuntime.mark(c),
    me = regeneratorRuntime.mark(d),
    pe = regeneratorRuntime.mark(f),
    he = regeneratorRuntime.mark(m),
    ge = regeneratorRuntime.mark(p),
    _e = regeneratorRuntime.mark(h),
    ve = regeneratorRuntime.mark(g),
    be = regeneratorRuntime.mark(_),
    ye = regeneratorRuntime.mark(v),
    Ee = regeneratorRuntime.mark(b),
    Ce = regeneratorRuntime.mark(y),
    Te = regeneratorRuntime.mark(E),
    Se = regeneratorRuntime.mark(C),
    Me = regeneratorRuntime.mark(T),
    Ie = regeneratorRuntime.mark(S),
    Ne = regeneratorRuntime.mark(M),
    Ae = regeneratorRuntime.mark(N),
    ke = regeneratorRuntime.mark(A),
    xe = regeneratorRuntime.mark(k),
    De = regeneratorRuntime.mark(x),
    Oe = regeneratorRuntime.mark(D),
    Pe = regeneratorRuntime.mark(P),
    Le = regeneratorRuntime.mark(L),
    we = regeneratorRuntime.mark(w),
    Re = regeneratorRuntime.mark(R),
    Fe = regeneratorRuntime.mark(F),
    Ue = regeneratorRuntime.mark(U),
    Be = regeneratorRuntime.mark(B),
    He = regeneratorRuntime.mark(H),
    je = regeneratorRuntime.mark(j),
    Ge = regeneratorRuntime.mark(G),
    We = regeneratorRuntime.mark(W),
    Ve = regeneratorRuntime.mark(V),
    ze = regeneratorRuntime.mark(z),
    Ke = +new Date,
    qe = function(t) {
        var n = "6A5376385A4D6D4255666735494B566C5041585758675632244B3044555E266F26436F36255533684847535062582A446E58317A2A6B6B396C3338715331794A";
        t = t || "";
        for (var a = 0,
        r = n.length; a < r; a += 2) t += String.fromCharCode(parseInt(n.substring(a, a + 2), 16));
        return (0, ee.
    default)(t)
    },
    Ye = function(t) {
        if (void 0 !== t) {
            var n = "Hdlyp#S^^Hu6xY&JpSEWR2!ZloDkv#kHRFokv9tr9bPQ3%Wxm$JRX3XXl%K4iGSq",
            a = "SHUAbk4nie^NFs6Em^0*d0GElWu4k1WwJ5s!!D*K^$Txw4XHRcnDYnH4a78z^1cN";
            return (0, ee.
        default)("" + n + t + a)
        }
        return null
    },
    Qe = function() {
        var t = null,
        n = null;
        return regeneratorRuntime.mark(function a() {
            var r, i, o, s, l;
            return regeneratorRuntime.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                case 0:
                    if (r = (0, ae.getDeviceInfo)(), i = r.isMobile, o = document.getElementById("import-css-str-theme"), s = window.rootPath("form/css/new/" + (i ? "mobile": "desktop") + ".css?v=" + (window._VER || "")), a.prev = 3, !n || n !== s) {
                        a.next = 7;
                        break
                    }
                    a.next = 13;
                    break;
                case 7:
                    return a.next = 9,
                    (0, J.call)(te.importCSS, s, o);
                case 9:
                    l = a.sent,
                    t && t.parentNode.removeChild(t),
                    t = l,
                    n = s;
                case 13:
                    a.next = 18;
                    break;
                case 15:
                    a.prev = 15,
                    a.t0 = a["catch"](3),
                    console.error(a.t0);
                case 18:
                case "end":
                    return a.stop()
                }
            },
            a, this, [[3, 15]])
        })
    } (),
    Je = function(t) {
        var n = null,
        a = re.COMPONENT_METAID_MAPPING[t] || t;
        return a ? (Q.
    default.forEach(le.FORM_CHUNK,
        function(t) {
            if (t.cpList.indexOf(a) > -1) return n = t.name,
            !1
        }), n) : n
    },
    Xe = function() {
        var t = 500,
        n = (0, oe.getCookie)("uvis") || (0, oe.getCookie)("uvi") || "",
        a = (0, ae.getFormStructure)(),
        r = null,
        i = (0, oe.calcTokenMod)(a.token, t),
        o = 0;
        do r = (0, oe.randomWord)(17),
        o = i - (0, oe.calcTokenMod)("" + r + n, t),
        o < 0 && (o = +o + t);
        while (o < 48 || o > 57 && o < 65 || o > 90 && o < 97 || o > 122);
        return "" + r + String.fromCharCode(o)
    },
    $e = !1;
    t.exports = n["default"]
},