import React from 'react'
import '../../styles/uiinput.scss'

function UIInput({ placeholder, type }) {

    return (
        <input 
            type={type} 
            placeholder={placeholder}
        />
    )
}

export default UIInput