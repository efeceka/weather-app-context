import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'

function Main() {
    const {datas} = useContext(WeatherContext)
  return (
    <div className='main'>
        <div><p>{datas.location}{datas.country}</p></div>
        <div><h1>{datas.temp} </h1></div>
        <div><p>{datas.desc}</p></div>
    </div>
  )
}

export default Main