const Shimmer = () => {
  const bgGray = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <div className="p-3 grid gap-4 grid-cols-4">
        <div
          className="w-full rounded-md h-[150px] object-cover h-[200px]"
          style={bgGray}
        ></div>
        <div
          className="w-full rounded-md h-[150px] object-cover h-[200px]"
          style={bgGray}
        ></div>
        <div
          className="w-full rounded-md h-[150px] object-cover h-[200px]"
          style={bgGray}
        ></div>
        <div
          className="w-full rounded-md h-[150px] object-cover h-[200px]"
          style={bgGray}
        ></div>
      </div>
    </>
  );
};

export default Shimmer;
