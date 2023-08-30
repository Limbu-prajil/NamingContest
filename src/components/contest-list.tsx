import { fetchContests } from "../client-api"
import ContestPreview from "./contest-preview"
import { useEffect, useState } from "react"
import Header from "./header"

const ContestList = ({ initialContests, afterContest, onContestClick }) => {

    function deepEqual(obj1, obj2) {
        if (obj1 === obj2) {
            return true;
        }
    
        if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
            return false;
        }
    
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
    
        if (keys1.length !== keys2.length) {
            return false;
        }
    
        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
    
        return true;
    }
    
    function arrayContainsObject(initialContests, afterContest) {
        for (let item of initialContests) {
            if (deepEqual(item, afterContest)) {
                return true;
            }
        }
        return false;
    }
    
    const [contests, setContests] = useState(initialContests ?? [])

    useEffect(() => {
        if (!initialContests || !arrayContainsObject(initialContests, afterContest)) {
            fetchContests()
                .then((contests) => {
                    setContests(contests)
                })
        }
    }, [initialContests, afterContest])

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
