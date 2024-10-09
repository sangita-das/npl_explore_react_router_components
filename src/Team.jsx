import { useState } from "react"

export default function Team () {
    
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newPlayer = team +1;
        setTeam(newPlayer);
    }
    const handleDelete = () => {
        setTeam(team -1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamStyle}>
            Players:{team}
            <br />
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}