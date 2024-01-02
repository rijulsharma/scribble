import './App.css';
import Home from './Pages/home';
import CreateRoom from './Pages/CreateRoom';
import Chat from './Components/Chat';
import Room from './Pages/Room';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home isAdmin={true} />}/>
    <Route path="/createRoom" element={<CreateRoom />}/>
    <Route path="/chat" element={<Chat/>}></Route>
    
    
    <Route path="room/*" element={<Home isAdmin={false}/>} />
    
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
