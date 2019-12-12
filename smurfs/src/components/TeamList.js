import React, { Component } from "react";
import teamContext from '../contexts/teamContext';
import Member from './Member';

class TeamList extends Component {
    static contextType = teamContext;

    componentDidMount() {
        this.context.getTeam();
    }

    render() {
      return (
          <div>
          {
              this.context.state.teamList.map(member => (
                  <Member key={member.id} member={member} />
              ))
          }
          </div>
      );
    }
  }
  
  export default TeamList;