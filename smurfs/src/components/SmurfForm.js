import React, { Component } from "react";
import smurfContext from '../contexts/smurfContext';

class SmurfForm extends Component {
    static contextType = smurfContext;

    onFormChange(e) {
        this.context.formChange(e.target.name, e.target.value)
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.context.addSmurf();
    }

    render() {
      return (
          <div>
              <form onSubmit={this.onFormSubmit.bind(this)}>
                  <input 
                    name='name' 
                    value={this.context.state.smurfForm.name}
                    placeholder='name'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <input 
                    name='age' 
                    value={this.context.state.smurfForm.age}
                    placeholder='age'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <input 
                    name='height' 
                    value={this.context.state.smurfForm.height}
                    placeholder='height'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <button onClick={this.onFormSubmit.bind(this)}>Add Smurf</button>
              </form>
          </div>
      );
    }
  }
  
  export default SmurfForm;