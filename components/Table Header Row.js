const MetaDataHeader = () => {
  return (
    <div className="self-stretch box-border flex flex-row items-start justify-start py-0 px-4 top-[0] z-[99] sticky max-w-full text-left text-smi text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100 mq1050:hidden">
      <div className="w-[379px] flex flex-row items-start justify-start py-4 px-5 box-border max-w-full">
        <div className="relative uppercase font-medium inline-block min-w-[88px]">
          Description
        </div>
      </div>
      <div className="w-[171.3px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[98px]">
          Default Price
        </div>
      </div>
      <div className="w-[342.5px] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start py-4 px-[19px] shrink-0 [debug_commit:f6aba90]">
          <div className="relative uppercase font-medium inline-block min-w-[88px] whitespace-nowrap">
            Initial price
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start py-4 px-5 shrink-0 [debug_commit:f6aba90] z-[1] ml-[-0.1px]">
          <div className="relative uppercase font-medium inline-block min-w-[68px]">
            features
          </div>
        </div>
      </div>
      <div className="w-[171.3px] flex flex-row items-start justify-start py-4 px-5 box-border">
        <div className="relative uppercase font-medium inline-block min-w-[91px] whitespace-nowrap">
          package for
        </div>
      </div>
    </div>
  );
};

export default MetaDataHeader;
