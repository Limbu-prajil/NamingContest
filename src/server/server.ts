import express from "express"
import serverConfig from "./server-config"
import apiRouter from "./api-router"
import serverRender from "./render"

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")
server.use("/api", apiRouter)

server.get("/", async (req, res) => {
    const { initialMarkup, initialData } = await serverRender()
    res.render("index", {
        initialMarkup,
        initialData,
    })
})

server.listen(serverConfig.PORT, serverConfig.HOST, ()=> {
    console.info(`Express-Server is listening at ${serverConfig.HOST_SERVER_URL} `)
})
