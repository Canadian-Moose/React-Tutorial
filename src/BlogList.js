const BlogList = ({ blogs, title, handlePin}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <input type="radio" value="Pinned" checked={blog.pin}/> Pinned
                    <br/>
                    <button onClick={handlePin(blog.id)}>Change Pin</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;