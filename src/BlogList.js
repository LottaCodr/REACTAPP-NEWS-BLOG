import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  return (
    <div className="blog-list">
      {blog.map((theBlogs) => (
        <div className="blog-preview" key={theBlogs.id}>
          <Link to={`/blog/${theBlogs.id}`}>
            <h2>{theBlogs.title}</h2>
            <p>written by: {theBlogs.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
