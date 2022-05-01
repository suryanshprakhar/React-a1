import './App.css';
import MainBody from './components/main';
import FuncComp from './components/functionComp';
import CalssComp from './components/classComp';
import './components/style.css'
function App() {
  return (
    <div className="App">
      <MainBody/>
      <FuncComp />
      <CalssComp />
    </div>
  );
}

export default App;
