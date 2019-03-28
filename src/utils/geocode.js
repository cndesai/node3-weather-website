const request = require('request');

// Geocoding API
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hpbnRhbmRlc2FpIiwiYSI6ImNqdHBsM2tvZDA1YW8zeW11YWVxaDFlOW0ifQ.hnRTOTHWIt6VZrcTivXG9w';

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback("Unable to connect to Geocode Location Service!!!");
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location!!!');
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }

    });
};

module.exports = geocode;
