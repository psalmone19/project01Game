$(document).ready(function() {
  console.log('hello!');

// VARIABLES //
  var $userInput = $('.input-box');
  // var $wordBox = $('<div>');
  var library = [
    'evaluative', 'cartographer', 'discomfit', 'psyche',
    'prognosticate', 'winnow', 'embed', 'provenance',
    'amok', 'relegate', 'leery', 'detach',
    'cornucopia', 'protract', 'indenture', 'academia',
    'disgorge', 'ethos', 'quaff', 'libation',
    'eschew', 'expertly', 'relevance', 'pessimist',
    'prod', 'compress', 'admnistrator', 'shoddy',
    'resource', 'dwindle', 'revere', 'college',
    'touchstone', 'articulate', 'goad', 'fraught',
    'disparity', 'consequential', 'expend', 'temerity',
    'erotic', 'analytical', 'revise', 'stroll',
    'detached', 'nonetheless', 'challenging', 'reliance',
    'navigate', 'sheaf', 'barrage', 'periodically',
    'surround', 'transcendent', 'pretentious', 'exhilarating',
    'synonymous', 'guy', 'astonish', 'quest',
    'challenge', 'exaggerate', 'intermittent', 'radically',
    'gruff', 'suggest', 'legacy', 'develop',
    'salient', 'altering', 'thesis', 'detect',
    'enhance', 'creator', 'ponder', 'aspire',
    'affront', 'projection', 'precept', 'repress',
    'raise', 'metaphor', 'requirement', 'confront',
    'precipitate', 'grade', 'banish', 'job',
    'probe', 'abstract', 'arduous', 'major',
    'virtually', 'culture', 'proximity', 'conformity',
    'predict', 'profound', 'tenure', 'hatch',
    'volunteer', 'commend', 'chilly', 'realm'
  ];

  // moves words from left to right after start button is clicked
  $('.start-button').on('click', function(evt) {
    $('#title-screen').hide(100);
    $('.hidden').removeClass('hidden');
    // for(var i = 0; i < library.length; i++) {
    //   randomWord();
    // }
  });

  var repeatRandom = setInterval(randomWord, 3000);
  // randomly picks from library
  function randomWord() {
    term = Math.floor(Math.random() * library.length - .1);
    var $wordBox = $('<div>').html('hello');
    // var $wordBox = $('<div>').html(library[term]);
      return $wordBox.appendTo('#word-container').fadeIn(800);
      // repeatRandom;
  };


  // checks if userInput matches randomWord
  $userInput.change(function() {
    if ($userInput.val() == library[term]) {
      $wordBox.fadeOut( "fast" );
      $userInput.val('');
    } else {
      $userInput.val('');
    }
  });


});


// var value = $wordBox.css('left') == '100%' ? 0 : '100%';
// .animate({left: value}, 8000);

