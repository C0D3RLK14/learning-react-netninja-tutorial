import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');

        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });
        }, 1000);
    }, []);

    return (  
        <div className="home">
            { isPending && <div>Loading...</div> }
            
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"/> }
        </div>
    );
}
 
export default Home;