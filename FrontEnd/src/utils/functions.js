export const validatePassword = (password) => {
  regexPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regexPattern.test(password) ? true : false;
}

export const loginValidation = (user, password) => {
  if (user == 'Lucia' && password == '123456789'){
    return true;
  }
  return false;
}