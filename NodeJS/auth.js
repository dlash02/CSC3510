var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));

var Users = [];

app.get('/signup', function(req, res){
   console.log("get signup")
   res.render('signup', {
       'message': "Sign Up Form"
   });
});

app.post('/signup', function(req, res){
   if(!req.body.id || !req.body.password){
       console.log("IF selected");
      res.status("400");
      res.send("Invalid details!");
   } else {
       console.log("Else selected");
      Users.filter(function(user){
         if(user.id === req.body.id){
            res.render('signup', {
               message: "User Already Exists! Login or choose another user id"});
         }
      });
      var newUser = {id: req.body.id, password: req.body.password};
      Users.push(newUser);
      req.session.user = newUser;
      //res.send("protected page");
      res.redirect('protected_page');
   }
});

app.listen(3000);