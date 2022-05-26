$(document).ready(function() {
	
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('#site-content');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#site-footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		console.log('Content Height = ' + siteContentHeight + 'px');
		console.log('Content Width = ' + siteContentWidth + 'px');
		console.log('Footer Height = ' + siteFooterHeight + 'px');
		console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 50
		});
	};
});

function test(city) {
    $.ajax('https://api.weatherapi.com/v1/current.json', {
        type: 'GET',
        contentType: 'application/json',
        data: {
            key: 'b301c07a26014a9cbb355734222505',
            q: city,
            aqi: 'no'
        },
        success: function (data) {
            console.log(data.location)
            document.getElementById('test').innerHTML = data.location.country;

        }
    });
}

function lol() {
    console.log($("#abc").html());
    test($("#abc").html());
}

function reloadPage() {
    window.location.reload(true);
}
