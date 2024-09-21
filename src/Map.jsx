import React from "react";
import { Image } from "react-bootstrap";

function Map(props){

        return(
            <Image src={props.img_url} alt={props.city} title={props.city} rounded fluid/>
        );

}
export default Map;