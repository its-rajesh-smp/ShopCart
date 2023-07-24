import React, { useEffect } from "react";
import "./App.css";

import MyRoutes from "../Routes/MyRoutes";
import MyLayout from "../Layout/MyLayout";
import { useDispatch } from "react-redux";
import { fetchHomeProducts } from "../Store/Actions/fetchHomeProducts";
import { fetchUserOnLoadUsingIdToken } from "../Store/Actions/userLoginActions";

function App(props) {
  const dispatch = useDispatch();

  // FETCH HOME PRODUCTS & USER WITH HIS CART
  useEffect(() => {
    dispatch(fetchUserOnLoadUsingIdToken());
    dispatch(fetchHomeProducts());
  }, []);

  return (
    <div className=" App-div ">
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
