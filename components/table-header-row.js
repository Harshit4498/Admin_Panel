const TableHeaderRow = () => {
  return (
    <div className="self-stretch overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-[54px] pl-4 text-left text-smi text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100 mq1125:pr-[27px] mq1125:box-border">
      <div className="w-[225px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium">Manager</div>
      </div>
      <div className="w-48 shrink-0 flex flex-row items-center justify-start py-4 pr-0 pl-5 box-border">
        <div className="flex-1 relative uppercase font-medium">package</div>
      </div>
      <div className="flex flex-row items-center justify-start py-4 pr-[13px] pl-5">
        <div className="relative uppercase font-medium">
          Subscription Start date
        </div>
      </div>
      <div className="w-[199px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium">Status</div>
      </div>
      <div className="w-[170px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium whitespace-nowrap shrink-0">
          Total Billing amount
        </div>
      </div>
      <div className="h-12 w-[62px] shrink-0 flex flex-row items-center justify-start py-[13px] px-5 box-border">
        <img
          className="h-[22px] w-[22px] relative hidden"
          alt=""
          src="/trash.svg"
        />
      </div>
    </div>
  );
};

export default TableHeaderRow;
