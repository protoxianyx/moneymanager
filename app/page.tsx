
import React from "react";
import ProductInfo from "./ProductInfo";
import NumbersList from "./NumbersList";




const page = () => {

  const date = new Date();

  return (

    <div>
      <h1>Greet</h1>

      <p>Date: {date.getDate()} </p>

      <ProductInfo />
      <NumbersList/>


    </div>


  );
};

export default page;
