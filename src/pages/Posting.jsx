import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Post from "../component/Post";

const Posting = () => {
  const [state, setState] = useState({ title: "", content: "" });
  const [postList, setPostList] = useState([]);

  const inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    setPostList(JSON.parse(localStorage.getItem("post")));
  }, []);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(postList));
  }, [postList]);

  const btnSubmit = () => {
    setPostList((prevState) => [
      ...prevState,
      { title: state.title, content: state.content },
    ]);
    setState({ title: "", content: "" });
  };

  const renderPost = () => {
    return postList.map((data) => {
      return (
        <div className="d-flex">
          <input type="checkbox" className="my-3 mx-2" />

          <Post title={data.title} content={data.content} />
        </div>
      );
    });
  };

  const user = useSelector((state) => {
    return state.user;
  });

  const navigate = useNavigate();

  if (!user.username) {
    return navigate("/login");
  }

  return (
    <div className="m-auto row container">
      <div className="col-5 px-5">
        <h2 className="my-5">Post Something</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="form-posting"
          value={state.title}
          onChange={inputHandler}
        />
        <textarea
          placeholder="Content"
          name="content"
          className="form-content"
          rows="5"
          value={state.content}
          onChange={inputHandler}
        ></textarea>
        <button className="my-4 btn-submit" onClick={btnSubmit}>
          Submit
        </button>
      </div>
      <div className="col-7 px-5">
        <h2 className="my-5">Current Posts</h2>
        {postList.length ? (
          renderPost()
        ) : (
          <div className="alert alert-danger">
            You currently do not have any posts yet. Start writing something
          </div>
        )}
      </div>
    </div>
  );
};

export default Posting;
