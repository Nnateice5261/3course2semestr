
import './App.css';
import Info from "./components/info";
import Calculator from "./components/calculator/calculator";
import Spravochniki from "./components/spravochniki";

function App() {
  return (
      <div className="App">
          <Info/>
          <div className="obertkaForCalculator">
              <Calculator/>
              <div className="containerImage2">
                  <img className="image" alt="prikl" src="prikl2.png"></img>
              </div>
          </div>
          <Spravochniki/>
      </div>
  );
}

export default App;
