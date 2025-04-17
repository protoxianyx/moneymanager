import { AdminInfoList } from "@/types";
import React from "react";

type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      role: {admin.role} <br />
      name: {admin.name} <br />
      login: {admin.lastLogin.toLocaleString()} <br />
      adminStatus: {admin.adminStatus ? "True" : "False"} <br />
      id: {admin.id} <br />
      email: {admin.email} <br />
    </div>
  );
};

export default AdminInfo;
