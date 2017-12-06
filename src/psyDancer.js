var PsyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  debugger;
  // Dancer.call(this, $node);
};

PsyDancer.prototype = Object.create(Dancer.prototype);
PsyDancer.prototype.constructor = PsyDancer;
                         
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
PsyDancer.prototype.step = function() {
  // debugger;
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  console.log(this);
  // this.$node.toggle();
};

 // this one sets the position to some random default point within the body
// Dancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: 400
//   };
//   this.$node.css(styleSettings);
// };