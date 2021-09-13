$(document).ready(function(){

    /*popup_ad:close*/
    $(".close").click(function(){
        $("#popup_ad_wrap").slideUp();
    });


    /*m_slider2_btn*/
    var i = 0;

    $(".m_slider2_btn > li").mouseover(function(){
        i = ($(this).index())+1;
        $(".m_slider2_box > li").hide();
        $(".m_slider2_box > li:nth-child" + "(" + i + ")").stop().show();

        var bg = $(".m_slider2_box > li:nth-child" + "(" + i + ")").css("background-color");
        $("#main_contents_wrap").css({"background-color":bg})

    });

    /*m_slider3_btn*/
    var i = 0;

    $(".m_slider3_btn > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".m_slider3_box > li").hide();
        $(".m_slider3_box > li:nth-child" + "(" + i + ")").stop().show();
    });

    /*m_slider4_btn*/
    var i = 0;

    $(".m_slider4_btn > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".m_slider4_box > li").hide();
        $(".m_slider4_box > li:nth-child" + "(" + i + ")").stop().show();
    });

    /*m_slider5_btn*/
    var i = 0;

    $(".m_slider5_btn > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".m_slider5_box > li").hide();
        $(".m_slider5_box > li:nth-child" + "(" + i + ")").stop().show();
    });

    /*m_slider6_btn*/
    var i = 0;

    $(".m_slider6_btn > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".m_slider6_box > li").hide();
        $(".m_slider6_box > li:nth-child" + "(" + i + ")").stop().show();
    });

    /*m_slider7_btn*/
    var i = 0;

    $(".m_slider7_btn > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".m_slider7_box > li").hide();
        $(".m_slider7_box > li:nth-child" + "(" + i + ")").stop().show();
    });

    /*main_slider_menu*/
    var i = 0;
    
    $(".main_slider_menu > li").mouseover(function(){
        i = ($(this).index())+1;

        $(".main_slider > li").hide();
        $(".main_slider > li:nth-child" + "(" + i + ")" ).stop().show();

        var bg = $(".m_slider" + i + "_box > li").css("background-color");
        $("#main_contents_wrap").css({"background-color":bg})
    });

    /*mainslider_auto*/

    // var i=0;
        
    // 	function mainSlide(){
    //     	i++;
    //         if(i > $(".main_slider >  li:last").index()){
    //         	i=0
    //         }
            
    //         $(".main_slider >  li").eq(i).stop().fadeIn();
    //         $(".main_slider >  li").eq(i-1).stop().fadeOut();

    //         var j = 0
    //         j = ($(".main_slider_menu > li").index())+1;
    //         var bg = $(".m_slider" + j + "_box > li").css("background-color");
    //         $("#main_contents_wrap").css({"background-color":bg})

    //     }
        
    //     setInterval(mainSlide,3000)

    /*오늘의 책*/
    var i = 0;

    $(".todaybook_menu > li").mouseover (function(){
        i = ($(this).index())+1;
        $(".today_book_1_slide > li").hide();
        $(".today_book_1_slide > li:nth-child" + "(" + i + ")").stop().show();
    });


    /*only*/
    var i = 0

    $(".only_next").click(function(){
        i++
        if(i > $(".only_slide > li:last").index()+1) {
            i = $(".only_slide > li:first").index()+1;
        }

        $(".only_slide > li").hide();
        $(".only_slide > li:nth-child" + "(" + i + ")").show();
                
    });

    $(".only_prev").click(function(){
        i--
        if(i < $(".only_slide > li:first").index()+1) {
            i = $(".only_slide > li:last").index()+1;
        }

        $(".only_slide > li").hide();
        $(".only_slide > li:nth-child" + "(" + i + ")").show();
                
    });

    /*핫템 - hot_items*/

        $(".hot_prev").click(function(){
            $(".hottems_slide > li:last").prependTo(".hottems_slide");
            $(".hottems_slide").css({marginLeft:-895});
            $(".hottems_slide").stop().animate({marginLeft:0},800)
        });

        $(".hot_next").click(function(){
            $(".hottems_slide").stop().animate({marginLeft:-895},1000,function(){
                $(".hottems_slide > li:first").appendTo(".hottems_slide");
                $(".hottems_slide").css({marginLeft:0})
            });
        });

        function hotSlide(){
            $(".hottems_slide").stop().animate({marginLeft:-895},1000,function(){
                $(".hottems_slide > li:first").appendTo(".hottems_slide");
                $(".hottems_slide").css({marginLeft:0})
            });
        };

        setInterval(hotSlide, 3000)

    /*이럴땐 이런책 : lifebook*/
     
    $(".life_next").click(function(){
        $(".lifebook_slider").stop().show(function(){
            $(".lifebook_slider > li:first").appendTo(".lifebook_slider");
            $(".lifebook_slider").css({marginLeft:0})
        });
    });

    $(".life_prev").click(function(){
        $(".lifebook_slider").stop().show(function(){
            $(".lifebook_slider > li:last").prependTo(".lifebook_slider");
            $(".lifebook_slider").css({marginLeft:0})
        });
    });

    /*newBook_imgbx*/
    var i = 0;

    $(".newbooks_menu > li").mouseover (function(){
        i = ($(this).index())+1;
        $(".newbooks_slide").hide();
        $(".newbooks_slide:nth-child" + "(" + i + ")").stop().show();
    });

    /*recBook_imgbx*/

    $(".recBook_contents > li").hover(function(){
        $(this).children(".hover_recBook").fadeIn(300)
    },function(){
        $(this).children(".hover_recBook").fadeOut(0)
    })
    

    /*감성메이커*/
    var i = 0;
    $(".circle_btn_wrap > li").mouseover(function(){
        i = ($(this).index())+1;
        $(".maker_contents").hide();
        $(".maker_contents:nth-of-type" + "(" + i+ ")").stop().fadeIn()
    });


});