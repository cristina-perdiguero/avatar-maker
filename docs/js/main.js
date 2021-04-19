$("button").click(
    function(){
        let color = $(this).attr("data-color")
        $('.body').css('background-color', color)
    }
)