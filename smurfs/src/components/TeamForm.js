import React, { Component } from "react";
import teamContext from '../contexts/teamContext';

class TeamForm extends Component {
    static contextType = teamContext;

    onFormChange(e) {
        this.context.formChange(e.target.name, e.target.value)
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.context.addMember();
    }

    render() {
      return (
          <div>
              <form onSubmit={this.onFormSubmit.bind(this)}>
                  <input 
                    name='name' 
                    value={this.context.state.teamForm.name}
                    placeholder='name'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <input 
                    name='age' 
                    value={this.context.state.teamForm.age}
                    placeholder='age'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <input 
                    name='height' 
                    value={this.context.state.teamForm.height}
                    placeholder='height'
                    onChange={this.onFormChange.bind(this)}
                  />
                  <button onClick={this.onFormSubmit.bind(this)}>Add Smurf</button>
              </form>
          </div>
      );
    }
  }
  
  export default TeamForm;