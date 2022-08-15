import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";
import axios from "axios";
// import { Posts } from "../../dummyData";

function TimeLine() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/62e86a8f9741a0a266f65531"
      );
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
