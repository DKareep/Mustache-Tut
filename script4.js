var data = {name : 'Faiz', skills: ['js','python','selenium']};
var tmp = "{{name}} <br/> skills : <ul>{{#skills}} <li>{{.}}</li> {{/skills}}</ul>";
var html = Mustache.to_html(tmp,data);
$('#sampleArea').html(html);