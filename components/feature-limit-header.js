const FeatureLimitHeader = () => {
  return (
    <div className="w-[1099px] box-border overflow-x-auto flex flex-row items-start justify-start py-0 px-4 max-w-full text-left text-smi text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="w-[176.5px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[59px]">{`Feature `}</div>
      </div>
      <div className="w-[176.5px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[74px]">
          daily limit
        </div>
      </div>
      <div className="w-[176.5px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[98px]">
          overall limit
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-4 pr-[12.5px] pl-5">
        <div className="relative uppercase font-medium">
          reset frequency (U)
        </div>
      </div>
      <div className="w-[176.5px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[78px]">
          reset type
        </div>
      </div>
      <div className="w-[176.5px] flex flex-row items-start justify-start py-4 px-[19px] box-border">
        <div className="relative uppercase font-medium inline-block min-w-[96px]">
          hard limit (U)
        </div>
      </div>
    </div>
  );
};

export default FeatureLimitHeader;
