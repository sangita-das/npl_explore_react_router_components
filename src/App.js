
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Header from './Header/Header';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Watches from './Watches/Watches';
import Bottles from './Components/Bottles/Bottles';
// import Friends from './Friends';



function App() {

  function handleClick() {
  alert('click me')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive =(num) => {
    alert(num + 5)
  }
  return (
    <div className="App">
    <h2>React core concepts</h2>
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click2</button>
    <button onClick={() => {alert('third click')}}>Click3</button>
    <button onClick={() => addToFive(3)}>Click4</button>
    <br />
    <br />
    <Watches></Watches>
    <Bottles></Bottles>
    {/* <Team></Team> */}
    <br />
    {/* <Users></Users> */}

    {/* <Counter></Counter> */}
    <br />
    <br />
    {/* <Friends></Friends> */}
    <br />


    <Header ></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
    </Routes>
    </div>
  );
}

export default App;
