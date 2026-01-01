import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'




const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setvisitedFlag] = useState([])

    const countries = use(countriesPromise);
    const handlevisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlag, flag]
        setvisitedFlag(newVisitedFlags)
    }
    const handleVisitedCountries = (country) => {
        // console.log('country visited' country)
        const newVisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newVisitedCountries)

    }
    // console.log(countries);

    return (
        <div>
            <h1>traveling countries: {countries.length} </h1>
            <h3>Travel so far: {visitedCountries.length}</h3>
            <div>
                {
                    visitedFlag.map(flag=> <img src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => (
                        <li key={country.name.common}>{country.name.common}</li>
                    ))
                }
            </ol>


            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        handlevisitedFlag={handlevisitedFlag}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;