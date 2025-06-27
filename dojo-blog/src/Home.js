// Importing 'useEffect' hook
import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
        console.log("Blog deleted successfully!")
    };

    // Using 'useEffect' hook
    useEffect(() => {
        console.log('useEffect invoked');
    });

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;