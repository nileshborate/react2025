import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Items from './pages/Items';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
