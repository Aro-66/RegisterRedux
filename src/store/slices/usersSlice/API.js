import { actionUsers } from "./action";

export const fetchToDos = () => {
  return async (dispatch) => {
    let response = await fetch("http://localhost:3005/users");
    let result = await response.json();

    dispatch(actionUsers(result));
  };
};
