"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (name.trim() === "" || text.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
    };

    setComments([...comments, newComment]);
    setName("");
    setText("");
  };

  return (
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>

      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded shadow mb-2">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
