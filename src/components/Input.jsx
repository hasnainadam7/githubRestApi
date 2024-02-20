import React, { useState } from 'react'
import {List} from "./List"

import './input.css'
export const Input = () => {
    var [userName ,setUsername] = useState();
    var [details,setDetails]=useState("");
    var [show,setShow]=useState(false)
    var handleClick=()=>{
        getData();
        setShow(true)
    }
    var getData = async ()=>{
    try {
        var token = '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'
        
        const api = `https://api.github.com/search/users?q=${userName}`
        const setHeader = {
            headers: {
              Accept: "application/json",
                Authorization: `token ${token}`
            }
        }
        const respones = await fetch(api, setHeader )
        const userData= await respones.json()
        setDetails(userData)

        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <>
        
        <div style={{display:'flex',justifyContent:"center" }}>

            <input
                type="search"
                style={{width:"400px"}}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button className="button-3" onClick={()=> handleClick()} role="button">Search</button>
            </div>

            {show && <List data={details}/>}

            
            </>

    )
}
