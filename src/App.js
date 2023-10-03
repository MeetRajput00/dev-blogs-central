import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Userfeed from "./pages/Userfeed";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/userfeed" element={<Userfeed/>} />
      <Route path="/login" element={<Login/>} />
      <Route to="/" element={<Navigate replace to="/"/>} />
    </Routes>
  </Router>
  );
}

export default App;
