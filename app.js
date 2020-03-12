const morgan = require('morgan');
const express = require('express');
const layout = require('./views/layout.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  console.log('HELOOOOOOOO');
  res.send(layout(""));
})


app.listen(3000, () =>{
  console.log('listening at port 3000');
})
