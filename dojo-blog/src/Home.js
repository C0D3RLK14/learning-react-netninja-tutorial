import { useState } from 'react';
// import Blog from './BlogList'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return (  
        <div className="home">
            {/* { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>by { blog.author }</p>
                </div>
            ))} // Moved to Blogs.js */ }

            {/* Nesting the BlogList component */}
            {/* <Blog blogs={blogs}/> //So apparently we don't need match the exported variable name 'BlogList' when importing the same component with  another name like 'Blog' */}
            
            {/* Passing values as props "blogs={blogs} title="All Blogs"" */}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );
}
 
export default Home;