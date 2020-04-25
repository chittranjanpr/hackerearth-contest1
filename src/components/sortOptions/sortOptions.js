import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./sortOptions.css";
import upArrow from "../../assert/images/up-arrow.svg";
import downArrow from "../../assert/images/down-arrow.svg";

const SortOptions = (props) => {
  return props.optionsList.length > 0 ? (
    <div className="container contain">
      <div className="autocomplete">
        <Autocomplete
          id="Search Title"
          options={props.optionsList}
          onChange={(event, value) => props.handleRequestOptions(value)}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search Title" variant="outlined" />
          )}
        />
      </div>
      <div className="autocomplete">
        <Autocomplete
          id="Search platform"
          options={props.platformList}
          onChange={(event, value) => props.handleplatformList(value)}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search By Platform" variant="outlined" />
          )}
        />
      </div>
      <button
        className="btn btn-info btn-lg optionsContainer"
        onClick={() =>
          props.scoreSortHandle(props.scoreClick === "down" ? "up" : "down")
        }
      >
        Score
        {props.scoreClick !== "" ? (
          <img
            src={props.scoreClick == "down" ? upArrow : downArrow}
            className="arrowImg"
          />
        ) : null}
      </button>
      <button
        className="btn btn-info btn-lg"
        onClick={() => props.clearFilter()}
      >
        Clear All
      </button>
    </div>
  ) : null;
};
export default SortOptions;
