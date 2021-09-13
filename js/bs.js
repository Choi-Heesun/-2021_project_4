
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "열린책들" },
  headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
})
  .done(function (msg) {

    var boxs = document.getElementsByClassName('bs_box');

    for (var i = 0; i < boxs.length; i++) { //반복문 설정
      var title = (msg.documents[i].title).substring(0,8)

      $(".bs_box_1 >.bs_box > .box_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".bs_box_1 >.bs_box > .box_text").eq(i).append('<h5>' + '<a href="#">' + title + "…" + '</a>' + '</h5>');
      $(".bs_box_1 >.bs_box > .box_text").eq(i).append('<p>' + msg.documents[i].authors + '</p>')
    }

  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "길벗어린이" },
    headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
  })
    .done(function (msg) {
  
      var boxs = document.getElementsByClassName('bs_box');
  
      for (var i = 0; i < boxs.length; i++) { //반복문 설정
        var title = (msg.documents[i].title).substring(0,8)
  
        $(".bs_box_2 >.bs_box > .box_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".bs_box_2 >.bs_box > .box_text").eq(i).append('<h5>' + '<a href="#">' + title + "…" + '</a>' + '</h5>');
        $(".bs_box_2 >.bs_box > .box_text").eq(i).append('<p>' + msg.documents[i].authors + '</p>')
      }
  
    });

    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: " Penguin Classic" },
      headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
    })
      .done(function (msg) {
    
        var boxs = document.getElementsByClassName('bs_box');
    
        for (var i = 0; i < boxs.length; i++) { //반복문 설정
          var title = (msg.documents[i].title).substring(0,12)
    
          $(".bs_box_3 >.bs_box > .box_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(".bs_box_3 >.bs_box > .box_text").eq(i).append('<h5>' + '<a href="#">' + title + "…" + '</a>' + '</h5>');
          $(".bs_box_3 >.bs_box > .box_text").eq(i).append('<p>' + msg.documents[i].authors + '</p>')
        }
    
      });

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "e-book" },
        headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
      })
        .done(function (msg) {
      
          var boxs = document.getElementsByClassName('bs_box');
      
          for (var i = 0; i < boxs.length; i++) { //반복문 설정
            var title = (msg.documents[i].title).substring(0,8)
      
            $(".bs_box_4 >.bs_box > .box_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".bs_box_4 >.bs_box > .box_text").eq(i).append('<h5>' + '<a href="#">' + title + "…" + '</a>' + '</h5>');
            $(".bs_box_4 >.bs_box > .box_text").eq(i).append('<p>' + msg.documents[i].authors + '</p>')
          }
      
        });

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "오디오북" },
          headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
        })
          .done(function (msg) {
        
            var boxs = document.getElementsByClassName('bs_box');
        
            for (var i = 0; i < boxs.length; i++) { //반복문 설정
              var title = (msg.documents[i].title).substring(0,8)
        
              $(".bs_box_5 >.bs_box > .box_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
              $(".bs_box_5 >.bs_box > .box_text").eq(i).append('<h5>' + '<a href="#">' + title + "…" + '</a>' + '</h5>');
              $(".bs_box_5 >.bs_box > .box_text").eq(i).append('<p>' + msg.documents[i].authors + '</p>')
            }
        
          });


$(document).ready(function () {
  /*bestseller*/
  var i = 0;
  $(".bs_menu > li").mouseover(function(){
      i = ($(this).index())+1;
      $(".bs_box_wrap > li").hide();
      $(".bs_box_wrap > li:nth-child" + "(" + i + ")").stop().show();
  });

  /*bs_tab_menu*/
  var i = 0;
  $(".bs_tab_menu > li").mouseover(function () {
    i = ($(this).index()) + 1;
    $(".bs_tab_box > li").hide();
    $(".bs_tab_box > li:nth-child" + "(" + i + ")").stop().show()
  });

});