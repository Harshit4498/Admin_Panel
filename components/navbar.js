import { useMemo } from "react";

const Navbar = ({
  banners,
  moonStars,
  layoutGridAdd,
  navbarDebugCommit,
  bannersDisplay,
  bannersDebugCommit,
  dataCombinerDebugCommit,
  onBackgroundClick,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      debugCommit: navbarDebugCommit,
    };
  }, [navbarDebugCommit]);

  const bannersStyle = useMemo(() => {
    return {
      display: bannersDisplay,
      debugCommit: bannersDebugCommit,
    };
  }, [bannersDisplay, bannersDebugCommit]);

  const dataCombinerStyle = useMemo(() => {
    return {
      debugCommit: dataCombinerDebugCommit,
    };
  }, [dataCombinerDebugCommit]);

  return (
    <div
      className="self-stretch rounded-md shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-0 gap-[10px] shrink-0 [debug_commit:f6aba90] text-left text-5xl text-dark font-light-basic-typography-paragraph"
      style={navbarStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[667px] max-w-full mq750:min-w-full">
        <h2
          className="m-0 self-stretch relative text-inherit leading-[22px] font-semibold font-inherit mq450:text-lgi mq450:leading-[18px]"
          style={bannersStyle}
        >
          {banners}
        </h2>
      </div>
      <img
        className="h-[26px] w-[26px] relative hidden z-[1]"
        alt=""
        src="/search.svg"
      />
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
        src={moonStars}
      />
      <img
        className="h-[26px] w-[26px] relative object-cover hidden"
        alt=""
        src={layoutGridAdd}
      />
      <div
        className="flex flex-row items-start justify-start gap-[25.599999999998545px] text-center text-smi text-light-solid-color-extra-card-background"
        style={dataCombinerStyle}
      >
        <div className="h-8 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <div className="flex-1 flex flex-row items-start justify-start relative">
            <img
              className="h-[26px] w-[26px] relative"
              loading="lazy"
              alt=""
              src="/bell.svg"
            />
            <div className="h-[18px] w-[18px] absolute !m-[0] top-[-3.7px] right-[-6.3px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-solid-color-danger-danger-500-base w-full h-full z-[1]" />
              <div className="absolute top-[1.7px] left-[5.7px] leading-[14px] font-semibold inline-block w-[9px] h-3.5 min-w-[9px] z-[2]">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="h-[38px] w-[38px] relative">
          <div className="absolute h-full w-full top-[-1.32%] right-[0%] bottom-[1.32%] left-[0%] rounded-81xl overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0] cursor-pointer"
                onClick={onBackgroundClick}
              />
              <div className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl z-[1]" />
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
          </div>
          <div className="absolute h-[31.58%] w-[31.58%] top-[75.53%] right-[-4.74%] bottom-[-7.11%] left-[73.16%] rounded-[50%] bg-light-solid-color-success-success-500-base box-border z-[3] border-[0px] border-solid border-light-solid-color-extra-card-background" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
