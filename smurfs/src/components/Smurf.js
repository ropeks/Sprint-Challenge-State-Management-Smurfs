import React from "react";

const Smurf = (props) => {
      return (
          <div>
            <div>name: {props.smurf.name}</div>
            <div>age: {props.smurf.age}</div>
            <div>height: {props.smurf.height}</div>
            <br/>
          </div>
      );
}
  
  export default Smurf;