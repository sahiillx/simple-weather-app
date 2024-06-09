import React from 'react';
import styled from 'styled-components';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const WeatherContainer = styled.div`
    place-self: center;
    padding: 40px;
    border-radius: 10px;
    background-image: linear-gradient(45deg, #2f4680, #500ae4);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SearchBar = styled.div`
    display: flex;
    align-items:center;
    gap: 12px;
`;
const Input = styled.input`
    height: 50px;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 25px;
    color: #626262;
    background: #ebfffc;
    font-size: 18px;
`;
const Img = styled.img`
    width: 50px;
    padding: 15px;
    border-radius: 50%;
    background: #ebfffc;
    cursor: pointer;
`;

const WeatherImg = styled.img`
    width: 150px;
    margin: 30px 0;
`;
const Temperature = styled.p`
    color: #fff;
    font-size: 80px;
    line-height: 1;
`;
const Location = styled.p`
    color: #fff;
    font-size: 40px;
   
`;

const WeatherData = styled.div`
    width: 100%;
    margin-top: 40px;
    color: #fff;
    display: flex;
    justify-content: space-between;

`;


const Column = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 22px;


    span {
        display: block;
        font-size: 16px;
    }

    img {
        width: 26px;
        margin-top: 10px;
    }
`;

const Weather = () => {
  return (
    <WeatherContainer>
        <SearchBar>
            <Input type='text' placeholder='Search'/>
            <Img src={search_icon} alt="" />
        </SearchBar>
        <WeatherImg src={clear_icon} alt="" />
        <Temperature>16°C</Temperature>
        <Location>London</Location>
        <WeatherData>
            <Column>
            <img src={humidity_icon} alt="" />
            <div>
                <p>91 %</p>
                <span>Humidity</span>
            </div>
            </Column>
            <Column>
            <img src={wind_icon} alt="" />
            <div>
                <p>3.6 km/h</p>
                <span>Wind Speed</span>
            </div>
            </Column>
        </WeatherData>
    </WeatherContainer>
  )
}

export default Weather