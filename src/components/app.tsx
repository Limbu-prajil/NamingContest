import * as React from "react"
import Header from "./header"
import ContestList from "./contest-list"

const App = ({initialData}) => {
    return (
        <div className="container">
            <Header message="Naming Contest" />
            <ContestList initialContests={initialData.contests} />
        </div>
    )
}

export default App
