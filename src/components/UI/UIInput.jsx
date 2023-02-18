import React from 'react'
import '../../styles/uiinput.scss'

function UIInput({ placeholder, type, actionOnInput, value }) {

    return (
        <input 
            type={type} 
            placeholder={placeholder}
            onInput={(event) => actionOnInput(event)}
            value={value}
        />
    )
}

export default UIInput