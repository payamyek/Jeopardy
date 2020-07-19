import {determineWinner, getCoordinates} from "../../services/handleGameState";

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

const kill = (state, action) => {
    const newState = {...state}
    const [i, j] = getCoordinates(action.payload.category, action.payload.points)
    newState.data[i][j] = false
    return newState
}

export default function gameState(state = defaultState, action) {
    switch (action.type) {
        case "CORRECT":
            return correct(state, action)
        case "INCORRECT":
            return incorrect(state)
        case "KILL":
            return kill(state, action)
        default:
            return state
    }
}