beforeLOAD();
var languagee;
var uname;
var time_w;
var pagee;

//侧导航栏颜色变化
function overr(x) {
    x.style.backgroundColor = "rgb(119, 146, 255)";
}

function leaver(x) {
    x.style.backgroundColor = "rgb(67, 105, 255)";
}

function beforeLOAD() {
    //用户登录验证
    if (localStorage.getItem('cemail') == null || localStorage.getItem('userpass') == null || localStorage.getItem('cemail') == "" || localStorage.getItem('userpass') == "") {
        if (pagee != "no") {
            window.location = "./login.html";

        }
    }
}

function loadee() {
    if (pagee == "no") {} else {
        uname = localStorage.getItem('uname');
        document.getElementById("uname").innerHTML = uname;
    }
    languagee = localStorage.getItem("languagee");
    try {
        if (languagee == "EN") {
            document.getElementById("language").innerHTML = "中文";
        }
        if (languagee == "CN") {
            document.getElementById("language").innerHTML = "English";
        }
    } catch (error) {}
    document.getElementById("inform").hidden = true;
    languagechenge();
}

function clearer() {
    if (confirm("确认退出吗?!") == true) {
        localStorage.clear();
        location.reload();
    } else {

    }
}

function language() {
    languagee = localStorage.getItem("languagee");
    if (languagee == null) {
        localStorage.setItem("languagee", "EN");
    }
    if (languagee == "EN") {
        document.getElementById("language").innerHTML = "English";
        localStorage.setItem("languagee", "CN");
        inform("语言更改为中文", 4000);
    }
    if (languagee == "CN") {
        document.getElementById("language").innerHTML = "中文";
        localStorage.setItem("languagee", "EN");
        inform("Language changed to English", 4000);
    }
    languagechenge();
}

function inform(text, time) {
    if (document.getElementById("inform_in").innerHTML == "" || document.getElementById("inform_in").innerHTML == null) {
        time_w = time;
        in_te = text;
        document.getElementById("inform").hidden = false;
        document.getElementById("inform_in").innerHTML = text;
        setTimeout(function() {
            document.getElementById("inform_in").innerHTML = "";
            document.getElementById("inform").hidden = true;
        }, time);
    } else {
        if (in_te != text) {
            setTimeout(function() {
                inform(text, time);
            }, time_w);
        }
        time_w = time;
        in_te = text;
    }
}
