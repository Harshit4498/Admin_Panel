import { useMemo } from "react";
import TableCell1 from "./table-cell1";
import TableCell from "./table-cell";

const ActivityRow = ({
  devideMilkingGroupForBett,
  low,
  propBackgroundColor,
  propColor,
  propMinWidth,
}) => {
  const taskSeverityStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const lowStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className="w-[1128px] box-border overflow-x-auto flex flex-row items-center justify-start py-0 pr-0 pl-4 text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <TableCell1 />
      <div className="w-[519px] shrink-0 flex flex-row items-center justify-start py-2.5 px-5 box-border max-w-[calc(100%_-_833px)]">
        <div className="relative leading-[22px]">
          {devideMilkingGroupForBett}
        </div>
      </div>
      <TableCell />
      <div className="w-[165px] shrink-0 flex flex-row items-center justify-start py-[21px] px-5 box-border">
        <button
          className="cursor-pointer [border:none] py-[5px] px-2.5 bg-honeydew rounded flex flex-row items-center justify-start hover:bg-powderblue"
          style={taskSeverityStyle}
        >
          <div
            className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-success-success-500-base text-left inline-block min-w-[25px]"
            style={lowStyle}
          >
            {low}
          </div>
        </button>
      </div>
      <div className="h-[54px] w-[258px] shrink-0" />
    </div>
  );
};

export default ActivityRow;
