 const express = require("express");
 const hbs = require('hbs');
 const path = require("path");
 const app = new express();
 const port = process.env.PORT || 3000;

 //public station path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
app.use(express.static(static_path));


app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);
 //routing
 app.get("", (req,res)=>{
    res.render('index.hbs')
 });

 app.get("/about", (req,res)=>{
   res.render('about.hbs')
 });

 app.get("/weather", (req,res)=>{
   res.render('weather.hbs')
 });

 app.get("*", (req,res)=>{
   res.render('404error.hbs',{
      errorMsg:"OOPS page not found"
   })
 });


 app.listen(port,()=>{
    console.log("we are listening")
 });