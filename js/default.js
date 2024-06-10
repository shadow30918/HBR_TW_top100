let win_st = $(window).scrollTop();
let win_H = $(window).height();
let win_w = $(window).width();
let page_path = location.pathname;





$(function() {

    page_name = page_path.split(".")[0].split("/").pop()
    page_name = (page_name=="")?"index":page_name;
    $("nav .nav_item[caption='"+page_name+"']").addClass("active")

    $(".nav_item").hover(function(){
        origin_X = $(".nav_list").offset().left;
        this_X = $(this).offset().left;
        this_w = $(this).innerWidth();
        $(".underLine").css({"left":this_X-origin_X,"width":this_w})
    })

    $(".hem").click(function(){
        $(this).toggleClass("open")
    })

});

$(window).on('scroll', function(){
    
    win_st = $(window).scrollTop();
    win_H = $(window).height();
    
})

//resize
$(window).on('resize', function(){
    win_w = $(window).width()
    //console.log(win_w)
}).trigger('resize')



function close_privarite_popup() {
    $("#privarite_popup").addClass("close")
}