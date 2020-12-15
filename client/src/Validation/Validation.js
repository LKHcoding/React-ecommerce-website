export const isEmail = (email) => {
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};

export const isName = (name) => {
  if (name.length > 1) {
    return true;
  } else {
    return false;
  }
};
export const isPassword = (password) => {
  if (password.length > 1) {
    return true;
  } else {
    return false;
  }
};
export const isAddress = (address) => {
  if (address.length > 1) {
    return true;
  } else {
    return false;
  }
};
