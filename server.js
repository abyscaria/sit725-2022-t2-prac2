const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(__dirname+"/public"))

//app.use(express.static(__dirname+"test.html"))

app.use(express.json());
app.use(express.urlencoded({extended: false }));

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}


app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.n31;
    var number2 = req.query.n2;
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success-hmm"})
})

/*app.get("/addTwoNumber", (req, res) => {
    res.sendFile(path.join(__dirname,"/"));
  });*/

 app.post("/addTwoNumbers",(req,res) => {
    var number1 = req.body.n1;
    var number2 = req.body.n2;
    console.log("number1:", number1);
    console.log("number2:", number2); 
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})

/*app.post("/addTwoNumber", (req, res) => {
    const { a, b } = req.body;
    res.send({
      result: parseInt(a) + parseInt(b)
    });
  });*/


var port = process.env.port || 4000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})