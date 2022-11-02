import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:topic" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
