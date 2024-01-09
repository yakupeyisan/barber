!(function (n) {
    "use strict";
    function o() {
        for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++)
            "nav-item dropdown active" === t[e].parentElement.getAttribute("class") && (t[e].parentElement.classList.remove("active"), t[e].nextElementSibling.classList.remove("show"));
    }
    function e(t) {
        let tCopy = document.getElementById(t);
        if (tCopy != undefined) {
            tCopy.checked = !0;
        }
    }
    function t() {
        document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || (console.log("pressed"), n("body").removeClass("fullscreen-enable"));
    }
    var a, d, r;
    n("#side-menu").metisMenu(),
        (a = document.body.getAttribute("data-sidebar-size")),
        n(window).on("load", function () {
            n(".switch").on("switch-change", function () {
                toggleWeather();
            }),
                1024 <= window.innerWidth && window.innerWidth <= 1366 && (document.body.setAttribute("data-sidebar-size", "sm"), e("sidebar-size-small"));
        }),
        n(".vertical-menu-btn").on("click", function (t) {
            t.preventDefault(),
                n("body").toggleClass("sidebar-enable"),
                992 <= n(window).width() &&
                    (null == a
                        ? null == document.body.getAttribute("data-sidebar-size") || "lg" == document.body.getAttribute("data-sidebar-size")
                            ? document.body.setAttribute("data-sidebar-size", "sm")
                            : document.body.setAttribute("data-sidebar-size", "lg")
                        : "md" == a
                        ? "md" == document.body.getAttribute("data-sidebar-size")
                            ? document.body.setAttribute("data-sidebar-size", "sm")
                            : document.body.setAttribute("data-sidebar-size", "md")
                        : "sm" == document.body.getAttribute("data-sidebar-size")
                        ? document.body.setAttribute("data-sidebar-size", "lg")
                        : document.body.setAttribute("data-sidebar-size", "sm"));
        }),
        n("#sidebar-menu a").each(function () {
            var t = window.location.href.split(/[?#]/)[0];
            this.href == t &&
                (n(this).addClass("active"),
                n(this).parent().addClass("mm-active"),
                n(this).parent().parent().addClass("mm-show"),
                n(this).parent().parent().prev().addClass("mm-active"),
                n(this).parent().parent().parent().addClass("mm-active"),
                n(this).parent().parent().parent().parent().addClass("mm-show"),
                n(this).parent().parent().parent().parent().parent().addClass("mm-active"));
        }),
        n(document).ready(function () {
            var t;
            0 < n("#sidebar-menu").length &&
                0 < n("#sidebar-menu .mm-active .active").length &&
                300 < (t = n("#sidebar-menu .mm-active .active").offset().top) &&
                ((t -= 300), n(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: t }, "slow"));
        }),
        n('[data-bs-toggle="fullscreen"]').on("click", function (t) {
            t.preventDefault(),
                n("body").toggleClass("fullscreen-enable"),
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
                    ? document.cancelFullScreen
                        ? document.cancelFullScreen()
                        : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
                    : document.documentElement.requestFullscreen
                    ? document.documentElement.requestFullscreen()
                    : document.documentElement.mozRequestFullScreen
                    ? document.documentElement.mozRequestFullScreen()
                    : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }),
        document.addEventListener("fullscreenchange", t),
        document.addEventListener("webkitfullscreenchange", t),
        document.addEventListener("mozfullscreenchange", t),
        n(".navbar-nav a").each(function () {
            var t = window.location.href.split(/[?#]/)[0];
            this.href == t &&
                (n(this).addClass("active"),
                n(this).parent().addClass("active"),
                n(this).parent().parent().addClass("active"),
                n(this).parent().parent().parent().addClass("active"),
                n(this).parent().parent().parent().parent().addClass("active"),
                n(this).parent().parent().parent().parent().parent().addClass("active"));
        }),
        n(".right-bar-toggle").on("click", function (t) {
            n("body").toggleClass("right-bar-enabled");
        }),
        n(document).on("click", "body", function (t) {
            0 < n(t.target).closest(".right-bar-toggle, .right-bar").length || n("body").removeClass("right-bar-enabled");
        }),
        (function () {
            if (document.getElementById("topnav-menu-content")) {
                for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++)
                    t[e].onclick = function (t) {
                        "#" === t.target.getAttribute("href") && (t.target.parentElement.classList.toggle("active"), t.target.nextElementSibling.classList.toggle("show"));
                    };
                window.addEventListener("resize", o);
            }
        })(),
        (function () {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (t) {
                return new bootstrap.Tooltip(t);
            }),
                [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (t) {
                    return new bootstrap.Popover(t);
                });
            var a = n(this).attr("data-delay") ? n(this).attr("data-delay") : 100,
                o = n(this).attr("data-time") ? n(this).attr("data-time") : 1200;
            n('[data-plugin="counterup"]').each(function (t, e) {
                n(this).counterUp({ delay: a, time: o });
            });
        })(),
        window.sessionStorage && ((d = sessionStorage.getItem("is_visited")) ? n("#" + d).prop("checked", !0) : sessionStorage.setItem("is_visited", "layout-ltr")),
        n(window).on("load", function () {
            n("#status").fadeOut(), n("#preloader").delay(350).fadeOut("slow");
        }),
        (r = document.getElementsByTagName("body")[0]),
        n("#mode-setting-btn").on("click", function (t) {
            r.hasAttribute("data-layout-mode") && "dark" == r.getAttribute("data-layout-mode")
                ? (document.body.setAttribute("data-layout-mode", "light"),
                  document.body.setAttribute("data-topbar", "light"),
                  document.body.setAttribute("data-sidebar", "light"),
                  (r.hasAttribute("data-layout") && "horizontal" == r.getAttribute("data-layout")) || document.body.setAttribute("data-sidebar", "light"),
                  e("topbar-color-light"),
                  e("sidebar-color-light"),
                  e("topbar-color-light"))
                : (document.body.setAttribute("data-layout-mode", "dark"),
                  document.body.setAttribute("data-topbar", "dark"),
                  document.body.setAttribute("data-sidebar", "dark"),
                  (r.hasAttribute("data-layout") && "horizontal" == r.getAttribute("data-layout")) || document.body.setAttribute("data-sidebar", "dark"),
                  e("layout-mode-dark"),
                  e("sidebar-color-dark"),
                  e("topbar-color-dark"));
        }),
        n(document).on("click", "body", function (t) {
            0 < n(t.target).closest(".right-bar-toggle, .right-bar").length || n("body").removeClass("right-bar-enabled");
        }),
        r.hasAttribute("data-layout") && "horizontal" == r.getAttribute("data-layout") ? (e("layout-horizontal"), n(".sidebar-setting").hide()) : e("layout-vertical"),
        r.hasAttribute("data-layout-mode") && "dark" == r.getAttribute("data-layout-mode") ? e("layout-mode-dark") : e("layout-mode-light"),
        r.hasAttribute("data-layout-size") && "boxed" == r.getAttribute("data-layout-size") ? e("layout-width-boxed") : e("layout-width-fuild"),
        r.hasAttribute("data-topbar") && "dark" == r.getAttribute("data-topbar") ? e("topbar-color-dark") : e("topbar-color-light"),
        r.hasAttribute("data-sidebar-size") && "sm" == r.getAttribute("data-sidebar-size")
            ? e("sidebar-size-small")
            : r.hasAttribute("data-sidebar-size") && "md" == r.getAttribute("data-sidebar-size")
            ? e("sidebar-size-compact")
            : e("sidebar-size-default"),
        r.hasAttribute("data-sidebar") && "colored" == r.getAttribute("data-sidebar")
            ? e("sidebar-color-colored")
            : r.hasAttribute("data-sidebar") && "dark" == r.getAttribute("data-sidebar")
            ? e("sidebar-color-dark")
            : e("sidebar-color-light"),
        document.getElementsByTagName("html")[0].hasAttribute("dir") && "rtl" == document.getElementsByTagName("html")[0].getAttribute("dir") ? e("layout-direction-rtl") : e("layout-direction-ltr"),
        n("input[name='layout']").on("change", function () {
            window.location.href = "vertical" == n(this).val() ? "index.html" : "layouts-horizontal.html";
        }),
        n("input[name='layout-mode']").on("change", function () {
            "light" == n(this).val()
                ? (document.body.setAttribute("data-layout-mode", "light"),
                  document.body.setAttribute("data-topbar", "light"),
                  document.body.setAttribute("data-sidebar", "light"),
                  (r.hasAttribute("data-layout") && "horizontal" == r.getAttribute("data-layout")) || document.body.setAttribute("data-sidebar", "light"),
                  e("topbar-color-light"),
                  e("sidebar-color-light"))
                : (document.body.setAttribute("data-layout-mode", "dark"),
                  document.body.setAttribute("data-topbar", "dark"),
                  document.body.setAttribute("data-sidebar", "dark"),
                  (r.hasAttribute("data-layout") && "horizontal" == r.getAttribute("data-layout")) || document.body.setAttribute("data-sidebar", "dark"),
                  e("topbar-color-dark"),
                  e("sidebar-color-dark"));
        }),
        n("input[name='layout-direction']").on("change", function () {
            "ltr" == n(this).val()
                ? (document.getElementsByTagName("html")[0].removeAttribute("dir"),
                  document.getElementById("bootstrap-style").setAttribute("href", "assets/admin/css/bootstrap.min.css"),
                  document.getElementById("app-style").setAttribute("href", "assets/admin/css/app.min.css"))
                : (document.getElementById("bootstrap-style").setAttribute("href", "assets/admin/css/bootstrap-rtl.min.css"),
                  document.getElementById("app-style").setAttribute("href", "assets/admin/css/app-rtl.min.css"),
                  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl"));
        }),
        Waves.init();
})(jQuery);
