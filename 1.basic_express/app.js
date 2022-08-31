const { response } = require("express");
const express = require("express")

const app = express()


//appen lytter til porten 8080
app.listen(8080)

//get tager imod endpoint 
app.get("/", (request, response)=>{
    //json fordi mange andre sprog også kan integerer med json
response.send(
{"message":"created my first route. yeah :D"}


);
}

);