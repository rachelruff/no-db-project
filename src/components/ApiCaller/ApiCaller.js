import React, { Component } from "react";
import axios from "axios";

export default class ApiCaller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "",
      favorites: []
    };
    this.getApiData = this.getApiData.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites(joke) {
    let newState = this.state.favorites;
    newState.push(joke);

    this.setState({ favorites: newState });
  }

  getApiData() {
    axios.get("/api/getJoke").then(result => {
      console.log(result.data);
      return this.setState({ joke: result.data.joke });
    });
  }
  render() {
    console.log(this.state.favorites, "in return ");
    return (
      <div className="mainPage">
        <div className="title">
          <h1> GOT JOKES? </h1>
        </div>
        <div className="jokeContent">
          <h3> {this.state.joke} </h3>
        </div>
        <button className="generateApi" onClick={this.getApiData}>
          {" "}
          MAKE MY DAY
        </button>
        {this.state.joke && (
          <div className="saveButton">
            <button onClick={e => this.getFavorites(this.state.joke)}>
              save to favorites{" "}
            </button>
          </div>
        )}
        <div className="bottom">
          <div className="favorites" />
          <h1>Favorites</h1>
        </div>
        <div className="copyPageContent">
          {this.state.favorites.map((curr, index) => {
            return <p key={index}>{curr}</p>;
          })}{" "}
        </div>
      </div>
    );
  }
}
