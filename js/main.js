$(document).ready(function() {
  console.log('hello!');

  // VARIABLES //
  var $userInput = $('.input-box');
  var currentWordArr = [];
  var wordsOnScreen = {}
  var playerScore = 0;
  var playerMiss = 0;
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
    return;
  });

  // TIMER COUNTDOWN
  function countDown() {
    var $finalScore = $('<div>');
    var seconds = 60;
    var runOut = false;
    var timerId = setInterval(function(){
      if (seconds > 10) {
        seconds--;
        $('.timer').text(':' + seconds);
      } else if (seconds >= 1 && seconds <= 10) {
        seconds--;
        $('.timer').text(':' + '0' + seconds).css('color', '#ff0000');
      } else {
          clearInterval(timerId);
          endGame();
          $finalScore.css({
              'background-color': 'white',
              'text-align': 'center',
              'font-size': '100px',
              'height': '100%',
              'widht': '100%',
              'padding-top': '7%',
              'display': 'flex',
              'justify-content': 'center',
              'align-item': 'center'
          }).html('Your score: ' + '<br>' + playerScore).appendTo('#word-container');
          return;
      }
    }, 1000);
  }

  // RANDOMLY PICKS WORD FROM LIBRARY
  function randomizeWord() {
    term = Math.floor(Math.random() * library.length - .1);
    currentWordArr.push(library[term]);
    $wordBox = $('<div>').css({
        position: 'absolute',
        bottom: randomizeHeight(),
        'font-size': '25px',
        'color': 'white',
    }).html(library[term]);
    value = $wordBox.css('left') == '100%' ? 0 : '100%';
    $wordBox.appendTo('#word-container').animate({left: value}, 20000);
    wordsOnScreen[library[term]] = $wordBox; // puts term inside object, assigning key value.
    return;
  };

  // RANDOMLY SETS HEIGHT THAT A WORD IS ANIMATED FROM
  function randomizeHeight() {
    var max = 500;
    var min = 200;
    var height = Math.floor(Math.random() * (max - min + 1)) + min;
    return (height + 'px');
  }

  // CHECKS IF USER INPUT MATCHES RANDOM WORD
  $userInput.on('change', function() {
      if (currentWordArr.indexOf($userInput.val()) != -1){
          wordsOnScreen[$userInput.val()].hide();
          $userInput.val('');
          addScore();
      } else {
          $userInput.val('');
          missWord();
      }
  });

  // SCORING SYSTEM
  function addScore() {
    $userInput.each(function() {
      playerScore++
      $('.score').text('score: ' + playerScore);
    })
  }

  // MISS LOGIC
  function missWord() {
    playerMiss++;
    $('.miss').text('miss: ' + playerMiss);
  }

  // STOPS THE GAME
  function endGame() {
    clearInterval($repeatRandom);
    return;
  }

  // RESETS THE GAME
  $('.reset').on('click', function(){
    location.reload();
  });

});



// function stopAnimation() {
//   $wordBox.each(function(){
//     if ($wordBox.css('right') == '100%') {
//       wordsOnScreen[library[term]].hide();
//     }
//   })
// }


