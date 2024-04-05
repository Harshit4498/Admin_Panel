import Navbar from "./navbar";

const FrameComponent6 = () => {
  return (
    <section className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-[calc(100%_-_293px)] mq950:max-w-full">
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
        <Navbar
          banners="Profile"
          moonStars="/moonstars1@2x.png"
          layoutGridAdd="/layoutgridadd1@2x.png"
          navbarDebugCommit="unset"
          bannersDisplay="inline-block"
          bannersDebugCommit="unset"
          dataCombinerDebugCommit="unset"
        />
        <div className="w-[340px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block min-w-[42px]">
              Name
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-light-solid-color-extra-card-background self-stretch h-10 rounded shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-start py-[9.5px] px-4 box-border font-light-basic-typography-paragraph text-lg text-dark min-w-[204px]"
              placeholder="Shreya Raj"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block min-w-[40px]">
              Email
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-light-solid-color-extra-card-background self-stretch h-10 rounded shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-start py-[9.5px] px-4 box-border font-light-basic-typography-paragraph text-lg text-dark min-w-[204px]"
              placeholder="Shreya Raj"
              type="text"
            />
          </div>
        </div>
        <div className="h-10 flex flex-row items-start justify-start py-0 px-px box-border">
          <button className="cursor-pointer [border:none] py-2 px-4 bg-salmon self-stretch rounded-sm flex flex-row items-start justify-start gap-[6px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-bg-light text-left inline-block min-w-[52px]">
                Logout
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/materialsymbolslogout.svg"
            />
          </button>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent6;
