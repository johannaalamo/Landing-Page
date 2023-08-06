
import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

//create your first component

const Home = () => {
	return (
	
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row mt-4">
          <div className="col-md-3">

            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
          <Card />
          </div>
          <div className="col-md-3">
            <Card />
            
            
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
