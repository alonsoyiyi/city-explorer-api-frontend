import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CitySearch from "./CitySearch";
import axios from "axios";
import LatLon from "./LatLon";
import Map from "./Map";
import Movie from "./Movie";
import Weather from "./Weather";


const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function Explorer() {
    const [displayError,setDisplayError]=useState(false);
    const [displayMap,setDisplayMap]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const [latitude,setLatitude]=useState('');
    const [location,setLocation]=useState('');
    const [longitude,setLongitude]=useState('');
    const [searchQuery,setSearchQuery]=useState('');
    const [weather, setWeather]=useState([]);
    const [movie,setMovie]=useState([]);

    const updateCity = (e) => {
        setSearchQuery(e.target.value);
    };
    const displayLocation = async () => {
        const url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
        let location;
        try {
            location = await axios.get(url);
            console.log(location);
            setLocation(location.data[0].display_name);
            setLatitude(location.data[0].lat);
            setLongitude(location.data[0].lon);
            setDisplayMap(true);
            setDisplayError(false);
        } catch (error) {
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status+':'+error.response.data.error);
            console.log(error);
        }
        displayWeather(location.data[0].lat, location.data[0].lon);
    };

    const displayWeather = async (lat, lon) => {

        try {
            let weather = await axios.get(`${SERVER_URL}weather`, { params: { lat: lat, lon: lon } });
            console.log(weather);
            setWeather(weather.data);
        } catch (error) {
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status + ':' + error.response.data.error);
        }

        displayMovie(weather.country_code)
    };

    const displayMovie = async(country)=>{
        try{
            let movie=await axios.get(`${SERVER_URL}movie`,{params:{country:country}});
            console.log(movie);
            setMovie(movie.data)
        }catch(error){
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status + ':' + error.response.data.error);
        }
    }
    

    return (
        <Container>
            <Row>
                <Col>
                    <CitySearch
                        updateCity={updateCity}
                        displayLocation={displayLocation}
                        hasError={displayError}
                        errorMessage={errorMessage}
                    />
                </Col>
            </Row>
            {displayMap &&
                <>
                    <Row>
                        <Col>
                            <LatLon
                                city={location}
                                lat={latitude}
                                lon={longitude}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${latitude},${longitude}&zoom=16&size=600x400&format=jpg&maptype=streets`}
                                city={location}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Weather weather={weather} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Movie movie={movie}/>
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );

}
export default Explorer;