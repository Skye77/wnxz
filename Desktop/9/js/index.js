psc_frontend_errorLog = function() {
	var e = {
		listenError: function() {
			try {
				window.onerror = this.logError
			} catch(e) {}
		},
		logError: function() {
			var t, n, r, i, s, o = navigator.userAgent,
				u, a, f;
			try {
				arguments.length > 1 ? (t = arguments[0], i = arguments[1], n = arguments[2], r = arguments[3], s = arguments[4], a = {
					Msg: t,
					File: i,
					Line: n,
					Col: r,
					Stack: s,
					Type: "runtime",
					UA: o,
					Url: location.href
				}, e.uploadError(e.parseObjToUrl(a))) : (u = arguments[0].target ? arguments[0].target : arguments[0].srcElement, t = arguments[0], u !== window ? (a = {
					File: u.src.replace("http://", "").replace("https://", ""),
					Type: "loadtime",
					UA: o,
					Url: location.href
				}, u.src.search(/type=loadtime/i) == -1 && u.src.search(/type=runtime/i) == -1 && u.src.search("actStatistics/a.js") == -1 && e.uploadError(e.parseObjToUrl(a))) : window.onerror !== e.logError && (f = t.message, i = t.filename, n = t.lineno, r = t.colno, s = t.error ? t.error.stack : t.error, a = {
					Msg: f,
					File: i,
					Line: n,
					Col: r,
					Stack: s,
					Type: "runtime",
					UA: o,
					Url: location.href
				}, e.uploadError(e.parseObjToUrl(a))))
			} catch(l) {
				console.log(l)
			}
		},
		uploadError: function(e) {
			var t = document.createElement("img");
			t.setAttribute("style", "display:none;height:0;width:0"), t.style.cssText = "display:none;width:0;height:0", t.src = "//activity.mail.163.com/hdapi/api2/log/ajax/frontend/log.do?" + e, document.body.appendChild(t)
		},
		parseObjToUrl: function(e) {
			var t = "";
			if(typeof e == "object")
				for(var n in e) e.hasOwnProperty(n) && (t = t + n + "=" + e[n] + "&");
			return t
		}
	};
	return e
}(), psc_frontend_errorLog.listenError()