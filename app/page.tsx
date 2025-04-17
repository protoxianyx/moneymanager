import React from "react";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import { AdminInfoList, Info } from "./types";

// Reusable Prop Typing

const page = () => {
  const userInfo: Info = {
    name: "new string",
    email: "string.goc.iw",
    id: "iuoa",
  };

  const admin: AdminInfoList = {
    name: "your admin",
    email: "admin.sup.in",
    id: "gin",
    adminStatus: true,
    lastLogin: new Date(),
    role: "Admin",
  };

  return (
    <div>
      <UserInfo user={userInfo} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default page;
