import React, { useState } from 'react'

function PlayerInfo({ name, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    const editHandler = () => {
        setIsEditing((editable) => !editable)
    }

    const nameChangeHandler = (e) => {
        setPlayerName(e.target.value)
        name = playerName
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input className="player-name" required value={playerName} onChange={nameChangeHandler} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default PlayerInfo;