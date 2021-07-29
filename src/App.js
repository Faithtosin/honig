import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages"

const App = () => {
  return (
    <Router>
      <Home title={"Honig"}/>
    </Router>
  );
}

export default App;
