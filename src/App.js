import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Homepage';
import Details from './components/Detailpage';
import { fetchCoins } from './redux/reducer/currencies';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:name" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
