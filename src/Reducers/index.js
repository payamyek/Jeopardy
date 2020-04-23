import { combineReducers } from "redux";
import teamAScore from './teamAScore'
import teamBScore from "./teamBScore";
import teamAMove from "./teamAMove";

export default combineReducers({
    teamAScore,
    teamBScore,
    teamAMove
});