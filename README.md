# International Country Dialing Codes
📦 🇧🇷 A simple package to get the international direct dialing countries https://www.npmjs.com/package/international-direct-dialing

## Getting Started

### Prerequisites

```sh
node -v
node: v8.3
```

## Installing

#### Using npm
```sh
npm install --save international-direct-dialing
```

#### Using Yarn
```sh
yarn add international-direct-dialing
```

## How to use

```js
const IDD = require('international-direct-dialing')
const idd = new IDD()

// filter by name
const brazil = idd.byCountryName('brazil')

/**
 * Get all country data:
  {
      country: 'Brazil',
      nativeName: 'Brasil',
      idd: 55,
      region: 'Americas',
      timezones: [ 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00' ]
}
*/
brazil.toJson()

// get IDD
brazil.iddCode // 55

// resetting the filter
idd.reset()

// filter by translate name
idd.byTranslateName('ブラジル', 'ja')

/**
 * Get countries with translate name:
  {
      country: 'Brazil',
      nativeName: 'Brasil',
      idd: 55,
      region: 'Americas',
      timezones: [ 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00' ]
}
*/
idd.toJson()

```

## Full API Reference

```js
const IDD = require('international-direct-dialing')
const idd = new IDD()

// lists all the countries data disregading any filter
idd.list()

// reset any applied filters
idd.reset()

// filter by country name
// passing country full name: single result
idd.byCountryName('brazil')
idd.toJson() // all country data as an array of objects

idd.iddCode // only IDD code

// passing country partial name: multiple results
idd.reset().byCountryName('ind')

```

## Running the tests

To run the tests go to the terminal and enter `npm run test`

## Contributing

If you want to collaborate, please feel free. I appreciate any help :)

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/godrix/international-direct-dialing/tags).

## Authors

* **Carlos Gabriel** - [Profile](https://github.com/godrix)

See also the list of [contributors](https://github.com/godrix/international-direct-dialing/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.