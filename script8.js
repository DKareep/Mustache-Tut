var product = {
    name: "Siva",
    price: 100,
    tax: 0.05,
    totalPrice: function() {
        "use strict";
        return this.price + this.price * this.tax;
    }
};

var template = "<p>Product name: {{name}}</p> Price: {{totalPrice}}";

var html = Mustache.to_html(template,product);

$('#sampleArea').html(html);