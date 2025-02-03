const express = require("express")
const app = express();

app.get("/",(req, res)=>{
    res.json([
        {
            id:1,
            name:"Yash"
        },
        {
            id:2,
            name:"Harsh" 
        },
        {
            id:3,
            name:"golboy"
        }
    ])
});

app.listen(5000,()=>{
    console.log("app is running on port 5000")
})