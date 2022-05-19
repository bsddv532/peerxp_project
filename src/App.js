
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import MainDashboard from './Components/Dashboard/MainDashboard';
import PostPage from './Components/Post/PostPage';
import LinkPage from './Components/Link/LinkPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<MainDashboard />} />
          <Route path='/postpage' element={<PostPage />} />
          <Route path='/linkpage' element={<LinkPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
