const request = require("request");

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/6d561178c8830f3df550ecd0ae2a935b/' + latitude + ',' + longitude;

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to Weather Service!!!', undefined);
        }
        else if(response.body.error) {
            callback('Code - ' + response.body.code
                 + ', Error - ' + response.body.error, undefined);
        }
        else {
            console.log('It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
            callback(
                undefined,
                response.body.daily.data[0].summary + 
              " It is currently " +
                response.body.currently.temperature +
                " degress out. There is a " +
                response.body.currently.precipProbability +
                "% chance of rain."
            );
    }

    });
};

module.exports = forecast;