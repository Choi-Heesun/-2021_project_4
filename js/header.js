$(document).ready(function(){
        /*top_info*/
        $(".top_info1 > li").mouseenter(function(){
            $(".top_info1 > li > ul").stop().hide();
            $(this).children("ul").stop().show();
        });
    
        $(".top_info1").mouseleave(function(){
            $(".top_info1 > li > ul").stop().hide();
        });
    
        /*nav*/
        $(".menu_left_ham").mouseenter(function(){
            $("#nav_wrap > ul:nth-child(1)").hide();
            $("#nav_wrap > ul:nth-child(2)").stop().show();
        });
    
        $("#nav_wrap > ul:nth-child(2)").mouseleave(function(){
            $("#nav_wrap > ul:nth-child(2)").stop().hide();
            $("#nav_wrap > ul:nth-child(1)").stop().show();
        });
    
       /*toggle*/
       $(".toggle_a").click(function(){
           $(this).css({opacity:"0"})
           $(".toggle_b").fadeIn();
       });
    
       $(".toggle_b > .tri_ancle").click(function(){
        $(".toggle_b").hide();
        $(".toggle_a").css({opacity:"1"})
        
    });
});