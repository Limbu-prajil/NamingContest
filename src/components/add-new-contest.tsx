import { useState } from "react"
import { addContest } from "../client-api"

const AddNewContest = ({onAddSuccess}) => {

    const [showForm, setShowForm] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const newContestData = {
            contestName: form.contestName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
        }
        const newContest = await addContest(newContestData)
        if (newContest?.id) {
            form.reset()
            onAddSuccess(newContest)
        }
    }

    return (
        <div className="add-new-contest">
            {!showForm && (
                <div className="link" onClick={() => setShowForm(true)}>
                    Add New Contest
                </div>
            )}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="categoryName" placeholder="Category name" />
                    <input type="text" name="contestName" placeholder="Contest name" />
                    <textarea placeholder="Contest description" name="description" rows="5"></textarea>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default AddNewContest
