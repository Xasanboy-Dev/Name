import express, { Request, Response } from "express";
const server = express();
import { getMethod,postMethod,deleteMethod } from "./function/function";
import path from "path"
const PORT = 7070;
let users = [
    {
        name:"Hello",
        lastname:"Abdurasulov",
        age:15
    },
    {
        name:"Hasanboy",
        lastname:"Abdurasulov",
        age:20
    }
]

server.get("/users",(req:Request,res:Response)=>{
  res.sendFile(path.join(__dirname,"Svelte","public","index.html"))
})
server.use(express.json())

// Get Method
server.get("/",getMethod)
// Post Method
server.post("/",postMethod)
// Delete Method
server.delete("/:id",deleteMethod)

server.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
