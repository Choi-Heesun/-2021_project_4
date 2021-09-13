$.ajax({
    url : "./json/storyk.json",
    dataType : "json",
    success : function(data){
        if(data.length > 0) {
            for(var i in data){

            var url = data[i].url;
            var part = data[i].part;
            var title = data[i].title;
            var sub = data[i].sub;

            $(".storyk_box_wrap > .storyk_box > .book_info_2").eq(i).append('<h2 class="book_title"><a href="#">' + data[i].title + '</a></h2>')
            
            }
        }
    }
});