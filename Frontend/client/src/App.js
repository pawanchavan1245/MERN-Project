import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import "./style.css";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div className="wrapper">
      {page === "signup" && <Signup goToSignin={() => setPage("signin")} />}
      {page === "signin" && <Signin goToDashboard={() => setPage("dashboard")} />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;