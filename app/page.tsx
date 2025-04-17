import React from "react";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import { AdminInfoList, Info } from "./types";

// Reusable Prop Typing

const page = () => {
  // const userInfo: Info = {
  //   name: "new string",
  //   email: "string.goc.iw",
  //   id: "iuoa",
  // };

  // const admin: AdminInfoList = {
  //   name: "your admin",
  //   email: "admin.sup.in",
  //   id: "gin",
  //   adminStatus: true,
  //   lastLogin: new Date(),
  //   role: "Admin",
  // };

  return (
    <div>
      <UserInfo
        userName="Jerry"
        email="henesy@gov.com"
        age={21}
        location={["iwoa", "haiati"]}
      />
      <br />
      <p>------------------------------------------------------------</p>
      <br />
      <AdminInfo
        userName="Jerry"
        email="henesy@gov.com"
        age={21}
        location={["harapan", "haiati"]}
        admin="yes"
      />
    </div>
  );
};

export default page;
