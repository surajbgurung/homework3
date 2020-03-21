
//assigning variable
var char1 = "abcdefghijklmnopqrstuvwxyz";
var char2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/";
// Assignment Code


var charNumber = document.getElementById("charNum");//number spin
var upperCase=document.getElementById("upperCase");//upper case
var numInput = document.getElementById("num");//checked for number
var symbInput = document.getElementById("symb");//checked for symnbol
var passwordText = document.querySelector("#password");//password generating area
var generateBtn = document.querySelector("#generate");//button for password


//input code for generating password

function writePassword(){
  var characters = char1;
  var lengthchar = charNumber.value;//.value gives the value of that number spin(length of character )
  
  if(numInput.checked==true){    //when number is checked
    characters+=num;            //concateting the character and number
                                  //then characters value is (character and number)
                                  //then its value is passed to generatePassword function
                                 //characters is lowercase which is default.
  }
  if(symbInput.checked==true){
    characters+=sym;
  
}
if(upperCase.checked==true){
  characters+=char2;

}
var password = generatePassword(lengthchar, characters);
passwordText.value = password;
}

function generatePassword(lengthchar, characters) {
  var localPass = "";
  for (var i = 0; i < lengthchar; i++) {
    localPass = localPass + characters.charAt(Math.floor(Math.random() * characters.length));

  }
  return localPass;
}



//eventListener and passing our  writePassword function 
generateBtn.addEventListener("click", writePassword);
