const PersonalInfo = () => {
  return (
    <div className="flex flex-row items-center justify-start py-0 pr-[52px] pl-0 box-border gap-[24px] max-w-full shrink-0 text-left text-lg text-dark font-light-basic-typography-paragraph">
      <div className="flex flex-row items-center justify-start py-5 pr-[7px] pl-0 gap-[14px] mq450:flex-wrap">
        <div className="h-[72px] w-[72px] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center relative z-[1]">
          <div className="h-[72px] flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
            <div className="absolute h-[80.56%] w-[calc(100%_-_14px)] top-[9.72%] right-[7px] bottom-[9.72%] left-[7px] rounded-81xl bg-gray z-[1]" />
          </div>
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[2]" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative leading-[22px] font-medium z-[1]">
              Kailash Chaurasia
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/phcrownfill1.svg"
            />
          </div>
          <div className="relative text-mini leading-[22px] text-grey whitespace-nowrap z-[1]">
            robert@gmail.com
          </div>
        </div>
      </div>
      <div className="h-[139px] flex flex-row items-center justify-start gap-[6px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/solarmenudotsbold@2x.png"
        />
        <div className="self-stretch w-px relative box-border z-[1] border-r-[1px] border-solid border-light-solid-color-extra-divider" />
      </div>
      <div className="w-[233px] flex flex-col items-start justify-start gap-[16px] text-smi text-grey">
        <div className="relative uppercase font-medium z-[1]">
          PERSONAL INFORMATION
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-dark">
          <div className="flex-1 relative z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              Linkedin
            </p>
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              Company
            </p>
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              Total Team
            </p>
            <p className="m-0">Active Subscription</p>
          </div>
          <div className="w-[100px] relative font-semibold inline-block z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              linkedin/in/male
            </p>
            <p className="[margin-block-start:0] [margin-block-end:16px]">
              Zola
            </p>
            <p className="[margin-block-start:0] [margin-block-end:16px]">10</p>
            <p className="m-0">Free Version</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
