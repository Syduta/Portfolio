import './App.css';
import Header from './components/Header';
import Apropos from "./components/Apropos";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  return (
      <>
        <Header />
        <main>
        <Apropos />
        <Portfolio />
        </main>
        <Contact />
      </>
  );
}

export default App;
