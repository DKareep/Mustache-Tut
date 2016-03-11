// we cannot make AJAX call to local resource as it uses HTTP

$.getJSON('data.json', function(data){
    "use strict";
    var template = "<h1>{{firstName}} {{lastName}}</h1><h2>Blog: {{blogURL}}</h2>";
    var html = Mustache.to_html(template,data);
    $('#sampleArea').html(html);
});