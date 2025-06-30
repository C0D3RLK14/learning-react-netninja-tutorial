import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    // Creating a boolean data store to use as a condition to run code if the data are still being fetched
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');

        // fetch('http://localhost:8000/blogs')
        // .then(res => {
        //     return res.json();
        // })
        // .then(data => {
        //     setBlogs(data);
        //     // setting the 'isPending' status as data is fetched
        //     setIsPending(false);
        // });

        // Emulating real-world data fetching scenario(which takes time)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                // setting the 'isPending' status as data is fetched
                setIsPending(false);
            });
        }, 1000);
    }, []);

    return (  
        <div className="home">
            {/* Using a conditional statement to displaying 'loading' if the data are still being fetched */}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"/> }
        </div>
    );
}
 
export default Home;