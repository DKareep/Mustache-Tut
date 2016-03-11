var data = {
    employees : [
        { firstName: 'Christopher',
          lastName: 'Walken',
           fullTime: true,
           phone: '0487 - 272643'
        },
        { firstName: 'Sam',
          lastName: 'Hit',
           fullTime: false,
           phone: '0487 - 272643'
        },
        { firstName: 'Boomer',
          lastName: 'Man',
           fullTime: true,
           phone: '0487 - 272643'
        }
    ]
};

var template = "Employee: <ul>{{#employees}} <li>{{firstName}} {{lastName}} {{#fullTime}}{{phone}}{{/fullTime}}</li>{{/employees}}</ul>";

var html = Mustache.to_html(template,data);
$('#sampleArea').html(html);