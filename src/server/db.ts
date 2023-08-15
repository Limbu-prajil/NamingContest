import {MongoClient} from "mongodb"
import {MONGODB_URI, DATABASE_NAME} from "./server-config"
import { info } from "console"

let connectedClient

const connectClient = async () => {

    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME)
    }

    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    await client.db(DATABASE_NAME).command({ping: 1})
    info("Connection successful to MongoDB")

    connectedClient = client

    return connectedClient.db(DATABASE_NAME)
}

const stopClient = async () => {
    await connectedClient?.close
}

export { connectClient, stopClient }
