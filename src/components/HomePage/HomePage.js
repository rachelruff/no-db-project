import React, { Component } from "react";
import axios from "axios";
import ApiCaller from "../ApiCaller/ApiCaller";
import Jokes from "../CrudPage/Jokes";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      input: ""
    };

    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddEntry() {
    axios.post("/api/messages", { text: this.state.input }).then(response => {
      this.setState({ library: response.data });
    });

    // handleDeleteEntry(){
    //   axios.delete('/api/messages', )
    // }

    // this.setState({
    //   library: [...this.state.library, this.state.input],
    //   input: ""
    // });
  }
  handleDeleteEntry(id) {
    axios
      .delete("/api/messages/" + id)
      .then(response => {
        console.log(response);
        this.setState({
          library: response.data
        });
      })
      .catch(console.log);
  }

  render() {
    let list = this.state.library.map((element, index) => {
      return (
        <Jokes
          key={index}
          entry={element}
          handleDeleteEntry={this.handleDeleteEntry}
          handleUpdateEntry={this.handleUpdateEntry}
        />
      );
    });
    return (
      <div>
        <ApiCaller />
        {/* <CrudPage /> */}
        <div className="AddNewJoke">
          <span className="spanTitle">ADD NEW JOKE </span>{" "}
          <div>
            <div className="newestJoke">
              <input
                value={this.state.input}
                placeholder="Yo momma is so fat..."
                onChange={e => this.handleInputChange(e.target.value)}
              />
              <button onClick={this.handleAddEntry}>Add</button>
            </div>
          </div>
          {list}
        </div>
      </div>
    );
  }
}

export default HomePage;
