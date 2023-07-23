import React, { useEffect } from "react";
import "./Yourorderpage.css";
import YourOrderFilter from "../../Components/Your Order Page/YourOrderFilter/YourOrderFilter";
import YourOrderContainer from "../../Components/Your Order Page/Your Order Container/YourOrderContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrders } from "../../Store/Actions/userOrdersActions";

function Yourorderpage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, []);

  return (
    <div className=" Yourorderpage-div  remove__Header">
      {/* <YourOrderFilter /> */}
      <YourOrderContainer />
    </div>
  );
}

export default Yourorderpage;
