//import react
import React, { useState, useEffect } from "react";

//import layout
import LayoutAdmin from "../../../layouts/Admin";

//import BASE URL API
import Api from "../../../api";

//import js cookie
import Cookies from "js-cookie";

function PlacesIndex() {
  //title page
  document.title = "Places - Administrator Travel GIS";

  //state places
  const [places, setPlaces] = useState([]);

  //state currentPage
  const [currentPage, setCurrentPage] = useState(1);

  //state perPage
  const [perPage, setPerPage] = useState(0);

  //state total
  const [total, setTotal] = useState(0);

  //token
  const token = Cookies.get("token");

  //function "fetchData"
  const fetchData = async () => {
    //fetching data from Rest API
    await Api.get("/api/admin/places", {
      headers: {
        //header Bearer + Token
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      //set data response to state "places"
      setPlaces(response.data.data.data);

      //set currentPage
      setCurrentPage(response.data.data.current_page);

      //set perPage
      setPerPage(response.data.data.per_page);

      //total
      setTotal(response.data.data.total);
    });
  };

  //hook
  useEffect(() => {
    //call function "fetchData"
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-map-marked-alt"></i> PLACES
                </span>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hovered">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {places.map((place, index) => (
                        <tr key={index}>
                          <td className="text-center">
                            {++index + (currentPage - 1) * perPage}
                          </td>
                          <td>{place.title}</td>
                          <td>{place.category.name}</td>
                          <td className="text-center"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default PlacesIndex;
