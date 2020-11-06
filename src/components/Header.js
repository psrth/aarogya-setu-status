import React, { Component } from 'react'

function Header(){
    return (
        <header>
            <h1 style={ headerStyle }>
                { headerText}
            </h1>
        </header>
    )
}

const headerText = "Aarogya Setu COVID Status"

const headerStyle = {
    background: '#333',
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

export default Header;