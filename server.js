/**
 * Created by dev on 15/02/17.
 */
var express = require('express');
var session = require('expess-s' + ');
var bodyParser = require('body-parser');
var app = express();

app.set('views',_dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({secret: 'shhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/', function (req, res) {
    sess = req.session;
    // session set when user request our app via url
    if (sess.email){

        res.redirect('/admin');
    }
    else {

        res.render('index.html');
    }
})

app.post('/login',function(req,res){

   sess = req.session;
   sess.email=req.body.email;
   ress.end('done');
});


app.get('/admin', function (req, res) {
    sess = req.session;
    // session set when user request our app via url
    if (sess.email) {
        res.write(' <h1>Hello ' + sess.email + '</h1>');
        res.end('<a href="+">logout</a>');
    } else {
        res.write('<h1> please login first.</h1>');
        res.end('<a href="+">Login</a>');
    }
});

app.get('/logout', )