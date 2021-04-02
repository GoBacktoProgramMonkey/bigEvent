$(function () {
    $("#link-reg").on("click",function () {
        $("#log-box").hide();
        $("#reg-box").show()
    })
    $("#link-log").on("click",function () {
        $("#reg-box").hide();
        $("#log-box").show()
    })

    var form = layui.form;
    form.verify({
        pwd:[/^[\S]{6,12}$/,"密码格式错误"],
        repwd:function (value) {
            if (value!=$("#pwd").val()){
                return "两次密码不同";
            }
        }
    })

    $("#form-log").on("submit",function (e) {
        e.preventDefault();
        var un =$("#form-log [name='username']").val();
        var pw =$("#form-log [name='password']").val();
        $.ajax({
            method:"POST",
            url:"/api/login",
            data:{username:un,password:pw},
            success:function (res) {
                if (res.status === 0){
                    layer.msg("登录成功");
                    localStorage.setItem("token",res.token);
                    location.href="index.html"
                }else{
                    layer.msg(res.message)
                }
            }
        })
    })
    $("#form-reg").on("submit",function (e) {
        e.preventDefault();
        var un =$("#form-reg [name='username']").val()
        var pw =$("#form-reg [name='password']").val()
        $.ajax({
            method:"POST",
            url:"/api/reguser",
            data: {
                username:un,
                password:pw
            },
            success:function (res) {
                if (res.status === 0){
                    layer.msg("注册成功")
                    $("#reg-box").hide();
                    $("#log-box").show()
                }else{
                    layer.msg(res.message)
                }
            }
        })
    })


})