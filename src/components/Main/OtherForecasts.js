import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'

function OtherForecasts() {
    const {datas} = useContext(WeatherContext)
  return (
    <div className='others'>
        <div><p>Hissedilen : {datas.feels}</p></div>
        <div><p>Nem : {datas.humidity}</p></div>
    </div>
  )
}

export default OtherForecasts