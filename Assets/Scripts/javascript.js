
$( document ).ready(function(){

  document.body.style.zoom="90%";


  // Game of thrones word list object with hints and images
  var wordList = {firstWord: {word: "crow", hint: "A derogatory nickname given to the Night's Watch.", img:"Assets/Img/johnsnow.gif"},
  secondWord: {word: "khaleesi", hint: "Word referring to the wife of a warlord.", img: "Assets/Img/daenerys.gif" },
  thirdWord: {word: "maester", hint: "Someone who focuses on scientific knowledge.", img: "Assets/Img/maester.gif"},
  forthWord:{word:"wildfire", hint:"Immune to water and that can only be extinguished by large amounts of sand.", img:"Assets/Img/wildfire.gif"},
  fifthWord:{word:"wilding", hint:"Derogatory term for the Free Folk, people who live north of the Wall.", img:"Assets/Img/wildling.gif"},
  sixthWord:{word:"valyrian", hint:"One of two things known to be able to kill a white walker.", img:"Assets/Img/valyrian.gif"},
  seventhWord:{word:"unsullied", hint:"Eunuch slave soldiers.", img:"Assets/Img/unsullied.gif"},
  eighthWord:{word:"raven", hint:"Used to deliver messages.", img:"Assets/Img/raven.gif"}
  };


var handmanStorageImg = ["Assets/Img/hangman6.PNG", "Assets/Img/hangman5.PNG", "Assets/Img/hangman4.PNG", "Assets/Img/hangman3.PNG", "Assets/Img/hangman2.PNG", "Assets/Img/hangman1.PNG", "Assets/Img/hangman0.PNG"];

var good_Gifs={
  good1:"Assets/Img/good1.gif ",
  good2:"Assets/Img/good2.gif ",
  good3:"Assets/Img/good3.gif ",
  good4:"Assets/Img/good4.gif ",
  good5:"Assets/Img/good5.gif ",

};

var bad_Gifs={
  good1:"Assets/Img/bad1.gif ",
  good2:"Assets/Img/bad2.gif ",
  good3:"Assets/Img/bad3.gif ",
  good4:"Assets/Img/bad4.gif ",
  good5:"Assets/Img/bad5.gif ",

};



////////////////////////////////////////
//Number of Lifes / Guesses
var life = 7;
//Number of Wins
var win = 0;
//Number of Losses
var losses =0
//Store Key pressed
var keyPressed =[];
//Store letters Guessed
var lettersGuessed = [];
//Counter
var counter = 0;
// Store Random Word
var word ;

//////////////////////////////////////////////

//If statements to restart the game
//Game Reset
function reset(){
  life = 7;
  $("[data-hint]").remove();
  $("[data-letter]").remove();
  $(".hangman_Title_Image").attr("src", "Assets/Img/tumble_weed.gif");
  $(".hangman_Bottom_Image").attr("src", "Assets/Img/gotOpening.gif");
  $(".header_Img, #left_Column, #right_Column").addClass("animated shake");
  keyPressed =[];
  lettersGuessed = [];
  choose();
}

//Execute Choose Word
choose();


//Function for choosing random words and displaying hints
function choose(){
  $(".wins_Score").html("Wins: "+ win)
  $(".loss_Score").html("Losses: " + losses);
  $(".life_Score").html("Lifes: " + life );
  // Stores random property object in word
  var randomWord = Object.keys(wordList)[Math.floor(Math.random()*Object.keys(wordList).length)];
  //stores the word from randomWord Object
  word = wordList[randomWord].word;
  //Stores and Displays hint
  (function(){
    var hint = wordList[randomWord].hint;
    var hints = $("<div>"+hint+"</div>");
    $(hints).addClass("hints_Sentence");
    $(hints).attr("data-hint", hint);
    $(hints).text( hint);
    $(".hints_Sentence").append(hints);
  }());
  // //Displays image based on word
  // (function(){
  // var images = wordList[randomWord].img;
  // $(".changing_Gifs").attr(src, images)
  // }());
  (function(){
    var images = wordList[randomWord].img;
    $(".changing_Gifs").attr("src", images)
  }());

  // Function to print hidden word
  (function hidden_word(){
    //Loop through word to get number of letters
    for (var i = 0; i < word.length; i++){
      // Inside the loop...
      // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");
      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      $(letterBtn).addClass("letter-button letter letter-button-color center");
      // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
      $(letterBtn).attr("data-letter", word[i]);
      // 5. Then give each "letterBtn" a text equal to "?".
      $(letterBtn).text("?");
      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $(".letter_Guesses").append(letterBtn).addClass("animated bounceInDown");
    }
  }());

};

//Event Listener to check word
document.addEventListener("keyup", function (e) {
  $(".header_Img, #left_Column, #right_Column").removeClass("animated shake");
  $("<button>").removeClass("animated bounceInDown");
  console.log(word);
  var inputLetterIndex = String.fromCharCode(e.which).toLowerCase();
  //Checks to see if leter typed is
  if (word.indexOf(inputLetterIndex) !== -1){
    if(keyPressed.indexOf(inputLetterIndex) !== -1){
      $("#lower_Message").html("This Character has already been guessed!");
      $("[data-letter=\"" + inputLetterIndex + "\"]").removeClass("animated bounceInDown shake");
      $("[data-letter=\"" + inputLetterIndex + "\"]").addClass("animated shake");
    }
    else{
      // Replace image with good image
      var goodImageKey = Object.keys(good_Gifs)[Math.floor(Math.random()*Object.keys(good_Gifs).length)];
      var randomGoodImage = good_Gifs[goodImageKey];
      $(".hangman_Bottom_Image").attr("src", randomGoodImage)
      //
      //Replaces ? with letter
      $("#lower_Message").html("Character Guessed!");
      $("[data-letter=\"" + inputLetterIndex + "\"]").text(inputLetterIndex);
      $("[data-letter=\"" + inputLetterIndex + "\"]").addClass("animated bounceInDown");
      // Loop to get index of repeated characters
      for(var i =0; i < word.length; i++){
        if (word[i] == inputLetterIndex){
          var o = word.indexOf(inputLetterIndex);
          keyPressed[o] = inputLetterIndex;
        }
        for (y =0; y < word.length; y++){
          if (word[y] == inputLetterIndex){
            keyPressed[y] = inputLetterIndex;
          }
        }
      }
      if(word == keyPressed.join("")){
        $("#lower_Message").html("You Win! :)");
        win++;
        $(".wins_Score").html("Wins: "+win);
        reset();
      }

    }
  }
  // Takes away a life for wrong guess
  else{
    life -= 1;
    counter++;
    // Replace reactions with bad image
    var badImageKey = Object.keys(bad_Gifs)[Math.floor(Math.random()*Object.keys(bad_Gifs).length)];
    var randomBadImage = bad_Gifs[badImageKey];
    $(".hangman_Bottom_Image").attr("src", randomBadImage)
    //
    $(".hangman_Title_Image").attr("src", handmanStorageImg[life]).addClass("animated bounceInDown");
    $("#lower_Message").html("Wrong Character. Guess again! " + life + " lives remaining.");
    $(".life_Score").html("Number of Lifes: " + life );
    //Checks to see if character has been stored in the array
    if (lettersGuessed.indexOf(inputLetterIndex) == -1){
      //If it has been stored, do nothing
      if (lettersGuessed[i] == inputLetterIndex){
      }
      //Push the character into the array and print the Character out.
      else{
        lettersGuessed.push(inputLetterIndex);
        var letterBtn = $("<button>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        $(letterBtn).addClass("letter-button red_letter red_letter-button-color");
        // 4. Then give each "letterBtn" a data-attribute called "data-letter", with a value eqaual to "letters[i]"
        $(letterBtn).attr("data-letter", inputLetterIndex );
        // 5. Then give each "letterBtn" a text equal to "letters[i]".
        $(letterBtn).text(inputLetterIndex);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $(".to_Append").append(letterBtn);
        $("[data-letter=\"" + inputLetterIndex + "\"]").addClass("animated bounceInDown");
        }
      }

        }

  if (life == 0){
    $("#lower_Message").html("You lose :( ");
    losses++;
    $(".loss_Score").html("Losses: " + losses);
    reset();
  }


});



// Win, Loss and Reset

// End of $(document).ready()
});
