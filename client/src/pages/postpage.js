import React, { useState } from 'react';
import './postpage.css';
const FarmerPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    content: '',
    author: '',
  });

  const handlePostSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: '', content: '', author: '' });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({ content: '', author: '' });
  };

  return (
    <div>
      <h1>Farmer Post Page</h1>
      <form onSubmit={handlePostSubmit}>
        <h2>Write a new post:</h2>
        <label>
          Title:
          <input
            type="text"
            value={newPost.title}
            onChange={(event) =>
              setNewPost({ ...newPost, title: event.target.value })
            }
          />
        </label>
        <label>
          Content:
          <textarea
            value={newPost.content}
            onChange={(event) =>
              setNewPost({ ...newPost, content: event.target.value })
            }
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={newPost.author}
            onChange={(event) =>
              setNewPost({ ...newPost, author: event.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Existing posts:</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>By: {post.author}</p>
          <form onSubmit={handleCommentSubmit}>
            <h4>Write a new comment:</h4>
            <label>
              Content:
              <textarea
                value={newComment.content}
                onChange={(event) =>
                  setNewComment({ ...newComment, content: event.target.value })
                }
              />
            </label>
            <label>
              Author:
              <input
                type="text"
                value={newComment.author}
                onChange={(event) =>
                  setNewComment({
                    ...newComment,
                    author: event.target.value,
                  })
                }
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <h5>Existing comments:</h5>
          {comments.map((comment, index) => (
            <div key={index}>
              <p>{comment.content}</p>
              <p>By: {comment.author}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FarmerPostPage;
