import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { isPending, data, error } = useFetch("http://localhost:8000/blogs");

  //    const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlogs(newBlogs);
  //    }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="create"><h2>All Blogs!</h2></div>
      {data && <BlogList blog={data} />}
    </div>
  );
};

export default Home;
