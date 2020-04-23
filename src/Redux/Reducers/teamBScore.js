export default function teamBScore(state= 0, action) {

    switch(action.type){
        case "UPDATE_TEAM_B_SCORE":
            return action.payload + state;
        default:
            return state;
    }
}