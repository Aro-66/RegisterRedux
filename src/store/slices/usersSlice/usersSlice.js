const initialState = {
  users: [],
  currentImg: null,
};

export const usersSlice = (state = initialState, action) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        users: action.payload,
      };
    case "addUsers":
      console.log(action.payload);
      console.log(state);
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "userImg":
      return {
        ...state,
        currentImg: action.payload,
      };

    default:
      return state;
  }
};

export const usersInfo = (state) => state.users;
export const currentUserImg = (state) => state.users.currentImg;
