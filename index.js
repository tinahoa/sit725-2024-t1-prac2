const express = require('express');
const app = express();
let PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log("Listening on " + PORT);
})

app.get('/addTwoNumbers', (req, res) => {

    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num1);
    let sum = num1 + num2;


    res.send('Sum of two input numbers is ' + sum);
})
