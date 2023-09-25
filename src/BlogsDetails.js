import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetails = () => {
  const {id } = useParams();
  const {error, isPending, data: blog} = useFetch('http://localhost:8000/blogs/' + id);


  return <div className="blog-details">
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>} 

    {blog && (
        <article>
            <h2>
                {blog.title}
            </h2>
            <b><p>written by {blog.author}</p></b>
            <div>{blog.body}</div>
        </article>
    )}
    
    </div>;
};

export default BlogsDetails;
