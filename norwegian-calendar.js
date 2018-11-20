const request = require( "request" )
const https = require( "https" )

function toAndFrom( sort ) {
    let sorted = ""
    if ( sort === "country" ) sorted = "true"
    if ( sort === "city" ) sorted = "false"

    let url = `https://www.norwegian.com/api/destinations/?destinationModel=AirportModel&includeRelations=true&sortByCountryAndName=${ sorted }&v=bb676533-8096-40fb-98c7-f22e11cfc4b4`

    console.log( url )

    https.get( url, ( resp ) => {
        let data = ''

        resp.on( 'data', (chunk) => { data += chunk } )
      
        resp.on( 'end', () => {
            let cities = JSON.parse( data ).destinations
            for ( let i = 0; i < cities.length; i++ ) {
                console.log( `${ cities[i].code }: ${ cities[i].cityName }, ${ cities[i].airportName } airport in ${ cities[i].countryName}` )
            }
        } )
      
    } ).on( "error", ( err ) => { console.log( "Error: " + err.message ) } )
}

function norwegianCalendar( origin, destination, date, currency ) {
    const url_calendar = `https://www.norwegian.com/api/fare-calendar/calendar?adultCount=1&destinationAirportCode=${ destination }&includeTransit=true&originAirportCode=${ origin }&outboundDate=${ date }&tripType=1&currencyCode=${ currency }&languageCode=nl-NL`
    
    request( url_calendar, ( error, response, body ) => {
        if ( error ) return "error:", error
      
        if ( statusCode =! 200 ) return "statusCode:", response && response.statusCode
      
        const destinations = JSON.parse( body )
        
        for ( let i = 0; i < destinations.outbound.days.length; i++ ) {
            let item = destinations.outbound.days[i]
            console.log( `${ item.date } ${ currency } ${ item.displayPrice } has ${ item.transitCount } transit count and is sold out: ${ item.isSoldOut }` )
        }
    } )
}

toAndFrom( "country" )

module.exports = norwegianCalendar