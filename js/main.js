function go() {
// variable is created, with the value of the div with the id demo 
var demo = document.getElementById("demo");
// created variable with value of text
var createdText = document.createTextNode("Created :")
// created variable with value of an h3 element
var createdH3 = document.createElement("h3")
// append the variable with the value of text to the variable to the value of 
// an h3 element  
createdH3.appendChild(createdText)
// appended the variable with the value of an h3 element to the variable
// with the value of the div with the id demo
demo.appendChild(createdH3)
// variable is created, with the value of the current time and date
var rigthNow = new Date();
// variable is created with value of the text, of the date   
var rigthNowText = document.createTextNode(rigthNow);
// variable is created with the value of an h3 element
var rigthNowH3 = document.createElement("h3");
// the variable with the value of the text of the date is appended to the
// variable with value of the h3 element 
rigthNowH3.appendChild(rigthNowText)
// the variable with the value of the h3 element is appended to the div
// with the id demo
demo.appendChild(rigthNowH3)	
//variable equal to the first name input value
var firstName = document.getElementById("firstName").value;
// variable equal to the last name input value
var lastName = document.getElementById("lastName").value;
// variable equal to an h3
var firstNameH3 = document.createElement("h3");
// variable equal to an h3
var lastNameH3 = document.createElement("h3");
// variable equal to first name input value
var firstNameText = document.createTextNode("First Name: " + firstName);
// variable equal to last name input value
var lastNameText = document.createTextNode("Last Name: " + lastName);
// appending first name input value to an h3 element
firstNameH3.appendChild(firstNameText);
// appending last Name input value to an h3 element
lastNameH3.appendChild(lastNameText);
//appending h3 that has the fist name input value to the div with the id demo 
demo.appendChild(firstNameH3);
// appending h3 that has the last name input value to the div with the id demo
demo.appendChild(lastNameH3);
document.getElementById("form").style.display = "none";
// giving the variable question3 the value of the radio input elements with
// with the class name question3 
var question3 = document.getElementsByClassName("question3");


// create variable to eventually hold the question3 answers
var answer3;
// create a h3 element for the male input
var maleH3 = document.createElement("h3");
// create a h3 element for the female input
var femaleH3 = document.createElement("h3");
// loop through radio options
for(var i = 0; i < question3.length; i++) {
// if the radio was selected by the user, do this
if(question3[i].checked) {
	// set value of answer3 to the value in the radio item
	answer3 = question3[i].value;
	var maleText = document.createTextNode("Gender: " + answer3);
// append maleText to maleH3 variable 
	maleH3.appendChild(maleText)
// append maleH3 to div id demo 
demo.appendChild(maleH3);
// if the female radio option is chosen set this text value to the 
// femaleText variable 
} else if( question3[i].checked) {
// set the value of answer3 to value in the radio item 
	answer3 = question3[i].value;
// set the text value of femaleText 
	var femaleText = document.createTextNode("Gender: " + answer3);
// append femaleText to femalH3 
	femaleH3.appendChild(femaleText)
// append femaleH3 to dive id demo 
demo.appendChild(femaleH3);

} 
}
// // creating a variable equal to the phone number input element
var phoneNumber = document.getElementById("phoneNumber");
// creating a variable equal to a regular expression that clears any non digit characters
// entered in the phone number input element
var numbers = phoneNumber.value.replace(/\D/g, "");
 // creating a vaiable and setting the value of it to some text, and 
 // the value of the phoneNumber variable
 var phoneNumberText = document.createTextNode("Phone Number: " + numbers)
 // creating a new vaiable, and giving it the value of a h3 element 
 var phoneNumberH3 = document.createElement("h3")
 // appending the text variable to the h3 variable
phoneNumberH3.appendChild(phoneNumberText)
// appending the h3 variable to the div with the id demo
 demo.appendChild(phoneNumberH3);

// creating variable equal to input id email
 var email = document.getElementById("email");
 // creating varible equal to a h3 element 
 var emailH3 = document.createElement("h3");
 // creating a variable equal to some text and the value of the email input value
 var emailText = document.createTextNode("E-mail: " + email.value);
 // appending the text variable to the h3 variable 
 emailH3.appendChild(emailText)
 // appending the h3 variable to the div with the id demo
 demo.appendChild(emailH3)

// creating a variable and giving it the value of the radio input tags, 
// class name question6
 var question6 = document.getElementsByClassName("question6");
 // creating a empty variable, that will later have the value of the checked
 // question6 radio input
 var answer6;

// this is a for loop to loop throgh the question6 radio input tags
 for(var i = 0; i < question6.length; i++) {
 // this is a if statment to check for the checked question6 radio input tags 
 	if(question6[i].checked) {
 // this sets the value of the answer6 variable, to the value of the checked question6
 // radio input tags  
 		answer6 = question6[i].value;
// new variable is created and given the value of some text and, the value of the
// answer6 variable 
        var answer6Text = document.createTextNode("Favorite color: " + answer6)
// new variable is created with the value of an h3 element
 		var answer6H3 = document.createElement("h3");
// the text variable is appended to the h3 variable 
 		answer6H3.appendChild(answer6Text)
// the h3 variable is appended to the div with the id demo 
 		demo.appendChild(answer6H3)
 	}
 }

// a variable is created with the value of the radio tags, class name question7
var question7 = document.getElementsByClassName("question7");
// an empty variable is created, which will later have the value of the chosen
// question7 radio input elements
var answer7;

// here a for loop is created which will loop through the question7 radio
// input elemets
for(var i = 0; i < question7.length; i++) {
// an if else statment that checks which question7 radio input element was chosen 
	if(question7[i].checked) {
// the answer7 variable is given the value of the chosen question7 radio input element
		var answer7 = question7[i].value;
// a variable is created with the value of some text, and the value of the answer7 variable  
		var answer7Text = document.createTextNode("Continent of birth: " + answer7);
// a variable is created, with the value of an h3 element  
		var answer7H3 = document.createElement("h3");
// the text variable is appended to the h3 variable
		answer7H3.appendChild(answer7Text)
// the h3 variable is appended to the div with the id demo 
		demo.appendChild(answer7H3)
		};	
};	
}
// this is a id of the button element that is given the addeventlistener event
// of click to run the go(), function that is given the capturing phase
document.getElementById("btn").addEventListener("click", go, true)


