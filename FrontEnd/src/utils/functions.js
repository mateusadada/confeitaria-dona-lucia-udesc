export const validatePassword = (password) => {
  const regexPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regexPattern.test(password) ? true : false;
}

export const loginValidation = (user, password) => {
  if (user == 'Lucia' && password == '123456789'){
    return true;
  }
  return false;
}

// Function that validate an input content, check if it's not empty
export const validateTextField = ( inputValue ) => {
  const textRegExPattern = /[A-Za-z]+.*/;
  console.log('regex test:', textRegExPattern.test(inputValue))
  if( inputValue.length >= 0 && textRegExPattern.test(inputValue) ){
    return true;
  }
  return false;
};

// Function to validate an input content, check if it's a number and it's > 0;
export const validateAmountField = ( inputAmount ) => {
  const amountRegExPattern = /[0-9]+(\.|\,|)([0-9]+)|/;

  if( amountRegExPattern.test( inputAmount ) && inputAmount > 0 ){
    return true;
  }
  return false;
}