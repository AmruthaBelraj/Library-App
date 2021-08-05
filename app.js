const express = require("express");
const app=new express();
const port = process.env.PORT || 2000;

const nav = [
             {link:"/index",name:"Home"},
             {link:"/books",name:"Books"},
             {link:"/authors",name:"Authors"},
             {link:"/signUp",name:"Signup"},
             {link:"/logIn",name:"Login"},
             {link:"/addbook",name:"Add Book"},
             {link:"/addauthor",name:"Add Author"}
            ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signUpRouter = require('./src/routes/signUpRoutes')(nav);
const logInRouter = require('./src/routes/logInRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signUpRouter);
app.use('/logIn',logInRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',(req,res)=>
                {
                    res.render("index",{nav});
                });
app.get('/index',(req,res)=>
                {
                    res.render("index",{nav});
                });

app.listen(port,()=>{console.log("Server Ready at" + port)});