import Header from './component/header/Header.component';
import './App.css';
import Home from './component/Home/Home.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Home/>

      </header>
    </div>
  );
}

export default App;
