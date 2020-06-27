import React from "react";
import {toast} from "react-toastify";
import {mdiEmoticonExcitedOutline, mdiEmoticonDeadOutline} from "@mdi/js";
import Icon from "@mdi/react";


function Body({message, icon}) {
    return (
        <table>
            <tr>
                <td><Icon path={icon} size={0.9}/></td>
                <td>{message}</td>
            </tr>
        </table>
    )
}

export default function displayNotification(message, type) {
    if (type) {
        toast.success(<Body message={message} icon={mdiEmoticonExcitedOutline}/>)
    } else {
        toast.error(<Body message={message} icon={mdiEmoticonDeadOutline}/>)
    }
}


