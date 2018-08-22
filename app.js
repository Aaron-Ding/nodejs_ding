var express = require('express');

var app = express();
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html');
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