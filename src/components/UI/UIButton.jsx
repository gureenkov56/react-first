import React from 'react'

function UIButton({children, color, actionOnClick}) {

    return (
        <button 
            onClick={actionOnClick}
            className={`btn ${color}`}
        >
            {children}
        </button>
    )
}

export default UIButton