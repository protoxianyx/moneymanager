import { AdminInfoList } from "@/types";
import React from "react";

type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return <div>{admin.role}</div>;
};

export default AdminInfo;
