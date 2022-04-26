import logo from './logo.svg';
// import './App.css';
import ButtonAppBar from "./components/navbar"
import MainCode from './components/MainCode';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <ButtonAppBar/>
      </div>
      <MainCode/>
    </div>
  );
}

export default App;
