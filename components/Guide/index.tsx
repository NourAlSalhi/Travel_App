import Image from "next/image";

const Guide = () => {
  return (
    <div className="max-w-[100rem] mx-auto p-8 pt-0 lg:px-20">
      <Image
        src="/camp.svg"
        alt="camp"
        width={60}
        height={50}
        className="block lg:w-[50px]"
      />
      <span className="text-green-600 uppercase font-semibold lg:text-xl">We are here for you</span>
      <h1 className="font-bold mt-5 text-[20px] md:text-[40px] leading-none lg:text-[60px]">
        Guide You to Easy Path
      </h1>
      <p className="mt-6 md:mt-10 text-gray-500">
        Only with the hilink application you will no longer get lost and get
        lost again, because we already support offline maps when there is no
        internet connection in the field. Invite your friends, relatives and
        friends to have fun in the wilderness through the valley and reach the
        top of the mountain
      </p>
    </div>
  );
};

export default Guide;
