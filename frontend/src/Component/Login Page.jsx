import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [uname, setuname] = useState("");
  const [upass, setupass] = useState("");
  const handlechange = (eve) => {
    setuname(eve.target.value);
  };
  const handlechange1 = (eve) => {
    setupass(eve.target.value);
  };
  const check = () => {
    // Get Method
    // var logindetails = axios.get(`http://localhost:5000/login?username=${uname}&password=${upass}`)
    
    // Post Method
    var logindetails = axios.post("http://localhost:5000/login", {
      username: uname,
      password: upass,
    });
    logindetails.then(function (data) {
      // console.log(data)
      if (data.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <input
            placeholder="Enter Your Name"
            name="uname"
            onChange={handlechange}
          ></input>
          <input
            placeholder="Enter Your Password"
            name="upass"
            onChange={handlechange1}
          ></input>
          <button onClick={check}>Login</button>
        </div>
      </div>
    </>
  );
}
export default Login;
