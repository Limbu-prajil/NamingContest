import {API_SERVER_URL} from "./client-config"
import axios from "axios"

export const fetchContests = async () => {
    const res = await axios.get(`${API_SERVER_URL}/contests`)
    console.log(res.data)
    
    return res.data.contests
}