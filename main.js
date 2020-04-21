/*
Author: Anas Nasrallah.
Purpose: Just for fun.
Date: 21.04.20
*/

const showgif = function(keyWord){
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=xIYEL8u2Gs8Xe5XGTuJP7EnOQHtxX9EP&limit=5`);
    xhr.done(function(data) {
        let url = data.data[0].embed_url;
        $("#gifFrame").attr('src', url)
    });
}
 $('#search').on('click', function(){
    let keyWord = $('#input').val()
    showgif(keyWord)
    }
 )
 