import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Display from './display';
import '../CSSmodule/homepage.css';

const Home = () => {
  const { coins } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="container">
        <input
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a coin"
        />

      </div>
      <div className="grid">
        {coins.filter((searchCoin) => searchCoin.name.toLowerCase()
          .includes(search.toLowerCase()))
          .map((coins) => (
            <div className=" sec1" key={coins.id}>
              <NavLink state={coins} to="/display">
                <Display
                  items={coins}
                />
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
