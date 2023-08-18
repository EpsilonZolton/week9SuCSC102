//jave time :3

//a function to play craps on the index page
function playCraps(){
    //troubleshooting playCraps() function
    console.log("begun playing craps");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    //console.log(die1)
    //console.log(die2)

    document.getElementById("die1Res").innerHTML = "The result of die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result of die 2 is: " + die2;

    var sum = die1 + die2;
    if(sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "you lose";
    }else if(die1 % 2 == 0 || die1 == die2){
        document.getElementById("gameRes").innerHTML = "you win!";
    }else{
        document.getElementById("gameRes").innerHTML = "no winner";
    }
}

//checking login crdentials function for string.html page
function checkCreds(){
    console.log("checkCreds() started");
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    //getting our vars their values from the inputed set from the lock
    firstName = document.getElementById("fName").value;
    //console.log("First name is " + firstName);

    lastName = document.getElementById("lName").value;
    //console.log("Last name is " + lastName);

    zipCode = document.getElementById("zipCode").value;
    //console.log("zip code is " + zipCode);

    fullName = firstName + " " + lastName;
    //console.log("full name is " + fullName);

    fullNameLength = fullName.length;
    //console.log("name length is " + fullNameLength);

    zipCodeNumb = parseInt(zipCode);
    console.log("zip code number is " + zipCodeNumb);

    if(fullNameLength > 20){ //making sure everything entered into the login page is "correct"
        document.getElementById("loginStatus").innerHTML = "Invalid username, try again"
    }else if(zipCode.length != 5 || zipCodeNumb > 99999 || zipCodeNumb < 0){
        document.getElementById("loginStatus").innerHTML = "Invalid Zip code, try again"
    }else{
        alert("Crdentals accepted welcome to the page");
        document.getElementById("loginStatus").innerHTML = "welcome " + fullName; 
    }
}

function startFun(){
    //this is for the start button on the index page to move the image
    console.log("startFun() started")
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById('mymarquee').start();
}

function stopFun(){
    //this is for the start button on the index page to stop moveing the image
    console.log("stopFun() started")
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById('mymarquee').stop();
}

function checkPalin(){ //check if a sentence is a palindrome
    console.log("checkPalin() started");
    var inputText = document.getElementById("palinInput").value;
    console.log("input is " + inputText);
    var spacelessText = inputText.split(" ").join("");
    console.log("text without spaces is " + spacelessText);
    var reverseArray = [];
    length = spacelessText.length - 1;
    console.log("string length = " + length);
    for(let i = length; i >= 0; i--){
        reverseArray.push(spacelessText[i]);
    }
    console.log(reverseArray);
    var reverseText = reverseArray.join("");

    console.log("reversedText is " + reverseText);

    var comparison = (spacelessText ===  reverseText);
    console.log("comparison = " + comparison);

    if(comparison == true){
        document.getElementById("palinStatus").innerHTML = "\"" + inputText + "\" is a palindrome."
    }else if(comparison == false){
        document.getElementById("palinStatus").innerHTML = "\"" + inputText + "\" is a not palindrome."
    }
}