import express from "express";
import apiRouter from "./routes/api.js"

// set up the localsever code
const PORT = process.env.PORT || 3333;

// make a variable the express function
const site = express();

// setting up the page data to use for the sever
site.use(express.static("Develop/public"));

// allows site to parse json data
site.use(express.json());

//says go to routes/api and use that file to figure out what routing
site.use("/api", apiRouter);

// turn on the server to listen for requests and response
site.listen(PORT, () => console.info(`Active on PORT : ${PORT}`))