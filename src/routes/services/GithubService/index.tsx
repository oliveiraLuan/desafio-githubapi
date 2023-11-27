import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export function findUser(user : string){
    return axios.get(`${BASE_URL}/${user}`);
}