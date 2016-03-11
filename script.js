var person = {
    firstName: 'Faizan',
    lastName: 'Mohammad',
    blogURL: 'http://themeforest.net'
};

var template = "<h1>{{firstName}} {{lastName}}</h1><h2>Blog: {{blogURL}}</h2>";
var html = Mustache.to_html(template,person);
$('#sampleArea').html(html);


