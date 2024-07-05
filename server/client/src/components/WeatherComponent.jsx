// src/WeatherComponent.js
import React, { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: "",
  });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation((prevLocation) => ({
          ...prevLocation,
          latitude,
          longitude,
        }));
        getCityName(latitude, longitude);
      },
      (error) => {
        setError("Error getting location");
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  const getCityName = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const { address } = data;
      const fullAddress = `${address.suburb || ""}, ${
        address.city || address.town || address.village || ""
      }, ${address.county || ""}, ${address.state || ""}, ${
        address.postcode || ""
      }, ${address.country || ""}`;

      setLocation((prevLocation) => ({
        ...prevLocation,
        address: fullAddress,
      }));

      getWeatherData(
        latitude,
        longitude,
        address.city || address.town || address.village || ""
      );
    } catch (error) {
      setError("Error fetching city name");
      console.error("Error fetching city name:", error);
    }
  };

  const getWeatherData = async (latitude, longitude, city) => {
    const apiKey = "dac24924c5d4c0ffe33a28ab3a9c35c5";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
    
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather({
          city: city || data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
        });
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error fetching weather data");
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <h1>Weather Details</h1>
      {error && <p>{error}</p>}
      {location.latitude && location.longitude ? (
        weather ? (
          <div>
            <p>Full Address: {location.address}</p>
            <p>City: {weather.city}</p>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Description: {weather.description}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
