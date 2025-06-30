import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    // Set the initial state null inorder to store only the data fetched in the useEffect hook
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');

        // Fetching the data from the 'db.json' file through the JSON Server
        fetch('http://localhost:8000/blogs')
        .then(res => {
            // saving the data into a Js object from the 'res' response object
            return res.json();
        })
        .then(data => {
            // NOTE: 'data' is the js object saved from the 'res' object above
            // console.log(data);
            
            // Storing the data fetch to the blogs array
            setBlogs(data);
            // console.log(blogs); //Returns null coz the fetching process is async and at the moment of logging the data have not been fetched yet
        });
    }, []);

    return (  
        <div className="home">
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}

            {/* NOTE: As mentioned earlier the blogs is not getting updated instantly and won't display data in the browser as expected, therefore we'll be using the below method to overcome this. */}
            
            {/* The following is known as a conditional templating in React. We will check if the 'blogs' array is empty ,if so it evaluates to false and won't run the code after it. And if the array has data it will continue with the execution of the code after (RHS of '&&'). */}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"/> }
        </div>
    );
}
 
export default Home;