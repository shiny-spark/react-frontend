import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterComponent from './conponents/FooterComponent';
import HeaderComponent from './conponents/HeaderComponent';
import ListEmployeeComponent from './conponents/ListEmployeeComponent';
import CreateEmployeeComponent from './conponents/CreateEmployeeComponent';
import UpdateEmployeeComponent from './conponents/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' exact Component={ListEmployeeComponent}></Route>
            <Route path='/employees' Component={ListEmployeeComponent}></Route>
            <Route path='/add-employee' Component={CreateEmployeeComponent}></Route>
            <Route path='/update-employee/:id' Component={UpdateEmployeeComponent}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
