$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "지적인" },
    headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_contents');

        for (var i = 0; i < boxs.length; i++) { //반복문 설정
            var title = (msg.documents[i].title).substring(0, 10)

            $(".best_contents > a").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".best_contents > h5").eq(i).append('<a href="#">' + title + "…" + '</a>');
            $(".best_contents > p > .gray").eq(i).append(msg.documents[i].authors);
            $(".best_contents > p > .red").eq(i).append("<b>" + msg.documents[i].price + "</b>" + "원");
        }

    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "생각을" },
    headers: { Authorization: "KakaoAK 51cbf35d87c9ca646df12f9b303ddee1" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('best_contents');

        for (var i = 0; i < boxs.length; i++) { //반복문 설정
            var title = (msg.documents[i].title).substring(0, 10)

            $(".new_contents > a").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".new_contents > h5").eq(i).append('<a href="#">' + title + "…" + '</a>');
            $(".new_contents > p > .gray").eq(i).append(msg.documents[i].authors);
            $(".new_contents > p > .red").eq(i).append("<b>" + msg.documents[i].price + "</b>" + "원");
        }

    });