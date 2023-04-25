import React from 'react'
import logo from '../logo.png';

import { useState, useEffect } from 'react';

import axios from "axios";


    
export default function ContinuePage() {
    const [name, setName]=useState('')
    const [updated, setUpated]=useState('')
    const [cardData, setCardData] = useState([])

    const handleChange = (e, name) => {
        setName(e.target.value)   
    }

    const func1=function(data) {
        alert(data)
    }

    const handleClick = (e) => {
        setUpated(name)
        console.log(name)
        e.preventDefault()
    }
    return (
        <div>
            <header className="App-header">
                <img  src={logo}  className="ceaf-logo" alt="logo" />
                <form>
                    <label style={{fontSize: 20}}className="label-descr">
                        enter your name to contact mC_analyticAi about getting a CEAF account
                    </label>
                    <div></div>
                    <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    ></input>
                    <button onClick={handleClick} data-button='{"func1": "func1"}'>Submit</button>
                </form>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}