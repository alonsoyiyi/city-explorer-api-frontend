import React from "react";

function Weather(props) {

    return (
        <section>
            <h2>Weather</h2>
            {props.weather.map((x, index) => (
                <div key={index}>
                    <p>day:{x.day}</p>
                    <p>description:{x.description}</p>
                    <p>countryCode:{x.country_code}</p>
                </div>
            ))}
        </section>
    );

}
export default Weather;