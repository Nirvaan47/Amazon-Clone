// import React from "react";
import Footer from "../Footer/Footer";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeDetails from "./HomeDetails/HomeDetails";
import "../HomeScreen/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div id="HomeScreenWrapper">
      <HomeBanner />
      <HomeDetails />
      <Footer />
    </div>
  );
};

export default HomeScreen;
