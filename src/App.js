import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import AllTickets from './Components/AllTickets/AllTickets';
import MyTickets from './Components/MyTickets/MyTickets';
import ScheduledCalls from './Components/ScheduledCalls/ScheduledCalls'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path = '/' element={<AllTickets />} />
          <Route path = '/all-tickets' element={<AllTickets />} />
          <Route path = '/my-tickets' element={<MyTickets />} />
          <Route path = '/scheduled-calls' element={<ScheduledCalls />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}


export default App;
