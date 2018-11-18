# NL2USA

Set of basic conversion tools from US standards to Dutch standards.

## Getting Started

Run installation and run server:

```bash
npm install
npm start
```

### Currency conversion

For USD to EUR conversion:

```node
currency( 16, "USD", "ECB" )
```
Example output:

```output
16 USD is 18.1536 USD - European Central Bank
```

For EUR to USD conversion:

```node
currency( 11, "EUR", "ECB" )
```

Example output:

```output
11 EUR is 9.695046712497795 USD - European Central Bank
```

### Distance conversion

For distance conversion:

```bash
node distance
```

Example output:

```output
1 Inch is equivalent to 25.4 milimeter, 2.54 centimeter, and 0.0254 meter
1 Foot is equivalent to 304.8 milimeter, 30.48 centimeter, and 0.3048 meter
1 Yard is equivalent to 914.4 milimeter, 91.44 centimeter, and 0.9144 meter
1 Mile is equivalent to 1609340 milimeter, 160934 centimeter, and 1609.34 meter
```

### Temperature conversion

For temperature conversion:

```bash
node temperature
```

Example output:

```output
1 Fahrenheit is -17.22222222222222 Celsius
1 Kelvin is -272.15 Celsius
1 Rankine is -272.59444444444443 Celsius
```

## Why

## Todo

### Currency.js

- [x] currency.js
- [x] export module
- [ ] remove and replace dependecies

### Distance.js

- [x] distance.js
- [x] export module

### Temperature.js

- [x] temperature.js
- [x] export module
- [ ] code cleanup
