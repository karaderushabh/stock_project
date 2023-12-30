// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Registration from "./components/Registration";
import { AuthProvider } from "./useAuth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/about"
              element={<PrivateRoute element={<About />} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
