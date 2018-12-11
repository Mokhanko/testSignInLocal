import React from "react";
import {Redirect, withRouter, Route} from "react-router-dom";
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  token: state.users.token,
});


class Public extends React.Component{
  render() {
    const {
      component: Component,
      ...props
    } = this.props;
    const { from } = { from: { pathname: "/" } };
    return (
      <Route {...props} render={props =>
        this.props.token !== null ?
          <Redirect to={from}/>
          :
          <Component {...props} {...this.props}/>
      }
      />
    )
  }
}

export default withRouter(
  connect(mapStateToProps,{})(Public)
);
