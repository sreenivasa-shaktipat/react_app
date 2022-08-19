import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './contact'
import Books from './books'
import Donation from './donation'
import Events from './events'
import Videos from './videos'
import MainPage from './MainPage'
import { Link } from "react-router-dom";
import QNA from './qna'

function App() {
  return (
    <div>
    <Router>

            <Routes>
              <Route exact path="/" element={<MainPage/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/qna" element={<QNA/>}/>
              <Route path="/books" element={<Books/>}/>
              <Route path="/donation" element={<Donation/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/videos" element={<Videos/>}/>

            </Routes>

        </Router>
   
    </div>
  );
}

export default App;
