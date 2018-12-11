import React from "react";
import { compose, withStateHandlers, setDisplayName } from 'recompose';
import Body from "./components/body"
import one from './galeryimg/one.jpg'
import two from './galeryimg/two.jpg'
import three from './galeryimg/three.jpg'
import four from './galeryimg/four.jpg'
import five from './galeryimg/five.jpg'
import six from './galeryimg/six.jpg'
import seven from './galeryimg/seven.jpg'
import eight from './galeryimg/eight.jpg'
import nine from './galeryimg/nine.jpg'
import ten from './galeryimg/ten.jpg'
import {Modal} from 'react-bootstrap'


const Galery = ({showModal, currImg, forModalWindow, showModalImage}) => (

  <Body title={"Galery"}>
    <div className="row">
      <Modal show={showModal} onHide={() => forModalWindow(showModal)}>
        <Modal.Header closeButton title={null}/>
        <Modal.Body>
          <p>{currImg}</p>
          <img src={currImg} className="center-block modalImage" alt=""/>
        </Modal.Body>
      </Modal>
      <h3 className="text-center">Bootstrap 3 Lightbox using Modal</h3>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={one} value={one} className="thumbnail img-responsive imgBox" alt="One"
               onClick={() => showModalImage(showModal, one)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={two} className="thumbnail img-responsive imgbox" alt="Two"
               onClick={() => showModalImage(showModal, two)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={three} className="thumbnail img-responsive imgbox" alt="Three"
               onClick={() => showModalImage(showModal, three)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={four} className="thumbnail img-responsive imgbox" alt="Four"
               onClick={() => showModalImage(showModal, four)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={five} className="thumbnail img-responsive imgbox" alt="Five"
               onClick={() => showModalImage(showModal, five)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={six} className="thumbnail img-responsive imgbox" alt="Six"
               onClick={() => showModalImage(showModal, six)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={seven} className="thumbnail img-responsive imgbox" alt="Seven"
               onClick={() => showModalImage(showModal, seven)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={eight} className="thumbnail img-responsive imgbox" alt="Eight"
               onClick={() => showModalImage(showModal, eight)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={nine} className="thumbnail img-responsive imgbox" alt="Nine"
               onClick={() => showModalImage(showModal, nine)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={ten} className="thumbnail img-responsive imgbox" alt="Ten"
               onClick={() => showModalImage(showModal, ten)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={one} className="thumbnail img-responsive imgbox" alt="One2"
               onClick={() => showModalImage(showModal, one)}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={two} className="thumbnail img-responsive imgbox" alt="Two2"
               onClick={() => showModalImage(showModal, two)}/>
        </div>
      </div>
    </div>
  </Body>
);

export default compose(
  withStateHandlers(
    {showModal: false, currImg: null},
    {
      forModalWindow: () => (showmodal) => ({showModal: !showmodal}),
      showModalImage: () => (showmodal, currimg) => ({showModal: !showmodal, currImg: currimg})
    }
  ),
  setDisplayName('Component Galery')
)(Galery);