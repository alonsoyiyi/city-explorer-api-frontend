import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <section>
                <h2>Weather</h2>
                {this.props.weather.map((day, index) => (
                    <div key={index}>
                        <p>day:{day.datetime}</p>
                        <p>description:{day.weather.description}</p>
                    </div>
                ))}
            </section>
        ); 
    }
}
export default Weather;