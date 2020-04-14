import React , { useState } from "react"
import CategoryColumn from "./CategoryColumn";
import Leaderboard from "./Leaderboard";
import Teams from "./Teams"
import "./GameBoard.css"

function GameBoard({ categories, teams }) {
    const [teamAScore, setTeamAScore] = useState(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [teamAMove, setTeamAMove] = useState(true)

    let updateScoreA = (score) => {
        setTeamAScore(teamAScore + score)
    }

    let updateScoreB = (score) => {
        setTeamBScore(teamBScore + score)
    }

    let teamPlayers = {
        "teamA": {
                "name": teams[0],
                "players": ["Justin", "Ali", "Areeb", "Jason", "Anand", "Octavian", "Allan"]
            },
        "teamB": {
            "name": teams[1],
            "players": ["Carl", "Leyang", "Ivy", "Kevin", "Nina", "Jo", "Viswa"]
        }
    }

    const data = {
        "Co-Workers": [
            {
                "Points": 100,
                "Hint": "This person claims to have gone to over 500 concerts",
                "Question": "Who is Octavian?"
            },
            {
                "Points": 200,
                "Hint": "This person's keyboard sounds like a jackhammer drilling in your ear",
                "Question": "Who is Kevin?"
            },
            {
                "Points": 300,
                "Hint": "This person has been known to address Carl as Kevin",
                "Question": "Who is Jason?"
            },
            {
                "Points": 400,
                "Hint": "This person would ask you for a ride home if his chauffeur was not available ",
                "Question": "Who is Carl?"
            },
            {
                "Points": 500,
                "Hint": "This young lad doesn't believe in drinking coffee",
                "Question": "Who is Anand?"
            }
        ],
        "Math" : [
            {
                "Points": 100,
                "Hint": "The square root of 225",
                "Question": "What is 15?"
            },
            {
                "Points": 200,
                "Hint": "This number has a day dedicated to it",
                "Question": "What is pi?"
            },
            {
                "Points": 300,
                "Hint": "On a flat surface it's the shortest distance between two points",
                "Question": "What is a straight line?"
            },
            {
                "Points": 400,
                "Hint": "The word is from the Arabic language meaning void even though the Mayans discovered the concept first",
                "Question": "What is 0?"
            },
            {
                "Points": 500,
                "Hint": "This theorem states that every symmetric matrix is diagonalizable",
                "Question": "What is the spectral theorem?"
            }
        ],
        "Science" : [
            {
                "Points": 100,
                "Hint": "This planet is the closest to the sun",
                "Question": "What is Mercury?"
            },
            {
                "Points": 200,
                "Hint": "This metal is liquid at room temperature",
                "Question": "What is Mercury?"
            },
            {
                "Points": 300,
                "Hint": "This person created the laws of motion",
                "Question": "Who is Newton?"
            },
            {
                "Points": 400,
                "Hint": "This number represents the number of bones in the human body",
                "Question": "What is 206?"
            },
            {
                "Points": 500,
                "Hint": "This cycle regulates the sleep-wake cycle and repeats roughly every 24 hours",
                "Question": "What is the circadian rhythm?"
            }
        ],
        "Movie Quotes" : [
            {
                "Points": 100,
                "Hint": "To infinity and beyond!",
                "Question": "What is toy story?"
            },
            {
                "Points": 200,
                "Hint": "I'll be back",
                "Question": "What is the terminator?"
            },
            {
                "Points": 300,
                "Hint": "I am your father",
                "Question": "What is starwars?"
            },
            {
                "Points": 400,
                "Hint": "Just keep swimming",
                "Question": "What is finding nemo?"
            },
            {
                "Points": 500,
                "Hint": "I'm the king of the world",
                "Question": "What is the titanic?"
            }
        ],
        "Countries" : [
            {
                "Points": 100,
                "Hint": "Eh, pass me the syrup!",
                "Question": "What is canada?"
            },
            {
                "Points": 200,
                "Hint": "Why is the hospital so expensive, Bob?",
                "Question": "What is america?"
            },
            {
                "Points": 300,
                "Hint": "Hey, it's santa!",
                "Question": "What is the north pole?"
            },
            {
                "Points": 400,
                "Hint": "Yo Jim, why is that kangaroo chasing us?",
                "Question": "What is australia?"
            },
            {
                "Points": 500,
                "Hint": "O Romeo, Romeo, wherefore art thou Romeo?",
                "Question": "What is italy?"
            }
        ]
    }

    let columns = Object.keys(data)

    let generateGameBoard = () => {
        let result = []
        for(let i = 0; i < 5; i++) {
            result[i] = <CategoryColumn category={columns[i]}
                                        data={data[columns[i]]}
                                        updateScoreA={updateScoreA}
                                        updateScoreB={updateScoreB}
                                        changeTurn={() => setTeamAMove(!teamAMove)}
                                        turnA={teamAMove}
            />
        }
        return result
    }

    return (
        <div className="game-board">
            {generateGameBoard()}
            <Leaderboard teams={teams} scoreA={teamAScore} scoreB={teamBScore}/>
        </div>
    )
}

export default GameBoard;