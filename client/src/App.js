import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// contexts
import AppContext from "./contexts/AppContext";
// components
import Loader from "./components/Loader";
// constants
import {user as userData} from "./constants/data";
// pages
const Auth = lazy(() => import("./pages/auth/Index"));
const Dashboard = lazy(() => import("./pages/dashboard/Index"));
const Home = lazy(() => import("./pages/home/Index"));

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userData);
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
