import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <section>
                <h2>Weather</h2>
                {this.props.weather.map((day, index) => (
                    <div key={index}>
                        <p>day:{day.day}</p>
                        <p>description:{day.description}</p>
                    </div>
                ))}
            </section>
        ); 
    }
}
export default Weather;