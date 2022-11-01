import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
