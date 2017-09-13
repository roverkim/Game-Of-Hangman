
$( document ).ready(function(){

//Key Map
var keyMap = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z"
};

//Key Array
var keysPressed = [];






  // Game of thrones word list object
  var wordList = {firstWord: {word: "crow", hint: "a derogatory nickname given to the Night's Watch"},
  secondWord: {word: "khaleesi", hint: "word referring to the wife of a warlord" },
  thirdWord: {word: "maester", hint: "someone who focuses on scientific knowledge"}
  };

  // Loop and print out objects
  // Object.keys(wordList).forEach(function(key,index) {
  //     console.log(key + "index");
  // });

  //Function for choosing random words

  (function choose(){
    // Stores random property object in word
    var randomWord = Object.keys(wordList)[Math.floor(Math.random()*Object.keys(wordList).length)];
    //stores the word from randomWord Object
    var word = wordList[randomWord].word;

    for (var i = 0; i < word.length; i++){

    };


    //Loop through word to get number of letters
    for (var i = 0; i < word.length; i++){
      // Inside the loop...
      // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");
      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      $(letterBtn).addClass("letter-button letter letter-button-color");
      // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
      $(letterBtn).attr("data-letter", word[i]);
      // 5. Then give each "letterBtn" a text equal to "letters[i]".
      $(letterBtn).text("?");
      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $(".letter_Guesses_Container").append(letterBtn);
    };

    //stores the hint from randomWord Object and displays it
    (function(){
      var hint = wordList[randomWord].hint;
      var hints = $("<div>"+hint+"</div>");
      $(hints).addClass("hints_Sentence");
      $(hints).attr("data-hint", hint);
      $(hints).text( hint);
      $(".hints_Sentence").append(hints);
    }());

return word;
  }());




//Event Listener


//Event Listener to check word



document.addEventListener("keyup", function (e) {
  if(e.which > 64 && e.which < 91){
    $("#scores_Section").text("You pressed: " + keyMap[e.which]);
  } else {
    $("#results").text("Key not recognized");
  };
  var inputLetter = e.which;
  if (inputLetter !== 9){
    var letter = keyMap[inputLetter];
    console.log(keysPressed);
    keysPressed.push(letter);

    for (var i = 0; i < keysPressed.length; i++ ){
    };

  };


  // keysPressed.forEach(function(i){
  //     if(letter !== i){
  //       keysPressed.push(letter)
  //       console.log(keysPressed);
  //     }
  //     else{
  //     $("#scores_Section").text("You have already guessed: " + letter);
  //     }
  //   });
  // };

});






  //
  // //Loop through word to get number of letters
  // for (var i = 0; i < word.length; i++){
  //   // Inside the loop...
  //   // 2. Create a variable named "letterBtn" equal to $("<button>");
  //   var letterBtn = $("<button>");
  //   // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
  //   $(letterBtn).addClass("letter-button letter letter-button-color");
  //   // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
  //   $(letterBtn).attr("data-letter", word[i]);
  //   // 5. Then give each "letterBtn" a text equal to "letters[i]".
  //   $(letterBtn).text(word[i]);
  //   // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
  //   $(".letter_Guesses_Container").append(letterBtn);
  // };














});
