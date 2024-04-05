import TableRow11 from "./table-row1";

const SubscriptionTable = () => {
  return (
    <div className="w-[1128px] bg-bg-light box-border overflow-x-auto shrink-0 flex flex-col items-start justify-start pt-0 pb-6 pr-[60px] pl-6 max-w-full text-left text-sm text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100 mq750:pr-[30px] mq750:box-border">
      <div className="w-[1104px] h-[47px] box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-6 pl-4 text-smi text-grey border-b-[1px] border-solid border-lavender-100">
        <div className="w-[130.1px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
          <div className="relative uppercase font-medium">Type</div>
        </div>
        <div className="flex flex-row items-center justify-start py-4 pr-[43px] pl-5">
          <div className="relative uppercase font-medium">Start Date</div>
        </div>
        <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
          <div className="relative uppercase font-medium">End Date</div>
        </div>
        <div className="flex flex-row items-center justify-start py-4 pr-[29px] pl-5">
          <div className="relative uppercase font-medium">amount</div>
        </div>
        <div className="w-[108px] shrink-0 flex flex-row items-center justify-start py-4 pr-[27px] pl-5 box-border">
          <div className="flex-1 relative uppercase font-medium">Mode</div>
        </div>
        <button className="cursor-pointer [border:none] py-4 pr-2.5 pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left">
            reference id
          </div>
        </button>
        <div className="flex flex-row items-center justify-start py-4 pr-14 pl-5">
          <div className="relative uppercase font-medium">Status</div>
        </div>
        <button className="cursor-pointer [border:none] py-4 pr-[9px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left">
            Package Limit
          </div>
        </button>
        <div className="w-[130.1px] shrink-0 flex flex-row items-center justify-start py-4 pr-[11px] pl-5 box-border">
          <div className="flex-1 relative uppercase font-medium">
            Billing Detail
          </div>
        </div>
        <div className="self-stretch w-[154px] shrink-0 flex flex-row items-center justify-start py-4 pr-0 pl-[19px] box-border">
          <div className="self-stretch flex-1 relative uppercase font-medium">
            Subscription pack
          </div>
        </div>
      </div>
      <TableRow11 />
      <div className="w-[1344px] box-border flex flex-row items-center justify-start py-0 pr-[3px] pl-4 text-mini border-b-[1px] border-solid border-lavender-100">
        <div className="flex flex-row items-center justify-start py-[18px] pr-[54px] pl-5">
          <div className="relative leading-[22px]">Add-on</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5 text-sm">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5 text-sm">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] pr-[27px] pl-5">
          <div className="relative leading-[22px] whitespace-nowrap">
            $999.29
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 pr-[22px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left">
            RazorPay
          </div>
        </button>
        <div className="flex flex-row items-center justify-start py-[13px] pr-[58px] pl-5">
          <div className="relative leading-[22px]">#6548</div>
        </div>
        <div className="flex flex-row items-center justify-start py-4 pr-[37px] pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-silver rounded flex flex-row items-center justify-start gap-[10px] hover:bg-darkgray-200">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-grey text-left">
              Inactive
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright5@2x.png"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-14 pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-lavender-200 rounded flex flex-row items-center justify-start gap-[7px] hover:bg-lightsteelblue">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear11.svg"
            />
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-darkslateblue text-left">
              json
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-[45px] pl-5 text-smi text-deepskyblue">
          <div className="rounded bg-aliceblue flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-11.svg"
            />
            <div className="relative leading-[14px] font-semibold">json</div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright3@2x.png"
            />
          </div>
        </div>
        <div className="h-14 w-[138px] flex flex-row items-center justify-start py-4 pr-[57px] pl-5 box-border text-smi text-indianred-100">
          <div className="self-stretch flex-1 rounded bg-lightcoral-200 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-2.svg"
            />
            <div className="self-stretch flex-1 relative leading-[14px] font-semibold">
              json
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright4@2x.png"
            />
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/solarmenudotsbold-4.svg"
        />
      </div>
      <div className="w-[1344px] box-border flex flex-row items-center justify-start py-0 pr-[3px] pl-4 border-b-[1px] border-solid border-lavender-100">
        <button className="cursor-pointer [border:none] py-[18px] pr-[17px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left">
            Subscription
          </div>
        </button>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] pr-[27px] pl-5 text-mini">
          <div className="relative leading-[22px] whitespace-nowrap">
            $999.29
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 pr-[22px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left">
            RazorPay
          </div>
        </button>
        <div className="flex flex-row items-center justify-start py-[13px] pr-[58px] pl-5 text-mini">
          <div className="relative leading-[22px]">#6548</div>
        </div>
        <div className="flex flex-row items-center justify-start py-4 pr-[38px] pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-lightcoral-200 rounded flex flex-row items-center justify-start gap-[10px] hover:bg-indianred-200">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-indianred-100 text-left">
              Expired
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright5@2x.png"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-14 pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-lavender-200 rounded flex flex-row items-center justify-start gap-[7px] hover:bg-lightsteelblue">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear11.svg"
            />
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-darkslateblue text-left">
              json
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-[45px] pl-5 text-smi text-deepskyblue">
          <div className="rounded bg-aliceblue flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-11.svg"
            />
            <div className="relative leading-[14px] font-semibold">json</div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright3@2x.png"
            />
          </div>
        </div>
        <div className="h-14 w-[138px] flex flex-row items-center justify-start py-4 pr-[57px] pl-5 box-border text-smi text-indianred-100">
          <div className="self-stretch flex-1 rounded bg-lightcoral-200 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-2.svg"
            />
            <div className="self-stretch flex-1 relative leading-[14px] font-semibold">
              json
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright4@2x.png"
            />
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/solarmenudotsbold-4.svg"
        />
      </div>
      <div className="w-[1344px] box-border flex flex-row items-center justify-start py-0 pr-[3px] pl-4 border-b-[1px] border-solid border-lavender-100">
        <button className="cursor-pointer [border:none] py-[18px] pr-[17px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left">
            Subscription
          </div>
        </button>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start py-[18px] px-5">
          <div className="w-[150px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            October 25, 2019
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[18px] pr-[27px] pl-5 text-mini">
          <div className="relative leading-[22px] whitespace-nowrap">
            $999.29
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 pr-[22px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
          <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left">
            RazorPay
          </div>
        </button>
        <div className="flex flex-row items-center justify-start py-[13px] pr-[58px] pl-5 text-mini">
          <div className="relative leading-[22px]">#6548</div>
        </div>
        <div className="flex flex-row items-center justify-start py-4 pr-[23px] pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-gold-200 rounded flex flex-row items-center justify-start gap-[10px] hover:bg-goldenrod-200">
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-goldenrod-100 text-left">
              Upcoming
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright5@2x.png"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-14 pl-5">
          <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-lavender-200 rounded flex flex-row items-center justify-start gap-[7px] hover:bg-lightsteelblue">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear11.svg"
            />
            <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-darkslateblue text-left">
              json
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center justify-start py-[17px] pr-[45px] pl-5 text-smi text-deepskyblue">
          <div className="rounded bg-aliceblue flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-11.svg"
            />
            <div className="relative leading-[14px] font-semibold">json</div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright3@2x.png"
            />
          </div>
        </div>
        <div className="h-14 w-[138px] flex flex-row items-center justify-start py-4 pr-[57px] pl-5 box-border text-smi text-indianred-100">
          <div className="self-stretch flex-1 rounded bg-lightcoral-200 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[2px]">
            <img
              className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/solarfilelinear-2.svg"
            />
            <div className="self-stretch flex-1 relative leading-[14px] font-semibold">
              json
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/materialsymbolskeyboardarrowright4@2x.png"
            />
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/solarmenudotsbold-4.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[203px] flex flex-row items-start justify-start">
        <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] rounded-sm [background:linear-gradient(rgba(120,_121,_241,_0.13),_rgba(120,_121,_241,_0.13)),_#fff] flex flex-row items-center justify-center gap-[6px] whitespace-nowrap hover:bg-gainsboro-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icbaselineadd.svg"
          />
          <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-primary text-left">
            Add a Subscribtion
          </div>
        </button>
      </button>
    </div>
  );
};

export default SubscriptionTable;
