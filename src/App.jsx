import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/admin/Home';
import Login from './components/admin/Login';
import AdminHome from './components/admin/AdminHome';
import AddFaculty from './components/admin/AddFaculty';
import ProtectedRoute from './routes/ProtectedRoute';
import AddEmployee from './components/admin/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminpage" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
        <Route path="/add-faculty" element={<ProtectedRoute><AddFaculty /></ProtectedRoute>} />
        <Route path='/add-employee' element={<ProtectedRoute><AddEmployee/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
