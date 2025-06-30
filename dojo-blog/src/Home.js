import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    // State for error and display context according to state 
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');

        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                // Logging the response object
                console.log(res);

                // NOTE: The response object has a property named 'ok' we could use this to find out if we are getting data back from the JSON Server and run a block of code accordingly. Therefore we'll throw an error if data not received as follows.
                if(!res.ok){
                    throw Error('Could not fetch data for that resource.');
                }

                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                // Logging the error message, normally the catch block would be run in case of a network error (server not responding)
                console.log(err.message);
                // Saving error message to 'error' variable 
                setError(err.message);
                // To stop displaying 'Loading' if there is an error
                setIsPending(false);

                // Testing if the catch block is run
                console.log('Catch block ran.');
            });
        }, 1000);
    }, []);

    return (  
        <div className="home">
            {/* Displaying context if there is an error */}
            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/* {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"/> } */}
        </div>
    );
}
 
export default Home;