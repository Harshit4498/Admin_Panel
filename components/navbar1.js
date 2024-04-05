import { useRouter } from "next/router";

const Navbar11 = () => {
  const router = useRouter();

  const onBackgroundClick = () => {
    router.push("/profile");
  };

  return (
    <div className="self-stretch rounded-md shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-3 px-0 box-border gap-[0px_24px] max-w-full text-left text-5xl text-dark font-light-basic-typography-paragraph">
      <img
        className="h-[26px] w-[26px] relative hidden"
        alt=""
        src="/search.svg"
      />
      <h2 className="m-0 flex-1 relative text-inherit leading-[22px] font-semibold font-inherit inline-block min-w-[231px] max-w-full mq450:text-lgi mq450:leading-[18px]">
        Subscribers Management
      </h2>
      <div className="h-[26px] w-[26px] relative rounded-81xl overflow-hidden shrink-0 hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#a8aaae]" />
          <div className="absolute h-[80.38%] w-[80.38%] top-[9.62%] right-[10%] bottom-[10%] left-[9.62%] rounded-81xl" />
        </div>
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/avatar@2x.png"
        />
      </div>
      <img
        className="h-[26px] w-[26px] relative object-cover hidden"
        alt=""
        src="/moonstars1@2x.png"
      />
      <img
        className="h-[26px] w-[26px] relative object-cover hidden"
        alt=""
        src="/layoutgridadd1@2x.png"
      />
      <div className="flex flex-row items-start justify-start gap-[19px] text-center text-smi text-light-solid-color-extra-card-background">
        <div className="w-[19px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-px pl-0 box-border">
          <div className="self-stretch h-[18px] relative">
            <div className="absolute top-[0.3px] left-[-0.3px] rounded-[50%] bg-light-solid-color-danger-danger-500-base w-full h-full z-[1]" />
            <div className="absolute top-[2px] left-[5px] flex flex-row items-start justify-start">
              <img
                className="h-[26px] w-[26px] absolute !m-[0] bottom-[-14px] left-[-18.6px]"
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
              <div className="relative leading-[14px] font-semibold z-[2]">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-0 px-0 pb-px relative">
          <div className="h-[37px] flex flex-row items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="mt-[-1px] h-[38px] w-[38px] relative rounded-81xl overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0] cursor-pointer"
                  onClick={onBackgroundClick}
                />
                <div className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl z-[1]" />
              </div>
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            </div>
          </div>
          <div className="w-2 h-2 absolute !m-[0] right-[-1.8px] bottom-[-2.7px] rounded-[50%] bg-light-solid-color-success-success-500-base box-border z-[3] border-[0px] border-solid border-light-solid-color-extra-card-background" />
        </div>
      </div>
    </div>
  );
};

export default Navbar11;
