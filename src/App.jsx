// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/SignIn/SignIn";
import Login from "./Auth/Login/Login";
import Reset from "./Auth/Reset/Reset";
import UploadForm from "./Upload/Upload";
import RetrieveText from "./Upload/Retrive";
import ProtectedRoute from "./ProtectedRoute";
import ManageJobs from "./Upload/ManageJobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />

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


        <Route path="/retrieve" element={<RetrieveText />} />

        {/* Default to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
