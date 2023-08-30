import { useState, useEffect } from "react"
import { addNewNameToContest, fetchContest } from "../client-api"
import Header from "./header"
import ProposedNames from "./proposed-names"
import NewName from "./new-name"

const Contest = ({ initialContest, onContestListClick }) => {
        
    const [contest, setContest] = useState(initialContest)

    useEffect(() => {
        if (!contest.names) {
            fetchContest(contest.id)
                .then((contest) => {
                    setContest(contest)
                })
        }
    }, [contest.id, contest.names])

    const handleContestListClick = (event) => {
        event.preventDefault()
        
        onContestListClick({
            id: contest.id,
            categoryName: contest.categoryName,
            contestName: contest.contestName,
        })
    }

    const handleNewNameSubmit = async (event) => {
        event.preventDefault()
        const newNameInput = event.target.newName
        const updatedContest =  await addNewNameToContest( { contestId: contest.id, newNameValue: newNameInput.value } )
        setContest(updatedContest)
    }

    return (
        <>
            <Header message={contest.categoryName} />
            <div className="contest">
                <div className="title">{contest.contestName}</div>
                <div className="description">{contest.description}</div>
            </div>

            <ProposedNames contest={contest} />
            <NewName handleNewNameSubmit={handleNewNameSubmit} />

            <a href="/" className="link" onClick={handleContestListClick}>Contest List</a>
        </>
    )
}

export default Contest
