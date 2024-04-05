import { useMemo } from "react";

const ZintlrLogo = ({ propDisplay, zINTLRMargin }) => {
  const zINTLRStyle = useMemo(() => {
    return {
      display: propDisplay,
      margin: zINTLRMargin,
    };
  }, [propDisplay, zINTLRMargin]);

  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[30px] pr-3.5 pl-[18px] gap-[20px] text-left text-xl text-iris-100 font-inter">
      <div className="w-[99px] flex flex-row items-start justify-start">
        <img
          className="h-[29.4px] w-[29.4px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/microsoftteamsimage-2-1@2x.png"
        />
        <div
          className="flex-1 relative font-medium [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.15)] ml-[-1px] mq450:text-base"
          style={zINTLRStyle}
        >
          ZINTLR
        </div>
      </div>
      <img
        className="h-6 w-6 relative"
        loading="lazy"
        alt=""
        src="/indentdecrease.svg"
      />
    </div>
  );
};

export default ZintlrLogo;
