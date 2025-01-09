import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Data from './pages/Data';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/biodata" element={<MainLayout><Data /></MainLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;