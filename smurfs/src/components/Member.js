import React from "react";

const Member = (props) => {
      return (
          <div>
            <div>name: {props.member.name}</div>
            <div>age: {props.member.age}</div>
            <div>height: {props.member.height}</div>
            <br/>
          </div>
      );
}
  
  export default Member;