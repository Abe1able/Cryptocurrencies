import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { fetchCoins } from '../redux/reducer/currencies';
import Display from './display';

const Home = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

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
