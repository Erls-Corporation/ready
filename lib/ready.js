
/*!

  ready
  https://github.com/edwardhotchkiss/ready/

*/

// CORE MODULES
var request = require("request");

// .EXPORTS
module.exports = ready = function(){};

// CHECK IF A DOMAIN IS UP
ready.check = function(domain, callback) {
  request(domain, function(error, response, body) {
    if (error) {
      callback(false);
    } else {
     if (response === undefined) {
     	callback(false);
     } else if (response.statusCode === 200) {
      	callback(true);
      } else {
      	callback(false);
      }
    };
  }); 
};

// UP.CHECK BY INTERVAL
ready.init = function(domain, interval) {
	interval = (interval || 5) * 60000
	var checker = setInterval(function() {
		UP.check(domain, function(up) {
			if (up) {
				console.log(domain + " is up!".green);
				clearInterval(checker);
			} else {
				console.log(domain + " isn't up".yellow);
			};
		});
	}, interval);
};

/* EOF */