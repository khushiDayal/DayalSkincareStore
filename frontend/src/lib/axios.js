import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development"
        ? "http://localhost:5000/api" // local development
        : "https://dayalskincarestore.onrender.com/api", // production
    withCredentials: true,
});


export default axiosInstance;
