! function() {
	function e() {
		parseInt(document.documentElement.clientWidth) > 720 ? document.documentElement.style.fontSize = "112.5px" : document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 100 + "px"
	}
	var t = null;
	window.addEventListener("resize", function() {
		clearTimeout(t), t = setTimeout(e, 300)
	}, !1), e()
}(window), window.shareConfig = {
	img: "../images/pin.png",
	wbpic: "../images/pin.png",
	url: location.href,
	desc: "",
	title: "",
	timeline_title: "",
	wContent: "",
	topicId: "",
	shareList: [],
	callback: function(e, t) {}
}
! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";

	function v(e, t) {
		t = t || r;
		var n = t.createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}

	function S(e) {
		var t = !!e && "length" in e && e.length,
			n = g.type(e);
		return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function k(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function O(e, t, n) {
		return g.isFunction(t) ? g.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		}) : t.nodeType ? g.grep(e, function(e) {
			return e === t !== n
		}) : "string" != typeof t ? g.grep(e, function(e) {
			return a.call(t, e) > -1 !== n
		}) : A.test(t) ? g.filter(t, e, n) : (t = g.filter(t, e), g.grep(e, function(e) {
			return a.call(t, e) > -1 !== n && 1 === e.nodeType
		}))
	}

	function B(e, t) {
		while((e = e[t]) && 1 !== e.nodeType);
		return e
	}

	function F(e) {
		var t = {};
		return g.each(e.match(j) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function I(e) {
		return e
	}

	function q(e) {
		throw e
	}

	function R(e, t, n, r) {
		var i;
		try {
			e && g.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && g.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch(e) {
			n.apply(void 0, [e])
		}
	}

	function W() {
		r.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), g.ready()
	}

	function $() {
		this.expando = g.expando + $.uid++
	}

	function Y(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
	}

	function Z(e, t, n) {
		var r;
		if(void 0 === n && 1 === e.nodeType)
			if(r = "data-" + t.replace(G, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = Y(n)
				} catch(i) {}
				K.set(e, t, n)
			} else n = void 0;
		return n
	}

	function st(e, t, n, r) {
		var i, s = 1,
			o = 20,
			u = r ? function() {
				return r.cur()
			} : function() {
				return g.css(e, t, "")
			},
			a = u(),
			f = n && n[3] || (g.cssNumber[t] ? "" : "px"),
			l = (g.cssNumber[t] || "px" !== f && +a) && tt.exec(g.css(e, t));
		if(l && l[3] !== f) {
			f = f || l[3], n = n || [], l = +a || 1;
			do s = s || ".5", l /= s, g.style(e, t, l + f); while (s !== (s = u() / a) && 1 !== s && --o)
		}
		return n && (l = +l || +a || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = f, r.start = l, r.end = i)), i
	}

	function ut(e) {
		var t, n = e.ownerDocument,
			r = e.nodeName,
			i = ot[r];
		return i ? i : (t = n.body.appendChild(n.createElement(r)), i = g.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ot[r] = i, i)
	}

	function at(e, t) {
		for(var n, r, i = [], s = 0, o = e.length; s < o; s++) r = e[s], r.style && (n = r.style.display, t ? ("none" === n && (i[s] = J.get(r, "display") || null, i[s] || (r.style.display = "")), "" === r.style.display && rt(r) && (i[s] = ut(r))) : "none" !== n && (i[s] = "none", J.set(r, "display", n)));
		for(s = 0; s < o; s++) null != i[s] && (e[s].style.display = i[s]);
		return e
	}

	function pt(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? g.merge([e], n) : n
	}

	function dt(e, t) {
		for(var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
	}

	function mt(e, t, n, r, i) {
		for(var s, o, u, a, f, l, c = t.createDocumentFragment(), h = [], p = 0, d = e.length; p < d; p++)
			if(s = e[p], s || 0 === s)
				if("object" === g.type(s)) g.merge(h, s.nodeType ? [s] : s);
				else if(vt.test(s)) {
			o = o || c.appendChild(t.createElement("div")), u = (lt.exec(s) || ["", ""])[1].toLowerCase(), a = ht[u] || ht._default, o.innerHTML = a[1] + g.htmlPrefilter(s) + a[2], l = a[0];
			while(l--) o = o.lastChild;
			g.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
		} else h.push(t.createTextNode(s));
		c.textContent = "", p = 0;
		while(s = h[p++])
			if(r && g.inArray(s, r) > -1) i && i.push(s);
			else if(f = g.contains(s.ownerDocument, s), o = pt(c.appendChild(s), "script"), f && dt(o), n) {
			l = 0;
			while(s = o[l++]) ct.test(s.type || "") && n.push(s)
		}
		return c
	}

	function Et() {
		return !0
	}

	function St() {
		return !1
	}

	function xt() {
		try {
			return r.activeElement
		} catch(e) {}
	}

	function Tt(e, t, n, r, i, s) {
		var o, u;
		if("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for(u in t) Tt(e, u, n, r, t[u], s);
			return e
		}
		if(null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = St;
		else if(!i) return e;
		return 1 === s && (o = i, i = function(e) {
			return g().off(e), o.apply(this, arguments)
		}, i.guid = o.guid || (o.guid = g.guid++)), e.each(function() {
			g.event.add(this, t, i, r, n)
		})
	}

	function Ot(e, t) {
		return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") ? g(">tbody", e)[0] || e : e
	}

	function Mt(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function _t(e) {
		var t = Lt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Dt(e, t) {
		var n, r, i, s, o, u, a, f;
		if(1 === t.nodeType) {
			if(J.hasData(e) && (s = J.access(e), o = J.set(t, s), f = s.events)) {
				delete o.handle, o.events = {};
				for(i in f)
					for(n = 0, r = f[i].length; n < r; n++) g.event.add(t, i, f[i][n])
			}
			K.hasData(e) && (u = K.access(e), a = g.extend({}, u), K.set(t, a))
		}
	}

	function Pt(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ft.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function Ht(e, t, n, r) {
		t = o.apply([], t);
		var i, s, u, a, f, l, c = 0,
			h = e.length,
			p = h - 1,
			m = t[0],
			y = g.isFunction(m);
		if(y || h > 1 && "string" == typeof m && !d.checkClone && kt.test(m)) return e.each(function(i) {
			var s = e.eq(i);
			y && (t[0] = m.call(this, i, s.html())), Ht(s, t, n, r)
		});
		if(h && (i = mt(t, e[0].ownerDocument, !1, e, r), s = i.firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
			for(u = g.map(pt(i, "script"), Mt), a = u.length; c < h; c++) f = i, c !== p && (f = g.clone(f, !0, !0), a && g.merge(u, pt(f, "script"))), n.call(e[c], f, c);
			if(a)
				for(l = u[u.length - 1].ownerDocument, g.map(u, _t), c = 0; c < a; c++) f = u[c], ct.test(f.type || "") && !J.access(f, "globalEval") && g.contains(l, f) && (f.src ? g._evalUrl && g._evalUrl(f.src) : v(f.textContent.replace(At, ""), l))
		}
		return e
	}

	function Bt(e, t, n) {
		for(var r, i = t ? g.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || g.cleanData(pt(r)), r.parentNode && (n && g.contains(r.ownerDocument, r) && dt(pt(r, "script")), r.parentNode.removeChild(r));
		return e
	}

	function qt(e, t, n) {
		var r, i, s, o, u = e.style;
		return n = n || It(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || g.contains(e.ownerDocument, e) || (o = g.style(e, t)), !d.pixelMarginRight() && Ft.test(o) && jt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 !== o ? o + "" : o
	}

	function Rt(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function Jt(e) {
		if(e in $t) return e;
		var t = e[0].toUpperCase() + e.slice(1),
			n = Vt.length;
		while(n--)
			if(e = Vt[n] + t, e in $t) return e
	}

	function Kt(e) {
		var t = g.cssProps[e];
		return t || (t = g.cssProps[e] = Jt(e) || e), t
	}

	function Qt(e, t, n) {
		var r = tt.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Gt(e, t, n, r, i) {
		var s, o = 0;
		for(s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) "margin" === n && (o += g.css(e, n + nt[s], !0, i)), r ? ("content" === n && (o -= g.css(e, "padding" + nt[s], !0, i)), "margin" !== n && (o -= g.css(e, "border" + nt[s] + "Width", !0, i))) : (o += g.css(e, "padding" + nt[s], !0, i), "padding" !== n && (o += g.css(e, "border" + nt[s] + "Width", !0, i)));
		return o
	}

	function Yt(e, t, n) {
		var r, i = It(e),
			s = qt(e, t, i),
			o = "border-box" === g.css(e, "boxSizing", !1, i);
		return Ft.test(s) ? s : (r = o && (d.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0, s + Gt(e, t, n || (o ? "border" : "content"), r, i) + "px")
	}

	function Zt(e, t, n, r, i) {
		return new Zt.prototype.init(e, t, n, r, i)
	}

	function sn() {
		tn && (r.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(sn) : e.setTimeout(sn, g.fx.interval), g.fx.tick())
	}

	function on() {
		return e.setTimeout(function() {
			en = void 0
		}), en = g.now()
	}

	function un(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for(t = t ? 1 : 0; r < 4; r += 2 - t) n = nt[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function an(e, t, n) {
		for(var r, i = (cn.tweeners[t] || []).concat(cn.tweeners["*"]), s = 0, o = i.length; s < o; s++)
			if(r = i[s].call(n, t, e)) return r
	}

	function fn(e, t, n) {
		var r, i, s, o, u, a, f, l, c = "width" in t || "height" in t,
			h = this,
			p = {},
			d = e.style,
			v = e.nodeType && rt(e),
			m = J.get(e, "fxshow");
		n.queue || (o = g._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, u = o.empty.fire, o.empty.fire = function() {
			o.unqueued || u()
		}), o.unqueued++, h.always(function() {
			h.always(function() {
				o.unqueued--, g.queue(e, "fx").length || o.empty.fire()
			})
		}));
		for(r in t)
			if(i = t[r], nn.test(i)) {
				if(delete t[r], s = s || "toggle" === i, i === (v ? "hide" : "show")) {
					if("show" !== i || !m || void 0 === m[r]) continue;
					v = !0
				}
				p[r] = m && m[r] || g.style(e, r)
			}
		if(a = !g.isEmptyObject(t), a || !g.isEmptyObject(p)) {
			c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], f = m && m.display, null == f && (f = J.get(e, "display")), l = g.css(e, "display"), "none" === l && (f ? l = f : (at([e], !0), f = e.style.display || f, l = g.css(e, "display"), at([e]))), ("inline" === l || "inline-block" === l && null != f) && "none" === g.css(e, "float") && (a || (h.done(function() {
				d.display = f
			}), null == f && (l = d.display, f = "none" === l ? "" : l)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function() {
				d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
			})), a = !1;
			for(r in p) a || (m ? "hidden" in m && (v = m.hidden) : m = J.access(e, "fxshow", {
				display: f
			}), s && (m.hidden = !v), v && at([e], !0), h.done(function() {
				v || at([e]), J.remove(e, "fxshow");
				for(r in p) g.style(e, r, p[r])
			})), a = an(v ? m[r] : 0, r, h), r in m || (m[r] = a.start, v && (a.end = a.start, a.start = 0))
		}
	}

	function ln(e, t) {
		var n, r, i, s, o;
		for(n in e)
			if(r = g.camelCase(n), i = t[r], s = e[n], Array.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = g.cssHooks[r], o && "expand" in o) {
				s = o.expand(s), delete e[r];
				for(n in s) n in e || (e[n] = s[n], t[n] = i)
			} else t[r] = i
	}

	function cn(e, t, n) {
		var r, i, s = 0,
			o = cn.prefilters.length,
			u = g.Deferred().always(function() {
				delete a.elem
			}),
			a = function() {
				if(i) return !1;
				for(var t = en || on(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; o < a; o++) f.tweens[o].run(s);
				return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (a || u.notifyWith(e, [f, 1, 0]), u.resolveWith(e, [f]), !1)
			},
			f = u.promise({
				elem: e,
				props: g.extend({}, t),
				opts: g.extend(!0, {
					specialEasing: {},
					easing: g.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: en || on(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = g.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
					return f.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? f.tweens.length : 0;
					if(i) return this;
					for(i = !0; n < r; n++) f.tweens[n].run(1);
					return t ? (u.notifyWith(e, [f, 1, 0]), u.resolveWith(e, [f, t])) : u.rejectWith(e, [f, t]), this
				}
			}),
			l = f.props;
		for(ln(l, f.opts.specialEasing); s < o; s++)
			if(r = cn.prefilters[s].call(f, e, l, f.opts)) return g.isFunction(r.stop) && (g._queueHooks(f.elem, f.opts.queue).stop = g.proxy(r.stop, r)), r;
		return g.map(l, an, f), g.isFunction(f.opts.start) && f.opts.start.call(e, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), g.fx.timer(g.extend(a, {
			elem: e,
			anim: f,
			queue: f.opts.queue
		})), f
	}

	function mn(e) {
		var t = e.match(j) || [];
		return t.join(" ")
	}

	function gn(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function kn(e, t, n, r) {
		var i;
		if(Array.isArray(t)) g.each(t, function(t, i) {
			n || xn.test(e) ? r(e, i) : kn(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
		});
		else if(n || "object" !== g.type(t)) r(e, t);
		else
			for(i in t) kn(e + "[" + i + "]", t[i], n, r)
	}

	function In(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				s = t.toLowerCase().match(j) || [];
			if(g.isFunction(n))
				while(r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, t, n, r) {
		function o(u) {
			var a;
			return i[u] = !0, g.each(e[u] || [], function(e, u) {
				var f = u(t, n, r);
				return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), !1)
			}), a
		}
		var i = {},
			s = e === Bn;
		return o(t.dataTypes[0]) || !i["*"] && o("*")
	}

	function Rn(e, t) {
		var n, r, i = g.ajaxSettings.flatOptions || {};
		for(n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && g.extend(!0, e, r), e
	}

	function Un(e, t, n) {
		var r, i, s, o, u = e.contents,
			a = e.dataTypes;
		while("*" === a[0]) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if(r)
			for(i in u)
				if(u[i] && u[i].test(r)) {
					a.unshift(i);
					break
				}
		if(a[0] in n) s = a[0];
		else {
			for(i in n) {
				if(!a[0] || e.converters[i + " " + a[0]]) {
					s = i;
					break
				}
				o || (o = i)
			}
			s = s || o
		}
		if(s) return s !== a[0] && a.unshift(s), n[s]
	}

	function zn(e, t, n, r) {
		var i, s, o, u, a, f = {},
			l = e.dataTypes.slice();
		if(l[1])
			for(o in e.converters) f[o.toLowerCase()] = e.converters[o];
		s = l.shift();
		while(s)
			if(e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
				if("*" === s) s = a;
				else if("*" !== a && a !== s) {
			if(o = f[a + " " + s] || f["* " + s], !o)
				for(i in f)
					if(u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
						o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
						break
					}
			if(o !== !0)
				if(o && e["throws"]) t = o(t);
				else try {
					t = o(t)
				} catch(c) {
					return {
						state: "parsererror",
						error: o ? c : "No conversion from " + a + " to " + s
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	var n = [],
		r = e.document,
		i = Object.getPrototypeOf,
		s = n.slice,
		o = n.concat,
		u = n.push,
		a = n.indexOf,
		f = {},
		l = f.toString,
		c = f.hasOwnProperty,
		h = c.toString,
		p = h.call(Object),
		d = {},
		m = "3.2.0",
		g = function(e, t) {
			return new g.fn.init(e, t)
		},
		y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		b = /^-ms-/,
		w = /-([a-z])/g,
		E = function(e, t) {
			return t.toUpperCase()
		};
	g.fn = g.prototype = {
		jquery: m,
		constructor: g,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = g.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return g.each(this, e)
		},
		map: function(e) {
			return this.pushStack(g.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: n.sort,
		splice: n.splice
	}, g.extend = g.fn.extend = function() {
		var e, t, n, r, i, s, o = arguments[0] || {},
			u = 1,
			a = arguments.length,
			f = !1;
		for("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || g.isFunction(o) || (o = {}), u === a && (o = this, u--); u < a; u++)
			if(null != (e = arguments[u]))
				for(t in e) n = o[t], r = e[t], o !== r && (f && r && (g.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, s = n && Array.isArray(n) ? n : []) : s = n && g.isPlainObject(n) ? n : {}, o[t] = g.extend(f, s, r)) : void 0 !== r && (o[t] = r));
		return o
	}, g.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === g.type(e)
		},
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			var t = g.type(e);
			return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function(e) {
			var t, n;
			return !!e && "[object Object]" === l.call(e) && (!(t = i(e)) || (n = c.call(t, "constructor") && t.constructor, "function" == typeof n && h.call(n) === p))
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[l.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			v(e)
		},
		camelCase: function(e) {
			return e.replace(b, "ms-").replace(w, E)
		},
		each: function(e, t) {
			var n, r = 0;
			if(S(e)) {
				for(n = e.length; r < n; r++)
					if(t.call(e[r], r, e[r]) === !1) break
			} else
				for(r in e)
					if(t.call(e[r], r, e[r]) === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(y, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (S(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : a.call(t, e, n)
		},
		merge: function(e, t) {
			for(var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for(var r, i = [], s = 0, o = e.length, u = !n; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, i, s = 0,
				u = [];
			if(S(e))
				for(r = e.length; s < r; s++) i = t(e[s], s, n), null != i && u.push(i);
			else
				for(s in e) i = t(e[s], s, n), null != i && u.push(i);
			return o.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			if("string" == typeof t && (n = e[t], t = e, e = n), g.isFunction(e)) return r = s.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(s.call(arguments)))
			}, i.guid = e.guid = e.guid || g.guid++, i
		},
		now: Date.now,
		support: d
	}), "function" == typeof Symbol && (g.fn[Symbol.iterator] = n[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		f["[object " + t + "]"] = t.toLowerCase()
	});
	var x = function(e) {
		function ot(e, t, r, i) {
			var s, u, f, l, c, d, g, y = t && t.ownerDocument,
				S = t ? t.nodeType : 9;
			if(r = r || [], "string" != typeof e || !e || 1 !== S && 9 !== S && 11 !== S) return r;
			if(!i && ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, v)) {
				if(11 !== S && (c = G.exec(e)))
					if(s = c[1]) {
						if(9 === S) {
							if(!(f = t.getElementById(s))) return r;
							if(f.id === s) return r.push(f), r
						} else if(y && (f = y.getElementById(s)) && b(t, f) && f.id === s) return r.push(f), r
					} else {
						if(c[2]) return _.apply(r, t.getElementsByTagName(e)), r;
						if((s = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(s)), r
					}
				if(n.qsa && !C[e + " "] && (!m || !m.test(e))) {
					if(1 !== S) y = t, g = e;
					else if("object" !== t.nodeName.toLowerCase()) {
						(l = t.getAttribute("id")) ? l = l.replace(tt, nt): t.setAttribute("id", l = w), d = o(e), u = d.length;
						while(u--) d[u] = "#" + l + " " + yt(d[u]);
						g = d.join(","), y = Y.test(e) && mt(t.parentNode) || t
					}
					if(g) try {
						return _.apply(r, y.querySelectorAll(g)), r
					} catch(x) {} finally {
						l === w && t.removeAttribute("id")
					}
				}
			}
			return a(e.replace(R, "$1"), t, r, i)
		}

		function ut() {
			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			var e = [];
			return t
		}

		function at(e) {
			return e[w] = !0, e
		}

		function ft(e) {
			var t = p.createElement("fieldset");
			try {
				return !!e(t)
			} catch(n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function lt(e, t) {
			var n = e.split("|"),
				i = n.length;
			while(i--) r.attrHandle[n[i]] = t
		}

		function ct(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if(r) return r;
			if(n)
				while(n = n.nextSibling)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function ht(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function pt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return("input" === n || "button" === n) && t.type === e
			}
		}

		function dt(e) {
			return function(t) {
				return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && it(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function vt(e) {
			return at(function(t) {
				return t = +t, at(function(n, r) {
					var i, s = e([], n.length, t),
						o = s.length;
					while(o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function mt(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function gt() {}

		function yt(e) {
			for(var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function bt(e, t, n) {
			var r = t.dir,
				i = t.next,
				s = i || r,
				o = n && "parentNode" === s,
				u = x++;
			return t.first ? function(t, n, i) {
				while(t = t[r])
					if(1 === t.nodeType || o) return e(t, n, i);
				return !1
			} : function(t, n, a) {
				var f, l, c, h = [S, u];
				if(a) {
					while(t = t[r])
						if((1 === t.nodeType || o) && e(t, n, a)) return !0
				} else
					while(t = t[r])
						if(1 === t.nodeType || o)
							if(c = t[w] || (t[w] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if((f = l[s]) && f[0] === S && f[1] === u) return h[2] = f[2];
								if(l[s] = h, h[2] = e(t, n, a)) return !0
							} return !1
			}
		}

		function wt(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while(i--)
					if(!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function Et(e, t, n) {
			for(var r = 0, i = t.length; r < i; r++) ot(e, t[r], n);
			return n
		}

		function St(e, t, n, r, i) {
			for(var s, o = [], u = 0, a = e.length, f = null != t; u < a; u++)(s = e[u]) && (n && !n(s, r, i) || (o.push(s), f && t.push(u)));
			return o
		}

		function xt(e, t, n, r, i, s) {
			return r && !r[w] && (r = xt(r)), i && !i[w] && (i = xt(i, s)), at(function(s, o, u, a) {
				var f, l, c, h = [],
					p = [],
					d = o.length,
					v = s || Et(t || "*", u.nodeType ? [u] : u, []),
					m = !e || !s && t ? v : St(v, h, e, u, a),
					g = n ? i || (s ? e : d || r) ? [] : o : m;
				if(n && n(m, g, u, a), r) {
					f = St(g, p), r(f, [], u, a), l = f.length;
					while(l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
				}
				if(s) {
					if(i || e) {
						if(i) {
							f = [], l = g.length;
							while(l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while(l--)(c = g[l]) && (f = i ? P(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = St(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
			})
		}

		function Tt(e) {
			for(var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = bt(function(e) {
					return e === t
				}, u, !0), c = bt(function(e) {
					return P(t, e) > -1
				}, u, !0), h = [function(e, n, r) {
					var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
					return t = null, i
				}]; a < s; a++)
				if(n = r.relative[e[a].type]) h = [bt(wt(h), n)];
				else {
					if(n = r.filter[e[a].type].apply(null, e[a].matches), n[w]) {
						for(i = ++a; i < s; i++)
							if(r.relative[e[i].type]) break;
						return xt(a > 1 && wt(h), a > 1 && yt(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(R, "$1"), n, a < i && Tt(e.slice(a, i)), i < s && Tt(e = e.slice(i)), i < s && yt(e))
					}
					h.push(n)
				}
			return wt(h)
		}

		function Nt(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				s = function(s, o, u, a, l) {
					var c, d, m, g = 0,
						y = "0",
						b = s && [],
						w = [],
						E = f,
						x = s || i && r.find.TAG("*", l),
						T = S += null == E ? 1 : Math.random() || .1,
						N = x.length;
					for(l && (f = o === p || o || l); y !== N && null != (c = x[y]); y++) {
						if(i && c) {
							d = 0, o || c.ownerDocument === p || (h(c), u = !v);
							while(m = e[d++])
								if(m(c, o || p, u)) {
									a.push(c);
									break
								}
							l && (S = T)
						}
						n && ((c = !m && c) && g--, s && b.push(c))
					}
					if(g += y, n && y !== g) {
						d = 0;
						while(m = t[d++]) m(b, w, o, u);
						if(s) {
							if(g > 0)
								while(y--) b[y] || w[y] || (w[y] = O.call(a));
							w = St(w)
						}
						_.apply(a, w), l && !s && w.length > 0 && g + t.length > 1 && ot.uniqueSort(a)
					}
					return l && (S = T, f = E), b
				};
			return n ? at(s) : s
		}
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
			E = e.document,
			S = 0,
			x = 0,
			T = ut(),
			N = ut(),
			C = ut(),
			k = function(e, t) {
				return e === t && (c = !0), 0
			},
			L = {}.hasOwnProperty,
			A = [],
			O = A.pop,
			M = A.push,
			_ = A.push,
			D = A.slice,
			P = function(e, t) {
				for(var n = 0, r = e.length; n < r; n++)
					if(e[n] === t) return n;
				return -1
			},
			H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			B = "[\\x20\\t\\r\\n\\f]",
			j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			F = "\\[" + B + "*(" + j + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + B + "*\\]",
			I = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
			q = new RegExp(B + "+", "g"),
			R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
			U = new RegExp("^" + B + "*," + B + "*"),
			z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
			W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
			X = new RegExp(I),
			V = new RegExp("^" + j + "$"),
			$ = {
				ID: new RegExp("^#(" + j + ")"),
				CLASS: new RegExp("^\\.(" + j + ")"),
				TAG: new RegExp("^(" + j + "|[*])"),
				ATTR: new RegExp("^" + F),
				PSEUDO: new RegExp("^" + I),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + H + ")$", "i"),
				needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
			},
			J = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			Q = /^[^{]+\{\s*\[native \w/,
			G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Y = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
			et = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			nt = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			rt = function() {
				h()
			},
			it = bt(function(e) {
				return e.disabled === !0 && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			_.apply(A = D.call(E.childNodes), E.childNodes), A[E.childNodes.length].nodeType
		} catch(st) {
			_ = {
				apply: A.length ? function(e, t) {
					M.apply(e, D.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while(e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		n = ot.support = {}, s = ot.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, h = ot.setDocument = function(e) {
			var t, i, o = e ? e.ownerDocument || e : E;
			return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, d = p.documentElement, v = !s(p), E !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = ft(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), n.getElementsByTagName = ft(function(e) {
				return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
			}), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ft(function(e) {
				return d.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
			}), n.getById ? (r.filter.ID = function(e) {
				var t = e.replace(Z, et);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, r.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && v) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (r.filter.ID = function(e) {
				var t = e.replace(Z, et);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, r.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && v) {
					var n, r, i, s = t.getElementById(e);
					if(s) {
						if(n = s.getAttributeNode("id"), n && n.value === e) return [s];
						i = t.getElementsByName(e), r = 0;
						while(s = i[r++])
							if(n = s.getAttributeNode("id"), n && n.value === e) return [s]
					}
					return []
				}
			}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					s = t.getElementsByTagName(e);
				if("*" === e) {
					while(n = s[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return s
			}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
				if("undefined" != typeof t.getElementsByClassName && v) return t.getElementsByClassName(e)
			}, g = [], m = [], (n.qsa = Q.test(p.querySelectorAll)) && (ft(function(e) {
				d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
			}), ft(function(e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = p.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
			})), (n.matchesSelector = Q.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
				n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", I)
			}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Q.test(d.compareDocumentPosition), b = t || Q.test(d.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
			} : function(e, t) {
				if(t)
					while(t = t.parentNode)
						if(t === e) return !0;
				return !1
			}, k = t ? function(e, t) {
				if(e === t) return c = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && b(E, e) ? -1 : t === p || t.ownerDocument === E && b(E, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				if(e === t) return c = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					s = t.parentNode,
					o = [e],
					u = [t];
				if(!i || !s) return e === p ? -1 : t === p ? 1 : i ? -1 : s ? 1 : l ? P(l, e) - P(l, t) : 0;
				if(i === s) return ct(e, t);
				n = e;
				while(n = n.parentNode) o.unshift(n);
				n = t;
				while(n = n.parentNode) u.unshift(n);
				while(o[r] === u[r]) r++;
				return r ? ct(o[r], u[r]) : o[r] === E ? -1 : u[r] === E ? 1 : 0
			}, p) : p
		}, ot.matches = function(e, t) {
			return ot(e, null, null, t)
		}, ot.matchesSelector = function(e, t) {
			if((e.ownerDocument || e) !== p && h(e), t = t.replace(W, "='$1']"), n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
				var r = y.call(e, t);
				if(r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch(i) {}
			return ot(t, p, null, [e]).length > 0
		}, ot.contains = function(e, t) {
			return(e.ownerDocument || e) !== p && h(e), b(e, t)
		}, ot.attr = function(e, t) {
			(e.ownerDocument || e) !== p && h(e);
			var i = r.attrHandle[t.toLowerCase()],
				s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
			return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
		}, ot.escape = function(e) {
			return(e + "").replace(tt, nt)
		}, ot.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, ot.uniqueSort = function(e) {
			var t, r = [],
				i = 0,
				s = 0;
			if(c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k), c) {
				while(t = e[s++]) t === e[s] && (i = r.push(s));
				while(i--) e.splice(r[i], 1)
			}
			return l = null, e
		}, i = ot.getText = function(e) {
			var t, n = "",
				r = 0,
				s = e.nodeType;
			if(s) {
				if(1 === s || 9 === s || 11 === s) {
					if("string" == typeof e.textContent) return e.textContent;
					for(e = e.firstChild; e; e = e.nextSibling) n += i(e)
				} else if(3 === s || 4 === s) return e.nodeValue
			} else
				while(t = e[r++]) n += i(t);
			return n
		}, r = ot.selectors = {
			cacheLength: 50,
			createPseudo: at,
			match: $,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(Z, et), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, et), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(Z, et).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = T[e + " "];
					return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && T(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = ot.attr(r, e);
						return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
					}
				},
				CHILD: function(e, t, n, r, i) {
					var s = "nth" !== e.slice(0, 3),
						o = "last" !== e.slice(-4),
						u = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, a) {
						var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							g = u && t.nodeName.toLowerCase(),
							y = !a && !u,
							b = !1;
						if(m) {
							if(s) {
								while(v) {
									h = t;
									while(h = h[v])
										if(u ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
									d = v = "only" === e && !d && "nextSibling"
								}
								return !0
							}
							if(d = [o ? m.firstChild : m.lastChild], o && y) {
								h = m, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p && f[2], h = p && m.childNodes[p];
								while(h = ++p && h && h[v] || (b = p = 0) || d.pop())
									if(1 === h.nodeType && ++b && h === t) {
										l[e] = [S, p, b];
										break
									}
							} else if(y && (h = t, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p), b === !1)
								while(h = ++p && h && h[v] || (b = p = 0) || d.pop())
									if((u ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) && ++b && (y && (c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), l[e] = [S, b]), h === t)) break;
							return b -= i, b === r || b % r === 0 && b / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
					return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
						var r, s = i(e, t),
							o = s.length;
						while(o--) r = P(e, s[o]), e[r] = !(n[r] = s[o])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: at(function(e) {
					var t = [],
						n = [],
						r = u(e.replace(R, "$1"));
					return r[w] ? at(function(e, t, n, i) {
						var s, o = r(e, null, i, []),
							u = e.length;
						while(u--)(s = o[u]) && (e[u] = !(t[u] = s))
					}) : function(e, i, s) {
						return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
					}
				}),
				has: at(function(e) {
					return function(t) {
						return ot(e, t).length > 0
					}
				}),
				contains: at(function(e) {
					return e = e.replace(Z, et),
						function(t) {
							return(t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
				}),
				lang: at(function(e) {
					return V.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(Z, et).toLowerCase(),
						function(t) {
							var n;
							do
								if(n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === d
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: dt(!1),
				disabled: dt(!0),
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for(e = e.firstChild; e; e = e.nextSibling)
						if(e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !r.pseudos.empty(e)
				},
				header: function(e) {
					return K.test(e.nodeName)
				},
				input: function(e) {
					return J.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: vt(function() {
					return [0]
				}),
				last: vt(function(e, t) {
					return [t - 1]
				}),
				eq: vt(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: vt(function(e, t) {
					for(var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: vt(function(e, t) {
					for(var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: vt(function(e, t, n) {
					for(var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: vt(function(e, t, n) {
					for(var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, r.pseudos.nth = r.pseudos.eq;
		for(t in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = ht(t);
		for(t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = pt(t);
		return gt.prototype = r.filters = r.pseudos, r.setFilters = new gt, o = ot.tokenize = function(e, t) {
			var n, i, s, o, u, a, f, l = N[e + " "];
			if(l) return t ? 0 : l.slice(0);
			u = e, a = [], f = r.preFilter;
			while(u) {
				n && !(i = U.exec(u)) || (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), s.push({
					value: n,
					type: i[0].replace(R, " ")
				}), u = u.slice(n.length));
				for(o in r.filter) !(i = $[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
					value: n,
					type: o,
					matches: i
				}), u = u.slice(n.length));
				if(!n) break
			}
			return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
		}, u = ot.compile = function(e, t) {
			var n, r = [],
				i = [],
				s = C[e + " "];
			if(!s) {
				t || (t = o(e)), n = t.length;
				while(n--) s = Tt(t[n]), s[w] ? r.push(s) : i.push(s);
				s = C(e, Nt(i, r)), s.selector = e
			}
			return s
		}, a = ot.select = function(e, t, n, i) {
			var s, a, f, l, c, h = "function" == typeof e && e,
				p = !i && o(e = h.selector || e);
			if(n = n || [], 1 === p.length) {
				if(a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (f = a[0]).type && 9 === t.nodeType && v && r.relative[a[1].type]) {
					if(t = (r.find.ID(f.matches[0].replace(Z, et), t) || [])[0], !t) return n;
					h && (t = t.parentNode), e = e.slice(a.shift().value.length)
				}
				s = $.needsContext.test(e) ? 0 : a.length;
				while(s--) {
					if(f = a[s], r.relative[l = f.type]) break;
					if((c = r.find[l]) && (i = c(f.matches[0].replace(Z, et), Y.test(a[0].type) && mt(t.parentNode) || t))) {
						if(a.splice(s, 1), e = i.length && yt(a), !e) return _.apply(n, i), n;
						break
					}
				}
			}
			return(h || u(e, p))(i, t, !v, n, !t || Y.test(e) && mt(t.parentNode) || t), n
		}, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function(e) {
			return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
		}), ft(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(e, t, n) {
			if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), n.attributes && ft(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || lt("value", function(e, t, n) {
			if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ft(function(e) {
			return null == e.getAttribute("disabled")
		}) || lt(H, function(e, t, n) {
			var r;
			if(!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), ot
	}(e);
	g.find = x, g.expr = x.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = x.uniqueSort, g.text = x.getText, g.isXMLDoc = x.isXML, g.contains = x.contains, g.escapeSelector = x.escape;
	var T = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while((e = e[t]) && 9 !== e.nodeType)
				if(1 === e.nodeType) {
					if(i && g(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		N = function(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		C = g.expr.match.needsContext,
		L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		A = /^.[^:#\[\.,]*$/;
	g.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? g.find.matchesSelector(r, e) ? [r] : [] : g.find.matches(e, g.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, g.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if("string" != typeof e) return this.pushStack(g(e).filter(function() {
				for(t = 0; t < r; t++)
					if(g.contains(i[t], this)) return !0
			}));
			for(n = this.pushStack([]), t = 0; t < r; t++) g.find(e, i[t], n);
			return r > 1 ? g.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(O(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(O(this, e || [], !0))
		},
		is: function(e) {
			return !!O(this, "string" == typeof e && C.test(e) ? g(e) : e || [], !1).length
		}
	});
	var M, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		D = g.fn.init = function(e, t, n) {
			var i, s;
			if(!e) return this;
			if(n = n || M, "string" == typeof e) {
				if(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if(i[1]) {
					if(t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), L.test(i[1]) && g.isPlainObject(t))
						for(i in t) g.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return s = r.getElementById(i[2]), s && (this[0] = s, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : g.makeArray(e, this)
		};
	D.prototype = g.fn, M = g(r);
	var P = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	g.fn.extend({
		has: function(e) {
			var t = g(e, this),
				n = t.length;
			return this.filter(function() {
				for(var e = 0; e < n; e++)
					if(g.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				s = [],
				o = "string" != typeof e && g(e);
			if(!C.test(e))
				for(; r < i; r++)
					for(n = this[r]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
							s.push(n);
							break
						}
			return this.pushStack(s.length > 1 ? g.uniqueSort(s) : s)
		},
		index: function(e) {
			return e ? "string" == typeof e ? a.call(g(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), g.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return T(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return T(e, "parentNode", n)
		},
		next: function(e) {
			return B(e, "nextSibling")
		},
		prev: function(e) {
			return B(e, "previousSibling")
		},
		nextAll: function(e) {
			return T(e, "nextSibling")
		},
		prevAll: function(e) {
			return T(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return T(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return T(e, "previousSibling", n)
		},
		siblings: function(e) {
			return N((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return N(e.firstChild)
		},
		contents: function(e) {
			return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), g.merge([], e.childNodes))
		}
	}, function(e, t) {
		g.fn[e] = function(n, r) {
			var i = g.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = g.filter(r, i)), this.length > 1 && (H[e] || g.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var j = /[^\x20\t\r\n\f]+/g;
	g.Callbacks = function(e) {
		e = "string" == typeof e ? F(e) : g.extend({}, e);
		var t, n, r, i, s = [],
			o = [],
			u = -1,
			a = function() {
				for(i = i || e.once, r = t = !0; o.length; u = -1) {
					n = o.shift();
					while(++u < s.length) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1)
				}
				e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
			},
			f = {
				add: function() {
					return s && (n && !t && (u = s.length - 1, o.push(n)), function r(t) {
						g.each(t, function(t, n) {
							g.isFunction(n) ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== g.type(n) && r(n)
						})
					}(arguments), n && !t && a()), this
				},
				remove: function() {
					return g.each(arguments, function(e, t) {
						var n;
						while((n = g.inArray(t, s, n)) > -1) s.splice(n, 1), n <= u && u--
					}), this
				},
				has: function(e) {
					return e ? g.inArray(e, s) > -1 : s.length > 0
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return i = o = [], s = n = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return i = o = [], n || t || (s = n = ""), this
				},
				locked: function() {
					return !!i
				},
				fireWith: function(e, n) {
					return i || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || a()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return f
	}, g.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2],
					["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function() {
						return r
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return i.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return g.Deferred(function(t) {
							g.each(n, function(n, r) {
								var i = g.isFunction(e[r[4]]) && e[r[4]];
								s[r[1]](function() {
									var e = i && i.apply(this, arguments);
									e && g.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, r, i) {
						function o(t, n, r, i) {
							return function() {
								var u = this,
									a = arguments,
									f = function() {
										var e, f;
										if(!(t < s)) {
											if(e = r.apply(u, a), e === n.promise()) throw new TypeError("Thenable self-resolution");
											f = e && ("object" == typeof e || "function" == typeof e) && e.then, g.isFunction(f) ? i ? f.call(e, o(s, n, I, i), o(s, n, q, i)) : (s++, f.call(e, o(s, n, I, i), o(s, n, q, i), o(s, n, I, n.notifyWith))) : (r !== I && (u = void 0, a = [e]), (i || n.resolveWith)(u, a))
										}
									},
									l = i ? f : function() {
										try {
											f()
										} catch(e) {
											g.Deferred.exceptionHook && g.Deferred.exceptionHook(e, l.stackTrace), t + 1 >= s && (r !== q && (u = void 0, a = [e]), n.rejectWith(u, a))
										}
									};
								t ? l() : (g.Deferred.getStackHook && (l.stackTrace = g.Deferred.getStackHook()), e.setTimeout(l))
							}
						}
						var s = 0;
						return g.Deferred(function(e) {
							n[0][3].add(o(0, e, g.isFunction(i) ? i : I, e.notifyWith)), n[1][3].add(o(0, e, g.isFunction(t) ? t : I)), n[2][3].add(o(0, e, g.isFunction(r) ? r : q))
						}).promise()
					},
					promise: function(e) {
						return null != e ? g.extend(e, i) : i
					}
				},
				s = {};
			return g.each(n, function(e, t) {
				var o = t[2],
					u = t[5];
				i[t[1]] = o.add, u && o.add(function() {
					r = u
				}, n[3 - e][2].disable, n[0][2].lock), o.add(t[3].fire), s[t[0]] = function() {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = o.fireWith
			}), i.promise(s), t && t.call(s, s), s
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = s.call(arguments),
				o = g.Deferred(),
				u = function(e) {
					return function(n) {
						r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
					}
				};
			if(t <= 1 && (R(e, o.done(u(n)).resolve, o.reject, !t), "pending" === o.state() || g.isFunction(i[n] && i[n].then))) return o.then();
			while(n--) R(i[n], u(n), o.reject);
			return o.promise()
		}
	});
	var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	g.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && U.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, g.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var z = g.Deferred();
	g.fn.ready = function(e) {
		return z.then(e)["catch"](function(e) {
			g.readyException(e)
		}), this
	}, g.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(e === !0 ? --g.readyWait : g.isReady) || (g.isReady = !0, e !== !0 && --g.readyWait > 0 || z.resolveWith(r, [g]))
		}
	}), g.ready.then = z.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(g.ready) : (r.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
	var X = function(e, t, n, r, i, s, o) {
			var u = 0,
				a = e.length,
				f = null == n;
			if("object" === g.type(n)) {
				i = !0;
				for(u in n) X(e, t, u, n[u], !0, s, o)
			} else if(void 0 !== r && (i = !0, g.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
					return f.call(g(e), n)
				})), t))
				for(; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
			return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
		},
		V = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	$.uid = 1, $.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if("string" == typeof t) i[g.camelCase(t)] = n;
			else
				for(r in t) i[g.camelCase(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][g.camelCase(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if(void 0 !== r) {
				if(void 0 !== t) {
					Array.isArray(t) ? t = t.map(g.camelCase) : (t = g.camelCase(t), t = t in r ? [t] : t.match(j) || []), n = t.length;
					while(n--) delete r[t[n]]
				}(void 0 === t || g.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !g.isEmptyObject(t)
		}
	};
	var J = new $,
		K = new $,
		Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		G = /[A-Z]/g;
	g.extend({
		hasData: function(e) {
			return K.hasData(e) || J.hasData(e)
		},
		data: function(e, t, n) {
			return K.access(e, t, n)
		},
		removeData: function(e, t) {
			K.remove(e, t)
		},
		_data: function(e, t, n) {
			return J.access(e, t, n)
		},
		_removeData: function(e, t) {
			J.remove(e, t)
		}
	}), g.fn.extend({
		data: function(e, t) {
			var n, r, i, s = this[0],
				o = s && s.attributes;
			if(void 0 === e) {
				if(this.length && (i = K.get(s), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))) {
					n = o.length;
					while(n--) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = g.camelCase(r.slice(5)), Z(s, r, i[r])));
					J.set(s, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				K.set(this, e)
			}) : X(this, function(t) {
				var n;
				if(s && void 0 === t) {
					if(n = K.get(s, e), void 0 !== n) return n;
					if(n = Z(s, e), void 0 !== n) return n
				} else this.each(function() {
					K.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				K.remove(this, e)
			})
		}
	}), g.extend({
		queue: function(e, t, n) {
			var r;
			if(e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, g.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = g.queue(e, t),
				r = n.length,
				i = n.shift(),
				s = g._queueHooks(e, t),
				o = function() {
					g.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return J.get(e, n) || J.access(e, n, {
				empty: g.Callbacks("once memory").add(function() {
					J.remove(e, [t + "queue", n])
				})
			})
		}
	}), g.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = g.queue(this, e, t);
				g._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				g.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = g.Deferred(),
				s = this,
				o = this.length,
				u = function() {
					--r || i.resolveWith(s, [s])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while(o--) n = J.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
			return u(), i.promise(t)
		}
	});
	var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		tt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
		nt = ["Top", "Right", "Bottom", "Left"],
		rt = function(e, t) {
			return e = t || e, "none" === e.style.display || "" === e.style.display && g.contains(e.ownerDocument, e) && "none" === g.css(e, "display")
		},
		it = function(e, t, n, r) {
			var i, s, o = {};
			for(s in t) o[s] = e.style[s], e.style[s] = t[s];
			i = n.apply(e, r || []);
			for(s in t) e.style[s] = o[s];
			return i
		},
		ot = {};
	g.fn.extend({
		show: function() {
			return at(this, !0)
		},
		hide: function() {
			return at(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				rt(this) ? g(this).show() : g(this).hide()
			})
		}
	});
	var ft = /^(?:checkbox|radio)$/i,
		lt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ct = /^$|\/(?:java|ecma)script/i,
		ht = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
	var vt = /<|&#?\w+;/;
	! function() {
		var e = r.createDocumentFragment(),
			t = e.appendChild(r.createElement("div")),
			n = r.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var gt = r.documentElement,
		yt = /^key/,
		bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		wt = /^([^.]*)(?:\.(.+)|)/;
	g.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, p, d, v, m = J.get(e);
			if(m) {
				n.handler && (s = n, n = s.handler, i = s.selector), i && g.find.matchesSelector(gt, i), n.guid || (n.guid = g.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
					return "undefined" != typeof g && g.event.triggered !== t.type ? g.event.dispatch.apply(e, arguments) : void 0
				}), t = (t || "").match(j) || [""], f = t.length;
				while(f--) u = wt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p && (c = g.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = g.event.special[p] || {}, l = g.extend({
					type: p,
					origType: v,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && g.expr.match.needsContext.test(i),
					namespace: d.join(".")
				}, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, r, d, o) !== !1 || e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), g.event.global[p] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, p, d, v, m = J.hasData(e) && J.get(e);
			if(m && (a = m.events)) {
				t = (t || "").match(j) || [""], f = t.length;
				while(f--)
					if(u = wt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
						c = g.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
						while(s--) l = h[s], !i && v !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
						o && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || g.removeEvent(e, p, m.handle), delete a[p])
					} else
						for(p in a) g.event.remove(e, p + t[f], n, r, !0);
				g.isEmptyObject(a) && J.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t = g.event.fix(e),
				n, r, i, s, o, u, a = new Array(arguments.length),
				f = (J.get(this, "events") || {})[t.type] || [],
				l = g.event.special[t.type] || {};
			for(a[0] = t, n = 1; n < arguments.length; n++) a[n] = arguments[n];
			if(t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
				u = g.event.handlers.call(this, t, f), n = 0;
				while((s = u[n++]) && !t.isPropagationStopped()) {
					t.currentTarget = s.elem, r = 0;
					while((o = s.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((g.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()))
				}
				return l.postDispatch && l.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, s, o, u = [],
				a = t.delegateCount,
				f = e.target;
			if(a && f.nodeType && !("click" === e.type && e.button >= 1))
				for(; f !== this; f = f.parentNode || this)
					if(1 === f.nodeType && ("click" !== e.type || f.disabled !== !0)) {
						for(s = [], o = {}, n = 0; n < a; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? g(i, this).index(f) > -1 : g.find(i, this, null, [f]).length), o[i] && s.push(r);
						s.length && u.push({
							elem: f,
							handlers: s
						})
					}
			return f = this, a < t.length && u.push({
				elem: f,
				handlers: t.slice(a)
			}), u
		},
		addProp: function(e, t) {
			Object.defineProperty(g.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: g.isFunction(t) ? function() {
					if(this.originalEvent) return t(this.originalEvent)
				} : function() {
					if(this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[g.expando] ? e : new g.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== xt() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === xt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if(ft.test(this.type) && this.click && k(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return k(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, g.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, g.Event = function(e, t) {
		return this instanceof g.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? Et : St, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(e, t)
	}, g.Event.prototype = {
		constructor: g.Event,
		isDefaultPrevented: St,
		isPropagationStopped: St,
		isImmediatePropagationStopped: St,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = Et, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = Et, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Et, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, g.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && yt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && bt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, g.event.addProp), g.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		g.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					s = e.handleObj;
				return i && (i === r || g.contains(r, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), g.fn.extend({
		on: function(e, t, n, r) {
			return Tt(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Tt(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if(e && e.preventDefault && e.handleObj) return r = e.handleObj, g(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if("object" == typeof e) {
				for(i in e) this.off(i, t, e[i]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = St), this.each(function() {
				g.event.remove(this, e, n, t)
			})
		}
	});
	var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ct = /<script|<style|<link/i,
		kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Lt = /^true\/(.*)/,
		At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	g.extend({
		htmlPrefilter: function(e) {
			return e.replace(Nt, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, s, o, u = e.cloneNode(!0),
				a = g.contains(e.ownerDocument, e);
			if(!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))
				for(o = pt(u), s = pt(e), r = 0, i = s.length; r < i; r++) Pt(s[r], o[r]);
			if(t)
				if(n)
					for(s = s || pt(e), o = o || pt(u), r = 0, i = s.length; r < i; r++) Dt(s[r], o[r]);
				else Dt(e, u);
			return o = pt(u, "script"), o.length > 0 && dt(o, !a && pt(e, "script")), u
		},
		cleanData: function(e) {
			for(var t, n, r, i = g.event.special, s = 0; void 0 !== (n = e[s]); s++)
				if(V(n)) {
					if(t = n[J.expando]) {
						if(t.events)
							for(r in t.events) i[r] ? g.event.remove(n, r) : g.removeEvent(n, r, t.handle);
						n[J.expando] = void 0
					}
					n[K.expando] && (n[K.expando] = void 0)
				}
		}
	}), g.fn.extend({
		detach: function(e) {
			return Bt(this, e, !0)
		},
		remove: function(e) {
			return Bt(this, e)
		},
		text: function(e) {
			return X(this, function(e) {
				return void 0 === e ? g.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Ht(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ot(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return Ht(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ot(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Ht(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Ht(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (g.cleanData(pt(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return g.clone(this, e, t)
			})
		},
		html: function(e) {
			return X(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if("string" == typeof e && !Ct.test(e) && !ht[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = g.htmlPrefilter(e);
					try {
						for(; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (g.cleanData(pt(t, !1)), t.innerHTML = e);
						t = 0
					} catch(i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return Ht(this, arguments, function(t) {
				var n = this.parentNode;
				g.inArray(this, e) < 0 && (g.cleanData(pt(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), g.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		g.fn[e] = function(e) {
			for(var n, r = [], i = g(e), s = i.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), g(i[o])[t](n), u.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var jt = /^margin/,
		Ft = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
		It = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		};
	! function() {
		function t() {
			if(a) {
				a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", gt.appendChild(u);
				var t = e.getComputedStyle(a);
				n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", s = "4px" === t.marginRight, gt.removeChild(u), a = null
			}
		}
		var n, i, s, o, u = r.createElement("div"),
			a = r.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === a.style.backgroundClip, u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.appendChild(a), g.extend(d, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return t(), i
			},
			pixelMarginRight: function() {
				return t(), s
			},
			reliableMarginLeft: function() {
				return t(), o
			}
		}))
	}();
	var Ut = /^(none|table(?!-c[ea]).+)/,
		zt = /^--/,
		Wt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Xt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Vt = ["Webkit", "Moz", "ms"],
		$t = r.createElement("div").style;
	g.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = qt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, s, o, u = g.camelCase(t),
					a = zt.test(t),
					f = e.style;
				return a || (t = Kt(u)), o = g.cssHooks[t] || g.cssHooks[u], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : f[t] : (s = typeof n, "string" === s && (i = tt.exec(n)) && i[1] && (n = st(e, t, i), s = "number"), null != n && n === n && ("number" === s && (n += i && i[3] || (g.cssNumber[u] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (f[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (a ? f.setProperty(t, n) : f[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, s, o, u = g.camelCase(t),
				a = zt.test(t);
			return a || (t = Kt(u)), o = g.cssHooks[t] || g.cssHooks[u], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = qt(e, t, r)), "normal" === i && t in Xt && (i = Xt[t]), "" === n || n ? (s = parseFloat(i), n === !0 || isFinite(s) ? s || 0 : i) : i
		}
	}), g.each(["height", "width"], function(e, t) {
		g.cssHooks[t] = {
			get: function(e, n, r) {
				if(n) return !Ut.test(g.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Yt(e, t, r) : it(e, Wt, function() {
					return Yt(e, t, r)
				})
			},
			set: function(e, n, r) {
				var i, s = r && It(e),
					o = r && Gt(e, t, r, "border-box" === g.css(e, "boxSizing", !1, s), s);
				return o && (i = tt.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = g.css(e, t)), Qt(e, n, o)
			}
		}
	}), g.cssHooks.marginLeft = Rt(d.reliableMarginLeft, function(e, t) {
		if(t) return(parseFloat(qt(e, "marginLeft")) || e.getBoundingClientRect().left - it(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), g.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		g.cssHooks[e + t] = {
			expand: function(n) {
				for(var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + nt[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		}, jt.test(e) || (g.cssHooks[e + t].set = Qt)
	}), g.fn.extend({
		css: function(e, t) {
			return X(this, function(e, t, n) {
				var r, i, s = {},
					o = 0;
				if(Array.isArray(t)) {
					for(r = It(e), i = t.length; o < i; o++) s[t[o]] = g.css(e, t[o], !1, r);
					return s
				}
				return void 0 !== n ? g.style(e, t, n) : g.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), g.Tween = Zt, Zt.prototype = {
		constructor: Zt,
		init: function(e, t, n, r, i, s) {
			this.elem = e, this.prop = n, this.easing = i || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (g.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Zt.propHooks[this.prop];
			return e && e.get ? e.get(this) : Zt.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Zt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this
		}
	}, Zt.prototype.init.prototype = Zt.prototype, Zt.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, Zt.propHooks.scrollTop = Zt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, g.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, g.fx = Zt.prototype.init, g.fx.step = {};
	var en, tn, nn = /^(?:toggle|show|hide)$/,
		rn = /queueHooks$/;
	g.Animation = g.extend(cn, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return st(n.elem, e, tt.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(j);
				for(var n, r = 0, i = e.length; r < i; r++) n = e[r], cn.tweeners[n] = cn.tweeners[n] || [], cn.tweeners[n].unshift(t)
			},
			prefilters: [fn],
			prefilter: function(e, t) {
				t ? cn.prefilters.unshift(e) : cn.prefilters.push(e)
			}
		}), g.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? g.extend({}, e) : {
				complete: n || !n && t || g.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !g.isFunction(t) && t
			};
			return g.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in g.fx.speeds ? r.duration = g.fx.speeds[r.duration] : r.duration = g.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				g.isFunction(r.old) && r.old.call(this), r.queue && g.dequeue(this, r.queue)
			}, r
		}, g.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(rt).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = g.isEmptyObject(e),
					s = g.speed(t, n, r),
					o = function() {
						var t = cn(this, g.extend({}, e), s);
						(i || J.get(this, "finish")) && t.stop(!0)
					};
				return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						s = g.timers,
						o = J.get(this);
					if(i) o[i] && o[i].stop && r(o[i]);
					else
						for(i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
					for(i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
					!t && n || g.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = J.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						s = g.timers,
						o = r ? r.length : 0;
					for(n.finish = !0, g.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
					for(t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), g.each(["toggle", "show", "hide"], function(e, t) {
			var n = g.fn[t];
			g.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
			}
		}), g.each({
			slideDown: un("show"),
			slideUp: un("hide"),
			slideToggle: un("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			g.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), g.timers = [], g.fx.tick = function() {
			var e, t = 0,
				n = g.timers;
			for(en = g.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || g.fx.stop(), en = void 0
		}, g.fx.timer = function(e) {
			g.timers.push(e), g.fx.start()
		}, g.fx.interval = 13, g.fx.start = function() {
			tn || (tn = !0, sn())
		}, g.fx.stop = function() {
			tn = null
		}, g.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, g.fn.delay = function(t, n) {
			return t = g.fx ? g.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i)
				}
			})
		},
		function() {
			var e = r.createElement("input"),
				t = r.createElement("select"),
				n = t.appendChild(r.createElement("option"));
			e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = n.selected, e = r.createElement("input"), e.value = "t", e.type = "radio", d.radioValue = "t" === e.value
		}();
	var hn, pn = g.expr.attrHandle;
	g.fn.extend({
		attr: function(e, t) {
			return X(this, g.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				g.removeAttr(this, e)
			})
		}
	}), g.extend({
		attr: function(e, t, n) {
			var r, i, s = e.nodeType;
			if(3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? g.prop(e, t, n) : (1 === s && g.isXMLDoc(e) || (i = g.attrHooks[t.toLowerCase()] || (g.expr.match.bool.test(t) ? hn : void 0)), void 0 !== n ? null === n ? void g.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = g.find.attr(e, t), null == r ? void 0 : r))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!d.radioValue && "radio" === t && k(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(j);
			if(i && 1 === e.nodeType)
				while(n = i[r++]) e.removeAttribute(n)
		}
	}), hn = {
		set: function(e, t, n) {
			return t === !1 ? g.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, g.each(g.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = pn[t] || g.find.attr;
		pn[t] = function(e, t, r) {
			var i, s, o = t.toLowerCase();
			return r || (s = pn[o], pn[o] = i, i = null != n(e, t, r) ? o : null, pn[o] = s), i
		}
	});
	var dn = /^(?:input|select|textarea|button)$/i,
		vn = /^(?:a|area)$/i;
	g.fn.extend({
		prop: function(e, t) {
			return X(this, g.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[g.propFix[e] || e]
			})
		}
	}), g.extend({
		prop: function(e, t, n) {
			var r, i, s = e.nodeType;
			if(3 !== s && 8 !== s && 2 !== s) return 1 === s && g.isXMLDoc(e) || (t = g.propFix[t] || t, i = g.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = g.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : dn.test(e.nodeName) || vn.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), d.optSelected || (g.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		g.propFix[this.toLowerCase()] = this
	}), g.fn.extend({
		addClass: function(e) {
			var t, n, r, i, s, o, u, a = 0;
			if(g.isFunction(e)) return this.each(function(t) {
				g(this).addClass(e.call(this, t, gn(this)))
			});
			if("string" == typeof e && e) {
				t = e.match(j) || [];
				while(n = this[a++])
					if(i = gn(n), r = 1 === n.nodeType && " " + mn(i) + " ") {
						o = 0;
						while(s = t[o++]) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
						u = mn(r), i !== u && n.setAttribute("class", u)
					}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, s, o, u, a = 0;
			if(g.isFunction(e)) return this.each(function(t) {
				g(this).removeClass(e.call(this, t, gn(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if("string" == typeof e && e) {
				t = e.match(j) || [];
				while(n = this[a++])
					if(i = gn(n), r = 1 === n.nodeType && " " + mn(i) + " ") {
						o = 0;
						while(s = t[o++])
							while(r.indexOf(" " + s + " ") > -1) r = r.replace(" " + s + " ", " ");
						u = mn(r), i !== u && n.setAttribute("class", u)
					}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function(n) {
				g(this).toggleClass(e.call(this, n, gn(this), t), t)
			}) : this.each(function() {
				var t, r, i, s;
				if("string" === n) {
					r = 0, i = g(this), s = e.match(j) || [];
					while(t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
				} else void 0 !== e && "boolean" !== n || (t = gn(this), t && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : J.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while(n = this[r++])
				if(1 === n.nodeType && (" " + mn(gn(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var yn = /\r/g;
	g.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			if(arguments.length) return r = g.isFunction(e), this.each(function(n) {
				var i;
				1 === this.nodeType && (i = r ? e.call(this, n, g(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = g.map(i, function(e) {
					return null == e ? "" : e + ""
				})), t = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
			});
			if(i) return t = g.valHooks[i.type] || g.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(yn, "") : null == n ? "" : n)
		}
	}), g.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = g.find.attr(e, "value");
					return null != t ? t : mn(g.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						s = e.selectedIndex,
						o = "select-one" === e.type,
						u = o ? null : [],
						a = o ? s + 1 : i.length;
					for(r = s < 0 ? a : o ? s : 0; r < a; r++)
						if(n = i[r], (n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
							if(t = g(n).val(), o) return t;
							u.push(t)
						}
					return u
				},
				set: function(e, t) {
					var n, r, i = e.options,
						s = g.makeArray(t),
						o = i.length;
					while(o--) r = i[o], (r.selected = g.inArray(g.valHooks.option.get(r), s) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), s
				}
			}
		}
	}), g.each(["radio", "checkbox"], function() {
		g.valHooks[this] = {
			set: function(e, t) {
				if(Array.isArray(t)) return e.checked = g.inArray(g(e).val(), t) > -1
			}
		}, d.checkOn || (g.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var bn = /^(?:focusinfocus|focusoutblur)$/;
	g.extend(g.event, {
		trigger: function(t, n, i, s) {
			var o, u, a, f, l, h, p, d = [i || r],
				v = c.call(t, "type") ? t.type : t,
				m = c.call(t, "namespace") ? t.namespace.split(".") : [];
			if(u = a = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !bn.test(v + g.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), l = v.indexOf(":") < 0 && "on" + v, t = t[g.expando] ? t : new g.Event(v, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : g.makeArray(n, [t]), p = g.event.special[v] || {}, s || !p.trigger || p.trigger.apply(i, n) !== !1)) {
				if(!s && !p.noBubble && !g.isWindow(i)) {
					for(f = p.delegateType || v, bn.test(f + v) || (u = u.parentNode); u; u = u.parentNode) d.push(u), a = u;
					a === (i.ownerDocument || r) && d.push(a.defaultView || a.parentWindow || e)
				}
				o = 0;
				while((u = d[o++]) && !t.isPropagationStopped()) t.type = o > 1 ? f : p.bindType || v, h = (J.get(u, "events") || {})[t.type] && J.get(u, "handle"), h && h.apply(u, n), h = l && u[l], h && h.apply && V(u) && (t.result = h.apply(u, n), t.result === !1 && t.preventDefault());
				return t.type = v, s || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !V(i) || l && g.isFunction(i[v]) && !g.isWindow(i) && (a = i[l], a && (i[l] = null), g.event.triggered = v, i[v](), g.event.triggered = void 0, a && (i[l] = a)), t.result
			}
		},
		simulate: function(e, t, n) {
			var r = g.extend(new g.Event, n, {
				type: e,
				isSimulated: !0
			});
			g.event.trigger(r, null, t)
		}
	}), g.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				g.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if(n) return g.event.trigger(e, t, n, !0)
		}
	}), g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		g.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), g.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), d.focusin = "onfocusin" in e, d.focusin || g.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			g.event.simulate(t, e.target, g.event.fix(e))
		};
		g.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = J.access(r, t);
				i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = J.access(r, t) - 1;
				i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
			}
		}
	});
	var wn = e.location,
		En = g.now(),
		Sn = /\?/;
	g.parseXML = function(t) {
		var n;
		if(!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch(r) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + t), n
	};
	var xn = /\[\]$/,
		Tn = /\r?\n/g,
		Nn = /^(?:submit|button|image|reset|file)$/i,
		Cn = /^(?:input|select|textarea|keygen)/i;
	g.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = g.isFunction(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if(Array.isArray(e) || e.jquery && !g.isPlainObject(e)) g.each(e, function() {
			i(this.name, this.value)
		});
		else
			for(n in e) kn(n, e[n], t, i);
		return r.join("&")
	}, g.fn.extend({
		serialize: function() {
			return g.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = g.prop(this, "elements");
				return e ? g.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !g(this).is(":disabled") && Cn.test(this.nodeName) && !Nn.test(e) && (this.checked || !ft.test(e))
			}).map(function(e, t) {
				var n = g(this).val();
				return null == n ? null : Array.isArray(n) ? g.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Tn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Tn, "\r\n")
				}
			}).get()
		}
	});
	var Ln = /%20/g,
		An = /#.*$/,
		On = /([?&])_=[^&]*/,
		Mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		_n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Dn = /^(?:GET|HEAD)$/,
		Pn = /^\/\//,
		Hn = {},
		Bn = {},
		jn = "*/".concat("*"),
		Fn = r.createElement("a");
	Fn.href = wn.href, g.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: wn.href,
			type: "GET",
			isLocal: _n.test(wn.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": jn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": g.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Rn(Rn(e, g.ajaxSettings), t) : Rn(g.ajaxSettings, e)
		},
		ajaxPrefilter: In(Hn),
		ajaxTransport: In(Bn),
		ajax: function(t, n) {
			function C(t, n, r, u) {
				var f, h, p, E, S, x = n;
				l || (l = !0, a && e.clearTimeout(a), i = void 0, o = u || "", T.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, r && (E = Un(d, T, r)), E = zn(d, E, T, f), f ? (d.ifModified && (S = T.getResponseHeader("Last-Modified"), S && (g.lastModified[s] = S), S = T.getResponseHeader("etag"), S && (g.etag[s] = S)), 204 === t || "HEAD" === d.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = E.state, h = E.data, p = E.error, f = !p)) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", f ? y.resolveWith(v, [h, x, T]) : y.rejectWith(v, [T, x, p]), T.statusCode(w), w = void 0, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, d, f ? h : p]), b.fireWith(v, [T, x]), c && (m.trigger("ajaxComplete", [T, d]), --g.active || g.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, s, o, u, a, f, l, c, h, p, d = g.ajaxSetup({}, n),
				v = d.context || d,
				m = d.context && (v.nodeType || v.jquery) ? g(v) : g.event,
				y = g.Deferred(),
				b = g.Callbacks("once memory"),
				w = d.statusCode || {},
				E = {},
				S = {},
				x = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(l) {
							if(!u) {
								u = {};
								while(t = Mn.exec(o)) u[t[1].toLowerCase()] = t[2]
							}
							t = u[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return l ? o : null
					},
					setRequestHeader: function(e, t) {
						return null == l && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, E[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == l && (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(l) T.always(e[T.status]);
							else
								for(t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || x;
						return i && i.abort(t), C(0, t), this
					}
				};
			if(y.promise(T), d.url = ((t || d.url || wn.href) + "").replace(Pn, wn.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(j) || [""], null == d.crossDomain) {
				f = r.createElement("a");
				try {
					f.href = d.url, f.href = f.href, d.crossDomain = Fn.protocol + "//" + Fn.host != f.protocol + "//" + f.host
				} catch(N) {
					d.crossDomain = !0
				}
			}
			if(d.data && d.processData && "string" != typeof d.data && (d.data = g.param(d.data, d.traditional)), qn(Hn, d, n, T), l) return T;
			c = g.event && d.global, c && 0 === g.active++ && g.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Dn.test(d.type), s = d.url.replace(An, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Ln, "+")) : (p = d.url.slice(s.length), d.data && (s += (Sn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (s = s.replace(On, "$1"), p = (Sn.test(s) ? "&" : "?") + "_=" + En++ + p), d.url = s + p), d.ifModified && (g.lastModified[s] && T.setRequestHeader("If-Modified-Since", g.lastModified[s]), g.etag[s] && T.setRequestHeader("If-None-Match", g.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : d.accepts["*"]);
			for(h in d.headers) T.setRequestHeader(h, d.headers[h]);
			if(d.beforeSend && (d.beforeSend.call(v, T, d) === !1 || l)) return T.abort();
			if(x = "abort", b.add(d.complete), T.done(d.success), T.fail(d.error), i = qn(Bn, d, n, T)) {
				if(T.readyState = 1, c && m.trigger("ajaxSend", [T, d]), l) return T;
				d.async && d.timeout > 0 && (a = e.setTimeout(function() {
					T.abort("timeout")
				}, d.timeout));
				try {
					l = !1, i.send(E, C)
				} catch(N) {
					if(l) throw N;
					C(-1, N)
				}
			} else C(-1, "No Transport");
			return T
		},
		getJSON: function(e, t, n) {
			return g.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return g.get(e, void 0, t, "script")
		}
	}), g.each(["get", "post"], function(e, t) {
		g[t] = function(e, n, r, i) {
			return g.isFunction(n) && (i = i || r, r = n, n = void 0), g.ajax(g.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, g.isPlainObject(e) && e))
		}
	}), g._evalUrl = function(e) {
		return g.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, g.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (g.isFunction(e) && (e = e.call(this[0])), t = g(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while(e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return g.isFunction(e) ? this.each(function(t) {
				g(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = g(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = g.isFunction(e);
			return this.each(function(n) {
				g(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				g(this).replaceWith(this.childNodes)
			}), this
		}
	}), g.expr.pseudos.hidden = function(e) {
		return !g.expr.pseudos.visible(e)
	}, g.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, g.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	};
	var Wn = {
			0: 200,
			1223: 204
		},
		Xn = g.ajaxSettings.xhr();
	d.cors = !!Xn && "withCredentials" in Xn, d.ajax = Xn = !!Xn, g.ajaxTransport(function(t) {
		var n, r;
		if(d.cors || Xn && !t.crossDomain) return {
			send: function(i, s) {
				var o, u = t.xhr();
				if(u.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for(o in t.xhrFields) u[o] = t.xhrFields[o];
				t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for(o in i) u.setRequestHeader(o, i[o]);
				n = function(e) {
					return function() {
						n && (n = r = u.onload = u.onerror = u.onabort = u.onreadystatechange = null, "abort" === e ? u.abort() : "error" === e ? "number" != typeof u.status ? s(0, "error") : s(u.status, u.statusText) : s(Wn[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
							binary: u.response
						} : {
							text: u.responseText
						}, u.getAllResponseHeaders()))
					}
				}, u.onload = n(), r = u.onerror = n("error"), void 0 !== u.onabort ? u.onabort = r : u.onreadystatechange = function() {
					4 === u.readyState && e.setTimeout(function() {
						n && r()
					})
				}, n = n("abort");
				try {
					u.send(t.hasContent && t.data || null)
				} catch(a) {
					if(n) throw a
				}
			},
			abort: function() {
				n && n()
			}
		}
	}), g.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), g.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return g.globalEval(e), e
			}
		}
	}), g.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), g.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var t, n;
			return {
				send: function(i, s) {
					t = g("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
					}), r.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Vn = [],
		$n = /(=)\?(?=&|$)|\?\?/;
	g.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Vn.pop() || g.expando + "_" + En++;
			return this[e] = !0, e
		}
	}), g.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, s, o, u = t.jsonp !== !1 && ($n.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(t.data) && "data");
		if(u || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace($n, "$1" + i) : t.jsonp !== !1 && (t.url += (Sn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return o || g.error(i + " was not called"), o[0]
		}, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
			o = arguments
		}, r.always(function() {
			void 0 === s ? g(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, Vn.push(i)), o && g.isFunction(s) && s(o[0]), o = s = void 0
		}), "script"
	}), d.createHTMLDocument = function() {
		var e = r.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), g.parseHTML = function(e, t, n) {
		if("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, s, o;
		return t || (d.createHTMLDocument ? (t = r.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = r.location.href, t.head.appendChild(i)) : t = r), s = L.exec(e), o = !n && [], s ? [t.createElement(s[1])] : (s = mt([e], t, o), o && o.length && g(o).remove(), g.merge([], s.childNodes))
	}, g.fn.load = function(e, t, n) {
		var r, i, s, o = this,
			u = e.indexOf(" ");
		return u > -1 && (r = mn(e.slice(u)), e = e.slice(0, u)), g.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && g.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			s = arguments, o.html(r ? g("<div>").append(g.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			o.each(function() {
				n.apply(this, s || [e.responseText, t, e])
			})
		}), this
	}, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		g.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), g.expr.pseudos.animated = function(e) {
		return g.grep(g.timers, function(t) {
			return e === t.elem
		}).length
	}, g.offset = {
		setOffset: function(e, t, n) {
			var r, i, s, o, u, a, f, l = g.css(e, "position"),
				c = g(e),
				h = {};
			"static" === l && (e.style.position = "relative"), u = c.offset(), s = g.css(e, "top"), a = g.css(e, "left"), f = ("absolute" === l || "fixed" === l) && (s + a).indexOf("auto") > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), g.isFunction(t) && (t = t.call(e, n, g.extend({}, u))), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
		}
	}, g.fn.extend({
		offset: function(e) {
			if(arguments.length) return void 0 === e ? this : this.each(function(t) {
				g.offset.setOffset(this, e, t)
			});
			var t, n, r, i, s = this[0];
			if(s) return s.getClientRects().length ? (r = s.getBoundingClientRect(), t = s.ownerDocument, n = t.documentElement, i = t.defaultView, {
				top: r.top + i.pageYOffset - n.clientTop,
				left: r.left + i.pageXOffset - n.clientLeft
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if(this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === g.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k(e[0], "html") || (r = e.offset()), r = {
					top: r.top + g.css(e[0], "borderTopWidth", !0),
					left: r.left + g.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - r.top - g.css(n, "marginTop", !0),
					left: t.left - r.left - g.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent;
				while(e && "static" === g.css(e, "position")) e = e.offsetParent;
				return e || gt
			})
		}
	}), g.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		g.fn[e] = function(r) {
			return X(this, function(e, r, i) {
				var s;
				return g.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === i ? s ? s[t] : e[r] : void(s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i)
			}, e, r, arguments.length)
		}
	}), g.each(["top", "left"], function(e, t) {
		g.cssHooks[t] = Rt(d.pixelPosition, function(e, n) {
			if(n) return n = qt(e, t), Ft.test(n) ? g(e).position()[t] + "px" : n
		})
	}), g.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		g.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			g.fn[r] = function(i, s) {
				var o = arguments.length && (n || "boolean" != typeof i),
					u = n || (i === !0 || s === !0 ? "margin" : "border");
				return X(this, function(t, n, i) {
					var s;
					return g.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? g.css(t, n, u) : g.style(t, n, i, u)
				}, t, o ? i : void 0, o)
			}
		})
	}), g.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		holdReady: function(e) {
			e ? g.readyWait++ : g.ready(!0)
		}
	}), g.isArray = Array.isArray, g.parseJSON = JSON.parse, g.nodeName = k, "function" == typeof define && define.amd && define("jquery", [], function() {
		return g
	});
	var Jn = e.jQuery,
		Kn = e.$;
	return g.noConflict = function(t) {
		return e.$ === g && (e.$ = Kn), t && e.jQuery === g && (e.jQuery = Jn), g
	}, t || (e.jQuery = e.$ = g), g
})

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
				var r = function(e) {
						var t, n = [],
							r = e.length;
						for(t = 0; t !== r; n.push(e[t++]));
						return n
					},
					i = function(e, t, n) {
						var r, i, s = e.cycle;
						for(r in s) i = s[r], e[r] = "function" == typeof i ? i(n, t[n]) : i[n % i.length];
						delete e.cycle
					},
					s = function(e, t, r) {
						n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
					},
					o = 1e-10,
					u = n._internals,
					a = u.isSelector,
					f = u.isArray,
					l = s.prototype = n.to({}, .1, {}),
					c = [];
				s.version = "1.20.2", l.constructor = s, l.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = n.killTweensOf, s.getTweensOf = n.getTweensOf, s.lagSmoothing = n.lagSmoothing, s.ticker = n.ticker, s.render = n.render, l.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), n.prototype.invalidate.call(this)
				}, l.updateTo = function(e, t) {
					var r, i = this.ratio,
						s = this.vars.immediateRender || e.immediateRender;
					t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for(r in e) this.vars[r] = e[r];
					if(this._initted || s)
						if(t) this._initted = !1, s && this.render(0, !0, !0);
						else if(this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var o = this._totalTime;
						this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
					} else if(this._initted = !1, this._init(), this._time > 0 || s)
						for(var u, a = 1 / (1 - i), f = this._firstPT; f;) u = f.s + f.c, f.c *= a, f.s = u - f.c, f = f._next;
					return this
				}, l.render = function(e, t, r) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var i, s, a, f, l, c, h, p, d, v = this._dirty ? this.totalDuration() : this._totalDuration,
						m = this._time,
						y = this._totalTime,
						b = this._cycle,
						w = this._duration,
						E = this._rawPrevTime;
					if(e >= v - 1e-7 && e >= 0 ? (this._totalTime = v, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = w, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, s = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === w && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (e = 0), (0 > E || 0 >= e && e >= -1e-7 || E === o && "isPause" !== this.data) && E !== e && (r = !0, E > o && (s = "onReverseComplete")), this._rawPrevTime = p = !t || e || E === e ? e : o)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== y || 0 === w && E > 0) && (s = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === w && (this._initted || !this.vars.lazy || r) && (E >= 0 && (r = !0), this._rawPrevTime = p = !t || e || E === e ? e : o)), this._initted || (r = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (f = w + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && e >= y && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = w - this._time, d = this._yoyoEase || this.vars.yoyoEase, d && (this._yoyoEase || (d !== !0 || this._initted ? this._yoyoEase = d = d === !0 ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || n.defaultEase : n.defaultEase)), this.ratio = d ? 1 - d.getRatio((w - this._time) / w) : 0)), this._time > w ? this._time = w : this._time < 0 && (this._time = 0)), this._easeType && !d ? (l = this._time / w, c = this._easeType, h = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === h ? l *= l : 2 === h ? l *= l * l : 3 === h ? l *= l * l * l : 4 === h && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : this._time / w < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : d || (this.ratio = this._ease.getRatio(this._time / w))), m === this._time && !r && b === this._cycle) return void(y !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
					if(!this._initted) {
						if(this._init(), !this._initted || this._gc) return;
						if(!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = y, this._rawPrevTime = E, this._cycle = b, u.lazyTweens.push(this), void(this._lazy = [e, t]);
						!this._time || i || d ? i && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / w)
					}
					for(this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && e >= 0 && (this._active = !0), 0 === y && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, r) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === w) && (t || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
					this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, r), t || (this._totalTime !== y || s) && this._callback("onUpdate")), this._cycle !== b && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || r) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, r), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === w && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
				}, s.to = function(e, t, n) {
					return new s(e, t, n)
				}, s.from = function(e, t, n) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new s(e, t, n)
				}, s.fromTo = function(e, t, n, r) {
					return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new s(e, t, r)
				}, s.staggerTo = s.allTo = function(e, t, o, u, l, h, p) {
					u = u || 0;
					var d, v, m, g, y = 0,
						b = [],
						w = function() {
							o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), l.apply(p || o.callbackScope || this, h || c)
						},
						E = o.cycle,
						S = o.startAt && o.startAt.cycle;
					for(f(e) || ("string" == typeof e && (e = n.selector(e) || e), a(e) && (e = r(e))), e = e || [], 0 > u && (e = r(e), e.reverse(), u *= -1), d = e.length - 1, m = 0; d >= m; m++) {
						v = {};
						for(g in o) v[g] = o[g];
						if(E && (i(v, e, m), null != v.duration && (t = v.duration, delete v.duration)), S) {
							S = v.startAt = {};
							for(g in o.startAt) S[g] = o.startAt[g];
							i(v.startAt, e, m)
						}
						v.delay = y + (v.delay || 0), m === d && l && (v.onComplete = w), b[m] = new s(e[m], t, v), y += u
					}
					return b
				}, s.staggerFrom = s.allFrom = function(e, t, n, r, i, o, u) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, s.staggerTo(e, t, n, r, i, o, u)
				}, s.staggerFromTo = s.allFromTo = function(e, t, n, r, i, o, u, a) {
					return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, s.staggerTo(e, t, r, i, o, u, a)
				}, s.delayedCall = function(e, t, n, r, i) {
					return new s(t, 0, {
						delay: e,
						onComplete: t,
						onCompleteParams: n,
						callbackScope: r,
						onReverseComplete: t,
						onReverseCompleteParams: n,
						immediateRender: !1,
						useFrames: i,
						overwrite: 0
					})
				}, s.set = function(e, t) {
					return new s(e, 0, t)
				}, s.isTweening = function(e) {
					return n.getTweensOf(e, !0).length > 0
				};
				var h = function(e, t) {
						for(var r = [], i = 0, s = e._first; s;) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(h(s, t)), i = r.length), s = s._next;
						return r
					},
					p = s.getAllTweens = function(t) {
						return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
					};
				s.killAll = function(e, n, r, i) {
					null == n && (n = !0), null == r && (r = !0);
					var s, o, u, a = p(0 != i),
						f = a.length,
						l = n && r && i;
					for(u = 0; f > u; u++) o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
				}, s.killChildTweensOf = function(e, t) {
					if(null != e) {
						var i, o, l, c, h, p = u.tweenLookup;
						if("string" == typeof e && (e = n.selector(e) || e), a(e) && (e = r(e)), f(e))
							for(c = e.length; --c > -1;) s.killChildTweensOf(e[c], t);
						else {
							i = [];
							for(l in p)
								for(o = p[l].target.parentNode; o;) o === e && (i = i.concat(p[l].tweens)), o = o.parentNode;
							for(h = i.length, c = 0; h > c; c++) t && i[c].totalTime(i[c].totalDuration()), i[c]._enabled(!1, !1)
						}
					}
				};
				var d = function(e, n, r, i) {
					n = n !== !1, r = r !== !1, i = i !== !1;
					for(var s, o, u = p(i), a = n && r && i, f = u.length; --f > -1;) o = u[f], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
				};
				return s.pauseAll = function(e, t, n) {
					d(!0, e, t, n)
				}, s.resumeAll = function(e, t, n) {
					d(!1, e, t, n)
				}, s.globalTimeScale = function(t) {
					var r = e._rootTimeline,
						i = n.ticker.time;
					return arguments.length ? (t = t || o, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
				}, l.progress = function(e, t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
				}, l.totalProgress = function(e, t) {
					return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
				}, l.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
				}, l.duration = function(t) {
					return arguments.length ? e.prototype.duration.call(this, t) : this._duration
				}, l.totalDuration = function(e) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, l.repeat = function(e) {
					return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
				}, l.repeatDelay = function(e) {
					return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
				}, l.yoyo = function(e) {
					return arguments.length ? (this._yoyo = e, this) : this._yoyo
				}, s
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
				var r = function(e) {
						t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var n, r, i = this.vars;
						for(r in i) n = i[r], a(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
						a(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
					},
					i = 1e-10,
					s = n._internals,
					o = r._internals = {},
					u = s.isSelector,
					a = s.isArray,
					f = s.lazyTweens,
					l = s.lazyRender,
					c = _gsScope._gsDefine.globals,
					h = function(e) {
						var t, n = {};
						for(t in e) n[t] = e[t];
						return n
					},
					p = function(e, t, n) {
						var r, i, s = e.cycle;
						for(r in s) i = s[r], e[r] = "function" == typeof i ? i(n, t[n]) : i[n % i.length];
						delete e.cycle
					},
					d = o.pauseCallback = function() {},
					v = function(e) {
						var t, n = [],
							r = e.length;
						for(t = 0; t !== r; n.push(e[t++]));
						return n
					},
					m = r.prototype = new t;
				return r.version = "1.20.2", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(e, t, r, i) {
					var s = r.repeat && c.TweenMax || n;
					return t ? this.add(new s(e, t, r), i) : this.set(e, r, i)
				}, m.from = function(e, t, r, i) {
					return this.add((r.repeat && c.TweenMax || n).from(e, t, r), i)
				}, m.fromTo = function(e, t, r, i, s) {
					var o = i.repeat && c.TweenMax || n;
					return t ? this.add(o.fromTo(e, t, r, i), s) : this.set(e, i, s)
				}, m.staggerTo = function(e, t, i, s, o, a, f, l) {
					var c, d, m = new r({
							onComplete: a,
							onCompleteParams: f,
							callbackScope: l,
							smoothChildTiming: this.smoothChildTiming
						}),
						g = i.cycle;
					for("string" == typeof e && (e = n.selector(e) || e), e = e || [], u(e) && (e = v(e)), s = s || 0, 0 > s && (e = v(e), e.reverse(), s *= -1), d = 0; d < e.length; d++) c = h(i), c.startAt && (c.startAt = h(c.startAt), c.startAt.cycle && p(c.startAt, e, d)), g && (p(c, e, d), null != c.duration && (t = c.duration, delete c.duration)), m.to(e[d], t, c, d * s);
					return this.add(m, o)
				}, m.staggerFrom = function(e, t, n, r, i, s, o, u) {
					return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
				}, m.staggerFromTo = function(e, t, n, r, i, s, o, u, a) {
					return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
				}, m.call = function(e, t, r, i) {
					return this.add(n.delayedCall(0, e, t, r), i)
				}, m.set = function(e, t, r) {
					return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
				}, r.exportRoot = function(e, t) {
					e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
					var i, s, o = new r(e),
						u = o._timeline;
					for(null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;) s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
					return u.add(o, 0), o
				}, m.add = function(i, s, o, u) {
					var f, l, c, h, p, d;
					if("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
						if(i instanceof Array || i && i.push && a(i)) {
							for(o = o || "normal", u = u || 0, f = s, l = i.length, c = 0; l > c; c++) a(h = i[c]) && (h = new r({
								tweens: h
							})), this.add(h, f), "string" != typeof h && "function" != typeof h && ("sequence" === o ? f = h._startTime + h.totalDuration() / h._timeScale : "start" === o && (h._startTime -= h.delay())), f += u;
							return this._uncache(!0)
						}
						if("string" == typeof i) return this.addLabel(i, s);
						if("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
						i = n.delayedCall(0, i)
					}
					if(t.prototype.add.call(this, i, s), i._time && i.render((this.rawTime() - i._startTime) * i._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						for(p = this, d = p.rawTime() > i._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
					return this
				}, m.remove = function(t) {
					if(t instanceof e) {
						this._remove(t, !1);
						var n = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
						return t._startTime = (t._paused ? t._pauseTime : n._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
					}
					if(t instanceof Array || t && t.push && a(t)) {
						for(var r = t.length; --r > -1;) this.remove(t[r]);
						return this
					}
					return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
				}, m._remove = function(e, n) {
					t.prototype._remove.call(this, e, n);
					var r = this._last;
					return r ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
				}, m.append = function(e, t) {
					return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
				}, m.insert = m.insertMultiple = function(e, t, n, r) {
					return this.add(e, t || 0, n, r)
				}, m.appendMultiple = function(e, t, n, r) {
					return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
				}, m.addLabel = function(e, t) {
					return this._labels[e] = this._parseTimeOrLabel(t), this
				}, m.addPause = function(e, t, r, i) {
					var s = n.delayedCall(0, d, r, i || this);
					return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
				}, m.removeLabel = function(e) {
					return delete this._labels[e], this
				}, m.getLabelTime = function(e) {
					return null != this._labels[e] ? this._labels[e] : -1
				}, m._parseTimeOrLabel = function(t, n, r, i) {
					var s, o;
					if(i instanceof e && i.timeline === this) this.remove(i);
					else if(i && (i instanceof Array || i.push && a(i)))
						for(o = i.length; --o > -1;) i[o] instanceof e && i[o].timeline === this && this.remove(i[o]);
					if(s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - s : 0, r);
					if(n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = s);
					else {
						if(o = t.indexOf("="), -1 === o) return null == this._labels[t] ? r ? this._labels[t] = s + n : n : this._labels[t] + n;
						n = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, r) : s
					}
					return Number(t) + n
				}, m.seek = function(e, t) {
					return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
				}, m.stop = function() {
					return this.paused(!0)
				}, m.gotoAndPlay = function(e, t) {
					return this.play(e, t)
				}, m.gotoAndStop = function(e, t) {
					return this.pause(e, t)
				}, m.render = function(e, t, n) {
					this._gc && this._enabled(!0, !1);
					var r, s, o, u, a, c, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						v = this._startTime,
						m = this._timeScale,
						g = this._paused;
					if(e >= p - 1e-7 && e >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (a = !0, this._rawPrevTime > i && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, e = p + 1e-4;
					else if(1e-7 > e)
						if(this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== i && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (u = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, u = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = e;
						else {
							if(this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, 0 === e && s)
								for(r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
							e = 0, this._initted || (a = !0)
						}
					else {
						if(this._hasPause && !this._forcingPlayhead && !t) {
							if(e >= d)
								for(r = this._first; r && r._startTime <= e && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
							else
								for(r = this._last; r && r._startTime >= e && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
							c && (this._time = e = c._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						this._totalTime = this._time = this._rawPrevTime = e
					}
					if(this._time !== d && this._first || n || a || c) {
						if(this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), h = this._time, h >= d)
							for(r = this._first; r && (o = r._next, h === this._time && (!this._paused || g));)(r._active || r._startTime <= h && !r._paused && !r._gc) && (c === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
						else
							for(r = this._last; r && (o = r._prev, h === this._time && (!this._paused || g));) {
								if(r._active || r._startTime <= d && !r._paused && !r._gc) {
									if(c === r) {
										for(c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, n), c = c._prev;
										c = null, this.pause()
									}
									r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)
								}
								r = o
							}
						this._onUpdate && (t || (f.length && l(), this._callback("onUpdate"))), u && (this._gc || (v === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (f.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this._callback(u)))
					}
				}, m._hasPausedChild = function() {
					for(var e = this._first; e;) {
						if(e._paused || e instanceof r && e._hasPausedChild()) return !0;
						e = e._next
					}
					return !1
				}, m.getChildren = function(e, t, r, i) {
					i = i || -9999999999;
					for(var s = [], o = this._first, u = 0; o;) o._startTime < i || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
					return s
				}, m.getTweensOf = function(e, t) {
					var r, i, s = this._gc,
						o = [],
						u = 0;
					for(s && this._enabled(!0, !0), r = n.getTweensOf(e), i = r.length; --i > -1;)(r[i].timeline === this || t && this._contains(r[i])) && (o[u++] = r[i]);
					return s && this._enabled(!1, !0), o
				}, m.recent = function() {
					return this._recent
				}, m._contains = function(e) {
					for(var t = e.timeline; t;) {
						if(t === this) return !0;
						t = t.timeline
					}
					return !1
				}, m.shiftChildren = function(e, t, n) {
					n = n || 0;
					for(var r, i = this._first, s = this._labels; i;) i._startTime >= n && (i._startTime += e), i = i._next;
					if(t)
						for(r in s) s[r] >= n && (s[r] += e);
					return this._uncache(!0)
				}, m._kill = function(e, t) {
					if(!e && !t) return this._enabled(!1, !1);
					for(var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
					return i
				}, m.clear = function(e) {
					var t = this.getChildren(!1, !0, !0),
						n = t.length;
					for(this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
					return e !== !1 && (this._labels = {}), this._uncache(!0)
				}, m.invalidate = function() {
					for(var t = this._first; t;) t.invalidate(), t = t._next;
					return e.prototype.invalidate.call(this)
				}, m._enabled = function(e, n) {
					if(e === this._gc)
						for(var r = this._first; r;) r._enabled(e, !0), r = r._next;
					return t.prototype._enabled.call(this, e, n)
				}, m.totalTime = function(t, n, r) {
					this._forcingPlayhead = !0;
					var i = e.prototype.totalTime.apply(this, arguments);
					return this._forcingPlayhead = !1, i
				}, m.duration = function(e) {
					return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
				}, m.totalDuration = function(e) {
					if(!arguments.length) {
						if(this._dirty) {
							for(var t, n, r = 0, i = this._last, s = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, i._startTime < 0 && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
							this._duration = this._totalDuration = r, this._dirty = !1
						}
						return this._totalDuration
					}
					return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
				}, m.paused = function(t) {
					if(!t)
						for(var n = this._first, r = this._time; n;) n._startTime === r && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
					return e.prototype.paused.apply(this, arguments)
				}, m.usesFrames = function() {
					for(var t = this._timeline; t._timeline;) t = t._timeline;
					return t === e._rootFramesTimeline
				}, m.rawTime = function(e) {
					return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
				}, r
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
				var r = function(t) {
						e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					i = 1e-10,
					s = t._internals,
					o = s.lazyTweens,
					u = s.lazyRender,
					a = _gsScope._gsDefine.globals,
					f = new n(null, null, 1, 0),
					l = r.prototype = new e;
				return l.constructor = r, l.kill()._gc = !1, r.version = "1.20.2", l.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
				}, l.addCallback = function(e, n, r, i) {
					return this.add(t.delayedCall(0, e, r, i), n)
				}, l.removeCallback = function(e, t) {
					if(e)
						if(null == t) this._kill(null, e);
						else
							for(var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
					return this
				}, l.removePause = function(t) {
					return this.removeCallback(e._internals.pauseCallback, t)
				}, l.tweenTo = function(e, n) {
					n = n || {};
					var r, i, s, o = {
							ease: f,
							useFrames: this.usesFrames(),
							immediateRender: !1
						},
						u = n.repeat && a.TweenMax || t;
					for(i in n) o[i] = n[i];
					return o.time = this._parseTimeOrLabel(e), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new u(this, r, o), o.onStart = function() {
						s.target.paused(!0), s.vars.time !== s.target.time() && r === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || s, n.onStartParams || [])
					}, s
				}, l.tweenFromTo = function(e, t, n) {
					n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
						onComplete: this.seek,
						onCompleteParams: [e],
						callbackScope: this
					}, n.immediateRender = n.immediateRender !== !1;
					var r = this.tweenTo(t, n);
					return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
				}, l.render = function(e, t, n) {
					this._gc && this._enabled(!0, !1);
					var r, s, a, f, l, c, p, d, v = this._dirty ? this.totalDuration() : this._totalDuration,
						m = this._duration,
						y = this._time,
						b = this._totalTime,
						w = this._startTime,
						E = this._timeScale,
						S = this._rawPrevTime,
						x = this._paused,
						T = this._cycle;
					if(e >= v - 1e-7 && e >= 0) this._locked || (this._totalTime = v, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, f = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > S || S === i) && S !== e && this._first && (l = !0, S > i && (f = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
					else if(1e-7 > e)
						if(this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== y || 0 === m && S !== i && (S > 0 || 0 > e && S >= 0) && !this._locked) && (f = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, f = "onReverseComplete") : S >= 0 && this._first && (l = !0), this._rawPrevTime = e;
						else {
							if(this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : i, 0 === e && s)
								for(r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
							e = 0, this._initted || (l = !0)
						}
					else if(0 === m && 0 > S && (l = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && e >= b && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
						if(e = this._time, e >= y || this._repeat && T !== this._cycle)
							for(r = this._first; r && r._startTime <= e && !p;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (p = r), r = r._next;
						else
							for(r = this._last; r && r._startTime >= e && !p;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (p = r), r = r._prev;
						p && p._startTime < m && (this._time = e = p._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
					}
					if(this._cycle !== T && !this._locked) {
						var N = this._yoyo && 0 !== (1 & T),
							C = N === (this._yoyo && 0 !== (1 & this._cycle)),
							k = this._totalTime,
							L = this._cycle,
							A = this._rawPrevTime,
							O = this._time;
						if(this._totalTime = T * m, this._cycle < T ? N = !N : this._totalTime += m, this._time = y, this._rawPrevTime = 0 === m ? S - 1e-4 : S, this._cycle = T, this._locked = !0, y = N ? 0 : m, this.render(y, t, 0 === m), t || this._gc || this.vars.onRepeat && (this._cycle = L, this._locked = !1, this._callback("onRepeat")), y !== this._time) return;
						if(C && (this._cycle = T, this._locked = !0, y = N ? m + 1e-4 : -0.0001, this.render(y, !0, !1)), this._locked = !1, this._paused && !x) return;
						this._time = O, this._totalTime = k, this._cycle = L, this._rawPrevTime = A
					}
					if(!(this._time !== y && this._first || n || l || p)) return void(b !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
					if(this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== b && e > 0 && (this._active = !0), 0 === b && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), d = this._time, d >= y)
						for(r = this._first; r && (a = r._next, d === this._time && (!this._paused || x));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (p === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = a;
					else
						for(r = this._last; r && (a = r._prev, d === this._time && (!this._paused || x));) {
							if(r._active || r._startTime <= y && !r._paused && !r._gc) {
								if(p === r) {
									for(p = r._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, n), p = p._prev;
									p = null, this.pause()
								}
								r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)
							}
							r = a
						}
					this._onUpdate && (t || (o.length && u(), this._callback("onUpdate"))), f && (this._locked || this._gc || (w === this._startTime || E !== this._timeScale) && (0 === this._time || v >= this.totalDuration()) && (s && (o.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[f] && this._callback(f)))
				}, l.getActive = function(e, t, n) {
					null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
					var r, i, s = [],
						o = this.getChildren(e, t, n),
						u = 0,
						a = o.length;
					for(r = 0; a > r; r++) i = o[r], i.isActive() && (s[u++] = i);
					return s
				}, l.getLabelAfter = function(e) {
					e || 0 !== e && (e = this._time);
					var t, n = this.getLabelsArray(),
						r = n.length;
					for(t = 0; r > t; t++)
						if(n[t].time > e) return n[t].name;
					return null
				}, l.getLabelBefore = function(e) {
					null == e && (e = this._time);
					for(var t = this.getLabelsArray(), n = t.length; --n > -1;)
						if(t[n].time < e) return t[n].name;
					return null
				}, l.getLabelsArray = function() {
					var e, t = [],
						n = 0;
					for(e in this._labels) t[n++] = {
						time: this._labels[e],
						name: e
					};
					return t.sort(function(e, t) {
						return e.time - t.time
					}), t
				}, l.invalidate = function() {
					return this._locked = !1, e.prototype.invalidate.call(this)
				}, l.progress = function(e, t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
				}, l.totalProgress = function(e, t) {
					return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
				}, l.totalDuration = function(t) {
					return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, l.time = function(e, t) {
					return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
				}, l.repeat = function(e) {
					return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
				}, l.repeatDelay = function(e) {
					return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
				}, l.yoyo = function(e) {
					return arguments.length ? (this._yoyo = e, this) : this._yoyo
				}, l.currentLabel = function(e) {
					return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
				}, r
			}, !0),
			function() {
				var e = 180 / Math.PI,
					t = [],
					n = [],
					r = [],
					i = {},
					s = _gsScope._gsDefine.globals,
					o = function(e, t, n, r) {
						n === r && (n = r - (r - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
					},
					u = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					a = function(e, t, n, r) {
						var i = {
								a: e
							},
							s = {},
							o = {},
							u = {
								c: r
							},
							a = (e + t) / 2,
							f = (t + n) / 2,
							l = (n + r) / 2,
							c = (a + f) / 2,
							h = (f + l) / 2,
							p = (h - c) / 8;
						return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
					},
					f = function(e, i, s, o, u) {
						var f, l, c, h, p, d, v, m, g, y, w, E, S, x = e.length - 1,
							T = 0,
							N = e[0].a;
						for(f = 0; x > f; f++) p = e[T], l = p.a, c = p.d, h = e[T + 1].d, u ? (w = t[f], E = n[f], S = (E + w) * i * .25 / (o ? .5 : r[f] || .5), d = c - (c - l) * (o ? .5 * i : 0 !== w ? S / w : 0), v = c + (h - c) * (o ? .5 * i : 0 !== E ? S / E : 0), m = c - (d + ((v - d) * (3 * w / (w + E) + .5) / 4 || 0))) : (d = c - (c - l) * i * .5, v = c + (h - c) * i * .5, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, 0 !== f ? p.b = N : p.b = N = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = N - l, s ? (y = a(l, N, g, c), e.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, N = v;
						p = e[T], p.b = N, p.c = N + .4 * (p.d - N), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = N - p.a, s && (y = a(p.a, N, p.c, p.d), e.splice(T, 1, y[0], y[1], y[2], y[3]))
					},
					l = function(e, r, i, s) {
						var u, a, f, l, c, h, p = [];
						if(s)
							for(e = [s].concat(e), a = e.length; --a > -1;) "string" == typeof(h = e[a][r]) && "=" === h.charAt(1) && (e[a][r] = s[r] + Number(h.charAt(0) + h.substr(2)));
						if(u = e.length - 2, 0 > u) return p[0] = new o(e[0][r], 0, 0, e[0][r]), p;
						for(a = 0; u > a; a++) f = e[a][r], l = e[a + 1][r], p[a] = new o(f, 0, 0, l), i && (c = e[a + 2][r], t[a] = (t[a] || 0) + (l - f) * (l - f), n[a] = (n[a] || 0) + (c - l) * (c - l));
						return p[a] = new o(e[a][r], 0, 0, e[a + 1][r]), p
					},
					c = function(e, s, o, a, c, h) {
						var p, d, v, m, g, y, w, E, S = {},
							x = [],
							T = h || e[0];
						c = "string" == typeof c ? "," + c + "," : u, null == s && (s = 1);
						for(d in e[0]) x.push(d);
						if(e.length > 1) {
							for(E = e[e.length - 1], w = !0, p = x.length; --p > -1;)
								if(d = x[p], Math.abs(T[d] - E[d]) > .05) {
									w = !1;
									break
								}
							w && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
						}
						for(t.length = n.length = r.length = 0, p = x.length; --p > -1;) d = x[p], i[d] = -1 !== c.indexOf("," + d + ","), S[d] = l(e, d, i[d], h);
						for(p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
						if(!a) {
							for(p = x.length; --p > -1;)
								if(i[d])
									for(v = S[x[p]], y = v.length - 1, m = 0; y > m; m++) g = v[m + 1].da / n[m] + v[m].da / t[m] || 0, r[m] = (r[m] || 0) + g * g;
							for(p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
						}
						for(p = x.length, m = o ? 4 : 1; --p > -1;) d = x[p], v = S[d], f(v, s, o, a, i[d]), w && (v.splice(0, m), v.splice(v.length - m, m));
						return S
					},
					h = function(e, t, n) {
						t = t || "soft";
						var r, i, s, u, a, f, l, c, h, p, d, v = {},
							m = "cubic" === t ? 3 : 2,
							y = "soft" === t,
							b = [];
						if(y && n && (e = [n].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
						for(h in e[0]) b.push(h);
						for(f = b.length; --f > -1;) {
							for(h = b[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++) r = null == n ? e[l][h] : "string" == typeof(d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), y && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
							for(c = p - m + 1, p = 0, l = 0; c > l; l += m) r = a[l], i = a[l + 1], s = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new o(r, i, s, u) : new o(r, (2 * i + r) / 3, (2 * i + s) / 3, s);
							a.length = p
						}
						return v
					},
					p = function(e, t, n) {
						for(var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;)
							for(h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++) f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
					},
					d = function(e, t) {
						t = t >> 0 || 6;
						var n, r, i, s, o = [],
							u = [],
							a = 0,
							f = 0,
							l = t - 1,
							c = [],
							h = [];
						for(n in e) p(e[n], o, t);
						for(i = o.length, r = 0; i > r; r++) a += Math.sqrt(o[r]), s = r % t, h[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = h, u[s] = f, a = 0, h = []);
						return {
							length: f,
							lengths: u,
							segments: c
						}
					},
					v = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.8",
						API: 2,
						global: !0,
						init: function(e, t, n) {
							this._target = e, t instanceof Array && (t = {
								values: t
							}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
							var r, i, s, o, u, a = t.values || [],
								f = {},
								l = a[0],
								p = t.autoRotate || n.vars.orientToBezier;
							this._autoRotate = p ? p instanceof Array ? p : [
								["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
							] : null;
							for(r in l) this._props.push(r);
							for(s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
							if(this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : h(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
								var v = d(this._beziers, this._timeRes);
								this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if(p = this._autoRotate)
								for(this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
									for(o = 0; 3 > o; o++) r = p[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
									r = p[s][2], this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
								}
							return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
						},
						set: function(t) {
							var n, r, i, s, o, u, a, f, l, c, h = this._segCount,
								p = this._func,
								d = this._target,
								v = t !== this._startRatio;
							if(this._timeRes) {
								if(l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
									for(f = h - 1; f > i && (this._l2 = l[++i]) <= t;);
									this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
								} else if(t < this._l1 && i > 0) {
									for(; i > 0 && (this._l1 = l[--i]) >= t;);
									0 === i && t < this._l1 ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
								}
								if(n = i, t -= this._l1, i = this._si, t > this._s2 && i < c.length - 1) {
									for(f = c.length - 1; f > i && (this._s2 = c[++i]) <= t;);
									this._s1 = c[i - 1], this._si = i
								} else if(t < this._s1 && i > 0) {
									for(; i > 0 && (this._s1 = c[--i]) >= t;);
									0 === i && t < this._s1 ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
								}
								u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
							} else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
							for(r = 1 - u, i = this._props.length; --i > -1;) s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._mod[s] && (a = this._mod[s](a, d)), p[s] ? d[s](a) : d[s] = a;
							if(this._autoRotate) {
								var m, g, y, b, w, E, S, x = this._autoRotate;
								for(i = x.length; --i > -1;) s = x[i][2], E = x[i][3] || 0, S = x[i][4] === !0 ? 1 : e, o = this._beziers[x[i][0]], m = this._beziers[x[i][1]], o && m && (o = o[n], m = m[n], g = o.a + (o.b - o.a) * u, b = o.b + (o.c - o.b) * u, g += (b - g) * u, b += (o.c + (o.d - o.c) * u - b) * u, y = m.a + (m.b - m.a) * u, w = m.b + (m.c - m.b) * u, y += (w - y) * u, w += (m.c + (m.d - m.c) * u - w) * u, a = v ? Math.atan2(w - y, b - g) * S + E : this._initialRotations[i], this._mod[s] && (a = this._mod[s](a, d)), p[s] ? d[s](a) : d[s] = a)
							}
						}
					}),
					m = v.prototype;
				v.bezierThrough = c, v.cubicToQuadratic = a, v._autoCSS = !0, v.quadraticToCubic = function(e, t, n) {
					return new o(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
				}, v._cssRegister = function() {
					var e = s.CSSPlugin;
					if(e) {
						var t = e._internals,
							n = t._parseToProxy,
							r = t._setPluginRatio,
							i = t.CSSPropTween;
						t._registerComplexSpecialProp("bezier", {
							parser: function(e, t, s, o, u, a) {
								t instanceof Array && (t = {
									values: t
								}), a = new v;
								var f, l, c, h = t.values,
									p = h.length - 1,
									d = [],
									m = {};
								if(0 > p) return u;
								for(f = 0; p >= f; f++) c = n(e, h[f], o, u, a, p !== f), d[f] = c.end;
								for(l in t) m[l] = t[l];
								return m.values = d, u = new i(e, "bezier", 0, 0, c.pt, 2), u.data = c, u.plugin = a, u.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (f = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
									["left", "top", "rotation", f, !1]
								] : null != c.end.x ? [
									["x", "y", "rotation", f, !1]
								] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), a._onInitTween(c.proxy, m, o._tween), u
							}
						})
					}
				}, m._mod = function(e) {
					for(var t, n = this._overwriteProps, r = n.length; --r > -1;) t = e[n[r]], t && "function" == typeof t && (this._mod[n[r]] = t)
				}, m._kill = function(e) {
					var t, n, r = this._props;
					for(t in this._beziers)
						if(t in e)
							for(delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
					if(r = this._autoRotate)
						for(n = r.length; --n > -1;) e[r[n][2]] && r.splice(n, 1);
					return this._super._kill.call(this, e)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
				var n, r, i, s, o = function() {
						e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
					},
					u = _gsScope._gsDefine.globals,
					a = {},
					f = o.prototype = new e("css");
				f.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, f = "px", o.suffixMap = {
					top: f,
					right: f,
					bottom: f,
					left: f,
					width: f,
					height: f,
					fontSize: f,
					padding: f,
					margin: f,
					perspective: f,
					lineHeight: ""
				};
				var l, c, h, p, d, v, m, g, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
					b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					E = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					S = /(?:\d|\-|\+|=|#|\.)*/g,
					x = /opacity *= *([^)]*)/i,
					T = /opacity:([^;]*)/i,
					N = /alpha\(opacity *=.+?\)/i,
					C = /^(rgb|hsl)/,
					k = /([A-Z])/g,
					L = /-([a-z])/gi,
					A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					O = function(e, t) {
						return t.toUpperCase()
					},
					M = /(?:Left|Right|Width)/i,
					_ = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					P = /,(?=[^\)]*(?:\(|$))/gi,
					H = /[\s,\(]/i,
					B = Math.PI / 180,
					j = 180 / Math.PI,
					F = {},
					I = {
						style: {}
					},
					q = _gsScope.document || {
						createElement: function() {
							return I
						}
					},
					R = function(e, t) {
						return q.createElementNS ? q.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : q.createElement(e)
					},
					U = R("div"),
					z = R("img"),
					W = o._internals = {
						_specialProps: a
					},
					X = (_gsScope.navigator || {}).userAgent || "",
					V = function() {
						var e = X.indexOf("Android"),
							t = R("a");
						return h = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || parseFloat(X.substr(e + 8, 2)) > 3), d = h && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (v = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
					}(),
					$ = function(e) {
						return x.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					J = function(e) {
						_gsScope.console && console.log(e)
					},
					K = "",
					Q = "",
					G = function(e, t) {
						t = t || U;
						var n, r, i = t.style;
						if(void 0 !== i[e]) return e;
						for(e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
						return r >= 0 ? (Q = 3 === r ? "ms" : n[r], K = "-" + Q.toLowerCase() + "-", Q + e) : null
					},
					Y = q.defaultView ? q.defaultView.getComputedStyle : function() {},
					Z = o.getStyle = function(e, t, n, r, i) {
						var s;
						return V || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || Y(e)) ? s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(k, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : $(e)
					},
					et = W.convertToPixels = function(e, n, r, i, s) {
						if("px" === i || !i && "lineHeight" !== n) return r;
						if("auto" === i || !r) return 0;
						var u, a, f, l = M.test(n),
							c = e,
							h = U.style,
							p = 0 > r,
							d = 1 === r;
						if(p && (r = -r), d && (r *= 100), "lineHeight" !== n || i)
							if("%" === i && -1 !== n.indexOf("border")) u = r / 100 * (l ? e.clientWidth : e.clientHeight);
							else {
								if(h.cssText = "border:0 solid red;position:" + Z(e, "position") + ";line-height:0;", "%" !== i && c.appendChild && "v" !== i.charAt(0) && "rem" !== i) h[l ? "borderLeftWidth" : "borderTopWidth"] = r + i;
								else {
									if(c = e.parentNode || q.body, -1 !== Z(c, "display").indexOf("flex") && (h.position = "absolute"), a = c._gsCache, f = t.ticker.frame, a && l && a.time === f) return a.width * r / 100;
									h[l ? "width" : "height"] = r + i
								}
								c.appendChild(U), u = parseFloat(U[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(U), l && "%" === i && o.cacheWidths !== !1 && (a = c._gsCache = c._gsCache || {}, a.time = f, a.width = u / r * 100), 0 !== u || s || (u = et(e, n, r, i, !0))
							}
						else a = Y(e).lineHeight, e.style.lineHeight = r, u = parseFloat(Y(e).lineHeight), e.style.lineHeight = a;
						return d && (u /= 100), p ? -u : u
					},
					tt = W.calculateOffset = function(e, t, n) {
						if("absolute" !== Z(e, "position", n)) return 0;
						var r = "left" === t ? "Left" : "Top",
							i = Z(e, "margin" + r, n);
						return e["offset" + r] - (et(e, t, parseFloat(i), i.replace(S, "")) || 0)
					},
					nt = function(e, t) {
						var n, r, i, s = {};
						if(t = t || Y(e, null))
							if(n = t.length)
								for(; --n > -1;) i = t[n], (-1 === i.indexOf("-transform") || At === i) && (s[i.replace(L, O)] = t.getPropertyValue(i));
							else
								for(n in t)(-1 === n.indexOf("Transform") || Lt === n) && (s[n] = t[n]);
						else if(t = e.currentStyle || e.style)
							for(n in t) "string" == typeof n && void 0 === s[n] && (s[n.replace(L, O)] = t[n]);
						return V || (s.opacity = $(e)), r = zt(e, t, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, Mt && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
					},
					rt = function(e, t, n, r, i) {
						var s, o, u, a = {},
							f = e.style;
						for(o in n) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = n[o]) || i && i[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (a[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(E, "") ? s : 0 : tt(e, o), void 0 !== f[o] && (u = new yt(f, o, f[o], u)));
						if(r)
							for(o in r) "className" !== o && (a[o] = r[o]);
						return {
							difs: a,
							firstMPT: u
						}
					},
					it = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					ot = function(e, t, n) {
						if("svg" === (e.nodeName + "").toLowerCase()) return(n || Y(e))[t] || 0;
						if(e.getCTM && qt(e)) return e.getBBox()[t] || 0;
						var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
							i = it[t],
							s = i.length;
						for(n = n || Y(e, null); --s > -1;) r -= parseFloat(Z(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat(Z(e, "border" + i[s] + "Width", n, !0)) || 0;
						return r
					},
					ut = function(e, t) {
						if("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
						(null == e || "" === e) && (e = "0 0");
						var n, r = e.split(" "),
							i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0],
							s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
						if(r.length > 3 && !t) {
							for(r = e.split(", ").join(",").split(","), e = [], n = 0; n < r.length; n++) e.push(ut(r[n]));
							return e.join(",")
						}
						return null == s ? s = "center" === i ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + s + (r.length > 2 ? " " + r[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(i.replace(E, "")), t.oy = parseFloat(s.replace(E, "")), t.v = e), t || e
					},
					at = function(e, t) {
						return "function" == typeof e && (e = e(g, m)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
					},
					ft = function(e, t) {
						return "function" == typeof e && (e = e(g, m)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
					},
					lt = function(e, t, n, r) {
						var i, s, o, u, a, f = 1e-6;
						return "function" == typeof e && (e = e(g, m)), null == e ? u = t : "number" == typeof e ? u = e : (i = 360, s = e.split("_"), a = "=" === e.charAt(1), o = (a ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : j) - (a ? 0 : t), s.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= i, o !== o % (i / 2) && (o = 0 > o ? o + i : o - i)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * i) % i - (o / i | 0) * i : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * i) % i - (o / i | 0) * i)), u = t + o), f > u && u > -f && (u = 0), u
					},
					ct = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					ht = function(e, t, n) {
						return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (n - t) * e * 6 : .5 > e ? n : 2 > 3 * e ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
					},
					pt = o.parseColor = function(e, t) {
						var n, r, i, s, o, u, a, f, l, c, h;
						if(e)
							if("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
							else {
								if("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ct[e]) n = ct[e];
								else if("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), i = e.charAt(2), s = e.charAt(3), e = "#" + r + r + i + i + s + s), e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & 255, 255 & e];
								else if("hsl" === e.substr(0, 3))
									if(n = h = e.match(y), t) {
										if(-1 !== e.indexOf("=")) return e.match(b)
									} else o = Number(n[0]) % 360 / 360, u = Number(n[1]) / 100, a = Number(n[2]) / 100, i = .5 >= a ? a * (u + 1) : a + u - a * u, r = 2 * a - i, n.length > 3 && (n[3] = Number(e[3])), n[0] = ht(o + 1 / 3, r, i), n[1] = ht(o, r, i), n[2] = ht(o - 1 / 3, r, i);
								else n = e.match(y) || ct.transparent;
								n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
							}
						else n = ct.black;
						return t && !h && (r = n[0] / 255, i = n[1] / 255, s = n[2] / 255, f = Math.max(r, i, s), l = Math.min(r, i, s), a = (f + l) / 2, f === l ? o = u = 0 : (c = f - l, u = a > .5 ? c / (2 - f - l) : c / (f + l), o = f === r ? (i - s) / c + (s > i ? 6 : 0) : f === i ? (s - r) / c + 2 : (r - i) / c + 4, o *= 60), n[0] = o + .5 | 0, n[1] = 100 * u + .5 | 0, n[2] = 100 * a + .5 | 0), n
					},
					dt = function(e, t) {
						var n, r, i, s = e.match(vt) || [],
							o = 0,
							u = "";
						if(!s.length) return e;
						for(n = 0; n < s.length; n++) r = s[n], i = e.substr(o, e.indexOf(r, o) - o), o += i.length + r.length, r = pt(r, t), 3 === r.length && r.push(1), u += i + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
						return u + e.substr(o)
					},
					vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for(f in ct) vt += "|" + f + "\\b";
				vt = new RegExp(vt + ")", "gi"), o.colorStringFilter = function(e) {
					var t, n = e[0] + " " + e[1];
					vt.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = dt(e[0], t), e[1] = dt(e[1], t)), vt.lastIndex = 0
				}, t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
				var mt = function(e, t, n, r) {
						if(null == e) return function(e) {
							return e
						};
						var i, s = t ? (e.match(vt) || [""])[0] : "",
							o = e.split(s).join("").match(w) || [],
							u = e.substr(0, e.indexOf(o[0])),
							a = ")" === e.charAt(e.length - 1) ? ")" : "",
							f = -1 !== e.indexOf(" ") ? " " : ",",
							l = o.length,
							c = l > 0 ? o[0].replace(y, "") : "";
						return l ? i = t ? function(e) {
							var t, h, p, d;
							if("number" == typeof e) e += c;
							else if(r && P.test(e)) {
								for(d = e.replace(P, "|").split("|"), p = 0; p < d.length; p++) d[p] = i(d[p]);
								return d.join(",")
							}
							if(t = (e.match(vt) || [s])[0], h = e.split(t).join("").match(w) || [], p = h.length, l > p--)
								for(; ++p < l;) h[p] = n ? h[(p - 1) / 2 | 0] : o[p];
							return u + h.join(f) + f + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
						} : function(e) {
							var t, s, h;
							if("number" == typeof e) e += c;
							else if(r && P.test(e)) {
								for(s = e.replace(P, "|").split("|"), h = 0; h < s.length; h++) s[h] = i(s[h]);
								return s.join(",")
							}
							if(t = e.match(w) || [], h = t.length, l > h--)
								for(; ++h < l;) t[h] = n ? t[(h - 1) / 2 | 0] : o[h];
							return u + t.join(f) + a
						} : function(e) {
							return e
						}
					},
					gt = function(e) {
						return e = e.split(","),
							function(t, n, r, i, s, o, u) {
								var a, f = (n + "").split(" ");
								for(u = {}, a = 0; 4 > a; a++) u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
								return i.parse(t, u, s, o)
							}
					},
					yt = (W._setPluginRatio = function(e) {
						this.plugin.setRatio(e);
						for(var t, n, r, i, s, o = this.data, u = o.proxy, a = o.firstMPT, f = 1e-6; a;) t = u[a.v], a.r ? t = Math.round(t) : f > t && t > -f && (t = 0), a.t[a.p] = t, a = a._next;
						if(o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(u.rotation, this.t) : u.rotation), 1 === e || 0 === e)
							for(a = o.firstMPT, s = 1 === e ? "e" : "b"; a;) {
								if(n = a.t, n.type) {
									if(1 === n.type) {
										for(i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
										n[s] = i
									}
								} else n[s] = n.s + n.xs0;
								a = a._next
							}
					}, function(e, t, n, r, i) {
						this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
					}),
					bt = (W._parseToProxy = function(e, t, n, r, i, s) {
						var o, u, a, f, l, c = r,
							h = {},
							p = {},
							d = n._transform,
							v = F;
						for(n._transform = null, F = t, r = l = n.parse(e, t, r, i), F = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
							if(r.type <= 1 && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new yt(r, "s", u, f, r.r), r.c = 0), 1 === r.type))
								for(o = r.l; --o > 0;) a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new yt(r, a, u, f, r.rxp[a]));
							r = r._next
						}
						return {
							proxy: h,
							end: p,
							firstMPT: f,
							pt: l
						}
					}, W.CSSPropTween = function(e, t, r, i, o, u, a, f, l, c, h) {
						this.t = e, this.p = t, this.s = r, this.c = i, this.n = a || t, e instanceof bt || s.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, n = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + i : h, o && (this._next = o, o._prev = this)
					}),
					wt = function(e, t, n, r, i, s) {
						var o = new bt(e, t, n, r - n, i, -1, s);
						return o.b = n, o.e = o.xs0 = r, o
					},
					Et = o.parseComplex = function(e, t, n, r, i, s, u, a, f, c) {
						n = n || s || "", "function" == typeof r && (r = r(g, m)), u = new bt(e, t, 0, 0, u, c ? 2 : 1, null, !1, a, n, r), r += "", i && vt.test(r + n) && (r = [n, r], o.colorStringFilter(r), n = r[0], r = r[1]);
						var h, p, d, v, w, E, S, x, T, N, C, k, L, A = n.split(", ").join(",").split(" "),
							O = r.split(", ").join(",").split(" "),
							M = A.length,
							_ = l !== !1;
						for((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (A = A.join(" ").replace(P, ", ").split(" "), O = O.join(" ").replace(P, ", ").split(" "), M = A.length), M !== O.length && (A = (s || "").split(" "), M = A.length), u.plugin = f, u.setRatio = c, vt.lastIndex = 0, h = 0; M > h; h++)
							if(v = A[h], w = O[h], x = parseFloat(v), x || 0 === x) u.appendXtra("", x, at(w, x), w.replace(b, ""), _ && -1 !== w.indexOf("px"), !0);
							else if(i && vt.test(v)) k = w.indexOf(")") + 1, k = ")" + (k ? w.substr(k) : ""), L = -1 !== w.indexOf("hsl") && V, N = w, v = pt(v, L), w = pt(w, L), T = v.length + w.length > 6, T && !V && 0 === w[3] ? (u["xs" + u.l] += u.l ? " transparent" : "transparent", u.e = u.e.split(O[h]).join("transparent")) : (V || (T = !1), L ? u.appendXtra(N.substr(0, N.indexOf("hsl")) + (T ? "hsla(" : "hsl("), v[0], at(w[0], v[0]), ",", !1, !0).appendXtra("", v[1], at(w[1], v[1]), "%,", !1).appendXtra("", v[2], at(w[2], v[2]), T ? "%," : "%" + k, !1) : u.appendXtra(N.substr(0, N.indexOf("rgb")) + (T ? "rgba(" : "rgb("), v[0], w[0] - v[0], ",", !0, !0).appendXtra("", v[1], w[1] - v[1], ",", !0).appendXtra("", v[2], w[2] - v[2], T ? "," : k, !0), T && (v = v.length < 4 ? 1 : v[3], u.appendXtra("", v, (w.length < 4 ? 1 : w[3]) - v, k, !1))), vt.lastIndex = 0;
						else if(E = v.match(y)) {
							if(S = w.match(b), !S || S.length !== E.length) return u;
							for(d = 0, p = 0; p < E.length; p++) C = E[p], N = v.indexOf(C, d), u.appendXtra(v.substr(d, N - d), Number(C), at(S[p], C), "", _ && "px" === v.substr(N + C.length, 2), 0 === p), d = N + C.length;
							u["xs" + u.l] += v.substr(d)
						} else u["xs" + u.l] += u.l || u["xs" + u.l] ? " " + w : w;
						if(-1 !== r.indexOf("=") && u.data) {
							for(k = u.xs0 + u.data.s, h = 1; h < u.l; h++) k += u["xs" + h] + u.data["xn" + h];
							u.e = k + u["xs" + h]
						}
						return u.l || (u.type = -1, u.xs0 = u.e), u.xfirst || u
					},
					St = 9;
				for(f = bt.prototype, f.l = f.pr = 0; --St > 0;) f["xn" + St] = 0, f["xs" + St] = "";
				f.xs0 = "", f._next = f._prev = f.xfirst = f.data = f.plugin = f.setRatio = f.rxp = null, f.appendXtra = function(e, t, n, r, i, s) {
					var o = this,
						u = o.l;
					return o["xs" + u] += s && (u || o["xs" + u]) ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new bt(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
						s: t + n
					}, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
				};
				var xt = function(e, t) {
						t = t || {}, this.p = t.prefix ? G(e) || e : e, a[e] = a[this.p] = this, this.format = t.formatter || mt(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
					},
					Tt = W._registerComplexSpecialProp = function(e, t, n) {
						"object" != typeof t && (t = {
							parser: n
						});
						var r, i, s = e.split(","),
							o = t.defaultValue;
						for(n = n || [o], r = 0; r < s.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, i = new xt(s[r], t)
					},
					Nt = W._registerPluginProp = function(e) {
						if(!a[e]) {
							var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
							Tt(e, {
								parser: function(e, n, r, i, s, o, f) {
									var l = u.com.greensock.plugins[t];
									return l ? (l._cssRegister(), a[r].parse(e, n, r, i, s, o, f)) : (J("Error: " + t + " js file not loaded."), s)
								}
							})
						}
					};
				f = xt.prototype, f.parseComplex = function(e, t, n, r, i, s) {
					var o, u, a, f, l, c, h = this.keyword;
					if(this.multi && (P.test(n) || P.test(t) ? (u = t.replace(P, "|").split("|"), a = n.replace(P, "|").split("|")) : h && (u = [t], a = [n])), a) {
						for(f = a.length > u.length ? a.length : u.length, o = 0; f > o; o++) t = u[o] = u[o] || this.dflt, n = a[o] = a[o] || this.dflt, h && (l = t.indexOf(h), c = n.indexOf(h), l !== c && (-1 === c ? u[o] = u[o].split(h).join("") : -1 === l && (u[o] += " " + h)));
						t = u.join(", "), n = a.join(", ")
					}
					return Et(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
				}, f.parse = function(e, t, n, r, s, o, u) {
					return this.parseComplex(e.style, this.format(Z(e, this.p, i, !1, this.dflt)), this.format(t), s, o)
				}, o.registerSpecialProp = function(e, t, n) {
					Tt(e, {
						parser: function(e, r, i, s, o, u, a) {
							var f = new bt(e, i, 0, 0, o, 2, i, !1, n);
							return f.plugin = u, f.setRatio = t(e, r, s._tween, i), f
						},
						priority: n
					})
				}, o.useSVGTransformAttr = !0;
				var Ct, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					Lt = G("transform"),
					At = K + "transform",
					Ot = G("transformOrigin"),
					Mt = null !== G("perspective"),
					_t = W.Transform = function() {
						this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Mt ? o.defaultForce3D || "auto" : !1
					},
					Dt = _gsScope.SVGElement,
					Pt = function(e, t, n) {
						var r, i = q.createElementNS("http://www.w3.org/2000/svg", e),
							s = /([a-z])([A-Z])/g;
						for(r in n) i.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), n[r]);
						return t.appendChild(i), i
					},
					Ht = q.documentElement || {},
					Bt = function() {
						var e, t, n, r = v || /Android/i.test(X) && !_gsScope.chrome;
						return q.createElementNS && !r && (e = Pt("svg", Ht), t = Pt("rect", e, {
							width: 100,
							height: 50,
							x: 100
						}), n = t.getBoundingClientRect().width, t.style[Ot] = "50% 50%", t.style[Lt] = "scaleX(0.5)", r = n === t.getBoundingClientRect().width && (!p || !Mt), Ht.removeChild(e)), r
					}(),
					jt = function(e, t, n, r, i, s) {
						var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E = e._gsTransform,
							S = Ut(e, !0);
						E && (b = E.xOrigin, w = E.yOrigin), (!r || (u = r.split(" ")).length < 2) && (p = e.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
							x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
							y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
							width: 0,
							height: 0
						}), t = ut(t).split(" "), u = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), n.xOrigin = l = parseFloat(u[0]), n.yOrigin = c = parseFloat(u[1]), r && S !== Rt && (h = S[0], p = S[1], d = S[2], v = S[3], m = S[4], g = S[5], y = h * v - p * d, y && (a = l * (v / y) + c * (-d / y) + (d * g - v * m) / y, f = l * (-p / y) + c * (h / y) - (h * g - p * m) / y, l = n.xOrigin = u[0] = a, c = n.yOrigin = u[1] = f)), E && (s && (n.xOffset = E.xOffset, n.yOffset = E.yOffset, E = n), i || i !== !1 && o.defaultSmoothOrigin !== !1 ? (a = l - b, f = c - w, E.xOffset += a * S[0] + f * S[2] - a, E.yOffset += a * S[1] + f * S[3] - f) : E.xOffset = E.yOffset = 0), s || e.setAttribute("data-svg-origin", u.join(" "))
					},
					Ft = function(e) {
						var t, n = R("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
							r = this.parentNode,
							i = this.nextSibling,
							s = this.style.cssText;
						if(Ht.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
							t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ft
						} catch(o) {} else this._originalGetBBox && (t = this._originalGetBBox());
						return i ? r.insertBefore(this, i) : r.appendChild(this), Ht.removeChild(n), this.style.cssText = s, t
					},
					It = function(e) {
						try {
							return e.getBBox()
						} catch(t) {
							return Ft.call(e, !0)
						}
					},
					qt = function(e) {
						return !(!(Dt && e.getCTM && It(e)) || e.parentNode && !e.ownerSVGElement)
					},
					Rt = [1, 0, 0, 1, 0, 0],
					Ut = function(e, t) {
						var n, r, i, s, o, u, a = e._gsTransform || new _t,
							f = 1e5,
							l = e.style;
						if(Lt ? r = Z(e, At, null, !0) : e.currentStyle && (r = e.currentStyle.filter.match(_), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !Lt || !(u = "none" === Y(e).display) && e.parentNode || (u && (s = l.display, l.display = "block"), e.parentNode || (o = 1, Ht.appendChild(e)), r = Z(e, At, null, !0), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, s ? l.display = s : u && $t(l, "display"), o && Ht.removeChild(e)), (a.svg || e.getCTM && qt(e)) && (n && -1 !== (l[Lt] + "").indexOf("matrix") && (r = l[Lt], n = 0), i = e.getAttribute("transform"), n && i && (-1 !== i.indexOf("matrix") ? (r = i, n = 0) : -1 !== i.indexOf("translate") && (r = "matrix(1,0,0,1," + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Rt;
						for(i = (r || "").match(y) || [], St = i.length; --St > -1;) s = Number(i[St]), i[St] = (o = s - (s |= 0)) ? (o * f + (0 > o ? -0.5 : .5) | 0) / f + s : s;
						return t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
					},
					zt = W.getTransform = function(e, n, r, i) {
						if(e._gsTransform && r && !i) return e._gsTransform;
						var s, u, a, f, l, c, h = r ? e._gsTransform || new _t : new _t,
							p = h.scaleX < 0,
							d = 2e-5,
							v = 1e5,
							m = Mt ? parseFloat(Z(e, Ot, n, !1, "0 0 0").split(" ")[2]) || h.zOrigin || 0 : 0,
							g = parseFloat(o.defaultTransformPerspective) || 0;
						if(h.svg = !!e.getCTM && !!qt(e), h.svg && (jt(e, Z(e, Ot, n, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), Ct = o.useSVGTransformAttr || Bt), s = Ut(e), s !== Rt) {
							if(16 === s.length) {
								var y, b, w, E, S, x = s[0],
									T = s[1],
									N = s[2],
									C = s[3],
									k = s[4],
									L = s[5],
									A = s[6],
									O = s[7],
									M = s[8],
									_ = s[9],
									D = s[10],
									P = s[12],
									H = s[13],
									B = s[14],
									F = s[11],
									I = Math.atan2(A, D);
								h.zOrigin && (B = -h.zOrigin, P = M * B - s[12], H = _ * B - s[13], B = D * B + h.zOrigin - s[14]), h.rotationX = I * j, I && (E = Math.cos(-I), S = Math.sin(-I), y = k * E + M * S, b = L * E + _ * S, w = A * E + D * S, M = k * -S + M * E, _ = L * -S + _ * E, D = A * -S + D * E, F = O * -S + F * E, k = y, L = b, A = w), I = Math.atan2(-N, D), h.rotationY = I * j, I && (E = Math.cos(-I), S = Math.sin(-I), y = x * E - M * S, b = T * E - _ * S, w = N * E - D * S, _ = T * S + _ * E, D = N * S + D * E, F = C * S + F * E, x = y, T = b, N = w), I = Math.atan2(T, x), h.rotation = I * j, I && (E = Math.cos(I), S = Math.sin(I), y = x * E + T * S, b = k * E + L * S, w = M * E + _ * S, T = T * E - x * S, L = L * E - k * S, _ = _ * E - M * S, x = y, k = b, M = w), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), I = Math.atan2(k, L), h.scaleX = (Math.sqrt(x * x + T * T + N * N) * v + .5 | 0) / v, h.scaleY = (Math.sqrt(L * L + A * A) * v + .5 | 0) / v, h.scaleZ = (Math.sqrt(M * M + _ * _ + D * D) * v + .5 | 0) / v, x /= h.scaleX, k /= h.scaleY, T /= h.scaleX, L /= h.scaleY, Math.abs(I) > d ? (h.skewX = I * j, k = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(I))) : h.skewX = 0, h.perspective = F ? 1 / (0 > F ? -F : F) : 0, h.x = P, h.y = H, h.z = B, h.svg && (h.x -= h.xOrigin - (h.xOrigin * x - h.yOrigin * k), h.y -= h.yOrigin - (h.yOrigin * T - h.xOrigin * L))
							} else if(!Mt || i || !s.length || h.x !== s[4] || h.y !== s[5] || !h.rotationX && !h.rotationY) {
								var q = s.length >= 6,
									R = q ? s[0] : 1,
									U = s[1] || 0,
									z = s[2] || 0,
									W = q ? s[3] : 1;
								h.x = s[4] || 0, h.y = s[5] || 0, a = Math.sqrt(R * R + U * U), f = Math.sqrt(W * W + z * z), l = R || U ? Math.atan2(U, R) * j : h.rotation || 0, c = z || W ? Math.atan2(z, W) * j + l : h.skewX || 0, h.scaleX = a, h.scaleY = f, h.rotation = l, h.skewX = c, Mt && (h.rotationX = h.rotationY = h.z = 0, h.perspective = g, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * R + h.yOrigin * z), h.y -= h.yOrigin - (h.xOrigin * U + h.yOrigin * W))
							}
							Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (p ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = m;
							for(u in h) h[u] < d && h[u] > -d && (h[u] = 0)
						}
						return r && (e._gsTransform = h, h.svg && (Ct && e.style[Lt] ? t.delayedCall(.001, function() {
							$t(e.style, Lt)
						}) : !Ct && e.getAttribute("transform") && t.delayedCall(.001, function() {
							e.removeAttribute("transform")
						}))), h
					},
					Wt = function(e) {
						var t, n, r = this.data,
							i = -r.rotation * B,
							s = i + r.skewX * B,
							o = 1e5,
							u = (Math.cos(i) * r.scaleX * o | 0) / o,
							a = (Math.sin(i) * r.scaleX * o | 0) / o,
							f = (Math.sin(s) * -r.scaleY * o | 0) / o,
							l = (Math.cos(s) * r.scaleY * o | 0) / o,
							c = this.t.style,
							h = this.t.currentStyle;
						if(h) {
							n = a, a = -f, f = -n, t = h.filter, c.filter = "";
							var p, d, m = this.t.offsetWidth,
								g = this.t.offsetHeight,
								y = "absolute" !== h.position,
								b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l,
								w = r.x + m * r.xPercent / 100,
								E = r.y + g * r.yPercent / 100;
							if(null != r.ox && (p = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2, d = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2, w += p - (p * u + d * a), E += d - (p * f + d * l)), y ? (p = m / 2, d = g / 2, b += ", Dx=" + (p - (p * u + d * a) + w) + ", Dy=" + (d - (p * f + d * l) + E) + ")") : b += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(D, b) : c.filter = b + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
								var T, N, C, k = 8 > v ? 1 : -1;
								for(p = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + E), St = 0; 4 > St; St++) N = st[St], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : et(this.t, N, parseFloat(T), T.replace(S, "")) || 0, C = n !== r[N] ? 2 > St ? -r.ieOffsetX : -r.ieOffsetY : 2 > St ? p - r.ieOffsetX : d - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === St || 2 === St ? 1 : k))) + "px"
							}
						}
					},
					Xt = W.set3DTransformRatio = W.setTransformRatio = function(e) {
						var t, n, r, i, s, o, u, a, f, l, c, h, d, v, m, g, y, b, w, E, S, x, T, N = this.data,
							C = this.t.style,
							k = N.rotation,
							L = N.rotationX,
							A = N.rotationY,
							O = N.scaleX,
							M = N.scaleY,
							_ = N.scaleZ,
							D = N.x,
							P = N.y,
							H = N.z,
							j = N.svg,
							F = N.perspective,
							I = N.force3D,
							q = N.skewY,
							R = N.skewX;
						if(q && (R += q, k += q), ((1 === e || 0 === e) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !H && !F && !A && !L && 1 === _ || Ct && j || !Mt) return void(k || R || j ? (k *= B, x = R * B, T = 1e5, n = Math.cos(k) * O, s = Math.sin(k) * O, r = Math.sin(k - x) * -M, o = Math.cos(k - x) * M, x && "simple" === N.skewType && (t = Math.tan(x - q * B), t = Math.sqrt(1 + t * t), r *= t, o *= t, q && (t = Math.tan(q * B), t = Math.sqrt(1 + t * t), n *= t, s *= t)), j && (D += N.xOrigin - (N.xOrigin * n + N.yOrigin * r) + N.xOffset, P += N.yOrigin - (N.xOrigin * s + N.yOrigin * o) + N.yOffset, Ct && (N.xPercent || N.yPercent) && (m = this.t.getBBox(), D += .01 * N.xPercent * m.width, P += .01 * N.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > P && P > -m && (P = 0)), w = (n * T | 0) / T + "," + (s * T | 0) / T + "," + (r * T | 0) / T + "," + (o * T | 0) / T + "," + D + "," + P + ")", j && Ct ? this.t.setAttribute("transform", "matrix(" + w) : C[Lt] = (N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) matrix(" : "matrix(") + w) : C[Lt] = (N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + M + "," + D + "," + P + ")");
						if(p && (m = 1e-4, m > O && O > -m && (O = _ = 2e-5), m > M && M > -m && (M = _ = 2e-5), !F || N.z || N.rotationX || N.rotationY || (F = 0)), k || R) k *= B, g = n = Math.cos(k), y = s = Math.sin(k), R && (k -= R * B, g = Math.cos(k), y = Math.sin(k), "simple" === N.skewType && (t = Math.tan((R - q) * B), t = Math.sqrt(1 + t * t), g *= t, y *= t, N.skewY && (t = Math.tan(q * B), t = Math.sqrt(1 + t * t), n *= t, s *= t))), r = -y, o = g;
						else {
							if(!(A || L || 1 !== _ || F || j)) return void(C[Lt] = (N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + P + "px," + H + "px)" + (1 !== O || 1 !== M ? " scale(" + O + "," + M + ")" : ""));
							n = o = 1, r = s = 0
						}
						l = 1, i = u = a = f = c = h = 0, d = F ? -1 / F : 0, v = N.zOrigin, m = 1e-6, E = ",", S = "0", k = A * B, k && (g = Math.cos(k), y = Math.sin(k), a = -y, c = d * -y, i = n * y, u = s * y, l = g, d *= g, n *= g, s *= g), k = L * B, k && (g = Math.cos(k), y = Math.sin(k), t = r * g + i * y, b = o * g + u * y, f = l * y, h = d * y, i = r * -y + i * g, u = o * -y + u * g, l *= g, d *= g, r = t, o = b), 1 !== _ && (i *= _, u *= _, l *= _, d *= _), 1 !== M && (r *= M, o *= M, f *= M, h *= M), 1 !== O && (n *= O, s *= O, a *= O, c *= O), (v || j) && (v && (D += i * -v, P += u * -v, H += l * -v + v), j && (D += N.xOrigin - (N.xOrigin * n + N.yOrigin * r) + N.xOffset, P += N.yOrigin - (N.xOrigin * s + N.yOrigin * o) + N.yOffset), m > D && D > -m && (D = S), m > P && P > -m && (P = S), m > H && H > -m && (H = 0)), w = N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > n && n > -m ? S : n) + E + (m > s && s > -m ? S : s) + E + (m > a && a > -m ? S : a), w += E + (m > c && c > -m ? S : c) + E + (m > r && r > -m ? S : r) + E + (m > o && o > -m ? S : o), L || A || 1 !== _ ? (w += E + (m > f && f > -m ? S : f) + E + (m > h && h > -m ? S : h) + E + (m > i && i > -m ? S : i), w += E + (m > u && u > -m ? S : u) + E + (m > l && l > -m ? S : l) + E + (m > d && d > -m ? S : d) + E) : w += ",0,0,0,0,1,0,", w += D + E + P + E + H + E + (F ? 1 + -H / F : 1) + ")", C[Lt] = w
					};
				f = _t.prototype, f.x = f.y = f.z = f.skewX = f.skewY = f.rotation = f.rotationX = f.rotationY = f.zOrigin = f.xPercent = f.yPercent = f.xOffset = f.yOffset = 0, f.scaleX = f.scaleY = f.scaleZ = 1, Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
					parser: function(e, t, n, r, s, u, a) {
						if(r._lastParsedTransform === a) return s;
						r._lastParsedTransform = a;
						var f, l = a.scale && "function" == typeof a.scale ? a.scale : 0;
						"function" == typeof a[n] && (f = a[n], a[n] = t), l && (a.scale = l(g, e));
						var c, h, p, d, v, y, b, w, E, S = e._gsTransform,
							x = e.style,
							T = 1e-6,
							N = kt.length,
							C = a,
							k = {},
							L = "transformOrigin",
							A = zt(e, i, !0, C.parseTransform),
							O = C.transform && ("function" == typeof C.transform ? C.transform(g, m) : C.transform);
						if(A.skewType = C.skewType || A.skewType || o.defaultSkewType, r._transform = A, O && "string" == typeof O && Lt) h = U.style, h[Lt] = O, h.display = "block", h.position = "absolute", q.body.appendChild(U), c = zt(U, null, !1), "simple" === A.skewType && (c.scaleY *= Math.cos(c.skewX * B)), A.svg && (y = A.xOrigin, b = A.yOrigin, c.x -= A.xOffset, c.y -= A.yOffset, (C.transformOrigin || C.svgOrigin) && (O = {}, jt(e, ut(C.transformOrigin), O, C.svgOrigin, C.smoothOrigin, !0), y = O.xOrigin, b = O.yOrigin, c.x -= O.xOffset - A.xOffset, c.y -= O.yOffset - A.yOffset), (y || b) && (w = Ut(U, !0), c.x -= y - (y * w[0] + b * w[2]), c.y -= b - (y * w[1] + b * w[3]))), q.body.removeChild(U), c.perspective || (c.perspective = A.perspective), null != C.xPercent && (c.xPercent = ft(C.xPercent, A.xPercent)), null != C.yPercent && (c.yPercent = ft(C.yPercent, A.yPercent));
						else if("object" == typeof C) {
							if(c = {
									scaleX: ft(null != C.scaleX ? C.scaleX : C.scale, A.scaleX),
									scaleY: ft(null != C.scaleY ? C.scaleY : C.scale, A.scaleY),
									scaleZ: ft(C.scaleZ, A.scaleZ),
									x: ft(C.x, A.x),
									y: ft(C.y, A.y),
									z: ft(C.z, A.z),
									xPercent: ft(C.xPercent, A.xPercent),
									yPercent: ft(C.yPercent, A.yPercent),
									perspective: ft(C.transformPerspective, A.perspective)
								}, v = C.directionalRotation, null != v)
								if("object" == typeof v)
									for(h in v) C[h] = v[h];
								else C.rotation = v;
							"string" == typeof C.x && -1 !== C.x.indexOf("%") && (c.x = 0, c.xPercent = ft(C.x, A.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (c.y = 0, c.yPercent = ft(C.y, A.yPercent)), c.rotation = lt("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : A.rotation, A.rotation, "rotation", k), Mt && (c.rotationX = lt("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", k), c.rotationY = lt("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", k)), c.skewX = lt(C.skewX, A.skewX), c.skewY = lt(C.skewY, A.skewY)
						}
						for(Mt && null != C.force3D && (A.force3D = C.force3D, d = !0), p = A.force3D || A.z || A.rotationX || A.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == C.scale || (c.scaleZ = 1); --N > -1;) E = kt[N], O = c[E] - A[E], (O > T || -T > O || null != C[E] || null != F[E]) && (d = !0, s = new bt(A, E, A[E], O, s), E in k && (s.e = k[E]), s.xs0 = 0, s.plugin = u, r._overwriteProps.push(s.n));
						return O = C.transformOrigin, A.svg && (O || C.svgOrigin) && (y = A.xOffset, b = A.yOffset, jt(e, ut(O), c, C.svgOrigin, C.smoothOrigin), s = wt(A, "xOrigin", (S ? A : c).xOrigin, c.xOrigin, s, L), s = wt(A, "yOrigin", (S ? A : c).yOrigin, c.yOrigin, s, L), (y !== A.xOffset || b !== A.yOffset) && (s = wt(A, "xOffset", S ? y : A.xOffset, A.xOffset, s, L), s = wt(A, "yOffset", S ? b : A.yOffset, A.yOffset, s, L)), O = "0px 0px"), (O || Mt && p && A.zOrigin) && (Lt ? (d = !0, E = Ot, O = (O || Z(e, E, i, !1, "50% 50%")) + "", s = new bt(x, E, 0, 0, s, -1, L), s.b = x[E], s.plugin = u, Mt ? (h = A.zOrigin, O = O.split(" "), A.zOrigin = (O.length > 2 && (0 === h || "0px" !== O[2]) ? parseFloat(O[2]) : h) || 0, s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px", s = new bt(A, "zOrigin", 0, 0, s, -1, s.n), s.b = h, s.xs0 = s.e = A.zOrigin) : s.xs0 = s.e = O) : ut(O + "", A)), d && (r._transformType = A.svg && Ct || !p && 3 !== this._transformType ? 2 : 3), f && (a[n] = f), l && (a.scale = l), s
					},
					prefix: !0
				}), Tt("boxShadow", {
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), Tt("borderRadius", {
					defaultValue: "0px",
					parser: function(e, t, n, s, o, u) {
						t = this.format(t);
						var a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							N = e.style;
						for(m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), a = t.split(" "), f = 0; f < T.length; f++) this.p.indexOf("border") && (T[f] = G(T[f])), h = c = Z(e, T[f], i, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), p = l = a[f], d = parseFloat(h), b = h.substr((d + "").length), w = "=" === p.charAt(1), w ? (v = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), v *= parseFloat(p), y = p.substr((v + "").length - (0 > v ? 1 : 0)) || "") : (v = parseFloat(p), y = p.substr((v + "").length)), "" === y && (y = r[n] || b), y !== b && (E = et(e, "borderLeft", d, b), S = et(e, "borderTop", d, b), "%" === y ? (h = E / m * 100 + "%", c = S / g * 100 + "%") : "em" === y ? (x = et(e, "borderLeft", 1, "em"), h = E / x + "em", c = S / x + "em") : (h = E + "px", c = S + "px"), w && (p = parseFloat(h) + v + y, l = parseFloat(c) + v + y)), o = Et(N, T[f], h + " " + c, p + " " + l, !1, "0px", o);
						return o
					},
					prefix: !0,
					formatter: mt("0px 0px 0px 0px", !1, !0)
				}), Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
					defaultValue: "0px",
					parser: function(e, t, n, r, s, o) {
						return Et(e.style, n, this.format(Z(e, n, i, !1, "0px 0px")), this.format(t), !1, "0px", s)
					},
					prefix: !0,
					formatter: mt("0px 0px", !1, !0)
				}), Tt("backgroundPosition", {
					defaultValue: "0 0",
					parser: function(e, t, n, r, s, o) {
						var u, a, f, l, c, h, p = "background-position",
							d = i || Y(e, null),
							m = this.format((d ? v ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
							g = this.format(t);
						if(-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (h = Z(e, "backgroundImage").replace(A, ""), h && "none" !== h)) {
							for(u = m.split(" "), a = g.split(" "), z.setAttribute("src", h), f = 2; --f > -1;) m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - z.width : e.offsetHeight - z.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
							m = u.join(" ")
						}
						return this.parseComplex(e.style, m, g, s, o)
					},
					formatter: ut
				}), Tt("backgroundSize", {
					defaultValue: "0 0",
					formatter: function(e) {
						return e += "", ut(-1 === e.indexOf(" ") ? e + " " + e : e)
					}
				}), Tt("perspective", {
					defaultValue: "0px",
					prefix: !0
				}), Tt("perspectiveOrigin", {
					defaultValue: "50% 50%",
					prefix: !0
				}), Tt("transformStyle", {
					prefix: !0
				}), Tt("backfaceVisibility", {
					prefix: !0
				}), Tt("userSelect", {
					prefix: !0
				}), Tt("margin", {
					parser: gt("marginTop,marginRight,marginBottom,marginLeft")
				}), Tt("padding", {
					parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), Tt("clip", {
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function(e, t, n, r, s, o) {
						var u, a, f;
						return 9 > v ? (a = e.currentStyle, f = 8 > v ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format(Z(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, s, o)
					}
				}), Tt("textShadow", {
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), Tt("autoRound,strictUnits", {
					parser: function(e, t, n, r, i) {
						return i
					}
				}), Tt("border", {
					defaultValue: "0px solid #000",
					parser: function(e, t, n, r, s, o) {
						var u = Z(e, "borderTopWidth", i, !1, "0px"),
							a = this.format(t).split(" "),
							f = a[0].replace(S, "");
						return "px" !== f && (u = parseFloat(u) / et(e, "borderTopWidth", 1, f) + f), this.parseComplex(e.style, this.format(u + " " + Z(e, "borderTopStyle", i, !1, "solid") + " " + Z(e, "borderTopColor", i, !1, "#000")), a.join(" "), s, o)
					},
					color: !0,
					formatter: function(e) {
						var t = e.split(" ");
						return t[0] + " " + (t[1] || "solid") + " " + (e.match(vt) || ["#000"])[0]
					}
				}), Tt("borderWidth", {
					parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), Tt("float,cssFloat,styleFloat", {
					parser: function(e, t, n, r, i, s) {
						var o = e.style,
							u = "cssFloat" in o ? "cssFloat" : "styleFloat";
						return new bt(o, u, 0, 0, i, -1, n, !1, 0, o[u], t)
					}
				});
				var Vt = function(e) {
					var t, n = this.t,
						r = n.filter || Z(this.data, "filter") || "",
						i = this.s + this.c * e | 0;
					100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !Z(this.data, "filter")) : (n.filter = r.replace(N, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(x, "opacity=" + i))
				};
				Tt("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function(e, t, n, r, s, o) {
						var u = parseFloat(Z(e, "opacity", i, !1, "1")),
							a = e.style,
							f = "autoAlpha" === n;
						return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + u), f && 1 === u && "hidden" === Z(e, "visibility", i) && 0 !== t && (u = 0), V ? s = new bt(a, "opacity", u, t - u, s) : (s = new bt(a, "opacity", 100 * u, 100 * (t - u), s), s.xn1 = f ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = Vt), f && (s = new bt(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== u ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(n)), s
					}
				});
				var $t = function(e, t) {
						t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(k, "-$1").toLowerCase())) : e.removeAttribute(t))
					},
					Jt = function(e) {
						if(this.t._gsClassPT = this, 1 === e || 0 === e) {
							this.t.setAttribute("class", 0 === e ? this.b : this.e);
							for(var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : $t(n, t.p), t = t._next;
							1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				Tt("className", {
					parser: function(e, t, r, s, o, u, a) {
						var f, l, c, h, p, d = e.getAttribute("class") || "",
							v = e.style.cssText;
						if(o = s._classNamePT = new bt(e, r, 0, 0, o, 2), o.setRatio = Jt, o.pr = -11, n = !0, o.b = d, l = nt(e, i), c = e._gsClassPT) {
							for(h = {}, p = c.data; p;) h[p.p] = 1, p = p._next;
							c.setRatio(1)
						}
						return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), f = rt(e, l, nt(e), a, h), e.setAttribute("class", d), o.data = f.firstMPT, e.style.cssText = v, o = o.xfirst = s.parse(e, f.difs, o, u)
					}
				});
				var Kt = function(e) {
					if((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var t, n, r, i, s, o = this.t.style,
							u = a.transform.parse;
						if("all" === this.e) o.cssText = "", i = !0;
						else
							for(t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) n = t[r], a[n] && (a[n].parse === u ? i = !0 : n = "transformOrigin" === n ? Ot : a[n].p), $t(o, n);
						i && ($t(o, Lt), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for(Tt("clearProps", {
						parser: function(e, t, r, i, s) {
							return s = new bt(e, r, 0, 0, s, 2), s.setRatio = Kt, s.e = t, s.pr = -10, s.data = i._tween, n = !0, s
						}
					}), f = "bezier,throwProps,physicsProps,physics2D".split(","), St = f.length; St--;) Nt(f[St]);
				f = o.prototype, f._firstPT = f._lastParsedTransform = f._transform = null, f._onInitTween = function(e, t, u, f) {
					if(!e.nodeType) return !1;
					this._target = m = e, this._tween = u, this._vars = t, g = f, l = t.autoRound, n = !1, r = t.suffixMap || o.suffixMap, i = Y(e, ""), s = this._overwriteProps;
					var p, v, y, b, w, E, S, x, N, C = e.style;
					if(c && "" === C.zIndex && (p = Z(e, "zIndex", i), ("auto" === p || "" === p) && this._addLazySet(C, "zIndex", 0)), "string" == typeof t && (b = C.cssText, p = nt(e, i), C.cssText = b + ";" + t, p = rt(e, p, nt(e)).difs, !V && T.test(t) && (p.opacity = parseFloat(RegExp.$1)), t = p, C.cssText = b), t.className ? this._firstPT = v = a.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = v = this.parse(e, t, null), this._transformType) {
						for(N = 3 === this._transformType, Lt ? h && (c = !0, "" === C.zIndex && (S = Z(e, "zIndex", i), ("auto" === S || "" === S) && this._addLazySet(C, "zIndex", 0)), d && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (N ? "visible" : "hidden"))) : C.zoom = 1, y = v; y && y._next;) y = y._next;
						x = new bt(e, "transform", 0, 0, null, 2), this._linkCSSP(x, null, y), x.setRatio = Lt ? Xt : Wt, x.data = this._transform || zt(e, i, !0), x.tween = u, x.pr = -1, s.pop()
					}
					if(n) {
						for(; v;) {
							for(E = v._next, y = b; y && y.pr > v.pr;) y = y._next;
							(v._prev = y ? y._prev : w) ? v._prev._next = v: b = v, (v._next = y) ? y._prev = v : w = v, v = E
						}
						this._firstPT = b
					}
					return !0
				}, f.parse = function(e, t, n, s) {
					var o, u, f, c, h, p, d, v, y, b, w = e.style;
					for(o in t) {
						if(p = t[o], "function" == typeof p && (p = p(g, m)), u = a[o]) n = u.parse(e, p, o, this, n, s, t);
						else {
							if("--" === o.substr(0, 2)) {
								this._tween._propLookup[o] = this._addTween.call(this._tween, e.style, "setProperty", Y(e).getPropertyValue(o) + "", p + "", o, !1, o);
								continue
							}
							h = Z(e, o, i) + "", y = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && C.test(p) ? (y || (p = pt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = Et(w, o, h, p, !0, "transparent", n, 0, s)) : y && H.test(p) ? n = Et(w, o, h, p, !0, null, n, 0, s) : (f = parseFloat(h), d = f || 0 === f ? h.substr((f + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (f = ot(e, o, i), d = "px") : "left" === o || "top" === o ? (f = tt(e, o, i), d = "px") : (f = "opacity" !== o ? 0 : 1, d = "")), b = y && "=" === p.charAt(1), b ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(S, "")) : (c = parseFloat(p), v = y ? p.replace(S, "") : ""), "" === v && (v = o in r ? r[o] : d), p = c || 0 === c ? (b ? c + f : c) + v : t[o], d !== v && ("" !== v || "lineHeight" === o) && (c || 0 === c) && f && (f = et(e, o, f, d), "%" === v ? (f /= et(e, o, 100, "%") / 100, t.strictUnits !== !0 && (h = f + "%")) : "em" === v || "rem" === v || "vw" === v || "vh" === v ? f /= et(e, o, 1, v) : "px" !== v && (c = et(e, o, c, v), v = "px"), b && (c || 0 === c) && (p = c + f + v)), b && (c += f), !f && 0 !== f || !c && 0 !== c ? void 0 !== w[o] && (p || p + "" != "NaN" && null != p) ? (n = new bt(w, o, c || f || 0, 0, n, -1, o, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : J("invalid " + o + " tween value: " + t[o]) : (n = new bt(w, o, f, c - f, n, 0, o, l !== !1 && ("px" === v || "zIndex" === o), 0, h, p), n.xs0 = v))
						}
						s && n && !n.plugin && (n.plugin = s)
					}
					return n
				}, f.setRatio = function(e) {
					var t, n, r, i = this._firstPT,
						s = 1e-6;
					if(1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if(e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001)
							for(; i;) {
								if(t = i.c * e + i.s, i.r ? t = Math.round(t) : s > t && t > -s && (t = 0), i.type)
									if(1 === i.type)
										if(r = i.l, 2 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
										else if(3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
								else if(4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
								else if(5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
								else {
									for(n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
									i.t[i.p] = n
								} else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
								else i.t[i.p] = t + i.xs0;
								i = i._next
							} else
								for(; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
						else
							for(; i;) {
								if(2 !== i.type)
									if(i.r && -1 !== i.type)
										if(t = Math.round(i.s + i.c), i.type) {
											if(1 === i.type) {
												for(r = i.l, n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
												i.t[i.p] = n
											}
										} else i.t[i.p] = t + i.xs0;
								else i.t[i.p] = i.e;
								else i.setRatio(e);
								i = i._next
							}
				}, f._enableTransforms = function(e) {
					this._transform = this._transform || zt(this._target, i, !0), this._transformType = this._transform.svg && Ct || !e && 3 !== this._transformType ? 2 : 3
				};
				var Qt = function(e) {
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				f._addLazySet = function(e, t, n) {
					var r = this._firstPT = new bt(e, t, 0, 0, this._firstPT, 2);
					r.e = n, r.setRatio = Qt, r.data = this
				}, f._linkCSSP = function(e, t, n, r) {
					return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
				}, f._mod = function(e) {
					for(var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
				}, f._kill = function(t) {
					var n, r, i, s = t;
					if(t.autoAlpha || t.alpha) {
						s = {};
						for(r in t) s[r] = t[r];
						s.opacity = 1, s.autoAlpha && (s.visibility = 1)
					}
					for(t.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== r && n.plugin._kill && (n.plugin._kill(t), r = n.plugin), n = n._next;
					return e.prototype._kill.call(this, s)
				};
				var Gt = function(e, t, n) {
					var r, i, s, o;
					if(e.slice)
						for(i = e.length; --i > -1;) Gt(e[i], t, n);
					else
						for(r = e.childNodes, i = r.length; --i > -1;) s = r[i], o = s.type, s.style && (t.push(nt(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Gt(s, t, n)
				};
				return o.cascadeTo = function(e, n, r) {
					var i, s, o, u, a = t.to(e, n, r),
						f = [a],
						l = [],
						c = [],
						h = [],
						p = t._internals.reservedProps;
					for(e = a._targets || a.target, Gt(e, l, h), a.render(n, !0, !0), Gt(e, c), a.render(0, !0, !0), a._enabled(!0), i = h.length; --i > -1;)
						if(s = rt(h[i], l[i], c[i]), s.firstMPT) {
							s = s.difs;
							for(o in r) p[o] && (s[o] = r[o]);
							u = {};
							for(o in s) u[o] = l[i][o];
							f.push(t.fromTo(h[i], n, u, s))
						}
					return f
				}, e.activate([o]), o
			}, !0),
			function() {
				var e = _gsScope._gsDefine.plugin({
						propName: "roundProps",
						version: "1.6.0",
						priority: -1,
						API: 2,
						init: function(e, t, n) {
							return this._tween = n, !0
						}
					}),
					t = function(e) {
						for(; e;) e.f || e.blob || (e.m = Math.round), e = e._next
					},
					n = e.prototype;
				n._onInitAllProps = function() {
					for(var e, n, r, i = this._tween, s = i.vars.roundProps.join ? i.vars.roundProps : i.vars.roundProps.split(","), o = s.length, u = {}, a = i._propLookup.roundProps; --o > -1;) u[s[o]] = Math.round;
					for(o = s.length; --o > -1;)
						for(e = s[o], n = i._firstPT; n;) r = n._next, n.pg ? n.t._mod(u) : n.n === e && (2 === n.f && n.t ? t(n.t._firstPT) : (this._add(n.t, e, n.s, n.c), r && (r._prev = n._prev), n._prev ? n._prev._next = r : i._firstPT === n && (i._firstPT = r), n._next = n._prev = null, i._propLookup[e] = a)), n = r;
					return !1
				}, n._add = function(e, t, n, r) {
					this._addTween(e, t, n, n + r, t, Math.round), this._overwriteProps.push(t)
				}
			}(),
			function() {
				_gsScope._gsDefine.plugin({
					propName: "attr",
					API: 2,
					version: "0.6.1",
					init: function(e, t, n, r) {
						var i, s;
						if("function" != typeof e.setAttribute) return !1;
						for(i in t) s = t[i], "function" == typeof s && (s = s(r, e)), this._addTween(e, "setAttribute", e.getAttribute(i) + "", s + "", i, !1, i), this._overwriteProps.push(i);
						return !0
					}
				})
			}(), _gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.3.1",
				API: 2,
				init: function(e, t, n, r) {
					"object" != typeof t && (t = {
						rotation: t
					}), this.finals = {};
					var i, s, o, u, a, f, l = t.useRadians === !0 ? 2 * Math.PI : 360,
						c = 1e-6;
					for(i in t) "useRadians" !== i && (u = t[i], "function" == typeof u && (u = u(r, e)), f = (u + "").split("_"), s = f[0], o = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), u = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = u - o, f.length && (s = f.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (a / l | 0) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (a / l | 0) * l)), (a > c || -c > a) && (this._addTween(e, i, o, o + a, i), this._overwriteProps.push(i)));
					return !0
				},
				set: function(e) {
					var t;
					if(1 !== e) this._super.setRatio.call(this, e);
					else
						for(t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
				}
			})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
				var t, n, r, i = _gsScope.GreenSockGlobals || _gsScope,
					s = i.com.greensock,
					o = 2 * Math.PI,
					u = Math.PI / 2,
					a = s._class,
					f = function(t, n) {
						var r = a("easing." + t, function() {}, !0),
							i = r.prototype = new e;
						return i.constructor = r, i.getRatio = n, r
					},
					l = e.register || function() {},
					c = function(e, t, n, r, i) {
						var s = a("easing." + e, {
							easeOut: new t,
							easeIn: new n,
							easeInOut: new r
						}, !0);
						return l(s, e), s
					},
					h = function(e, t, n) {
						this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
					},
					p = function(t, n) {
						var r = a("easing." + t, function(e) {
								this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							i = r.prototype = new e;
						return i.constructor = r, i.getRatio = n, i.config = function(e) {
							return new r(e)
						}, r
					},
					d = c("Back", p("BackOut", function(e) {
						return(e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
					}), p("BackIn", function(e) {
						return e * e * ((this._p1 + 1) * e - this._p1)
					}), p("BackInOut", function(e) {
						return(e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
					})),
					v = a("easing.SlowMo", function(e, t, n) {
						t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
					}, !0),
					m = v.prototype = new e;
				return m.constructor = v, m.getRatio = function(e) {
					var t = e + (.5 - e) * this._p;
					return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
				}, v.ease = new v(.7, .7), m.config = v.config = function(e, t, n) {
					return new v(e, t, n)
				}, t = a("easing.SteppedEase", function(e, t) {
					e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
				}, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
					return 0 > e ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
				}, m.config = t.config = function(e, n) {
					return new t(e, n)
				}, n = a("easing.RoughEase", function(t) {
					t = t || {};
					for(var n, r, i, s, o, u, a = t.taper || "none", f = [], l = 0, c = 0 | (t.points || 20), p = c, d = t.randomize !== !1, v = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = d ? Math.random() : 1 / c * p, r = m ? m.getRatio(n) : n, "none" === a ? i = g : "out" === a ? (s = 1 - n, i = s * s * g) : "in" === a ? i = n * n * g : .5 > n ? (s = 2 * n, i = s * s * .5 * g) : (s = 2 * (1 - n), i = s * s * .5 * g), d ? r += Math.random() * i - .5 * i : p % 2 ? r += .5 * i : r -= .5 * i, v && (r > 1 ? r = 1 : 0 > r && (r = 0)), f[l++] = {
						x: n,
						y: r
					};
					for(f.sort(function(e, t) {
							return e.x - t.x
						}), u = new h(1, 1, null), p = c; --p > -1;) o = f[p], u = new h(o.x, o.y, u);
					this._prev = new h(0, 0, 0 !== u.t ? u : u.next)
				}, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function(e) {
					var t = this._prev;
					if(e > t.t) {
						for(; t.next && e >= t.t;) t = t.next;
						t = t.prev
					} else
						for(; t.prev && e <= t.t;) t = t.prev;
					return this._prev = t, t.v + (e - t.t) / t.gap * t.c
				}, m.config = function(e) {
					return new n(e)
				}, n.ease = new n, c("Bounce", f("BounceOut", function(e) {
					return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
				}), f("BounceIn", function(e) {
					return(e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
				}), f("BounceInOut", function(e) {
					var t = .5 > e;
					return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
				})), c("Circ", f("CircOut", function(e) {
					return Math.sqrt(1 - (e -= 1) * e)
				}), f("CircIn", function(e) {
					return -(Math.sqrt(1 - e * e) - 1)
				}), f("CircInOut", function(e) {
					return(e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
				})), r = function(t, n, r) {
					var i = a("easing." + t, function(e, t) {
							this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
						}, !0),
						s = i.prototype = new e;
					return s.constructor = i, s.getRatio = n, s.config = function(e, t) {
						return new i(e, t)
					}, i
				}, c("Elastic", r("ElasticOut", function(e) {
					return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
				}, .3), r("ElasticIn", function(e) {
					return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
				}, .3), r("ElasticInOut", function(e) {
					return(e *= 2) < 1 ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
				}, .45)), c("Expo", f("ExpoOut", function(e) {
					return 1 - Math.pow(2, -10 * e)
				}), f("ExpoIn", function(e) {
					return Math.pow(2, 10 * (e - 1)) - .001
				}), f("ExpoInOut", function(e) {
					return(e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
				})), c("Sine", f("SineOut", function(e) {
					return Math.sin(e * u)
				}), f("SineIn", function(e) {
					return -Math.cos(e * u) + 1
				}), f("SineInOut", function(e) {
					return -0.5 * (Math.cos(Math.PI * e) - 1)
				})), a("easing.EaseLookup", {
					find: function(t) {
						return e.map[t]
					}
				}, !0), l(i.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(e, t) {
		"use strict";
		var n = {},
			r = e.document,
			i = e.GreenSockGlobals = e.GreenSockGlobals || e;
		if(!i.TweenLite) {
			var s, o, u, a, f, l = function(e) {
					var t, n = e.split("."),
						r = i;
					for(t = 0; t < n.length; t++) r[n[t]] = r = r[n[t]] || {};
					return r
				},
				c = l("com.greensock"),
				h = 1e-10,
				p = function(e) {
					var t, n = [],
						r = e.length;
					for(t = 0; t !== r; n.push(e[t++]));
					return n
				},
				d = function() {},
				v = function() {
					var e = Object.prototype.toString,
						t = e.call([]);
					return function(n) {
						return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
					}
				}(),
				m = {},
				g = function(r, s, o, u) {
					this.sc = m[r] ? m[r].sc : [], m[r] = this, this.gsClass = null, this.func = o;
					var a = [];
					this.check = function(f) {
						for(var c, h, p, d, v = s.length, y = v; --v > -1;)(c = m[s[v]] || new g(s[v], [])).gsClass ? (a[v] = c.gsClass, y--) : f && c.sc.push(this);
						if(0 === y && o) {
							if(h = ("com.greensock." + r).split("."), p = h.pop(), d = l(h.join("."))[p] = this.gsClass = o.apply(o, a), u)
								if(i[p] = n[p] = d, "undefined" != typeof module && module.exports)
									if(r === t) {
										module.exports = n[t] = d;
										for(v in n) d[v] = n[v]
									} else n[t] && (n[t][p] = d);
							else "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
								return d
							});
							for(v = 0; v < this.sc.length; v++) this.sc[v].check()
						}
					}, this.check(!0)
				},
				y = e._gsDefine = function(e, t, n, r) {
					return new g(e, t, n, r)
				},
				b = c._class = function(e, t, n) {
					return t = t || function() {}, y(e, [], function() {
						return t
					}, n), t
				};
			y.globals = i;
			var w = [0, 0, 1, 1],
				E = b("easing.Ease", function(e, t, n, r) {
					this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? w.concat(t) : w
				}, !0),
				S = E.map = {},
				x = E.register = function(e, t, n, r) {
					for(var i, s, o, u, a = t.split(","), f = a.length, l = (n || "easeIn,easeOut,easeInOut").split(","); --f > -1;)
						for(s = a[f], i = r ? b("easing." + s, null, !0) : c.easing[s] || {}, o = l.length; --o > -1;) u = l[o], S[s + "." + u] = S[u + s] = i[u] = e.getRatio ? e : e[u] || new e
				};
			for(u = E.prototype, u._calcEnd = !1, u.getRatio = function(e) {
					if(this._func) return this._params[0] = e, this._func.apply(null, this._params);
					var t = this._type,
						n = this._power,
						r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
					return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
				}, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = s.length; --o > -1;) u = s[o] + ",Power" + o, x(new E(null, null, 1, o), u, "easeOut", !0), x(new E(null, null, 2, o), u, "easeIn" + (0 === o ? ",easeNone" : "")), x(new E(null, null, 3, o), u, "easeInOut");
			S.linear = c.easing.Linear.easeIn, S.swing = c.easing.Quad.easeInOut;
			var T = b("events.EventDispatcher", function(e) {
				this._listeners = {}, this._eventTarget = e || this
			});
			u = T.prototype, u.addEventListener = function(e, t, n, r, i) {
				i = i || 0;
				var s, o, u = this._listeners[e],
					l = 0;
				for(this !== a || f || a.wake(), null == u && (this._listeners[e] = u = []), o = u.length; --o > -1;) s = u[o], s.c === t && s.s === n ? u.splice(o, 1) : 0 === l && s.pr < i && (l = o + 1);
				u.splice(l, 0, {
					c: t,
					s: n,
					up: r,
					pr: i
				})
			}, u.removeEventListener = function(e, t) {
				var n, r = this._listeners[e];
				if(r)
					for(n = r.length; --n > -1;)
						if(r[n].c === t) return void r.splice(n, 1)
			}, u.dispatchEvent = function(e) {
				var t, n, r, i = this._listeners[e];
				if(i)
					for(t = i.length, t > 1 && (i = i.slice(0)), n = this._eventTarget; --t > -1;) r = i[t], r && (r.up ? r.c.call(r.s || n, {
						type: e,
						target: n
					}) : r.c.call(r.s || n))
			};
			var N = e.requestAnimationFrame,
				C = e.cancelAnimationFrame,
				k = Date.now || function() {
					return(new Date).getTime()
				},
				L = k();
			for(s = ["ms", "moz", "webkit", "o"], o = s.length; --o > -1 && !N;) N = e[s[o] + "RequestAnimationFrame"], C = e[s[o] + "CancelAnimationFrame"] || e[s[o] + "CancelRequestAnimationFrame"];
			b("Ticker", function(e, t) {
				var n, i, s, o, u, l = this,
					c = k(),
					p = t !== !1 && N ? "auto" : !1,
					v = 500,
					m = 33,
					g = "tick",
					y = function(e) {
						var t, r, a = k() - L;
						a > v && (c += a - m), L += a, l.time = (L - c) / 1e3, t = l.time - u, (!n || t > 0 || e === !0) && (l.frame++, u += t + (t >= o ? .004 : o - t), r = !0), e !== !0 && (s = i(y)), r && l.dispatchEvent(g)
					};
				T.call(l), l.time = l.frame = 0, l.tick = function() {
					y(!0)
				}, l.lagSmoothing = function(e, t) {
					v = e || 1 / h, m = Math.min(t, v, 0)
				}, l.sleep = function() {
					null != s && (p && C ? C(s) : clearTimeout(s), i = d, s = null, l === a && (f = !1))
				}, l.wake = function(e) {
					null !== s ? l.sleep() : e ? c += -L + (L = k()) : l.frame > 10 && (L = k() - v + 5), i = 0 === n ? d : p && N ? N : function(e) {
						return setTimeout(e, 1e3 * (u - l.time) + 1 | 0)
					}, l === a && (f = !0), y(2)
				}, l.fps = function(e) {
					return arguments.length ? (n = e, o = 1 / (n || 60), u = this.time + o, void l.wake()) : n
				}, l.useRAF = function(e) {
					return arguments.length ? (l.sleep(), p = e, void l.fps(n)) : p
				}, l.fps(e), setTimeout(function() {
					"auto" === p && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(!1)
				}, 1500)
			}), u = c.Ticker.prototype = new c.events.EventDispatcher, u.constructor = c.Ticker;
			var A = b("core.Animation", function(e, t) {
				if(this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, K) {
					f || a.wake();
					var n = this.vars.useFrames ? J : K;
					n.add(this, n._time), this.vars.paused && this.paused(!0)
				}
			});
			a = A.ticker = new c.Ticker, u = A.prototype, u._dirty = u._gc = u._initted = u._paused = !1, u._totalTime = u._time = 0, u._rawPrevTime = -1, u._next = u._last = u._onUpdate = u._timeline = u.timeline = null, u._paused = !1;
			var O = function() {
				f && k() - L > 2e3 && "hidden" !== r.visibilityState && a.wake();
				var e = setTimeout(O, 2e3);
				e.unref && e.unref()
			};
			O(), u.play = function(e, t) {
				return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
			}, u.pause = function(e, t) {
				return null != e && this.seek(e, t), this.paused(!0)
			}, u.resume = function(e, t) {
				return null != e && this.seek(e, t), this.paused(!1)
			}, u.seek = function(e, t) {
				return this.totalTime(Number(e), t !== !1)
			}, u.restart = function(e, t) {
				return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
			}, u.reverse = function(e, t) {
				return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
			}, u.render = function(e, t, n) {}, u.invalidate = function() {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, u.isActive = function() {
				var e, t = this._timeline,
					n = this._startTime;
				return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - 1e-7
			}, u._enabled = function(e, t) {
				return f || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
			}, u._kill = function(e, t) {
				return this._enabled(!1, !1)
			}, u.kill = function(e, t) {
				return this._kill(e, t), this
			}, u._uncache = function(e) {
				for(var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
				return this
			}, u._swapSelfInParams = function(e) {
				for(var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
				return n
			}, u._callback = function(e) {
				var t = this.vars,
					n = t[e],
					r = t[e + "Params"],
					i = t[e + "Scope"] || t.callbackScope || this,
					s = r ? r.length : 0;
				switch(s) {
					case 0:
						n.call(i);
						break;
					case 1:
						n.call(i, r[0]);
						break;
					case 2:
						n.call(i, r[0], r[1]);
						break;
					default:
						n.apply(i, r)
				}
			}, u.eventCallback = function(e, t, n, r) {
				if("on" === (e || "").substr(0, 2)) {
					var i = this.vars;
					if(1 === arguments.length) return i[e];
					null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = v(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
				}
				return this
			}, u.delay = function(e) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
			}, u.duration = function(e) {
				return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, u.totalDuration = function(e) {
				return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
			}, u.time = function(e, t) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
			}, u.totalTime = function(e, t, n) {
				if(f || a.wake(), !arguments.length) return this._totalTime;
				if(this._timeline) {
					if(0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var r = this._totalDuration,
							i = this._timeline;
						if(e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
							for(; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (H.length && G(), this.render(e, t, !1), H.length && G())
				}
				return this
			}, u.progress = u.totalProgress = function(e, t) {
				var n = this.duration();
				return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
			}, u.startTime = function(e) {
				return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
			}, u.endTime = function(e) {
				return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
			}, u.timeScale = function(e) {
				if(!arguments.length) return this._timeScale;
				if(e = e || h, this._timeline && this._timeline.smoothChildTiming) {
					var t = this._pauseTime,
						n = t || 0 === t ? t : this._timeline.totalTime();
					this._startTime = n - (n - this._startTime) * this._timeScale / e
				}
				return this._timeScale = e, this._uncache(!1)
			}, u.reversed = function(e) {
				return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, u.paused = function(e) {
				if(!arguments.length) return this._paused;
				var t, n, r = this._timeline;
				return e != this._paused && r && (f || e || a.wake(), t = r.rawTime(), n = t - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
			};
			var M = b("core.SimpleTimeline", function(e) {
				A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			u = M.prototype = new A, u.constructor = M, u.kill()._gc = !1, u._first = u._last = u._recent = null, u._sortChildren = !1, u.add = u.insert = function(e, t, n, r) {
				var i, s;
				if(e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
					for(s = e._startTime; i && i._startTime > s;) i = i._prev;
				return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
			}, u._remove = function(e, t) {
				return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, u.render = function(e, t, n) {
				var r, i = this._first;
				for(this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
			}, u.rawTime = function() {
				return f || a.wake(), this._totalTime
			};
			var _ = b("TweenLite", function(t, n, r) {
					if(A.call(this, n, r), this.render = _.prototype.render, null == t) throw "Cannot tween a null target.";
					this.target = t = "string" != typeof t ? t : _.selector(t) || t;
					var i, s, o, u = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
						a = this.vars.overwrite;
					if(this._overwrite = a = null == a ? $[_.defaultOverwrite] : "number" == typeof a ? a >> 0 : $[a], (u || t instanceof Array || t.push && v(t)) && "number" != typeof t[0])
						for(this._targets = o = p(t), this._propLookup = [], this._siblings = [], i = 0; i < o.length; i++) s = o[i], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[i] = Y(s, this, !1), 1 === a && this._siblings[i].length > 1 && et(s, this, null, 1, this._siblings[i])) : (s = o[i--] = _.selector(s), "string" == typeof s && o.splice(i + 1, 1)) : o.splice(i--, 1);
					else this._propLookup = {}, this._siblings = Y(t, this, !1), 1 === a && this._siblings.length > 1 && et(t, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
				}, !0),
				D = function(t) {
					return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
				},
				P = function(e, t) {
					var n, r = {};
					for(n in e) V[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!z[n] || z[n] && z[n]._autoCSS) || (r[n] = e[n], delete e[n]);
					e.css = r
				};
			u = _.prototype = new A, u.constructor = _, u.kill()._gc = !1, u.ratio = 0, u._firstPT = u._targets = u._overwrittenProps = u._startAt = null, u._notifyPluginsOfEnabled = u._lazy = !1, _.version = "1.20.2", _.defaultEase = u._ease = new E(null, null, 1, 1), _.defaultOverwrite = "auto", _.ticker = a, _.autoSleep = 120, _.lagSmoothing = function(e, t) {
				a.lagSmoothing(e, t)
			}, _.selector = e.$ || e.jQuery || function(t) {
				var n = e.$ || e.jQuery;
				return n ? (_.selector = n, n(t)) : "undefined" == typeof r ? t : r.querySelectorAll ? r.querySelectorAll(t) : r.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
			};
			var H = [],
				B = {},
				j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				F = /[\+-]=-?[\.\d]/,
				I = function(e) {
					for(var t, n = this._firstPT, r = 1e-6; n;) t = n.blob ? 1 === e && this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m(t, this._target || n.t) : r > t && t > -r && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
				},
				q = function(e, t, n, r) {
					var i, s, o, u, a, f, l, c = [],
						h = 0,
						p = "",
						d = 0;
					for(c.start = e, c.end = t, e = c[0] = e + "", t = c[1] = t + "", n && (n(c), e = c[0], t = c[1]), c.length = 0, i = e.match(j) || [], s = t.match(j) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), a = s.length, u = 0; a > u; u++) l = s[u], f = t.substr(h, t.indexOf(l, h) - h), p += f || !u ? f : ",", h += f.length, d ? d = (d + 1) % 5 : "rgba(" === f.substr(-5) && (d = 1), l === i[u] || i.length <= u ? p += l : (p && (c.push(p), p = ""), o = parseFloat(i[u]), c.push(o), c._firstPT = {
						_next: c._firstPT,
						t: c,
						p: c.length - 1,
						s: o,
						c: ("=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2)) : parseFloat(l) - o) || 0,
						f: 0,
						m: d && 4 > d ? Math.round : 0
					}), h += l.length;
					return p += t.substr(h), p && c.push(p), c.setRatio = I, F.test(t) && (c.end = 0), c
				},
				R = function(e, t, n, r, i, s, o, u, a) {
					"function" == typeof r && (r = r(a || 0, e));
					var f, l = typeof e[t],
						c = "function" !== l ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
						h = "get" !== n ? n : c ? o ? e[c](o) : e[c]() : e[t],
						p = "string" == typeof r && "=" === r.charAt(1),
						d = {
							t: e,
							p: t,
							s: h,
							f: "function" === l,
							pg: 0,
							n: i || t,
							m: s ? "function" == typeof s ? s : Math.round : 0,
							pr: 0,
							c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0
						};
					return("number" != typeof h || "number" != typeof r && !p) && (o || isNaN(h) || !p && isNaN(r) || "boolean" == typeof h || "boolean" == typeof r ? (d.fp = o, f = q(h, p ? parseFloat(d.s) + d.c : r, u || _.defaultStringFilter, d), d = {
						t: f,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: i || t,
						pr: 0,
						m: 0
					}) : (d.s = parseFloat(h), p || (d.c = parseFloat(r) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
				},
				U = _._internals = {
					isArray: v,
					isSelector: D,
					lazyTweens: H,
					blobDif: q
				},
				z = _._plugins = {},
				W = U.tweenLookup = {},
				X = 0,
				V = U.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1,
					yoyoEase: 1
				},
				$ = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				J = A._rootFramesTimeline = new M,
				K = A._rootTimeline = new M,
				Q = 30,
				G = U.lazyRender = function() {
					var e, t = H.length;
					for(B = {}; --t > -1;) e = H[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
					H.length = 0
				};
			K._startTime = a.time, J._startTime = a.frame, K._active = J._active = !0, setTimeout(G, 1), A._updateRoot = _.render = function() {
				var e, t, n;
				if(H.length && G(), K.render((a.time - K._startTime) * K._timeScale, !1, !1), J.render((a.frame - J._startTime) * J._timeScale, !1, !1), H.length && G(), a.frame >= Q) {
					Q = a.frame + (parseInt(_.autoSleep, 10) || 120);
					for(n in W) {
						for(t = W[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
						0 === t.length && delete W[n]
					}
					if(n = K._first, (!n || n._paused) && _.autoSleep && !J._first && 1 === a._listeners.tick.length) {
						for(; n && n._paused;) n = n._next;
						n || a.sleep()
					}
				}
			}, a.addEventListener("tick", A._updateRoot);
			var Y = function(e, t, n) {
					var r, i, s = e._gsTweenID;
					if(W[s || (e._gsTweenID = s = "t" + X++)] || (W[s] = {
							target: e,
							tweens: []
						}), t && (r = W[s].tweens, r[i = r.length] = t, n))
						for(; --i > -1;) r[i] === t && r.splice(i, 1);
					return W[s].tweens
				},
				Z = function(e, t, n, r) {
					var i, s, o = e.vars.onOverwrite;
					return o && (i = o(e, t, n, r)), o = _.onOverwrite, o && (s = o(e, t, n, r)), i !== !1 && s !== !1
				},
				et = function(e, t, n, r, i) {
					var s, o, u, a;
					if(1 === r || r >= 4) {
						for(a = i.length, s = 0; a > s; s++)
							if((u = i[s]) !== t) u._gc || u._kill(null, e, t) && (o = !0);
							else if(5 === r) break;
						return o
					}
					var f, l = t._startTime + h,
						c = [],
						p = 0,
						d = 0 === t._duration;
					for(s = i.length; --s > -1;)(u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (f = f || tt(t, 0, d), 0 === tt(u, f, d) && (c[p++] = u)) : u._startTime <= l && u._startTime + u.totalDuration() / u._timeScale > l && ((d || !u._initted) && l - u._startTime <= 2e-10 || (c[p++] = u)));
					for(s = p; --s > -1;)
						if(u = c[s], 2 === r && u._kill(n, e, t) && (o = !0), 2 !== r || !u._firstPT && u._initted) {
							if(2 !== r && !Z(u, t)) continue;
							u._enabled(!1, !1) && (o = !0)
						}
					return o
				},
				tt = function(e, t, n) {
					for(var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
						if(s += r._startTime, i *= r._timeScale, r._paused) return -100;
						r = r._timeline
					}
					return s /= i, s > t ? s - t : n && s === t || !e._initted && 2 * h > s - t ? h : (s += e.totalDuration() / e._timeScale / i) > t + h ? 0 : s - t - h
				};
			u._init = function() {
				var e, t, n, r, i, s, o = this.vars,
					u = this._overwrittenProps,
					a = this._duration,
					f = !!o.immediateRender,
					l = o.ease;
				if(o.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {};
					for(r in o.startAt) i[r] = o.startAt[r];
					if(i.overwrite = !1, i.immediateRender = !0, i.lazy = f && o.lazy !== !1, i.startAt = i.delay = null, i.onUpdate = o.onUpdate, i.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = _.to(this.target, 0, i), f)
						if(this._time > 0) this._startAt = null;
						else if(0 !== a) return
				} else if(o.runBackwards && 0 !== a)
					if(this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (f = !1), n = {};
						for(r in o) V[r] && "autoCSS" !== r || (n[r] = o[r]);
						if(n.overwrite = 0, n.data = "isFromStart", n.lazy = f && o.lazy !== !1, n.immediateRender = f, this._startAt = _.to(this.target, 0, n), f) {
							if(0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if(this._ease = l = l ? l instanceof E ? l : "function" == typeof l ? new E(l, o.easeParams) : S[l] || _.defaultEase : _.defaultEase, o.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for(s = this._targets.length, e = 0; s > e; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], u ? u[e] : null, e) && (t = !0);
				else t = this._initProps(this.target, this._propLookup, this._siblings, u, 0);
				if(t && _._onPluginEvent("_onInitAllProps", this), u && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
					for(n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
				this._onUpdate = o.onUpdate, this._initted = !0
			}, u._initProps = function(t, n, r, i, s) {
				var o, u, a, f, l, c;
				if(null == t) return !1;
				B[t._gsTweenID] && G(), this.vars.css || t.style && t !== e && t.nodeType && z.css && this.vars.autoCSS !== !1 && P(this.vars, t);
				for(o in this.vars)
					if(c = this.vars[o], V[o]) c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
					else if(z[o] && (f = new z[o])._onInitTween(t, this.vars[o], this, s)) {
					for(this._firstPT = l = {
							_next: this._firstPT,
							t: f,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: o,
							pg: 1,
							pr: f._priority,
							m: 0
						}, u = f._overwriteProps.length; --u > -1;) n[f._overwriteProps[u]] = this._firstPT;
					(f._priority || f._onInitAllProps) && (a = !0), (f._onDisable || f._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
				} else n[o] = R.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, s);
				return i && this._kill(i, t) ? this._initProps(t, n, r, i, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && et(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), a)
			}, u.render = function(e, t, n) {
				var r, i, s, o, u = this._time,
					a = this._duration,
					f = this._rawPrevTime;
				if(e >= a - 1e-7 && e >= 0) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === a && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 > f || 0 >= e && e >= -1e-7 || f === h && "isPause" !== this.data) && f !== e && (n = !0, f > h && (i = "onReverseComplete")), this._rawPrevTime = o = !t || e || f === e ? e : h);
				else if(1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === a && f > 0) && (i = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === a && (this._initted || !this.vars.lazy || n) && (f >= 0 && (f !== h || "isPause" !== this.data) && (n = !0), this._rawPrevTime = o = !t || e || f === e ? e : h)), (!this._initted || this._startAt && this._startAt.progress()) && (n = !0);
				else if(this._totalTime = this._time = e, this._easeType) {
					var l = e / a,
						c = this._easeType,
						p = this._easePower;
					(1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : .5 > e / a ? this.ratio = l / 2 : this.ratio = 1 - l / 2
				} else this.ratio = this._ease.getRatio(e / a);
				if(this._time !== u || n) {
					if(!this._initted) {
						if(this._init(), !this._initted || this._gc) return;
						if(!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = u, this._rawPrevTime = f, H.push(this), void(this._lazy = [e, t]);
						this._time && !r ? this.ratio = this._ease.getRatio(this._time / a) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for(this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== u && e >= 0 && (this._active = !0), 0 === u && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === a) && (t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
					this._onUpdate && (0 > e && this._startAt && e !== -0.0001 && this._startAt.render(e, t, n), t || (this._time !== u || r || n) && this._callback("onUpdate")), i && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -0.0001 && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === a && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
				}
			}, u._kill = function(e, t, n) {
				if("all" === e && (e = null), null != e || null != t && t !== this.target) {
					t = "string" != typeof t ? t || this._targets || this.target : _.selector(t) || t;
					var r, i, s, o, u, a, f, l, c, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
					if((v(t) || D(t)) && "number" != typeof t[0])
						for(r = t.length; --r > -1;) this._kill(e, t[r], n) && (a = !0);
					else {
						if(this._targets) {
							for(r = this._targets.length; --r > -1;)
								if(t === this._targets[r]) {
									u = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
									break
								}
						} else {
							if(t !== this.target) return !1;
							u = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
						}
						if(u) {
							if(f = e || u, l = e !== i && "all" !== i && e !== u && ("object" != typeof e || !e._tempKill), n && (_.onOverwrite || this.vars.onOverwrite)) {
								for(s in f) u[s] && (c || (c = []), c.push(s));
								if((c || !e) && !Z(this, n, t, c)) return !1
							}
							for(s in f)(o = u[s]) && (h && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, a = !0), o.pg && o.t._kill(f) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete u[s]), l && (i[s] = 1);
							!this._firstPT && this._initted && this._enabled(!1, !1)
						}
					}
					return a
				}
				return this._lazy = !1, this._enabled(!1, !1)
			}, u.invalidate = function() {
				return this._notifyPluginsOfEnabled && _._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
			}, u._enabled = function(e, t) {
				if(f || a.wake(), e && this._gc) {
					var n, r = this._targets;
					if(r)
						for(n = r.length; --n > -1;) this._siblings[n] = Y(r[n], this, !0);
					else this._siblings = Y(this.target, this, !0)
				}
				return A.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? _._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
			}, _.to = function(e, t, n) {
				return new _(e, t, n)
			}, _.from = function(e, t, n) {
				return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new _(e, t, n)
			}, _.fromTo = function(e, t, n, r) {
				return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new _(e, t, r)
			}, _.delayedCall = function(e, t, n, r, i) {
				return new _(t, 0, {
					delay: e,
					onComplete: t,
					onCompleteParams: n,
					callbackScope: r,
					onReverseComplete: t,
					onReverseCompleteParams: n,
					immediateRender: !1,
					lazy: !1,
					useFrames: i,
					overwrite: 0
				})
			}, _.set = function(e, t) {
				return new _(e, 0, t)
			}, _.getTweensOf = function(e, t) {
				if(null == e) return [];
				e = "string" != typeof e ? e : _.selector(e) || e;
				var n, r, i, s;
				if((v(e) || D(e)) && "number" != typeof e[0]) {
					for(n = e.length, r = []; --n > -1;) r = r.concat(_.getTweensOf(e[n], t));
					for(n = r.length; --n > -1;)
						for(s = r[n], i = n; --i > -1;) s === r[i] && r.splice(n, 1)
				} else if(e._gsTweenID)
					for(r = Y(e).concat(), n = r.length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
				return r || []
			}, _.killTweensOf = _.killDelayedCallsTo = function(e, t, n) {
				"object" == typeof t && (n = t, t = !1);
				for(var r = _.getTweensOf(e, t), i = r.length; --i > -1;) r[i]._kill(n, e)
			};
			var nt = b("plugins.TweenPlugin", function(e, t) {
				this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = nt.prototype
			}, !0);
			if(u = nt.prototype, nt.version = "1.19.0", nt.API = 2, u._firstPT = null, u._addTween = R, u.setRatio = I, u._kill = function(e) {
					var t, n = this._overwriteProps,
						r = this._firstPT;
					if(null != e[this._propName]) this._overwriteProps = [];
					else
						for(t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
					for(; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
					return !1
				}, u._mod = u._roundProps = function(e) {
					for(var t, n = this._firstPT; n;) t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")], t && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
				}, _._onPluginEvent = function(e, t) {
					var n, r, i, s, o, u = t._firstPT;
					if("_onInitAllProps" === e) {
						for(; u;) {
							for(o = u._next, r = i; r && r.pr > u.pr;) r = r._next;
							(u._prev = r ? r._prev : s) ? u._prev._next = u: i = u, (u._next = r) ? r._prev = u : s = u, u = o
						}
						u = t._firstPT = i
					}
					for(; u;) u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
					return n
				}, nt.activate = function(e) {
					for(var t = e.length; --t > -1;) e[t].API === nt.API && (z[(new e[t])._propName] = e[t]);
					return !0
				}, y.plugin = function(e) {
					if(!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
					var t, n = e.propName,
						r = e.priority || 0,
						i = e.overwriteProps,
						s = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						o = b("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
							nt.call(this, n, r), this._overwriteProps = i || []
						}, e.global === !0),
						u = o.prototype = new nt(n);
					u.constructor = o, o.API = e.API;
					for(t in s) "function" == typeof e[t] && (u[s[t]] = e[t]);
					return o.version = e.version, nt.activate([o]), o
				}, s = e._gsQueue) {
				for(o = 0; o < s.length; o++) s[o]();
				for(u in m) m[u].func || e.console.log("GSAP encountered missing dependency: " + u)
			}
			f = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax")

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		var e = function(t) {
				var n = t.nodeType,
					r = "";
				if(1 === n || 9 === n || 11 === n) {
					if("string" == typeof t.textContent) return t.textContent;
					for(t = t.firstChild; t; t = t.nextSibling) r += e(t)
				} else if(3 === n || 4 === n) return t.nodeValue;
				return r
			},
			t = 55296,
			n = 56319,
			r = 56320,
			i = 127462,
			s = 127487,
			o = 127995,
			u = 127999,
			a = function(e) {
				return(e.charCodeAt(0) - t << 10) + (e.charCodeAt(1) - r) + 65536
			},
			f = function(e, r) {
				if("" !== r) return e.split(r);
				var f, l, c, p, d, v = e.length,
					m = [];
				for(l = 0; v > l; l++) f = e.charAt(l), f.charCodeAt(0) >= t && f.charCodeAt(0) <= n || e.charCodeAt(l + 1) >= 65024 && e.charCodeAt(l + 1) <= 65039 ? (c = a(e.substr(l, 2)), p = a(e.substr(l + 2, 2)), d = c >= i && s >= c && p >= i && s >= p || p >= o && u >= p ? 4 : 2, m.push(e.substr(l, d)), l += d - 1) : m.push(f);
				return m
			},
			l = _gsScope._gsDefine.plugin({
				propName: "text",
				API: 2,
				version: "0.6.1",
				init: function(t, n, r, i) {
					var s, o = t.nodeName.toUpperCase();
					if("function" == typeof n && (n = n(i, t)), this._svg = t.getBBox && ("TEXT" === o || "TSPAN" === o), !("innerHTML" in t || this._svg)) return !1;
					if(this._target = t, "object" != typeof n && (n = {
							value: n
						}), void 0 === n.value) return this._text = this._original = [""], !0;
					for(this._delimiter = n.delimiter || "", this._original = f(e(t).replace(/\s+/g, " "), this._delimiter), this._text = f(n.value.replace(/\s+/g, " "), this._delimiter), this._runBackwards = r.vars.runBackwards === !0, this._runBackwards && (o = this._original, this._original = this._text, this._text = o), "string" == typeof n.newClass && (this._newClass = n.newClass, this._hasClass = !0), "string" == typeof n.oldClass && (this._oldClass = n.oldClass, this._hasClass = !0), o = this._original.length - this._text.length, s = 0 > o ? this._original : this._text, this._fillChar = n.fillChar || (n.padSpace ? "&nbsp;" : ""), 0 > o && (o = -o); --o > -1;) s.push(this._fillChar);
					return !0
				},
				set: function(e) {
					e > 1 ? e = 1 : 0 > e && (e = 0), this._runBackwards && (e = 1 - e);
					var t, n, r, i = this._text.length,
						s = e * i + .5 | 0;
					this._hasClass ? (t = this._newClass && 0 !== s, n = this._oldClass && s !== i, r = (t ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, s).join(this._delimiter) + (t ? "</span>" : "") + (n ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(s).join(this._delimiter) + (n ? "</span>" : "")) : r = this._text.slice(0, s).join(this._delimiter) + this._delimiter + this._original.slice(s).join(this._delimiter), this._svg ? this._target.textContent = r : this._target.innerHTML = "&nbsp;" === this._fillChar && -1 !== r.indexOf("  ") ? r.split("  ").join("&nbsp;&nbsp;") : r
				}
			}),
			c = l.prototype;
		c._newClass = c._oldClass = c._delimiter = ""
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(e) {
		"use strict";
		var t = function() {
			return(_gsScope.GreenSockGlobals || _gsScope)[e]
		};
		"undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
	}("TextPlugin")

var Ziploader = function() {
	function initLoad(e, t) {
		function o(e, t, n) {
			var r = getFileExt(e),
				i = n || s[r];
			switch(i) {
				case TYPE_TEXT:
					return Utf8ArrayToStr(t);
				case TYPE_BLOB:
					return getBlob(t, MIME_MAP[r]);
				case TYPE_RAW:
					return t;
				case TYPE_URL:
				default:
					return getBlobUrl(t, MIME_MAP[r])
			}
		}
		var n = $.extend({}, DEFAULT_LOAD_OPTIONS, t.loadOptions),
			r = n.success,
			i = n.error;
		progressCb = n.progress;
		var s = $.extend({}, DEFAULT_RETURN_OPTIONS, t.returnOptions);
		MIME_MAP = $.extend(MIME_MAP, t.mimeOptions), e.map(function(e) {
			var t = btoa(window.location.origin);
			return /\#/.test(e) && (e = e.split("#")[0]), /\?/.test(e) ? t = "&" + t : t = "?" + t, e + t
		}).forEach(function(e) {
			$.ajax({
				url: e,
				type: "GET",
				async: !0,
				cache: !0,
				dataType: "arraybuffer",
				crossDomain: "",
				dataFilter: function(e) {
					var t = new Uint8Array(e);
					return t
				},
				success: function(t, n, i) {
					var u = t,
						a = new Zlib.Unzip(u),
						f = 0,
						l = null,
						c = a.getFilenames(),
						h = c.filter(function(e) {
							return !/\/|\\/g.test(e)
						}).reduce(function(e, t) {
							var n = a.decompress(t);
							return e[t] = o(t, n), e
						}, {}),
						p = c.filter(function(e) {
							return /^[^\/|\\]+(\/|\\)$/.test(e)
						}).reduce(function(e, t) {
							if(s["folder"] == TYPE_FILES) e[t] = c.filter(function(e) {
								return e != t && e.indexOf(t) == 0
							}).map(function(e) {
								return e.replace(t, "")
							}).reduce(function(e, n) {
								return e[n] = o(n, a.decompress(t + n)), e
							}, {});
							else if(s["folder"] == TYPE_FRAMES) {
								var n = c.filter(function(e) {
										return e != t && e.indexOf(t) == 0
									}).map(function(e) {
										return e.replace(t, "")
									}).sort().map(function(e) {
										return o(e, a.decompress(t + e), TYPE_URL)
									}).map(function(e) {
										var t = new Image;
										return t.src = e, t
									}),
									r = {};
								n[0] && n[0].width ? $.extend(r, {
									images: n,
									frames: {
										width: n[0].width,
										height: n[0].height,
										regX: 0,
										regY: 0
									},
									animations: {
										"default": {
											frames: [0, n.length]
										}
									},
									framerate: 60
								}) : (f++, n[0].onload = function() {
									$.extend(r, {
										images: n,
										frames: {
											width: n[0].width,
											height: n[0].height,
											regX: 0,
											regY: 0
										},
										animations: {
											"default": {
												frames: [0, n.length]
											}
										},
										framerate: 60
									}), f--, f || l && l()
								}), e[t] = r
							} else {
								var i = s.folder;
								e[t] = c.filter(function(e) {
									return e != t && e.indexOf(t) == 0
								}).map(function(e) {
									return e.replace(t, "")
								}).reduce(function(e, n) {
									return e[n] = o(n, a.decompress(t + n), i), e
								}, {})
							}
							return e
						}, {});
					f ? l = function() {
						r($.extend({}, h, p)), progressSegment(e, !0)
					} : (r($.extend({}, h, p)), progressSegment(e, !0))
				},
				error: function(e, t) {
					console.log(e, t), i(t)
				}
			})
		})
	}

	function getFileExt(e) {
		return e.split(".").slice(-1).join("").toLowerCase()
	}

	function Utf8ArrayToStr(e) {
		var t, n, r, i, s, o;
		t = "", r = e.length, n = 0;
		while(n < r) {
			i = e[n++];
			switch(i >> 4) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					t += String.fromCharCode(i);
					break;
				case 12:
				case 13:
					s = e[n++], t += String.fromCharCode((i & 31) << 6 | s & 63);
					break;
				case 14:
					s = e[n++], o = e[n++], t += String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | (o & 63) << 0)
			}
		}
		return t
	}

	function getBlob(e, t) {
		try {
			var n = window.Blob,
				r = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder,
				i;
			n && (i = new Blob([e], {
				type: t || "text/plain"
			}));
			if(!n && r) {
				var s = new r;
				s.append(e), i = s.getBlob(t)
			}
			return i ? i : ""
		} catch(o) {
			return alert("No Blob API Avilable"), ""
		}
	}

	function getBlobUrl(e, t) {
		try {
			var n = window.Blob,
				r = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder,
				i;
			n && (i = new Blob([e], {
				type: t || "text/plain"
			}));
			if(!n && r) {
				var s = new r;
				s.append(e), i = s.getBlob()
			}
			return i ? (URL.createObjectURL || URL.webkitCreateObjectURL)(i) : ""
		} catch(o) {
			return alert("No Blob API or createObjectURL Method Avilable"), ""
		}
	}

	function progressSegment(e, t) {
		if(t) {
			progressList[e] = {
				total: 1,
				loaded: 1,
				progress: 1
			};
			return
		}
		var n = e.target,
			r = n.id;
		if(!e.lengthComputable) {
			progressList[r] = {
				total: 1,
				loaded: 0,
				progress: 0
			};
			return
		}
		progressList[r] ? (progressList[r].loaded = e.loaded, progressList[r].progress = e.loaded / e.total) : progressList[r] = {
			total: e.total,
			loaded: e.loaded,
			progress: e.loaded / e.total
		};
		var i = 0,
			s = 0;
		for(var o in progressList) i += progressList[o].total, s += progressList[o].loaded;
		progressCb(s / i)
	}(function() {
		"use strict";

		function l(e) {
			throw e
		}

		function v(e, t) {
			var n = e.split("."),
				i = aa;
			!(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
			for(var s; n.length && (s = n.shift());) !n.length && t !== r ? i[s] = t : i = i[s] ? i[s] : i[s] = {}
		}

		function D(e) {
			var t = e.length,
				n = 0,
				r = Number.POSITIVE_INFINITY,
				i, s, o, u, a, f, l, c, h, p;
			for(c = 0; c < t; ++c) e[c] > n && (n = e[c]), e[c] < r && (r = e[c]);
			i = 1 << n, s = new(y ? Uint32Array : Array)(i), o = 1, u = 0;
			for(a = 2; o <= n;) {
				for(c = 0; c < t; ++c)
					if(e[c] === o) {
						f = 0, l = u;
						for(h = 0; h < o; ++h) f = f << 1 | l & 1, l >>= 1;
						p = o << 16 | c;
						for(h = f; h < i; h += a) s[h] = p;
						++u
					}++o, u <<= 1, a <<= 1
			}
			return [s, n, r]
		}

		function I(e, t) {
			this.l = [], this.m = 32768, this.d = this.f = this.c = this.t = 0, this.input = y ? new Uint8Array(e) : e, this.u = !1, this.n = J, this.K = !1;
			if(t || !(t = {})) t.index && (this.c = t.index), t.bufferSize && (this.m = t.bufferSize), t.bufferType && (this.n = t.bufferType), t.resize && (this.K = t.resize);
			switch(this.n) {
				case ga:
					this.a = 32768, this.b = new(y ? Uint8Array : Array)(32768 + this.m + 258);
					break;
				case J:
					this.a = 0, this.b = new(y ? Uint8Array : Array)(this.m), this.e = this.W, this.B = this.R, this.q = this.V;
					break;
				default:
					l(Error("invalid inflate mode"))
			}
		}

		function K(e, t) {
			for(var n = e.f, r = e.d, i = e.input, s = e.c, o = i.length, u; r < t;) s >= o && l(Error("input buffer is broken")), n |= i[s++] << r, r += 8;
			return u = n & (1 << t) - 1, e.f = n >>> t, e.d = r - t, e.c = s, u
		}

		function M(e, t) {
			for(var n = e.f, r = e.d, i = e.input, s = e.c, o = i.length, u = t[0], a = t[1], f, c; r < a && !(s >= o);) n |= i[s++] << r, r += 8;
			return f = u[n & (1 << a) - 1], c = f >>> 16, c > r && l(Error("invalid code length: " + c)), e.f = n >> c, e.d = r - c, e.c = s, f & 65535
		}

		function U(e) {
			e = e || {}, this.files = [], this.v = e.comment
		}

		function V(e, t) {
			t = t || {}, this.input = y && e instanceof Array ? new Uint8Array(e) : e, this.c = 0, this.ba = t.verify || !1, this.j = t.password
		}

		function ta(e, t) {
			this.input = e, this.offset = t
		}

		function ua(e, t) {
			this.input = e, this.offset = t
		}

		function $(e) {
			var t = [],
				n = {},
				i, s, o, u;
			if(!e.i) {
				if(e.o === r) {
					var a = e.input,
						f;
					if(!e.D) e: {
						var c = e.input,
							h;
						for(h = c.length - 12; 0 < h; --h)
							if(c[h] === Z[0] && c[h + 1] === Z[1] && c[h + 2] === Z[2] && c[h + 3] === Z[3]) {
								e.D = h;
								break e
							}
						l(Error("End of Central Directory Record not found"))
					}
					f = e.D, (a[f++] !== Z[0] || a[f++] !== Z[1] || a[f++] !== Z[2] || a[f++] !== Z[3]) && l(Error("invalid signature")), e.ha = a[f++] | a[f++] << 8, e.ja = a[f++] | a[f++] << 8, e.ka = a[f++] | a[f++] << 8, e.aa = a[f++] | a[f++] << 8, e.Q = (a[f++] | a[f++] << 8 | a[f++] << 16 | a[f++] << 24) >>> 0, e.o = (a[f++] | a[f++] << 8 | a[f++] << 16 | a[f++] << 24) >>> 0, e.w = a[f++] | a[f++] << 8, e.v = y ? a.subarray(f, f + e.w) : a.slice(f, f + e.w)
				}
				i = e.o, o = 0;
				for(u = e.aa; o < u; ++o) s = new ta(e.input, i), s.parse(), i += s.length, t[o] = s, n[s.filename] = o;
				e.Q < i - e.o && l(Error("invalid file header size")), e.i = t, e.G = n
			}
		}

		function wa(e, t, n) {
			return n ^= e.s(t), e.k(t, n), n
		}
		var r = void 0,
			t, aa = this,
			y = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
		new(y ? Uint8Array : Array)(256);
		var z;
		for(z = 0; 256 > z; ++z)
			for(var B = z, ba = 7, B = B >>> 1; B; B >>>= 1) --ba;
		var ca = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
			C = y ? new Uint32Array(ca) : ca;
		if(aa.Uint8Array !== r) try {
			eval("String.fromCharCode.apply(null, new Uint8Array([0]));")
		} catch(ea) {
			String.fromCharCode.apply = function(e) {
				return function(t, n) {
					return e.call(String.fromCharCode, t, Array.prototype.slice.call(n))
				}
			}(String.fromCharCode.apply)
		}
		var F = [],
			G;
		for(G = 0; 288 > G; G++) switch(!0) {
			case 143 >= G:
				F.push([G + 48, 8]);
				break;
			case 255 >= G:
				F.push([G - 144 + 400, 9]);
				break;
			case 279 >= G:
				F.push([G - 256 + 0, 7]);
				break;
			case 287 >= G:
				F.push([G - 280 + 192, 8]);
				break;
			default:
				l("invalid literal: " + G)
		}
		var fa = function() {
			function e(e) {
				switch(!0) {
					case 3 === e:
						return [257, e - 3, 0];
					case 4 === e:
						return [258, e - 4, 0];
					case 5 === e:
						return [259, e - 5, 0];
					case 6 === e:
						return [260, e - 6, 0];
					case 7 === e:
						return [261, e - 7, 0];
					case 8 === e:
						return [262, e - 8, 0];
					case 9 === e:
						return [263, e - 9, 0];
					case 10 === e:
						return [264, e - 10, 0];
					case 12 >= e:
						return [265, e - 11, 1];
					case 14 >= e:
						return [266, e - 13, 1];
					case 16 >= e:
						return [267, e - 15, 1];
					case 18 >= e:
						return [268, e - 17, 1];
					case 22 >= e:
						return [269, e - 19, 2];
					case 26 >= e:
						return [270, e - 23, 2];
					case 30 >= e:
						return [271, e - 27, 2];
					case 34 >= e:
						return [272, e - 31, 2];
					case 42 >= e:
						return [273, e - 35, 3];
					case 50 >= e:
						return [274, e - 43, 3];
					case 58 >= e:
						return [275, e - 51, 3];
					case 66 >= e:
						return [276, e - 59, 3];
					case 82 >= e:
						return [277, e - 67, 4];
					case 98 >= e:
						return [278, e - 83, 4];
					case 114 >= e:
						return [279, e - 99, 4];
					case 130 >= e:
						return [280, e - 115, 4];
					case 162 >= e:
						return [281, e - 131, 5];
					case 194 >= e:
						return [282, e - 163, 5];
					case 226 >= e:
						return [283, e - 195, 5];
					case 257 >= e:
						return [284, e - 227, 5];
					case 258 === e:
						return [285, e - 258, 0];
					default:
						l("invalid length: " + e)
				}
			}
			var t = [],
				n, r;
			for(n = 3; 258 >= n; n++) r = e(n), t[n] = r[2] << 24 | r[1] << 16 | r[0];
			return t
		}();
		y && new Uint32Array(fa);
		var ga = 0,
			J = 1;
		I.prototype.r = function() {
			for(; !this.u;) {
				var e = K(this, 3);
				e & 1 && (this.u = !0), e >>>= 1;
				switch(e) {
					case 0:
						var t = this.input,
							n = this.c,
							i = this.b,
							s = this.a,
							o = t.length,
							u = r,
							a = r,
							f = i.length,
							c = r;
						this.d = this.f = 0, n + 1 >= o && l(Error("invalid uncompressed block header: LEN")), u = t[n++] | t[n++] << 8, n + 1 >= o && l(Error("invalid uncompressed block header: NLEN")), a = t[n++] | t[n++] << 8, u === ~a && l(Error("invalid uncompressed block header: length verify")), n + u > t.length && l(Error("input buffer is broken"));
						switch(this.n) {
							case ga:
								for(; s + u > i.length;) {
									c = f - s, u -= c;
									if(y) i.set(t.subarray(n, n + c), s), s += c, n += c;
									else
										for(; c--;) i[s++] = t[n++];
									this.a = s, i = this.e(), s = this.a
								}
								break;
							case J:
								for(; s + u > i.length;) i = this.e({
									H: 2
								});
								break;
							default:
								l(Error("invalid inflate mode"))
						}
						if(y) i.set(t.subarray(n, n + u), s), s += u, n += u;
						else
							for(; u--;) i[s++] = t[n++];
						this.c = n, this.a = s, this.b = i;
						break;
					case 1:
						this.q(ha, ia);
						break;
					case 2:
						for(var h = K(this, 5) + 257, p = K(this, 5) + 1, d = K(this, 4) + 4, v = new(y ? Uint8Array : Array)(L.length), m = r, g = r, b = r, w = r, E = r, S = r, x = r, T = r, N = r, T = 0; T < d; ++T) v[L[T]] = K(this, 3);
						if(!y) {
							T = d;
							for(d = v.length; T < d; ++T) v[L[T]] = 0
						}
						m = D(v), w = new(y ? Uint8Array : Array)(h + p), T = 0;
						for(N = h + p; T < N;) switch(E = M(this, m), E) {
							case 16:
								for(x = 3 + K(this, 2); x--;) w[T++] = S;
								break;
							case 17:
								for(x = 3 + K(this, 3); x--;) w[T++] = 0;
								S = 0;
								break;
							case 18:
								for(x = 11 + K(this, 7); x--;) w[T++] = 0;
								S = 0;
								break;
							default:
								S = w[T++] = E
						}
						g = y ? D(w.subarray(0, h)) : D(w.slice(0, h)), b = y ? D(w.subarray(h)) : D(w.slice(h)), this.q(g, b);
						break;
					default:
						l(Error("unknown BTYPE: " + e))
				}
			}
			return this.B()
		};
		var ja = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
			L = y ? new Uint16Array(ja) : ja,
			ka = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
			la = y ? new Uint16Array(ka) : ka,
			ma = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
			N = y ? new Uint8Array(ma) : ma,
			na = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
			oa = y ? new Uint16Array(na) : na,
			pa = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
			P = y ? new Uint8Array(pa) : pa,
			Q = new(y ? Uint8Array : Array)(288),
			R, qa;
		R = 0;
		for(qa = Q.length; R < qa; ++R) Q[R] = 143 >= R ? 8 : 255 >= R ? 9 : 279 >= R ? 7 : 8;
		var ha = D(Q),
			S = new(y ? Uint8Array : Array)(30),
			T, ra;
		T = 0;
		for(ra = S.length; T < ra; ++T) S[T] = 5;
		var ia = D(S);
		t = I.prototype, t.q = function(e, t) {
			var n = this.b,
				r = this.a;
			this.C = e;
			for(var i = n.length - 258, s, o, u, a; 256 !== (s = M(this, e));)
				if(256 > s) r >= i && (this.a = r, n = this.e(), r = this.a), n[r++] = s;
				else {
					o = s - 257, a = la[o], 0 < N[o] && (a += K(this, N[o])), s = M(this, t), u = oa[s], 0 < P[s] && (u += K(this, P[s])), r >= i && (this.a = r, n = this.e(), r = this.a);
					for(; a--;) n[r] = n[r++ - u]
				}
			for(; 8 <= this.d;) this.d -= 8, this.c--;
			this.a = r
		}, t.V = function(e, t) {
			var n = this.b,
				r = this.a;
			this.C = e;
			for(var i = n.length, s, o, u, a; 256 !== (s = M(this, e));)
				if(256 > s) r >= i && (n = this.e(), i = n.length), n[r++] = s;
				else {
					o = s - 257, a = la[o], 0 < N[o] && (a += K(this, N[o])), s = M(this, t), u = oa[s], 0 < P[s] && (u += K(this, P[s])), r + a > i && (n = this.e(), i = n.length);
					for(; a--;) n[r] = n[r++ - u]
				}
			for(; 8 <= this.d;) this.d -= 8, this.c--;
			this.a = r
		}, t.e = function() {
			var e = new(y ? Uint8Array : Array)(this.a - 32768),
				t = this.a - 32768,
				n, r, i = this.b;
			if(y) e.set(i.subarray(32768, e.length));
			else {
				n = 0;
				for(r = e.length; n < r; ++n) e[n] = i[n + 32768]
			}
			this.l.push(e), this.t += e.length;
			if(y) i.set(i.subarray(t, t + 32768));
			else
				for(n = 0; 32768 > n; ++n) i[n] = i[t + n];
			return this.a = 32768, i
		}, t.W = function(e) {
			var t, n = this.input.length / this.c + 1 | 0,
				r, i, s, o = this.input,
				u = this.b;
			return e && ("number" == typeof e.H && (n = e.H), "number" == typeof e.P && (n += e.P)), 2 > n ? (r = (o.length - this.c) / this.C[2], s = 258 * (r / 2) | 0, i = s < u.length ? u.length + s : u.length << 1) : i = u.length * n, y ? (t = new Uint8Array(i), t.set(u)) : t = u, this.b = t
		}, t.B = function() {
			var e = 0,
				t = this.b,
				n = this.l,
				r, i = new(y ? Uint8Array : Array)(this.t + (this.a - 32768)),
				s, o, u, a;
			if(0 === n.length) return y ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
			s = 0;
			for(o = n.length; s < o; ++s) {
				r = n[s], u = 0;
				for(a = r.length; u < a; ++u) i[e++] = r[u]
			}
			s = 32768;
			for(o = this.a; s < o; ++s) i[e++] = t[s];
			return this.l = [], this.buffer = i
		}, t.R = function() {
			var e, t = this.a;
			return y ? this.K ? (e = new Uint8Array(t), e.set(this.b.subarray(0, t))) : e = this.b.subarray(0, t) : (this.b.length > t && (this.b.length = t), e = this.b), this.buffer = e
		}, U.prototype.L = function(e) {
			this.j = e
		}, U.prototype.s = function(e) {
			var t = e[2] & 65535 | 2;
			return t * (t ^ 1) >> 8 & 255
		}, U.prototype.k = function(e, t) {
			e[0] = (C[(e[0] ^ t) & 255] ^ e[0] >>> 8) >>> 0, e[1] = (6681 * (20173 * (e[1] + (e[0] & 255)) >>> 0) >>> 0) + 1 >>> 0, e[2] = (C[(e[2] ^ e[1] >>> 24) & 255] ^ e[2] >>> 8) >>> 0
		}, U.prototype.T = function(e) {
			var t = [305419896, 591751049, 878082192],
				n, r;
			y && (t = new Uint32Array(t)), n = 0;
			for(r = e.length; n < r; ++n) this.k(t, e[n] & 255);
			return t
		};
		var sa = {
				O: 0,
				M: 8
			},
			W = [80, 75, 1, 2],
			Y = [80, 75, 3, 4],
			Z = [80, 75, 5, 6];
		ta.prototype.parse = function() {
			var e = this.input,
				t = this.offset;
			(e[t++] !== W[0] || e[t++] !== W[1] || e[t++] !== W[2] || e[t++] !== W[3]) && l(Error("invalid file header signature")), this.version = e[t++], this.ia = e[t++], this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.F = e[t++] | e[t++] << 8, this.ea = e[t++] | e[t++] << 8, this.ga = e[t++] | e[t++] << 8, this.fa = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, this.$ = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.filename = String.fromCharCode.apply(null, y ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = y ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.v = y ? e.subarray(t, t + this.F) : e.slice(t, t + this.F), this.length = t - this.offset
		};
		var va = {
			N: 1,
			ca: 8,
			da: 2048
		};
		ua.prototype.parse = function() {
			var e = this.input,
				t = this.offset;
			(e[t++] !== Y[0] || e[t++] !== Y[1] || e[t++] !== Y[2] || e[t++] !== Y[3]) && l(Error("invalid local file header signature")), this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.filename = String.fromCharCode.apply(null, y ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = y ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.length = t - this.offset
		}, t = V.prototype, t.Y = function() {
			var e = [],
				t, n, r;
			this.i || $(this), r = this.i, t = 0;
			for(n = r.length; t < n; ++t) e[t] = r[t].filename;
			return e
		}, t.r = function(e, t) {
			var n;
			this.G || $(this), n = this.G[e], n === r && l(Error(e + " not found"));
			var i;
			i = t || {};
			var s = this.input,
				o = this.i,
				u, a, f, c, h, p, d, v;
			o || $(this), o[n] === r && l(Error("wrong index")), a = o[n].$, u = new ua(this.input, a), u.parse(), a += u.length, f = u.z;
			if(0 !== (u.I & va.N)) {
				!i.password && !this.j && l(Error("please set password")), p = this.S(i.password || this.j), d = a;
				for(v = a + 12; d < v; ++d) wa(this, p, s[d]);
				a += 12, f -= 12, d = a;
				for(v = a + f; d < v; ++d) s[d] = wa(this, p, s[d])
			}
			switch(u.A) {
				case sa.O:
					c = y ? this.input.subarray(a, a + f) : this.input.slice(a, a + f);
					break;
				case sa.M:
					c = (new I(this.input, {
						index: a,
						bufferSize: u.J
					})).r();
					break;
				default:
					l(Error("unknown compression type"))
			}
			if(this.ba) {
				var m = r,
					g, b = "number" == typeof m ? m : m = 0,
					w = c.length;
				g = -1;
				for(b = w & 7; b--; ++m) g = g >>> 8 ^ C[(g ^ c[m]) & 255];
				for(b = w >> 3; b--; m += 8) g = g >>> 8 ^ C[(g ^ c[m]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 1]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 2]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 3]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 4]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 5]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 6]) & 255], g = g >>> 8 ^ C[(g ^ c[m + 7]) & 255];
				h = (g ^ 4294967295) >>> 0, u.p !== h && l(Error("wrong crc: file=0x" + u.p.toString(16) + ", data=0x" + h.toString(16)))
			}
			return c
		}, t.L = function(e) {
			this.j = e
		}, t.k = U.prototype.k, t.S = U.prototype.T, t.s = U.prototype.s, v("Zlib.Unzip", V), v("Zlib.Unzip.prototype.decompress", V.prototype.r), v("Zlib.Unzip.prototype.getFilenames", V.prototype.Y), v("Zlib.Unzip.prototype.setPassword", V.prototype.L)
	}).call(window), ! function(e) {
		e.ajaxTransport("+*", function(e, t, n) {
			if(window.FormData && (e.dataType && ("blob" == e.dataType || "arraybuffer" == e.dataType) || e.data && (window.Blob && e.data instanceof Blob || window.ArrayBuffer && e.data instanceof ArrayBuffer))) {
				var r;
				return {
					send: function(t, n) {
						var i = e.url || window.location.href,
							s = e.type || "GET",
							o = e.dataType || "text",
							u = e.data || null,
							a = e.async || !0;
						r = new XMLHttpRequest, r.id = e.url, r.onprogress = progressSegment, r.addEventListener("load", function() {
							var e = {},
								t = r.status >= 200 && r.status < 300 || 304 === r.status;
							t ? e[o] = r.response : e.text = r.statusText, n(r.status, r.statusText, e, r.getAllResponseHeaders())
						}), r.open(s, i, a), r.responseType = o;
						for(var f in t) t.hasOwnProperty(f) && r.setRequestHeader(f, t[f]);
						r.send(u)
					},
					abort: function() {
						r && r.abort()
					}
				}
			}
		})
	}(jQuery);
	var TYPE_TEXT = 1,
		TYPE_URL = 2,
		TYPE_BLOB = 3,
		TYPE_FRAMES = 4,
		TYPE_RAW = 5,
		TYPE_FILES = 6,
		progressList = {},
		progressCb, DEFAULT_RETURN_OPTIONS = {
			css: TYPE_TEXT,
			html: TYPE_TEXT,
			folder: TYPE_FILES
		},
		DEFAULT_LOAD_OPTIONS = {
			success: function(e) {
				console.log(e)
			},
			error: function(e) {
				console.error(e)
			},
			progress: function(e) {
				console.log("loaded: " + e * 100 + "%")
			}
		},
		MIME_MAP = {
			js: "text/javascript",
			jpg: "image/jpeg",
			png: "image/png"
		};
	return {
		TYPE_URL: TYPE_URL,
		TYPE_FILES: TYPE_FILES,
		TYPE_TEXT: TYPE_TEXT,
		TYPE_FRAMES: TYPE_FRAMES,
		TYPE_RAW: TYPE_RAW,
		TYPE_BLOB: TYPE_BLOB,
		initLoad: initLoad
	}
}()

var APP = {
	TM: new TimelineMax({
		delay: .5
	}),
	sc: $(window).width() > 720 ? $(window).width() / 720 : $(window).width() / 320,
	init: function() {
		this.preload(), this.bindEvents(), this.tagIn()
	},
	audio: {
		"peiyin.mp3": $(".J-peiyin")[0],
		"last.mp3": $(".J-last")[0],
		"bgm.mp3": $(".J-bgm")[0]
	},
	zp: {
		chanpin: [],
		gongyinglian: [],
		jishu: [],
		sheji: [],
		shichang: [],
		yunying: [],
		zhineng: []
	},
	tagIn: function() {
	},
	startTween: function() {
		$(".g-loading").css("pointer-events", "none"), $(".J-video").hide(), $(".J-scene").show(), APP.TM.add(APP.tween9())
	},
	startTween2: function() {
		APP.audio["bgm.mp3"].play(), APP.audio["bgm.mp3"].loop = "loop", $(".hive li").each(function(e, t) {
			TweenMax.fromTo(this, .4, {
				x: -20,
				y: -20,
				opacity: 0,
				rotationZ: -360
			}, {
				x: 0,
				y: 0,
				opacity: 1,
				rotationZ: 0,
				delay: .2 * e
			})
		})
	},
	bindEvents: function() {
		$(".hive li").on("click", function(e) {
			var t = $(this).data("type");
			APP.renderZp(t), $("body").addClass("modeling")
		}), $(".g-model .close").on("click", function(e) {
			$("body").removeClass("modeling")
		}), $(".g-container").on("touchmove", function(e) {
			event.preventDefault()
		}), $(".J-video").on("ended", function(e) {
			APP.startTween()
		}), $(".J-video").on("touchmove", function() {
			event.preventDefault()
		})
	},
	renderZp: function(e) {
		var t = "";
		$.each(APP.zp[e], function(e, n) {
			t += '<li><a target="_blank" href="' + n.url + '">' + n.name + "</a></li>"
		}), $(".zlist").html(t)
	},
	bindTouch: function(e, t, n) {
		var r = 0,
			i = 0;
		e.on("touchstart", function(r) {
			TweenMax.to(e, .5, {
				opacity: 0,
				y: "-100%"
			}), t && t(), n && n()
		})
	},
	preload: function() {
		var e = this;
		Ziploader.initLoad(["https://yanxuan.nosdn.127.net/1500963393479RPWWSI419.flv"], {
			loadOptions: {
				success: function(t) {
					$.each(t, function(e, t) {
						var n = e.split(".");
						//									n[1] == "png" ? $("." + n[0]).css("background-image", "url(" + t + ")") : n[1] == "mp3"
					}), TweenMax.fromTo(".J-tip", .3, {
						opacity: 0
					}, {
						opacity: 1
					}), e.bindTouch($(".g-loading"), function() {
						APP.audio["last.mp3"].play(), APP.audio["last.mp3"].pause(), $(".J-video")[0].play()
					}, null)
				},
				error: function(e) {},
				progress: function(e) {
					$(".J-percent").html(Math.round(e * 100) + "%")
				}
			},
			returnOptions: {
				mp3: Ziploader.TYPE_BLOB,
				png: Ziploader.TYPE_URL
			},
			mimeOptions: {
				mp3: "audio/mpeg",
				png: "image/png"
			}
		})
	},
	initSounds: function(e, t) {
		var n = new FileReader,
			r = this;
		n.onload = function(t) {
			var n = t.target.result;
			r.audio[e].src = n, r.audio[e].load(), e == "last.mp3" && (r.audio[e].play(), setTimeout(function() {
				r.audio[e].pause()
			}, 100))
		}, n.readAsDataURL(t)
	},
	tween1: function() {
		var e = new TimelineLite;
		return e.to(".wall", 1, {
			scale: .7
		}, 4), e.to(".computer", 1, {
			scale: .9
		}, 4), e.to(".flash", 1, {
			scale: .8
		}, 4), e.to(".mail1", .2, {
			opacity: 0
		}, 6), e.to(".con", .2, {
			opacity: 1
		}, 6.1), e.to(".people0", .2, {
			opacity: 1
		}, 6), e.to(".people1", .2, {
			opacity: 1
		}, 6.5), e.to(".people2", .2, {
			opacity: 1
		}, 7), e.fromTo(".J-txt", 5.6, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e.fromTo(".J-txt", 6, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 5.7), e
	},
	tween2: function() {
		var e = new TimelineLite,
			t = this;
		return e.to(".scene1", 4, {
			x: 50,
			y: -40,
			scale: .328125,
			opacity: 0
		}, .1), e.to(".scene2", 2, {
			opacity: 1
		}, 2), e.fromTo(".paper1", 2, {
			opacity: 0,
			y: -10
		}, {
			opacity: 1,
			y: 0
		}, .1).to(".paper1", 2, {
			y: 200,
			scale: 1.5
		}, 2.2), e.fromTo(".paper1", 2, {
			y: 200
		}, {
			y: -100
		}, 4), e.to(".paper1", 2, {
			y: 0,
			scale: 1
		}, 6), e.fromTo(".J-txt", 8, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e
	},
	tween3: function() {
		var e = new TimelineLite;
		return e.to(".scene2", 2, {
			backgroundColor: "#f2eae7"
		}, .1).to(".J-txt", 2, {
			color: "#453d3d"
		}, .1), e.to(".paper1", 2, {
			scale: .5,
			y: -30,
			ease: Elastic.easeInOut
		}, .1), e.fromTo(".J-txt", 4.6, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e
	},
	tween4: function() {
		var e = new TimelineLite;
		return e.to([".email-block", ".email-mask", ".email-switch"], .2, {
			opacity: 1
		}).to(".shade", .2, {
			opacity: 1
		}), e.to(".paper1", 1, {
			opacity: 0,
			y: 30
		}).call(function() {
			$(".email").addClass("off")
		}).to(".email-stamp", .2, {
			opacity: 1
		}), e.to(".shade", .2, {
			opacity: 0
		}, 1.5), e.fromTo(".J-txt", 2, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e
	},
	tween5: function() {
		var e = new TimelineLite;
		return e.to(".scene2", .4, {
			backgroundColor: "#9d9b9b"
		}), e.to(".shade", .2, {
			opacity: 0
		}), e.to(".email", .1, {
			zIndex: 20
		}).to(".email", .3, {
			y: 40,
			x: -80,
			scale: .6,
			rotationZ: -15
		}).to(".email", 1, {
			y: "-=10"
		}).to(".email", 1, {
			y: "+=10"
		}).to(".email", 1, {
			y: "-=10"
		}).to(".email", 1, {
			y: "+=10"
		}).to(".email", 1, {
			y: "-=10"
		}).to(".email", 1, {
			y: "+=10"
		}).to(".email", 1, {
			y: "-=10"
		}).to(".email", 1, {
			y: "+=10"
		}).to(".email", 1, {
			y: "-=10"
		}).to(".email", 1, {
			y: 0,
			x: 0,
			scale: 1,
			rotationZ: 0
		}).to(".email", 1, {
			y: 0,
			x: 0,
			scale: 1,
			rotationZ: 0
		}).to(".shade", .2, {
			opacity: 1
		}).to(".scene2", .3, {
			backgroundColor: "#f2eae7"
		}), e.to(".long", 11.5, {
			x: "-100%",
			ease: "linear"
		}, 1.5).to(".long", .5, {
			opacity: 0
		}, 12), e.to(".stamp1", .5, {
			opacity: 1,
			scale: 1
		}, 3.5), e.to(".stamp2", .5, {
			opacity: 1,
			scale: 1
		}, 5.2), e.to(".stamp3", .5, {
			opacity: 1,
			scale: 1
		}, 6.2), e.to(".stamp4", .5, {
			opacity: 1,
			scale: 1
		}, 7.6), e.to(".stamp5", .5, {
			opacity: 1,
			scale: 1
		}, 9.5), e.to(".stamp6", .5, {
			opacity: 1,
			scale: 1
		}, 10.5), e.fromTo(".J-txt", 1, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone,
			color: "#ffffff"
		}, .1), e.fromTo(".J-txt", 1.5, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 1.2), e.fromTo(".J-txt", 1.5, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 3), e.fromTo(".J-txt", 1.5, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 4.5), e.fromTo(".J-txt", 1.5, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 7), e.fromTo(".J-txt", 1.5, {
			text: ""
		}, {
			text: {
				value: "不断给自己增加新的生命力。",
				delimiter: "<br>"
			},
			color: "#453d3d",
			ease: Linear.easeNone
		}, 10), e
	},
	tween6: function() {
		var e = new TimelineLite;
		return e.to(".logo1", .2, {
			opacity: 1,
			scale: 1
		}, 2), e.to(".email-stamp", .4, {
			opacity: 0
		}, 2), e.call(function() {
			$(".email").removeClass("off"), $(".explode").show()
		}), e.to(".money", 2, {
			opacity: 1,
			y: -50
		}, 3), e.to(".card1", 2, {
			opacity: 1,
			y: -200,
			x: -30,
			rotationZ: 320
		}, 3), e.to(".card2", 2, {
			opacity: 1,
			y: -140,
			x: 50,
			rotationZ: 245
		}, 3), e.to([".money", ".card1", ".card2"], .4, {
			opacity: 0
		}, 9.5), e.to(".logo1", .4, {
			opacity: 0,
			scale: 1.2
		}, 9.5), e.fromTo(".J-txt", 1.8, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			}
		}, .1), e.fromTo(".J-txt", 6, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, 1.9), e
	},
	tween7: function() {
		var e = new TimelineLite;
		return e.to(".logo2", .4, {
			opacity: 1,
			scale: 1
		}), e.to(".large", 1, {
			opacity: 1,
			y: -60,
			x: -20
		}, .5), e.to(".bao2", 1, {
			opacity: 1,
			y: -40,
			rotationZ: 90
		}, .5), e.to(".mirror", 1, {
			opacity: 1,
			y: -180,
			rotationZ: -45
		}, .5), e.to(".muyu", 1, {
			opacity: 1,
			y: -140,
			rotationZ: -60
		}, .5), e.to(".muyu2", 1, {
			opacity: 1,
			y: -60,
			rotationZ: 35
		}, .5), e.to(".guo", 1, {
			opacity: 1,
			y: -10
		}, .1), e.to(".watch", 1, {
			opacity: 1,
			y: -10,
			rotationZ: 10
		}, .5), e.to(".bao", 1, {
			opacity: 1,
			y: -100,
			x: 80,
			rotationZ: 70
		}, .5), e.to(".logo2", .4, {
			opacity: 0,
			scale: 2
		}, 8), e.to([], .4, {
			opacity: 0
		}, 8), e.fromTo(".J-txt", 4, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e
	},
	tween8: function() {
		var e = new TimelineLite;
		return e.to(".logo3", .2, {
			opacity: 1,
			scale: 1
		}, .3), e.to(".ai", 1, {
			opacity: 1,
			y: -40
		}, .3), e.to(".ai", 1, {
			opacity: 0,
			y: 0
		}, 9), e.to(".logo3", .2, {
			opacity: 0,
			scale: 1.2
		}, 9).call(function() {
			$(".email").addClass("off"), $(".explode").hide()
		}).to(".email-stamp", .2, {
			opacity: 1
		}).to(".shade", .1, {
			opacity: 0
		}).to(".email", 1.5, {
			opacity: 0,
			rotationY: 360,
			scale: 1.4
		}), e.fromTo(".J-txt", 9, {
			text: ""
		}, {
			text: {
				value: "",
				delimiter: "<br>"
			},
			ease: Linear.easeNone
		}, .1), e
	},
	tween9: function() {
		var e = this,
			t = new TimelineLite;
		return t.to([".scene1", ".scene2"], .1, {
			display: "none"
		}), t.to(".er", .8, {
			opacity: 1,
			rotationX: 360.2,
			ease: "easeInOut"
		}, .2), t.to(".ling", .8, {
			opacity: 1,
			rotationX: -360.2,
			ease: "easeInOut"
		}, .3), $(".leaf-left path").each(function(e) {
			t.to(this, .3, {
				opacity: 1
			}, .05 * (17 - e))
		}), $(".leaf-right path").each(function(e) {
			t.to(this, .2, {
				opacity: 1
			}, .05 * (17 - e))
		}), t.fromTo(".zi1", .3, {
			opacity: 0,
			y: -20
		}, {
			opacity: 1,
			y: 0
		}, 1), t.fromTo(".zi2", .3, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0
		}, 1).call(function() {
			APP.audio["last.mp3"].play()
		}), t.set(".J-tip2", {
			opacity: 1
		}), t.fromTo(".button", .4, {
			opacity: 0,
			rotationX: 90
		}, {
			rotationX: 0,
			opacity: 1
		}, 2), t.to(".ear-left", .3, {
			opacity: 1,
			x: -44 * APP.sc
		}, 2.2), t.to(".ear-right", .3, {
			opacity: 1,
			x: 44 * APP.sc
		}, 2.2), t.fromTo(".tip", .2, {
			opacity: 0
		}, {
			opacity: 1
		}, 3), t
	}
};
APP.init()

var _PSC_C_API = function() {
	function r(e, t, n) {
		var r = e.indexOf("?", e.indexOf("?") + 1) < 0 ? e : e.slice(0, e.indexOf("?", e.indexOf("?") + 1)),
			i = /(\S{1,})\?([^\?]*)(#|$)/,
			s = new RegExp("(^|&)" + t + "(=[^&^#^=]*)?(&|#|$)"),
			o = r.match(i),
			u = o ? o[2] : "",
			a = t + "=" + n,
			f = s.test(u) ? u.replace(s, "$1" + a + "$3") : a + (u ? "&" : "") + u;
		return o ? o[1] + "?" + f : r.replace(/([^#]*)([\S]*)/, "$1?" + f + "$2")
	}

	function i() {
		if(!window.NEJsbridge) return;
		window.shareConfig.url = r(window.shareConfig.url, "_stat_from", "web_pd_activity"), NEJsbridge.call("setShareParams", '{"title":"' + window.shareConfig.title + '","timeline":"' + window.shareConfig.timeline_title + '","content":"' + window.shareConfig.desc + '","imageUrl":"' + window.shareConfig.img + '","shareUrl":"' + window.shareConfig.url + '","largeImageUrl":"' + (window.shareConfig.wbpic || window.shareConfig.img) + '","topicId":' + (window.shareConfig.topicId % 1 !== 0 ? window.shareConfig.topicId : (new Date).getTime()) + "}"), window.onShareResult = function(e, t) {
			try {
				l(window.shareConfig.callback) && window.shareConfig.callback(e, t)
			} catch(n) {}
		}, $(".J_YX_M_share").unbind().click(function() {
			NEJsbridge.call("setShareToSNSCallback", "")
		})
	}

	function s(e) {
		var n = [],
			r = [];
		return e.forEach(function(e, t) {
			switch(e) {
				case "wxFriend":
					n.push("wechatFriend"), r.push({
						type: "WeiXinFriend"
					});
					break;
				case "wxTimeline":
					n.push("wechatPengYouQuan"), r.push({
						type: "WeiXinTimeline"
					});
					break;
				case "weibo":
					n.push("weibo"), r.push({
						type: "WeiBo",
						data: {
							shareTitle: window.shareConfig.title,
							shareContent: window.shareConfig.wContent || window.shareConfig.desc,
							shareUrl: window.shareConfig.url,
							thumbUrl: window.shareConfig.wbpic || window.shareConfig.img
						}
					});
					break;
				case "QQFriend":
					r.push({
						type: "QQFriend"
					});
					break;
				case "QQZone":
					n.push("qzone"), r.push({
						type: "QQZone"
					});
					break;
				case "yxFriend":
					n.push("yixinFriend"), r.push({
						type: "YiXinFriend"
					});
					break;
				case "yxTimeline":
					n.push("yixinPengYouQuan"), r.push({
						type: "YiXinTimeline"
					});
					break;
				case "message":
					r.push({
						type: "Message"
					});
					break;
				case "copy":
					r.push({
						type: "Message"
					});
					break;
				case "mail":
					r.push({
						type: "Mail"
					})
			}
		}), t == 2 ? n : r
	}

	function o(e) {
		switch(e) {
			case "WeiXinFriend":
				return 0;
			case "WeiXinTimeline":
				return 1;
			case "WeiBo":
				return 2;
			case "YiXinFriend":
				return 3;
			case "YiXinTimeline":
				return 4;
			case "QQZone":
				return 5;
			case "QQFriend":
				return 6;
			case "Message":
				return 7;
			case "Copy":
				return 8;
			case "Mail":
				return 9
		}
	}

	function u() {
		if(!window.appHost) return;
		window.appHost.invoke("socialShare", {
			content: {
				panelTitle: window.shareConfig.title,
				subject: window.shareConfig.timeline_title,
				description: window.shareConfig.desc,
				imageUrl: window.shareConfig.img,
				link: window.shareConfig.url
			},
			supportList: window.shareConfig.shareList ? s(window.shareConfig.shareList) : ""
		})
	}

	function a() {
		var e = 0,
			t;
		if(!window.appHost) return;
		window.appHost.invoke("share", {
			"default": {
				shareTitle: window.shareConfig.title,
				shareContent: window.shareConfig.desc,
				shareUrl: window.shareConfig.img,
				thumbUrl: window.shareConfig.url
			},
			list: window.shareConfig.shareList ? s(window.shareConfig.shareList) : ""
		}, function(n, r) {
			n == "success" && (e = 1), t = o(r);
			try {
				l(window.shareConfig.callback) && window.shareConfig.callback(e, t)
			} catch(i) {}
		})
	}

	function f(e) {
		var t = null;
		try {
			t = new Event("appHostLoaded")
		} catch(n) {
			t = document.createEvent("Event"), t.initEvent("appHostLoaded", !0, !0)
		}
		document.addEventListener("DOMContentLoaded", function() {
			window.appHost ? document.dispatchEvent(t) : window.appHostOnLoad = function() {
				document.dispatchEvent(t)
			}
		}, !1), document.addEventListener("appHostLoaded", function(t) {
			e()
		}, !1)
	}

	function l(e) {
		return typeof e == "function"
	}

	function c() {
		window.YixinJSBridge = window.WeixinJSBridge || window.YixinJSBridge;
		try {
			YixinJSBridge.on("menu:share:timeline", function(e) {
				YixinJSBridge.invoke("shareTimeline", {
					img_url: window.shareConfig.img,
					img_width: 55,
					img_height: 55,
					link: window.shareConfig.url,
					desc: window.shareConfig.desc,
					title: window.shareConfig.timeline_title ? window.shareConfig.timeline_title : window.shareConfig.title
				}, function() {
					try {
						l(window.shareConfig.callback) && window.shareConfig.callback()
					} catch(e) {}
				}, function() {})
			}), n ? YixinJSBridge.on("menu:share:weibo", function() {
				YixinJSBridge.invoke("shareWeibo", {
					url: l(window.shareConfig.url) ? window.shareConfig.url(2) : window.shareConfig.url,
					content: window.shareConfig.title + ":" + window.shareConfig.desc
				}, function() {
					try {
						l(window.shareConfig.callback) && window.shareConfig.callback()
					} catch(e) {}
				})
			}) : YixinJSBridge.on("menu:share:weibo", function() {
				YixinJSBridge.invoke("shareWeibo", {
					img_url: window.shareConfig.wbpic || window.shareConfig.img,
					img_width: 55,
					img_height: 55,
					url: l(window.shareConfig.url) ? window.shareConfig.url(2) : window.shareConfig.url,
					content: window.shareConfig.wContent
				}, function() {
					try {
						l(window.shareConfig.callback) && window.shareConfig.callback()
					} catch(e) {}
				})
			}), YixinJSBridge.on("menu:share:appmessage", function() {
				YixinJSBridge.invoke("sendAppMessage", {
					img_url: window.shareConfig.img,
					img_width: 55,
					img_height: 55,
					link: l(window.shareConfig.url) ? window.shareConfig.url(3) : window.shareConfig.url,
					desc: window.shareConfig.desc,
					title: window.shareConfig.title
				}, function() {
					try {
						l(window.shareConfig.callback) && window.shareConfig.callback()
					} catch(e) {}
				})
			}), l(window.shareConfig.readycallback) && window.shareConfig.readycallback()
		} catch(e) {}
	}
	var e = navigator.userAgent.toLowerCase(),
		t = /yanxuan/.test(e) ? 1 : /MoneyKeeper/.test(e) ? 2 : /MailMaster/.test(e) ? 4 : 5,
		n = /android/i.test(e);
	return t == 4 ? f(a) : t == 2 ? u() : t == 1 ? (!n && !window.noResetTitle && window.shareConfig && (window.shareConfig.title = document.title), window.onShareClick = function() {}, document.addEventListener("NEJsbridgeReady", i, !1)) : typeof window.WeixinJSBridge == "object" || typeof window.YixinJSBridge == "object" ? c() : document.addEventListener ? (document.addEventListener("WeixinJSBridgeReady", c, !1), document.addEventListener("YixinJSBridgeReady", c, !1)) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", c), document.attachEvent("YixinJSBridgeReady", c), document.attachEvent("onWeixinJSBridgeReady", c), document.attachEvent("onYixinJSBridgeReady", c)), {
		YXShareReset: i,
		shareOnMaster: a,
		shareOnYQ: u
	}
}();
window.PSC_C_API = $.extend(window.PSC_C_API || {}, _PSC_C_API)
