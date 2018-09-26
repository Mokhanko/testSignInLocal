import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const divStyle = {
    color: 'blue',
    border: '1px solid red',
  };

const Home = () => (
    <div className="container wrapper">
        <div className="row">
            <div className="col-lg-6" style={divStyle}>
                <h3>Old Boy</h3>
            </div>
         </div>
    </div>
  );

  export default Home;