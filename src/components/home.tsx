import React from 'react'
import fetch from '../helpers/fetchData'

export default function home() {
    return (
        <div>
            <button onClick={(event: any) => fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')}>fetch</button>
        </div>
    )
}