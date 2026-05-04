import {
  Heart,
  Send,
  Bookmark,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";

function PostCard({ post }) {
  return (
    <article className="post">
      <header className="post-header">
        <div className="post-user">
          <img src={post.avatar} alt={post.user} className="avatar" />
          <div>
            <strong>{post.user}</strong>
            <span>{post.time}</span>
          </div>
        </div>
        <MoreHorizontal size={24} />
      </header>

      <img src={post.image} alt={post.caption} className="post-image" />

      <div className="post-actions">
        <div className="left-actions">
          <Heart size={27} />
          <MessageCircle size={27} />
          <Send size={27} />
        </div>
        <Bookmark size={27} />
      </div>

      <div className="post-info">
        <strong>{post.likes} curtidas</strong>
        <p>
          <strong>{post.user}</strong> {post.caption}
        </p>
        <span>Ver todos os {post.comments} comentários</span>
      </div>
    </article>
  );
}

export default PostCard;