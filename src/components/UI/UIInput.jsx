import React from 'react'
import '../../styles/uiinput.scss'

function UIInput({ placeholder, type, actionOnInput }) {

    return (
        <input 
            type={type} 
            placeholder={placeholder}
            onInput={(event) => actionOnInput(event)}
        />
    )
}

export default UIInput