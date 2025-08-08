import { create } from "zustand";

interface UserStore {
  userId: string | null;
  refreshToken: string | null;
  accessToken: string | null;
  setUserId: (id: string | null) => void;
  setRefreshToken: (token: string | null) => void;
  setAccessToken: (token: string | null) => void;
  clear: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userId: null,
  refreshToken: null,
  accessToken: null,
  setUserId: (id) => set({ userId: id }),
  setRefreshToken: (token) => set({ refreshToken: token }),
  setAccessToken: (token) => set({ accessToken: token}),
  clear: () => set({ userId: null, refreshToken: null }),
}));