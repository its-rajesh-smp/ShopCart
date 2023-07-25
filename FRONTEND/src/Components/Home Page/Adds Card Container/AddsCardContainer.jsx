import React from "react";
import "./AddsCardContainer.css";
import Add from "../../UI/Home Page UI/Adds Card Container UI/Add/Add";
import useFetch from "../../../Hooks/useFetch";
import { GET_ADDS } from "../../../API/endpoints";

function AddsCardContainer() {

  // FETCHING ADDS FROM DATABASE
  const [addsList] = useFetch(GET_ADDS)


  return (
    <div className=" AddsCardContainer-div ">
      {addsList && addsList.map((add) => {
        return <Add key={add.id} image={add.image} path={add.path} />;
      })}
    </div>
  );
}

export default AddsCardContainer;
