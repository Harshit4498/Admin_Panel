import { useMemo } from "react";

const FrameComponent1 = ({ prop, propBorderRadius }) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className="h-[158.82px] bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[45px] pl-[9.795316696166992px] text-left text-mid-1 text-darkgray-100 font-inter border-[0.8px] border-solid border-light-grayscale-400"
      style={frameDivStyle}
    >
      <div className="relative font-medium">{prop}</div>
      <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] pr-px pl-[3.2651054859161377px] whitespace-nowrap text-xs-4 text-dodgerblue">
        <div className="relative font-medium">Campaign Name</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
