
import { useState } from "react";
import Signup from "./Auth/SignIn/SignIn";
import Login from "./Auth/Login/Login";
import Reset from "./Auth/Reset/Reset"
function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? "Sign Up" : "Login"}
      </button>
      {isLogin ? <Login /> : <Signup />}

      <Reset/>
    </div>
  );
}

export default App;
