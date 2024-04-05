const SearchBar = () => {
  return (
    <div className="w-[1117px] h-10 flex flex-row items-start justify-between top-[0] z-[99] sticky gap-[20px] max-w-full">
      <div className="w-[200px] rounded bg-light-solid-color-extra-card-background shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-center pt-px px-0 pb-0.5 box-border">
        <div className="flex-1 rounded overflow-hidden flex flex-row items-end justify-start py-2 px-4 gap-[4px]">
          <input
            className="w-[calc(100%_-_50px)] [border:none] [outline:none] font-light-basic-typography-paragraph text-mini bg-[transparent] h-[21px] flex-1 relative leading-[21px] text-grey text-left flex items-center min-w-[88px]"
            placeholder="Search"
            type="text"
          />
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src="/mingcutesearchline.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end gap-[10px]">
        <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] rounded-sm [background:linear-gradient(rgba(120,_121,_241,_0.13),_rgba(120,_121,_241,_0.13)),_#fff] flex flex-row items-center justify-center gap-[6px] whitespace-nowrap hover:bg-gainsboro-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icbaselineadd.svg"
          />
          <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-primary text-left">
            Add a User
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-light-solid-color-extra-card-background self-stretch rounded-md shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-4 gap-[6px]">
            <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-grey text-left">
              Filter
            </div>
            <img
              className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
              alt=""
              src="/carbonfilter.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
