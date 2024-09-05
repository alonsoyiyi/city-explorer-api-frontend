import React from "react";

class LatLon extends React.Component{
    render(){
        return(
            <>
            <h2> Bienvenidos a {this.props.city}</h2>
            <p> {this.props.city} esta ubicada en latitud:{this.props.lat} y en longitud:{this.props.lon} </p>
            </>
        )
    }
}
export default LatLon;