import React from "react";
import Links from "./Links";


//If a prop of bio is passed to this component, it is displayed inside of a <p> tag
//If a prop of bio is not passed down, or if bio is an empty string, don't display the <p> tag
//Hint: you'll need to do some conditional rendering here to determine whether or not to display the <p> tag
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        github={props.github}
        linkedin={props.linkedin}
      />
    </div>
  );
}

export default About;
