const Post = ({ title, content }) => {
  return (
    <div className="col-11 h6 m-2">
      <h6>
        <strong>{title}</strong>
      </h6>
      <p>{content}</p>
    </div>
  );
};

export default Post;
