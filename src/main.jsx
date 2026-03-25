

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// // 1. Import Toaster and your Providers
// import { Toaster } from "sonner";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthProvider } from "./context/authContext.jsx";

// const queryClient = new QueryClient();

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       {/* 2. Place Toaster here. Change 'top-right' to your preferred spot */}
//       <Toaster position="top-right" richColors closeButton expand={true} />
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </QueryClientProvider>
//   </StrictMode>,
// );










import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-right" richColors closeButton expand={true} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);