import { useState } from "react";
import axios from "axios";

function Signup({ goToSignin }) {
  const [data, setData] = useState({
    firstName: "", lastName: "", email: "", password: ""
  });

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/signup", data);
    alert(res.data.msg);
    goToSignin();
  };

  return (
  <div className="container">
    <h2>Create Account</h2>
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange}/>
      <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <button>Sign Up</button>
    </form>

    <span className="link" onClick={goToSignin}>
      Already have an account? Login
    </span>
  </div>
);
}

export default Signup;