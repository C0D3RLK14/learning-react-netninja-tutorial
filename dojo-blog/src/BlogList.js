// Method 1 to use props
// Getting values from props. Need to pass the 'props' argument in order to access it.
// const BlogList = (props) => {
    // Saving data from props into variables

// Method 2 to using props
// We could destructure the props values into the argument
const BlogList = ({ blogs, title }) => {
    return (  
        <div className="blog-preview">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>by { blog.author }</p>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;