import { WeatherData } from '../types/WeatherTypes';
import './Content.css';
import imgRainy from '../img/rainy.png';
import imgSun from '../img/sun.png';

interface ContentProps {
    data : WeatherData | null;
}

export default function Content({data} : ContentProps) {
  const temp = data?.main?.temp ?? 0;
    
  return (
    <div className="content">
        <img src={temp < 20 ? imgRainy : imgSun} id="weather-img" />
        <div className="content-info">
            <header id="header-celcius">{data?.main.temp}°C</header>
            <p id="header-info">{data && data?.weather[0].main.charAt(0).toUpperCase() + data?.weather[0].main.slice(1)}</p>
        </div>
    </div>
  )
}
