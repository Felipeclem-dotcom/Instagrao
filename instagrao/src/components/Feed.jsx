import PostCard from "./PostCard";
import { posts } from "../data/posts";

function Feed() {
  return (
    <section className="feed">
      {posts.map((post) => (
        <PostCard key={`${post.user}-${post.time}`} post={post} />
      ))}
    </section>
  );
}

export default Feed;
