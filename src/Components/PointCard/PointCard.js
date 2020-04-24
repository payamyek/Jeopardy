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
import rubber_duck from "../../Resources/rubber_duck.mp3";
import party_horn from "../../Resources/party_horn.mp3"
import Sound from "react-sound";
import "./PointCard.css"
import updateTeamAScore from "../../Redux/ActionCreators/UpdateTeamAScore";
import updateTeamBScore from "../../Redux/ActionCreators/UpdateTeamBScore";
import updateTeamAMove from  "../../Redux/ActionCreators/UpdateTeamAMove";
import snackbarResponse from "../../Resources/snackbarResponse"
import {connect} from "react-redux";


function PointCard(props) {

    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)
    const [showCorrectSnackbar, setShowCorrectSnackbar] = useState(false)
    const [playCorrectSong, setPlayCorrectSong] = useState(false)
    const [playIncorrectSong, setPlayIncorrectSong] = useState(false)
    const [showIncorrectSnackbar, setShowIncorrectSnackbar] = useState(false)

    const response = arr => arr[_.random(0, arr.length - 1)];

    const Alert = props => <MuiAlert elevation={6} variant="filled" {...props}/>;

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
        if (answer.toLowerCase().trim() === props.question.toLowerCase().trim()) {
            if (props.teamAMove) {
                props.setTeamAScore(props.points)
            } else {
                props.setTeamBScore(props.points)
            }
            props.setTeamAMove()
            setActive(false)
            handleClose()
            handleCorrectAnswer()
            setPlayCorrectSong(true)
        } else {
            props.setTeamAMove()
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
                <p>{ props.points }</p>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">{ props.hint }</DialogTitle>
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
                    {response(snackbarResponse["correct"])}
                </Alert>
            </Snackbar>
            <Snackbar open={showIncorrectSnackbar} autoHideDuration={5000} onClose={handleCloseIncorrectSnackbar}>
                <Alert severity="error">
                    {response(snackbarResponse["incorrect"])}
                </Alert>
            </Snackbar>
            <Sound url={rubber_duck} volume={100}
                   playStatus={playCorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
            <Sound url={party_horn} volume={100}
                   playStatus={playIncorrectSong ? Sound.status.PLAYING : Sound.status.STOPPED}/>
        </div>
    );
}

const mapStateToProps = ({ teamAMove }) => ({
    teamAMove
});

const mapDispatchToProps = dispatch => ({
    setTeamAScore: points => dispatch(updateTeamAScore(points)),
    setTeamBScore: points => dispatch(updateTeamBScore(points)),
    setTeamAMove: move => dispatch(updateTeamAMove(move))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PointCard);