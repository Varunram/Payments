/* Avoid `console` errors in browsers that lack a console. */
!function() {
    for (var e, n = function() {}, o = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = o.length, r = window.console = window.console || {}; i--;)
        e = o[i], r[e] || (r[e] = n)
}();

// jQuery RoyalSlider plugin. Custom build. Copyright Dmitry Semenov, http://dimsemenov.com
// jquery.royalslider v9.5.1
(function(n) {
    function u(b, f) {
        var c,
            a = this,
            e = window.navigator,
            g = e.userAgent.toLowerCase();
        a.uid = n.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var d = document.createElement("div").style,
            h = ["webkit", "Moz", "ms", "O"],
            k = "",
            l = 0,
            r;
        for (c = 0; c < h.length; c++)
            r = h[c], !k && r + "Transform" in d && (k = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
        (window.requestAnimationFrame = function(a, b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - l)),
                e = window.setTimeout(function() {
                    a(c + d)
                }, d);
            l = c + d;
            return e
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        });
        a.isIPAD = g.match(/(ipad)/);
        a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
        c = function(a) {
            a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) ||
            [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }(g);
        h = {};
        c.browser && (h[c.browser] = !0, h.version = c.version);
        h.chrome && (h.webkit = !0);
        a._a = h;
        a.isAndroid = -1 < g.indexOf("android");
        a.slider = n(b);
        a.ev = n(a);
        a._b = n(document);
        a.st = n.extend({}, n.fn.royalSlider.defaults, f);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        !a.st.allowCSS3 || h.webkit && !a.st.allowCSS3OnWebkit || (c = k + (k ? "T" : "t"), a._e = c + "ransform" in d && c + "ransition" in d, a._e && (a._f = k + (k ? "P" : "p") + "erspective" in d));
        k = k.toLowerCase();
        a._g = "-" + k + "-";
        a._h = "vertical" === a.st.slidesOrientation ?
        !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        n.each(n.rsModules, function(b, c) {
            "uid" !== b && c.call(a)
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function() {
            a._s(this, !0)
        });
        a.st.randomizeSlides && a.slides.sort(function() {
            return 0.5 - Math.random()
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId >
        a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.pointerMultitouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        d = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 =
        6 > a.numSlides ? a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++)
            a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = d = n(d + "</div></div>");
        var m = a.ns,
            k = function(b, c, d, e, f) {
                a._j1 = b + c + m;
                a._k1 = b + d + m;
                a._l1 = b + e + m;
                f && (a._m1 = b + f + m)
            };
        c = e.pointerEnabled;
        a.pointerEnabled = c || e.msPointerEnabled;
        a.pointerEnabled ? (a.hasTouch = !1, a._n1 = 0.2, a.pointerMultitouch = Boolean(1 < e[(c ? "m" : "msM") + "axTouchPoints"]), c ? k("pointer", "down", "move", "up",
        "cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 = a._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + m, a._k1 += " touchmove" + m, a._l1 += " touchend" + m, a._m1 += " touchcancel" + m, a._n1 = 0.5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = 0.2));
        a.st.sliderDrag && (a._f1 = !0, h.msie || h.opera ? a._g1 = a._h1 = "move" : h.mozilla ? (a._g1 = "-moz-grab", a._h1 = "-moz-grabbing") : h.webkit && -1 != e.platform.indexOf("Mac") && (a._g1 =
        "-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(d);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.pointerEnabled && a._p1.css((c ? "" : "-ms-") + "touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = n('<div class="rsPreloader"></div>');
        e = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (h.webkit && !h.chrome && a.slider.addClass("rsWebkit3d"),
        a._y1 = "translate3d(", a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, e.css(h))) : (a._x1 = "left", a._w1 = "top");
        var p;
        n(window).on("resize" + a.ns, function() {
            p && clearTimeout(p);
            p = setTimeout(function() {
                a.updateSliderSize()
            }, 50)
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        a.st.arrowsNavHideOnTouch &&
        (a.hasTouch || a.pointerMultitouch) && (a.st.arrowsNav = !1);
        a.st.arrowsNav && (e = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e), a._c2 = e.children(".rsArrowLeft").click(function(b) {
            b.preventDefault();
            a.prev()
        }), a._d2 = e.children(".rsArrowRight").click(function(b) {
            b.preventDefault();
            a.next()
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), e.one("mousemove.arrowshover",
        function() {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden")
        }), e.hover(function() {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
        }, function() {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
        })), a.ev.on("rsOnUpdateNav", function() {
            a._f2()
        }), a._f2());
        if (a._f1)
            a._p1.on(a._j1, function(b) {
                a._g2(b)
            });
        else
            a.dragSuccess = !1;
        var q = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        a._p1.click(function(b) {
            if (!a.dragSuccess) {
                var c = n(b.target).attr("class");
                if (-1 !== n.inArray(c, q) && a.toggleVideo())
                    return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (n(b.target).closest(".rsNoDrag", a._r1).length)
                        return !0;
                    a._i2(b)
                }
                a.ev.trigger("rsSlideClick", b)
            }
        }).on("click.rs", "a", function(b) {
            if (a.dragSuccess)
                return !1;
            a._h2 = !0;
            setTimeout(function() {
                a._h2 = !1
            }, 3)
        });
        a.ev.trigger("rsAfterInit")
    }
    n.rsModules || (n.rsModules = {
        uid: 0
    });
    u.prototype = {
        constructor: u,
        _i2: function(b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev()
        },
        _t: function() {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop)
                2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b
        },
        _s: function(b, f) {
            function c(b, c) {
                c ? g.images.push(b.attr(c)) : g.images.push(b.text());
                if (h) {
                    h = !1;
                    g.caption = "src" === c ? b.attr("alt") : b.contents();
                    g.image = g.images[0];
                    g.videoURL = b.attr("data-rsVideo");
                    var d = b.attr("data-rsw"),
                        e = b.attr("data-rsh");
                    "undefined" !== typeof d && !1 !== d && "undefined" !== typeof e && !1 !== e ? (g.iW = parseInt(d, 10), g.iH = parseInt(e, 10)) : a.st.imgWidth && a.st.imgHeight && (g.iW = a.st.imgWidth, g.iH = a.st.imgHeight)
                }
            }
            var a = this,
                e,
                g = {},
                d,
                h = !0;
            b = n(b);
            a._k2 = b;
            a.ev.trigger("rsBeforeParseNode", [b, g]);
            if (!g.stopParsing)
                return b = a._k2, g.id = a._r, g.contentAdded = !1, a._r++, g.images = [], g.isBig = !1, g.hasCover || (b.hasClass("rsImg") ? (d = b, e = !0) : (d = b.find(".rsImg"), d.length && (e = !0)), e ? (g.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function() {
                    var a = n(this);
                    a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a)
                })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (g.caption = d.remove()), g.content = b, a.ev.trigger("rsAfterParseNode", [b, g]), f && a.slides.push(g), 0 === g.images.length && (g.isLoaded = !0, g.isRendered = !1, g.isLoading = !1, g.images = null), g
        },
        _b2: function() {
            var b = this,
                f,
                c,
                a = function(a) {
                    37 === a ? b.prev() : 39 === a && b.next()
                };
            b._b.on("keydown" + b.ns, function(e) {
                b._l2 || (c = e.keyCode, 37 !== c && 39 !== c || f || (a(c), f = setInterval(function() {
                    a(c)
                },
                700)))
            }).on("keyup" + b.ns, function(a) {
                f && (clearInterval(f), f = null)
            })
        },
        goTo: function(b, f) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f)
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            n.removeData(this.slider, "royalSlider");
            n(window).off("resize" + this.ns);
            this.loadingTimeout && clearTimeout(this.loadingTimeout);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null
        },
        _n2: function(b, f) {
            function c(c, f, g) {
                c.isAdded ? (a(f, c), e(f, c)) : (g || (g = d.slidesJQ[f]), c.holder ? g = c.holder : (g = d.slidesJQ[f] = n(g), c.holder = g), c.appendOnLoaded = !1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded = !0)
            }
            function a(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
            }
            function e(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
            }
            function g(a) {
                if (l) {
                    if (a > r - 1)
                        return g(a - r);
                    if (0 > a)
                        return g(r + a)
                }
                return a
            }
            var d = this,
                h,
                k,
                l = d._z,
                r = d.numSlides;
            if (!isNaN(f))
                return g(f);
            var m = d.currSlideId,
                p,
                q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
                s = Math.min(2, q),
                v = !1,
                u = !1,
                t;
            for (k = m; k < m + 1 + s; k++)
                if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    v = !0;
                    break
                }
            for (k = m - 1; k > m - 1 - s; k--)
                if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    u = !0;
                    break
                }
            if (v)
                for (k = m; k < m + q + 1; k++)
                    t = g(k), p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides, (h = d.slides[t]) && c(h, t);
            if (u)
                for (k = m - 1; k > m - 1 - q; k--)
                    t = g(k), p = Math.floor((d._u - (m - k)) / r) * r, (h = d.slides[t]) && c(h, t);
            if (!b)
                for (s = g(m - q),
                m = g(m + q), q = s > m ? 0 : s, k = 0; k < r; k++)
                    s > m && k > s - 1 || !(k < q || k > m) || (h = d.slides[k]) && h.holder && (h.holder.detach(), h.isAdded = !1)
        },
        setItemHtml: function(b, f) {
            var c = this,
                a = function() {
                    if (!b.images)
                        b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
                    else if (!b.isLoading) {
                        var a,
                            f;
                        b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
                        a && !a.is("img") && a.each(function() {
                            var a = n(this),
                                c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = n(c) : a.replaceWith(c)
                        });
                        a = f ? b.content : b.content.find("img.rsImg");
                        k();
                        a.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig)
                            n("<img />").on("load.rs error.rs", function(a) {
                                n(this).off("load.rs error.rs");
                                e([this], !0)
                            }).attr("src", b.image);
                        else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            a = function(a) {
                                n(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && e(b.loaded, !1)
                            };
                            for (var g = 0; g < b.images.length; g++) {
                                var h = n("<img />");
                                b.numStartedLoad++;
                                h.on("load.rs error.rs",
                                a).attr("src", b.images[g])
                            }
                        }
                    }
                },
                e = function(a, c) {
                    if (a.length) {
                        var d = a[0];
                        if (c !== b.isBig)
                            (d = b.holder.children()) && 1 < d.length && l();
                        else if (b.iW && b.iH)
                            g();
                        else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH)
                            g();
                        else {
                            var e = new Image;
                            e.onload = function() {
                                e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function() {
                                    e.width && (b.iW = e.width, b.iH = e.height);
                                    g()
                                }, 1E3)
                            };
                            e.src = d.src
                        }
                    } else
                        g()
                },
                g = function() {
                    b.isLoaded = !0;
                    b.isLoading = !1;
                    d();
                    l();
                    h()
                },
                d = function() {
                    if (!b.isAppended && c.ev) {
                        var a = c.st.visibleNearby,
                            d = b.id - c._o;
                        f || b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 || c._l2) || -1 !== d && 1 !== d) || (a = {
                            visibility: "visible",
                            opacity: 0
                        }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                            b.content.css("opacity", 1)
                        }, 16));
                        b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                        b.isAppended = !0;
                        b.isLoaded && (c._q2(b), h());
                        b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                            c.ev.trigger("rsMaybeSizeReady", b)
                        }, 100))
                    }
                },
                h = function() {
                    !b.loadedTriggered &&
                    c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
                },
                k = function() {
                    c.st.usePreloader && b.holder.html(c._q1.clone())
                },
                l = function(a) {
                    c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
                };
            b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
        },
        _p2: function(b, f, c) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1
        },
        _g2: function(b, f) {
            var c = this,
                a,
                e = "touchstart" === b.type;
            c._s2 = e;
            c.ev.trigger("rsDragStart");
            if (n(b.target).closest(".rsNoDrag", c._r1).length)
                return c.dragSuccess = !1, !0;
            !f && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2)
                e && (c._v2 = !0);
            else {
                e && (c._v2 = !1);
                c._w2();
                if (e) {
                    var g = b.originalEvent.touches;
                    if (g && 0 < g.length)
                        a = g[0], 1 < g.length && (c._v2 = !0);
                    else
                        return
                } else
                    b.preventDefault(), a = b, c.pointerEnabled && (a = a.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function(a) {
                    c._x2(a, f)
                }).on(c._l1, function(a) {
                    c._y2(a, f)
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = a.pageX;
                c._c3 = a.pageY;
                c._d3 = c._v = (f ? c._e3 : c._h) ? a.pageX : a.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = f ? c._i3 : c._p;
                c._j3 = (new Date).getTime();
                if (e)
                    c._e1.on(c._m1, function(a) {
                        c._y2(a, f)
                    })
            }
        },
        _k3: function(b, f) {
            if (this._l3) {
                var c = this._m3,
                    a = b.pageX - this._b3,
                    e = b.pageY - this._c3,
                    g = this._h3 + a,
                    d = this._h3 + e,
                    h = f ? this._e3 : this._h,
                    g = h ? g : d,
                    d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== e && (this._g3 = 0 < e ? 1 : -1);
                d = h ? this._b3 : this._c3;
                a = h ? a : e;
                f ? g > this._n3 ? g = this._h3 + a * this._n1 : g < this._o3 && (g = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId &&
                0 < d - this._d3 && (g = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (g = this._h3 + a * this._n1));
                this._h3 = g;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                f ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(b, f) {
            var c = this,
                a,
                e = "touchmove" === b.type;
            if (!c._s2 || e) {
                if (e) {
                    if (c._r3)
                        return;
                    var g = b.originalEvent.touches;
                    if (g) {
                        if (1 < g.length)
                            return;
                        a = g[0]
                    } else
                        return
                } else
                    a = b, c.pointerEnabled && (a = a.originalEvent);
                c._a3 || (c._e && (f ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
                    c._l2 && (c._t3 =
                    requestAnimationFrame(h), c._u3 && c._k3(c._u3, f))
                }());
                if (c._l3)
                    b.preventDefault(), c._m3 = (new Date).getTime(), c._u3 = a;
                else if (g = f ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (g ? -7 : 7), 7 < a) {
                    if (g)
                        b.preventDefault(), c._z2 = "x";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                } else if (-7 > a) {
                    if (!g)
                        b.preventDefault(), c._z2 = "y";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                }
            }
        },
        _v3: function(b, f) {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2(b)
        },
        _y2: function(b, f) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a
            }
            function a(a, b) {
                if (e._l ||
                f)
                    h = (-e._u - e._d1) * e._w, k = Math.abs(e._p - h), e._c = k / b, a && (e._c += 250), e._c = c(e._c), e._x3(h, !1)
            }
            var e = this,
                g,
                d,
                h,
                k;
            g = -1 < b.type.indexOf("touch");
            if (!e._s2 || g)
                if (e._s2 = !1, e.ev.trigger("rsDragRelease"), e._u3 = null, e._l2 = !1, e._r3 = !1, e._l3 = !1, e._m3 = 0, cancelAnimationFrame(e._t3), e._a3 && (f ? e._q3(e._h3) : e._l && e._p3(e._h3)), e._b.off(e._k1).off(e._l1), g && e._e1.off(e._m1), e._i1(), !e._a3 && !e._v2 && f && e._w3) {
                    var l = n(b.target).closest(".rsNavItem");
                    l.length && e.goTo(l.index())
                } else {
                    d = f ? e._e3 : e._h;
                    if (!e._a3 || "y" === e._z2 &&
                    d || "x" === e._z2 && !d)
                        if (!f && e._t2) {
                            e._t2 = !1;
                            if (e.st.navigateByClick) {
                                e._i2(e.pointerEnabled ? b.originalEvent : b);
                                e.dragSuccess = !0;
                                return
                            }
                            e.dragSuccess = !0
                        } else {
                            e._t2 = !1;
                            e.dragSuccess = !1;
                            return
                        }
                    else
                        e.dragSuccess = !0;
                    e._t2 = !1;
                    e._z2 = "";
                    var r = e.st.minSlideOffset;
                    g = g ? b.originalEvent.changedTouches[0] : e.pointerEnabled ? b.originalEvent : b;
                    var m = d ? g.pageX : g.pageY,
                        p = e._d3;
                    g = e._v;
                    var q = e.currSlideId,
                        s = e.numSlides,
                        v = d ? e._f3 : e._g3,
                        u = e._z;
                    Math.abs(m - p);
                    g = m - g;
                    d = (new Date).getTime() - e._j3;
                    d = Math.abs(g) / d;
                    if (0 === v || 1 >=
                    s)
                        a(!0, d);
                    else {
                        if (!u && !f)
                            if (0 >= q) {
                                if (0 < v) {
                                    a(!0, d);
                                    return
                                }
                            } else if (q >= s - 1 && 0 > v) {
                                a(!0, d);
                                return
                            }
                        if (f) {
                            h = e._i3;
                            if (h > e._n3)
                                h = e._n3;
                            else if (h < e._o3)
                                h = e._o3;
                            else {
                                m = d * d / 0.006;
                                l = -e._i3;
                                p = e._y3 - e._z3 + e._i3;
                                0 < g && m > l ? (l += e._z3 / (15 / (m / d * 0.003)), d = d * l / m, m = l) : 0 > g && m > p && (p += e._z3 / (15 / (m / d * 0.003)), d = d * p / m, m = p);
                                l = Math.max(Math.round(d / 0.003), 50);
                                h += m * (0 > g ? -1 : 1);
                                if (h > e._n3) {
                                    e._a4(h, l, !0, e._n3, 200);
                                    return
                                }
                                if (h < e._o3) {
                                    e._a4(h, l, !0, e._o3, 200);
                                    return
                                }
                            }
                            e._a4(h, l, !0)
                        } else
                            l = function(a) {
                                var b = Math.floor(a / e._w);
                                a - b * e._w >
                                r && b++;
                                return b
                            }, p + r < m ? 0 > v ? a(!1, d) : (l = l(m - p), e._m2(e.currSlideId - l, c(Math.abs(e._p - (-e._u - e._d1 + l) * e._w) / d), !1, !0, !0)) : p - r > m ? 0 < v ? a(!1, d) : (l = l(p - m), e._m2(e.currSlideId + l, c(Math.abs(e._p - (-e._u - e._d1 - l) * e._w) / d), !1, !0, !0)) : a(!1, d)
                    }
                }
        },
        _p3: function(b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
        },
        updateSliderSize: function(b) {
            var f,
                c;
            if (this.st.autoScaleSlider) {
                var a = this.st.autoScaleSliderWidth,
                    e = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", e / a * f), f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", a / e * c), c = this.slider.height()), f = this.slider.width())
            } else
                f = this.slider.width(), c = this.slider.height();
            if (b || f != this.width || c != this.height) {
                this.width = f;
                this.height = c;
                this._b4 = f;
                this._c4 = c;
                this.ev.trigger("rsBeforeSizeSet");
                this.ev.trigger("rsAfterSizePropSet");
                this._e1.css({
                    width: this._b4,
                    height: this._c4
                });
                this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                this._d4 = this.st.imageScalePadding;
                for (f = 0; f < this.slides.length; f++)
                    b = this.slides[f], b.positionSet = !1, b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
                if (this._e4)
                    for (f = 0; f < this._e4.length; f++)
                        b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
                this._n2();
                this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset();
            this._j2 =
            this._j2[this._i]
        },
        appendSlide: function(b, f) {
            var c = this._s(b);
            if (isNaN(f) || f > this.numSlides)
                f = this.numSlides;
            this.slides.splice(f, 0, c);
            this.slidesJQ.splice(f, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
            f < this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [c, f]);
            this._f4(f);
            f === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(b) {
            var f = this.slides[b];
            f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--,
            this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(b) {
            var f = this;
            b = f.numSlides;
            b = 0 >= f._u ? 0 : Math.floor(f._u / b);
            f.numSlides = f.slides.length;
            0 === f.numSlides ? (f.currSlideId = f._d1 = f._u = 0, f.currSlide = f._g4 = null) : f._u = b * f.numSlides + f.currSlideId;
            for (b = 0; b < f.numSlides; b++)
                f.slides[b].id = b;
            f.currSlide = f.slides[f.currSlideId];
            f._r1 = f.slidesJQ[f.currSlideId];
            f.currSlideId >= f.numSlides ?
            f.goTo(f.numSlides - 1) : 0 > f.currSlideId && f.goTo(0);
            f._t();
            f._l && f._z && f._p1.css(f._g + f._u1, "0ms");
            f._h4 && clearTimeout(f._h4);
            f._h4 = setTimeout(function() {
                f._l && f._p3((-f._u - f._d1) * f._w);
                f._n2();
                f._l || f._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14);
            f.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) :
            (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(b) {
            this._m2("next", this.st.transitionSpeed, !0, !b)
        },
        prev: function(b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b)
        },
        _m2: function(b, f, c, a, e) {
            var g = this,
                d,
                h,
                k;
            g.ev.trigger("rsBeforeMove", [b, a]);
            k = "next" === b ? g.currSlideId + 1 : "prev" === b ? g.currSlideId - 1 : b = parseInt(b, 10);
            if (!g._z) {
                if (0 > k) {
                    g._i4("left", !a);
                    return
                }
                if (k >= g.numSlides) {
                    g._i4("right", !a);
                    return
                }
            }
            g._r2 && (g._u2(!0), c = !1);
            h = k - g.currSlideId;
            k = g._o2 = g.currSlideId;
            var l = g.currSlideId + h;
            a = g._u;
            var n;
            g._z ? (l = g._n2(!1, l), a += h) : a = l;
            g._o = l;
            g._g4 = g.slidesJQ[g.currSlideId];
            g._u = a;
            g.currSlideId = g._o;
            g.currSlide = g.slides[g.currSlideId];
            g._r1 = g.slidesJQ[g.currSlideId];
            var l = g.st.slidesDiff,
                m = Boolean(0 < h);
            h = Math.abs(h);
            var p = Math.floor(k / g._y),
                q = Math.floor((k + (m ? l : -l)) / g._y),
                p = (m ? Math.max(p, q) : Math.min(p, q)) * g._y + (m ? g._y - 1 : 0);
            p > g.numSlides - 1 ? p = g.numSlides - 1 : 0 > p && (p = 0);
            k = m ? p - k : k - p;
            k > g._y && (k = g._y);
            if (h > k + l)
                for (g._d1 += (h - (k + l)) * (m ? -1 : 1), f *= 1.4, k = 0; k < g.numSlides; k++)
                    g.slides[k].positionSet =
                    !1;
            g._c = f;
            g._n2(!0);
            e || (n = !0);
            d = (-a - g._d1) * g._w;
            n ? setTimeout(function() {
                g._j4 = !1;
                g._x3(d, b, !1, c);
                g.ev.trigger("rsOnUpdateNav")
            }, 0) : (g._x3(d, b, !1, c), g.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId ===
            this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(b, f, c, a, e) {
            function g() {
                var a;
                h && (a = h.data("rsTimeout")) && (h !== k && h.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), h.data("rsTimeout", ""));
                if (a = k.data("rsTimeout"))
                    clearTimeout(a), k.data("rsTimeout", "")
            }
            var d = this,
                h,
                k,
                l = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] :
            n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function() {
                d._p3(b)
            }, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function() {
                l[d._g + d._u1] = "0ms";
                l.zIndex = 0;
                l.display = "none";
                h.data("rsTimeout", "");
                h.css(l);
                setTimeout(function() {
                    h.css("opacity", 0)
                }, 16)
            }, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout",
            setTimeout(function() {
                k.css(d._g + d._u1, d._c + "ms");
                k.data("rsTimeout", setTimeout(function() {
                    k.css("opacity", 1);
                    k.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, k.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function() {
                h.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = e ? setTimeout(function() {
                d.loadingTimeout = null;
                e.call()
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null;
                d._k4(f)
            }, d._c + 60)
        },
        _u2: function(b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l)
                if (!this._e)
                    this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
                else {
                    if (!b) {
                        b = this._p;
                        var f = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms");
                        b !== f && this._p3(f)
                    }
                }
            else
                20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var b =
                window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                f = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10)
        },
        _m4: function(b, f) {
            return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
        },
        _k4: function(b) {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(b, f) {
            var c = this,
                a = (-c._u - c._d1) *
                c._w;
            if (0 !== c.numSlides && !c._r2)
                if (c.st.loopRewind)
                    c.goTo("left" === b ? c.numSlides - 1 : 0, f);
                else if (c._l) {
                    c._c = 200;
                    var e = function() {
                        c._r2 = !1
                    };
                    c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function() {
                        c._r2 = !1;
                        c._x3(a, "", !1, !0, e)
                    })
                }
        },
        _q2: function(b, f) {
            if (!b.isRendered) {
                var c = b.content,
                    a = "rsMainSlideImage",
                    e,
                    g = this.st.imageAlignCenter,
                    d = this.st.imageScaleMode,
                    h;
                b.videoURL && (a = "rsVideoContainer", "fill" !== d ? e = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
                    width: "100%",
                    height: "100%"
                }), a = "rsMainSlideImage"));
                c.hasClass(a) ||
                (c = c.find("." + a));
                if (c) {
                    var k = b.iW,
                        l = b.iH;
                    b.isRendered = !0;
                    if ("none" !== d || g) {
                        a = "fill" !== d ? this._d4 : 0;
                        h = this._b4 - 2 * a;
                        var n = this._c4 - 2 * a,
                            m,
                            p,
                            q = {};
                        "fit-if-smaller" === d && (k > h || l > n) && (d = "fit");
                        if ("fill" === d || "fit" === d)
                            m = h / k, p = n / l, m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1, k = Math.ceil(k * m, 10), l = Math.ceil(l * m, 10);
                        "none" !== d && (q.width = k, q.height = l, e && c.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        g && (q.marginLeft = Math.floor((h - k) / 2) + a, q.marginTop = Math.floor((n - l) / 2) + a);
                        c.css(q)
                    }
                }
            }
        }
    };
    n.rsProto = u.prototype;
    n.fn.royalSlider = function(b) {
        var f = arguments;
        return this.each(function() {
            var c = n(this);
            if ("object" !== typeof b && b) {
                if ((c = c.data("royalSlider")) && c[b])
                    return c[b].apply(c, Array.prototype.slice.call(f, 1))
            } else
                c.data("royalSlider") || c.data("royalSlider", new u(c, b))
        })
    };
    n.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    n.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    };
    n.extend(jQuery.easing, {
        easeInOutSine: function(b, f, c, a, e) {
            return -a / 2 * (Math.cos(Math.PI * f / e) - 1) + c
        },
        easeOutSine: function(b, f, c, a, e) {
            return a * Math.sin(f / e * (Math.PI / 2)) + c
        },
        easeOutCubic: function(b, f, c, a, e) {
            return a * ((f = f / e - 1) * f * f + 1) + c
        }
    })
})(jQuery, window);

// iCheck plugin v 1.0.2  (https://github.com/fronteed/iCheck)
// iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed
(function(f) {
    function A(a, b, d) {
        var c = a[0],
            g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
            e = d == _update ? {
                checked: c[k],
                disabled: c[n],
                indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
            } : c[g];
        if (/^(ch|di|in)/.test(d) && !e)
            x(a, g);
        else if (/^(un|en|de)/.test(d) && e)
            q(a, g);
        else if (d == _update)
            for (var f in e)
                e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b)
                a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g)
        }
    }
    function x(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            u = b == _indeterminate,
            v = b == n,
            s = u ? _determinate : e ? y : "enabled",
            F = l(a, s + t(c[_type])),
            B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                    p = 'input[name="' + c.name + '"]',
                    p = w.length ? w.find(p) : f(p);
                p.each(function() {
                    this !== c && f(this).data(m) && q(f(this), b)
                })
            }
            u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d)
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "")
    }
    function q(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            f = b == _indeterminate,
            m = b == n,
            s = f ? _determinate : e ? y : "enabled",
            q = l(a, s + t(c[_type])),
            r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d)
                c[b] = !1;
            D(a, e, s, d)
        }
        !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "")
    }
    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b)
                a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
        }
    }
    function l(a, b, f) {
        if (a.data(m))
            return a.data(m).o[b + (f ? "" : "Class")]
    }
    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function D(a, b, f, c) {
        if (!c) {
            if (b)
                a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f))
        }
    }
    var m = "iCheck",
        C = m + "-helper",
        r = "radio",
        k = "checked",
        y = "un" + k,
        n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function(a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
            c = f(),
            g = function(a) {
                a.each(function() {
                    var a = f(this);
                    c = a.is(d) ? c.add(a) : c.add(a.find(d))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))
            return a = a.toLowerCase(), g(this), c.each(function() {
                var c =
                f(this);
                "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
                f.isFunction(b) && b()
            });
        if ("object" != typeof a && a)
            return this;
        var e = f.extend({
                checkedClass: k,
                disabledClass: n,
                indeterminateClass: _indeterminate,
                labelHover: !0
            }, a),
            l = e.handle,
            v = e.hoverClass || "hover",
            s = e.focusClass || "focus",
            t = e.activeClass || "active",
            B = !!e.labelHover,
            w = e.labelHoverClass || "hover",
            p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r)
            d = 'input[type="' + l + '"]';
        -50 > p && (p = -50);
        g(this);
        return c.each(function() {
            var a = f(this);
            E(a);
            var c = this,
                b = c.id,
                g = -p + "%",
                d = 100 + 2 * p + "%",
                d = {
                    position: "absolute",
                    top: g,
                    left: g,
                    display: "block",
                    width: d,
                    height: d,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                },
                g = _mobile ? {
                    position: "absolute",
                    visibility: "hidden"
                } : p ? d : {
                    position: "absolute",
                    opacity: 0
                },
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
                u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u && z.each(function() {
                h +=
                'aria-labelledby="';
                this.id ? h += this.id : (this.id = y, h += y);
                h += '"'
            });
            h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
            d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
            a.data(m, {
                o: e,
                s: a.attr("style")
            }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length)
                z.on(_click + ".i mouseover.i mouseout.i " + _touch, function(b) {
                    var d = b[_type],
                        e = f(this);
                    if (!c[n]) {
                        if (d == _click) {
                            if (f(b.target).is("a"))
                                return;
                            A(a, !1, !0)
                        } else
                            B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                        if (_mobile)
                            b.stopPropagation();
                        else
                            return !1
                    }
                });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click)
                    return !1;
                if ("keydown" == d && 32 == b)
                    return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r)
                    !c[k] && x(a, k);
                else if (/us|ur/.test(d))
                    h["blur" == d ? _remove : _add](s)
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(b) {
                var d =
                    b[_type],
                    e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click)
                        A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d))
                            h[_add](e);
                        else
                            h[_remove](e + " " + t);
                        if (z.length && B && e == v)
                            z[/ut|nd/.test(d) ? _remove : _add](w)
                    }
                    if (_mobile)
                        b.stopPropagation();
                    else
                        return !1
                }
            })
        })
    }
})(window.jQuery || window.Zepto);

/*! Selectric ϟ v1.9.3 (2015-04-23) - git.io/tjl9sQ - Copyright (c) 2015 Leonardo Santos - Dual licensed: MIT/GPL */
!function(e) {
    "use strict";
    var t = "selectric",
        s = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel",
        o = ".sl",
        i = {
            onChange: function(t) {
                e(t).change()
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            customClass: {
                prefix: t,
                camelCase: !1,
                overwrite: !0
            },
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}"
        },
        n = {
            add: function(e, t, s) {
                this[e] || (this[e] = {}), this[e][t] = s
            },
            remove: function(e, t) {
                delete this[e][t]
            }
        },
        l = {
            replaceDiacritics: function(e) {
                for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), s = t.length; s--;)
                    e = e.toLowerCase().replace(RegExp("[" + t[s] + "]", "g"), "aeiouncy".charAt(s));
                return e
            },
            format: function(e) {
                var t = arguments;
                return ("" + e).replace(/{(\d+|(\w+))}/g, function(e, s, o) {
                    return o && t[1] ? t[1][o] : t[s]
                })
            },
            nextEnabledItem: function(e, t) {
                for (; e[t = (t + 1) % e.length].disabled;)
                    ;
                return t
            },
            previousEnabledItem: function(e, t) {
                for (; e[t = (t > 0 ? t : e.length) - 1].disabled;)
                    ;
                return t
            },
            toDash: function(e) {
                return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            },
            triggerCallback: function(s, o) {
                var i = o.element,
                    a = o.options["on" + s];
                e.isFunction(a) && a.call(i, i, o), n[s] && e.each(n[s], function() {
                    this.call(i, i, o)
                }), e(i).trigger(t + "-" + l.toDash(s), o)
            }
        },
        a = e(document),
        r = e(window),
        c = function(n, c) {
            function d(t) {
                if (j.options = e.extend(!0, {}, i, j.options, t), j.classes = {}, j.element = n, l.triggerCallback("BeforeInit", j), j.options.disableOnMobile && Y)
                    return void (j.disableOnMobile = !0);
                C(!0);
                var o = j.options.customClass,
                    a = s.split(" "),
                    r = F.width();
                e.each(a, function(e, t) {
                    var s = o.prefix + t;
                    j.classes[t.toLowerCase()] = o.camelCase ? s : l.toDash(s)
                }), x = e("<input/>", {
                    "class": j.classes.input,
                    readonly: Y
                }), k = e("<div/>", {
                    "class": j.classes.items,
                    tabindex: -1
                }), T = e("<div/>", {
                    "class": j.classes.scroll
                }), D = e("<div/>", {
                    "class": o.prefix,
                    html: j.options.arrowButtonMarkup
                }), I = e('<p class="label"/>'), y = F.wrap("<div>").parent().append(D.prepend(I), k, x), A = {
                    open: m,
                    close: g,
                    destroy: C,
                    refresh: u,
                    init: d
                }, F.on(A).wrap('<div class="' + j.classes.hideselect + '">'), e.extend(j, A), $ = j.options.labelBuilder, j.options.inheritOriginalWidth && r > 0 && y.width(r), p()
            }
            function p() {
                j.items = [];
                var t = F.children(),
                    s = "<ul>",
                    i = t.filter(":selected").index(),
                    n = 0;
                B = S = ~i ? i : 0, (E = t.length) && (t.each(function() {
                    function t() {
                        var t = e(this),
                            o = t.html(),
                            i = t.prop("disabled"),
                            a = j.options.optionsItemBuilder;
                        j.items[n] = {
                            element: t,
                            value: t.val(),
                            text: o,
                            slug: l.replaceDiacritics(o),
                            disabled: i
                        }, s += l.format('<li data-index="{1}" class="{2}">{3}</li>', n, e.trim([n == B ? "selected" : "", n == E - 1 ? "last" : "", i ? "disabled" : ""].join(" ")), e.isFunction(a) ? a(j.items[n], t, n) : l.format(a, j.items[n])), n++
                    }
                    var o = e(this);
                    if (o.is("optgroup")) {
                        var i = o.prop("disabled"),
                            a = o.children();
                        s += l.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([j.classes.group, i ? "disabled" : "", o.prop("class")].join(" ")), j.classes.grouplabel, o.prop("label")), i && a.prop("disabled", !0), a.each(t), s += "</ul>"
                    } else
                        t.call(o)
                }), k.append(T.html(s + "</ul>")), I.html(e.isFunction($) ? $(j.items[B]) : l.format($, j.items[B]))), D.add(F).add(y).add(x).off(o), y.prop("class", [j.classes.wrapper, j.options.customClass.overwrite ? F.prop("class").replace(/\S+/g, j.options.customClass.prefix + "-$&") : F.prop("class"), j.options.responsive ? j.classes.responsive : ""].join(" ")), F.prop("disabled") ? (y.addClass(j.classes.disabled), x.prop("disabled", !0)) : (R = !0, y.removeClass(j.classes.disabled).on("mouseenter" + o + " mouseleave" + o, function(t) {
                    e(this).toggleClass(j.classes.hover), j.options.openOnHover && (clearTimeout(j.closeTimer), "mouseleave" == t.type ? j.closeTimer = setTimeout(g, j.options.hoverIntentTimeout) : m())
                }), D.on("click" + o, function(e) {
                    L ? g() : m(e)
                }), x.prop({
                    tabindex: P,
                    disabled: !1
                }).on("keypress" + o, h).on("keydown" + o, function(e) {
                    h(e), clearTimeout(j.resetStr), j.resetStr = setTimeout(function() {
                        x.val("")
                    }, j.options.keySearchTimeout);
                    var t = e.keyCode || e.which;
                    if (t > 36 && 41 > t) {
                        if (!j.options.allowWrap && (39 > t && 0 == S || t > 38 && S + 1 == j.items.length))
                            return;
                        b(l[(39 > t ? "previous" : "next") + "EnabledItem"](j.items, S))
                    }
                }).on("focusin" + o, function(e) {
                    x.one("blur", function() {
                        x.blur()
                    }), L || m(e)
                }).on("oninput" in x[0] ? "input" : "keyup", function() {
                    x.val().length && e.each(j.items, function(e, t) {
                        return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0
                    })
                }), F.prop("tabindex", !1), O = e("li", k.removeAttr("style")).on({
                    mousedown: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    },
                    click: function() {
                        return b(e(this).data("index"), !0), !1
                    }
                }).filter("[data-index]")), l.triggerCallback("Init", j)
            }
            function u() {
                l.triggerCallback("Refresh", j), p()
            }
            function h(e) {
                var t = e.keyCode || e.which;
                13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0))
            }
            function f() {
                var e = k.closest(":visible").children(":hidden").addClass(j.classes.tempshow),
                    t = j.options.maxHeight,
                    s = k.outerWidth(),
                    o = D.outerWidth() - (s - k.width());
                !j.options.expandToItemText || o > s ? M = o : (k.css("overflow", "scroll"), y.width(9e4), M = k.width(), k.css("overflow", ""), y.width("")), k.width(M).height() > t && k.height(t), e.removeClass(j.classes.tempshow)
            }
            function m(s) {
                l.triggerCallback("BeforeOpen", j), s && (s.preventDefault(), s.stopPropagation()), R && (f(), e("." + j.classes.hideselect, "." + j.classes.open).children()[t]("close"), L = !0, H = k.outerHeight(), W = k.height(), y.addClass(j.classes.open), x.val("").is(":focus") || x.focus(), a.on("click" + o, g).on("scroll" + o, v), v(), j.options.preventWindowScroll && a.on("mousewheel" + o + " DOMMouseScroll" + o, "." + j.classes.scroll, function(t) {
                    var s = t.originalEvent,
                        o = e(this).scrollTop(),
                        i = 0;
                    "detail" in s && (i = -1 * s.detail), "wheelDelta" in s && (i = s.wheelDelta), "wheelDeltaY" in s && (i = s.wheelDeltaY), "deltaY" in s && (i = -1 * s.deltaY), (o == this.scrollHeight - W && 0 > i || 0 == o && i > 0) && t.preventDefault()
                }), w(S), l.triggerCallback("Open", j))
            }
            function v() {
                y.toggleClass(j.classes.above, y.offset().top + y.outerHeight() + H > r.scrollTop() + r.height())
            }
            function g() {
                if (l.triggerCallback("BeforeClose", j), B != S) {
                    l.triggerCallback("BeforeChange", j);
                    var t = j.items[S].text;
                    F.prop("selectedIndex", B = S).data("value", t), I.html(e.isFunction($) ? $(j.items[S]) : l.format($, j.items[S])), l.triggerCallback("Change", j)
                }
                a.off(o), y.removeClass(j.classes.open), L = !1, l.triggerCallback("Close", j)
            }
            function b(e, t) {
                void 0 != e && (j.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g()))
            }
            function w(e) {
                var t = O.eq(e).outerHeight(),
                    s = O[e].offsetTop,
                    o = T.scrollTop(),
                    i = s + 2 * t;
                T.scrollTop(i > o + H ? i - H : o > s - t ? s - t : o)
            }
            function C(e) {
                R && (k.add(D).add(x).remove(), !e && F.removeData(t).removeData("value"), F.prop("tabindex", P).off(o).off(A).unwrap().unwrap(), R = !1)
            }
            var x,
                k,
                T,
                D,
                I,
                y,
                O,
                S,
                B,
                H,
                W,
                M,
                E,
                A,
                $,
                j = this,
                F = e(n),
                L = !1,
                R = !1,
                Y = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
                P = F.prop("tabindex");
            d(c)
        };
    e.fn[t] = function(s) {
        return this.each(function() {
            var o = e.data(this, t);
            o && !o.disableOnMobile ? "" + s === s && o[s] ? o[s]() : o.init(s) : e.data(this, t, new c(this, s))
        })
    }, e.fn[t].hooks = n
}(jQuery);

/*! sly 1.3.0 - 30th Nov 2014 | https://github.com/darsain/sly */
!function(a, b, c) {
    "use strict";
    function d(b, p, q) {
        function K() {
            if (sb.initialized) {
                var c = 0,
                    d = Gb.length;
                if (yb.old = a.extend({}, yb), wb = tb ? 0 : ub[rb.horizontal ? "width" : "height"](), Bb = zb[rb.horizontal ? "width" : "height"](), xb = tb ? b : vb[rb.horizontal ? "outerWidth" : "outerHeight"](), Gb.length = 0, yb.start = 0, yb.end = H(xb - wb, 0), Rb) {
                    c = Ib.length, Hb = vb.children(rb.itemSelector), Ib.length = 0;
                    var e,
                        f = j(vb, rb.horizontal ? "paddingLeft" : "paddingTop"),
                        g = j(vb, rb.horizontal ? "paddingRight" : "paddingBottom"),
                        h = "border-box" === a(Hb).css("boxSizing"),
                        i = "none" !== Hb.css("float"),
                        l = 0,
                        m = Hb.length - 1;
                    xb = 0, Hb.each(function(b, c) {
                        var d = a(c),
                            h = d[rb.horizontal ? "outerWidth" : "outerHeight"](),
                            k = j(d, rb.horizontal ? "marginLeft" : "marginTop"),
                            n = j(d, rb.horizontal ? "marginRight" : "marginBottom"),
                            o = h + k + n,
                            p = !k || !n,
                            q = {};
                        q.el = c, q.size = p ? h : o, q.half = q.size / 2, q.start = xb + (p ? k : 0), q.center = q.start - G(wb / 2 - q.size / 2), q.end = q.start - wb + q.size, b || (xb += f), xb += o, rb.horizontal || i || n && k && b > 0 && (xb -= I(k, n)), b === m && (q.end += g, xb += g, l = p ? n : 0), Ib.push(q), e = q
                    }), vb[0].style[rb.horizontal ? "width" : "height"] = (h ? xb : xb - f - g) + "px", xb -= l, Ib.length ? (yb.start = Ib[0][Pb ? "center" : "start"], yb.end = Pb ? e.center : xb > wb ? e.end : yb.start) : yb.start = yb.end = 0
                }
                if (yb.center = G(yb.end / 2 + yb.start / 2), V(), Ab.length && Bb > 0 && (rb.dynamicHandle ? (Cb = yb.start === yb.end ? Bb : G(Bb * wb / xb), Cb = k(Cb, rb.minHandleSize, Bb), Ab[0].style[rb.horizontal ? "width" : "height"] = Cb + "px") : Cb = Ab[rb.horizontal ? "outerWidth" : "outerHeight"](), Db.end = Bb - Cb, ec || N()), !tb && wb > 0) {
                    var n = yb.start,
                        o = "";
                    if (Rb)
                        a.each(Ib, function(a, b) {
                            Pb ? Gb.push(b.center) : b.start + b.size > n && n <= yb.end && (n = b.start, Gb.push(n), n += wb, n > yb.end && n < yb.end + wb && Gb.push(yb.end))
                        });
                    else
                        for (; n - wb < yb.end;)
                            Gb.push(n), n += wb;
                    if (Eb[0] && d !== Gb.length) {
                        for (var p = 0; p < Gb.length; p++)
                            o += rb.pageBuilder.call(sb, p);
                        Fb = Eb.html(o).children(), Fb.eq(Jb.activePage).addClass(rb.activeClass)
                    }
                }
                if (Jb.slideeSize = xb, Jb.frameSize = wb, Jb.sbSize = Bb, Jb.handleSize = Cb, Rb) {
                    sb.initialized ? (Jb.activeItem >= Ib.length || 0 === c && Ib.length > 0) && T(Jb.activeItem >= Ib.length ? Ib.length - 1 : 0, !c) : (T(rb.startAt), sb[Qb ? "toCenter" : "toStart"](rb.startAt));
                    var q = Ib[Jb.activeItem];
                    L(Qb && q ? q.center : k(yb.dest, yb.start, yb.end))
                } else
                    sb.initialized ? L(k(yb.dest, yb.start, yb.end)) : L(rb.startAt, 1);
                ob("load")
            }
        }
        function L(a, b, c) {
            if (Rb && cc.released && !c) {
                var d = U(a),
                    e = a > yb.start && a < yb.end;
                Qb ? (e && (a = Ib[d.centerItem].center), Pb && rb.activateMiddle && T(d.centerItem)) : e && (a = Ib[d.firstItem].start)
            }
            cc.init && cc.slidee && rb.elasticBounds ? a > yb.end ? a = yb.end + (a - yb.end) / 6 : a < yb.start && (a = yb.start + (a - yb.start) / 6) : a = k(a, yb.start, yb.end), ac.start = +new Date, ac.time = 0, ac.from = yb.cur, ac.to = a, ac.delta = a - yb.cur, ac.tweesing = cc.tweese || cc.init && !cc.slidee, ac.immediate = !ac.tweesing && (b || cc.init && cc.slidee || !rb.speed), cc.tweese = 0, a !== yb.dest && (yb.dest = a, ob("change"), ec || M()), Z(), V(), W(), O()
        }
        function M() {
            if (sb.initialized) {
                if (!ec)
                    return ec = t(M), void (cc.released && ob("moveStart"));
                ac.immediate ? yb.cur = ac.to : ac.tweesing ? (ac.tweeseDelta = ac.to - yb.cur, D(ac.tweeseDelta) < .1 ? yb.cur = ac.to : yb.cur += ac.tweeseDelta * (cc.released ? rb.swingSpeed : rb.syncSpeed)) : (ac.time = I(+new Date - ac.start, rb.speed), yb.cur = ac.from + ac.delta * jQuery.easing[rb.easing](ac.time / rb.speed, ac.time, 0, 1, rb.speed)), ac.to === yb.cur ? (yb.cur = ac.to, cc.tweese = ec = 0) : ec = t(M), ob("move"), tb || (m ? vb[0].style[m] = n + (rb.horizontal ? "translateX" : "translateY") + "(" + -yb.cur + "px)" : vb[0].style[rb.horizontal ? "left" : "top"] = -G(yb.cur) + "px"), !ec && cc.released && ob("moveEnd"), N()
            }
        }
        function N() {
            Ab.length && (Db.cur = yb.start === yb.end ? 0 : ((cc.init && !cc.slidee ? yb.dest : yb.cur) - yb.start) / (yb.end - yb.start) * Db.end, Db.cur = k(G(Db.cur), Db.start, Db.end), _b.hPos !== Db.cur && (_b.hPos = Db.cur, m ? Ab[0].style[m] = n + (rb.horizontal ? "translateX" : "translateY") + "(" + Db.cur + "px)" : Ab[0].style[rb.horizontal ? "left" : "top"] = Db.cur + "px"))
        }
        function O() {
            Fb[0] && _b.page !== Jb.activePage && (_b.page = Jb.activePage, Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass), ob("activePage", _b.page))
        }
        function P() {
            bc.speed && yb.cur !== (bc.speed > 0 ? yb.end : yb.start) || sb.stop(), hc = cc.init ? t(P) : 0, bc.now = +new Date, bc.pos = yb.cur + (bc.now - bc.lastTime) / 1e3 * bc.speed, L(cc.init ? bc.pos : G(bc.pos)), cc.init || yb.cur !== yb.dest || ob("moveEnd"), bc.lastTime = bc.now
        }
        function Q(a, b, d) {
            if ("boolean" === e(b) && (d = b, b = c), b === c)
                L(yb[a], d);
            else {
                if (Qb && "center" !== a)
                    return;
                var f = sb.getPos(b);
                f && L(f[a], d, !Qb)
            }
        }
        function R(a) {
            return null != a ? i(a) ? a >= 0 && a < Ib.length ? a : -1 : Hb.index(a) : -1
        }
        function S(a) {
            return R(i(a) && 0 > a ? a + Ib.length : a)
        }
        function T(a, b) {
            var c = R(a);
            return !Rb || 0 > c ? !1 : ((_b.active !== c || b) && (Hb.eq(Jb.activeItem).removeClass(rb.activeClass), Hb.eq(c).addClass(rb.activeClass), _b.active = Jb.activeItem = c, W(), ob("active", c)), c)
        }
        function U(a) {
            a = k(i(a) ? a : yb.dest, yb.start, yb.end);
            var b = {},
                c = Pb ? 0 : wb / 2;
            if (!tb)
                for (var d = 0, e = Gb.length; e > d; d++) {
                    if (a >= yb.end || d === Gb.length - 1) {
                        b.activePage = Gb.length - 1;
                        break
                    }
                    if (a <= Gb[d] + c) {
                        b.activePage = d;
                        break
                    }
                }
            if (Rb) {
                for (var f = !1, g = !1, h = !1, j = 0, l = Ib.length; l > j; j++)
                    if (f === !1 && a <= Ib[j].start + Ib[j].half && (f = j), h === !1 && a <= Ib[j].center + Ib[j].half && (h = j), j === l - 1 || a <= Ib[j].end + Ib[j].half) {
                        g = j;
                        break
                    }
                b.firstItem = i(f) ? f : 0, b.centerItem = i(h) ? h : b.firstItem, b.lastItem = i(g) ? g : b.centerItem
            }
            return b
        }
        function V(b) {
            a.extend(Jb, U(b))
        }
        function W() {
            var a = yb.dest <= yb.start,
                b = yb.dest >= yb.end,
                c = a ? 1 : b ? 2 : 3;
            if (_b.slideePosState !== c && (_b.slideePosState = c, Yb.is("button,input") && Yb.prop("disabled", a), Zb.is("button,input") && Zb.prop("disabled", b), Yb.add(Vb)[a ? "addClass" : "removeClass"](rb.disabledClass), Zb.add(Ub)[b ? "addClass" : "removeClass"](rb.disabledClass)), _b.fwdbwdState !== c && cc.released && (_b.fwdbwdState = c, Vb.is("button,input") && Vb.prop("disabled", a), Ub.is("button,input") && Ub.prop("disabled", b)), Rb) {
                var d = 0 === Jb.activeItem,
                    e = Jb.activeItem >= Ib.length - 1,
                    f = d ? 1 : e ? 2 : 3;
                _b.itemsButtonState !== f && (_b.itemsButtonState = f, Wb.is("button,input") && Wb.prop("disabled", d), Xb.is("button,input") && Xb.prop("disabled", e), Wb[d ? "addClass" : "removeClass"](rb.disabledClass), Xb[e ? "addClass" : "removeClass"](rb.disabledClass))
            }
        }
        function X(a, b, c) {
            if (a = S(a), b = S(b), a > -1 && b > -1 && a !== b && (!c || b !== a - 1) && (c || b !== a + 1)) {
                Hb.eq(a)[c ? "insertAfter" : "insertBefore"](Ib[b].el);
                var d = b > a ? a : c ? b : b - 1,
                    e = a > b ? a : c ? b + 1 : b,
                    f = a > b;
                a === Jb.activeItem ? _b.active = Jb.activeItem = c ? f ? b + 1 : b : f ? b : b - 1 : Jb.activeItem > d && Jb.activeItem < e && (_b.active = Jb.activeItem += f ? 1 : -1), K()
            }
        }
        function Y(a, b) {
            for (var c = 0, d = $b[a].length; d > c; c++)
                if ($b[a][c] === b)
                    return c;
            return -1
        }
        function Z() {
            cc.released && !sb.isPaused && sb.resume()
        }
        function $(a) {
            return G(k(a, Db.start, Db.end) / Db.end * (yb.end - yb.start)) + yb.start
        }
        function _() {
            cc.history[0] = cc.history[1], cc.history[1] = cc.history[2], cc.history[2] = cc.history[3], cc.history[3] = cc.delta
        }
        function ab(a) {
            cc.released = 0, cc.source = a, cc.slidee = "slidee" === a
        }
        function bb(b) {
            var c = "touchstart" === b.type,
                d = b.data.source,
                e = "slidee" === d;
            cc.init || !c && eb(b.target) || ("handle" !== d || rb.dragHandle && Db.start !== Db.end) && (!e || (c ? rb.touchDragging : rb.mouseDragging && b.which < 2)) && (c || f(b), ab(d), cc.init = 0, cc.$source = a(b.target), cc.touch = c, cc.pointer = c ? b.originalEvent.touches[0] : b, cc.initX = cc.pointer.pageX, cc.initY = cc.pointer.pageY, cc.initPos = e ? yb.cur : Db.cur, cc.start = +new Date, cc.time = 0, cc.path = 0, cc.delta = 0, cc.locked = 0, cc.history = [0, 0, 0, 0], cc.pathToLock = e ? c ? 30 : 10 : 0, u.on(c ? x : w, cb), sb.pause(1), (e ? vb : Ab).addClass(rb.draggedClass), ob("moveStart"), e && (fc = setInterval(_, 10)))
        }
        function cb(a) {
            if (cc.released = "mouseup" === a.type || "touchend" === a.type, cc.pointer = cc.touch ? a.originalEvent[cc.released ? "changedTouches" : "touches"][0] : a, cc.pathX = cc.pointer.pageX - cc.initX, cc.pathY = cc.pointer.pageY - cc.initY, cc.path = E(F(cc.pathX, 2) + F(cc.pathY, 2)), cc.delta = rb.horizontal ? cc.pathX : cc.pathY, !cc.init) {
                if (!(rb.horizontal ? D(cc.pathX) > D(cc.pathY) : D(cc.pathX) < D(cc.pathY)))
                    return db();
                cc.init = 1
            }
            f(a), !cc.locked && cc.path > cc.pathToLock && cc.slidee && (cc.locked = 1, cc.$source.on(z, g)), cc.released && (db(), rb.releaseSwing && cc.slidee && (cc.swing = (cc.delta - cc.history[0]) / 40 * 300, cc.delta += cc.swing, cc.tweese = D(cc.swing) > 10)), L(cc.slidee ? G(cc.initPos - cc.delta) : $(cc.initPos + cc.delta))
        }
        function db() {
            clearInterval(fc), u.off(cc.touch ? x : w, cb), (cc.slidee ? vb : Ab).removeClass(rb.draggedClass), setTimeout(function() {
                cc.$source.off(z, g)
            }), sb.resume(1), yb.cur === yb.dest && cc.init && ob("moveEnd"), cc.init = 0
        }
        function eb(b) {
            return ~a.inArray(b.nodeName, B) || a(b).is(rb.interactive)
        }
        function fb() {
            sb.stop(), u.off("mouseup", fb)
        }
        function gb(a) {
            switch (f(a), this) {
            case Ub[0]:
            case Vb[0]:
                sb.moveBy(Ub.is(this) ? rb.moveBy : -rb.moveBy), u.on("mouseup", fb);
                break;
            case Wb[0]:
                sb.prev();
                break;
            case Xb[0]:
                sb.next();
                break;
            case Yb[0]:
                sb.prevPage();
                break;
            case Zb[0]:
                sb.nextPage()
            }
        }
        function hb(a) {
            return dc.curDelta = (rb.horizontal ? a.deltaY || a.deltaX : a.deltaY) || -a.wheelDelta, dc.curDelta /= 1 === a.deltaMode ? 3 : 100, Rb ? (o = +new Date, dc.last < o - dc.resetTime && (dc.delta = 0), dc.last = o, dc.delta += dc.curDelta, D(dc.delta) < 1 ? dc.finalDelta = 0 : (dc.finalDelta = G(dc.delta / 1), dc.delta %= 1), dc.finalDelta) : dc.curDelta
        }
        function ib(a) {
            var b = +new Date;
            if (J + 300 > b)
                return void (J = b);
            if (rb.scrollBy && yb.start !== yb.end) {
                var c = hb(a.originalEvent);
                (rb.scrollTrap || c > 0 && yb.dest < yb.end || 0 > c && yb.dest > yb.start) && f(a, 1), sb.slideBy(rb.scrollBy * c)
            }
        }
        function jb(a) {
            rb.clickBar && a.target === zb[0] && (f(a), L($((rb.horizontal ? a.pageX - zb.offset().left : a.pageY - zb.offset().top) - Cb / 2)))
        }
        function kb(a) {
            if (rb.keyboardNavBy)
                switch (a.which) {
                case rb.horizontal ? 37 : 38:
                    f(a), sb["pages" === rb.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case rb.horizontal ? 39 : 40:
                    f(a), sb["pages" === rb.keyboardNavBy ? "nextPage" : "next"]()
                }
        }
        function lb(a) {
            return eb(this) ? void a.stopPropagation() : void (this.parentNode === vb[0] && sb.activate(this))
        }
        function mb() {
            this.parentNode === Eb[0] && sb.activatePage(Fb.index(this))
        }
        function nb(a) {
            rb.pauseOnHover && sb["mouseenter" === a.type ? "pause" : "resume"](2)
        }
        function ob(a, b) {
            if ($b[a]) {
                for (qb = $b[a].length, C.length = 0, pb = 0; qb > pb; pb++)
                    C.push($b[a][pb]);
                for (pb = 0; qb > pb; pb++)
                    C[pb].call(sb, a, b)
            }
        }
        var pb,
            qb,
            rb = a.extend({}, d.defaults, p),
            sb = this,
            tb = i(b),
            ub = a(b),
            vb = ub.children().eq(0),
            wb = 0,
            xb = 0,
            yb = {
                start: 0,
                center: 0,
                end: 0,
                cur: 0,
                dest: 0
            },
            zb = a(rb.scrollBar).eq(0),
            Ab = zb.children().eq(0),
            Bb = 0,
            Cb = 0,
            Db = {
                start: 0,
                end: 0,
                cur: 0
            },
            Eb = a(rb.pagesBar),
            Fb = 0,
            Gb = [],
            Hb = 0,
            Ib = [],
            Jb = {
                firstItem: 0,
                lastItem: 0,
                centerItem: 0,
                activeItem: -1,
                activePage: 0
            },
            Kb = new l(ub[0]),
            Lb = new l(vb[0]),
            Mb = new l(zb[0]),
            Nb = new l(Ab[0]),
            Ob = "basic" === rb.itemNav,
            Pb = "forceCentered" === rb.itemNav,
            Qb = "centered" === rb.itemNav || Pb,
            Rb = !tb && (Ob || Qb || Pb),
            Sb = rb.scrollSource ? a(rb.scrollSource) : ub,
            Tb = rb.dragSource ? a(rb.dragSource) : ub,
            Ub = a(rb.forward),
            Vb = a(rb.backward),
            Wb = a(rb.prev),
            Xb = a(rb.next),
            Yb = a(rb.prevPage),
            Zb = a(rb.nextPage),
            $b = {},
            _b = {},
            ac = {},
            bc = {},
            cc = {
                released: 1
            },
            dc = {
                last: 0,
                delta: 0,
                resetTime: 200
            },
            ec = 0,
            fc = 0,
            gc = 0,
            hc = 0;
        tb || (b = ub[0]), sb.initialized = 0, sb.frame = b, sb.slidee = vb[0], sb.pos = yb, sb.rel = Jb, sb.items = Ib, sb.pages = Gb, sb.isPaused = 0, sb.options = rb, sb.dragging = cc, sb.reload = K, sb.getPos = function(a) {
            if (Rb) {
                var b = R(a);
                return -1 !== b ? Ib[b] : !1
            }
            var c = vb.find(a).eq(0);
            if (c[0]) {
                var d = rb.horizontal ? c.offset().left - vb.offset().left : c.offset().top - vb.offset().top,
                    e = c[rb.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: d,
                    center: d - wb / 2 + e / 2,
                    end: d - wb + e,
                    size: e
                }
            }
            return !1
        }, sb.moveBy = function(a) {
            bc.speed = a, !cc.init && bc.speed && yb.cur !== (bc.speed > 0 ? yb.end : yb.start) && (bc.lastTime = +new Date, bc.startPos = yb.cur, ab("button"), cc.init = 1, ob("moveStart"), s(hc), P())
        }, sb.stop = function() {
            "button" === cc.source && (cc.init = 0, cc.released = 1)
        }, sb.prev = function() {
            sb.activate(Jb.activeItem - 1)
        }, sb.next = function() {
            sb.activate(Jb.activeItem + 1)
        }, sb.prevPage = function() {
            sb.activatePage(Jb.activePage - 1)
        }, sb.nextPage = function() {
            sb.activatePage(Jb.activePage + 1)
        }, sb.slideBy = function(a, b) {
            a && (Rb ? sb[Qb ? "toCenter" : "toStart"](k((Qb ? Jb.centerItem : Jb.firstItem) + rb.scrollBy * a, 0, Ib.length)) : L(yb.dest + a, b))
        }, sb.slideTo = function(a, b) {
            L(a, b)
        }, sb.toStart = function(a, b) {
            Q("start", a, b)
        }, sb.toEnd = function(a, b) {
            Q("end", a, b)
        }, sb.toCenter = function(a, b) {
            Q("center", a, b)
        }, sb.getIndex = R, sb.activate = function(a, b) {
            var c = T(a);
            rb.smart && c !== !1 && (Qb ? sb.toCenter(c, b) : c >= Jb.lastItem ? sb.toStart(c, b) : c <= Jb.firstItem ? sb.toEnd(c, b) : Z())
        }, sb.activatePage = function(a, b) {
            i(a) && L(Gb[k(a, 0, Gb.length - 1)], b)
        }, sb.resume = function(a) {
            !rb.cycleBy || !rb.cycleInterval || "items" === rb.cycleBy && !Ib[0] || a < sb.isPaused || (sb.isPaused = 0, gc ? gc = clearTimeout(gc) : ob("resume"), gc = setTimeout(function() {
                switch (ob("cycle"), rb.cycleBy) {
                case "items":
                    sb.activate(Jb.activeItem >= Ib.length - 1 ? 0 : Jb.activeItem + 1);
                    break;
                case "pages":
                    sb.activatePage(Jb.activePage >= Gb.length - 1 ? 0 : Jb.activePage + 1)
                }
            }, rb.cycleInterval))
        }, sb.pause = function(a) {
            a < sb.isPaused || (sb.isPaused = a || 100, gc && (gc = clearTimeout(gc), ob("pause")))
        }, sb.toggle = function() {
            sb[gc ? "pause" : "resume"]()
        }, sb.set = function(b, c) {
            a.isPlainObject(b) ? a.extend(rb, b) : rb.hasOwnProperty(b) && (rb[b] = c)
        }, sb.add = function(b, c) {
            var d = a(b);
            Rb ? (null == c || !Ib[0] || c >= Ib.length ? d.appendTo(vb) : Ib.length && d.insertBefore(Ib[c].el), c <= Jb.activeItem && (_b.active = Jb.activeItem += d.length)) : vb.append(d), K()
        }, sb.remove = function(b) {
            if (Rb) {
                var c = S(b);
                if (c > -1) {
                    Hb.eq(c).remove();
                    var d = c === Jb.activeItem;
                    c < Jb.activeItem && (_b.active = --Jb.activeItem), K(), d && (_b.active = null, sb.activate(Jb.activeItem))
                }
            } else
                a(b).remove(), K()
        }, sb.moveAfter = function(a, b) {
            X(a, b, 1)
        }, sb.moveBefore = function(a, b) {
            X(a, b)
        }, sb.on = function(a, b) {
            if ("object" === e(a))
                for (var c in a)
                    a.hasOwnProperty(c) && sb.on(c, a[c]);
            else if ("function" === e(b))
                for (var d = a.split(" "), f = 0, g = d.length; g > f; f++)
                    $b[d[f]] = $b[d[f]] || [], -1 === Y(d[f], b) && $b[d[f]].push(b);
            else if ("array" === e(b))
                for (var h = 0, i = b.length; i > h; h++)
                    sb.on(a, b[h])
        }, sb.one = function(a, b) {
            function c() {
                b.apply(sb, arguments), sb.off(a, c)
            }
            sb.on(a, c)
        }, sb.off = function(a, b) {
            if (b instanceof Array)
                for (var c = 0, d = b.length; d > c; c++)
                    sb.off(a, b[c]);
            else
                for (var e = a.split(" "), f = 0, g = e.length; g > f; f++)
                    if ($b[e[f]] = $b[e[f]] || [], null == b)
                        $b[e[f]].length = 0;
                    else {
                        var h = Y(e[f], b);
                        -1 !== h && $b[e[f]].splice(h, 1)
                    }
        }, sb.destroy = function() {
            return u.add(Sb).add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).unbind("." + r), Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass), Hb && Hb.eq(Jb.activeItem).removeClass(rb.activeClass), Eb.empty(), tb || (ub.unbind("." + r), Kb.restore(), Lb.restore(), Mb.restore(), Nb.restore(), a.removeData(b, r)), Ib.length = Gb.length = 0, _b = {}, sb.initialized = 0, sb
        }, sb.init = function() {
            if (!sb.initialized) {
                sb.on(q);
                var a = ["overflow", "position"],
                    b = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                Kb.save.apply(Kb, a), Mb.save.apply(Mb, a), Lb.save.apply(Lb, b), Nb.save.apply(Nb, b);
                var c = Ab;
                return tb || (c = c.add(vb), ub.css("overflow", "hidden"), m || "static" !== ub.css("position") || ub.css("position", "relative")), m ? n && c.css(m, n) : ("static" === zb.css("position") && zb.css("position", "relative"), c.css({
                    position: "absolute"
                })), rb.forward && Ub.on(A, gb), rb.backward && Vb.on(A, gb), rb.prev && Wb.on(z, gb), rb.next && Xb.on(z, gb), rb.prevPage && Yb.on(z, gb), rb.nextPage && Zb.on(z, gb), Sb.on(y, ib), zb[0] && zb.on(z, jb), Rb && rb.activateOn && ub.on(rb.activateOn + "." + r, "*", lb), Eb[0] && rb.activatePageOn && Eb.on(rb.activatePageOn + "." + r, "*", mb), Tb.on(v, {
                    source: "slidee"
                }, bb), Ab && Ab.on(v, {
                    source: "handle"
                }, bb), u.bind("keydown." + r, kb), tb || (ub.on("mouseenter." + r + " mouseleave." + r, nb), ub.on("scroll." + r, h)), sb.initialized = 1, K(), rb.cycleBy && !tb && sb[rb.startPaused ? "pause" : "resume"](), sb
            }
        }
    }
    function e(a) {
        return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof a
    }
    function f(a, b) {
        a.preventDefault(), b && a.stopPropagation()
    }
    function g(b) {
        f(b, 1), a(this).off(b.type, g)
    }
    function h() {
        this.scrollLeft = 0, this.scrollTop = 0
    }
    function i(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
    function j(a, b) {
        return 0 | G(String(a.css(b)).replace(/[^\-0-9.]/g, ""))
    }
    function k(a, b, c) {
        return b > a ? b : a > c ? c : a
    }
    function l(a) {
        var b = {};
        return b.style = {}, b.save = function() {
            if (a) {
                for (var c = 0; c < arguments.length; c++)
                    b.style[arguments[c]] = a.style[arguments[c]];
                return b
            }
        }, b.restore = function() {
            if (a) {
                for (var c in b.style)
                    b.style.hasOwnProperty(c) && (a.style[c] = b.style[c]);
                return b
            }
        }, b
    }
    var m,
        n,
        o,
        p = "sly",
        q = "Sly",
        r = p,
        s = b.cancelAnimationFrame || b.cancelRequestAnimationFrame,
        t = b.requestAnimationFrame,
        u = a(document),
        v = "touchstart." + r + " mousedown." + r,
        w = "mousemove." + r + " mouseup." + r,
        x = "touchmove." + r + " touchend." + r,
        y = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + r,
        z = "click." + r,
        A = "mousedown." + r,
        B = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"],
        C = [],
        D = Math.abs,
        E = Math.sqrt,
        F = Math.pow,
        G = Math.round,
        H = Math.max,
        I = Math.min,
        J = 0;
    u.on(y, function() {
        J = +new Date
    }), function(a) {
        function b(a) {
            var b = (new Date).getTime(),
                d = Math.max(0, 16 - (b - c)),
                e = setTimeout(a, d);
            return c = b, e
        }
        t = a.requestAnimationFrame || a.webkitRequestAnimationFrame || b;
        var c = (new Date).getTime(),
            d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.clearTimeout;
        s = function(b) {
            d.call(a, b)
        }
    }(window), function() {
        function a(a) {
            for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d] ? b[d] + a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (null != c.style[f])
                    return f
            }
        }
        var b = ["", "webkit", "moz", "ms", "o"],
            c = document.createElement("div");
        m = a("transform"), n = a("perspective") ? "translateZ(0) " : ""
    }(), b[q] = d, a.fn[p] = function(b, c) {
        var f,
            g;
        return a.isPlainObject(b) || (("string" === e(b) || b === !1) && (f = b === !1 ? "destroy" : b, g = Array.prototype.slice.call(arguments, 1)), b = {}), this.each(function(e, h) {
            var i = a.data(h, r);
            i || f ? i && f && i[f] && i[f].apply(i, g) : i = a.data(h, r, new d(h, b, c).init())
        })
    }, d.defaults = {
        horizontal: !1,
        itemNav: null,
        itemSelector: null,
        smart: !1,
        activateOn: null,
        activateMiddle: !1,
        scrollSource: null,
        scrollBy: 0,
        scrollHijack: 300,
        scrollTrap: !1,
        dragSource: null,
        mouseDragging: !1,
        touchDragging: !1,
        releaseSwing: !1,
        swingSpeed: .2,
        elasticBounds: !1,
        interactive: null,
        scrollBar: null,
        dragHandle: !1,
        dynamicHandle: !1,
        minHandleSize: 50,
        clickBar: !1,
        syncSpeed: .5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function(a) {
            return "<li>" + (a + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5e3,
        pauseOnHover: !1,
        startPaused: !1,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: 0,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
}(jQuery, window);

/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition)
                return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a)
                    return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d,
                e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type, e = {
                data: e,
                src: e.src
            }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                if (void 0 === c || c === !1)
                    return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else
                    b.find(p + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e,
                    f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C,
        D,
        E,
        F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H,
        I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L,
        M = function(c) {
            if (c.data && void 0 !== c.data.title)
                return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d))
                    return d.call(b, c);
                if (c.el)
                    return c.el.attr(d) || ""
            }
            return ""
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N,
        O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a)
                                return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }), f[h](function() {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), function() {
        var b = 1e3,
            c = "ontouchstart" in window,
            d = function() {
                v.off("touchmove" + f + " touchend" + f)
            },
            e = "mfpFastClick",
            f = "." + e;
        a.fn.mfpFastClick = function(e) {
            return a(this).each(function() {
                var g,
                    h = a(this);
                if (c) {
                    var i,
                        j,
                        k,
                        l,
                        m,
                        n;
                    h.on("touchstart" + f, function(a) {
                        l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                        }).on("touchend" + f, function(a) {
                            d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                g = !1
                            }, b), e())
                        })
                    })
                }
                h.on("click" + f, function() {
                    g || e()
                })
            })
        }, a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
        }
    }(), A()
});

/*! FitVids 1.1, Chris Coyier, Dave Rupert, WTFPL license | https://github.com/davatron5000/FitVids.js */
;
(function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0];
            var i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
            var s = document.createElement("div");
            s.innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>";
            r.appendChild(s.childNodes[1])
        }
        if (t) {
            e.extend(n, t)
        }
        return this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = ".fitvidsignore";
            if (n.ignore) {
                r = r + ", " + n.ignore
            }
            var i = e(this).find(t.join(","));
            i = i.not("object object");
            i = i.not(r);
            i.each(function() {
                var t = e(this);
                if (t.parents(r).length > 0) {
                    return
                }
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                if (!t.css("height") && !t.css("width") && (isNaN(t.attr("height")) || isNaN(t.attr("width")))) {
                    t.attr("height", 9);
                    t.attr("width", 16)
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                    i = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(),
                    s = n / i;
                if (!t.attr("id")) {
                    var o = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", o)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", s * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto)
/*! Fuse - Lightweight fuzzy-search - (c) 2012 Kirollos Risk <kirollos@gmail.com> */
!function(t) {
    function e(t, n) {
        this.list = t, this.options = n = n || {};
        var i,
            o,
            s,
            r;
        for (i = 0, r = ["sort", "includeScore", "shouldSort"], o = r.length; o > i; i++)
            s = r[i], this.options[s] = s in n ? n[s] : e.defaultOptions[s];
        for (i = 0, r = ["searchFn", "sortFn", "keys", "getFn"], o = r.length; o > i; i++)
            s = r[i], this.options[s] = n[s] || e.defaultOptions[s]
    }
    var n = function(t, e) {
        if (e = e || {}, this.options = e, this.options.location = e.location || n.defaultOptions.location, this.options.distance = "distance" in e ? e.distance : n.defaultOptions.distance, this.options.threshold = "threshold" in e ? e.threshold : n.defaultOptions.threshold, this.options.maxPatternLength = e.maxPatternLength || n.defaultOptions.maxPatternLength, this.pattern = e.caseSensitive ? t : t.toLowerCase(), this.patternLen = t.length, this.patternLen > this.options.maxPatternLength)
            throw new Error("Pattern length is too long");
        this.matchmask = 1 << this.patternLen - 1, this.patternAlphabet = this._calculatePatternAlphabet()
    };
    n.defaultOptions = {
        location: 0,
        distance: 100,
        threshold: .6,
        maxPatternLength: 32
    }, n.prototype._calculatePatternAlphabet = function() {
        var t = {},
            e = 0;
        for (e = 0; e < this.patternLen; e++)
            t[this.pattern.charAt(e)] = 0;
        for (e = 0; e < this.patternLen; e++)
            t[this.pattern.charAt(e)] |= 1 << this.pattern.length - e - 1;
        return t
    }, n.prototype._bitapScore = function(t, e) {
        var n = t / this.patternLen,
            i = Math.abs(this.options.location - e);
        return this.options.distance ? n + i / this.options.distance : i ? 1 : n
    }, n.prototype.search = function(t) {
        if (t = this.options.caseSensitive ? t : t.toLowerCase(), this.pattern === t)
            return {
                isMatch: !0,
                score: 0
            };
        var e,
            n,
            i,
            o,
            s,
            r,
            a,
            h,
            p,
            c = t.length,
            l = this.options.location,
            f = this.options.threshold,
            u = t.indexOf(this.pattern, l),
            d = this.patternLen + c,
            g = 1,
            m = [];
        for (-1 != u && (f = Math.min(this._bitapScore(0, u), f), u = t.lastIndexOf(this.pattern, l + this.patternLen), -1 != u && (f = Math.min(this._bitapScore(0, u), f))), u = -1, e = 0; e < this.patternLen; e++) {
            for (i = 0, o = d; o > i;)
                this._bitapScore(e, l + o) <= f ? i = o : d = o, o = Math.floor((d - i) / 2 + i);
            for (d = o, s = Math.max(1, l - o + 1), r = Math.min(l + o, c) + this.patternLen, a = Array(r + 2), a[r + 1] = (1 << e) - 1, n = r; n >= s; n--)
                if (p = this.patternAlphabet[t.charAt(n - 1)], a[n] = 0 === e ? (a[n + 1] << 1 | 1) & p : (a[n + 1] << 1 | 1) & p | ((h[n + 1] | h[n]) << 1 | 1) | h[n + 1], a[n] & this.matchmask && (g = this._bitapScore(e, n - 1), f >= g)) {
                    if (f = g, u = n - 1, m.push(u), !(u > l))
                        break;
                    s = Math.max(1, 2 * l - u)
                }
            if (this._bitapScore(e + 1, l) > f)
                break;
            h = a
        }
        return {
            isMatch: u >= 0,
            score: g
        }
    };
    var i = function(t, e, n) {
            var s,
                r,
                a;
            if (e) {
                a = e.indexOf("."), -1 !== a ? (s = e.slice(0, a), r = e.slice(a + 1)) : s = e;
                var h = t[s];
                if (h)
                    if (r || "string" != typeof h && "number" != typeof h)
                        if (o.isArray(h))
                            for (var p = 0, c = h.length; c > p; p++)
                                i(h[p], r, n);
                        else
                            r && i(h, r, n);
                    else
                        n.push(h)
            } else
                n.push(t);
            return n
        },
        o = {
            deepValue: function(t, e) {
                return i(t, e, [])
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        };
    e.defaultOptions = {
        id: null,
        caseSensitive: !1,
        includeScore: !1,
        shouldSort: !0,
        searchFn: n,
        sortFn: function(t, e) {
            return t.score - e.score
        },
        getFn: o.deepValue,
        keys: []
    }, e.prototype.search = function(t) {
        var e,
            n,
            i,
            s,
            r = new this.options.searchFn(t, this.options),
            a = this.list,
            h = a.length,
            p = this.options,
            c = this.options.keys,
            l = c.length,
            f = [],
            u = {},
            d = [],
            g = function(t, e, n) {
                if (void 0 !== t && null !== t)
                    if ("string" == typeof t)
                        i = r.search(t), i.isMatch && (s = u[n], s ? s.score = Math.min(s.score, i.score) : (u[n] = {
                            item: e,
                            score: i.score
                        }, f.push(u[n])));
                    else if (o.isArray(t))
                        for (var a = 0; a < t.length; a++)
                            g(t[a], e, n)
            };
        if ("string" == typeof a[0])
            for (var m = 0; h > m; m++)
                g(a[m], m, m);
        else
            for (var m = 0; h > m; m++)
                for (n = a[m], e = 0; l > e; e++)
                    g(p.getFn(n, c[e]), n, m);
        p.shouldSort && f.sort(p.sortFn);
        for (var y = p.includeScore ? function(t) {
                return f[t]
            } : function(t) {
                return f[t].item
            }, v = p.id ? function(t) {
                f[t].item = p.getFn(f[t].item, p.id)[0]
            } : function() {}, m = 0, b = f.length; b > m; m++)
            v(m), d.push(y(m));
        return d
    }, "object" == typeof exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
        return e
    }) : t.Fuse = e
}(this);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        e(require("jquery"))
    } else {
        e(jQuery)
    }
})(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }
    function r(e) {
        return u.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function s(e) {
        if (e.indexOf('"') === 0) {
            e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            e = decodeURIComponent(e.replace(t, " "));
            return u.json ? JSON.parse(e) : e
        } catch (n) {}
    }
    function o(t, n) {
        var r = u.raw ? t : s(t);
        return e.isFunction(n) ? n(r) : r
    }
    var t = /\+/g;
    var u = e.cookie = function(t, s, a) {
        if (arguments.length > 1 && !e.isFunction(s)) {
            a = e.extend({}, u.defaults, a);
            if (typeof a.expires === "number") {
                var f = a.expires,
                    l = a.expires = new Date;
                l.setTime(+l + f * 864e5)
            }
            return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = t ? undefined : {};
        var h = document.cookie ? document.cookie.split("; ") : [];
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("=");
            var m = r(v.shift());
            var g = v.join("=");
            if (t && t === m) {
                c = o(g, s);
                break
            }
            if (!t && (g = o(g)) !== undefined) {
                c[m] = g
            }
        }
        return c
    };
    u.defaults = {};
    e.removeCookie = function(t, n) {
        if (e.cookie(t) === undefined) {
            return false
        }
        e.cookie(t, "", e.extend({}, n, {
            expires: -1
        }));
        return !e.cookie(t)
    }
});

/* Slick JS - Ken Wheeler - http://kenwheeler.github.io */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f,
                e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c, c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c,
            d,
            b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1)
                d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e,
            f,
            g,
            d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f,
            g,
            h,
            d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
            break;
        default:
            return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c,
            d,
            b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
        var b,
            a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;)
                ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else
            for (; b < a.slideCount;)
                ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c,
            d,
            f,
            b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e,
            a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;)
            d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c,
            d,
            e,
            b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }
        var c,
            d,
            e,
            f,
            b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
        var c,
            d,
            b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function(b) {
        var d,
            e,
            c = this;
        e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c,
            d,
            e,
            b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;)
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d,
            e,
            b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c,
            b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var f,
            g,
            e = this;
        if ("responsive" === b && "array" === a.type(c))
            for (g in c)
                if ("array" !== a.type(e.options.responsive))
                    e.options.responsive = [c[g]];
                else {
                    for (f = e.options.responsive.length - 1; f >= 0;)
                        e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
                    e.options.responsive.push(c[g])
                }
        else
            e.options[b] = c;
        d === !0 && (e.unload(), e.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c,
            d,
            e,
            f,
            b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c,
            d,
            e,
            b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a,
            b,
            c,
            d,
            e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c,
            b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)
            switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
            }
        else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }, b.prototype.swipeMove = function(a) {
        var d,
            e,
            f,
            g,
            h,
            b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c,
            b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b,
            a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function() {
        var f,
            g,
            a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)
                return g;
        return a
    }
});
