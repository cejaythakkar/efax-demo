import React from 'react';
import './pano.scss';
// import classes from './pano.css';

function Pano({imageSrc,labelText}) {
    return(
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="funnel-pano">
              <h1>
                <img
                  src={imageSrc}
                  alt="View, send and receive your faxes quickly and securely, all on the cloud"
                />
              {labelText}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Pano;