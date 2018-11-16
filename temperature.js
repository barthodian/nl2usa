const celsius = {
    fahrenheit: 33.8,
    kelvin: 274.15,
    rankine: 493.47
}

function convert( temperature, unit ) {
    for ( let i in celsius ) {
        switch ( unit ) {
            case "fahrenheit":
                if ( i === "fahrenheit" ) {
                    return ( temperature - 32 ) / 1.8000
                }
                break;
            case "kelvin":
                if ( i === "kelvin" ) {
                    return temperature - 273.15
                }
                break;
            case "rankine":
                if ( i === "rankine" ) {
                    return ( temperature - 491.67 ) / 1.8000
                }
                break;
        }
    }
}

console.log( convert( 79, "fahrenheit" ) )
