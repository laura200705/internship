

import './App.css'
import { useState, useEffect } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  // Fetch posts only when showPosts becomes true
  useEffect(() => {
    if (!showPosts || posts.length > 0) return; // avoid refetching
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [showPosts, posts.length]);

  // Example posts to show initially
  const examplePosts = [
    { id: 1, title: "Post Example 1" },
    { id: 2, title: "Post Example 2" },
    { id: 3, title: "Post Example 3" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Posts Example</h1>

      {/* Toggle button */}
      <button
        onClick={() => setShowPosts(!showPosts)}
        style={{ marginBottom: "20px", padding: "10px 20px" }}
      >
        {showPosts ? "Hide Full List" : "Show Full List of Posts"}
      </button>

      {/* Always show 3 example posts */}
      {!showPosts && (
        <>
          <h2>Example Posts:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {examplePosts.map((post) => (
              <li key={post.id} style={{ margin: "5px 0" }}>
                {post.title}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Show fetched posts */}
      {showPosts && (
        <>
          <h2>This is a list of posts:</h2>
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {posts.map((post) => (
                <li key={post.id} style={{ margin: "5px 0" }}>
                  {post.title}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}



