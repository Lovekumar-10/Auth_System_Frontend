

// import axios from "axios";
// import { toast } from "sonner";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// // ✅ RESPONSE INTERCEPTOR
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // ✅ Show success toast only for login/register
//     if (
//       response.config.url.includes("/login") ||
//       response.config.url.includes("/register")
//     ) {
//       if (response?.data?.message) {
//         toast.success(response.data.message);
//       }
//     }
//     return response;
//   },

//   async (error) => {
//     const originalRequest = error.config;

   
//     if (window.location.pathname === "/login") {
//       return Promise.reject(error);
//     }

  
//     if (!error.response) {
//       toast.error("Network error, please check your connection.");
//       return Promise.reject(error);
//     }

//     // 🚫 Skip refresh-token API itself
//     if (originalRequest.url.includes("/auth/refresh-token")) {
//       return Promise.reject(error);
//     }

//     // 🔐 HANDLE 401 (AUTH ERROR)
//     if (error.response.status === 401 && !originalRequest._retry) {
//       const message = error.response?.data?.message;

//       // 🚫 Prevent loop for /auth/me
//       if (originalRequest.url.includes("/auth/me")) {
//         return Promise.reject(error);
//       }

//       // 🔥 If session expired → logout directly
//       if (message === "Session expired. Please login again.") {
//         toast.error("Session expired, please login again");
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }

//       // 🔄 Normal refresh flow
//       originalRequest._retry = true;

//       try {
//         await axios.post(
//           "http://localhost:5000/api/auth/refresh-token",
//           {},
//           { withCredentials: true }
//         );

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         toast.error("Session expired, please login again");
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     // ❌ Other errors
//     if (error.response.status !== 401) {
//       const message =
//         error.response?.data?.message || "Something went wrong";
//       toast.error(message);
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;








import axios from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// ✅ RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    // ✅ Success toast only for login/register
    if (
      response.config.url.includes("/login") ||
      response.config.url.includes("/register")
    ) {
      if (response?.data?.message) {
        toast.success(response.data.message);
      }
    }
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    // 🌐 Network error
    if (!error.response) {
      toast.error("Network error, please check your connection.");
      return Promise.reject(error);
    }

    const status = error.response.status;
    const message =
      error.response?.data?.message || "Something went wrong";

    // 🚫 Skip refresh-token API itself
    if (originalRequest.url.includes("/auth/refresh-token")) {
      return Promise.reject(error);
    }

    // 🚫 Prevent infinite loop for /auth/me
    if (originalRequest.url.includes("/auth/me")) {
      return Promise.reject(error);
    }

    // 🔐 HANDLE 401
    if (status === 401 && !originalRequest._retry) {
      // 🔥 If session expired → logout directly
      if (message === "Session expired. Please login again.") {
        toast.error(message);
        window.location.href = "/login";
        return Promise.reject(error);
      }

      // 🔄 Try refresh token
      originalRequest._retry = true;

      try {
        await axios.post(
          "http://localhost:5000/api/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        toast.error("Session expired, please login again");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // ❌ Show error toast for ALL other cases (including login 401)
    toast.error(message);

    return Promise.reject(error);
  }
);

export default axiosInstance;