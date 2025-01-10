import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Data from './pages/Data';
import MainLayout from './layout/MainLayout';
import PrivateRoute from './routes/PrivateRoute';
import AdminPage from './pages/admin/AdminPage';
import Informasi from './pages/Informasi';
import Kehadiran from './pages/Kehadiran';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user && user.role === 'admin';

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/biodata" element={<MainLayout><Data /></MainLayout>} />
      <Route path="/informasi" element={<MainLayout><Informasi/></MainLayout>} />
      <Route path="/kehadiran" element={<MainLayout><Kehadiran/></MainLayout>} />
      <Route
        path="/admin"
        element={
          <PrivateRoute isAdmin={isAdmin}>
            <MainLayout>
              <AdminPage />
            </MainLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;