const express = require('express');

const server = express();


server.listen(3434, ()=> {
    console.log("server listening");
})

server.use(express.urlencoded({ extended: true }));

server.get("/links", (req,res)=> {
    const links = '[{"title":"12","beschreibung":"https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635_960_720.jpg","link":"123123"},{"title":"12323123","beschreibung":"https://cdn.pixabay.com/photo/2021/08/25/07/23/nature-6572635_960_720.jpg","link":"124124"}]'
    res.send(links);
})