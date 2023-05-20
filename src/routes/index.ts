import express from "express";
import * as PageController from "../controlers/PageController";
import { search } from "../controlers/searchController";

export const main = express();

main.get("/",PageController.home);

main.get("/dogs",PageController.dogs);
main.get("/cats",PageController.cats);
main.get("/search",search);
main.get("/fishes",PageController.fishes);