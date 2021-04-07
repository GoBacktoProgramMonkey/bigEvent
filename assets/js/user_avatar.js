$(function () {
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)
    $("#file").hide()
    $("#chooseAvatar").on("click",function () {
        $("#file").click();

    })
    $("#file").on("change",function (e) {
        var file = e.target.files[0];
        var newImgURL = URL.createObjectURL(file);
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)
    })
    $("#uoloadAvatar").on("click",function () {
        var layer = layui.layer;
        var dataURL = $image
            .cropper('getCroppedCanvas', {
                width: 100,
                height: 100
            })
            .toDataURL('image/png');
        $.ajax({
            method:"POST",
            url:"/my/update/avatar",
            data:{avatar:dataURL},
            success:function (res) {
                if (res.status != 0){
                    return layer.msg("头像上传失败");
                }
                window.parent.getUserInfo();
            }
        })
    })
})