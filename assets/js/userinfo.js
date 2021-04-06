$(function () {
    formRule();
    getUserInfo();
    $(".layui-form").on("submit",function (e) {
        e.preventDefault();
        updateUserinfo();
    })
    $("#btn-reset").on("click",function (e) {
        e.preventDefault();
        getUserInfo();
    })
})
function formRule() {
    var form = layui.form;
    form.verify({
        nickname:function (value) {
            if (value.length<6){
                return "最少整6个字符"
            }
        }
    })
}
function getUserInfo() {
    var form = layui.form;
    var layer = layui.layer;
    $.ajax({
        method:"GET",
        url:"/my/userinfo",
        success:function (res) {
           if (res.status!=0){
               return layer.msg("获取信息失败")
           }
           form.val("userinfoForm",res.data)
            console.log(res);
        }
    })
}
function updateUserinfo() {
    console.log($(".layui-form").serialize());
    var layer = layui.layer;
    $.ajax({
        method:"POST",
        url:"/my/userinfo",
        data:$(".layui-form").serialize(),
        success:function (res) {
            console.log(res);
            if (res.status !=0){
                return layer.msg("修改失败");
            }
            layer.msg("修改成功");
            window.parent.getUserInfo();
        }
    })
}