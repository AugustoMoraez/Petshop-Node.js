import { Response,Request } from "express";
import { Pet } from "../models/Pet";
import { returnActive } from "../helpers/menuActive";


export const search = (req:Request,res:Response) => {
    let query:string = req.query.q as string;
    let list = Pet.getFromName(query);
    res.render("page",{
        menu:returnActive(""),
        list,
        query
    });
}