$(function () {
    $.ajaxPrefilter(function (opctions) {
        opctions.url="http://ajax.frontend.itheima.net"+opctions.url
    })
})