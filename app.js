const currency = require( "./currency" )
const distance = require( "./distance" )
const temperature = require( "./temperature" )

currency( 16, "USD", "ECB" )
currency( 11, "EUR", "ECB" )

distance( 25, "inch", "mm" )
distance( 5, "mile", "m" )

temperature( 21, "fahrenheit", "celsius" )
temperature( 55, "kelvin", "celsius" )