import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersSlice } from "./slices/usersSlice/usersSlice";
import { thunk } from "redux-thunk";

const emptyInp = (store) => (next) => (action) => {
  if (action.type === "addUsers") {
    if (!action.payload.price.trim()) {
      return;
    }

    next(action);

    const post = async () => {
        await fetch("http://localhost:3005/users", {
          method: "POST",
          body: JSON.stringify(action.payload),
        });
    };
    
    post();
  } else {
    next(action);
  }
};

const store = createStore(
  combineReducers({ users: usersSlice }),
  applyMiddleware(thunk, emptyInp)
);

export default store;
