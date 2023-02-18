/* eslint-disable */
import { useLocation } from "react-router-dom";
import React from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "../CSSmodule/details.css";

const Details = () => {
  const location = useLocation();
  const { state } = location;
  const total = () => {
    if (state.total_supply == null) {
      return <span>{`${state.id.total_supply}`}</span>;
    }
    return (
      <span>{`Total Supply: ${state.total_supply.toLocaleString()}`}</span>
    );
  };
  return (
    <div className="detailsection">
      <div>
        <img className="imgDt" src={`${state.image}`} alt="img" />
      </div>
      <ul className="detailPage">
        <li>
          <span>Name:</span>
          <span>{` ${state.name}`}</span>
        </li>
        <li className="coinsIcon">
          <span>Market cap rank:</span>
          <span>{state.market_cap_rank}</span>
        </li>
        <li>
          <span>Market cap:</span>
          <span>{` ${Number(state.market_cap).toLocaleString("en-US")}`}</span>
        </li>
        <li className="coinsIcon">
          <span>Current price:</span>
          <span>${state.current_price}</span>
        </li>
        <li>
          <span>ATH:</span>
          <span>{` ${state.ath.toLocaleString()}`}</span>
        </li>
        <li className="coinsIcon">
          <span>Circulating Supply:</span>
          <span>{` ${state.circulating_supply.toLocaleString()}`}</span>
        </li>
        <li>
          <span>Trading Volume:</span>
          <span>{` ${state.total_volume.toLocaleString()}`}</span>
        </li>
        <li className="coinsIcon">
          <span>High 24hr:</span>
          <span>
            <FiArrowUp className="green" />
            {` ${state.high_24h.toLocaleString()}`}
          </span>
        </li>
        <li>
          <span>Low 24hr:</span>
          <span>
            <FiArrowDown className="red" />
            {` ${state.low_24h.toLocaleString()}`}
          </span>
        </li>
        <li className="coinsIcon">
          <span>Price Change 24hr:</span>
          <span>{` ${state.price_change_24h.toLocaleString()}`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
