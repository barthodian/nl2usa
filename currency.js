const request = require( "request" )
const cheerio = require( "cheerio" )

request( "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", ( error, response, body ) => {
  if ( error ){
    console.log( "error:", error )
  }

  if ( statusCode =! 200 ){
    console.log( "statusCode:", response && response.statusCode )
  }

  const $ = cheerio.load( body )
  const usd = $( "Cube[currency='USD']" ).attr( "rate" )
  console.log( "1 EUR is", usd, "USD" )
  console.log( "1 USD is", 1 / usd, "USD" )
} )
