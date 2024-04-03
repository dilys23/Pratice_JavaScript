import { BrowserRouter as Router, Route,Routes,  Navigate } from 'react-router-dom';
import LoginPage from './pages/Admin/LoginPage';
import HomePage from './pages/Admin/HomePage';
import DashboardPage from './pages/Admin/DashboardPage';

function RoutesFunc() {
  return (
    <Router>
      <Routes>
          <Route exact path="/admin/login" element={<LoginPage />} />
          <Route exact path="/admin/home" element={<HomePage />} />
         <Route exact path="/admin/dashboard" element={<DashboardPage />} />
          {/* <Route path="*" element={<Navigate to="/admin/login" replace />} /> */}
      </Routes>
    
    </Router>
  );
}

export default RoutesFunc;