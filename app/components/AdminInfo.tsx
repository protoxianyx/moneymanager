import { Info } from "./UserInfo";
import React from "react";

// type AdminListInfo = {
//   userName: string;
//   email: string;
//   age: number;
//   location: string[];
//   admin: string;
// };

type AInfo = Info & {
  admin: string;
};

const AdminInfo = ({ userName, email, age, location, admin }: AInfo) => {
  return (
    <div>
      <ul>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
      </ul>
    </div>
  );
};

export default AdminInfo;
