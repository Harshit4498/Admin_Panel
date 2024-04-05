import MetaDataHeader from "./Table Header Row";
import MetaDataRow from "./meta-data-row";
import FeatureLimits from "./feature-limits";

const TableDropDownData = () => {
  return (
    <div className="absolute top-[223px] left-[16px] bg-bg-light w-[1128px] flex flex-col items-start justify-start pt-0 pb-6 pr-0 pl-6 box-border max-w-full z-[1] text-left text-smi text-grey font-light-basic-typography-paragraph">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 border-b-[1px] border-solid border-lavender-100">
        <button className="cursor-pointer [border:none] py-[9px] px-5 bg-[transparent] w-[136px] flex flex-row items-start justify-start box-border">
          <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-dark text-left inline-block min-w-[72px]">
            Meta Data
          </div>
        </button>
      </div>
      <MetaDataHeader />
      <MetaDataRow />
      <div className="self-stretch h-[460px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-mini text-dark mq1050:h-auto">
        <FeatureLimits />
      </div>
    </div>
  );
};

export default TableDropDownData;
