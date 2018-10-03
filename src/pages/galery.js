import React from "react";
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


class Galery extends React.Component {
  state = {
    showModal: false,
    currImg: null
  };

  render() {
    return (
      <Body title={"Galery of life"}>
      <div className="row">
        <Modal show={this.state.showModal} onHide={() => this.setState({showModal: !this.state.showModal})}>
          <Modal.Header closeButton title={null}/>
          <Modal.Body>
            <p>{this.state.currImg}</p>
            <img src={this.state.currImg} className="center-block modalImage" alt=""/>
          </Modal.Body>
        </Modal>
        <h3 className="text-center">Bootstrap 3 Lightbox using Modal</h3>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={one} value={one} className="thumbnail img-responsive imgBox" alt="One"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: one})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={two} className="thumbnail img-responsive imgbox" alt="Two"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: two})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={three} className="thumbnail img-responsive imgbox" alt="Three"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: three})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={four} className="thumbnail img-responsive imgbox" alt="Four"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: four})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={five} className="thumbnail img-responsive imgbox" alt="Five"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: five})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={six} className="thumbnail img-responsive imgbox" alt="Six"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: six})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={seven} className="thumbnail img-responsive imgbox" alt="Seven"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: seven})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={eight} className="thumbnail img-responsive imgbox" alt="Eight"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: eight})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={nine} className="thumbnail img-responsive imgbox" alt="Nine"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: nine})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={ten} className="thumbnail img-responsive imgbox" alt="Ten"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: ten})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={one} className="thumbnail img-responsive imgbox" alt="One2"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: one})}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <img src={two} className="thumbnail img-responsive imgbox" alt="Two2"
                 onClick={() => this.setState({showModal: !this.state.showModal, currImg: two})}/>
          </div>
        </div>
      </div>
      </Body>
    );
  }
}

export default Galery;