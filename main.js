beforeLOAD();
var languagee;
var uname;

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
        window.location = "./login.html";
    }
}

function loadee() {
    uname = localStorage.getItem('uname');
    document.getElementById("uname").innerHTML = uname;
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
    }
    if (languagee == "CN") {
        document.getElementById("language").innerHTML = "中文";
        localStorage.setItem("languagee", "EN");
    }
    languagechenge();
}
