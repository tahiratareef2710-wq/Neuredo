import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";
import { blogPosts } from "../data/blogPosts";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="article-page">
        <ArticleTopBar />
        <div className="container article-notfound">
          <h1>Post not found</h1>
          <p>This article may have moved or been renamed.</p>
          <Link to="/" className="article-back-link">
            <ArrowLeft size={16} /> Back to Neuredo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      <ArticleTopBar />

      <article className="container article">
        <Link to="/#blog" className="article-back-link">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="article__meta">
          <span className="eyebrow article__tag">{post.tag}</span>
          <span className="article__date">
            {post.date} · {post.readTime} read
          </span>
        </div>

        <h1 className="article__title">{post.title}</h1>
        <p className="article__excerpt">{post.excerpt}</p>

        <div className="article__body">
          {post.content.map((block, i) => (
            <ArticleBlock key={i} block={block} />
          ))}
        </div>

        <div className="article__footer">
          <Link to="/#blog" className="article-back-link">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}

function ArticleBlock({ block }) {
  switch (block.type) {
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

function ArticleTopBar() {
  return (
    <div className="article-topbar">
      <div className="container article-topbar__inner">
        <Link to="/" className="article-topbar__brand">
          <img src={logo} alt="Neuredo" />
        </Link>
      </div>
    </div>
  );
}