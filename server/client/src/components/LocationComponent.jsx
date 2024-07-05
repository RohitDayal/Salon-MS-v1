// src/LocationComponent.js
import React, { useState, useEffect } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
    postalCode: "",
  });
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
        getGeocodeData(latitude, longitude);
      },
      (error) => {
        setError("Error getting location");
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  const getGeocodeData = async (latitude, longitude) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const addressComponents = data.results[0].address_components;
      let city = "";
      let postalCode = "";

      addressComponents.forEach((component) => {
        if (component.types.includes("locality")) {
          city = component.long_name;
        }
        if (component.types.includes("postal_code")) {
          postalCode = component.long_name;
        }
      });

      setLocation((prevLocation) => ({
        ...prevLocation,
        city,
        postalCode,
      }));
    } catch (error) {
      setError("Error fetching geocode data");
      console.error("Error fetching geocode data:", error);
    }
  };

  return (
    <div>
      <h1>Location Details</h1>
      {error && <p>{error}</p>}
      {location.latitude && location.longitude ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>City: {location.city}</p>
          <p>Postal Code: {location.postalCode}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
