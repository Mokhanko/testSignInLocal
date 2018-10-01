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
        currImg:null
    };

    render() {
        return (
            <Body title={"Galery of life"}>
                <div className="row">
                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: !this.state.showModal })}>
                        <Modal.Header closeButton title={null} />
                        <Modal.Body>
                            <p>{this.state.currImg}</p>
                            <img src={this.state.currImg} className="center-block modalImage" alt="" />
                        </Modal.Body>
                    </Modal>
                    {/* {
                        this.state.showModal ?
                                <div className="modal-content  modWindow">
                                    <div className="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="exampleModalLabel">{this.state.showModal}</h4>
                                    </div>
                                    <div className="modal-body">
                                    <img src={this.state.currImg} className="center-block modalImage" alt=""/>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={() => this.setState({ showModal: !this.state.showModal })}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                        : null
                    } */}
                    <h3>Bootstrap 3 Lightbox using Modal</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href=/*{one}*/"#" title="Image 1"><img src={one} value={one} className="thumbnail img-responsive imgBox" alt="One" onClick={() => this.setState({ showModal: !this.state.showModal, currImg:one})}/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={two} title="Image 2"><img src={two} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={three} title="Image 3"><img src={three} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={four} title="Image 4"><img src={four} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={five} title="Image 5"><img src={five} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={six} title="Image 6"><img src={six} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={seven} title="Image 8"><img src={seven} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={eight} title="Image 9"><img src={eight} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={nine} title="Image 10"><img src={nine} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={ten} title="Image 11"><img src={ten} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={one} title="Image 12"><img src={one} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <a href={two} title="Image 13"><img src={two} className="thumbnail img-responsive imgbox" alt="" /></a>
                        </div>
                    </div>
                </div>
            </Body>
        );
    }
}

export default Galery;