var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));
var database = require('./database.json');
// Don't change anything above this line unless you know what it will do


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users/:username/:password', function(req,res){

    var user1 = req.params.username;
    var password = req.params.password;
    
    for (i=0 ; i < database.users.length; i++){
        var user = database.users[i];
        if(user.email == user1){
            if(user.password == password){
                res.send('pass')
            } 
        }
    }
    res.send('invalid')
    
});


app.listen(8080);