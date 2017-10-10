exports.getWeather = function() {
    return {
        locations: [{
            name: 'Portland',
            forecastUrl: 'http://www.wunderground.com/US?OR?Portland.html',
            iconUrl: 'http://icon-ak.wxug.com/i/c/k/cloudy.gif',
            weather: 'OverCast',
            temp: '54.1 F (12.3 C)'
        }]
    }
}