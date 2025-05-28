import React from 'react'

interface Row_Data{
  numerator: number;
  task: string;
}

const Holder: React.FC<Row_Data> = ({numerator, task}) => {
  return (
    <div> <span>{numerator}</span> <span>{task}</span></div>
  )
}

export default Holder