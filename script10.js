var data = {
    depts: [
        {
        name: 'Engineering',
        employees: [{firstName: "Christophe", lastName: "Coenraets"},
            {firstName: "John", lastName: "Smith"}]
        },
        {
        name: 'Engineering',
        employees: [{firstName: "Christophe", lastName: "Coenraets"},
            {firstName: "John", lastName: "Smith"}]
        }
    ]
};

var template = "{{#depts}} <h1>{{name}}</h1> <ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
var partials = {employee: "<li>{{firstName}} {{lastName}}</li>"};
var html = Mustache.to_html(template,data,partials);
$('#sampleArea').html(html);