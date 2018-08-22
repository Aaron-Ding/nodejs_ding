var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine','ejs');
app.use('/asset',express.static('asset'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/',function(req,res){
    //res.sendFile(__dirname + '/views/index.html');
    res.render('index');
});
app.get('/contact',function(req,res){
    console.log(req.query);
    //.sendFile(__dirname + '/views/contact.html');
    res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('submit-success',{data:req.body});
});
app.get('/profile/:id',function(req,res){
    var data = {
        age:29,sex:'male',job:'engineer',hobbies:['game','sport','coding']
    };
    //res.send('you are viewing the profile of '+ req.params.id);
    res.render('profile',{person: req.params.id,data:data});
})
app.listen(3000);
console.log('3000 port listen');