$.ajax({
    url : "./json/click.json",
    dataType : "json",
    success : function(data){
        if(data.length > 0) {
            for(var i in data){
                var url = data[i].url;
                var part = data[i].part;
                var title = data[i].title;
                var author = data[i].author; 

                $(".click_contents_2 > li > .book_box")
                .eq(i)
                .append('<a href="#"><img src="img/click_contents_img/' + data[i].url + '"/></a>')
               
                $(".click_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<p class="book_part">'+ data[i].part +'</p>')

                $(".click_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<h2 class="book_title"><a href="#">'+ data[i].title +'</a><h2>')
            

                $(".click_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<p class="book_author">'+ data[i].author + '</p>')
            }
        }
    }
});