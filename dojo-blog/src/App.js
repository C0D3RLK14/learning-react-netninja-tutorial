import './App.css';
// importing the 'Navbar' component
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* Adding the Navbar component into the JSX template */}
      {/* Method 1 : Self closing tags */}
      <Navbar /> 
      {/* Method 2 : Open and close tags
      <Navbar> </Navbar>  */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
