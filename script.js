
// DOCUMENT READY
$(function() {
   
   // user clicks button that scrolls them further down the page to set of inputs
   $('.scroll').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $(`#userInputs`).offset().top
      },
      'slow');
   })
   
   $('.create').on('click', function(e){
      e.preventDefault();

      // getting the user inputted value using input id's and storing it in variables
      // Adjectives
      let userAdOne = $('#adOne').val();
      let userAdTwo = $('#adTwo').val();
      let userAdThree = $('#adThree').val();
      // Nouns
      let userNounOne = $('#noun').val();
      let userNounTwo = $('#nounOne').val();
      let userNounThree = $('#nounTwo').val();
      let userPNounOne = $('#pNounOne').val();
      let userPNounTwo = $('#pNounTwo').val();
      let userPNounThree = $('#pNounThree').val();
      let userPNounFour = $('#pNounFour').val();
      // Verbs
      let userVerbingOne = $('#verbingOne').val();
      let userVerbingTwo = $('#verbingTwo').val();
      let userVerbingThree = $('#verbingThree').val();
      let userVerbingFour = $('#verbingFour').val();
      // Other
      let userGame = $('#game').val();
      let userPlace = $('#place').val();
      let userPlant = $('#plant').val();
      let userBodyPart = $('#bodyPart').val();
      let userNumber = $('number').val();

      // creating array's to store all user inputted values
      adjArray = new Array();
      nounArray = new Array();
      verbArray = new Array();
      otherArray = new Array();

      // push stored value from the variable adOne (that has adjectiveOne's inputted value) into the array
      // Adjective Array
      adjArray.push(userAdOne, userAdTwo, userAdThree);
      // Noun Array
      nounArray.push(userNounOne, userNounTwo, userNounThree, userPNounOne, userPNounTwo, userPNounThree, userPNounFour);
      // Verb Array
      verbArray.push(userVerbingOne, userVerbingTwo, userVerbingThree, userVerbingFour);
      // Other Array
      otherArray.push(userGame, userPlace, userPlant, userBodyPart, userNumber);
   })

   // input user information in a string
   // display string on page


});

