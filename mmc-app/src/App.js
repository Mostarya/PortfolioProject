import Header from './components/Header';
import Footer from './components/Footer';
import MenuList from './features/Menu/MenuList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <MenuList/>
      <Footer/>
    </div>
  );
}

export default App;
