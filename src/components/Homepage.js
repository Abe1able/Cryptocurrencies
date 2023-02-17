import { ImSearch } from 'react-icons/im';
import Display from './display';

const Homepage = () => (
  <main>
    <div className="searchDiv">
      <input
        type="text"
        placeholder="search"
      />
      <ImSearch className="searchIcon" />
    </div>

    <div>
      <Display />
    </div>
  </main>
);

export default Homepage;
