import Navbar from './Navbar';
import Home from './Home';

// Importing components from the react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // Surrounding the 'div' element with the Router
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          {/* Routing the path '/' to the home page */}
          {/* <Home /> */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
