import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import ViewReport from "./pages/ViewReport";
import AdminLogin from "./pages/AdminLogin";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/view-report" element={ <ViewReport /> } />
          <Route path="/admin-login" element={ <AdminLogin /> } />
          <Route path="/admin-users" element={ <AdminUsers /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
