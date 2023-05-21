import React, { useEffect } from "react";
import "./App.css";

import MyRoutes from "../Routes/MyRoutes";
import MyLayout from "../Layout/MyLayout";
import { useDispatch } from "react-redux";
import { fetchHomeProducts } from "../Store/Actions/fetchHomeProducts";

function App(props) {
  const dispatch = useDispatch();

  // FETCH HOME PRODUCTS
  useEffect(() => {
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
