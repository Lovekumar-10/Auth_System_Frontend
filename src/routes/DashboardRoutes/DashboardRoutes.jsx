import { Route } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import PrivateRoute from "../guards/PrivateRoute";

import DashboardHome from "../../pages/dashboard/DashboardHome";
import DeveloperNetwork from "../../pages/dashboard/DeveloperNetwork";
import MyProjects from "../../pages/dashboard/MyProjects";
import PostProject from "../../pages/dashboard/PostProject";
import CollaborationBoards from "../../pages/dashboard/CollaborationBoards";
import Messages from "../../pages/dashboard/Messages";

const DashboardRoutes = () => (
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    }
  >
    <Route index element={<DashboardHome />} />
    <Route path="developers" element={<DeveloperNetwork />} />
    <Route path="projects" element={<MyProjects />} />
    <Route path="post-project" element={<PostProject />} />
    <Route path="boards" element={<CollaborationBoards />} />
    <Route path="messages" element={<Messages />} />
  </Route>
);

export default DashboardRoutes;
