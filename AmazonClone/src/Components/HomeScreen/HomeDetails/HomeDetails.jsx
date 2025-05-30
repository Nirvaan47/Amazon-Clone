// import React from "react";
import iPhone from "../../../assets/iphone-card-40-iphone16prohero-202409_FMT_WHH.jpg";
import "../../HomeScreen/HomeDetails/HomeDetails.css";
const HomeDetails = () => {
  const array = [
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
    { name: "IPhone", img: iPhone },
  ];
  return (
    <div className="amazon_home_details_wrapper">
      <div className="amazon_home_details_1">
        <div className="item_wrapper">
          <div id="TodaysDeals">Todays Deals</div>
          <div className="amazon_home_details_1_item">
            {array.map((item, ind) => {
              return (
                <div className="image_wrapper" key={ind}>
                  <div className="item_1_image">
                    <img
                      id="Deals_img_1"
                      src={item.img}
                      alt=""
                      className="amazon_iphone"
                    />
                  </div>
                  <div className="item_1_text_content">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="amazon_home_details_2">
        <div className="item_wrapper">
          <div id="TodaysDeals">Todays Deals</div>
          <div className="amazon_home_details_1_item">
            {array.map((item, ind) => {
              return (
                <div className="image_wrapper" key={ind}>
                  <div className="item_1_image">
                    <img
                      id="Deals_img_1"
                      src={item.img}
                      alt=""
                      className="amazon_iphone"
                    />
                  </div>
                  <div className="item_1_text_content">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
