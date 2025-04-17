import React from "react";


export type Info = {
  userName: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ userName, email, age, location }: Info) => {
  return (
    <div>
      <ul>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
