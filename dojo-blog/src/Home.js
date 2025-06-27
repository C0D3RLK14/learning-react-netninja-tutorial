import { useState } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // Defining the 'handleDelete()' function
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
        console.log("Blog deleted successfully!")
    };

    return (  
        <div className="home">
            {/* Passing the 'handleDelete()' as a function */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;