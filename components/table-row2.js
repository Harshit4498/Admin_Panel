import { useMemo } from "react";

const TableRow2 = ({
  done,
  materialSymbolskeyboardAr,
  propBackgroundColor,
  propFlexWrap,
  propRowGap,
  propHeight,
  propOverflowX,
  propFlex,
  propMinWidth,
  propHeight1,
  propAlignSelf,
  propWidth,
  propFlex1,
  propAlignSelf1,
  propFlex2,
  propHeight2,
  propAlignSelf2,
  propAlignSelf3,
  propWidth1,
  propHeight3,
  propBackgroundColor1,
  propBorder,
  propHeight4,
  propWidth2,
  propColor,
  propAlignSelf4,
  propFlex3,
  propDisplay,
  propHeight5,
  propAlignSelf5,
  propWidth3,
  propAlignSelf6,
  propFlex4,
  propAlignSelf7,
  propFlex5,
}) => {
  const tableRow2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flexWrap: propFlexWrap,
      rowGap: propRowGap,
      height: propHeight,
      overflowX: propOverflowX,
    };
  }, [
    propBackgroundColor,
    propFlexWrap,
    propRowGap,
    propHeight,
    propOverflowX,
  ]);

  const tableCell1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight1,
    };
  }, [propFlex, propMinWidth, propHeight1]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex1,
    };
  }, [propWidth, propFlex1]);

  const nandanRaikwarStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      flex: propFlex2,
    };
  }, [propAlignSelf1, propFlex2]);

  const binhan628gmailcomStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const tableCell2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const annualPlus35647464ContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      width: propWidth1,
    };
  }, [propAlignSelf3, propWidth1]);

  const october252019Style = useMemo(() => {
    return {
      height: propHeight3,
    };
  }, [propHeight3]);

  const report1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder,
      height: propHeight4,
      width: propWidth2,
    };
  }, [propBackgroundColor1, propBorder, propHeight4, propWidth2]);

  const done2Style = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf4,
      flex: propFlex3,
      display: propDisplay,
    };
  }, [propColor, propAlignSelf4, propFlex3, propDisplay]);

  const tableCell3Style = useMemo(() => {
    return {
      height: propHeight5,
    };
  }, [propHeight5]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
      width: propWidth3,
    };
  }, [propAlignSelf5, propWidth3]);

  const frameDiv4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
      flex: propFlex4,
    };
  }, [propAlignSelf6, propFlex4]);

  const divStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf7,
      flex: propFlex5,
    };
  }, [propAlignSelf7, propFlex5]);

  return (
    <div
      className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-11 pl-4 [row-gap:20px] text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100 mq1125:pr-[22px] mq1125:box-border"
      style={tableRow2Style}
    >
      <div
        className="flex-1 flex flex-row items-center justify-start py-[13px] pr-[55px] pl-5 box-border min-w-[146px]"
        style={tableCell1Style}
      >
        <div
          className="flex flex-col items-start justify-start"
          style={frameDiv1Style}
        >
          <div
            className="flex flex-row items-center justify-start gap-[4px]"
            style={frameDiv2Style}
          >
            <div
              className="relative leading-[22px] font-medium"
              style={nandanRaikwarStyle}
            >
              Vikas Tiwari
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/phcrownfill1.svg"
            />
          </div>
          <div
            className="w-[150px] relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]"
            style={binhan628gmailcomStyle}
          >
            danghoang87hl@gmail.com
          </div>
        </div>
      </div>
      <div
        className="w-[191px] flex flex-row items-center justify-start py-6 px-5 box-border"
        style={tableCell2Style}
      >
        <div
          className="relative leading-[22px]"
          style={annualPlus35647464ContainerStyle}
        >
          <p className="m-0">Annual Plus</p>
          <p className="m-0">#35647464</p>
        </div>
      </div>
      <div className="w-[214px] flex flex-row items-center justify-start py-5 pr-11 pl-5 box-border text-sm">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div
            className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap"
            style={october252019Style}
          >
            October 25, 2019
          </div>
        </div>
      </div>
      <div className="w-[199px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
        <button
          className="cursor-pointer [border:none] py-[5px] px-2.5 bg-mediumseagreen-300 rounded flex flex-row items-center justify-start gap-[10px] hover:bg-mediumseagreen-200"
          style={report1Style}
        >
          <div
            className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-success-success-500-base text-left"
            style={done2Style}
          >
            {done}
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
            alt=""
            src={materialSymbolskeyboardAr}
          />
        </button>
      </div>
      <div
        className="w-[175px] flex flex-row items-center justify-start py-[13px] px-5 box-border"
        style={tableCell3Style}
      >
        <div
          className="flex flex-col items-start justify-start"
          style={frameDiv3Style}
        >
          <div
            className="flex flex-row items-center justify-start gap-[4px]"
            style={frameDiv4Style}
          >
            <div
              className="relative leading-[22px] whitespace-nowrap"
              style={divStyle}
            >
              $154
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/phcrownfill1.svg"
            />
          </div>
          <div className="w-[150px] h-[22px] relative text-xs leading-[22px] hidden items-center overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
            manhhachkt08@gmail.com
          </div>
        </div>
      </div>
      <div className="w-16 flex flex-row items-center justify-start py-6 px-5 box-border gap-[8px]">
        <img
          className="h-[22px] w-[22px] relative hidden"
          alt=""
          src="/trash1.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/down.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
          alt=""
          src="/solarmenudotsbold@2x.png"
        />
      </div>
    </div>
  );
};

export default TableRow2;
