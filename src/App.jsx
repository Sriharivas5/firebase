// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/SignIn/SignIn";
import Login from "./Auth/Login/Login";
import Reset from "./Auth/Reset/Reset";

import UploadForm from "./pages/Admin/Upload/Upload";
import ManageJobs from "./pages/Admin/Manage/ManageJobs";
import RetrieveText from "./pages/User/Fetch_Jobs/Fetch_Jobs";

import ProtectedRoute from "./ProtectedRoute";
import ResumeBuilderTest from "./Builder";






import TemplateSelector from "./pages/User/TemplateSelector/TemplateSelector";
import ResumeForm from "./pages/User/ResumeForm/ResumeForm";
import ResumeGenerated from "./pages/User/ResumeGenerated/ResumeGenerated";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        {/* <ResumeBuilderTest /> */}
        {/* Protected route: Only signed-in users can upload */}
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadForm />
            </ProtectedRoute>
          }
        />

        {/* Protected route: Only signed-in users can upload */}
        <Route
          path="/manage"
          element={
            <ProtectedRoute>
              <ManageJobs />
            </ProtectedRoute>
          }
        />


        <Route path="/" element={<RetrieveText />} />


         <Route path="/selector" element={<TemplateSelector />} />
        <Route path="/form" element={<ResumeForm />} />
        <Route path="/resume" element={<ResumeGenerated />} />

        {/* Default to login */}
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;







       

