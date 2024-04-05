import { useMemo } from "react";

const TableData = ({ days, propMinWidth }) => {
  const daysStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start py-0 px-4 max-w-full [row-gap:20px] z-[1] text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="w-[204.8px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-[13px] px-5">
          <div className="relative leading-[22px] inline-block min-w-[69px]">
            LTD PLUS
          </div>
        </div>
      </div>
      <div className="w-[189px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-6 px-5">
          <div className="relative leading-[22px] inline-block min-w-[69px]">
            ZINTLR10
          </div>
        </div>
      </div>
      <div className="h-[84px] flex-1 relative min-w-[266px] max-w-full">
        <div className="absolute top-[0px] left-[0px] w-[204.8px] flex flex-row items-start justify-start p-5 box-border">
          <div className="flex-1 relative leading-[22px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
            ZINT10, LEAD90, NISD31
          </div>
        </div>
        <div className="absolute top-[12px] left-[204.7px] w-[204.8px] flex flex-row items-start justify-start py-[19px] px-5 box-border z-[1]">
          <div
            className="relative leading-[22px] inline-block min-w-[54px]"
            style={daysStyle}
          >
            {days}
          </div>
        </div>
      </div>
      <div className="w-[268.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <div className="self-stretch h-[72px] relative">
          <div className="absolute top-[12px] left-[0px] w-[204.8px] flex flex-row items-start justify-start py-[13px] px-5 box-border">
            <div className="relative leading-[22px] inline-block min-w-[124px]">
              Purchase General
            </div>
          </div>
          <div className="absolute top-[0px] left-[204.7px] w-16 flex flex-row items-center justify-start py-6 px-5 box-border gap-[8px] z-[1]">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/down.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
              loading="lazy"
              alt=""
              src="/solarmenudotsbold@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;
