import React, { Component } from "react";
import axios from "axios";
import ApiCaller from "../ApiCaller/ApiCaller";

class Jokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      input: ""
    };
    this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
  }

  handleDeleteEntry(id) {
    axios
      .delete("/api/messages/" + id)
      .then(response => {
        this.setState({
          library: response.data
        });
      })
      .catch(console.log);
  }

  handleUpdateEntry(id, input) {
    const updatedInput = {
      input
    };

    axios
      .put("/api/characters/" + id, updatedInput)
      .then(response => {
        this.setState({ library: response.data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <p>
        {this.props.entry.text}{" "}
        <button
          onClick={event => this.props.handleUpdateEntry(this.props.entry.id)}
        >
          {" "}
          Edit{" "}
        </button>
        <button
          onClick={event => this.props.handleDeleteEntry(this.props.entry.id)}
        >
          Delete
        </button>
      </p>
    );
  }
}
export default Jokes;
