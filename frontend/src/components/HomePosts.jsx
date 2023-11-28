const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 uses of Artificial Intelligence
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@sujalraunak</p>
          <div className="flex space-x-2 text-sm">
            <p>10-11-2023</p>
            <p>10:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore possimus repellat eligendi beatae laboriosam praesentium saepe officia sapiente ullam ex cupiditate, quibusdam at odit hic corporis doloremque enim, dignissimos quidem, sit est. Nihil.</p>
      </div>
    </div>
  );
};

export default HomePosts;
