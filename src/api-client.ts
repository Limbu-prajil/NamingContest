import { API_SERVER_URL } from "./client-config";
import axios from "axios";

export const fetchContests = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/contests`);
  return resp.data.contests;
};

export const fetchContest = async (contestId) => {
  const resp = await axios.get(`${API_SERVER_URL}/contest/${contestId}`);
  return resp.data.contest;
};
