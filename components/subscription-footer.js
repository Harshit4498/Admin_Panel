const SubscriptionFooter = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[30px] px-10 gap-[20px] text-left text-sm text-darkslategray font-inter mq750:flex-wrap">
      <div className="w-[162px] flex flex-row items-center justify-start gap-[5px]">
        <div className="h-[17px] flex-1 relative tracking-[0.05em] font-semibold inline-block">
          Rows per page:
        </div>
        <div className="h-[21px] w-[43px] rounded-6xs bg-light-solid-color-extra-card-background flex flex-row items-center justify-start py-0.5 px-1 box-border gap-[10px]">
          <div className="self-stretch flex-1 relative tracking-[0.05em] font-semibold">
            15
          </div>
          <img className="h-[5px] w-2 relative" alt="" src="/polygon-3.svg" />
        </div>
      </div>
      <div className="h-[17px] w-[206px] flex flex-row items-center justify-start gap-[19px]">
        <div className="self-stretch flex-1 relative tracking-[0.05em] font-semibold">
          1-10 of 432 Results
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-[17px] w-[11px] relative min-h-[17px]"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className="h-[17px] w-[11px] relative object-contain min-h-[17px]"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionFooter;
