$(function () {
    $.ajaxPrefilter(function (opctions) {
        opctions.url="http://ajax.frontend.itheima.net"+opctions.url
        if (opctions.url.indexOf("/my/") != -1){
            opctions.headers = {"Authorization":localStorage.getItem("token"||"")};
        }
    })
})