import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherContainer = styled.div`
  place-self: center;
  padding: 40px;
  border-radius: 10px;
  background-image: linear-gradient(45deg, #2f4680, #500ae4);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 390px) {
    padding: 20px;
    
  
  }

`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
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
  const InputRef = useRef();
  const [weather, setWeather] = useState(false);
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": snow_icon,
    "11n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") return toast.error("Please enter a city name");

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === "404") {
        return toast.error("City not found");
      }
      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      
      
      console.log(error);
      setWeather(false);
      {toast.error("Unable to fetch API")}
    }
  };

  useEffect(() => {
    search("Chandigarh");
  }, []);
  return (
    <WeatherContainer>
      <SearchBar>
        <Input ref={InputRef} Inputype="text" placeholder="Search" />
        <Img
          src={search_icon}
          alt=""
          onClick={() => {
            search(InputRef.current.value);
          }}
        />
      </SearchBar>
      {weather ? (
        <>
          <WeatherImg src={weather.icon} alt="" />
          <Temperature>{weather.temperature}°c</Temperature>
          <Location>{weather.location}</Location>
          <WeatherData>
            <Column>
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weather.humidity} %</p>
                <span>Humidity</span>
              </div>
            </Column>
            <Column>
              <img src={wind_icon} alt="" />
              <div>
                <p>{weather.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </Column>
          </WeatherData>
        </>
      ) : (
        <>
        
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
