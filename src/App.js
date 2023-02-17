import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path="home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
