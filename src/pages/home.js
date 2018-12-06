import React from "react";
import Body from "./components/body"
import './app.css'
import {Map, TileLayer} from "react-leaflet";

import "leaflet/dist/leaflet.css";



const Home = () => (
    <Body title={"Home office"}>
      <div className="home_wrapper">
        <div id="map">
          <Map center={[50.625461, 26.251572]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </Map>
        </div>
      </div>
    </Body>
  );

export default Home;