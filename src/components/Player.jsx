import { useState } from "react"
export default function Player({name,symbol}){
    const [isEditing,setIsEditing]=useState(false);
    function handleEditClick(){
        //we faced issue where we were unable to close the texbox by clicking on button 
        // as state should be changed based on old state
        setIsEditing((editing)=>!isEditing)
    }
    let playerName=<span className="player-name">{name}</span>
    if(isEditing){
        //This line of code display current name in textbox
        playerName=<input type="text" required value={name}/>
    }
    return(
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
          </li>
    )
}