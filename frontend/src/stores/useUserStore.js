import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("Password do not match");
    }

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "An error occurred");
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await axios.post("/auth/login", { email, password });
      console.log("Login response:", res.data); // Debug
      // Save the token to localStorage (assuming res.data contains { token, user })
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Access token saved:", res.data.token);
      }
      if (res.data.refreshToken) {
        localStorage.setItem("refreshToken", res.data.refreshToken);
        console.log("Refresh token saved:", res.data.refreshToken);
      }
      set({ user: res.data.user || res.data, loading: false }); // Set user state
      return res.data; // Return the full response for LoginPage.jsx
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "An error occurred");
      throw error; // Re-throw to be caught in LoginPage.jsx
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      set({ user: null });
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred during logout");
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/auth/profile");
      set({ user: response.data, checkingAuth: false });
    } catch (error) {
      set({ checkingAuth: false, user: null });
    }
  },

  refreshToken: async () => {
    if (get().checkingAuth) return;

    set({ checkingAuth: true });
    try {
      const refreshToken = localStorage.getItem("refreshToken"); // Get stored refresh token
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }
      const response = await axios.post("/auth/refresh-token", { refreshToken });
      console.log("Refresh token response:", response.data); // Debug
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Update access token
        console.log("New access token saved:", response.data.token);
      }
      set({ checkingAuth: false });
      return response.data;
    } catch (error) {
      console.error("Refresh token error:", error.message);
      set({ user: null, checkingAuth: false });
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      throw error;
    }
  },
}));

// Implement the axios interceptors for refreshing access token
let refreshPromise = null;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (refreshPromise) {
          await refreshPromise;
          return axios(originalRequest);
        }

        refreshPromise = useUserStore.getState().refreshToken();
        const newData = await refreshPromise;
        refreshPromise = null;

        // Update the Authorization header with the new token
        if (newData.token) {
          originalRequest.headers.Authorization = `Bearer ${newData.token}`;
        }
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Refresh failed:", refreshError.message);
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
