import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CitySearch from "./CitySearch";
import axios from "axios";
import LatLon from "./LatLon";
import Map from "./Map";
import Weather from "./Weather";
const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function Explorer(props) {
    const [country, setCountry] = useState('xyz');
    const [state, setState] = useState({
        searchQuery: '',
        location: '',
        countryCode: '',
        latitude: '',
        longitude: '',
        displayMap: false,
        displayError: false,
        errorMessage: '',
        weather: []
    });
    const updateCity = (e) => {
        setState(prevState => {
            return { ...prevState, searchQuery: e.target.value }
        });
    };

    const getCountryCode = async() => {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        const urlUsers = 'https://api.backend.com/users/34';
        const userJson = {
            name: '', email: '', posts: [,,,,], 
        }
        const urlPosts = 'https://api.backend.com/posts/{userId}';


        let countryData;
        try {
            countryData = await axios.get(url);
            console.log(countryData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (country === 'xyz') return;
        getCountryCode();
    }, [country]);


    // CLEAN CODE:
    // Principio DRY: Dont repeat your self -> Modularizacion.
    // Principio KISS: Keep it super simple -> Crear funciones que solo hagan 1 cosa.


    const displayLatLon = async () => {
        const url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${state.searchQuery}&format=json`;
        let location;
        try {
            location = await axios.get(url);

            setState(prevState => {
                return {
                    ...prevState,
                    location: location.data[0].display_name,
                    latitude: location.data[0].lat,
                    longitude: location.data[0].lon,
                    displayMap: true,
                    displayError: false
                }
            });
            setCountry(location.data[0].display_name.toLowerCase().split(',').at(-1).trim())
        } catch (error) {
            setState(prevState => {
                return {
                    ...prevState,
                    displayMap: false,
                    displayError: true,
                    errorMessage: error.response.status + ':' + error.response.data.error
                }
            });
            
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <p>{state.country}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CitySearch
                        updateCity={updateCity}
                        displayLatLon={displayLatLon}
                        hasError={state.displayError}
                        errorMessage={state.errorMessage}
                    />
                </Col>
            </Row>
            {state.displayMap &&
                <>
                    <Row>
                        <Col>
                            <LatLon
                                city={state.location}
                                lat={state.latitude}
                                lon={state.longitude}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Map img_url={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${state.latitude},${state.longitude}&zoom=16&size=600x400&format=jpg&maptype=streets`}
                                city={state.location}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Weather weather={state.weather} />
                        </Col>
                    </Row>
                </>
            }
        </Container>
    );

}

export default Explorer;