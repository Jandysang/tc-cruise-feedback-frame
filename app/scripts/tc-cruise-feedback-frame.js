//同程前台意见反馈收集框脚本

$("#tc-cff-wrapper .panel").dialog({
    modal: true,
    width: 680,
    height: 460,
    resizable: false,
    appendTo: $("#tc-cff-wrapper")
});

$("#tc-cff-wrapper #tc-cff-wait .btn").on("click", function() {
    var $this = $(this);
    $($("<iframe>").attr("src", "http://tcservice.17usoft.com/youlun/tinywork/Comments/CommentsSubmit?usid=15517&roleType=3&commType=2&taskId=23117"))
        .dialog({
            modal: true,
            width: 740,
            height: 460,
            resizable: false,
            appendTo: $("#tc-cff-wrapper")
        })
});
$(document).ready(function() {
    $('#fix-right-ctrl').addClass('show');
    $('#fix-right').addClass('show');
    setTimeout(function() {
        if ($('#fix-right-ctrl').hasClass('show')) {
            $('#fix-right-ctrl').removeClass('show');
            $('#fix-right').removeClass('show');
        }
    }, 2000);
});


$('#fix-right-ctrl').on('click', function() {
    if (!$(this).hasClass('show')) {
        $(this).addClass('show');
        $('#fix-right').addClass('show');
    } else {
        $(this).removeClass('show');
        $('#fix-right').removeClass('show');
    }
});
