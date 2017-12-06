$(document).ready(function() {
  window.dancers = [];
  $('.addBlinkyDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
  
    var dancer = new dancerMakerFunction(
      80,
      11111,
      Math.random() * 1000
    );
    $('.dancerLines').append('<div class="blinkyDancerLine">4</div>');
    for (var i = 0; i < 10; i++) {
      $('.blinkyDancerLine').append(dancer.$node);
    }
    window.dancers.push(dancer);
  });
  $('.addSnoopDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
  
    var dancer = new dancerMakerFunction(
      80,
      11111,
      Math.random() * 1000
    );
    $('.dancerLines').append('<div class="snoopDancerLine"></div>');
    for (var i = 0; i < 10; i++) {
      dancer.$node.append('<img class="snoop image" src="smallsnoop.gif">');

      $('.snoopDancerLine').append(dancer.$node);
      $('.snoopDancerLine').addClass('snoopDancerRotate');
    }
    window.dancers.push(dancer);
  });

  $('.addPsyDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      0, 0,
      Math.random() * 1000
    );
    $('.dancerLines').append('<div class="psyDancerLine"></div>');
    for (var i = 0; i < 8; i++) {
      $('.psyDancerLine').append(dancer.$node);
      $('.psyDancerLine').addClass('psyDancerRotate');
      dancer.$node.append('<img class="image" src="slowpsy.gif">');
    }
    window.dancers.push(dancer);
    $(this).removeAttr('onclick');
  });
  
   
  

  $('.addSquidwardDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() + 400,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancerLines').append('<div class="squidwardDancerLine"></div>');
    for (var i = 0; i < 5; i++) {
      dancer.$node.append('<img class="image" src="squidward.gif">');
      $('.squidwardDancerLine').append(dancer.$node);
      $('.squidwardDancerLine').addClass('squidwardDancerRotate');
    }
    window.dancers.push(dancer);
  });

  $('.addBreakDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() + 1000,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancerLines').append('<div class="breakDancerLine"></div>');
    dancer.$node.append('<img class="bboy" src="bboy.png">');

    $('.breakDancerLine').append(dancer.$node);
    $('.breakDancerLine').addClass('breakDancerRotate');

    window.dancers.push(dancer);
  });

  $('.bboy').on('click', function() {
    $(this).hide();
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
      $('.squidwardDancerLine').removeClass('squidwardDancerRotate');
      $('.psyDancerLine').removeClass('psyDancerRotate');
      $('.snoopDancerLine').removeClass('snoopDancerRotate');
      $('.breakDancerLine').css('margin-left', '37%');
      $('.breakDancerLine').css('margin-top', '-350px');
    });
  });

  $('.image').click(function() {
    window.dancers.forEach(function(dancer) {
      $(this).animate({height: '600px', width: '300px'});
    });
  });
});