import React from 'react';

const WeatherIcon = ({ iconCode, altText, size }) => {
    return (
        <img 
            src={`http://openweathermap.org/img/w/${iconCode}.png`}
            alt={altText} 
            style={size ? { width: "25px" } : null}
        />
    );
};

export default WeatherIcon;