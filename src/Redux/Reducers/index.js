import { combineReducers } from "redux";
import gameState from "./gameState"
import settings from "./settings"

export default combineReducers({
    gameState,
    settings
});