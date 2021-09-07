const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const database = require('./lib/database.js');
const linksRouter = require('./routers/links.js');

database.init();

const server = express();

server.listen(process.env.PORT, ()=> {
    console.log(`server listening on port ${process.env.PORT}`);
})

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use("/links", linksRouter);
