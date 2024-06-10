$(function(){

    $(document).ready(function(){
        $("#kv .kv_main, #kv .kv_content").addClass("active")
    })

    $(".filter_block >dt ._origin").click(function(){
        $(".filter_block").removeClass("open")
        $(this).parents(".filter_block").addClass("open")

        if($(window).width()>1039){
            $("body,html").animate({
                scrollTop: $(".filter_bar").offset().top - $("header").innerHeight()
            },500)
        }
    })

    $(".f_category>dt").click(function(){
        if($(this).parent(".f_category").hasClass("open")){
            $(this).parent(".f_category").removeClass("open")
        }else{
            $(".f_category").removeClass("open")
            $(this).parent(".f_category").addClass("open")
        }
    })

    $(".filter_block .close").click(function(){
        $(this).parents(".filter_block").removeClass("open")
    })

    $(".f_category input[type=radio]").change(function(){
        type = $(this).attr("name")
        $(".f_caption[type="+type+"]").html($(this).val())
    })
    
})


$(window).on('scroll', function(){

    if(win_st > win_H/2){
        $("header").addClass("scroll")
    }else{
        $("header").removeClass("scroll")
    }
    
})

function filter_reset(){
    $("input[name=search_leader]").val("")
    $(".f_category .list:not(.years) input:checked").prop("checked",false)
    $(".f_category .f_caption").each(function(){
        this_origin = $(this).attr("origin")
        $(this).html(this_origin)
    })
}


