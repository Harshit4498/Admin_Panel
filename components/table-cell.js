const TableCell = () => {
  return (
    <div className="w-[190px] shrink-0 flex flex-row items-center justify-start py-[21px] px-5 box-border text-left text-mini text-dark font-light-basic-typography-paragraph">
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[22px] font-medium inline-block min-w-[85px]">
            Vikas Tiwari
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
          danghoang87hl@gmail.com
        </div>
      </div>
    </div>
  );
};

export default TableCell;
