$(function () {
    getUserInfo()
    var layer = layui.layer;
    $("#btnLogOut").on("click",function () {
        layer.confirm('是否确定推出', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem("token")
            location.href="../../login.html"
            layer.close(index);
        });
    })
})
function getUserInfo() {
    $.ajax({
        method:"GET",
        url:"/my/userinfo",
        success:function (res) {
            setTextAvatar(res.data);
        }
    })
}
function setTextAvatar(data) {
    var avatar ="";
    if (data.user_pic==null){
        $(".layui-nav-img").hide();
        $(".text-avatar").html(data.username[0]);
        console.log(data.username.split(0,1));
    }else{
        $(".layui-nav-img").attr("src",data.user_pic);
        $(".text-avatar").hide();
    }
}