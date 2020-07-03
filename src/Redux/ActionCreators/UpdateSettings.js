export function updateMusicVolume(volume) {
    return {type: "UPDATE_MUSIC_VOLUME", payload: {volume: volume}}
}

export function updateFXVolume(volume) {
    return {type: "UPDATE_FX_VOLUME", payload: {volume: volume}}
}

export function updatePlayMusic () {
    return {type: "UPDATE_PLAY_MUSIC"}
}

export function updateMusicNext () {
    return {type: "UPDATE_MUSIC_NEXT"}
}

export function updateMusicPrevious () {
    return {type: "UPDATE_MUSIC_PREVIOUS"}
}