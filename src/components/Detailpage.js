/* eslint-disable */
import { useLocation } from 'react-router-dom';
import React from 'react';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  const total = () => {
    if (state.total_supply == null) {
      return <span>{`${state.id.total_supply}`}</span>;
    }
    return <span>{`Total Supply: ${state.total_supply.toLocaleString()}`}</span>;
  };
  return (
    <div>
      <div>
        <img className="imgDt" src={state.image} alt="img" />        
      </div>
      <ul className="detailPage">
        <li>Name
          {` ${state.name}`}
        </li>
        <li>
        market_cap_rank:
        {state.market_cap_rank}
        </li>
        <li>
          market cap:
          {` ${Number(state.market_cap).toLocaleString('en-US')}`}
        </li>
        <li>
          price:
          {state.current_price}
        </li>
        <li>
          ATH:
          {` ${state.ath.toLocaleString()}`}
        </li>
        <li>
          Circulating Supply:
          {` ${state.circulating_supply.toLocaleString()}`}
        </li>
        <li>
          Trading Volume:
          {` ${state.total_volume.toLocaleString()}`}
        </li>
        <li>
          High 24hr:
          {` ${state.high_24h.toLocaleString()}`}
        </li>
        <li>
          Low 24hr:
          {` ${state.low_24h.toLocaleString()}`}
        </li>
        <li>
          Price Change 24hr:
          {` ${state.price_change_24h.toLocaleString()}`}
        </li>
      </ul>
    </div>
  );
};

export default Details;