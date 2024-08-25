import './Location.css';
import locationImg from '../img/location.png'
import { WeatherData } from '../types/WeatherTypes';

interface LocationProps {
  data : WeatherData | null;
}

export default function Location({data} : LocationProps) {
  return (
    <div className="location-section">
        <img src={locationImg} />
        <header>{data?.name}</header>
    </div>
  )
}
