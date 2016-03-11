var person = {
    firstName : 'Muneer',
    lastName: 'Ikka',
    blogURL : 'www.google.com',
    languages: {
        backend: 'java',
        frontend: 'js'
    }
};

var template = "<h1>{{firstName}} {{lastName}}</h1> <a href='{{blogURl}}'>{{blogURL}}</a> <br/> Languages <br/> Backend : {{languages.backend}} <br/> FrontEnd: {{languages.frontend}}";
var html = Mustache.to_html(template,person);
$('#sampleArea').html(html);