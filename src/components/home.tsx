import React, { MouseEvent } from 'react'
import fetch from '../helpers/fetchData'

export default function home() {
    return (
        <div id='mainPage'>
            <h1>market tracker</h1>
            <button onClick={(event: MouseEvent) => fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ACB&interval=5min&apikey=${process.env.REACT_APP_ALPHA_KEY}`)}>fetch</button>
        </div>
    )
}