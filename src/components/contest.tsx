import { useState, useEffect } from "react"
import { fetchContest } from "../api-client"
import Header from "./header"

const Contest = ({ id }) => {
    const [contest, setContest] = useState({})

    useEffect(() => { // used for side effects to fetch data with axios
        fetchContest(id)
        .then((contest) => {
            setContest(contest)
        })
    }, [id])

    return (
        <>
            <Header message={contest.categoryName} />
            <div className="contest">
                <div className="title">{contest.contestName}</div>
                <div className="description">{contest.description}</div>
            </div>
        </>
    )
}

export default Contest
