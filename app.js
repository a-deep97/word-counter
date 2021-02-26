//express module
const express =require('express');

const path =require('path');

//express function
const app=express();

//
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'));
});



//app listening to port 3000
app.listen(3000);