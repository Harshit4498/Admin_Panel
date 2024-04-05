import { useMemo } from "react";

const FrameComponent = ({
  prop,
  blueTag,
  propBorderRadius,
  propBackground,
  propColor,
}) => {
  const textStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const tagsStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const blueTagStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="flex-1 rounded-t-none rounded-br-none rounded-bl-[6.53px] bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[11px] pl-[9.795316696166992px] min-w-[99px] min-h-[158px] shrink-0 text-left text-xs-4 text-dodgerblue font-inter border-[0.8px] border-solid border-light-grayscale-400 mq450:min-h-[auto]"
      style={textStyle}
    >
      <div className="relative text-mid-1 font-medium text-darkgray-100">
        {prop}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-[1.6325527429580688px]">
        <div
          className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] pr-[3px] pl-[3.2651054859161377px]"
          style={tagsStyle}
        >
          <div className="relative font-medium" style={blueTagStyle}>
            {blueTag}
          </div>
        </div>
      </div>
      <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] pr-px pl-[3.2651054859161377px] whitespace-nowrap">
        <div className="relative font-medium">Campaign Name</div>
      </div>
    </div>
  );
};

export default FrameComponent;
