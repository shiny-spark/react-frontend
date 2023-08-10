import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterComponent from './conponents/FooterComponent';
import HeaderComponent from './conponents/HeaderComponent';
import ListEmployeeComponent from './conponents/ListEmployeeComponent';
import CreateEmployeeComponent from './conponents/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/' exact Component={ListEmployeeComponent}></Route>
              <Route path='/employees' Component={ListEmployeeComponent}></Route>
              <Route path='/add-employee' Component={CreateEmployeeComponent}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
