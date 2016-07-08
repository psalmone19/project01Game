$(document).ready(function() {
  console.log('hello!');

  // VARIABLES //
  var $userInput = $('.input-box');
  var currentWordArr = [];
  var wordsOnScreen = {}
  var playerScore = 0;
  var library = [
    'evaluative', 'cartographer', 'discomfit', 'psyche',
    'prognosticate', 'winnow', 'embed', 'provenance',
    'amok', 'relegate', 'leery', 'detach',
    'cornucopia', 'protract', 'indenture', 'academia',
    'disgorge', 'ethos', 'quaff', 'libation',
    'eschew', 'expertly', 'relevance', 'pessimist',
    'prod', 'compress', 'administrator', 'shoddy',
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

  // HIDES TITLE SCREEN AND INITIATES GAME
  $('.start-button').on('click', function(evt) {
    $('#title-screen').hide(100);
    $('.hidden').removeClass('hidden');
    randomizeWord();
    countDown();
    $repeatRandom = setInterval(randomizeWord, 1000); // sets the time a new word pops up on the screen
  });

  // TIMER COUNTDOWN
  function countDown() {
    var seconds = 60;
    var runOut = false;
    var timerId = setInterval(function(){
      if (seconds > 0) {
        seconds--;
        $('.timer').text('clock: ' + '0' + ':' + seconds);
      } else {
        clearInterval(timerId);
        endGame();
        return;
      }
    }, 1000);
  }

  // RANDOMLY PICKS WORD FROM LIBRARY
  function randomizeWord() {
    term = Math.floor(Math.random() * library.length - .1);
    currentWordArr.push(library[term]);
    // console.log(currentWordArr);
    $wordBox = $('<div>').css({
      position: 'absolute',
      bottom: randomizeHeight(),
      'font-size': '25px'
    }).html(library[term]);
    value = $wordBox.css('left') == '100%' ? 0 : '100%';
    $wordBox.appendTo('#word-container').animate({left: value}, 8000);
    wordsOnScreen[library[term]] = $wordBox;
    console.log(wordsOnScreen)
  };

  // RANDOMLY SETS HEIGHT THAT A WORD IS ANIMATED FROM
  function randomizeHeight() {
    var max = 600;
    var min = 200;
    var height = Math.floor(Math.random() * (max - min + 1)) + min;
    return (height + 'px');
  }

  // CHECKS IF USER INPUT MATCHES RANDOM WORD
  $userInput.on('change', function() {
      if (currentWordArr.indexOf($userInput.val()) != -1){
          console.log("true")
          wordsOnScreen[$userInput.val()].hide();
          $userInput.val('');
          addScore();
      } else {
          $userInput.val('');
      }
  });

  // SCORING SYSTEM
  function addScore() {
    $userInput.each(function() {
      console.log (playerScore++);
      $('.score').text('score: ' + playerScore);
    })
  }

  // STOPS THE GAME
  function endGame() {
    clearInterval($repeatRandom);
    return;
  }

});


// var value = $wordBox.css('left') == '100%' ? 0 : '100%';
// .animate({left: value}, 8000);
// updateScore = setInterval(addScore);
// css('position', 'relative')
// position: 'absolute',
// currentWordArr.push($wordBox); // every new random word is pushed into a new array
// console.log(matchArray);
// currentWordArr.indexOf($userInput.val()) != -1){
