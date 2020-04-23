export default function teamAScore(state= 0, action) {
    switch(action.type){
        case "UPDATE_TEAM_A_SCORE":
            return action.payload + state;
        default:
            return state;
    }
}