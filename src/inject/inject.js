var movieArray = [];
window.addEventListener("load", function() {
	var body = $('body');
	var tip = $('.tippable');
	body.prepend('<div class="percentage"></div>');
	var tipFunction = function(e){
		var that = this;
		var apiKey = 'shsxnfe3v2ggydvua7u2mtt8';
		var movieName = this.innerText.replace(/ /g, '+');
		var url = 'http://209.237.233.58/api/public/v1.0/movies.json?apikey='  + apiKey + '&q=' + movieName + '&page_limit=1&page=1';
		var encodedUrl = encodeURI(url);
		var exists = movieArray.filter(function(value){
			return value.name == that.innerText;
		});
		if(exists.length == 0){
			var xhr = new XMLHttpRequest();
			xhr.open("GET", encodedUrl, true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					var resp = JSON.parse(xhr.responseText);
					var object = { name: that.innerText, data: resp };
					var critic = resp.movies[0].ratings.critics_score;
					var audience = resp.movies[0].ratings.audience_score;
					if(critic == -1){
						$('.percentage').addClass('user').removeClass('critic');
						$('.percentage').text(audience + '%');
					} else {
						$('.percentage').addClass('critic').removeClass('user');
						$('.percentage').text(critic + '%');
					}
					
					movieArray.push(object);
				}
			}
			xhr.send();	
			
		} else {
			var critic = exists[0].data.movies[0].ratings.critics_score;
			var audience = exists[0].data.movies[0].ratings.audience_score;
			if(critic == -1){
				$('.percentage').addClass('user').removeClass('critic');
				$('.percentage').text(audience + '%');
			} else {
				$('.percentage').addClass('critic').removeClass('user');
				$('.percentage').text(critic + '%');
			}
		}
		
	};
	tip.mouseover(tipFunction)
    
}, true);



chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {	
	console.log(msg);
	
	
	
}); 