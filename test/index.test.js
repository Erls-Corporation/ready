
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");
var request = require("request");

// CORE
var ready = require("../lib/ready");

// VOWS!
vows.describe("General Module Tests").addBatch({
  "when instantiating ready" : {
    topic : function() { 
      return ready;
    },
    "ready should be a function" : function(topic) {
      topic.should.be.a("function");
    },
  },
  "when making a request to google" : {
    topic : function() {
      ready.check("http://www.google.com", this.callback);
    },
    "we should get back a 200" : function (ready) {
      assert.equal(ready, true);
    }
  },
  "when making a request to check an unavailable domain" : {
    topic : function() {
      ready.check("http://zzafgretfdjjdjfjfjddnn223cdmss.com/", this.callback);
    },
    "we shouldnt get back data, and the domain should show as not available" : function(ready) {
      assert.equal(ready, false);
    }
  }
}).export(module);

/* EOF */