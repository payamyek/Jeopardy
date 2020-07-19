import {combineReducers} from "redux";
import gameState from "./gameState"
import gameList from "./gameList"
import settings from "./settings"

export default combineReducers({
    gameState,
    gameList,
    settings
});