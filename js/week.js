$.ajax({
    url : "./json/week.json",
    dataType : "json",
    success : function(data) {
        if(data){
            for(var i in data){
                var url = data[i].url;
                var intro = data[i].intro;
                var title = data[i].title;

                $(".week_book").eq(i).append('<a href="#">' + '<img src="' + 'img/week_contents_img/' + data[i].url + '">' + '</a>');
                $(".week_contents_box > li > .book_info_2").eq(i).append('<h2 class="book_title"><a href="#">' + data[i].intro + '</a></h2>');
                $(".week_contents_box > li > .book_info_2").eq(i).append('<p class="book_author">' + data[i].title + '</p>');

            }
        }
    }
});