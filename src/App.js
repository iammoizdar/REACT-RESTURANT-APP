import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Ourfoodquality from "./components/Ourfoodquality";
import Foodgallery from "./components/Foodgallery";
import OurFoodGallery from "./components/OurFoodGallery";
import EnjoyOurFood from "./components/EnjoyOurFood";
// bannerimage
import foodbanner from "./images/food-quality-banner.png";
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </header>
        <About />
      <main styles={{ backgroundImage: `url(${foodbanner})` }}>
          <Ourfoodquality />
      </main>
      <OurFoodGallery/>
      <EnjoyOurFood/>
    </div>
  );
}

export default App;
