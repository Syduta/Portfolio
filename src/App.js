import './App.css';
import Header from './components/Header';
import Apropos from "./components/Apropos";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Divider from "./components/Divider"

function App() {
  return (
    <>
        <Header />
        <Divider />
        <main>
        <Apropos />
        <Divider />
        <Portfolio />
        <Divider />
        </main>
        <Contact />
    </>
  );
}

export default App;
