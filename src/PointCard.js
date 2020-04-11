import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import "./PointCard.css"


function PointCard({points, hint, question, updateScoreA, updateScoreB, changeTurn, turnA}) {

    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState('')
    const [active, setActive] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (answer.toLowerCase() === question.toLowerCase()){
            if (turnA){
                updateScoreA(points)
            }else {
                updateScoreB(points)
            }
            changeTurn()
            setActive(false)
            handleClose()
        }
    };

    return (
        <div>
            <div className={active ? "active-game-card" : "inactive-game-card"} onClick={active ? handleClickOpen : null}>
                <p>{ points }</p>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{ points } Points</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        { hint }
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Question"
                        fullWidth
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
        </div>
    );
}

export default PointCard;