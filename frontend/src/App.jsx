import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';
import HomePage from './pages/HomePage';



function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<HomePage/>}></Route>
    <Route exact path='/chatRoom' element={<ChatRoom/>}></Route>


    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
