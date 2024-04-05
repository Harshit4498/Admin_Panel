const TechnicalInfo = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[33px] max-w-full shrink-0 text-left text-smi text-grey font-light-basic-typography-paragraph">
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="relative uppercase font-medium z-[1]">
          Technical Contact Details
        </div>
        <div className="relative text-dark z-[1]">
          3517 W. Gray St. Utica, Pennsylvania 57867
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[34px] text-lg text-dark mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <b className="relative leading-[22px] z-[1]">Landing Page</b>
          <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey z-[1]">
            Reference ID
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[34px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <b className="relative leading-[22px] z-[1]">Free</b>
            <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey z-[1]">
              Active Subscription
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <b className="relative leading-[22px] z-[1]">150</b>
            <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey z-[1]">
              Total Sessions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInfo;
