import axios from "axios";
const { createContext, useState, useEffect } = require("react");

const WeatherContext = createContext()
export const WeatherProvider = ({children}) => {
    const [weather , setWeather] = useState([]);
    const [city , setCity] = useState('istanbul');
    const [inputCity , setInputCity] = useState() 
    
    useEffect(() => {
        const key ="fbf6d6ea02c5ba3b213f928bbfc05e75"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
        
        axios(baseURL).then((res) => setWeather(res.data)).catch((e) => console.log("error")) 
        
    },[city])
    
    const datas = {
            location: weather.name,
            country : weather.sys ? <a>-{weather.sys.country}</a>: null ,
            temp: weather.main ? <a>{weather.main.temp.toFixed()}°C</a> : null,
            desc: weather.weather ? <a>{weather.weather[0].description.toUpperCase()}</a> : null,
            feels: weather.main ? <a>{weather.main.feels_like.toFixed()}°C</a>: null,
            humidity: weather.main ? <a>{weather.main.humidity} %</a> : null, 
        }
    
        const values = {
        weather, setWeather, city, setCity, inputCity, setInputCity, datas
    }

    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}
 
export default WeatherContext