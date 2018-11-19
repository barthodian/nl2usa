const request = require( "request" )


function norwegianCalendar( origin, destination, date, currency ) {
    const url_calendar = `https://www.norwegian.com/api/fare-calendar/calendar?adultCount=1&destinationAirportCode=${ destination }&includeTransit=true&originAirportCode=${ origin }&outboundDate=${ date }&tripType=1&currencyCode=${ currency }&languageCode=nl-NL`
    
    request( url_calendar, ( error, response, body ) => {
        if ( error ){
          return "error:", error
        }
      
        if ( statusCode =! 200 ){
          return "statusCode:", response && response.statusCode
        }
      
        const destinations = JSON.parse( body )
        console.log( destinations.outbound.days )
    } )
}

module.exports = norwegianCalendar