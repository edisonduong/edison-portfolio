import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import './styles/Custom.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
