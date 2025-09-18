import React from "react";

const Comment = ({ username, isAdmin }) => {
  return (
    <div>
      <h3>Comments</h3>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
};

export default Comment;
