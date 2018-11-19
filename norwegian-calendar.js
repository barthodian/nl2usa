const request = require( "request" )
const cheerio = require( "cheerio" )

const url_destinations = "https://www.norwegian.com/api/destinations/?destinationModel=AirportModel&includeRelations=true&sortByCountryAndName=false&v=b0e2c3c2-989b-46fa-b41e-bbc81bb6182a"

function norwegianCalendar( origin, destination, date ) {
    request( url_destinations, ( error, response, body ) => {
        if ( error ){
          return "error:", error
        }
      
        if ( statusCode =! 200 ){
          return "statusCode:", response && response.statusCode
        }
      
        const $ = cheerio.load( body )
        const destinations = JSON.parse( body )
        //const usd = $( "Cube[currency='USD']" ).attr( "rate" )
        console.log( destinations )
    } )
}

norwegianCalendar( "FLLALL", "OSLALL", "2018-" )