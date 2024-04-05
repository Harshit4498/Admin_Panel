const ActivutyHeader = () => {
  return (
    <nav className="m-0 w-[1128px] box-border flex flex-row items-start justify-start py-0 pr-0 pl-4 text-left text-smi text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="w-[220px] flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[32px]">
          Time
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 box-border max-w-full">
        <div className="relative uppercase font-medium inline-block min-w-[59px]">
          Activity
        </div>
      </div>
      <div className="w-[185px] flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[78px]">
          Activity by
        </div>
      </div>
      <div className="w-[191px] flex flex-row items-center justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[64px]">
          Severity
        </div>
      </div>
    </nav>
  );
};

export default ActivutyHeader;
