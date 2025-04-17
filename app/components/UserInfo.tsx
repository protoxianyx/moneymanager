import { Info } from "@/types";
import React from "react";

type UserInfoProp = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      name: {user.name} <br />
      id: {user.id} <br />
      email: {user.email} <br />
    </div>
  );
};

export default UserInfo;
