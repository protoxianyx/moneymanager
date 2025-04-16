import React from 'react'

const NumbersList = () => {

    const numbers = [1,2,3,4,5,6]

  return (
      <div>
          {numbers.map(number => (
              <ul key={number}>
                  <li>{number}</li>
              </ul>
          ))}
    </div>
  )


}

export default NumbersList

