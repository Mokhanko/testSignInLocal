import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Topic = ({ match }) => (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3>{match.params.topicId}</h3>
            </div>
         </div>
    </div>
  );

  export default Topic;