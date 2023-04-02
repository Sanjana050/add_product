const  http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use('/',(req,res,next)=>{
    console.log('This always runs');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log("into the next middleware")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit place-holder="Add-Product">Add-Product</button></form>')
    
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('Into the middleware');
    res.send('Heya home page')
    
})


const server=http.createServer(app);
app.listen(80,()=>{
    console.log('listening')
});