import React from 'react'





const PropPracatice = () => {
  return (
    <User name="Hello" />
  )
}


const User = (props) => {
  return (
    <section>
      <h1>name: {props.name}</h1>
    </section>
  );
};

export default PropPracatice