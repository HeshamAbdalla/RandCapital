var express = require('express');
var app = express();
var path = require("path");


app.use('/fonts/', express.static('fonts'))
app.use('/css/', express.static('css'))
app.use('/js/', express.static('js'))
app.use('/images/', express.static('images'))



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

app.get('/solutions',function(req,res){
  res.sendFile(path.join(__dirname+'/views/solutions.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/views/contact.html'));
});

app.get('/faqs',function(req,res){
  res.sendFile(path.join(__dirname+'/views/faqs.html'));
});


app.get('/gino',function(req,res){
  res.sendFile(path.join(__dirname+'/views/html-bio/gino-bio.html'));
});

app.get('/dylan',function(req,res){
  res.sendFile(path.join(__dirname+'/views/html-bio/dylan-bio.html'));
});

app.get('/jake',function(req,res){
  res.sendFile(path.join(__dirname+'/views/html-bio/jake-bio.html'));
});

app.get('/nick',function(req,res){
  res.sendFile(path.join(__dirname+'/views/html-bio/nick-bio.html'));
});
app.listen(process.env.PORT || 3000, function(){
  console.log("running on port 3000");
})
