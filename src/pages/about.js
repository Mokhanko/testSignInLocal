import React from "react";
import Body from "./components/body"

const inputs = [
  {
    name: "email"
  }
];

class User extends React.Component {
  state = {
    name: "fgdgd"
  }

  onChange = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        {/* {inputs.map((a, i)=> {
          return (
            <input type="text" key={i} name={a.name} value={this.state.name} onChange={this.onChange} />
          )
        })} */}
        <input type="text"  name={this.state.name} value={this.state.name} onChange={this.onChange} />
      </div>
    );
  }
}

const About = () => (
  <Body title={"About Me"}>
    <div>
      <User />
    </div>
  </Body>
);

export default About;