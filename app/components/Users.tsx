import React, { ReactNode } from "react";

// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// interface UserShape {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

interface UserShape {
children: ReactNode
}


// const Users = ({ name, age, isStudent }: UserShape) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isStudent}</h1>
//     </div>
//   );
// };


const Users = ({ children }: UserShape) => {
  return (
      <div>
          <h1>{children}</h1>

    </div>
  );
};


export default Users;
