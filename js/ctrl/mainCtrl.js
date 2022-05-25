function test(city) {
    $.ajax('https://api.weatherapi.com/v1/current.json', {
        type: 'get',
        contentType: 'application/json',
        data: {
            key: 'b301c07a26014a9cbb355734222505',
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