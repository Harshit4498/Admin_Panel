import Tab from "./tab";

const ConsumptionMatrix = () => {
  return (
    <div className="w-[552px] rounded-2xl bg-light-solid-color-extra-card-background flex flex-col items-center justify-start pt-0 pb-[13px] px-0 box-border gap-[24px] min-w-[552px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph mq750:min-w-full mq1050:flex-1">
      <div className="ml-[94px] w-[646px] flex flex-row items-start justify-start pt-6 px-6 pb-0 box-border max-w-[117%] shrink-0 [row-gap:20px] mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[374px] max-w-full mq750:min-w-full">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[26px] font-semibold font-inherit">
            Consumption Matrix
          </h3>
          <div className="w-[275px] flex flex-row items-start justify-start gap-[17px]">
            <button className="cursor-pointer [border:none] py-1.5 px-2 bg-[transparent] [background:linear-gradient(180deg,_rgba(15,_96,_255,_0),_rgba(15,_96,_255,_0.04))] flex flex-col items-start justify-center border-b-[3px] border-solid border-dark hover:bg-dimgray">
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium font-light-basic-typography-paragraph text-grey text-left">
                Yearly
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-2 bg-[transparent] flex-1 flex flex-col items-start justify-center border-b-[1px] border-solid border-lavender-100 hover:bg-lavender-300">
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium font-light-basic-typography-paragraph text-grey text-left">
                Monthly
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-2 bg-[transparent] flex-1 flex flex-col items-start justify-center border-b-[1px] border-solid border-lavender-100 hover:bg-lavender-300">
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium font-light-basic-typography-paragraph text-grey text-left">
                Weekly
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-2 bg-[transparent] flex flex-col items-start justify-center border-b-[1px] border-solid border-lavender-100 hover:bg-lavender-300">
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium font-light-basic-typography-paragraph text-grey text-left">
                Daily
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[22px] w-[22px] relative"
          alt=""
          src="/dotsvertical1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-6 box-border max-w-full text-5xl">
        <div className="flex-1 flex flex-col items-end justify-start gap-[46px] max-w-full mq750:gap-[23px_46px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
            <Tab paypal="Personality Profiles" />
            <Tab paypal="Lookup Credits" propBackgroundColor="#28c76f" />
            <Tab paypal="zScout Credits" propBackgroundColor="#ffc600" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-center text-smi">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-end justify-start gap-[16px]">
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">
                    50k
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    40k
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    30k
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    20k
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    10k
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    0k
                  </div>
                </div>
                <img
                  className="h-[203px] flex-1 relative max-w-full overflow-hidden min-w-[281px] min-h-[203px]"
                  alt=""
                  src="/chart-1.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[10px] max-w-full">
                <div className="self-stretch h-px flex flex-row items-center justify-end max-w-full">
                  <div className="h-px w-[416px] relative box-border max-w-[calc(100%_-_0px)] border-t-[1px] border-solid border-light-solid-color-extra-divider" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border gap-[11.909090909090908px] max-w-full mq750:flex-wrap">
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jan
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Feb
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mar
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Apr
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    May
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jun
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:w-full mq750:h-[17px]">
                    Jul
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Aug
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Sept
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Oct
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Nov
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Dec
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumptionMatrix;
