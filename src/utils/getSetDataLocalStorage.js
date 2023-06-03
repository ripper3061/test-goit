const STORAGE_USERS_DATA = "users";

export const getDataFromLocalStorage = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_USERS_DATA));
    return data ?? null;
  } catch (error) {
    return null;
  }
};

export const setDataToLocalStorage = (data) => {
  localStorage.setItem(STORAGE_USERS_DATA, JSON.stringify(data));
};
