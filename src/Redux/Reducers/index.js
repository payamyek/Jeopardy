import { combineReducers } from "redux";
import teamAScore from './teamAScore'
import teamBScore from "./teamBScore";
import teamAMove from "./teamAMove";
import gameState from "./gameState"

export default combineReducers({
    teamAScore,
    teamBScore,
    teamAMove,
    gameState
});