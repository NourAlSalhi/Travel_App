import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 md:right-[-7rem] xl:top-[-15rem]">
        <Image
          src="/hero.png"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Camp Icon */}
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        {/* Heading */}
        <h1 className="font-bold text-[52px] leading-none lg:text-[88px]">
          Putuk Truno Camp Area
        </h1>

        {/* Description */}
        <p className="text-base mt-6 text-gray-500 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app.
        </p>

        {/* Reviews and Rating */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="font-bold text-base text-blue-600 lg:text-lg">
            198k
            <span className="font-normal text-base lg:text-lg ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <button
            type="button"
            title="Download App"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700"
          >
            Download App
          </button>
          <button
            type="button"
            title="How we work?"
            className="bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
          >
            How we work?
          </button>
        </div>
      </div>

      {/* Location and Stats Card */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-700 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-base text-gray-300">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="font-bold text-lg text-white">Aguas Calientes</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-base text-gray-300">Distance</p>
              <p className="font-bold text-lg text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-gray-300">Elevation</p>
              <p className="font-bold text-lg text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
