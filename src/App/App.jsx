import React, { useEffect, useState } from "react";
import "./App.css";
import MyRoutes from "../Routes/MyRoutes";
import MyLayout from "../Layout/MyLayout";
import { useDispatch } from "react-redux";
import { fetchHomeProducts } from "../Store/Actions/fetchHomeProducts";
import { getUserFun } from "../Store/Actions/userLoginActions";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";


function App(props) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState({ userLoader: true, productLoader: true })

  // FETCH HOME PRODUCTS - USER
  useEffect(() => {
    dispatch(getUserFun(setLoader));
    dispatch(fetchHomeProducts(setLoader));
  }, []);

  if (loader.userLoader === true || loader.userLoader === true) {
    return <LoadingPage />
  }

  return (
    <div className=" App-div ">
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
