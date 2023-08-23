import express from "express"
import serverConfig from "./server-config"
import routerApi from "./server-api"
import serverRender from "./server-render"

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")
server.use("/api", routerApi)

server.get(["/", "/contest/:contestId"], async (req, res) => {

    const { initialMarkup, initialData } = await serverRender(req)
    
    res.render("index", {
        initialMarkup,
        initialData,
    })
})

server.listen(serverConfig.PORT, serverConfig.HOST, ()=> {
    console.info(`Express-Server is listening at ${serverConfig.HOST_SERVER_URL} `)
})
