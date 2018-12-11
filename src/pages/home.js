import React from "react";
import {connect} from 'react-redux'
import {compose, lifecycle, setDisplayName} from 'recompose';
import {Map, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Body from "./components/body"
import { isUserLogged} from "../reducers/authReducer";
import './app.css'



const Home = () => (
  <Body title={"Home office"}>
    <div className="home_wrapper">
      <div id="map">
        <Map center={[50.625461, 26.251572]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </Map>
      </div>
    </div>
  </Body>
);

export default compose(
  connect(
    (state) => ({
    token: state.users.token
  }),
    {
      isUserLogged
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.isUserLogged();
    }
  }),
  setDisplayName('Home element')
)(Home);