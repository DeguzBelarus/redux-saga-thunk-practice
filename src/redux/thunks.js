import { showLoader, hideLoader, getUsers, itemAdd } from "./actions";

export const getUsersThunkCreator = () => {
  return async (dispatch) => {
    dispatch(showLoader());

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    dispatch(getUsers(data));
    dispatch(hideLoader());
    dispatch(itemAdd("Пользователи загружены"));
  };
};
