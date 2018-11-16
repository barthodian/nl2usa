const milimeter = {
    "inch": 25.4,
    "foot": 304.8,
    "yard": 914.4,
    "mile": 1609340
}

for ( let i in milimeter ) {
    const distance = i.charAt( 0 ).toUpperCase() + i.slice( 1 )
    console.log( "1", distance, "is equivalent to", milimeter[i], "milimeter,", milimeter[i] / 10, "centimeter, and", milimeter[i] / 1000, "meter" )
}
