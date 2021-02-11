'use strict';

const internationalCountryDialingCodes = require('./international-country-dialing-codes.json');

class IDD {
    constructor(idd = internationalCountryDialingCodes) {

        this.idd = idd;

        this.original = idd;
    }

    list() {
        return this.original;
    }

    reset() {
        this.idd = this.original;
    }

    toJson() {
        const formatIdd = this.idd.map(item => {
            return {
                country: item.country,
                nativeName:item.nativeName,
                idd: item.IDD_country,
                region:item.region,
                timezones: item.timezones,
            }
        });

        if (formatIdd.length === 1) {
            return formatIdd[0];
        }
        return formatIdd;
    }

    byCountryName(name) {
        if (typeof name !== 'string') {
            return this;
        }

        this.idd = this.idd.filter(({ country }) => this.containString(country, name));

        return this;
    }

    byISOName(iso) {
        if (typeof iso !== 'string') {
            return this;
        }
        
        if(iso.length !== 2){
            throw new Error('Only the ISO 3166 format is supported');
        }

        this.idd = this.idd.filter(({ ISO_code }) => this.containString(ISO_code, iso));

        return this;
    }

    byIDD(iddCode) {
        if (typeof iddCode === 'string' || typeof iddCode === 'number') {
            this.idd = this.idd.filter(({ IDD_country }) => IDD_country == iddCode);
        }

        return this;
    }

    byNativeCountryName(name) {
        if (typeof name !== 'string') {
            return this;
        }

        this.idd = this.idd.filter(({ nativeName }) => this.containString(nativeName, name));

        return this;
    }

    byRegion(name) {
        if (typeof name !== 'string') {
            return this;
        }

        this.idd = this.idd.filter(({ region }) => this.containString(region, name));

        return this;
    }

    byTimezones(timezone) {
        if (typeof timezone !== 'string') {
            return this;
        }

        this.idd = this.idd.filter(({ timezones }) => {
            const matchTZ = timezones.find(i => this.containString(i, timezone))
            return matchTZ;
        });

        return this;
    }

    byTranslateName(name, language) {
        if (typeof name !== 'string') {
            return this;
        }

        this.idd = this.idd.filter(({ translations }) => this.containString(translations[language], name));

        return this;
    }

    containString(str1, str2) {
        return String(str1).toLowerCase().includes(String(str2).toLowerCase())
    }

    get iddCode() {
        const IDDFound = this.idd.length;
        if (!IDDFound) {
            throw new Error('Country not found');
        }

        if (IDDFound === 1) {
            return this.idd[0].IDD_country;
        }

        return this.idd;

    }
    get countrieName() {
        const countryFound = this.idd.length;
        if (!countryFound) {
            throw new Error('Country not found');
        }

        if (countryFound === 1) {
            return this.idd[0].country;
        }

        return this.idd;

    }
    get nativeCountrieName() {
        const countryFound = this.idd.length;
        if (!countryFound) {
            throw new Error('Country not found');
        }

        if (countryFound === 1) {
            return this.idd[0].nativeName;
        }

        return this.idd;

    }
    get regionName() {
        const countryFound = this.idd.length;
        if (!countryFound) {
            throw new Error('Country not found');
        }

        if (countryFound === 1) {
            return this.idd[0].region;
        }

        return this.idd;

    }

    get timezone() {
        const countryFound = this.idd.length;
        if (!countryFound) {
            throw new Error('Country not found');
        }

        if (countryFound === 1) {
            return this.idd[0].timezones;
        }

        return this.idd;

    }
    
}

module.exports = IDD;