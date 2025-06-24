import './App.css';

// NOTE: We can code Js before the return statement

function App() {
  // Adding a dynamic value/variable
  // Creating a variable
  const title = 'Welcome to the new blog';
  const likes = 50;

  // NOTE: We can't output Booleans and Objects in the below return() function

  const blog = { title : 'A new blog', likes : 50, author : 'LK' };
  // I guess we can't output an entire object in JSX but we could out property values of objects.

  // Creating the variable link
  const link = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        {/* Adding a dynamic title using the above variable */}
        <h1>{ blog.title }</h1>
        <p>by { blog.author }</p>
        <p>has { blog.likes } likes</p>
        {/* Inserting Js directly in JSX. // NOTE: These should return a value (other than an object or boolean) to work. */}
        <h2>{ "Other content "}</h2>
        <p>{ [1,2,3,4,5] }</p>
        {/* We could even add dynamic property values, for like links */}
        <a href={ link }>Google web site</a>
      </div>
    </div>
  );
}

export default App;
