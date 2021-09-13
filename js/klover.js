$.ajax({
    url : "./json/klover.json",
    dataType : "json",
    success : function(data){
        if(data.length > 0) {
            for(var i in data){
                var url = data[i].url;
                var part = data[i].part;
                var title = data[i].title;
                var author = data[i].author;
                var klover = data[i].klover;
                var rank = data[i].rank;

                $(".klover_contents_2 > li > .book_box")
                .eq(i)
                .append('<a href="#"><img src="img/' + data[i].url + '"/></a>')
               
                $(".klover_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<p class="book_part">'+ data[i].part +'</p>')

                $(".klover_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<h2 class="book_title"><a href="#">'+ data[i].title +'</a><h2>')
            

                $(".klover_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<p class="book_author">'+ data[i].author + '</p>')

                $(".klover_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<span class="klover"><img src="img/'+ data[i].klover +'"/></span>')

                $(".klover_contents_2 > li > .book_info_2")
                .eq(i)
                .append('<span class="rank">'+ data[i].rank +'</span>')
            }
        }
    }
});