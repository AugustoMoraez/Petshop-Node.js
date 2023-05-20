import express,{Request,Response} from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import {main} from "./routes/index";

dotenv.config();
const server = express();
server.set("view engine","mustache");
server.set("views",path.join(__dirname,"views"));
server.set("mustache",mustache());

server.use(express.static(path.join(__dirname,"assets")))

server.use(main);
server.use((req,res)=>{
    res.status(404).send("pagina não encontrada...")
})

server.listen(process.env.PORT);

