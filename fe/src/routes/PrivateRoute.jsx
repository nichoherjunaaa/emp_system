// PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAdmin }) => {
    return isAdmin ? children : <Navigate to="/" />;
};
export default PrivateRoute;