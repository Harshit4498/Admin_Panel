import { useRouter } from "next/router";

const OctoberReport = () => {
  const router = useRouter();

  const onListContainerClick = () => {
    router.push("/");
  };

  const onListContainer1Click = () => {
    router.push("/user-management");
  };

  const onListContainer2Click = () => {
    router.push("/packages-and-coupons");
  };

  const onListContainer3Click = () => {
    // Please sync "Banners" to the project
  };

  const onListContainer4Click = () => {
    // Please sync "Manage Admins" to the project
  };

  const onListContainer5Click = () => {
    router.push("/manage-admins");
  };

  const onListContainer12Click = () => {
    router.push("/profile");
  };

  return (
    <div className="self-stretch flex flex-col items-center justify-start text-left text-mini text-grey font-light-basic-typography-paragraph">
      <div className="self-stretch rounded-md flex flex-row items-center justify-start py-[15px] px-[30px] text-2xs">
        <div className="relative leading-[14px]">MAIN MENU</div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3.5 pb-2 gap-[8px]">
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainerClick}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/smarthome.svg"
          />
          <div className="flex-1 relative leading-[22px]">Dashboard</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer1Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/users.svg"
          />
          <div className="flex-1 relative leading-[22px]">User Management</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <button className="cursor-pointer [border:none] py-[9px] px-4 bg-bg self-stretch rounded-md flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            alt=""
            src="/box1.svg"
          />
          <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-dark text-left">
            Subscribers Management
          </div>
          <div className="self-stretch w-[22px] rounded-xl bg-light-opacity-color-primary-primary-16 hidden flex-row items-center justify-center py-1 px-1.5 box-border">
            <div className="self-stretch w-[9px] relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-primary-primary-500-base text-center inline-block shrink-0">
              3
            </div>
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevrondown.svg"
          />
        </button>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer2Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/ticket.svg"
          />
          <div className="flex-1 relative leading-[22px]">
            Packages and Discounts
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <div
        className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-[30px] gap-[8px] cursor-pointer"
        onClick={onListContainer3Click}
      >
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/uilimagev1.svg"
        />
        <div className="flex-1 relative leading-[22px]">Banners</div>
        <img
          className="h-[18px] w-[18px] relative hidden"
          alt=""
          src="/chevronright.svg"
        />
      </div>
      <div className="self-stretch rounded-md flex flex-row items-end justify-start pt-[30px] px-[30px] pb-[15px] text-2xs">
        <div className="relative leading-[14px]">ADMIN</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-3.5 pb-2">
        <div
          className="flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer4Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/usercircle.svg"
          />
          <div className="flex-1 relative leading-[22px]">Manage Admins</div>
          <div className="self-stretch w-[22px] rounded-xl bg-light-opacity-color-primary-primary-16 hidden flex-row items-center justify-center py-1 px-1.5 box-border text-center text-smi text-light-solid-color-primary-primary-500-base">
            <div className="self-stretch w-[9px] relative leading-[14px] font-semibold inline-block shrink-0">
              4
            </div>
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-3.5 pb-2">
        <div
          className="flex-1 rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer5Click}
        >
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src="/humbleiconsactivity.svg"
          />
          <div className="flex-1 relative leading-[22px]">Activity Logs</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <div
        className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-[30px] gap-[8px] cursor-pointer"
        onClick={onListContainer12Click}
      >
        <img
          className="h-[22px] w-[22px] relative min-h-[22px]"
          loading="lazy"
          alt=""
          src="/settings.svg"
        />
        <div className="flex-1 relative leading-[22px]">Profile</div>
        <img
          className="h-[18px] w-[18px] relative hidden"
          alt=""
          src="/chevronright.svg"
        />
      </div>
    </div>
  );
};

export default OctoberReport;
