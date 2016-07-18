$("#search").click(function(){
    var id="";
    var searchTerm=$("#searchTerm").val();
   var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchTerm+"&type=video&key=AIzaSyDmf4RZiQvzf-A7531Yt4L2HicWe3N_mF8&maxResults=10";
    
    $.get(url,function(data){
        var searchArray=data.items;
       var html="";
        html+='<table class="table table-bordered table-sm">';
        html+='<tr><th>Thumbnail</th><th>Title</th><th>Link</th></tr>';
        for(var j=0;j<searchArray.length;j++){
            console.log(searchArray[j].snippet.thumbnails.default.url);
        html += "<tr><td><img src='"+searchArray[j].snippet.thumbnails.default.url+"'</td>";
        html+="<td>"+searchArray[j].snippet.title+"</td>";
        html+="<td><a href='https://www.youtube.com/watch?v="+searchArray[j].id.videoId+"' target=\"_new\" class=\"btn btn-primary\">Play Video</a></td></tr>";
        }
        html+='</table>';

        
        
        $("#searchResults").html(html);
    });
});