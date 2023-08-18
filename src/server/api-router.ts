import express from "express"
import cors from "cors"
import { connectClient } from "./db"

const router = express.Router()
router.use(cors())

router.get("/contests", async (req, res) => {
    const client = await connectClient()
    
    const contests = client
        .collection("contests")
        .find()
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1,
            _id: 0,
        })
        .toArray();
    
    console.info(contests);

    res.send({ contests })
})

router.get("/contest/:contestId", async (req, res) => {
    const client = await connectClient()
    const contest = client
        .collection("contests")
        .findOne({ id: req.params.contestId })

    res.send({ contest })
})

export default router
