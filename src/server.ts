import express,{Request,Response} from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import {main} from "./routes/index";

dotenv.config();
const server = express();
server.set("view engine","mustache");
server.set("views",path.join(__dirname,"../views"));
server.engine("mustache",mustache());

server.use(express.static(path.join(__dirname,"assets")))

server.use(main);
server.use((req:Request,res:Response)=>{
    res.render("404");
})

server.listen(process.env.PORT);

