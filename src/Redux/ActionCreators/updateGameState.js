export function updatePoints(category, points) {
    return {type: "CORRECT", payload: {category: category, points: points}}
}

export function updateTeamAMove() {
    return {type: "INCORRECT"}
}

export function killCard(category, points) {
    return {type: "KILL", payload: {category: category, points: points}}
}