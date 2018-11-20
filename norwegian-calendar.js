const request = require( "request" )


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

module.exports = norwegianCalendar