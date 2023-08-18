import { fetchContests } from "../api-client"
import ContestPreview from "./contest-preview"
import { useEffect, useState } from "react"
import Header from "./header"

const ContestList = ({ initialContests, onContestClick }) => {
    
    const [contests, setContests] = useState(initialContests)

    // useEffect(() => { // used for side effects to fetch data with axios
    //     fetchContests()
    //     .then((contests) => {
    //         setContests(contests)
    //     })
    // }, [])

    return (
        <>
            <Header message="Naming Contest" />
            <div className="contest-list">
                {contests.map((contest) => {
                    return (
                        <ContestPreview 
                            key={contest.id} 
                            contest={contest} 
                            onClick={onContestClick}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ContestList
