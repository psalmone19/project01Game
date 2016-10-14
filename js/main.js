$(document).ready(function() {
  console.log('Welcome to type speed!');

  // VARIABLES
  var $userInput = $('.input-box'),
      seconds = 60,
      runOut = false,
      currentWordArr = [],
      wordsOnScreen = {},
      playerScore = 0,
      playerMiss = 0,
      library = [
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
    $('#title-screen').hide('fast');
    $('.hidden').removeClass('hidden');
    randomizeWord();
    countDown();
    $repeatRandom = setInterval(randomizeWord, 1000); // sets the time a new word pops up on the screen
  });

  // TIMER COUNTDOWN
  function countDown() {
    $finalScore = $('<div>');
    timerId = setInterval(function(){
      if (seconds > 10) {
        seconds--;
        $('.timer').text(':' + seconds);
      } else if (seconds >= 1 && seconds <= 11) {
        seconds--;
        $('.timer').text(':' + '0' + seconds).css('color', '#ff0000');
      } else {
        endGame();
        finalScore();
      }
    }, 1000);
  };

  // RANDOMLY PICKS WORD FROM LIBRARY
  function randomizeWord() {
    term = getWord();
    currentWordArr.push(library[term]);
    $wordBox = $('<div>').css({
        position: 'absolute',
        bottom: randomizeHeight(),
        'font-size': '25px',
        'color': 'white'
    }).html(library[term]);
    value = $wordBox.css('left') == '100%' ? 0 : '100%';
    $wordBox.appendTo('#word-container').animate({left: value}, 20000);
    wordsOnScreen[library[term]] = $wordBox; // puts term inside object, assigning key value.
  };

  // RANDOMLY DRAWS WORD FROM WORD BANK
  function getWord() {
    var word;
    do {
      word = Math.floor(Math.random() * library.length - .1);
    } while (wordsOnScreen[library[word]])
    return word;
  };

  // RANDOMLY SETS HEIGHT THAT A WORD IS ANIMATED FROM
  function randomizeHeight() {
    var max = 80,
        min = 30,
        height = Math.floor(Math.random() * (max - min + 1)) + min;
    return (height + '%');
  };

  // CHECKS IF USER INPUT MATCHES RANDOM WORD
  $userInput.on('change', function() {
      if (currentWordArr.indexOf($userInput.val()) != -1){
          wordsOnScreen[$userInput.val()].hide();
          $userInput.val('');
          addScore();
      } else {
          $userInput.val('');
          missWord();
      };
  });

  // SCORING SYSTEM
  function addScore() {
    $userInput.each(function() {
      playerScore++
      $('.score').text('score: ' + playerScore);
    });
  };

  function finalScore() {
   $finalScore.css({
      'background-color': 'white',
      'text-align': 'center',
      'font-size': '100px',
      'height': '100%',
      'width': '100%',
      'padding-top': '7%',
      'display': 'flex',
      'justify-content': 'center',
      'align-item': 'center'
    }).html('Your score: ' + '<br>' + (playerScore - playerMiss))
      .appendTo('#word-container');
  };

  // MISS LOGIC
  function missWord() {
    playerMiss++;
    $('.miss').text('miss: ' + playerMiss);
  };

  // STOPS THE GAME
  function endGame() {
    $('#word-container').children().remove();
    $('.input-box').attr('disabled', 'disabled');
    clearInterval(timerId)
    clearInterval($repeatRandom);
  };

  // RESETS THE GAME
  $('.reset').on('click', function(){
    location.reload();
  });

});
