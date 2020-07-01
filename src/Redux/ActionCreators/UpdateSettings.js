export function updateMusicSoundSettings(volume) {
    return {type: "UPDATE_MUSIC_VOLUME", payload: {volume: volume}}
}

export function updateFXSoundSettings(volume) {
    return {type: "UPDATE_FX_VOLUME", payload: {volume: volume}}
}
