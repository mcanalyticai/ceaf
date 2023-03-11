import React from 'react'
import logo from '../logo.png';

import { useState } from 'react';
// import { update } from '@tensorflow/tfjs-layers/dist/variables';

export default function ContinuePage() {
    const [name, setName]=useState('')
    const [updated, setUpated]=useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleClick =() => {
        setUpated(name)
    }
    return (
        <div>
            <header className="App-header">
                <img  src={logo}  className="App-logo" alt="logo" />
                <form>
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

            <h2>Name: {name}</h2>
            <h2>Updated: {updated}</h2>
        </div>
    )
}