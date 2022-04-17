import Post from "../component/Post";
import { useState, useEffect } from "react";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    setPostList(JSON.parse(localStorage.getItem("post")));
  }, []);

  const renderPost = () => {
    return postList.map((data) => {
      return <Post title={data.title} content={data.content} />;
    });
  };

  return (
    <div className="col-7 px-5 m-auto">
      <h2 className="my-5">Current Posts</h2>
      {postList.length ? (
        renderPost()
      ) : (
        <div className="alert alert-danger">
          You currently do not have any posts yet. Start writing something
        </div>
      )}
    </div>
  );
};

export default Home;
