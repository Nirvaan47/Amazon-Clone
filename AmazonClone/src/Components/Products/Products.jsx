import React, { useEffect, useRef } from "react";
import "../Products/Products.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import ProductsArray from "../../products.json";
import Footer from "../Footer/Footer";
import axios from "axios"

import laptopImage from "../../assets/laptopProductImage.png";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [prodFromBackend,setProdFromBackend] = useState([]);
  const [check, setCheck] = useState(false);
  const pointer = useRef(false);
  
  const handleCart = async(item) => {
    const check = product.some((pro) => {
      return pro.id === item.id;
    });
    if (!check) {
      setProduct([...product, item]);
      console.log(product);
      
      try{
         const response = await axios.post("http://localhost:5002/cart/cartPost", item);
         console.log(response);
         if(response.status == 200){
          console.log("successful");
         }
         else{
          console.log("failed");
         }

      }catch(err){
        console.log(err);
      }
    }
  };
  useEffect(()=>{
      axios.get("http://localhost:5002/cart/cartPost")
      .then((res)=>{
        setProduct(res.data.response);
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])
  useEffect(() => {
    const storedProducts = localStorage.getItem("product");
    if (storedProducts) {
      setProduct(JSON.parse(storedProducts)); // Set products from localStorage
    }
  }, []);

  useEffect(() => {
    if (pointer.current) {
      localStorage.setItem("product", JSON.stringify(product));
    } else {
      pointer.current = true;
    }
  }, [product]);
  useEffect(()=>{
    axios.get('http://localhost:5002/products/getProducts')
    .then((res)=>{
      setProdFromBackend(res.data.response)
    })
    .catch((err)=>{
      res.status(404).json({message:"Products Not Found"});
    })
  },[])
  // console.log("product is ",product);

  const Arr = [
    "Mobiles & Accessories",
    "Laptops and Accessories",
    "TV & Home Entertainment",
    "Audio",
    "Cameras",
    "Computer Peripherals",
    "Smart  Technology",
    "Musical Instruments",
    "Office & Stationary",
  ];
  return (
    <>
      <div className="products_navBar">
        <div className="Electronics">Electronics</div>
        {Arr.map((item, ind) => {
          return (
            <div key={ind} className="Products_NavBar_Items">
              {item}
            </div>
          );
        })}
      </div>
      <div className="main_content">
        <div className="SideBar">
          <div className="items sideBarItems">Category</div>
          <div className="items">computers & Accessories</div>
          <div className="items">MacBooks</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items"> Amazon Prime</div>
          <div className="items">Average Customer review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
        </div>
        <div className="products_container">
          {prodFromBackend.map((product, index) => {
            return (
              <div key={index} className="products_card">
                <div className="products_image">
                  <img className="laptop_image" src={product.imageUrl} alt="" />
                </div>
                <div className="products_description">{product.name}</div>
                <div className="products_price_and_cart">
                  <div className="products_price">{product.price} Rs</div>
                  <div>
                    <button
                      onClick={() => {
                        handleCart(product);
                      }}
                      className="addToCart"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
