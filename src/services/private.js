import React from "react";
import {Redirect, withRouter, Route} from "react-router-dom";
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  token:state.users.token
});




class Private extends React.Component {
  render() {
    const {
      component: Component,
      ...props
    } = this.props;
    const {from} = {from: {pathname: "/login"}};
    return (
      <Route {...props}
             render={() => this.props.token !== null ?
               <Component {...props}/>
               :
               <Redirect to={from}/>
             }
      />
    )
  }
}

export default withRouter(
  connect(mapStateToProps,{})(Private)
);