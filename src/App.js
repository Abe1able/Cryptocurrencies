import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Homepage';
import Details from './components/Detailpage';

const App = () => (
  <div className="App">
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Details />} />
      </Routes>
    </div>
  </div>
);

export default App;
