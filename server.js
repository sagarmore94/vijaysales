
var express=require('express');
var app=express();

app.get("/",(req, res)=>{

    res.send(
        "<h1>Vijay sales </h1>"
        +"<hr/>"
        +"<h3>Smart Device for sale</h3>"
        + "<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Holol graphic Devices</li>"
        +"<li>Smart Watches</li>"
        +"<li>Gaming Consoles</li>"
        +"</ol>"
    );
}); 

app.get("/aboutus",(req, res)=>{

    res.send(
        "<h1>Vijay sales </h1>"
        +"<hr/>"
        +"<h3>Doing things extra ordinary</h3>"
        + "<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Holol graphic Devices</li>"
        +"<li>Smart Watches</li>"
        +"<li>Gaming Consoles</li>"
        +"</ol>"
    );
}); 
    
var server=app.listen(9000);
console.log("Vijay sales Online Shopping running on port 9000");