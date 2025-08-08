import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useLogout() {
  return useMutation({
    mutationFn: async (accessToken: string | null) => {
      const response =  await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        null,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        }
      );
      return response.data;
    }
  });
}