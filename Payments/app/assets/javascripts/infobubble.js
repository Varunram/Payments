function InfoBubble(a) {
    this.extend(InfoBubble, google.maps.OverlayView);
    this.tabs_ = [];
    this.activeTab_ = null;
    this.baseZIndex_ = 100;
    this.isOpen_ = !1;
    a = a || {};
    void 0 == a.backgroundColor && (a.backgroundColor = this.BACKGROUND_COLOR_);
    void 0 == a.borderColor && (a.borderColor = this.BORDER_COLOR_);
    void 0 == a.borderRadius && (a.borderRadius = this.BORDER_RADIUS_);
    void 0 == a.borderWidth && (a.borderWidth = this.BORDER_WIDTH_);
    void 0 == a.padding && (a.padding = this.PADDING_);
    void 0 == a.arrowPosition && (a.arrowPosition = this.ARROW_POSITION_);
    void 0 == a.disableAutoPan && (a.disableAutoPan = !1);
    void 0 == a.disableAnimation && (a.disableAnimation = !1);
    void 0 == a.minWidth && (a.minWidth = this.MIN_WIDTH_);
    void 0 == a.shadowStyle && (a.shadowStyle = this.SHADOW_STYLE_);
    void 0 == a.arrowSize && (a.arrowSize = this.ARROW_SIZE_);
    void 0 == a.arrowStyle && (a.arrowStyle = this.ARROW_STYLE_);
    this.buildDom_();
    this.setValues(a)
}
window.InfoBubble = InfoBubble;
InfoBubble.prototype.ARROW_SIZE_ = 15;
InfoBubble.prototype.ARROW_STYLE_ = 0;
InfoBubble.prototype.SHADOW_STYLE_ = 1;
InfoBubble.prototype.MIN_WIDTH_ = 50;
InfoBubble.prototype.ARROW_POSITION_ = 50;
InfoBubble.prototype.PADDING_ = 10;
InfoBubble.prototype.BORDER_WIDTH_ = 1;
InfoBubble.prototype.BORDER_COLOR_ = "#ccc";
InfoBubble.prototype.BORDER_RADIUS_ = 10;
InfoBubble.prototype.BACKGROUND_COLOR_ = "#fff";
InfoBubble.prototype.extend = function(a, b) {
    return function(a) {
        for (var b in a.prototype)
            this.prototype[b] = a.prototype[b];
        return this
    }.apply(a, [b])
};
InfoBubble.prototype.buildDom_ = function() {
    var a = this.bubble_ = document.createElement("DIV");
    a.style.position = "absolute";
    a.style.zIndex = this.baseZIndex_;
    (this.tabsContainer_ = document.createElement("DIV")).style.position = "relative";
    var b = this.close_ = document.createElement("IMG");
    b.style.position = "absolute";
    b.style.width = this.px(12);
    b.style.height = this.px(12);
    b.style.border = 0;
    b.style.zIndex = this.baseZIndex_ + 1;
    b.style.cursor = "pointer";
    b.src = "/wp-content/themes/whaynecat/assets/img/iw_close.gif";
    var d = this;
    google.maps.event.addDomListener(b,
    "click", function() {
        d.close();
        google.maps.event.trigger(d, "closeclick")
    });
    var c = this.contentContainer_ = document.createElement("DIV");
    c.style.overflowX = "auto";
    c.style.overflowY = "auto";
    c.style.cursor = "default";
    c.style.clear = "both";
    c.style.position = "relative";
    var g = this.content_ = document.createElement("DIV");
    c.appendChild(g);
    g = this.arrow_ = document.createElement("DIV");
    g.style.position = "relative";
    var e = this.arrowOuter_ = document.createElement("DIV"),
        f = this.arrowInner_ = document.createElement("DIV"),
        h = this.getArrowSize_();
    e.style.position = f.style.position = "absolute";
    e.style.left = f.style.left = "50%";
    e.style.height = f.style.height = "0";
    e.style.width = f.style.width = "0";
    e.style.marginLeft = this.px(-h);
    e.style.borderWidth = this.px(h);
    e.style.borderBottomWidth = 0;
    h = this.bubbleShadow_ = document.createElement("DIV");
    h.style.position = "absolute";
    a.style.display = h.style.display = "none";
    a.appendChild(this.tabsContainer_);
    a.appendChild(b);
    a.appendChild(c);
    g.appendChild(e);
    g.appendChild(f);
    a.appendChild(g);
    a = document.createElement("style");
    a.setAttribute("type", "text/css");
    this.animationName_ = "_ibani_" + Math.round(1E4 * Math.random());
    a.textContent = "." + this.animationName_ + "{-webkit-animation-name:" + this.animationName_ + ";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes " + this.animationName_ + " {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";
    document.getElementsByTagName("head")[0].appendChild(a)
};
InfoBubble.prototype.setBackgroundClassName = function(a) {
    this.set("backgroundClassName", a)
};
InfoBubble.prototype.setBackgroundClassName = InfoBubble.prototype.setBackgroundClassName;
InfoBubble.prototype.backgroundClassName_changed = function() {
    this.content_.className = this.get("backgroundClassName")
};
InfoBubble.prototype.backgroundClassName_changed = InfoBubble.prototype.backgroundClassName_changed;
InfoBubble.prototype.setTabClassName = function(a) {
    this.set("tabClassName", a)
};
InfoBubble.prototype.setTabClassName = InfoBubble.prototype.setTabClassName;
InfoBubble.prototype.tabClassName_changed = function() {
    this.updateTabStyles_()
};
InfoBubble.prototype.tabClassName_changed = InfoBubble.prototype.tabClassName_changed;
InfoBubble.prototype.getArrowStyle_ = function() {
    return parseInt(this.get("arrowStyle"), 10) || 0
};
InfoBubble.prototype.setArrowStyle = function(a) {
    this.set("arrowStyle", a)
};
InfoBubble.prototype.setArrowStyle = InfoBubble.prototype.setArrowStyle;
InfoBubble.prototype.arrowStyle_changed = function() {
    this.arrowSize_changed()
};
InfoBubble.prototype.arrowStyle_changed = InfoBubble.prototype.arrowStyle_changed;
InfoBubble.prototype.getArrowSize_ = function() {
    return parseInt(this.get("arrowSize"), 10) || 0
};
InfoBubble.prototype.setArrowSize = function(a) {
    this.set("arrowSize", a)
};
InfoBubble.prototype.setArrowSize = InfoBubble.prototype.setArrowSize;
InfoBubble.prototype.arrowSize_changed = function() {
    this.borderWidth_changed()
};
InfoBubble.prototype.arrowSize_changed = InfoBubble.prototype.arrowSize_changed;
InfoBubble.prototype.setArrowPosition = function(a) {
    this.set("arrowPosition", a)
};
InfoBubble.prototype.setArrowPosition = InfoBubble.prototype.setArrowPosition;
InfoBubble.prototype.getArrowPosition_ = function() {
    return parseInt(this.get("arrowPosition"), 10) || 0
};
InfoBubble.prototype.arrowPosition_changed = function() {
    var a = this.getArrowPosition_();
    this.arrowOuter_.style.left = this.arrowInner_.style.left = a + "%";
    this.redraw_()
};
InfoBubble.prototype.arrowPosition_changed = InfoBubble.prototype.arrowPosition_changed;
InfoBubble.prototype.setZIndex = function(a) {
    this.set("zIndex", a)
};
InfoBubble.prototype.setZIndex = InfoBubble.prototype.setZIndex;
InfoBubble.prototype.getZIndex = function() {
    return parseInt(this.get("zIndex"), 10) || this.baseZIndex_
};
InfoBubble.prototype.zIndex_changed = function() {
    var a = this.getZIndex();
    this.bubble_.style.zIndex = this.baseZIndex_ = a;
    this.close_.style.zIndex = a + 1
};
InfoBubble.prototype.zIndex_changed = InfoBubble.prototype.zIndex_changed;
InfoBubble.prototype.setShadowStyle = function(a) {
    this.set("shadowStyle", a)
};
InfoBubble.prototype.setShadowStyle = InfoBubble.prototype.setShadowStyle;
InfoBubble.prototype.getShadowStyle_ = function() {
    return parseInt(this.get("shadowStyle"), 10) || 0
};
InfoBubble.prototype.shadowStyle_changed = function() {
    var a = "",
        b = "",
        d = "";
    switch (this.getShadowStyle_()) {
    case 0:
        a = "none";
        break;
    case 1:
        b = "40px 15px 10px rgba(33,33,33,0.3)";
        d = "transparent";
        break;
    case 2:
        b = "0 0 2px rgba(33,33,33,0.3)", d = "rgba(33,33,33,0.35)"
    }
    this.bubbleShadow_.style.boxShadow = this.bubbleShadow_.style.webkitBoxShadow = this.bubbleShadow_.style.MozBoxShadow = b;
    this.bubbleShadow_.style.backgroundColor = d;
    this.isOpen_ && (this.bubbleShadow_.style.display = a, this.draw())
};
InfoBubble.prototype.shadowStyle_changed = InfoBubble.prototype.shadowStyle_changed;
InfoBubble.prototype.showCloseButton = function() {
    this.set("hideCloseButton", !1)
};
InfoBubble.prototype.showCloseButton = InfoBubble.prototype.showCloseButton;
InfoBubble.prototype.hideCloseButton = function() {
    this.set("hideCloseButton", !0)
};
InfoBubble.prototype.hideCloseButton = InfoBubble.prototype.hideCloseButton;
InfoBubble.prototype.hideCloseButton_changed = function() {
    this.close_.style.display = this.get("hideCloseButton") ? "none" : ""
};
InfoBubble.prototype.hideCloseButton_changed = InfoBubble.prototype.hideCloseButton_changed;
InfoBubble.prototype.setBackgroundColor = function(a) {
    a && this.set("backgroundColor", a)
};
InfoBubble.prototype.setBackgroundColor = InfoBubble.prototype.setBackgroundColor;
InfoBubble.prototype.backgroundColor_changed = function() {
    var a = this.get("backgroundColor");
    this.contentContainer_.style.backgroundColor = a;
    this.arrowInner_.style.borderColor = a + " transparent transparent";
    this.updateTabStyles_()
};
InfoBubble.prototype.backgroundColor_changed = InfoBubble.prototype.backgroundColor_changed;
InfoBubble.prototype.setBorderColor = function(a) {
    a && this.set("borderColor", a)
};
InfoBubble.prototype.setBorderColor = InfoBubble.prototype.setBorderColor;
InfoBubble.prototype.borderColor_changed = function() {
    var a = this.get("borderColor"),
        b = this.contentContainer_,
        d = this.arrowOuter_;
    b.style.borderColor = a;
    d.style.borderColor = a + " transparent transparent";
    b.style.borderStyle = d.style.borderStyle = this.arrowInner_.style.borderStyle = "solid";
    this.updateTabStyles_()
};
InfoBubble.prototype.borderColor_changed = InfoBubble.prototype.borderColor_changed;
InfoBubble.prototype.setBorderRadius = function(a) {
    this.set("borderRadius", a)
};
InfoBubble.prototype.setBorderRadius = InfoBubble.prototype.setBorderRadius;
InfoBubble.prototype.getBorderRadius_ = function() {
    return parseInt(this.get("borderRadius"), 10) || 0
};
InfoBubble.prototype.borderRadius_changed = function() {
    var a = this.getBorderRadius_(),
        b = this.getBorderWidth_();
    this.contentContainer_.style.borderRadius = this.contentContainer_.style.MozBorderRadius = this.contentContainer_.style.webkitBorderRadius = this.bubbleShadow_.style.borderRadius = this.bubbleShadow_.style.MozBorderRadius = this.bubbleShadow_.style.webkitBorderRadius = this.px(a);
    this.tabsContainer_.style.paddingLeft = this.tabsContainer_.style.paddingRight = this.px(a + b);
    this.redraw_()
};
InfoBubble.prototype.borderRadius_changed = InfoBubble.prototype.borderRadius_changed;
InfoBubble.prototype.getBorderWidth_ = function() {
    return parseInt(this.get("borderWidth"), 10) || 0
};
InfoBubble.prototype.setBorderWidth = function(a) {
    this.set("borderWidth", a)
};
InfoBubble.prototype.setBorderWidth = InfoBubble.prototype.setBorderWidth;
InfoBubble.prototype.borderWidth_changed = function() {
    var a = this.getBorderWidth_();
    this.contentContainer_.style.borderWidth = this.px(a);
    this.tabsContainer_.style.top = this.px(a);
    this.updateArrowStyle_();
    this.updateTabStyles_();
    this.borderRadius_changed();
    this.redraw_()
};
InfoBubble.prototype.borderWidth_changed = InfoBubble.prototype.borderWidth_changed;
InfoBubble.prototype.updateArrowStyle_ = function() {
    var a = this.getBorderWidth_(),
        b = this.getArrowSize_(),
        d = this.getArrowStyle_(),
        c = this.px(b),
        g = this.px(Math.max(0, b - a)),
        e = this.arrowOuter_,
        f = this.arrowInner_;
    this.arrow_.style.marginTop = this.px(-a);
    e.style.borderTopWidth = c;
    f.style.borderTopWidth = g;
    0 == d || 1 == d ? (e.style.borderLeftWidth = c, f.style.borderLeftWidth = g) : e.style.borderLeftWidth = f.style.borderLeftWidth = 0;
    0 == d || 2 == d ? (e.style.borderRightWidth = c, f.style.borderRightWidth = g) : e.style.borderRightWidth =
    f.style.borderRightWidth = 0;
    2 > d ? (e.style.marginLeft = this.px(-b), f.style.marginLeft = this.px(-(b - a))) : e.style.marginLeft = f.style.marginLeft = 0;
    e.style.display = 0 == a ? "none" : ""
};
InfoBubble.prototype.setPadding = function(a) {
    this.set("padding", a)
};
InfoBubble.prototype.setPadding = InfoBubble.prototype.setPadding;
InfoBubble.prototype.getPadding_ = function() {
    return parseInt(this.get("padding"), 10) || 0
};
InfoBubble.prototype.padding_changed = function() {
    var a = this.getPadding_();
    this.contentContainer_.style.padding = this.px(a);
    this.updateTabStyles_();
    this.redraw_()
};
InfoBubble.prototype.padding_changed = InfoBubble.prototype.padding_changed;
InfoBubble.prototype.px = function(a) {
    return a ? a + "px" : a
};
InfoBubble.prototype.addEvents_ = function() {
    var a = "mousedown mousemove mouseover mouseout mouseup mousewheel DOMMouseScroll touchstart touchend touchmove dblclick contextmenu click".split(" "),
        b = this.bubble_;
    this.listeners_ = [];
    for (var d = 0, c; c = a[d]; d++)
        this.listeners_.push(google.maps.event.addDomListener(b, c, function(a) {
            a.cancelBubble = !0;
            a.stopPropagation && a.stopPropagation()
        }))
};
InfoBubble.prototype.onAdd = function() {
    this.bubble_ || this.buildDom_();
    this.addEvents_();
    var a = this.getPanes();
    a && (a.floatPane.appendChild(this.bubble_), a.floatShadow.appendChild(this.bubbleShadow_))
};
InfoBubble.prototype.onAdd = InfoBubble.prototype.onAdd;
InfoBubble.prototype.draw = function() {
    var a = this.getProjection();
    if (a) {
        var b = this.get("position");
        if (b) {
            var d = 0;
            this.activeTab_ && (d = this.activeTab_.offsetHeight);
            var c = this.getAnchorHeight_(),
                g = this.getArrowSize_(),
                e = this.getArrowPosition_(),
                e = e / 100,
                a = a.fromLatLngToDivPixel(b),
                b = this.contentContainer_.offsetWidth,
                f = this.bubble_.offsetHeight;
            if (b) {
                f = a.y - (f + g);
                c && (f -= c);
                var h = a.x - b * e;
                this.bubble_.style.top = this.px(f);
                this.bubble_.style.left = this.px(h);
                switch (parseInt(this.get("shadowStyle"), 10)) {
                case 1:
                    this.bubbleShadow_.style.top =
                    this.px(f + d - 1);
                    this.bubbleShadow_.style.left = this.px(h);
                    this.bubbleShadow_.style.width = this.px(b);
                    this.bubbleShadow_.style.height = this.px(this.contentContainer_.offsetHeight - g);
                    break;
                case 2:
                    b *= .8, this.bubbleShadow_.style.top = c ? this.px(a.y) : this.px(a.y + g), this.bubbleShadow_.style.left = this.px(a.x - b * e), this.bubbleShadow_.style.width = this.px(b), this.bubbleShadow_.style.height = this.px(2)
                }
            }
        } else
            this.close()
    }
};
InfoBubble.prototype.draw = InfoBubble.prototype.draw;
InfoBubble.prototype.onRemove = function() {
    this.bubble_ && this.bubble_.parentNode && this.bubble_.parentNode.removeChild(this.bubble_);
    this.bubbleShadow_ && this.bubbleShadow_.parentNode && this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
    for (var a = 0, b; b = this.listeners_[a]; a++)
        google.maps.event.removeListener(b)
};
InfoBubble.prototype.onRemove = InfoBubble.prototype.onRemove;
InfoBubble.prototype.isOpen = function() {
    return this.isOpen_
};
InfoBubble.prototype.isOpen = InfoBubble.prototype.isOpen;
InfoBubble.prototype.close = function() {
    this.bubble_ && (this.bubble_.style.display = "none", this.bubble_.className = this.bubble_.className.replace(this.animationName_, ""));
    this.bubbleShadow_ && (this.bubbleShadow_.style.display = "none", this.bubbleShadow_.className = this.bubbleShadow_.className.replace(this.animationName_, ""));
    this.isOpen_ = !1
};
InfoBubble.prototype.close = InfoBubble.prototype.close;
InfoBubble.prototype.open = function(a, b) {
    var d = this;
    window.setTimeout(function() {
        d.open_(a, b)
    }, 0)
};
InfoBubble.prototype.open_ = function(a, b) {
    this.updateContent_();
    a && this.setMap(a);
    b && (this.set("anchor", b), this.bindTo("anchorPoint", b), this.bindTo("position", b));
    this.bubble_.style.display = this.bubbleShadow_.style.display = "";
    this.get("disableAnimation") || (this.bubble_.className += " " + this.animationName_, this.bubbleShadow_.className += " " + this.animationName_);
    this.redraw_();
    this.isOpen_ = !0;
    if (!this.get("disableAutoPan")) {
        var d = this;
        window.setTimeout(function() {
            d.panToView()
        }, 200)
    }
};
InfoBubble.prototype.open = InfoBubble.prototype.open;
InfoBubble.prototype.setPosition = function(a) {
    a && this.set("position", a)
};
InfoBubble.prototype.setPosition = InfoBubble.prototype.setPosition;
InfoBubble.prototype.getPosition = function() {
    return this.get("position")
};
InfoBubble.prototype.getPosition = InfoBubble.prototype.getPosition;
InfoBubble.prototype.position_changed = function() {
    this.draw()
};
InfoBubble.prototype.position_changed = InfoBubble.prototype.position_changed;
InfoBubble.prototype.panToView = function() {
    var a = this.getProjection();
    if (a && this.bubble_) {
        var b = this.getAnchorHeight_(),
            d = this.bubble_.offsetHeight + b,
            b = this.get("map"),
            c = b.getDiv().offsetHeight,
            g = this.getPosition(),
            e = a.fromLatLngToContainerPixel(b.getCenter()),
            g = a.fromLatLngToContainerPixel(g),
            d = e.y - d,
            c = c - e.y,
            e = 0;
        0 > d && (e = (-1 * d + c) / 2);
        g.y -= e;
        g = a.fromContainerPixelToLatLng(g);
        b.getCenter() != g && b.panTo(g)
    }
};
InfoBubble.prototype.panToView = InfoBubble.prototype.panToView;
InfoBubble.prototype.htmlToDocumentFragment_ = function(a) {
    a = a.replace(/^\s*([\S\s]*)\b\s*$/, "$1");
    var b = document.createElement("DIV");
    b.innerHTML = a;
    if (1 == b.childNodes.length)
        return b.removeChild(b.firstChild);
    for (a = document.createDocumentFragment(); b.firstChild;)
        a.appendChild(b.firstChild);
    return a
};
InfoBubble.prototype.removeChildren_ = function(a) {
    if (a)
        for (var b; b = a.firstChild;)
            a.removeChild(b)
};
InfoBubble.prototype.setContent = function(a) {
    this.set("content", a)
};
InfoBubble.prototype.setContent = InfoBubble.prototype.setContent;
InfoBubble.prototype.getContent = function() {
    return this.get("content")
};
InfoBubble.prototype.getContent = InfoBubble.prototype.getContent;
InfoBubble.prototype.updateContent_ = function() {
    if (this.content_) {
        this.removeChildren_(this.content_);
        var a = this.getContent();
        if (a) {
            "string" == typeof a && (a = this.htmlToDocumentFragment_(a));
            this.content_.appendChild(a);
            for (var b = this, a = this.content_.getElementsByTagName("IMG"), d = 0, c; c = a[d]; d++)
                google.maps.event.addDomListener(c, "load", function() {
                    b.imageLoaded_()
                });
            google.maps.event.trigger(this, "domready")
        }
        this.redraw_()
    }
};
InfoBubble.prototype.imageLoaded_ = function() {
    var a = !this.get("disableAutoPan");
    this.redraw_();
    !a || 0 != this.tabs_.length && 0 != this.activeTab_.index || this.panToView()
};
InfoBubble.prototype.updateTabStyles_ = function() {
    if (this.tabs_ && this.tabs_.length) {
        for (var a = 0, b; b = this.tabs_[a]; a++)
            this.setTabStyle_(b.tab);
        this.activeTab_.style.zIndex = this.baseZIndex_;
        a = this.getBorderWidth_();
        b = this.getPadding_() / 2;
        this.activeTab_.style.borderBottomWidth = 0;
        this.activeTab_.style.paddingBottom = this.px(b + a)
    }
};
InfoBubble.prototype.setTabStyle_ = function(a) {
    var b = this.get("backgroundColor"),
        d = this.get("borderColor"),
        c = this.getBorderRadius_(),
        g = this.getBorderWidth_(),
        e = this.getPadding_(),
        f = this.px(-Math.max(e, c)),
        c = this.px(c),
        h = this.baseZIndex_;
    a.index && (h -= a.index);
    var b = {
            cssFloat: "left",
            position: "relative",
            cursor: "pointer",
            backgroundColor: b,
            border: this.px(g) + " solid " + d,
            padding: this.px(e / 2) + " " + this.px(e),
            marginRight: f,
            whiteSpace: "nowrap",
            borderRadiusTopLeft: c,
            MozBorderRadiusTopleft: c,
            webkitBorderTopLeftRadius: c,
            borderRadiusTopRight: c,
            MozBorderRadiusTopright: c,
            webkitBorderTopRightRadius: c,
            zIndex: h,
            display: "inline"
        },
        k;
    for (k in b)
        a.style[k] = b[k];
    k = this.get("tabClassName");
    void 0 != k && (a.className += " " + k)
};
InfoBubble.prototype.addTabActions_ = function(a) {
    var b = this;
    a.listener_ = google.maps.event.addDomListener(a, "click", function() {
        b.setTabActive_(this)
    })
};
InfoBubble.prototype.setTabActive = function(a) {
    (a = this.tabs_[a - 1]) && this.setTabActive_(a.tab)
};
InfoBubble.prototype.setTabActive = InfoBubble.prototype.setTabActive;
InfoBubble.prototype.setTabActive_ = function(a) {
    if (a) {
        var b = this.getPadding_() / 2,
            d = this.getBorderWidth_();
        if (this.activeTab_) {
            var c = this.activeTab_;
            c.style.zIndex = this.baseZIndex_ - c.index;
            c.style.paddingBottom = this.px(b);
            c.style.borderBottomWidth = this.px(d)
        }
        a.style.zIndex = this.baseZIndex_;
        a.style.borderBottomWidth = 0;
        a.style.marginBottomWidth = "-10px";
        a.style.paddingBottom = this.px(b + d);
        this.setContent(this.tabs_[a.index].content);
        this.updateContent_();
        this.activeTab_ = a;
        this.redraw_()
    } else
        this.setContent(""),
        this.updateContent_()
};
InfoBubble.prototype.setMaxWidth = function(a) {
    this.set("maxWidth", a)
};
InfoBubble.prototype.setMaxWidth = InfoBubble.prototype.setMaxWidth;
InfoBubble.prototype.maxWidth_changed = function() {
    this.redraw_()
};
InfoBubble.prototype.maxWidth_changed = InfoBubble.prototype.maxWidth_changed;
InfoBubble.prototype.setMaxHeight = function(a) {
    this.set("maxHeight", a)
};
InfoBubble.prototype.setMaxHeight = InfoBubble.prototype.setMaxHeight;
InfoBubble.prototype.maxHeight_changed = function() {
    this.redraw_()
};
InfoBubble.prototype.maxHeight_changed = InfoBubble.prototype.maxHeight_changed;
InfoBubble.prototype.setMinWidth = function(a) {
    this.set("minWidth", a)
};
InfoBubble.prototype.setMinWidth = InfoBubble.prototype.setMinWidth;
InfoBubble.prototype.minWidth_changed = function() {
    this.redraw_()
};
InfoBubble.prototype.minWidth_changed = InfoBubble.prototype.minWidth_changed;
InfoBubble.prototype.setMinHeight = function(a) {
    this.set("minHeight", a)
};
InfoBubble.prototype.setMinHeight = InfoBubble.prototype.setMinHeight;
InfoBubble.prototype.minHeight_changed = function() {
    this.redraw_()
};
InfoBubble.prototype.minHeight_changed = InfoBubble.prototype.minHeight_changed;
InfoBubble.prototype.addTab = function(a, b) {
    var d = document.createElement("DIV");
    d.innerHTML = a;
    this.setTabStyle_(d);
    this.addTabActions_(d);
    this.tabsContainer_.appendChild(d);
    this.tabs_.push({
        label: a,
        content: b,
        tab: d
    });
    d.index = this.tabs_.length - 1;
    d.style.zIndex = this.baseZIndex_ - d.index;
    this.activeTab_ || this.setTabActive_(d);
    d.className = d.className + " " + this.animationName_;
    this.redraw_()
};
InfoBubble.prototype.addTab = InfoBubble.prototype.addTab;
InfoBubble.prototype.updateTab = function(a, b, d) {
    !this.tabs_.length || 0 > a || a >= this.tabs_.length || (a = this.tabs_[a], void 0 != b && (a.tab.innerHTML = a.label = b), void 0 != d && (a.content = d), this.activeTab_ == a.tab && (this.setContent(a.content), this.updateContent_()), this.redraw_())
};
InfoBubble.prototype.updateTab = InfoBubble.prototype.updateTab;
InfoBubble.prototype.removeTab = function(a) {
    if (!(!this.tabs_.length || 0 > a || a >= this.tabs_.length)) {
        var b = this.tabs_[a];
        b.tab.parentNode.removeChild(b.tab);
        google.maps.event.removeListener(b.tab.listener_);
        this.tabs_.splice(a, 1);
        delete b;
        for (var d = 0, c; c = this.tabs_[d]; d++)
            c.tab.index = d;
        b.tab == this.activeTab_ && (this.activeTab_ = this.tabs_[a] ? this.tabs_[a].tab : this.tabs_[a - 1] ? this.tabs_[a - 1].tab : void 0, this.setTabActive_(this.activeTab_));
        this.redraw_()
    }
};
InfoBubble.prototype.removeTab = InfoBubble.prototype.removeTab;
InfoBubble.prototype.getElementSize_ = function(a, b, d) {
    var c = document.createElement("DIV");
    c.style.display = "inline";
    c.style.position = "absolute";
    c.style.visibility = "hidden";
    "string" == typeof a ? c.innerHTML = a : c.appendChild(a.cloneNode(!0));
    document.body.appendChild(c);
    a = new google.maps.Size(c.offsetWidth, c.offsetHeight);
    b && a.width > b && (c.style.width = this.px(b), a = new google.maps.Size(c.offsetWidth, c.offsetHeight));
    d && a.height > d && (c.style.height = this.px(d), a = new google.maps.Size(c.offsetWidth, c.offsetHeight));
    document.body.removeChild(c);
    delete c;
    return a
};
InfoBubble.prototype.redraw_ = function() {
    this.figureOutSize_();
    this.positionCloseButton_();
    this.draw()
};
InfoBubble.prototype.figureOutSize_ = function() {
    var a = this.get("map");
    if (a) {
        var b = this.getPadding_();
        this.getBorderWidth_();
        this.getBorderRadius_();
        var d = this.getArrowSize_(),
            c = a.getDiv(),
            g = 2 * d,
            a = c.offsetWidth - g,
            c = c.offsetHeight - g - this.getAnchorHeight_(),
            g = 0,
            e = this.get("minWidth") || 0,
            f = this.get("minHeight") || 0,
            h = this.get("maxWidth") || 0,
            k = this.get("maxHeight") || 0,
            h = Math.min(a, h),
            k = Math.min(c, k),
            p = 0;
        if (this.tabs_.length)
            for (var m = 0, l; l = this.tabs_[m]; m++) {
                var n = this.getElementSize_(l.tab, h, k);
                l = this.getElementSize_(l.content,
                h, k);
                e < n.width && (e = n.width);
                p += n.width;
                f < n.height && (f = n.height);
                n.height > g && (g = n.height);
                e < l.width && (e = l.width);
                f < l.height && (f = l.height)
            }
        else
            m = this.get("content"), "string" == typeof m && (m = this.htmlToDocumentFragment_(m)), m && (l = this.getElementSize_(m, h, k), e < l.width && (e = l.width), f < l.height && (f = l.height));
        h && (e = Math.min(e, h));
        k && (f = Math.min(f, k));
        e = Math.max(e, p);
        e == p && (e += 2 * b);
        e = Math.max(e, 2 * d);
        e > a && (e = a);
        f > c && (f = c - g);
        this.tabsContainer_ && (this.tabHeight_ = g, this.tabsContainer_.style.width = this.px(p));
        this.contentContainer_.style.width = this.px(e);
        this.contentContainer_.style.height = this.px(f)
    }
};
InfoBubble.prototype.getAnchorHeight_ = function() {
    if (this.get("anchor")) {
        var a = this.get("anchorPoint");
        if (a)
            return -1 * a.y
    }
    return 0
};
InfoBubble.prototype.anchorPoint_changed = function() {
    this.draw()
};
InfoBubble.prototype.anchorPoint_changed = InfoBubble.prototype.anchorPoint_changed;
InfoBubble.prototype.positionCloseButton_ = function() {
    this.getBorderRadius_();
    this.getBorderWidth_();
    this.close_.style.right = this.px(8);
    this.close_.style.top = this.px(16)
};
