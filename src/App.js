import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import MainPage from "./components/Dashboard/Dashboard";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="app">
      <div className="adminLte">
        <Menu />
        <Header />
        <MainPage />
      </div>
      <div className="detailsWrapper">
        <Details />
      </div>
    </div>
  );
}

export default App;
