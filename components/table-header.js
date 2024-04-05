const TableHeader = () => {
  return (
    <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start py-0 px-4 z-[1] text-left text-smi text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="w-[204.8px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[100px]">
          Package Title
        </div>
      </div>
      <div className="w-[191px] shrink-0 flex flex-row items-start justify-start py-4 px-[19px] box-border">
        <div className="relative uppercase font-medium inline-block min-w-[101px]">
          Package code
        </div>
      </div>
      <div className="w-[409.5px] shrink-0 flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-row items-start justify-start py-4 px-5 shrink-0 [debug_commit:f6aba90]">
          <div className="relative uppercase font-medium inline-block min-w-[76px]">
            Discounts
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start py-4 px-5 shrink-0 [debug_commit:f6aba90] z-[1] ml-[-0.1px]">
          <div className="relative uppercase font-medium inline-block min-w-[72px]">
            plan type
          </div>
        </div>
      </div>
      <div className="h-12 w-[266.7px] relative shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[204.8px] flex flex-row items-start justify-start py-4 px-5 box-border">
          <div className="relative uppercase font-medium inline-block min-w-[71px]">
            Pack type
          </div>
        </div>
        <div className="absolute top-[0px] left-[204.7px] w-[62px] h-12 flex flex-row items-center justify-start py-[13px] px-5 box-border z-[1]">
          <img
            className="h-[22px] w-[22px] relative hidden"
            alt=""
            src="/trash.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
