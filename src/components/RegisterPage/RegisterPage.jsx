import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserImg } from "../../store/slices/usersSlice/usersSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const currentImg = useSelector(currentUserImg);

  const handlerSub = (ev) => {
    ev.preventDefault();

    const {
      fname: { value: fname },
      email: { value: email },
      price: { value: price },
      password: { value: password },
    } = ev.target;

    let newUser = {
      id: new Date().getTime().toString(),
      fname,
      email,
      price,
      password,
      img: currentImg,
    };

    // if (price.trim()) {
      
      
    // }
    dispatch({ type: "addUsers", payload: newUser });

    ev.target.reset();
  };

  const getFile = (ev) => {
    const file = ev.target.files[0];
    if (!file) return;

    const imgReader = new FileReader();
    imgReader.readAsDataURL(file);
    imgReader.onload = () => {
      dispatch({ type: "userImg", payload: imgReader.result });
    };
  };

  return (
    <form onSubmit={handlerSub} className="reg">
      <input type="text" name="fname" placeholder="name"/>
      <input type="text" name="email" placeholder="email"/>
      <input type="text" name="price" placeholder="price"/>
      <input type="password" name="password" placeholder="password"/>
      <input type="file" name="img" onChange={getFile} />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
