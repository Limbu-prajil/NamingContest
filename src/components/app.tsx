import * as React from "react"
import { useState, useEffect } from "react"
import Header from "./header"
import ContestList from "./contest-list"
import Contest from "./contest"

const App = ({initialData}) => {

    const [page, setPage] = useState(initialData.currentContest ? "contest" : "contestList")
    const [currentContest, setCurrentContest] = useState(initialData.currentContest)

    useEffect(() => {
        window.onpopstate = (event) => {
            const newPage = event.state?.contestId ? "contest" : "contestList"
            setPage(newPage)
            setCurrentContest({ id: event.state?.contestId })
        }
    }, [])

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId}, "", `/contest/${contestId}`)
        setPage("contest")
        setCurrentContest({ id: contestId })
    }

    const navigateToContests = () => {
        window.history.pushState({}, "", "/")
        setPage("contestList")
        setCurrentContest(undefined)
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return (
                    <ContestList 
                        initialContests={initialData.contests}
                        onContestClick={navigateToContest}
                    />
                )
            case "contest":
                return (
                    <Contest initialContest={currentContest} onContestListClick={navigateToContests} />
                )
        }
    }
    
    return (
        <div className="container">
            {pageContent()}
        </div>
    )
}

export default App
