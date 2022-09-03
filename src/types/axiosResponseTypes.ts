export type SignUpResponse = {
  status: string;
  token: string;
  data: {
    user: {
      email: string;
      nickname: string;
      role: string;
      _id: string;
      __v: number;
      id: string;
    };
  };
};
