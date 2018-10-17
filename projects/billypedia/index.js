/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
 $('#section-bio').css({ 'color': 'green', 'padding': '5px',});
        $('#section-quotes').css({'color': 'green'});
      
       
       //TODO 4 list of top rated
        let topRated = data.discography.topRated;
        _.map(topRated, function (recording) {

            return $('#list-top-rated').append('<li class="recording top-rated" id='+recording.art+'><span class="title">title: '+recording.title+'</span><br /><span>artist: '+recording.artist+'<span><br /><span>release: '+recording.release+'<span><br /><span>year: '+recording.year+'</span><br /><br /></li>')

        })


        //TODO 5 Populate the General Recordings List
        var $newSection = $('<section id="section-recordings" class="recordings">');
        var $heading = $('<h2>Recordings</h2>');
        var $ul = $('<ul id="list-recordings" class="list-recordings">')
        var newNew = $($newSection).append($ul);
        $('#sidebar').append(newNew);
        let recordings = data.discography.recordings;


       _.map(recordings, function(recording){
           return $($ul).append($('<li class="recording" id='+recording.art+'><div class="title">title: ' + recording.title + '</div><div class="artist">artist: ' + recording.artist + '<div><div class="release">release: ' + recording.release + '<div><div class="year">year: ' + recording.year +'</div><br /></li>'))
        })

        //TODO 6
        $('#section-top-rated').prepend('<div id="image-container-top-rated"><img src='+topRated[0].art+' class="image" /></div>');
        $($newSection).prepend('<div id="image-container-recording"><img src='+recordings[0].art+' class="image" /></div>');
          

        
        //TODO 7 Dynamically Swap Billy Images
        var billyImage = data.images.billy;

        $('#image-billy').on('click', function(){
            if (billyImage[0] === $('#image-billy').attr('src')){
                $('#image-billy').attr('src', billyImage[1]);
             }else if (billyImage[1] === $('#image-billy').attr('src')){
                $('#image-billy').attr('src', billyImage[2]);
            } else if (billyImage[2] === $('#image-billy').attr('src')) {
                $('#image-billy').attr('src', billyImage[3]);
            } else if (billyImage[3] === $('#image-billy').attr('src')) {
                $('#image-billy').attr('src', billyImage[0]);
            }
        })


        //TODO 8 : Dynamically Swap Recording Images

        $('li').on('click', function(){
            $(this).closest('.list-recordings').closest('.recordings')
            .find('img').attr('src', this.id);

        })

        
        //TODO 9 Build a Table using jQuery
        var rider = data.rider;

       var createTable = function(entry){
           var createRow = function(val){
               var $row = $("<tr>");
               var $type = $("<td>").text(val.type);
               var $desc = $("<td>").text(val.desc);
               $row.append($type, $desc);
               return $row
           }
           var $table = $("<table>");
           var $rows = entry.map(createRow);
           $table.append($rows);
           return $table;
       }
       
       createTable(rider).appendTo('#sections');
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
