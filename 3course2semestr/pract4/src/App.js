import './App.css';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Grid from "./components/Grid";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header></Header>
        <h1>Книга дня</h1>
        <Carousel></Carousel>
        <h1>Актуальные книги</h1>
        <Grid></Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
