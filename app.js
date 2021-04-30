const express = require('express');
const app = express();
app.use(express.json());
const data =  require("./data.json");

app.get("/", (req, res) => {
    res.json(data);
    console.log(data)

 });

 app.get('/:id',(req,res)=>{
     const id =req.params.id;
    const User = data.find(user => user.id === id);
   res.json(User)
   console.log('user')


 });

app.listen(3000 , ()=>  console.log('server run in port : 3000'));
module.exports = app
