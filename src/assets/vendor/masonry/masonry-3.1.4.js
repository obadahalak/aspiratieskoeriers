/* Masonry PACKAGED v3.1.4
* Cascading grid layout library
* http://masonry.desandro.com
* MIT License
* by David DeSandro */
/* Mike Davis - Added "getItems" method
- Fixed bug in "measureColumns" method which didn't take into
account hidden items.
2/28/2014 */
/* Bridget makes jQuery widgets
v1.0.1 */
!(function (t) {
  function e() {} function i(t) {
    function i(e) { e.prototype.option || (e.prototype.option = function (e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) } function o(e, i) {
      t.fn[e] = function (o) {
        if (typeof o == 'string') {
          for (let s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
            const p = this[a]; const u = t.data(p, e); if (u) {
              if (t.isFunction(u[o]) && o.charAt(0) !== '_') {
                const f = u[o].apply(u, s); if (void 0 !== f)
                  return f
              }
              else { r(`no such method '${o}' for ${e} instance`) }
            }
            else { r(`cannot call methods on ${e} prior to initialization; attempted to call '${o}'`) }
          }

          return this
        }

        return this.each(function () { let n = t.data(this, e); n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n)) })
      }
    } if (t) {
      var r = typeof console == 'undefined' ? e : function (t) { console.error(t) }

      return t.bridget = function (t, e) { i(e), o(t, e) }, t.bridget
    }
  } var n = Array.prototype.slice; typeof define == 'function' && define.amd ? define('jquery-bridget/jquery.bridget', ['jquery'], i) : i(t.jQuery)
}(window)), (function (t) {
  function e(e) {
    const i = t.event

    return i.target = i.target || i.srcElement || e, i
  } const i = document.documentElement; let n = function () {}; i.addEventListener ? n = function (t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (n = function (t, i, n) { t[i + n] = n.handleEvent ? function () { const i = e(t); n.handleEvent.call(n, i) } : function () { const i = e(t); n.call(t, i) }, t.attachEvent(`on${i}`, t[i + n]) }); let o = function () {}; i.removeEventListener
    ? o = function (t, e, i) { t.removeEventListener(e, i, !1) }
    : i.detachEvent && (o = function (t, e, i) {
      t.detachEvent(`on${e}`, t[e + i]); try { delete t[e + i] }
      catch (n) { t[e + i] = void 0 }
    }); const r = { bind: n, unbind: o }; typeof define == 'function' && define.amd ? define('eventie/eventie', r) : typeof exports == 'object' ? module.exports = r : t.eventie = r
}(this)), (function (t) { function e(t) { typeof t == 'function' && (e.isReady ? t() : r.push(t)) } function i(t) { const i = t.type === 'readystatechange' && o.readyState !== 'complete'; if (!e.isReady && !i) { e.isReady = !0; for (let n = 0, s = r.length; s > n; n++) { const a = r[n]; a() } } } function n(n) { return n.bind(o, 'DOMContentLoaded', i), n.bind(o, 'readystatechange', i), n.bind(t, 'load', i), e } var o = t.document; var r = []; e.isReady = !1, typeof define == 'function' && define.amd ? (e.isReady = typeof requirejs == 'function', define('doc-ready/doc-ready', ['eventie/eventie'], n)) : t.docReady = n(t.eventie) }(this)), (function () {
  function t() {} function e(t, e) {
    for (let i = t.length; i--;) {
      if (t[i].listener === e)
        return i
    }

    return -1
  } function i(t) { return function () { return this[t].apply(this, arguments) } } const n = t.prototype; const o = this; const r = o.EventEmitter; n.getListeners = function (t) {
    let e; let i; const n = this._getEvents(); if (t instanceof RegExp) { e = {}; for (i in n)n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]) }
    else { e = n[t] || (n[t] = []) }

    return e
  }, n.flattenListeners = function (t) {
    let e; const i = []; for (e = 0; e < t.length; e += 1)i.push(t[e].listener)

    return i
  }, n.getListenersAsObject = function (t) {
    let e; const i = this.getListeners(t)

    return Array.isArray(i) && (e = {}, e[t] = i), e || i
  }, n.addListener = function (t, i) {
    let n; const o = this.getListenersAsObject(t); const r = typeof i == 'object'; for (n in o)o.hasOwnProperty(n) && e(o[n], i) === -1 && o[n].push(r ? i : { listener: i, once: !1 })

    return this
  }, n.on = i('addListener'), n.addOnceListener = function (t, e) { return this.addListener(t, { listener: e, once: !0 }) }, n.once = i('addOnceListener'), n.defineEvent = function (t) { return this.getListeners(t), this }, n.defineEvents = function (t) {
    for (let e = 0; e < t.length; e += 1) this.defineEvent(t[e])

    return this
  }, n.removeListener = function (t, i) {
    let n; let o; const r = this.getListenersAsObject(t); for (o in r)r.hasOwnProperty(o) && (n = e(r[o], i), n !== -1 && r[o].splice(n, 1))

    return this
  }, n.off = i('removeListener'), n.addListeners = function (t, e) { return this.manipulateListeners(!1, t, e) }, n.removeListeners = function (t, e) { return this.manipulateListeners(!0, t, e) }, n.manipulateListeners = function (t, e, i) {
    let n; let o; const r = t ? this.removeListener : this.addListener; const s = t ? this.removeListeners : this.addListeners; if (typeof e != 'object' || e instanceof RegExp)
      for (n = i.length; n--;)r.call(this, e, i[n]); else for (n in e)e.hasOwnProperty(n) && (o = e[n]) && (typeof o == 'function' ? r.call(this, n, o) : s.call(this, n, o))

    return this
  }, n.removeEvent = function (t) {
    let e; const i = typeof t; const n = this._getEvents(); if (i === 'string')
      delete n[t]; else if (t instanceof RegExp)
      for (e in n)n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events

    return this
  }, n.removeAllListeners = i('removeEvent'), n.emitEvent = function (t, e) {
    let i; let n; let o; let r; const s = this.getListenersAsObject(t); for (o in s) {
      if (s.hasOwnProperty(o))
        for (n = s[o].length; n--;)i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener)
    }

    return this
  }, n.trigger = i('emitEvent'), n.emit = function (t) {
    const e = Array.prototype.slice.call(arguments, 1)

    return this.emitEvent(t, e)
  }, n.setOnceReturnValue = function (t) { return this._onceReturnValue = t, this }, n._getOnceReturnValue = function () { return this.hasOwnProperty('_onceReturnValue') ? this._onceReturnValue : !0 }, n._getEvents = function () { return this._events || (this._events = {}) }, t.noConflict = function () { return o.EventEmitter = r, t }, typeof define == 'function' && define.amd ? define('eventEmitter/EventEmitter', [], () => { return t }) : typeof module == 'object' && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this)), (function (t) {
  function e(t) {
    if (t) {
      if (typeof n[t] == 'string')
        return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (var e, o = 0, r = i.length; r > o; o++) {
        if (e = i[o] + t, typeof n[e] == 'string')
          return e
      }
    }
  } var i = 'Webkit Moz ms Ms O'.split(' '); var n = document.documentElement.style; typeof define == 'function' && define.amd ? define('get-style-property/get-style-property', [], () => { return e }) : typeof exports == 'object' ? module.exports = e : t.getStyleProperty = e
}(window)), (function (t, e) {
  function i(t) {
    const e = Number.parseFloat(t); const i = !t.includes('%') && !isNaN(e)

    return i && e
  } function n() {
    for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = a.length; i > e; e++) { const n = a[e]; t[n] = 0 }

    return t
  } function o(t) {
    function e(t) {
      if (typeof t == 'string' && (t = document.querySelector(t)), t && typeof t == 'object' && t.nodeType) {
        const e = s(t); if (e.display === 'none')
          return n(); const r = {}; r.width = t.offsetWidth, r.height = t.offsetHeight; for (var u = r.isBorderBox = !(!p || !e[p] || e[p] !== 'border-box'), f = 0, c = a.length; c > f; f++) { const d = a[f]; let l = e[d]; l = o(t, l); const m = Number.parseFloat(l); r[d] = isNaN(m) ? 0 : m } const y = r.paddingLeft + r.paddingRight; const g = r.paddingTop + r.paddingBottom; const v = r.marginLeft + r.marginRight; const b = r.marginTop + r.marginBottom; const _ = r.borderLeftWidth + r.borderRightWidth; const E = r.borderTopWidth + r.borderBottomWidth; const L = u && h; const x = i(e.width); x !== !1 && (r.width = x + (L ? 0 : y + _)); const z = i(e.height)

        return z !== !1 && (r.height = z + (L ? 0 : g + E)), r.innerWidth = r.width - (y + _), r.innerHeight = r.height - (g + E), r.outerWidth = r.width + v, r.outerHeight = r.height + b, r
      }
    } function o(t, e) {
      if (r || !e.includes('%'))
        return e; const i = t.style; const n = i.left; const o = t.runtimeStyle; const s = o && o.left

      return s && (o.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = n, s && (o.left = s), e
    } let h; var p = t('boxSizing')

    return (function () { if (p) { const t = document.createElement('div'); t.style.width = '200px', t.style.padding = '1px 2px 3px 4px', t.style.borderStyle = 'solid', t.style.borderWidth = '1px 2px 3px 4px', t.style[p] = 'border-box'; const e = document.body || document.documentElement; e.appendChild(t); const n = s(t); h = i(n.width) === 200, e.removeChild(t) } }()), e
  } var r = t.getComputedStyle; var s = r ? function (t) { return r(t, null) } : function (t) { return t.currentStyle }; var a = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth']; typeof define == 'function' && define.amd ? define('get-size/get-size', ['get-style-property/get-style-property'], o) : typeof exports == 'object' ? module.exports = o(require('get-style-property')) : t.getSize = o(t.getStyleProperty)
}(window)), (function (t, e) {
  function i(t, e) { return t[a](e) } function n(t) { if (!t.parentNode) { const e = document.createDocumentFragment(); e.appendChild(t) } } function o(t, e) {
    n(t); for (let i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++) {
      if (i[o] === t)
        return !0
    }

    return !1
  } function r(t, e) { return n(t), i(t, e) } let s; var a = (function () {
    if (e.matchesSelector)
      return 'matchesSelector'; for (let t = ['webkit', 'moz', 'ms', 'o'], i = 0, n = t.length; n > i; i++) {
      const o = t[i]; const r = `${o}MatchesSelector`; if (e[r])
        return r
    }
  }()); if (a) { const h = document.createElement('div'); const p = i(h, 'div'); s = p ? i : r }
  else { s = o } typeof define == 'function' && define.amd ? define('matches-selector/matches-selector', [], () => { return s }) : window.matchesSelector = s
}(this, Element.prototype)), (function (t) {
  function e(t, e) {
    for (const i in e)t[i] = e[i]

    return t
  } function i(t) {
    for (var e in t) return !1

    return e = null, !0
  } function n(t) { return t.replace(/([A-Z])/g, (t) => { return `-${t.toLowerCase()}` }) } function o(t, o, r) {
    function a(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } const h = r('transition'); const p = r('transform'); const u = h && p; const f = !!r('perspective'); const c = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend', transition: 'transitionend' }[h]; const d = ['transform', 'transition', 'transitionDuration', 'transitionProperty']; const l = (function () {
      for (var t = {}, e = 0, i = d.length; i > e; e++) { const n = d[e]; const o = r(n); o && o !== n && (t[n] = o) }

      return t
    }()); e(a.prototype, t.prototype), a.prototype._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: 'absolute' }) }, a.prototype.handleEvent = function (t) { const e = `on${t.type}`; this[e] && this[e](t) }, a.prototype.getSize = function () { this.size = o(this.element) }, a.prototype.css = function (t) { const e = this.element.style; for (const i in t) { const n = l[i] || i; e[n] = t[i] } }, a.prototype.getPosition = function () { const t = s(this.element); const e = this.layout.options; const i = e.isOriginLeft; const n = e.isOriginTop; let o = Number.parseInt(t[i ? 'left' : 'right'], 10); let r = Number.parseInt(t[n ? 'top' : 'bottom'], 10); o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r; const a = this.layout.size; o -= i ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r }, a.prototype.layoutPosition = function () { const t = this.layout.size; const e = this.layout.options; const i = {}; e.isOriginLeft ? (i.left = `${this.position.x + t.paddingLeft}px`, i.right = '') : (i.right = `${this.position.x + t.paddingRight}px`, i.left = ''), e.isOriginTop ? (i.top = `${this.position.y + t.paddingTop}px`, i.bottom = '') : (i.bottom = `${this.position.y + t.paddingBottom}px`, i.top = ''), this.css(i), this.emitEvent('layout', [this]) }; const m = f ? function (t, e) { return `translate3d(${t}px, ${e}px, 0)` } : function (t, e) { return `translate(${t}px, ${e}px)` }; a.prototype._transitionTo = function (t, e) {
      this.getPosition(); const i = this.position.x; const n = this.position.y; const o = Number.parseInt(t, 10); const r = Number.parseInt(e, 10); const s = o === this.position.x && r === this.position.y; if (this.setPosition(t, e), s && !this.isTransitioning)
        return void this.layoutPosition(); let a = t - i; let h = e - n; const p = {}; const u = this.layout.options; a = u.isOriginLeft ? a : -a, h = u.isOriginTop ? h : -h, p.transform = m(a, h), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isConstruction: !0 })
    }, a.prototype.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) { this.position.x = Number.parseInt(t, 10), this.position.y = Number.parseInt(e, 10) }, a.prototype._nonTransition = function (t) { this.css(t.to), t.isConstruction && this._removeStyles(t.to); for (const e in t.onTransitionEnd)t.onTransitionEnd[e].call(this) }, a.prototype._transition = function (t) {
      if (!Number.parseFloat(this.layout.options.transitionDuration))
        return void this._nonTransition(t); const e = this._transn; for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to)e.ingProperties[i] = !0, t.isConstruction && (e.clean[i] = !0); if (t.from) { this.css(t.from); let n = this.element.offsetHeight; n = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    }; const y = p && `${n(p)},opacity`; a.prototype.enableTransition = function () { this.isTransitioning || (this.css({ transitionProperty: y, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(c, this, !1)) }, a.prototype.transition = a.prototype[h ? '_transition' : '_nonTransition'], a.prototype.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, a.prototype.onotransitionend = function (t) { this.ontransitionend(t) }; const g = { '-webkit-transform': 'transform', '-moz-transform': 'transform', '-o-transform': 'transform' }; a.prototype.ontransitionend = function (t) { if (t.target === this.element) { const e = this._transn; const n = g[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = '', delete e.clean[n]), n in e.onEnd) { const o = e.onEnd[n]; o.call(this), delete e.onEnd[n] } this.emitEvent('transitionEnd', [this]) } }, a.prototype.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1 }, a.prototype._removeStyles = function (t) { const e = {}; for (const i in t)e[i] = ''; this.css(e) }; const v = { transitionProperty: '', transitionDuration: '' }

    return a.prototype.removeTransitionStyles = function () { this.css(v) }, a.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.emitEvent('remove', [this]) }, a.prototype.remove = function () {
      if (!h || !Number.parseFloat(this.layout.options.transitionDuration))
        return void this.removeElem(); const t = this; this.on('transitionEnd', () => { return t.removeElem(), !0 }), this.hide()
    }, a.prototype.reveal = function () { delete this.isHidden, this.css({ display: '' }); const t = this.layout.options; this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isConstruction: !0 }) }, a.prototype.hide = function () { this.isHidden = !0, this.css({ display: '' }); const t = this.layout.options; this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isConstruction: !0, onTransitionEnd: { opacity() { this.isHidden && this.css({ display: 'none' }) } } }) }, a.prototype.destroy = function () { this.css({ position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: '' }) }, a
  } const r = document.defaultView; var s = r && r.getComputedStyle ? function (t) { return r.getComputedStyle(t, null) } : function (t) { return t.currentStyle }; typeof define == 'function' && define.amd ? define('outlayer/item', ['eventEmitter/EventEmitter', 'get-size/get-size', 'get-style-property/get-style-property'], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window)), (function (t) {
  function e(t, e) {
    for (const i in e)t[i] = e[i]

    return t
  } function i(t) { return f.call(t) === '[object Array]' } function n(t) {
    let e = []; if (i(t))
      e = t; else if (t && typeof t.length == 'number')
      for (let n = 0, o = t.length; o > n; n++)e.push(t[n]); else e.push(t)

    return e
  } function o(t, e) { const i = d(e, t); i !== -1 && e.splice(i, 1) } function r(t) { return t.replace(/(.)([A-Z])/g, (t, e, i) => { return `${e}-${i}` }).toLowerCase() } function s(i, s, f, d, l, m) {
    function y(t, i) {
      if (typeof t == 'string' && (t = a.querySelector(t)), !t || !c(t))
        return void (h && h.error(`Bad ${this.constructor.namespace} element: ${t}`)); this.element = t, this.options = e({}, this.options), this.option(i); const n = ++v; this.element.outlayerGUID = n, b[n] = this, this._create(), this.options.isInitLayout && this.layout()
    } function g(t, i) { t.prototype[i] = e({}, y.prototype[i]) } var v = 0; var b = {}

    return y.namespace = 'outlayer', y.Item = m, y.prototype.options = { containerStyle: { position: 'relative' }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, transitionDuration: '0.4s', hiddenStyle: { opacity: 0, transform: 'scale(0.001)' }, visibleStyle: { opacity: 1, transform: 'scale(1)' } }, e(y.prototype, f.prototype), y.prototype.option = function (t) { e(this.options, t) }, y.prototype._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, y.prototype.reloadItems = function () { this.items = this._itemize(this.element.children) }, y.prototype._itemize = function (t) {
      for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) { const s = e[o]; const a = new i(s, this); n.push(a) }

      return n
    }, y.prototype._filterFindItemElements = function (t) {
      t = n(t); for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
        const s = t[o]; if (c(s)) {
          if (e) { l(s, e) && i.push(s); for (let a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++)i.push(a[h]) }
          else { i.push(s) }
        }
      }

      return i
    }, y.prototype.getAllItems = function () {
      for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e])

      return t
    }, y.prototype.getItemElements = function () {
      for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element)

      return t
    }, y.prototype.layout = function () { this._resetLayout(), this._manageStamps(); const t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, t), this._isLayoutInited = !0 }, y.prototype._init = y.prototype.layout, y.prototype._resetLayout = function () { this.getSize() }, y.prototype.getSize = function () { this.size = d(this.element) }, y.prototype._getMeasurement = function (t, e) { let i; const n = this.options[t]; n ? (typeof n == 'string' ? i = this.element.querySelector(n) : c(n) && (i = n), this[t] = i ? d(i)[e] : n) : this[t] = 0 }, y.prototype.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, y.prototype._getItemsForLayout = function (t) {
      for (var e = [], i = 0, n = t.length; n > i; i++) { const o = t[i]; o.isIgnored || e.push(o) }

      return e
    }, y.prototype._layoutItems = function (t, e) {
      function i() { n.emitEvent('layoutComplete', [n, t]) } var n = this; if (!t || !t.length)
        return void i(); this._itemsOn(t, 'layout', i); for (var o = [], r = 0, s = t.length; s > r; r++) { const a = t[r]; const h = this._getItemLayoutPosition(a); h.item = a, h.isInstant = e || a.isLayoutInstant, o.push(h) } this._processLayoutQueue(o)
    }, y.prototype._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, y.prototype._processLayoutQueue = function (t) { for (let e = 0, i = t.length; i > e; e++) { const n = t[e]; this._positionItem(n.item, n.x, n.y, n.isInstant) } }, y.prototype._positionItem = function (t, e, i, n) { n ? t.goTo(e, i) : t.moveTo(e, i) }, y.prototype._postLayout = function () { const t = this._getContainerSize(); t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) }, y.prototype._getContainerSize = u, y.prototype._setContainerMeasure = function (t, e) { if (void 0 !== t) { const i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? 'width' : 'height'] = `${t}px` } }, y.prototype._itemsOn = function (t, e, i) { function n() { return o++, o === r && i.call(s), !0 } for (var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) { const p = t[a]; p.on(e, n) } }, y.prototype.ignore = function (t) { const e = this.getItem(t); e && (e.isIgnored = !0) }, y.prototype.unignore = function (t) { const e = this.getItem(t); e && delete e.isIgnored }, y.prototype.stamp = function (t) { if (t = this._find(t)) { this.stamps = this.stamps.concat(t); for (let e = 0, i = t.length; i > e; e++) { const n = t[e]; this.ignore(n) } } }, y.prototype.unstamp = function (t) {
      if (t = this._find(t))
        for (let e = 0, i = t.length; i > e; e++) { const n = t[e]; o(n, this.stamps), this.unignore(n) }
    }, y.prototype._find = function (t) { return t ? (typeof t == 'string' && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0 }, y.prototype._manageStamps = function () { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (let t = 0, e = this.stamps.length; e > t; t++) { const i = this.stamps[t]; this._manageStamp(i) } } }, y.prototype._getBoundingRect = function () { const t = this.element.getBoundingClientRect(); const e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, y.prototype._manageStamp = u, y.prototype._getElementOffset = function (t) {
      const e = t.getBoundingClientRect(); const i = this._boundingRect; const n = d(t)

      return { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom }
    }, y.prototype.handleEvent = function (t) { const e = `on${t.type}`; this[e] && this[e](t) }, y.prototype.bindResize = function () { this.isResizeBound || (i.bind(t, 'resize', this), this.isResizeBound = !0) }, y.prototype.unbindResize = function () { i.unbind(t, 'resize', this), this.isResizeBound = !1 }, y.prototype.onresize = function () { function t() { e.resize(), delete e.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var e = this; this.resizeTimeout = setTimeout(t, 100) }, y.prototype.resize = function () { const t = d(this.element); const e = this.size && t; e && t.innerWidth === this.size.innerWidth || this.layout() }, y.prototype.addItems = function (t) {
      const e = this._itemize(t)

      return e.length && (this.items = this.items.concat(e)), e
    }, y.prototype.appended = function (t) { const e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, y.prototype.prepended = function (t) { const e = this._itemize(t); if (e.length) { const i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, y.prototype.reveal = function (t) {
      const e = t && t.length; if (e)
        for (let i = 0; e > i; i++) { const n = t[i]; n.reveal() }
    }, y.prototype.hide = function (t) {
      const e = t && t.length; if (e)
        for (let i = 0; e > i; i++) { const n = t[i]; n.hide() }
    }, y.prototype.getItem = function (t) {
      for (let e = 0, i = this.items.length; i > e; e++) {
        const n = this.items[e]; if (n.element === t)
          return n
      }
    }, y.prototype.getItems = function (t) {
      if (t && t.length) {
        for (var e = [], i = 0, n = t.length; n > i; i++) { const o = t[i]; const r = this.getItem(o); r && e.push(r) }

        return e
      }
    }, y.prototype.remove = function (t) { t = n(t); const e = this.getItems(t); if (e && e.length) { this._itemsOn(e, 'remove', function () { this.emitEvent('removeComplete', [this, e]) }); for (let i = 0, r = e.length; r > i; i++) { const s = e[i]; s.remove(), o(s, this.items) } } }, y.prototype.destroy = function () { const t = this.element.style; t.height = '', t.position = '', t.width = ''; for (let e = 0, i = this.items.length; i > e; e++) { const n = this.items[e]; n.destroy() } this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace) }, y.data = function (t) {
      const e = t && t.outlayerGUID

      return e && b[e]
    }, y.create = function (t, i) {
      function n() { y.apply(this, arguments) }

      return Object.create ? n.prototype = Object.create(y.prototype) : e(n.prototype, y.prototype), n.prototype.constructor = n, g(n, 'options'), e(n.prototype.options, i), n.namespace = t, n.data = y.data, n.Item = function () { m.apply(this, arguments) }, n.Item.prototype = new m(), s(() => {
        for (let e = r(t), i = a.querySelectorAll(`.js-${e}`), o = `data-${e}-options`, s = 0, u = i.length; u > s; s++) {
          var f; const c = i[s]; const d = c.getAttribute(o); try { f = d && JSON.parse(d) }
          catch (l) { h && h.error(`Error parsing ${o} on ${c.nodeName.toLowerCase()}${c.id ? `#${c.id}` : ''}: ${l}`); continue } const m = new n(c, f); p && p.data(c, t, m)
        }
      }), p && p.bridget && p.bridget(t, n), n
    }, y.Item = m, y
  } var a = t.document; var h = t.console; var p = t.jQuery; var u = function () {}; var f = Object.prototype.toString; var c = typeof HTMLElement == 'object' ? function (t) { return t instanceof HTMLElement } : function (t) { return t && typeof t == 'object' && t.nodeType === 1 && typeof t.nodeName == 'string' }; var d = Array.prototype.indexOf
    ? function (t, e) { return t.indexOf(e) }
    : function (t, e) {
      for (let i = 0, n = t.length; n > i; i++) {
        if (t[i] === e)
          return i
      }

      return -1
    }; typeof define == 'function' && define.amd ? define('outlayer/outlayer', ['eventie/eventie', 'doc-ready/doc-ready', 'eventEmitter/EventEmitter', 'get-size/get-size', 'matches-selector/matches-selector', './item'], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window)), (function (t) {
  function e(t, e) {
    const n = t.create('masonry')

    return n.prototype._resetLayout = function () { this.getSize(), this._getMeasurement('columnWidth', 'outerWidth'), this._getMeasurement('gutter', 'outerWidth'), this.measureColumns(); let t = this.cols; for (this.colYs = []; t--;) this.colYs.push(0); this.maxY = 0 }, n.prototype.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { for (var t, i = 0, n = this.items.length; n > i; i++) if (!this.items[i].isIgnored) { t = this.items[i]; break }t || (t = this.items[0]); const o = t && t.element; this.columnWidth = o && e(o).outerWidth || this.containerWidth } this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, n.prototype.getContainerWidth = function () { const t = this.options.isFitWidth ? this.element.parentNode : this.element; const i = e(t); this.containerWidth = i && i.innerWidth }, n.prototype._getItemLayoutPosition = function (t) {
      t.getSize(); const e = t.size.outerWidth % this.columnWidth; const n = e && e < 1 ? 'round' : 'ceil'; let o = Math[n](t.size.outerWidth / this.columnWidth); o = Math.min(o, this.cols); for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i(r, s), h = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, u = this.cols + 1 - r.length, f = 0; u > f; f++) this.colYs[a + f] = p

      return h
    }, n.prototype._getColGroup = function (t) {
      if (t < 2)
        return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) { const o = this.colYs.slice(n, n + t); e[n] = Math.max.apply(Math, o) }

      return e
    }, n.prototype._manageStamp = function (t) { const i = e(t); const n = this._getElementOffset(t); const o = this.options.isOriginLeft ? n.left : n.right; const r = o + i.outerWidth; let s = Math.floor(o / this.columnWidth); s = Math.max(0, s); let a = Math.floor(r / this.columnWidth); a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (let h = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(h, this.colYs[p]) }, n.prototype._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs); const t = { height: this.maxY }

      return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function () {
      for (var t = 0, e = this.cols; --e && this.colYs[e] === 0;)t++

      return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.resize = function () { const t = this.containerWidth; this.getContainerWidth(), t !== this.containerWidth && this.layout() }, n
  } var i = Array.prototype.indexOf
    ? function (t, e) { return t.indexOf(e) }
    : function (t, e) {
      for (let i = 0, n = t.length; n > i; i++) {
        const o = t[i]; if (o === e)
          return i
      }

      return -1
    }; typeof define == 'function' && define.amd ? define(['outlayer/outlayer', 'get-size/get-size'], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window))
