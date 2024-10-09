import CountryData from "./CountryData";


const CountryDettail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h2>Country Detail</h2>
            <hr />
            <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}>
                
            </CountryData>
        </div>
    );
};

export default CountryDettail;