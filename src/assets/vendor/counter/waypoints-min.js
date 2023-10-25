!(function () {
  'use strict'; let t = 0; const e = {}; function i(o) {
    if (!o)
      throw new Error('No options passed to Waypoint constructor'); if (!o.element)
      throw new Error('No element option passed to Waypoint constructor'); if (!o.handler)
      throw new Error('No handler option passed to Waypoint constructor'); this.key = `waypoint-${t}`, this.options = i.Adapter.extend({}, i.defaults, o), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? 'horizontal' : 'vertical', this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
  }i.prototype.queueTrigger = function (t) { this.group.queueTrigger(this, t) }, i.prototype.trigger = function (t) { this.enabled && this.callback && this.callback.apply(this, t) }, i.prototype.destroy = function () { this.context.remove(this), this.group.remove(this), delete e[this.key] }, i.prototype.disable = function () { return this.enabled = !1, this }, i.prototype.enable = function () { return this.context.refresh(), this.enabled = !0, this }, i.prototype.next = function () { return this.group.next(this) }, i.prototype.previous = function () { return this.group.previous(this) }, i.invokeAll = function (t) { const i = []; for (const o in e)i.push(e[o]); for (let n = 0, r = i.length; n < r; n++)i[n][t]() }, i.destroyAll = function () { i.invokeAll('destroy') }, i.disableAll = function () { i.invokeAll('disable') }, i.enableAll = function () {
    i.Context.refreshAll(); for (const t in e)e[t].enabled = !0

    return this
  }, i.refreshAll = function () { i.Context.refreshAll() }, i.viewportHeight = function () { return window.innerHeight || document.documentElement.clientHeight }, i.viewportWidth = function () { return document.documentElement.clientWidth }, i.adapters = [], i.defaults = { context: window, continuous: !0, enabled: !0, group: 'default', horizontal: !1, offset: 0 }, i.offsetAliases = { 'bottom-in-view': function () { return this.context.innerHeight() - this.adapter.outerHeight() }, 'right-in-view': function () { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = i
}()), (function () {
  'use strict'; function t(t) { window.setTimeout(t, 1e3 / 60) } let e = 0; const i = {}; const o = window.Waypoint; const n = window.onload; function r(t) { this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = `waypoint-context-${e}`, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }r.prototype.add = function (t) { const e = t.options.horizontal ? 'horizontal' : 'vertical'; this.waypoints[e][t.key] = t, this.refresh() }, r.prototype.checkEmpty = function () { const t = this.Adapter.isEmptyObject(this.waypoints.horizontal); const e = this.Adapter.isEmptyObject(this.waypoints.vertical); const o = this.element == this.element.window; t && e && !o && (this.adapter.off('.waypoints'), delete i[this.key]) }, r.prototype.createThrottledResizeHandler = function () { const t = this; function e() { t.handleResize(), t.didResize = !1 } this.adapter.on('resize.waypoints', () => { t.didResize || (t.didResize = !0, o.requestAnimationFrame(e)) }) }, r.prototype.createThrottledScrollHandler = function () { const t = this; function e() { t.handleScroll(), t.didScroll = !1 } this.adapter.on('scroll.waypoints', () => { t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e)) }) }, r.prototype.handleResize = function () { o.Context.refreshAll() }, r.prototype.handleScroll = function () { const t = {}; const e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left' }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up' } }; for (const i in e) { const o = e[i]; const n = o.newScroll > o.oldScroll ? o.forward : o.backward; for (const r in this.waypoints[i]) { const s = this.waypoints[i][r]; if (s.triggerPoint !== null) { const a = o.oldScroll < s.triggerPoint; const l = o.newScroll >= s.triggerPoint; (a && l || !a && !l) && (s.queueTrigger(n), t[s.group.id] = s.group) } } } for (const h in t)t[h].flushTriggers(); this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, r.prototype.innerHeight = function () { return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight() }, r.prototype.remove = function (t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, r.prototype.innerWidth = function () { return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth() }, r.prototype.destroy = function () { const t = []; for (const e in this.waypoints) for (const i in this.waypoints[e])t.push(this.waypoints[e][i]); for (let o = 0, n = t.length; o < n; o++)t[o].destroy() }, r.prototype.refresh = function () {
    let t; const e = this.element == this.element.window; const i = e ? void 0 : this.adapter.offset(); const n = {}; this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left', offsetProp: 'left' }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up', offsetProp: 'top' } }; for (const r in t) { const s = t[r]; for (const a in this.waypoints[r]) { var l; var h; var p; var u; const c = this.waypoints[r][a]; let d = c.options.offset; const f = c.triggerPoint; let w = 0; const y = f == null; c.element !== c.element.window && (w = c.adapter.offset()[s.offsetProp]), typeof d == 'function' ? d = d.apply(c) : typeof d == 'string' && (d = Number.parseFloat(d), c.options.offset.includes('%') && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, c.triggerPoint = Math.floor(w + l - d), h = f < s.oldScroll, p = c.triggerPoint >= s.oldScroll, u = !h && !p, !y && (h && p) ? (c.queueTrigger(s.backward), n[c.group.id] = c.group) : !y && u ? (c.queueTrigger(s.forward), n[c.group.id] = c.group) : y && s.oldScroll >= c.triggerPoint && (c.queueTrigger(s.forward), n[c.group.id] = c.group) } }

    return o.requestAnimationFrame(() => { for (const t in n)n[t].flushTriggers() }), this
  }, r.findOrCreateByElement = function (t) { return r.findByElement(t) || new r(t) }, r.refreshAll = function () { for (const t in i)i[t].refresh() }, r.findByElement = function (t) { return i[t.waypointContextKey] }, window.onload = function () { n && n(), r.refreshAll() }, o.requestAnimationFrame = function (e) { (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e) }, o.Context = r
}()), (function () {
  'use strict'; function t(t, e) { return t.triggerPoint - e.triggerPoint } function e(t, e) { return e.triggerPoint - t.triggerPoint } const i = { vertical: {}, horizontal: {} }; const o = window.Waypoint; function n(t) { this.name = t.name, this.axis = t.axis, this.id = `${this.name}-${this.axis}`, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this }n.prototype.add = function (t) { this.waypoints.push(t) }, n.prototype.clearTriggerQueues = function () { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, n.prototype.flushTriggers = function () { for (const i in this.triggerQueues) { const o = this.triggerQueues[i]; const n = i === 'up' || i === 'left'; o.sort(n ? e : t); for (let r = 0, s = o.length; r < s; r += 1) { const a = o[r]; (a.options.continuous || r === o.length - 1) && a.trigger([i]) } } this.clearTriggerQueues() }, n.prototype.next = function (e) {
    this.waypoints.sort(t); const i = o.Adapter.inArray(e, this.waypoints)

    return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
  }, n.prototype.previous = function (e) {
    this.waypoints.sort(t); const i = o.Adapter.inArray(e, this.waypoints)

    return i ? this.waypoints[i - 1] : null
  }, n.prototype.queueTrigger = function (t, e) { this.triggerQueues[e].push(t) }, n.prototype.remove = function (t) { const e = o.Adapter.inArray(t, this.waypoints); e > -1 && this.waypoints.splice(e, 1) }, n.prototype.first = function () { return this.waypoints[0] }, n.prototype.last = function () { return this.waypoints[this.waypoints.length - 1] }, n.findOrCreate = function (t) { return i[t.axis][t.name] || new n(t) }, o.Group = n
}()), (function () {
  'use strict'; const t = window.jQuery; const e = window.Waypoint; function i(e) { this.$element = t(e) }t.each(['innerHeight', 'innerWidth', 'off', 'offset', 'on', 'outerHeight', 'outerWidth', 'scrollLeft', 'scrollTop'], (t, e) => {
    i.prototype[e] = function () {
      const t = Array.prototype.slice.call(arguments)

      return this.$element[e].apply(this.$element, t)
    }
  }), t.each(['extend', 'inArray', 'isEmptyObject'], (e, o) => { i[o] = t[o] }), e.adapters.push({ name: 'jquery', Adapter: i }), e.Adapter = i
}()), (function () {
  'use strict'; const t = window.Waypoint; function e(e) {
    return function () {
      const i = []; let o = arguments[0]

      return e.isFunction(arguments[0]) && ((o = e.extend({}, arguments[1])).handler = arguments[0]), this.each(function () { const n = e.extend({}, o, { element: this }); typeof n.context == 'string' && (n.context = e(this).closest(n.context)[0]), i.push(new t(n)) }), i
    }
  }window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}())