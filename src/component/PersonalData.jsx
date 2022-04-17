const PersonalData = ({ header, content }) => {
  const renderContent = () => {
    return content.map((data) => {
      return (
        <>
          <h6>{data.title}</h6>
          {typeof data.text == "object" ? (
            <ul>
              {data.text.map((data) => {
                return <li>{data}</li>;
              })}
            </ul>
          ) : (
            <p>{data.text}</p>
          )}
        </>
      );
    });
  };

  return (
    <div className="row my-1 mx-1">
      <div className="col-4">
        <h5 className="txt-color">{header}</h5>
      </div>
      <div className="col-8">
        {typeof content == "object" ? renderContent() : <p>{content}</p>}
      </div>
    </div>
  );
};

export default PersonalData;
