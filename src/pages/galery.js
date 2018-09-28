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



const Show = () => {
    <div id="myModal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h3 className="modal-title">Heading</h3>
                </div>
                <div className="modal-body">

                </div>
                <div className="modal-footer">
                    <button className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}

const Galery = () => (
    <Body title={"Galery of life"}>
        <div className="row">
            <h3>Bootstrap 3 Lightbox using Modal</h3>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={one} title="Image 1"><img src={one} className="thumbnail img-responsive" alt="" /></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={two} title="Image 2"><img src={two} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={three} title="Image 3"><img src={three} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={four} title="Image 4"><img src={four} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={five} title="Image 5"><img src={five} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={six} title="Image 6"><img src={six} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={seven} title="Image 8"><img src={seven} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={eight} title="Image 9"><img src={eight} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={nine} title="Image 10"><img src={nine} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={ten} title="Image 11"><img src={ten} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={one} title="Image 12"><img src={one} className="thumbnail img-responsive" alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <a href={two} title="Image 13"><img src={two} className="thumbnail img-responsive" alt=""/></a>
                </div>
            </div>
        </div>
        
    </Body>
);

export default Galery;