export const validateEmail = (email: string) => {
  if (email !== "" && email !== null && email.length > 10) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    return isValid;
  }
  return false;
};
