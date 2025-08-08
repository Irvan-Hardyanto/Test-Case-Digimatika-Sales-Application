import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Credentials = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
  };
};
export function useLogin() {
  return useMutation({
    mutationFn: async (payload: Credentials) => {
      const response =  await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,payload);
      return response.data;
    }
  });
}