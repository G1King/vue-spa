


const TOKEN_KEY = "token";
const USERID_KEY = "userId";

// TOKEN
export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

// userID
export const getUserId = () => {
  return window.localStorage.getItem(USERID_KEY);
};

export const saveUserId = userId => {
  window.localStorage.setItem(USERID_KEY, userId);
};

export const destroyUserId = () => {
  window.localStorage.removeItem(USERID_KEY);
};


export default {
  getToken,
  saveToken,
  destroyToken,
  getUserId,
  saveUserId,
  destroyUserId
};
