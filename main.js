
//Text Manipulation:

//Create a JavaScript function named formatName that takes a first name and last name as parameters and
//returns the full name in the format "Last Name, First Name" with proper capitalization (e.g., "Doe, John").

firstName = prompt("please provide first name: ");
lastName = prompt ("please provide last name; ");

function formatName (firstName, lastName) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    
    let result = (`${lastName}, ${firstName}`);
  
    console.log(result);
    return result;
}

formatName(firstName, lastName);



//Regex Validation:

//Write a regular expression to validate phone numbers in the following formats:

 // XXX-XXX-XXXX
 // (XXX) XXX-XXXX
 // XXX XXX XXXX

//Test your regex on various phone number examples to ensure it works correctly.


