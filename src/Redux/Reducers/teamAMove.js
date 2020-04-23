export default function teamAMove(state = true, action) {
    switch(action.type){
        case "UPDATE_TEAM_A_MOVE":
            return !state;
        default:
            return state;
    }
}