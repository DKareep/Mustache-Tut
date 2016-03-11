// we cannot make AJAX call to local resource as it uses HTTP

$.getJSON('data.json', function(data){
    "use strict";
    var template = $('#sampleScript').html();
    //console.log(template['context']);
    var html = Mustache.to_html(template,data);
    $('#sampleArea').html(html);
});