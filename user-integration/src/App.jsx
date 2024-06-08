import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import Users from './views/users/Users';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path='/users/:id' element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;