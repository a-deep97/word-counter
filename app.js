//express module
const express =require('express');



//express function
const app=express();

//
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));

app.get('/',(req,res)=>{
    res.send('hello');
});



//app listening to port 3000
app.listen(3000);