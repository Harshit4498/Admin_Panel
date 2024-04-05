const AdminInfo = () => {
  return (
    <div className="w-[1128px] bg-whitesmoke-200 box-border flex flex-row items-center justify-start py-0 pr-[11px] pl-4 z-[1] text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100">
      <div className="flex flex-row items-center justify-start py-[13px] pr-[35px] pl-5">
        <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative leading-[22px] font-medium">
              Kailash Chaurasia
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/phcrownfill1.svg"
            />
          </div>
          <div className="w-[146px] relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
            vuhaithuongnute@gmail.com
          </div>
        </div>
      </div>
      <div className="w-[193px] flex flex-row items-center justify-start py-6 px-5 box-border">
        <div className="relative leading-[22px]">(225) 555-0118</div>
      </div>
      <div className="w-[156.5px] flex flex-row items-center justify-start p-5 box-border">
        <div className="w-[150px] flex flex-col items-start justify-start">
          <div className="relative leading-[22px] font-medium whitespace-nowrap">
            07:12
          </div>
          <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
            December 19, 2013
          </div>
        </div>
      </div>
      <div className="w-[150px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
        <div className="relative leading-[22px]">O-Auth</div>
      </div>
      <div className="w-[175px] flex flex-row items-center justify-start py-[13px] px-5 box-border">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative leading-[22px] font-medium">Self</div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/phcrownfill1.svg"
            />
          </div>
          <div className="w-[150px] h-[22px] relative text-xs leading-[22px] hidden items-center overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
            manhhachkt08@gmail.com
          </div>
        </div>
      </div>
      <div className="w-[157px] flex flex-row items-center justify-start py-[23px] px-5 box-border">
        <div className="w-[150px] flex flex-col items-start justify-start">
          <div className="relative leading-[22px] font-medium whitespace-nowrap">
            00:12
          </div>
          <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
            March 23, 2013
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start py-6 px-5 gap-[8px]">
        <img
          className="h-[22px] w-[22px] relative hidden"
          alt=""
          src="/trash1.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/down-2.svg"
        />
      </div>
    </div>
  );
};

export default AdminInfo;
