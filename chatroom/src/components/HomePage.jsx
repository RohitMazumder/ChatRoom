import React from "react";
import RoomCard from "./RoomCard.jsx";
import Button from "react-bootstrap/Button";
import data from "../resources/welcomeScreen/config.json";
import { Grid, Row, Col } from 'react-bootstrap';
import '../assets/css/style.css'

function HomePage() {
  return (
    <div>
      <h1 className="display-1 d-flex align-items-start m-2 ml-5 p-5">
        Hola visitor!
      </h1>
      <div className="row">
        <div className="col-md-12">
          <form>
            <h3>Pick a username and log in!</h3>
            <div className="form-row d-flex justify-content-center">
              <div className="col-md-3 col-sm-6 col-8 my-1">
                <label className="sr-only" for="inlineFormInputGroupUsername">
                  Username
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <input
                className="form-control col-md-3 col-sm-4 col-6 my-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <i className="fa fa-search mx-2 my-4" aria-hidden="true"></i>
            </div>
          </form>
        </div>
      </div>
      <Row className="justify-content-md-center ml-5 pl-5 mt-5">
      {
      data.map((cardDetails) => {
        return ( <Col sm={6} md={4}>
          <RoomCard
            key={cardDetails.key}
            title={cardDetails.cardTitle}
            text={cardDetails.subText}
          />
        </Col>
        );
      })
      }
      </Row>
      
      
      
    </div>
  );
}

export default HomePage;
