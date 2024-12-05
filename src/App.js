import { useEffect } from "react";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { useDispatch } from "react-redux";
import { fetchToDos } from "./store/slices/usersSlice/API";
import UsersPage from "./components/UsersPage/UsersPage";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);
  
  return (
    <div className="App">
      <RegisterPage />
      <UsersPage />
    </div>
  );
}

export default App;
