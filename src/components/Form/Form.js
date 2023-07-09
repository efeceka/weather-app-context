import React, { useContext} from 'react'
import WeatherContext from '../../context/WeatherContext'

function Form() {
    const {setCity, inputCity , setInputCity} = useContext(WeatherContext)
    
    const onChange = (e) => {
        setInputCity(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setCity(inputCity)
        setInputCity('')
    }
  return (
    <div className='search'>
        <form onSubmit={onSubmit}>
            <input type="text"
            onChange={onChange}
            value={inputCity || ''}
            />
        </form>
        
    </div>
  )
}

export default Form