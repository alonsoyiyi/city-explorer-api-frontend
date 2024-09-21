import React from "react";

function LatLon (props){
        return(
            <>
            <h2> Bienvenidos a {props.city}</h2>
            <p> {props.city} esta ubicada en latitud:{props.lat} y en longitud:{props.lon} </p>
            </>
        )
}
export default LatLon;