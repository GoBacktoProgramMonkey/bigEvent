$(function () {
    $("#link-reg").on("click",function () {
        $("#log-box").hide();
        $("#reg-box").show()
    })
    $("#link-log").on("click",function () {
        $("#reg-box").hide();
        $("#log-box").show()
    })
})