const request = require( "request" )
const cheerio = require( "cheerio" )

const current_usd = new Promise( ( resolve, reject ) => {
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

function currency_convert( unit, currency, conversion ) {
  if ( currency === "USD" && conversion === "EUR" ) {
    current_usd.then( value => {
      let result = unit / value
      console.log( `${unit} ${currency} is ${result} EUR` )
      return result
    }, reason => {} )
  }
  if ( currency === "EUR" && conversion === "USD" ) {
    current_usd.then( value => {
      let result = unit * value
      console.log( `${unit} ${currency} is ${result} USD` )
      return result
    }, reason => {} )
  }
}

module.exports = currency_convert