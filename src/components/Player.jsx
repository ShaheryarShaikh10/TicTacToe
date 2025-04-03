import { useState } from "react"
export default function Player({initialName,symbol}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(initialName);
    function handleEditClick(){
        //we faced issue where we were unable to close the texbox by clicking on button 
        // as state should be changed based on old state
        setIsEditing((editing)=>!editing)
    }
    function handleChange(event)
    {
        console.log(event)
        setPlayerName(event.target.value)
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>
    //btnCaption="Edit"
    if(isEditing){
        //This line of code display current name in textbox
        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
        //btnCaption="Save"
    }
    return(
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
          </li>
    )
}