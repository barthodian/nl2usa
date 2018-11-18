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
                    console.log( temperature + " " + unit, "is", fahrenheit_to_celsius( temperature ), "celsius" )
                }
                break;
            case "kelvin":
                if ( i === "kelvin" ) {
                    console.log(  temperature + " " + unit, "is", kelvin_to_celsius( temperature ), "celsius" )
                }
                break;
            case "rankine":
                if ( i === "rankine" ) {
                    console.log(  temperature + " " + unit, "is", rankine_to_celsius( temperature ), "celsius" )
                }
                break;
        }
    }
}

module.exports = convert