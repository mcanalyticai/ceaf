import React from "react";
import { useCookies } from 'react-cookie';

export default function() {
    const [cookies, setCookie, removeCookie]=useCookies(["user"])
    
    const onSubmit = (data) => {
        setCookie("user", data, { path: "/"})
    }
    return (
        <div>
            Thank you for submitting your application to CEAF.
        
            <button
                onClick={() => {
                alert(`User cookie is ${JSON.stringify(cookies["user"])}`);
                }}
                >
                Show user cookie
            </button>
            <button
                onClick={() => {
                removeCookie("user");
                }}
                >
                Delete user cookie
            </button>
       </div>
    )
}