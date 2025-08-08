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
    mutationFn: (payload: Credentials) => {
      const response =  axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,payload);
      return response;
    }
  });
}