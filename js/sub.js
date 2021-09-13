$(document).ready(function(){

    /*subMap : 서브 네비게이션*/
    /*subMap : 서브 네비게이션*/
    $(".subMap_main > li").mouseover(function(){
        $(this).children(".subMap_sub").stop().show();
    }).mouseout(function(){
        $(this).children(".subMap_sub").stop().hide();
    });

     /*popup*/
     /*popup*/

    $(".bookInfo_left > .book_imgbox").click(function(){
        $(".popup_bg").show();
        $(".bookimg_popup").show();
    });

    $(".bookInfo_left > .bookimg_popup_btn").click(function(){
        $(".popup_bg").show();
        $(".bookimg_popup").show();
    });

    $(".shoparea_btn").click(function(){
        $(".shoparea_popup").show();
    });

    $(".keyword_box > h3 > span").click(function(){
        $(".keyword_popup").show();
    });

     $(".x_icon").click(function(){
         $(".bookimg_popup").hide();
         $(".popup_bg").hide();
         $(".shoparea_popup").hide();
         $(".keyword_popup").hide();
         $(".Klover_popup").hide();
     });

     $(".popup_bg").click(function(){
        $(this).hide();
        $(".bookimg_popup").hide();
    });

    $(".klover_popup_mouseover > i").mouseover(function(){
        $(this).css("cursor","pointer");
        $(".Klover_popup").show();
    });

    $(".Klover_popup").mouseout(function(){
        $(this).hide();
    });


    /*주문수량 올리기*/
    /*value 사용자 지정값에서는 안올라감 오류오류*/
    var order_num =  $(".order_info > p > input").val()

    $(".order_plus").click(function(){
        order_num++;
       $(".order_info > p > input").val(order_num)
    });

    $(".order_minus").click(function(){
        order_num--;
        if(order_num < 1){
            order_num = 1;
        }
       $(".order_info > p > input").val(order_num)
    });

    /*클로버 리뷰쓰기 btn*/
    $(".klover_btn").click(function(){
        alert("로그인 후 작성 가능합니다.")
    });

});