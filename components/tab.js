import { useMemo } from "react";

const Tab = ({ paypal, propBackgroundColor }) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="flex-1 box-border flex flex-col items-start justify-start py-[15px] px-2 gap-[8px] min-w-[112px] text-left text-5xl text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div
          className="h-3 w-3 relative rounded-[50%] bg-mediumslateblue"
          style={ellipseDivStyle}
        />
        <b className="relative leading-[22px] mq450:text-lgi mq450:leading-[18px]">
          24k
        </b>
      </div>
      <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey">
        {paypal}
      </div>
    </div>
  );
};

export default Tab;
