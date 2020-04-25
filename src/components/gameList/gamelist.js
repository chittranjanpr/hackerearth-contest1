import React from "react";
import platformIcon from "../../assert/images/airplay.svg"

import "./gameList.css"

const GameList = (props) => {
  return props.isFetched ? (
    <div className="container">
      <div className="spinner-border listContainer" />
    </div>
  ) : (
    <div className="container">
      {props.gameDetails.length > 0 &&
        props.gameDetails.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-header textColor"> <img src={platformIcon} style={{margin: '-4px 6px 0px 0px'}} />{data.title}</div>
            <div className="card-body">
              <div><span className="text textColor">Platform:</span>{data.platform}</div>
              <div><span className="text textColor">Score:</span>{data.score}</div>
              <div><span className="text textColor">Editor Choice:</span>{data.editors_choice}</div>
              <div><span className="text textColor">Release Year:</span>{data.release_year}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GameList;
