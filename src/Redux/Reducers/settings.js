import headHighSwell from "../../Assets/Head_High_Swells.mp3";
import satisfactionGuaranteed from "../../Assets/Satisfaction_Guaranteed.mp3";
import luxery from "../../Assets/Luxery.mp3"


const tracks = [
    {track: headHighSwell, name: "Head High Swells (Rock)"},
    {track: satisfactionGuaranteed, name: "Satisfaction Guaranteed (Reggae)"},
    {track: luxery, name: "Luxery (Hip Hop)"},
]

const defaultState = {
    music: {volume: 80, track: tracks[0].track, name: tracks[0].name, index: 0, playing: true},
    fx: {volume: 80}
}


export default function settings(state = defaultState, action) {
    const newState = {...state}
    let temp = 0

    switch (action.type) {
        case "UPDATE_MUSIC_VOLUME":
            newState.music.volume = action.payload.volume
            return newState
        case "UPDATE_FX_VOLUME":
            newState.fx.volume = action.payload.volume
            return newState
        case "UPDATE_PLAY_MUSIC":
            newState.music.playing = !state.music.playing
            return newState
        case "UPDATE_MUSIC_NEXT":
            temp = state.music.index + 1 < tracks.length ? state.music.index + 1 : 0
            newState.music.track = tracks[temp].track
            newState.music.name = tracks[temp].name
            newState.music.index  = temp
            newState.music.playing = true
            return newState
        case "UPDATE_MUSIC_PREVIOUS":
            temp = state.music.index - 1 >= 0 ? state.music.index - 1 : tracks.length - 1
            newState.music.track = tracks[temp].track
            newState.music.name = tracks[temp].name
            newState.music.index  = temp
            newState.music.playing = true
            return newState
        default:
            return state
    }
}
