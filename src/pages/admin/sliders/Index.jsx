//import react
import React from "react";

//import layout admin
import LayoutAdmin from "../../../layouts/Admin";

function SlidersIndex() {
  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-images"></i> SLIDERS
                </span>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default SlidersIndex;
