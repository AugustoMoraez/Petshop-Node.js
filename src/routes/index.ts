import express,{Request,Response}  from "express";
import * as PageController from "../controlers/PageController";

export const main = express();

main.get("/",PageController.home);

main.get("/dogs",PageController.dogs);
main.get("/cats",PageController.cats);
main.get("/fishes",PageController.fishes);