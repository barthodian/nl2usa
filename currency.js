const request = require( "request" )
const cheerio = require( "cheerio" )


const ecb_to_usd = new Promise( ( resolve, reject ) => {
  request( "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", ( error, response, body ) => {
    if ( error ){
      return "error:", error
    }
  
    if ( statusCode =! 200 ){
      return "statusCode:", response && response.statusCode
    }
  
    const $ = cheerio.load( body )
    const usd = $( "Cube[currency='USD']" ).attr( "rate" )
    resolve( usd )
  } )
} )

function currencyConvert( unit, currency, source ) {
  switch ( source ) {
    case "ECB":
      const ecb = "European Central Bank"

      if ( currency === "USD" ) {
        ecb_to_usd.then( value => {
          console.log( unit + " " + "EUR is", unit * value + " " + currency, "-", ecb )
        }, reason => {} )
      }
      if ( currency === "EUR" ) {
        ecb_to_usd.then( value => {
          console.log( unit + " " + currency, "is", unit / value, "EUR -", ecb )
        }, reason => {} )
      }
      break;
  
    default:
      break;
  }
}

module.exports = currencyConvert