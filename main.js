
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


function validatePhoneNumber(phoneNumber) {
    // Define the regular expression pattern using RegExp object
    const phoneNumberPattern = new RegExp("^(\d{3})(-?\d{3})(-?\d{4})$");
  
    // Test the phone number against the pattern
    if (phoneNumberPattern.test(phoneNumber)) {
        console.log("Phone number is valid");
        return true;
      } else {
        console.log("Phone number is not valid");
        return false;
      }
    }

  validatePhoneNumber("123-456-1234");  // true

  
  //Array Manipulation:

  //Write a function called removeDuplicates that takes an array as input and returns
  //a new array with all duplicate elements removed.
  //You can use any method you like (e.g., Set, loops).


  const numbers = [1, 2, 3, 4, 2, 5, 3, 6];
  const newNumbers = [];
  
  function removeDuplicates () {
    for (let i = 0; i < numbers.length; i++) {
        if (!newNumbers.includes(numbers[i])){
            newNumbers.push(numbers[i]);
        }
        }
        console.log(newNumbers)
        return newNumbers;
        
    }

    removeDuplicates();

   
  


 