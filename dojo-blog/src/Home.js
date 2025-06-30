import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');

        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        });
    }, []);

    return (  
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"/> }
        </div>
    );
}
 
export default Home;