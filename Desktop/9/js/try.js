(function() {
	try {
		if(window.$ == window.jQuery || window.$ == window.Zepto) {
			data = {
				content: {
					online: 1
				}
			};
			try {
				typeof data == "string" ? data = JSON.parse(data) : data = data;
				if(data.content && (data.content.online == 0 || data.content.online == 1)) {
					var e = new RegExp("(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)", "i"),
						t = $("[data-psc-stat]");
					t.on("click", function() {
						"use strict";
						var e = $(this).attr("data-psc-stat");
						$.getJSON("//stat.mail.163.com/actStatistics/a.js?callback=?", {
							activity: window.psc_act_id,
							key: e,
							type: r(),
							rid: (new Date).getTime()
						}, function() {}), n({
							module: "front_third",
							topic: "act_jump",
							detail: '{"msg":"","sign":"' + e + '"}'
						})
					}), $("body").on("click", function() {
						var e = $("body");
						e.attr("data-hasclicked") != 1 && ($.getJSON("//stat.mail.163.com/actStatistics/a.js?callback=?", {
							activity: window.psc_act_id,
							key: "firstClick",
							type: r(),
							rid: (new Date).getTime()
						}, function() {}), e.attr("data-hasclicked", 1))
					});

					function n(e) {
						$.getJSON("//act.you.163.com/stat/trace?callback=?", $.extend({
							actId: window.psc_act_id || "",
							module: "",
							topic: "",
							detail: ""
						}, e))
					}

					function r() {
						"use strict";
						var t = navigator.userAgent;
						if(!(/yanxuan/i.test(t) || /MailMaster/i.test(t) || /MoneyKeeper/i.test(t) || /duobao/i.test(t))) return /MicroMessenger/i.test(t) ? 3 : /YiXin/i.test(t) ? 4 : /Trident/i.test(t) || /Presto/i.test(t) || /AppleWebKit/i.test(t) || /Gecko/i.test(t) ? e.test(t) ? 2 : 0 : e.test(t) ? 2 : 0;
						if(/android/i.test(t)) return 6;
						if(/(iPhone|iPad|iPod|iOS)/i.test(t)) return 5
					}
					$("body").append('<img style = "display: block;overflow: hidden;width: 0;height: 0" src = "//stat.mail.163.com/actStatistics/a.js?key=indexPage&activity=' + window.psc_act_id + "&type=" + r() + "&rid=" + (new Date).getTime() + '">')
				}
			} catch(i) {}
		}
	} catch(i) {}
})()