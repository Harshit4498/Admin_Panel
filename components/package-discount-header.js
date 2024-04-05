import { useRouter } from "next/router";

const PackageDiscountHeader = () => {
  const router = useRouter();

  const onNavItemContainerClick = () => {
    router.push("/packages-and-coupons1");
  };

  return (
    <section className="self-stretch flex flex-col items-end justify-start py-0 pr-[18px] pl-0 gap-[16px] text-left text-mini text-grey font-light-basic-typography-paragraph">
      <div className="self-stretch rounded-t-md rounded-b-none flex flex-row items-start justify-start [row-gap:20px] border-b-[1px] border-solid border-light-solid-color-extra-divider mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-2 px-5 bg-[transparent] rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start border-b-[2px] border-solid border-primary hover:bg-slateblue">
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-primary text-left inline-block min-w-[69px]">
            Packages
          </div>
        </button>
        <div
          className="rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-start justify-start py-2 px-5 cursor-pointer"
          onClick={onNavItemContainerClick}
        >
          <div className="relative leading-[22px] inline-block min-w-[69px]">
            Discounts
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] h-10 rounded-sm [background:linear-gradient(rgba(120,_121,_241,_0.13),_rgba(120,_121,_241,_0.13)),_#fff] flex flex-row items-start justify-start box-border gap-[6px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icbaselineadd.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-primary text-left inline-block min-w-[110px]">
            Add a Package
          </div>
        </div>
      </button>
    </section>
  );
};

export default PackageDiscountHeader;
