/* -- Filter Plugin -- */
!(function (n) {
  'use strict'; n.fn.masonryFilter = function (e) {
    const i = function (n) { setTimeout(() => { n.masonry('layout') }, 100) }; const t = function (t) { const r = t.masonry('getAllItems'); const o = []; const s = []; n.each(r, (i) => { const t = r[i]; const a = n(t.element); const u = e.filter && e.filter.call(a); u ? t.isHidden && (t.isIgnored = !1, o.push(t)) : t.isHidden || (t.isIgnored = !0, s.push(t)) }), t.masonry('hide', s), t.masonry('reveal', o), i(t) }

    return this.each(function () { const e = n(this); t(e) })
  }
}(window.jQuery))
