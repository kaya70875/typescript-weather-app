import './Footer.css';
import { WeatherData } from '../types/WeatherTypes';
import thermo from '../img/thermo.png';
import wind from '../img/wind.png';

interface FooterProps {
    data : WeatherData |null;
}

export default function Footer({data}: FooterProps) {
  return (
    <div className="footer">
        <div className="left-side" style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                <img src={thermo} style={{width : '12px' , height : '24px'}}/>
                <div className="left-info">
                    <header>Feels Like</header>
                    <p id="feels-like">{data?.main.feels_like + ' C'}</p>
                 </div>
            </div>
            <div className="right-side" style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                <img src={wind} style={{width : '24px', height : '24px'}}/>
                <div className="right-info">
                    <header id="wind-speed">{data?.wind.speed}</header>
                    <p>Wind Speed</p>
                </div>
            </div>
    </div>
       
  )
}
