const celsius = {
    fahrenheit: 33.8,
    kelvin: 274.15,
    rankine: 493.47
}

function fahrenheit_to_celsius( fahrenheit ){
    return ( fahrenheit - 32 ) / 1.8000
}

function kelvin_to_celsius( kelvin ){
    return kelvin - 273.15
}

function rankine_to_celsius( rankine ){
    return ( rankine - 491.67 ) / 1.8000
}

function convert( temperature, unit ) {
    for ( let i in celsius ) {
        switch ( unit ) {
            case "fahrenheit":
                if ( i === "fahrenheit" ) {
                    return fahrenheit_to_celsius( temperature )
                }
                break;
            case "kelvin":
                if ( i === "kelvin" ) {
                    return kelvin_to_celsius( temperature )
                }
                break;
            case "rankine":
                if ( i === "rankine" ) {
                    return rankine_to_celsius( temperature )
                }
                break;
        }
    }
}

console.log( "1 Fahrenheit is", convert( 1, "fahrenheit" ), "Celsius" )
console.log( "1 Kelvin is", convert( 1, "kelvin" ), "Celsius" )
console.log( "1 Rankine is", convert( 1, "rankine" ), "Celsius" )

