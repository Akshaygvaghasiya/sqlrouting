var express = require('express')

var App = express();
App.get('/', function(req,res){
    res.send("Function is call");
});

App.get('/second/:name', function(req,res){
    var p = req.params.name;
    res.send("second function is call"+p);
});

App.get('/second1',function(req,res){
    var p = req.query.demo;

    res.send("third function is call" +p);
})

App.listen(3000);