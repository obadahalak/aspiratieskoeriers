/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function () {
  let a; let b; let c; let d; let e; const f = function (a, b) { return function () { return a.apply(b, arguments) } }; const g = [].indexOf || function (a) {
    for (let b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a)
        return b
    }

    return -1
  }; b = (function () {
    function a() {}

    return a.prototype.extend = function (a, b) {
      let c, d; for (c in b)d = b[c], a[c] == null && (a[c] = d)

      return a
    }, a.prototype.isMobile = function (a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function (a, b, c, d) {
      let e

      return b == null && (b = !1), c == null && (c = !1), d == null && (d = null), document.createEvent != null ? (e = document.createEvent('CustomEvent'), e.initCustomEvent(a, b, c, d)) : document.createEventObject != null ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }, a.prototype.emitEvent = function (a, b) { return a.dispatchEvent != null ? a.dispatchEvent(b) : b in (a != null) ? a[b]() : `on${b}` in (a != null) ? a[`on${b}`]() : void 0 }, a.prototype.addEvent = function (a, b, c) { return a.addEventListener != null ? a.addEventListener(b, c, !1) : a.attachEvent != null ? a.attachEvent(`on${b}`, c) : a[b] = c }, a.prototype.removeEvent = function (a, b, c) { return a.removeEventListener != null ? a.removeEventListener(b, c, !1) : a.detachEvent != null ? a.detachEvent(`on${b}`, c) : delete a[b] }, a.prototype.innerHeight = function () { return 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight }, a
  }()), c = this.WeakMap || this.MozWeakMap || (c = (function () {
    function a() { this.keys = [], this.values = [] }

    return a.prototype.get = function (a) {
      let b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {
        if (c = f[b], c === a)
          return this.values[b]
      }
    }, a.prototype.set = function (a, b) {
      let c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {
        if (d = g[c], d === a)
          return void (this.values[c] = b)
      }

      return this.keys.push(a), this.values.push(b)
    }, a
  }())), a = this.MutationObserver || this.WinkitMutationObserver || this.MozMutationObserver || (a = (function () {
    function a() { typeof console != 'undefined' && console !== null && console.warn('MutationObserver is not supported by your browser.'), typeof console != 'undefined' && console !== null && console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.') }

    return a.notSupported = !0, a.prototype.observe = function () {}, a
  }())), d = this.getComputedStyle || function (a) {
    return this.getPropertyValue = function (b) {
      let c

      return b === 'float' && (b = 'styleFloat'), e.test(b) && b.replace(e, (a, b) => { return b.toUpperCase() }), ((c = a.currentStyle) != null ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = (function () {
    function e(a) { a == null && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), a.scrollContainer != null && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass) }

    return e.prototype.defaults = { boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function () {
      let a

      return this.element = window.document.documentElement, (a = document.readyState) === 'interactive' || a === 'complete' ? this.start() : this.util().addEvent(document, 'DOMContentLoaded', this.start), this.finished = []
    }, e.prototype.start = function () {
      let b, c, d, e; if (this.stopped = !1, this.boxes = (function () {
        let a, c, d, e; for (d = this.element.querySelectorAll(`.${this.config.boxClass}`), e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b)

        return e
      }.call(this)), this.all = (function () {
        let a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b)

        return e
      }.call(this)), this.boxes.length) {
        if (this.disabled())
          this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++)b = e[c], this.applyStyle(b, !0)
      }

      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler), this.util().addEvent(window, 'resize', this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live
        ? new a(function (a) {
          return function (b) {
            let c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) {
              f = b[c], g.push(function () {
                let a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)e = c[a], d.push(this.doSync(e))

                return d
              }.call(a))
            }

            return g
          }
        }(this)).observe(document.body, { childList: !0, subtree: !0 })
        : void 0
    }, e.prototype.stop = function () { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler), this.util().removeEvent(window, 'resize', this.scrollHandler), this.interval != null ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function () { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function (a) {
      let b, c, d, e, f; if (a == null && (a = this.element), a.nodeType === 1) {
        for (a = a.parentNode || a, e = a.querySelectorAll(`.${this.config.boxClass}`), f = [], c = 0, d = e.length; d > c; c++)b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0)

        return f
      }
    }, e.prototype.show = function (a) { return this.applyStyle(a), a.className = `${a.className} ${this.config.animateClass}`, this.config.callback != null && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, 'animationend', this.resetAnimation), this.util().addEvent(a, 'oanimationend', this.resetAnimation), this.util().addEvent(a, 'WinkitAnimationEnd', this.resetAnimation), this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation), a }, e.prototype.applyStyle = function (a, b) {
      let c, d, e

      return d = a.getAttribute('data-wow-duration'), c = a.getAttribute('data-wow-delay'), e = a.getAttribute('data-wow-iteration'), this.animate(function (f) { return function () { return f.customStyle(a, b, d, c, e) } }(this))
    }, e.prototype.animate = (function () { return 'requestAnimationFrame' in window ? function (a) { return window.requestAnimationFrame(a) } : function (a) { return a() } }()), e.prototype.resetStyle = function () {
      let a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.style.visibility = 'visible')

      return e
    }, e.prototype.resetAnimation = function (a) {
      let b

      return a.type.toLowerCase().includes('animationend') ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, '').trim()) : void 0
    }, e.prototype.customStyle = function (a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? 'hidden' : 'visible', c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? 'none' : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ['moz', 'Winkit'], e.prototype.vendorSet = function (a, b) {
      let c, d, e, f; d = []; for (c in b) {
        e = b[c], a[`${c}`] = e, d.push(function () {
          let b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)f = g[b], h.push(a[`${f}${c.charAt(0).toUpperCase()}${c.substr(1)}`] = e)

          return h
        }.call(this))
      }

      return d
    }, e.prototype.vendorCSS = function (a, b) {
      let c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)i = f[c], g = g || h.getPropertyCSSValue(`-${i}-${b}`)

      return g
    }, e.prototype.animationName = function (a) {
      let b; try { b = this.vendorCSS(a, 'animation-name').cssText }
      catch (c) { b = d(a).getPropertyValue('animation-name') }

      return b === 'none' ? '' : b
    }, e.prototype.cacheAnimationName = function (a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function (a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function () { return this.scrolled = !0 }, e.prototype.scrollCallback = function () {
      let a

      return !this.scrolled || (this.scrolled = !1, this.boxes = (function () {
        let b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a))

        return e
      }.call(this)), this.boxes.length || this.config.live)
        ? void 0
        : this.stop()
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;)a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop

      return b
    }, e.prototype.isVisible = function (a) {
      let b, c, d, e, f

      return c = a.getAttribute('data-wow-offset') || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function () { return this._util != null ? this._util : this._util = new b() }, e.prototype.disabled = function () { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
  }())
}).call(this)
