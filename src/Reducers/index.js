import { combineReducers } from "redux";
import teamAScore from './teamAScore'
import teamBScore from "./teamBScore";

export default combineReducers({
    teamAScore,
    teamBScore
});