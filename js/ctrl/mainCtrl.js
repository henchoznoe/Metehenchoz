function test(city) {
    $.ajax('https://api.weatherapi.com/v1/current.json', {
        type: 'get',
        contentType: 'application/json',
        data: {
            key: '36ff9f86e4a940ceb74131540222305',
            q: city,
            aqi: 'no'
        },
        success: function (data) {
            console.log(data.location)
            document.getElementById('test').innerHTML = data.location.tz_id;

        }
    });
}
function lol() {
    console.log($("#abc").html());
    test($("#abc").html());
}