//Variable decleration
//All possible numbers - Array
var passNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//All possible upper case letters - Array
var passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//All possible lowee case letters - Array
    var passLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //All possible special characters - Array
    var passSpecial = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ";", ":", "<", ">", ",", ".", "?", "/"];
    //The finction to gereate the password
    function generate (){
      //Declaring all variable and reesting the values when the fucntion is called
      var passLenght = 0;
      var PassWord = "";
      var passArr = [];
      var char ="";
      var count = 1;
      //Asks the user what the lenght of the password should be
      passLenght = window.prompt("How many character would you like to make the Password (8-128)?");
      //Checks to see if the password is between 8-128 characters, if not it will ask the user to re-enter a new password
      while ((passLenght < 8) || (passLenght > 128)){
        passLength = 0;
        passLenght = window.prompt("The Password must be between 8-128 characters. Please re-enter in the amount of character the Password should be.");
      }
      //Asks the user what character types they need for the password, they must chose at lease 1
      var reqSpecial = window.confirm ("Do you requre Special Characters?");
      var reqUpper = window.confirm ("Do you require Capital Leters?");
      var reqLower = window.confirm ("Do you require Lower case Letters?");
      var reqNumber = window.confirm ("Do you require Numbers?");
      //if the user does not choose 1 character type, it will alert them and ask the question again until at lease 1 charater type is chosen
      while (reqSpecial != true && reqUpper != true && reqLower != true && reqNumber !=true){
        window.alert ("You must choose at least 1 charater type");
        var reqSpecial = window.confirm ("Do you requre Special Characters?");
        var reqUpper = window.confirm ("Do you require Capital Leters?");
        var reqLower = window.confirm ("Do you require Lower case Letters?");
        var reqNumber = window.confirm ("Do you require Numbers?");
      }
      //Puts the requirements from the user into 1 array called passArr if true
      if (reqSpecial){
        passArr.push.apply(passArr, passSpecial);
      }
      if (reqUpper){
        passArr.push.apply(passArr, passUpper);
      }
      if (reqLower){
        passArr.push.apply(passArr, passLower);
      }
      if (reqNumber){
        passArr.push.apply(passArr, passNumber);
      }
      //Finds passLenght (Lenght of password) number of random charaters from passArr to crate the passWord
      while (count <= passLenght){
        char = passArr[Math.floor(Math.random() * passArr.length)];
        passWord=passWord.concat(char);
        count++;
      }
      //Puts the password in the "password" feild in the HTML page
      document.getElementById("password").innerHTML=passWord;
      console.log(passWord);
      return passWord;
    //End of "generate" function  
    }
    //Function to copy the password from the "password" text feild
    function copyPass () {
      // Get the password from the text field
      var copyPass = document.getElementById("password");
      copyPass.select();
      //Copy the text
      document.execCommand("copy");
      //Tells the user that the password has been copied
      alert("The password " + copyPass.value + " has been copied");
    //End of Copy function
    }
    //End of javascript