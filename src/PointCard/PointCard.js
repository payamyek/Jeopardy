import React, {useState} from "react"
import _ from "lodash"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import rubber_duck from "../rubber_duck.mp3";
import party_horn from "../party_horn.mp3"
import Sound from "react-sound";
import "./PointCard.css"


function PointCard({points, hint, question, updateScoreA, updateScoreB, changeTurn, isTeamAMove}) {

    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)
    const [showCorrectSnackbar, setShowCorrectSnackbar] = useState(false)
    const [playCorrectSong, setPlayCorrectSong] = useState(false)
    const [playIncorrectSong, setPlayIncorrectSong] = useState(false)
    const [showIncorrectSnackbar, setShowIncorrectSnackbar] = useState(false)

    const correctResponses = [
        "Wow, how did you get that one?",
        "Are you cheating?",
        "There is no way, are you a robot?",
        "That one was way too easy, no need to celebrate.",
        "I might have under-estimated you young jedi"
    ]

    const incorrectResponses = [
        "It isn't the first time you have failed us soldier",
        "That one was easy, come on now!",
        "Are you sure, you didn't know it?",
        "Luke I am not your father",
        "Someone disconnect their internet"
    ]

    const response = (arr) => {
        let num = _.random(0, arr.length - 1)
        return arr[num]
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const reset = () => {
        setPlayCorrectSong(false);
        setPlayIncorrectSong(false);
        setShowCorrectSnackbar(false);
        setShowIncorrectSnackbar(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
        reset()
    };

    const handleClose = () => {
        setOpen(false);
        reset()
        setAnswer('')
    };

    const handleSubmit = () => {
        if (answer.toLowerCase().trim() === question.toLowerCase().trim()) {
            if (isTeamAMove) {
                updateScoreA(points)
            } else {
                updateScoreB(points)
            }
            changeTurn()
            setActive(false)
            handleClose()
            handleCorrectAnswer()
            setPlayCorrectSong(true)
        } else {
            changeTurn()
            handleClose()
            handleIncorrectAnswer()
            setPlayIncorrectSong(true)
            setAnswer('')
        }
    };

    const handleCorrectAnswer = () => {
        setShowCorrectSnackbar(true)
    }

    const handleIncorrectAnswer = () => {
        setShowIncorrectSnackbar(true)
    }

    const handleCloseCorrectSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowCorrectSnackbar(false);
        setPlayCorrectSong(false)
    };

    const handleCloseIncorrectSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowIncorrectSnackbar(false);
        setPlayIncorrectSong(false);
    };

    return (
        <div>
            <div className={active ? "active-game-card" : "inactive-game-card"}
                 onClick={active ? handleClickOpen : null}>
                <p>{points}</p>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">{hint}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        id="name"
                        label="Question"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={showCorrectSnackbar} autoHideDuration={5000} onClose={handleCloseCorrectSnackbar}>
                <Alert severity="success">
                    {response(correctResponses)}
                </Alert>
            </Snackbar>
            <Snackbar open={showIncorrectSnackbar} autoHideDuration={5000} onClose={handleCloseIncorrectSnackbar}>
                <Alert severity="error">
                    {response(incorrectResponses)}
                </Alert>
            </Snackbar>
            <Sound url={rubber_duck} volume={100}
                   playStatus={playCorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
            <Sound url={party_horn} volume={100}
                   playStatus={playIncorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
        </div>
    );
}

export default PointCard;