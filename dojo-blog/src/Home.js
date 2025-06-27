import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
        console.log("Blog deleted successfully!")
    };

    useEffect(() => {
        console.log('useEffect with no dependency array invoked');
    });

    // useEffect dependency arrays are array passed as the 2nd argument in the useEffect hook. Which enables us to invoke the useEffect hook when a certain state changes set in the dependency array.
    // useEffect wiht an empty dependency array runs only in the initial render
    useEffect(() => {
        console.log('useEffect with an empty dependency array invoked');
    }, []);

    // Now if we have a dependency array with 'name' in it. The useEffect runs for changes in the state of name
    useEffect(() => {
        console.log(`useEffect with 'name' in the dependency array invoked`);
    }, [name]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;