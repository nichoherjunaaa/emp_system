import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Client from './pages/Client/Client';
import Navbar from './pages/Navbar';
import Biodata from './pages/Client/Biodata';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<><Navbar/><Client/></>} />
        <Route path="/biodata" element={<><Navbar/><Biodata/></>} />
      </Routes>
    </Router>
  );
}
