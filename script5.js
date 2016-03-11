var data = {
    employees : [
        { firstname : 'Farhan',
          lastname : 'Anwar'
        },
        { firstname : 'Farhan',
          lastname : 'Anwar'
        }
    ]
};

//var template = 'Employees: <ul> {{#employees}} <li>{{.}}</li> {{ /employees}} </ul>';
// this will return objects [object Object]
var template = 'Employees: <ul> {{#employees}} <li>{{firstname}} {{lastname}}</li> {{ /employees}} </ul>';
var html = Mustache.to_html(template,data);
$('#sampleArea').html(html);


