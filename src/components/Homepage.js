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
          .map((coins, index) => (
            <div className={`src${index}`} key={coins.id}>
              <NavLink className="text" state={coins} to={`/detail/${coins.name}`}>
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
