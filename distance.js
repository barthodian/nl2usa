const milimeter = {
    "inch": 25.4,
    "foot": 304.8,
    "yard": 914.4,
    "mile": 1609340
}
const common_unit = {
    "mm": 1,
    "cm": 10,
    "dm": 100,
    "m": 1000,
    "km": 1000000
}

for ( let i in milimeter ) {
    const distance = i.charAt( 0 ).toUpperCase() + i.slice( 1 )
    console.log( "1", distance, "is equivalent to", milimeter[i], "milimeter,", milimeter[i] / 10, "centimeter, and", milimeter[i] / 1000, "meter" )
}

function distanceConvert( distance, unit, conversion ) {
    for ( let i in milimeter ) {
        // const distance = i.charAt(0).toUpperCase() + i.slice(1)
        if ( unit === i ) {
            for ( let i in common_unit ) {
                if ( conversion === i ) {
                    console.log( conversion )
                }
            }
        }
    }
}

distanceConvert( 25, "inch", "cm" )