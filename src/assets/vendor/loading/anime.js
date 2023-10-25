/*
 2017 Julian Garnier
 Released under the MIT license
*/
const $jscomp$this = this;
(function (v, p) { typeof define === 'function' && define.amd ? define([], p) : typeof module === 'object' && module.exports ? module.exports = p() : v.anime = p() })(this, () => {
  function v(a) {
    if (!g.col(a)) {
      try { return document.querySelectorAll(a) }
      catch (b) {}
    }
  } function p(a) { return a.reduce((a, d) => { return a.concat(g.arr(d) ? p(d) : d) }, []) } function w(a) {
    if (g.arr(a))
      return a; g.str(a) && (a = v(a) || a)

    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
  } function F(a, b) { return a.includes(b) }
  function A(a) {
    const b = {}; let d; for (d in a)b[d] = a[d]

    return b
  } function G(a, b) {
    const d = A(a); let c; for (c in a)d[c] = b.hasOwnProperty(c) ? b[c] : a[c]

    return d
  } function B(a, b) {
    const d = A(a); let c; for (c in b)d[c] = g.und(a[c]) ? b[c] : a[c]

    return d
  } function S(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (a, b, d, h) => { return b + b + d + d + h + h }); var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a); a = Number.parseInt(b[1], 16); const d = Number.parseInt(b[2], 16); var b = Number.parseInt(b[3], 16)

    return `rgb(${a},${d},${b})`
  } function T(a) {
    function b(a, b, c) {
      c
< 0 && (c += 1); c > 1 && --c

      return c < 1 / 6 ? a + 6 * (b - a) * c : c < 0.5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
    } var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a); a = Number.parseInt(d[1]) / 360; var c = Number.parseInt(d[2]) / 100; var d = Number.parseInt(d[3]) / 100; if (c == 0) { c = d = a = d }
    else { const e = d < 0.5 ? d * (1 + c) : d + c - d * c; const l = 2 * d - e; var c = b(l, e, a + 1 / 3); var d = b(l, e, a); a = b(l, e, a - 1 / 3) }

    return `rgb(${255 * c},${255 * d},${255 * a})`
  } function x(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))
      return a[2]
  } function U(a) {
    if (a.includes('translate'))
      return 'px'
    if (a.includes('rotate') || a.includes('skew'))
      return 'deg'
  } function H(a, b) { return g.fnc(a) ? a(b.target, b.id, b.total) : a } function C(a, b) {
    if (b in a.style)
      return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0'
  } function I(a, b) {
    if (g.dom(a) && F(V, b))
      return 'transform'; if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b]))
      return 'attribute'; if (g.dom(a) && b !== 'transform' && C(a, b))
      return 'css'; if (a[b] != null)
      return 'object'
  } function W(a, b) {
    var d = U(b); var d = b.includes('scale')
      ? 1
      : 0 + d; a = a.style.transform; if (!a)
      return d; for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);)e.push(c[1]), l.push(c[2]); a = l.filter((a, c) => { return e[c] === b })

    return a.length ? a[0] : d
  } function J(a, b) {
    switch (I(a, b)) { case 'transform':return W(a, b); case 'css':return C(a, b); case 'attribute':return a.getAttribute(b) }

    return a[b] || 0
  } function K(a, b) {
    const d = /^(\*=|\+=|-=)/.exec(a); if (!d)
      return a; b = Number.parseFloat(b); a = Number.parseFloat(a.replace(d[0], '')); switch (d[0][0]) {
      case '+':return b + a; case '-':return b - a; case '*':return b
* a
    }
  } function D(a) { return g.obj(a) && a.hasOwnProperty('totalLength') } function X(a, b) {
    function d(c) {
      c = void 0 === c ? 0 : c

      return a.el.getPointAtLength(b + c >= 1 ? b + c : 0)
    } const c = d(); const e = d(-1); const l = d(1); switch (a.property) { case 'x':return c.x; case 'y':return c.y; case 'angle':return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI }
  } function L(a, b) {
    const d = /-?\d*\.?\d+/g; a = D(a) ? a.totalLength : a; if (g.col(a)) { b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0 }
    else { const c = x(a); a = c ? a.substr(0, a.length - c.length) : a; b = b ? a + b : a }b += ''

    return {
      original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0],
      strings: b.split(d),
    }
  } function Y(a, b) { return b.reduce((b, c, e) => { return b + a[e - 1] + c }) } function M(a) { return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter((a, d, c) => { return c.indexOf(a) === d }) } function Z(a) {
    const b = M(a)

    return b.map((a, c) => { return { target: a, id: c, total: b.length } })
  } function aa(a, b) {
    const d = A(b); if (g.arr(a)) { const c = a.length; c !== 2 || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = { value: a } }

    return w(a).map((a, c) => {
      c = c ? 0 : b.delay
      a = g.obj(a) && !D(a) ? a : { value: a }; g.und(a.delay) && (a.delay = c)

      return a
    }).map((a) => { return B(a, d) })
  } function ba(a, b) {
    const d = {}; let c; for (c in a) { let e = H(a[c], b); g.arr(e) && (e = e.map((a) => { return H(a, b) }), e.length === 1 && (e = e[0])); d[c] = e }d.duration = Number.parseFloat(d.duration); d.delay = Number.parseFloat(d.delay)

    return d
  } function ca(a) { return g.arr(a) ? y.apply(this, a) : N[a] } function da(a, b) {
    let d

    return a.tweens.map((c) => {
      c = ba(c, b); const e = c.value; var l = J(b.target, a.name); var h = d ? d.to.original : l; var h = g.arr(e) ? e[0] : h; const m = K(g.arr(e)
        ? e[1]
        : e, h); var l = x(m) || x(h) || x(l); c.isPath = D(e); c.from = L(h, l); c.to = L(m, l); c.start = d ? d.end : a.offset; c.end = c.start + c.delay + c.duration; c.easing = ca(c.easing); c.elasticity = (1e3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1e3; g.col(c.from.original) && (c.round = 1)

      return d = c
    })
  } function ea(a, b) {
    return p(a.map((a) => {
      return b.map((b) => {
        const c = I(a.target, b.name); if (c) { const d = da(b, a); b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay } }
        else { b = void 0 }

        return b
      })
    })).filter((a) => { return !g.und(a) })
  }
  function O(a, b, d) {
    const c = a === 'delay' ? Math.min : Math.max

    return b.length ? c.apply(Math, b.map((b) => { return b[a] })) : d[a]
  } function fa(a) {
    const b = G(ga, a); const d = G(ha, a); const c = Z(a.targets); const e = []; const g = B(b, d); let h; for (h in a)g.hasOwnProperty(h) || h === 'targets' || e.push({ name: h, offset: g.offset, tweens: aa(a[h], d) }); a = ea(c, e)

    return B(b, { children: [], animatables: c, animations: a, duration: O('duration', a, d), delay: O('delay', a, d) })
  } function n(a) {
    function b() { return window.Promise && new Promise((a) => { return Q = a }) } function d(a) {
      return f.reversed
        ? f.duration - a
        : a
    } function c(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        const g = d[b]; const h = g.animatable; let m = g.tweens; e.tween = m.filter((b) => { return a < b.end })[0] || m[m.length - 1]; e.isPath$1 = e.tween.isPath; e.round = e.tween.round; e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity); m = Y(e.tween.to.numbers.map(function (a) {
          return function (b, c) {
            c = a.isPath$1 ? 0 : a.tween.from.numbers[c]; b = c + a.eased * (b - c); a.isPath$1 && (b = X(a.tween.value,
              b)); a.round && (b = Math.round(b * a.round) / a.round)

            return b
          }
        }(e)), e.tween.to.strings); ia[g.type](h.target, g.property, m, c, h.id); g.currentValue = m; b++; e = { isPath$1: e.isPath$1, tween: e.tween, eased: e.eased, round: e.round }
      } if (c)
        for (const k in c)E || (E = C(document.body, 'transform') ? 'transform' : '-webkit-transform'), f.animatables[k].target.style[E] = c[k].join(' '); f.currentTime = a; f.progress = a / f.duration * 100
    } function e(a) {
      if (f[a])
        f[a](f)
    } function g() { f.remaining && !0 !== f.remaining && f.remaining-- } function h(a) {
      const h = f.duration
      const l = f.offset; const n = f.delay; const P = f.currentTime; const q = f.reversed; var r = d(a); var r = Math.min(Math.max(r, 0), h); if (f.children) {
        const p = f.children; if (r >= f.currentTime)
          for (var u = 0; u < p.length; u++)p[u].seek(r); else for (u = p.length; u--;)p[u].seek(r)
      }r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e('begin')), e('run')) : (r <= l && P !== 0 && (c(0), q && g()), r >= h && P !== h && (c(h), q || g())); a >= h && (f.remaining ? (t = m, f.direction === 'alternate' && (f.reversed = !f.reversed)) : (f.pause(), 'Promise' in window && (Q(), R = b()), f.completed || (f.completed = !0, e('complete'))),
      k = 0); e('update')
    }a = void 0 === a ? {} : a; let m; let t; var k = 0; var Q = null; var R = b(); var f = fa(a); f.reset = function () { let a = f.direction; let b = f.loop; f.currentTime = 0; f.progress = 0; f.paused = !0; f.began = !1; f.completed = !1; f.reversed = a === 'reverse'; f.remaining = a === 'alternate' && b === 1 ? 2 : b; for (a = f.children.length; a--;)b = f.children[a], b.seek(b.offset), b.reset() }; f.tick = function (a) { m = a; t || (t = m); h((k + m - t) * n.speed) }; f.seek = function (a) { h(d(a)) }; f.pause = function () { const a = q.indexOf(f); a > -1 && q.splice(a, 1); f.paused = !0 }; f.play = function () {
      f.paused && (f.paused
= !1, t = 0, k = d(f.currentTime), q.push(f), z || ja())
    }; f.reverse = function () { f.reversed = !f.reversed; t = 0; k = d(f.currentTime) }; f.restart = function () { f.pause(); f.reset(); f.play() }; f.finished = R; f.reset(); f.autoplay && f.play()

    return f
  } var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: 'normal', autoplay: !0, offset: 0 }; var ha = { duration: 1e3, delay: 0, easing: 'easeOutElastic', elasticity: 500, round: 0 }; var V = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY'.split(' ')
  let E; var g = {
    arr(a) { return Array.isArray(a) },
    obj(a) { return Object.prototype.toString.call(a).includes('Object') },
    svg(a) { return a instanceof SVGElement },
    dom(a) { return a.nodeType || g.svg(a) },
    str(a) { return typeof a === 'string' },
    fnc(a) { return typeof a === 'function' },
    und(a) { return typeof a === 'undefined' },
    hex(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
    rgb(a) { return a.startsWith('rgb') },
    hsl(a) { return a.startsWith('hsl') },
    col(a) {
      return g.hex(a)
|| g.rgb(a) || g.hsl(a)
    },
  }; var y = (function () {
    function a(a, d, c) { return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a }

    return function (b, d, c, e) {
      if (b >= 0 && b <= 1 && c >= 0 && c <= 1) {
        const g = new Float32Array(11); if (b !== d || c !== e)
          for (let h = 0; h < 11; ++h)g[h] = a(0.1 * h, b, c)

        return function (h) {
          if (b === d && c === e)
            return h; if (h === 0)
            return 0; if (h === 1)
            return 1; for (var m = 0, k = 1; k !== 10 && g[k] <= h; ++k)m += 0.1; --k; var k = m + (h - g[k]) / (g[k + 1] - g[k]) * 0.1; let l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b; if (l >= 0.001) {
            for (m = 0; m < 4; ++m) {
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b; if (l === 0)
                break
              var n = a(k, b, c) - h; var k = k - n / l
            }h = k
          }
          else if (l === 0) { h = k }
          else { var k = m; var m = m + 0.1; let f = 0; do n = k + (m - k) / 2, l = a(n, b, c) - h, l > 0 ? m = n : k = n; while (Math.abs(l) > 1e-7 && ++f < 10); h = n }

          return a(h, d, e)
        }
      }
    }
  }()); var N = (function () {
    function a(a, b) { return a === 0 || a === 1 ? a : -(2 ** (10 * (a - 1))) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b) } const b = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(' '); const d = {
      In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6,
        0.04,
        0.98,
        0.335], [0.6, -0.28, 0.735, 0.045], a],
      Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function (b, c) { return 1 - a(1 - b, c) }],
      InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function (b, c) { return b < 0.5 ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2 }],
    }; const c = { linear: y(0.25, 0.25, 0.75, 0.75) }; let e = {}; let l; for (l in d) {
      e.type = l, d[e.type].forEach(function (a) {
        return function (d,
          e) { c[`ease${a.type}${b[e]}`] = g.fnc(d) ? d : y.apply($jscomp$this, d) }
      }(e)), e = { type: e.type }
    }

    return c
  }()); var ia = { css(a, b, d) { return a.style[b] = d }, attribute(a, b, d) { return a.setAttribute(b, d) }, object(a, b, d) { return a[b] = d }, transform(a, b, d, c, e) { c[e] || (c[e] = []); c[e].push(`${b}(${d})`) } }; var q = []; var z = 0; var ja = (function () {
    function a() { z = requestAnimationFrame(b) } function b(b) {
      const c = q.length; if (c) { for (let d = 0; d < c;)q[d] && q[d].tick(b), d++; a() }
      else { cancelAnimationFrame(z), z = 0 }
    }

    return a
  }()); n.version = '2.0.2'
  n.speed = 1; n.running = q; n.remove = function (a) { a = M(a); for (let b = q.length; b--;) for (let d = q[b], c = d.animations, e = c.length; e--;)F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause()) }; n.getValue = J; n.path = function (a, b) {
    const d = g.str(a) ? v(a)[0] : a; const c = b || 100

    return function (a) { return { el: d, property: a, totalLength: d.getTotalLength() * (c / 100) } }
  }; n.setDashoffset = function (a) {
    const b = a.getTotalLength(); a.setAttribute('stroke-dasharray', b)

    return b
  }; n.bezier = y; n.easings = N; n.timeline = function (a) {
    const b = n(a); b.pause()
    b.duration = 0; b.add = function (a) {
      b.children.forEach((a) => { a.began = !0; a.completed = !0 }); w(a).forEach((a) => { const c = b.duration; const d = a.offset; a.autoplay = !1; a.offset = g.und(d) ? c : K(d, c); b.seek(a.offset); a = n(a); a.duration > c && (b.duration = a.duration); a.began = !0; b.children.push(a) }); b.reset(); b.seek(0); b.autoplay && b.restart()

      return b
    }

    return b
  }; n.random = function (a, b) { return Math.floor(Math.random() * (b - a + 1)) + a }

  return n
})
