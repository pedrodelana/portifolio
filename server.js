const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const data={
        avatar_url: "https://avatars2.githubusercontent.com/u/11432369?s=460&u=fd4f46670037eaebcb65b9cf3b6baa03f3364a12&v=4",
        name: "Pedro Lana",
        role: "Desenvolvedor Junior",
        description: 'A procura de um sonho.',
        links:[
            {name: "Github", url:"https://github.com/pedrodelana?tab=repositories"},
            {name: "Github", url:"https://github.com/pedrodelana?tab=repositories"},
            {name: "Github", url:"https://github.com/pedrodelana?tab=repositories"}
        ]
    }



    return res.render("about", {data});

})

server.get("/portifolio", function(req, res){
    return res.render("portifolio", {items: videos});

})

server.get("/video", function(req,res){
    const id = req.query.id;

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send ("Video Not Found!")
    }

    
    return res.render("video", { item:video });
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log("Server is runing");
})