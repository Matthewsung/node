const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

const port = 3030;

const indexRouter = require('./router')

app.get('/main', indexRouter)

app.listen(port, ()=>{
  console.log('실행되는중')
})