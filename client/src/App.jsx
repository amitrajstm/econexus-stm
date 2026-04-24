import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import SubmitIdea from "./pages/SubmitIdea";
import ProtectedRoute from "./auth/ProtectedRoute";
import RequireAdmin from "./auth/RequireAdmin";
import RequireUser from "./auth/RequireUser";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import { initializeTheme, toggleTheme } from "./utils/theme";

export default function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <BrowserRouter>
        <Navbar toggleTheme={handleToggleTheme} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
         
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submit"
            element={
              <RequireUser>
                <SubmitIdea />
              </RequireUser>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
