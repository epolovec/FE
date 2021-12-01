import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import AllTickets from './Components/AllTickets/AllTickets';
import MyTickets from './Components/MyTickets/MyTickets';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AllTickets />
    </div>
  );
}


export default App;
