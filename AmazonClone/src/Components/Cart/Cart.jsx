// import React from "react";
import { useEffect, useRef, useState } from "react";
import "../Cart/Cart.css";
import Footer from "../Footer/Footer";
import axios from "axios";


const Cart = () => {
  const [product, setProduct] = useState([]);
  const [cart,setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const pointer = useRef(false);
  const handlePurchase = () => {
    alert("Successfully purchased");
  };
  useEffect(() => {
    const item = localStorage.getItem("product");
    console.log("item is ", item);
    if (item) {
      setProduct(JSON.parse(item));
    }
  }, []);
  useEffect(()=>{
    axios.get("http://localhost:5002/cart/cartPost")
    .then((res)=>{
      setCart(res.data.response);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(() => {
    if (pointer.current) {
      localStorage.setItem("product", JSON.stringify(product));
    } else {
      pointer.current = true;
    }
  }, [product]);

  useEffect(() => {
    if (pointer.current) {
      setSum(product.reduce((a, { price }) => a + price, 0));
    } else {
      pointer.current = true;
    }
  }, [product]);

  const handleRemove = (id) => {
    console.log(product);
    setProduct(
      product.filter((item) => {
        return item.id != id;
      })
      
    );
    setCart(
      cart.filter((item) => {
        return item.id != id;
      })
      
    );
    console.log("id is ", id)
    axios.delete("http://localhost:5002/cart/removeCart",{headers:{"Content-Type":"application/json"},data:{id}})
    .then((res)=>{
      console.log("response is ",res)
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  console.log(sum);
  return (
    <>
      <div className="cart_main">
        <div className="cart_products_list">
          <h2>Shopping Cart</h2>
          <div className="cart_deselect">Deselect Items</div>
          <div className="price_text">
            <div>Price</div>
          </div>
          <div className="products_list_wrapper">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart_product_card">
                  <div className="cart_image">
                    <img className="image" src={item.imageUrl} alt="" />
                  </div>
                  <div className="cart_text">
                    <div className="cart_product_description">{item.name}</div>
                    <div className="stock_status">In stock</div>
                    <div className="free_shipping">
                      Eligible for free shipping
                    </div>
                    <div>
                      <img
                        className="fulfilledImg"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                        className="cart_button_class"
                      >
                        Remove From Basket
                      </button>
                    </div>
                  </div>
                  <div className="cart_price">Rs.{item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart_purchase_card">
          <div className="total_items_and_cost">
            Subtotal ({product.length} Items): <b> Rs. {sum}</b>
          </div>
          <div className="gift">
            <input type="checkbox" />
            <label>This Order Contains a gift</label>
          </div>
          <button
            onClick={handlePurchase}
            className="cart_button_class proceed_to_buy"
          >
            Proceed to Buy
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
