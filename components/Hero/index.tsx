import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[100rem] mx-auto p-8 lg:px-20 flex flex-col gap-20 pb-32 md:gap-28 xl:flex-row relative">
      <div className="absolute inset-0 -z-10 md:right-[-7rem] xl:top-[-15rem]">
        <Image
          src="/hero.png"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={60}
          height={50}
          className="block lg:w-[50px]"
        />
        <h1 className="font-bold md:mt-[-20px] text-[50px] md:text-[70px] leading-none lg:text-[80px]">
          Putuk Truno Camp Area
        </h1>
        <p className="mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={30}
                  height={30}
                  className="lg:w-6"
                />
              ))}
          </div>
          <p className="text-[18px] font-bold lg:text-[18px]">
            198k
            <span className="font-normal ml-1">Excellent Reviews</span>
          </p>
        </div>
        <div className="flex flex-col text-xl w-full gap-3 sm:flex-row">
          <button
            type="button"
            className="bg-green-600 text-white font-bold px-10 py-5 rounded-full hover:bg-green-700"
          >
            Download App
          </button>
          <button
            type="button"
            className="bg-white text-gray-800 font-bold p-5 rounded-full hover:bg-gray-200"
          >
            How we work?
          </button>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[320px] flex-col gap-8 rounded-3xl bg-gray-800 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl text-gray-500">Location</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 18L6 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="font-bold text-2xl text-white">Aguas Calientes</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-2xl text-gray-500">Distance</p>
              <p className="font-bold text-2xl text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-gray-500">Elevation</p>
              <p className="font-bold text-2xl text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
