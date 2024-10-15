import CountryData from "./CountryData";


const CountryDettail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props; 
    
    return (
        <div>
            <h2>Country Detail</h2>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}>       
            </CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDettail;