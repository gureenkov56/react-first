import React from 'react'

function UIButton({children, color}) {

    return (
        <button className={`btn ${color}`}>
            {children}
        </button>
    )
}

export default UIButton