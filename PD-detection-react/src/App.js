import logo from './logo.svg';
import './App.css';
import UploadImage from './components/UploadImage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import {
  BrowserRouter as Router,
  Route,
  Link,Routes
} from "react-router-dom";

function App() {
  return (

    <Router>
          <div>
        <Routes>
          <Route path="/" element = {<HomePage />}> </Route>
          <Route path="/about" element = {<AboutPage />}> </Route>
          <Route path="/uploadImage" element = {<UploadImage />}> </Route>
        </Routes>
      </div>
    </Router>

    // <UploadImage />
    // <HomePage />
    // <AboutPage />
  );
}

export default App;
