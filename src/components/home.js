import React from "react";
import axios from "axios";
import GameList from "./gameList/gamelist";
import SortOptions from "./sortOptions/sortOptions";
import { sortArray, filterArray } from "../utils";
import Nav from "./nav/nav";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDetails: [],
      tempgameDetails: [],
      isFetched: true,
      scoreClick: "",
      optionsList: [],
      platformList:[]
    };
  }

  componentDidMount() {
    var list = [];
    var platformList= [];
    axios.get("http://starlord.hackerearth.com/gamesext").then((res) => {
      if (res.status === 200) {
        res.data.map((data, index) => {
          if (index < 160){
             list.push({ title: data.title, index: index });
             platformList.push({ title: data.platform, index: index });
          }
        });
        this.setState({
          gameDetails: res.data,
          tempgameDetails: res.data,
          isFetched: false,
          optionsList: list,
          platformList: platformList
        });
      }
    });
  }

  scoreSortHandle = (data) => {
    let { gameDetails } = this.state;
    var sortedData = sortArray(gameDetails, data);
    this.setState({ scoreClick: data, gameDetails: sortedData });
  };

  handleRequestOptions = (data) => {
    let { gameDetails, tempgameDetails } = this.state;
    this.setState({isFetched: true})
    if (data === null) {
      this.setState({ gameDetails: tempgameDetails, isFetched: false });
    } else {
      this.setState({ gameDetails: [gameDetails[data.index]], isFetched: false });
    }
  };

  clearFilter = () => {
    let { tempgameDetails } = this.state;
      this.setState({ gameDetails: tempgameDetails });
      window.location.reload()
  }

  handleplatformList = async (data) => {
    let { tempgameDetails } = this.state;
    if (data === null) {
      this.setState({ gameDetails: tempgameDetails });
    } else {
      var filteredData = await filterArray(tempgameDetails, data.title)
      this.setState({ gameDetails: filteredData });
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <SortOptions
          {...this.state}
          handleRequestOptions={this.handleRequestOptions}
          scoreSortHandle={this.scoreSortHandle}
          clearFilter={this.clearFilter}
          handleplatformList={this.handleplatformList}
        />
        <GameList {...this.state} />
      </div>
    );
  }
}
