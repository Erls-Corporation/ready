
require("colors");
var ready = require("./lib/ready");

// INIT WITH INTERVAL [5 MINUTE DEFAULT, SET FOR 30 INSTEAD]
ready.init("http://www.some-random-new-domain.com/", 30);

/* EOF */