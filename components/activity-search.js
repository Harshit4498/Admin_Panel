const ActivitySearch = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[13px] pl-0 top-[0] z-[99] sticky gap-[20px]">
      <div className="w-[200px] rounded bg-light-solid-color-extra-card-background shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] flex flex-row items-start justify-start py-[1.5px] px-0 box-border">
        <div className="flex-1 rounded overflow-hidden flex flex-row items-start justify-start py-2 px-4 gap-[4px]">
          <input
            className="w-[calc(100%_-_50px)] [border:none] [outline:none] font-light-basic-typography-paragraph text-mini bg-[transparent] h-[21px] flex-1 relative leading-[21px] text-grey text-left flex items-center min-w-[88px] p-0"
            placeholder="Search"
            type="text"
          />
          <div className="h-[19.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/mingcutesearchline.svg"
            />
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[10.5px] px-4 bg-light-solid-color-extra-card-background h-10 rounded-md shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-start box-border gap-[6px] hover:bg-gainsboro-100">
        <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-grey text-left inline-block min-w-[40px]">
          Filter
        </div>
        <img
          className="h-[19px] w-[19px] relative overflow-hidden shrink-0 min-h-[19px]"
          alt=""
          src="/carbonfilter.svg"
        />
      </button>
    </div>
  );
};

export default ActivitySearch;
