import { fetchContests } from "../api-client"
import ContestPreview from "./contest-preview"
import { useEffect, useState } from "react"

const ContestList = ({ initialContests }) => {
    
    const [contests, setContests] = useState(initialContests)

    // useEffect(() => { // used for side effects to fetch data with axios
    //     fetchContests()
    //     .then((contests) => {
    //         setContests(contests)
    //     })
    // }, [])

    return (
        <div className="contest-list">
            {contests.map((contest) => {
                return <ContestPreview key={contest.id} contest={contest} />
            })}
        </div>
    )
}

export default ContestList
     