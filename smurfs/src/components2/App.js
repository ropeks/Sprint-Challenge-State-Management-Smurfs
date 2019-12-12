import React, { Component } from "react";

import TeamList from './TeamList';
import TeamForm from './TeamForm';


class App extends Component {
  render() {
    return (

        <div>
          <TeamList />
          <TeamForm />
        </div>

    );
  }
}

export default App;
