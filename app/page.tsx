
import React from "react";
import ProductInfo from "./ProductInfo";




const page = () => {

  const date = new Date();

  return (

    <div>
      <h1>Greet</h1>

      <p>Date: {date.getDate()} </p>

      <ProductInfo/>


    </div>


  );
};

export default page;
