// fetching data when the componenet renders only once and with using axios
import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [posts, setPosts] = useState([]);
  const [postClick, setPostClick] = useState([]);
  const handleClick = () => {
    setPosts(postClick);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPostClick(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <button onClick={handleClick}>Fetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetching;
