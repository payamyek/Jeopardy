const possiblePoints = [100, 200, 300, 400, 500]

const getCoordinates = (categoryIndex, points) => [possiblePoints.indexOf(points), categoryIndex];

const isCategoryCompleted = (categoryIndex, data) => {
    const cords = possiblePoints.map(points => getCoordinates(categoryIndex, points))
    return cords.every(([i, j]) => data[i][j] === false)
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

export {getCoordinates, pointValue, remainingPoints, determineWinner, isCategoryCompleted}