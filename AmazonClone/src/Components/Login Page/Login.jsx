import React, { useState } from "react";
import AmazonSignUpLogo from "../../assets/Amazon-Logo.jpeg";
import "../../Components/Register/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({email:"",password:""});
  
  const handleSignup = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:5002/login/loginUser", details);
    console.log(res.data,"response");

    // if(res.data.response.email){
    //   navigate("/");
    // }
    // else{
    //   alert("Enter valid credentials");
    // }
  };

  console.log(details);

  const handleInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setDetails({...details,[name]:value})
  }
  return (
    <div className="amazon_sign_up_main_container">
      <div className="amazon_sign_up_logo">
        <img src={AmazonSignUpLogo} alt="" />
      </div>
      <div className="amazon-sign-in-details">
        <div>
          <div className="sign_up_text">Login</div>
        </div>
        <div className="sign-up-info">
          <form action="" className="form_container">
            <div className="email_text"> Enter email</div>
            <input type="email" name = "email" className="input_bar" required onChange = {handleInput}/>
            <div className="email_text">Enter the Password</div>
            <input type="password" name = "password" className="input_bar" required onChange = {handleInput} />
            <div className="continue_container">
              <button
                className="continue_button"
                onClick={ 
                  handleSignup
                }
              >
                Continue
              </button>
            </div>
          </form>
          <div className="terms_and_condidions_text">
            <div>
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use </a> and{" "}
              <a href="#"> Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
