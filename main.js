beforeLOAD();
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

function loade() {
    uname = localStorage.getItem('uname');
    document.getElementById("uname").innerHTML = uname;
}

function clearer() {
    if (confirm("确认退出吗?!") == true) {
        localStorage.clear();
        location.reload();
    } else {

    }
}
