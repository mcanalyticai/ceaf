import React from 'react'
import logo from '../logo.png';

import { useState } from 'react';


    
export default function ContinuePage() {
    const [name, setName]=useState('')
    const [updated, setUpated]=useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        setUpated(name)
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
                    <button onClick={handleClick}>Submit</button>
                </form>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}