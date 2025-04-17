import React, { FC } from "react";

// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

// interface UserShape {
// children: ReactNode
// }

// const Users = ({ name, age, isStudent }: UserShape) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isStudent}</h1>
//     </div>
//   );
// };

const Users: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>
        {name} , {age}, {isStudent ? "This is a student" : "False"}
      </h1>
    </div>
  );
};

export default Users;
