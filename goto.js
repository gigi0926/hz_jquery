$("*").each(function (index, element) {
    $(this).click(function (e) { 
        var target = $(this).attr("date-gt-target");
        var duration = $(this).attr("date-gt-duration");
        var offset = $(this).attr("date-gt-offset");
        console.log("目標:"+ target);
        console.log("時間:"+ duration);
        console.log("位移:"+ offset);
    });
    
});