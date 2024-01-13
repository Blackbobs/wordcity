import Header from "./Componenets/Header";
import About from "./Componenets/About";
import Events from "./Componenets/Events";
import Footer from "./Componenets/Footer";

function App() {
  return (
    <div className="App font-serif scroll-smooth">
      <Header />
      <About/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
