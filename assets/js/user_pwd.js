$(function () {
    pwdRule();
    $(".layui-form").submit(function (e) {
        e.preventDefault();
        changePwd();
    })
})
function pwdRule() {
    var form = layui.form;
    form.verify({
        pwd:function (value) {
            if (value.length<6){
                return "密码长度不能小于6";
            }
        },
        rePwd:function (value) {
            console.log($("#pwd").val())
            console.log(value)
            if ($("#pwd").val() != value){
                return  "两次密码不同";
            }
        },
        samePwd:function (value) {
            console.log($("[name='oldPwd']").val())
            if ($("[name='oldPwd']").val() == value){
                return "两次密码不能相同";
            }
        }
    })
}
function changePwd() {
    var layer = layui.layer;
    $.ajax({
        method:"POST",
        url:"/my/updatepwd",
        data:$(".layui-form").serialize(),
        success:function (res) {
            if (res.status != 0){
                console.log(res)
                return layer.msg("密码修改失败");
            }
            layer.msg("密码修改成功");
            $(".layui-form")[0].reset();
        }
    })
}