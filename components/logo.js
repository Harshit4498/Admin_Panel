import { useMemo } from "react";

const Logo = ({ zINTLRDebugCommit, indentDecreaseIconDebugCommit }) => {
  const microsoftTeamsImage21Style = useMemo(() => {
    return {
      debugCommit: zINTLRDebugCommit,
    };
  }, [zINTLRDebugCommit]);

  const zINTLR1Style = useMemo(() => {
    return {
      debugCommit: indentDecreaseIconDebugCommit,
    };
  }, [indentDecreaseIconDebugCommit]);

  return (
    <div className="self-stretch h-[89.4px] flex flex-row items-end justify-between py-[30px] pr-3.5 pl-[18px] box-border gap-[20px] text-left text-xl text-iris-100 font-inter">
      <div className="self-stretch w-[99.2px] flex flex-row items-start justify-start">
        <img
          className="h-[29.4px] w-[29.4px] relative object-cover shrink-0 [debug_commit:f6aba90] z-[1]"
          loading="lazy"
          alt=""
          src="/microsoftteamsimage-2-1@2x.png"
          style={microsoftTeamsImage21Style}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.3999999999996362px] px-0 pb-0 ml-[-1.2px]">
          <div
            className="self-stretch relative font-medium [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.15)] shrink-0 [debug_commit:f6aba90] mq450:text-base"
            style={zINTLR1Style}
          >
            ZINTLR
          </div>
        </div>
      </div>
      <div className="h-[26.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.6999999999989086px] box-border">
        <img
          className="w-6 h-6 relative"
          loading="lazy"
          alt=""
          src="/indentdecrease.svg"
        />
      </div>
    </div>
  );
};

export default Logo;
