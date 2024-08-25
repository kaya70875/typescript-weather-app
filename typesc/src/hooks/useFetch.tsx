import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherData } from "../types/WeatherTypes";

const apiKey = 'c7844e4469c03a7e9f23e7a2b4c71954';

const useFetch = (cityName : string) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const [data , setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get<WeatherData>(url);
                console.log('response was : ' , response);
                setData(response.data);
            } catch(err) {
                return console.log(err);
            }
        }

        fetchData();
        
    } , [cityName])
    
    return {data}

}

export default useFetch;