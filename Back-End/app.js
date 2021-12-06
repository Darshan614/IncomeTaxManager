const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const authroutes = require('./routes/auth');
const taxroutes = require('./routes/tax');

// const cors = require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

app.use(bodyParser.json());
//app.use(cors(corsOptions)) 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(authroutes);
app.use(taxroutes);
const PORT = process.env.PORT || 8080;
if(process.env.NODE_ENV == "production"){
  app.use(express.static("taxcalculator/build"));
}
mongoose
  .connect('mongodb+srv://darshan:msdhoni@cluster0.oantu.mongodb.net/TaxDatabase?retryWrites=true&w=majority')
  .then(result => {
    console.log("Server started")
    const server = app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });