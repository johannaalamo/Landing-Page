
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

            <Card  
              title="Tarjeta 1"
              description="Esta es la descripción de la tarjeta 1."
              imageSrc="https://picsum.photos/id/232/2000"
              link="Enlace de la tarjeta 1"
              buttonText="Ir a la tarjeta 1"
            />
          </div>
          <div className="col-md-3">
            <Card title="Tarjeta 2"
              description="Esta es la descripción de la tarjeta 2."
              imageSrc="https://picsum.photos/id/233/2000"
              link="Enlace de la tarjeta 2"
              buttonText="Ir a la tarjeta 2"/>
          </div>
          <div className="col-md-3">
          <Card 
              title="Tarjeta 3"
              description="Esta es la descripción de la tarjeta 3."
              imageSrc="https://picsum.photos/id/236/1000"
              link="Enlace de la tarjeta 3"
              buttonText="Ir a la tarjeta 3"/>
          </div>
          <div className="col-md-3">
            <Card 
            title="Tarjeta 4"
            description="Esta es la descripción de la tarjeta 4."
            imageSrc="https://picsum.photos/id/238/2000"
            link="Enlace de la tarjeta 4"
            buttonText="Ir a la tarjeta 4"/>
            
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
