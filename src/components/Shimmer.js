const Shimmer = () => {
  const bgGray = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <div className="res-container">
        <div className="res-card shimmer" style={bgGray}></div>
        <div className="res-card shimmer" style={bgGray}></div>
        <div className="res-card shimmer" style={bgGray}></div>
        <div className="res-card shimmer" style={bgGray}></div>
      </div>
    </>
  );
};

export default Shimmer;
