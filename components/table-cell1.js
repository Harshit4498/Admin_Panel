const TableCell1 = () => {
  return (
    <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-2.5 px-5 box-border text-left text-mini text-dark font-light-basic-typography-paragraph">
      <div className="w-[150px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="relative leading-[22px] font-medium inline-block min-w-[42px] whitespace-nowrap">
            00:36
          </div>
          <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
            November 7, 2017
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCell1;
