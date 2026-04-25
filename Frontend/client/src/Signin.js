import { useState } from "react";
import axios from "axios";

function Signin({ goToDashboard }) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/signin", data);
    alert(res.data.msg);

    if (res.data.msg === "Login successful") {
      goToDashboard();
    }
  };

  return (
  <div className="container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <button>Login</button>
    </form>

    <span className="link" onClick={() => window.location.reload()}>
      New user? Create account
    </span>
  </div>
);
}

export default Signin;