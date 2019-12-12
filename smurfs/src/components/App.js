import React, { Component } from "react";
import teamContext from '../contexts/teamContext';
import axios from 'axios';
import TeamList from './TeamList';
import TeamForm from './TeamForm';

const initialState = {
  teamList: [],
  teamForm: {
    name: '',
    age: 0,
    height: '',
  },
}

class MyProvider extends Component {
  state = initialState;

  render() {
    return (
      <teamContext.Provider value={{

        state: this.state,

        getTeam: () => {
          axios.get('http://localhost:3333/team')
            .then(res => {
              this.setState({teamList: res.data});
            })
            .catch(err => {
              console.log(err)
            })
        },

        addMember: () => {
          axios.post('http://localhost:3333/team', this.state.teamForm)
            .then(res => {
              this.setState({
                ...initialState,
                teamList: res.data
              });
            })
            .catch(err => {
              console.log(err);
            })
        },

        formChange: (target, value) => {
          this.setState({
            ...this.state,
            teamForm: {
              ...this.state.teamForm,
              [target]: value,
            },
          })
        },

      }}>
        {this.props.children}
      </teamContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <TeamList />
          <TeamForm />
        </div>
      </MyProvider>
    );
  }
}

export default App;
