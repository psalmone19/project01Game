$(document).ready(function() {
  console.log('hello!');

// VARIABLES //
  var $userInput = $('.input-box');
  var matchArray = [];
  var playerScore = 0;
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
    randomizeWord();
    $repeatRandom = setInterval(randomizeWord, 6000); // sets the time a new word pops up on the screen
  });


  // randomly picks from library
  function randomizeWord() {
    term = Math.floor(Math.random() * library.length - .1);
    $wordBox = $('<div>').css('position', 'absolute').html(library[term]);
    var value = $wordBox.css('left') == '100%' ? 0 : '100%'; //
    matchArray.push($wordBox); // every new random word is pushed into a new array
    console.log(matchArray);
      return $wordBox.appendTo('#word-container').fadeIn('fast').animate({left: value}, 9000);
  };


  // checks if userInput matches randomWord
  $userInput.on('change', function() {
    // matchArray.each(function(){
      if ($userInput.val() ===  library[term]){
        $wordBox.hide();
        $userInput.val('');
        addScore();
      } else {
        $userInput.val('');
      }
    // })
  });


  // scoring system
  function addScore() {
    $userInput.each(function() {
      console.log (playerScore++);
      $('.score').text('score: ' + playerScore);
    })
  }


});


// var value = $wordBox.css('left') == '100%' ? 0 : '100%';
// .animate({left: value}, 8000);
// updateScore = setInterval(addScore);
// css('position', 'absolute')

