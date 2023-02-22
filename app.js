//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require("lodash")
var posts=[]
var groups=[]


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.post("/compose",function(req,res){
  const post={
    title:req.body.postTitle,
    content:req.body.postBody
    
  }
  posts.push(post)
  res.redirect("/")
})


app.get("/",function(req,res){
  res.render("home")

})
app.get("/grp",function(req,res){
  res.render("grp")
})

app.get("/about",function(req,res){
  res.render("about")
})
app.get("/contact",function(req,res){
  res.render("contact")
})

app.get("/compose",function(req,res){
  res.render("compose")
})
app.get("/test",function(req,res){
  res.render("test")
})
app.post("/grp",function(req,res){
  const group={
    title:req.body.groupTitle,
    content:req.body.groupBody
    
  }
  groups.push(group)
  res.redirect("/Mygroups")
  })

app.get("/MyGroups",function(req,res){
  res.render("MyGroups",{
    displayGroups:groups
  })

})
app.get("/groups/:grpsName",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("grps",{title:grps.title,content:grps.content})

  }})
})
// discuss page
app.get("/discuss",function(req,res){
  res.render("discuss")
})
app.get("/groups/:grpsName/discuss",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("discuss")

  }})
})
// =============================================================================
app.get("/questions",function(req,res){
  res.render("questions")
})
app.get("/groups/:grpsName/questions",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("questions")

  }})
})
// =============================================================================
app.get("/notes",function(req,res){
  res.render("notes")
})
app.get("/groups/:grpsName/notes",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("notes")

  }})
})
// =============================================================================
app.get("/tasks",function(req,res){
  res.render("tasks")
})
app.get("/groups/:grpsName/tasks",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("tasks")

  }})
})

// =============================================================================
app.get("/resources",function(req,res){
  res.render("resources")
})
app.get("/groups/:grpsName/resources",function(req,res){
  groups.forEach(function(grps){
    if (_.lowerCase(req.params.grpsName)===_.lowerCase(grps.title)){
      res.render("resources")

  }})
})


app.get("/posts/:postName",function(req,res){
  posts.forEach(function(post)

  {if (_.lowerCase(req.params.postName)===_.lowerCase(post.title)){
    res.render("post",{title:post.title,content:post.content})
  }})
})






app.listen(3000, function() {
  console.log("Server started on port 3000");
});

