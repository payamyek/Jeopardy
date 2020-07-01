export default function settings(state = {musicVolume: 80, fxVolume: 80}, action) {
    switch (action.type) {
        case "UPDATE_MUSIC_VOLUME":
            return {musicVolume: action.payload.volume, fxVolume: state.fxVolume}
        case "UPDATE_FX_VOLUME":
            return {musicVolume: state.musicVolume, fxVolume: action.payload.volume}
        default:
            return state
    }
}
