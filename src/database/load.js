/*
function loadDoc() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText
    }
    xhttp.open("GET", ajax_info.txt, true)
    xhttp.send()
}

const [minRating, setMinRating] = useState(0)
const { frame } = useReturn(() => loadDoc,[minRating])

return <div>{frame.map(ele => <Card {...ele} />)}</div>
*/

import React, { useState } from 'react';
import { render } from react-dom;