const Homepage = () => {
  return (
    <div className="overflow-x-hidden ">
      <div className="videos   mx-auto max-w-max py-5 grid youtubeSm:grid-cols-2 youtubeMd:grid-cols-3 justify-items-stretch youtubeSm:gap-3  youtubeLg:grid-cols-4 youtubeSidebarMobile:translate-x-9  px-16">
        {[...Array(26)].map((_, i) => (
          <div className="video  mb-5" key={i}>
            <div className="video__thumbnail youtubeLg:max-w-[360px]  max-w-[320px] aspect-video bg-red-400 ">
              <img
                className="w-full  h-full object-cover"
                src="https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg"
                alt=""
              />
            </div>
            <div className="video__desc mt-3 flex max-w-[320px]">
              <div className="video__avatar w-9 h-9 rounded-full shrink-0 bg-red-300"></div>
              <div className="ml-3 ">
                <div className="video__title text-white font-medium text-sm  mb-1 ">
                  The Complete JavaScript Course 2020: Build Real Projects!
                </div>
                <div className="video__channel text-xs text-gray-400 mt-2 ">
                  <div className="">Udemy</div>
                  <span className="text-xs mt-1 inline-block">
                    <span className="text-gray-400">1.5M views</span>
                    <span className="text-gray-400 ml-3">4 hours ago</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
