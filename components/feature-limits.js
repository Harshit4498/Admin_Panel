import FeatureLimitHeader from "./feature-limit-header";
import FeatureLimitRow4 from "./Table Row";
import FeatureLimitRow3 from "./feature-limit-row3";
import FeatureLimitRow2 from "./feature-limit-row2";
import FeatureLimitRow1 from "./feature-limit-row1";
import FeatureLimitRow from "./feature-limit-row";

const FeatureLimits = () => {
  return (
    <div className="w-[1161px] bg-bg-light box-border flex flex-col items-start justify-start pt-0 px-6 pb-6 shrink-0 [debug_commit:f6aba90] text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="w-[1099px] box-border flex flex-row items-start justify-start py-0 px-4 max-w-full border-b-[1px] border-solid border-lavender-100">
        <button className="cursor-pointer [border:none] py-[9px] px-5 bg-[transparent] flex flex-row items-start justify-start">
          <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-dark text-left inline-block min-w-[105px]">
            Feature limits
          </div>
        </button>
      </div>
      <FeatureLimitHeader />
      <FeatureLimitRow4 />
      <FeatureLimitRow3 />
      <FeatureLimitRow2 />
      <FeatureLimitRow1 />
      <FeatureLimitRow />
      <div className="w-[1040px] h-1.5 relative rounded-71xl bg-bg max-w-full">
        <div className="absolute top-[0px] left-[0px] rounded-71xl bg-bg w-full h-full hidden" />
        <div className="absolute top-[0px] left-[0px] rounded-71xl bg-grey w-[381.4px] h-1.5 z-[1]" />
      </div>
    </div>
  );
};

export default FeatureLimits;
