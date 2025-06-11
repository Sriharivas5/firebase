// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             alert("Login successful!");
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <h2>Login</h2>
//             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//         </form>
//     );
// }
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Set session-only persistence
      await setPersistence(auth, browserSessionPersistence);

      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/upload")

    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
