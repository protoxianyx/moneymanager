import React from 'react'

const ProductInfo = () => {

    const product = {
        name: "Light Saber",
        price: 1200,
        techDate: "Future"
} 

  return (
      <div>
          <h1>Name: {product.name}</h1>
          <h1>Price: {product.price}</h1>
          <h1>Tech Date: {product.techDate}</h1>
    </div>
  )
}

export default ProductInfo