import dotenv from 'dotenv';
import express from 'express';
import {init} from './lib/database.js';
import linksRouter from './routers/links.js';
import cors from 'cors';

dotenv.config();

init();

const server = express();

server.listen(process.env.PORT, ()=> {
    console.log(`server listening on port ${process.env.PORT}`);
})
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use("/links", linksRouter);
