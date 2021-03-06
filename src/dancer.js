// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
 
  this.step();
  this.setPosition(this.top, this.left); 
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // function
  var context = this;

  setTimeout(function() { context.step(); }, this.timeBetweenSteps);
};

 // this one sets the position to some random default point within the body
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

 // this one sets the position to some random default point within the body
Dancer.prototype.lineUp = function(top) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: 50
  };
  this.$node.css(styleSettings);
};

// Dancer.prototype.diagonal = function(top) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: top - 10; 
//   };
//   this.$node.css(styleSettings);
// };


 

