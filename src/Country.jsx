import { useState } from 'react';
import './Country.css';
import CountryDettail from './CountryDettail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // setVisited(true)
        setVisited(!visited)
    }
    return (
        // <div className={`country ${visited && 'visited'}`}>
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style = {{color: visited ? 'purple' : 'red'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick = {() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
           
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country'} */}
            {
                visited ?  'I have visited this country'
                :
                'I want to visit'
            }

            <hr />

            <CountryDettail
            country= {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}>
                
            </CountryDettail>
        </div>
    );
};

export default Country;