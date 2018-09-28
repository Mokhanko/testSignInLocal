import React from "react";


class Clock extends React.Component {
  
    state = {
        date: new Date(),
        clock_on: true
    };
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
          if(this.state.clock_on){
            this.setState({
                date: new Date()
              });
          }
      }
      onClick = (e) => {
        //console.log('Clock on is ' + this.state.clock_on);
        this.setState({clock_on:!this.state.clock_on});
        //console.log('Clock on is ' + this.state.clock_on);  
      } 

    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={this.onClick}>Stop timer</button>
        </div>
      );
    }
}


const Body = ({children, title}) =>(
    <div>
        <div className="jumbotron">
            <h1>{title}</h1>
            <Clock />      
        </div>
        {children}
    </div>
);

export default Body;