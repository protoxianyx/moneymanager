type Info = {
  name: string;
  email: string;
  id: string;
};

type AdminInfoList = Info & {
  adminStatus: boolean;
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
