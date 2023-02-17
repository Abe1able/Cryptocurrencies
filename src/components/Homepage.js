import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Display from './display';

const Home = () => {
  const { coins } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  const el = coins.length;
  return (
    <>
      <div className="searchDiv">
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <FaSearch className="searchIcon" />
        <p>
          Hello
          {el}
        </p>
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
