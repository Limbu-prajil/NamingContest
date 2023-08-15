import express from "express"
import serverConfig from "./server-config"

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")

server.get("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading...",
    })
})

server.listen(serverConfig.PORT, serverConfig.HOST, ()=> {
    console.info(`Express-Server is listening at ${serverConfig.SERVER_URL} `)
})