import React from 'react'
import ReactDOM from 'react-dom'

function Main() {
    return (
        <div>
            <h1>main page</h1>
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)