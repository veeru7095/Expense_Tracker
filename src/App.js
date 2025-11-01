import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/DashBoard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import GetAllTasks from './Components/GetAllTasks';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard'element={<Dashboard />} />
        <Route path='/GetAllTasks' element={<GetAllTasks/>}/>
        <Route path='/AddTask' element={<AddTask/>}/>
        <Route path='/UpdateTask/:expenseId' element={<UpdateTask />}/>
        
      </Routes>
    </div>
  );
}

export default App;
