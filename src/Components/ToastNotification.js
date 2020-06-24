import React from "react"
import {toast} from "react-toastify";

export default function displayNotification(message, type) {
    if (type === true) {
        toast.success(`😀 ${message}`)
    }
    else {
        toast.error(`😑 ${message}`)
    }
}


