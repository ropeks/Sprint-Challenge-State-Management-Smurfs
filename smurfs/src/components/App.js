import React, { Component } from "react";
import smurfContext from '../contexts/smurfContext';
import axios from 'axios';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const initialState = {
  smurfList: [],
  smurfForm: {
    name: '',
    age: 0,
    height: '',
  },
}

class MyProvider extends Component {
  state = initialState;

  render() {
    return (
      <smurfContext.Provider value={{

        state: this.state,

        getSmurfs: () => {
          axios.get('http://localhost:3333/smurfs')
            .then(res => {
              this.setState({smurfList: res.data});
            })
            .catch(err => {
              console.log(err)
            })
        },

        addSmurf: () => {
          console.log(this.state)
          axios.post('http://localhost:3333/smurfs', this.state.smurfForm)
            .then(res => {
              this.setState({
                ...initialState,
                smurfList: res.data
              });
            })
            .catch(err => {
              console.log(err);
            })
        },

        formChange: (target, value) => {
          this.setState({
            ...this.state,
            smurfForm: {
              ...this.state.smurfForm,
              [target]: value,
            },
          })
        },

      }}>
        {this.props.children}
      </smurfContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <SmurfList />
          <SmurfForm />
        </div>
      </MyProvider>
    );
  }
}

export default App;
