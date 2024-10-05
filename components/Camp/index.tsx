import Image from "next/image";

const Camp = () => {
  return (
    <section className="max-w-[100rem] mx-auto relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide inline-flex gap-5">
        <div className="relative p-7 lg:px-20 lg:py-7 w-[1100px] h-[400px] flex-shrink-0">
          <div className="z-10 absolute h-[350px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-3 rounded-full">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.62998 3.57005C7.80936 3.47221 7.99998 3.62274 7.99998 3.82707V17.3829C7.99998 17.6061 7.84756 17.7949 7.65018 17.8992C7.64341 17.9028 7.63667 17.9064 7.62998 17.9101L5.27998 19.2501C3.63998 20.1901 2.28998 19.4101 2.28998 17.5101V7.78005C2.28998 7.15005 2.73998 6.37005 3.29998 6.05005L7.62998 3.57005Z"
                    fill="white"
                  />
                  <path
                    d="M14.7219 6.10229C14.8922 6.18664 15 6.36028 15 6.55035V19.7035C15 20.072 14.615 20.3139 14.283 20.1539L10.033 18.1063C9.85998 18.023 9.75 17.8479 9.75 17.6559V4.44559C9.75 4.07473 10.1396 3.83294 10.4719 3.99753L14.7219 6.10229Z"
                    fill="white"
                  />
                  <path
                    d="M22 6.48994V16.2199C22 16.8499 21.55 17.6299 20.99 17.9499L17.4986 19.9509C17.1653 20.1419 16.75 19.9013 16.75 19.5171V6.33026C16.75 6.15075 16.8462 5.98501 17.0021 5.89602L19.01 4.74994C20.65 3.80994 22 4.58994 22 6.48994Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-white font-bold">
                Putuk Truno Camp{" "}
                <span className="block text-lg font-normal">
                  Prigen, Pasuruan
                </span>
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/person-1.png"
                  width={40}
                  height={40}
                  alt="Person"
                />
                <div className="absolute right-[-20px] bottom-[0px]">
                  <Image
                    src="/person-2.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
                <div className="absolute right-[-40px] bottom-[0px]">
                  <Image
                    src="/person-3.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
                <div className="absolute right-[-60px] bottom-[0px]">
                  <Image
                    src="/person-4.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
              </div>
              <p className="text-white text-lg font-bold ml-16">50+ Joined</p>
            </div>
          </div>
          <Image
            src="/img-1.png"
            alt="Camp photo one"
            layout="fill"
            objectFit="cover"
            className="rounded-r-3xl"
          />
        </div>
        <div className="relative p-7 lg:px-20 lg:py-7 w-[1100px] h-[400px] flex-shrink-0">
          <div className="z-10 absolute h-[350px] flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-3 rounded-full">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.62998 3.57005C7.80936 3.47221 7.99998 3.62274 7.99998 3.82707V17.3829C7.99998 17.6061 7.84756 17.7949 7.65018 17.8992C7.64341 17.9028 7.63667 17.9064 7.62998 17.9101L5.27998 19.2501C3.63998 20.1901 2.28998 19.4101 2.28998 17.5101V7.78005C2.28998 7.15005 2.73998 6.37005 3.29998 6.05005L7.62998 3.57005Z"
                    fill="white"
                  />
                  <path
                    d="M14.7219 6.10229C14.8922 6.18664 15 6.36028 15 6.55035V19.7035C15 20.072 14.615 20.3139 14.283 20.1539L10.033 18.1063C9.85998 18.023 9.75 17.8479 9.75 17.6559V4.44559C9.75 4.07473 10.1396 3.83294 10.4719 3.99753L14.7219 6.10229Z"
                    fill="white"
                  />
                  <path
                    d="M22 6.48994V16.2199C22 16.8499 21.55 17.6299 20.99 17.9499L17.4986 19.9509C17.1653 20.1419 16.75 19.9013 16.75 19.5171V6.33026C16.75 6.15075 16.8462 5.98501 17.0021 5.89602L19.01 4.74994C20.65 3.80994 22 4.58994 22 6.48994Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-white font-bold">
                Putuk Truno Camp{" "}
                <span className="block text-lg font-normal">
                  Prigen, Pasuruan
                </span>
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/person-1.png"
                  width={40}
                  height={40}
                  alt="Person"
                />
                <div className="absolute right-[-20px] bottom-[0px]">
                  <Image
                    src="/person-2.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
                <div className="absolute right-[-40px] bottom-[0px]">
                  <Image
                    src="/person-3.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
                <div className="absolute right-[-60px] bottom-[0px]">
                  <Image
                    src="/person-4.png"
                    width={40}
                    height={40}
                    alt="Person"
                  />
                </div>
              </div>
              <p className="text-white text-lg font-bold ml-16">50+ Joined</p>
            </div>
          </div>
          <Image
            src="/img-2.png"
            alt="Camp photo two"
            layout="fill"
            objectFit="cover"
            className="rounded-r-3xl"
          />
        </div>
      </div>
      <div className="bg-green-600 z-20 m-5 h-max xl:absolute xl:mt-[200px] xl:ml-[700px] xl:w-[500px] leading-tight px-8 pt-10 text-white rounded-2xl">
        <div className="relative">
          <div className="absolute top-0 right-0 z-10">
            <h3 className="xl:text-4xl text-2xl">
              <span className="font-bold">Feeling Lost</span> And Not Knowing
              The Way?
            </h3>
            <p className="mt-8">
              Starting from the anxiety of the climbers when visiting a new
              climbing location, the possibility of getting lost is very large.
              That's why we are here for those of you who want to start an
              adventure
            </p>
          </div>
          <svg
            width="186"
            height="219"
            viewBox="0 0 186 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:ml-[350px] md:ml-[500px] ml-[240px] w-32"
          >
            <path
              d="M147.047 219C158.084 219 167.173 215.089 174.314 207.268C182.105 199.446 186 191.299 186 182.826C186 174.353 171.393 113.411 142.178 0H129.518L149.969 139.808H147.047C136.66 139.808 127.246 143.719 118.806 151.54C111.016 159.362 107.12 168.487 107.12 178.915C107.12 189.995 111.016 199.446 118.806 207.268C126.597 215.089 136.01 219 147.047 219ZM39.9267 219C50.9633 219 60.0524 215.089 67.1937 207.268C74.9843 199.446 78.8796 191.299 78.8796 182.826C78.8796 174.353 64.2722 113.411 35.0576 0H22.3979L42.8482 139.808H39.9267C29.5393 139.808 20.1257 143.719 11.6859 151.54C3.89529 159.362 0 168.487 0 178.915C0 189.995 3.89529 199.446 11.6859 207.268C19.4764 215.089 28.8901 219 39.9267 219Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Camp;
