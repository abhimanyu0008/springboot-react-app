import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/admin/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;