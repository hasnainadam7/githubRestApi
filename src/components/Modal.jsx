import React, { useEffect,useState } from 'react'

export const Modal = ({data}) => {
  
    var [details,setDetails]=useState();
useEffect(()=>{
    getData();
},[data]
    
)
        var getData = async ()=>{
    try {
        var token = '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'
        
        const api = `https://api.github.com/users/${data}`
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
if(details){
    var {following,followers,name,location,avatar_url}=details
    return (


        <div>
 
            Picture
            <img src={avatar_url} />
            <h3>Follower: {followers}</h3>

            <h3>Following: {following}</h3>



            <h3>Full Name: {name}</h3>

            <h3>Location: {location}</h3> 

        </div>
    )
}
}