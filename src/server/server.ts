import express from "express"
import serverConfig from "./server-config"
import apiRouter from "./api-router"

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")
server.use("/api", apiRouter)

server.get("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading...",
    })
})

server.listen(serverConfig.PORT, serverConfig.HOST, ()=> {
    console.info(`Express-Server is listening at ${serverConfig.HOST_SERVER_URL} `)
})
