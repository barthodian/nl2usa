const currency = require( "./currency" )
const distance = require( "./distance" )
const temperature = require( "./temperature" )
const norwegian = require( "./norwegian-calendar")

currency( 16, "USD", "EUR" )
currency( 11, "EUR", "USD" )

distance( 25, "inch", "mm" )
distance( 5, "mile", "m" )

temperature( 21, "fahrenheit", "celsius" )
temperature( 55, "kelvin", "celsius" )

norwegian( "FLLALL", "OSLALL", "2018-12-01", "USD" )
norwegian( "FLLALL", "OSLALL", "2018-12-01", "EUR" )