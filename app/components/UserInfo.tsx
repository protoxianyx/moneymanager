import { Info } from "@/types";
import React from "react";

type UserInfoProp = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default UserInfo;
