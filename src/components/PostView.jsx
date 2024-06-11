import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/post/postSlice";

export default function PostView() {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Post View</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
