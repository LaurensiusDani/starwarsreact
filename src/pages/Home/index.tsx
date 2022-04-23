import React, { useEffect } from 'react';
import httpCall from '../../utils/httpCall';
import {
    DivContainerHome
} from './style';

function Home() {
    const fetchPeople = async () => {
        try {
            const response = await httpCall('https://swapi.dev/api/people', 'GET');
            console.log(response)
        }catch (err) {
            console.log("err --->", err);
        }
    }

    useEffect(() => {
        fetchPeople();
    }, [])

    return (
    <h1>Home..</h1>
    )
}

export default Home;