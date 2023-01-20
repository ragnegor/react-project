import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/Footer";
import data from "./data/data";



function App() {
  return (
    <div>
      <Header data={data}/>
      <Main data={data}/>
      <Footer data={data}/>
    </div>
  );
}


export default App;
