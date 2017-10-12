(function() {
	var t = function(e) {
		var t = [],
			n = null;
		if(document.querySelectorAll) {
			n = document.querySelectorAll.call(document, e);
			for(var r in n) n.hasOwnProperty(r) && t.push(n[r])
		} else {
			n = document.getElementsByTagName("a");
			for(var r in n) n.hasOwnProperty(r) && n[r].nodeName == "A" && n[r].href && n[r].href.search("http://u.163.com/aos") !== -1 && t.push(n[r])
		}
		return t
	};
	window.localStorage && window.localStorage.getItem("yx_appchannel_type") && window.localStorage.getItem("yx_appchannel_type") == 1 && t('[href*="http://u.163.com/aos"]').forEach(function(e) {
		e.onclick = function() {
			return !1
		}
	})
})()