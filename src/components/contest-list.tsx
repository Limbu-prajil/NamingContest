import { fetchContests } from "../client-api"
import ContestPreview from "./contest-preview"
import { useEffect, useState } from "react"
import Header from "./header"

const ContestList = ({ initialContests, afterContest, onContestClick }) => {
    
    // check added contest is present and if yes push
    
    const [contests, setContests] = useState(initialContests ?? [])

    useEffect(() => {
        if (!initialContests) {
            fetchContests()
                .then((contests) => {
                    if (!contests.includes(afterContest)) {
                        setContests(contests.push(afterContest))
                    }
                    //setContests(contests)
                })
        }
    }, [initialContests])

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
