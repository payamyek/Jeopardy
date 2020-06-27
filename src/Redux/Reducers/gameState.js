const startingGameState = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
]

// winner = 0 means game still in progress, 1 for teamA and 2 for teamB
const defaultState = {
    data: startingGameState,
    stealActive: false,
    teamAMove: true,
    teamAPoints: 0,
    teamBPoints: 0,
    winner: 0
}

const getCoordinates = (category, points) => {
    const allPoints = [100, 200, 300, 400, 500];
    return [allPoints.indexOf(points), category]
}

const pointValue = i => (i + 1) * 100;

const remainingPoints = (data) => {
    let points = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (data[i][j]) {
                points += pointValue(i)
            }
        }
    }
    return points;
}

const determineWinner = (teamAScore, teamBScore, data) => {
    const pointsLeft = remainingPoints(data)
    if (teamAScore - teamBScore > pointsLeft) {
        return 1;
    } else if (teamBScore - teamAScore > pointsLeft) {
        return 2;
    }
    return 0;
}

const correct = (state, action) => {
    const {category, points} = action.payload
    const [i, j] = getCoordinates(category, points)
    const newState = {...state}

    newState.data[i][j] = false

    if (state.teamAMove) {
        newState.teamAPoints = state.teamAPoints + points
    } else {
        newState.teamBPoints = state.teamBPoints + points
    }

    newState.teamAMove = state.stealActive ? state.teamAMove : !state.teamAMove
    newState.stealActive = state.stealActive ? !state.stealActive : state.stealActive
    newState.winner = determineWinner(newState.teamAPoints, newState.teamBPoints, newState.data)
    return newState
}

const incorrect = state => {
    const newState = {...state}
    newState.teamAMove = newState.stealActive ? newState.teamAMove : !newState.teamAMove
    newState.stealActive = !newState.stealActive
    return newState
}


export default function gameState(state = defaultState, action) {
    switch (action.type) {
        case "CORRECT":
            return correct(state, action)
        case "INCORRECT":
            return incorrect(state)
        default:
            return state
    }
}