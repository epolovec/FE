import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import AllTickets from './Components/AllTickets/AllTickets';
import MyTickets from './Components/MyTickets/MyTickets';
import ScheduledCalls from './Components/ScheduledCalls/ScheduledCalls';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestForm from './Components/TestForm/TestForm';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path = '/' element={<AllTickets />} />
          <Route path = '/all-tickets' element={<AllTickets />} />
          <Route path = '/my-tickets' element={<MyTickets />} />
          <Route path = '/scheduled-calls' element={<ScheduledCalls />} />
          <Route path = '/test-form' element={<TestForm />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
