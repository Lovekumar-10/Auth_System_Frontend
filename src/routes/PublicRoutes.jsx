// import { Route } from "react-router-dom";
// import PublicLayout from "../../layouts/PublicLayout";

// import Home from "../../pages/publicPages/Home";
// import About from "../../pages/publicPages/About";

// const PublicRoutes = () => (
//   <Route element={<PublicLayout />}>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </Route>
// );

// export default PublicRoutes;



import { Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/publicPages/Home";
import About from "../pages/publicPages/About";

import PublicRoute from "./guards/PublicRoute";

const PublicRoutes = () => (
  <Route element={<PublicLayout />}>
    <Route path="/" element={
        <PublicRoute>
          <Home />
        </PublicRoute>
      }
    />

    <Route path="/about" element={
        <PublicRoute>
          <About />
        </PublicRoute>
      }
    />
  </Route>
);

export default PublicRoutes;
