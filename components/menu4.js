import { useRouter } from "next/router";

const Menu4 = () => {
  const router = useRouter();

  const onListContainerClick = () => {
    router.push("/");
  };

  const onListContainer1Click = () => {
    router.push("/user-management");
  };

  const onListContainer2Click = () => {
    router.push("/subscribers-management");
  };

  const onListContainer3Click = () => {
    router.push("/packages-and-coupons");
  };

  const onListContainer4Click = () => {
    // Please sync "Banners" to the project
  };

  const onListContainer5Click = () => {
    // Please sync "Manage Admins" to the project
  };

  const onListContainer12Click = () => {
    router.push("/manage-admins");
  };

  return (
    <div className="h-[1191px] w-[274px] bg-light-solid-color-extra-card-background flex flex-col items-start justify-start pt-0 px-0 pb-[630.6000000000004px] box-border text-left text-mini text-grey font-light-basic-typography-paragraph mq950:hidden mq700:pb-[266px] mq700:box-border mq975:pb-[410px] mq975:box-border">
      <div className="self-stretch h-[133.4px] flex flex-col items-start justify-start text-xl text-iris-100 font-inter">
        <div className="self-stretch flex-1 flex flex-row items-end justify-between py-[30px] pr-3.5 pl-[18px] shrink-0 [debug_commit:f6aba90]">
          <div className="self-stretch w-[99.2px] flex flex-row items-start justify-start">
            <img
              className="h-[29.4px] w-[29.4px] relative object-cover shrink-0 [debug_commit:f6aba90] z-[1]"
              loading="lazy"
              alt=""
              src="/microsoftteamsimage-2-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.3999999999996362px] px-0 pb-0 ml-[-1.2px]">
              <div className="self-stretch relative font-medium [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.15)] shrink-0 [debug_commit:f6aba90] mq450:text-base">
                ZINTLR
              </div>
            </div>
          </div>
          <div className="h-[26.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.6999999999989086px] box-border">
            <img
              className="w-6 h-6 relative"
              loading="lazy"
              alt=""
              src="/indentdecrease.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-md flex flex-row items-start justify-start py-[15px] px-[30px] shrink-0 [debug_commit:f6aba90] text-2xs text-grey font-light-basic-typography-paragraph">
          <div className="relative leading-[14px] inline-block min-w-[65px]">
            MAIN MENU
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3.5 gap-[8px]">
        <div
          className="flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainerClick}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/smarthome.svg"
          />
          <div className="relative leading-[22px]">Dashboard</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          className="flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer1Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/users.svg"
          />
          <div className="relative leading-[22px]">User Management</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          className="flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer2Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/box.svg"
          />
          <div className="relative leading-[22px]">Subscribers Management</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          className="flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer3Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/ticket.svg"
          />
          <div className="relative leading-[22px]">Packages and Discounts</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
          onClick={onListContainer4Click}
        >
          <div className="h-[21px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/uilimagev1.svg"
            />
          </div>
          <div className="flex-1 relative leading-[22px]">Banners</div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[155px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border text-2xs">
        <div className="self-stretch rounded-md flex flex-row items-start justify-start pt-[30px] px-[30px] pb-[15px]">
          <div className="relative leading-[14px] inline-block min-w-[37px]">
            ADMIN
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-3.5 text-mini">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div
              className="self-stretch flex-1 rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
              onClick={onListContainer5Click}
            >
              <img
                className="h-[22px] w-[22px] relative min-h-[22px]"
                loading="lazy"
                alt=""
                src="/usercircle.svg"
              />
              <div className="flex-1 relative leading-[22px]">
                Manage Admins
              </div>
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
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
              onClick={onListContainer12Click}
            >
              <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/humbleiconsactivity.svg"
                />
              </div>
              <div className="flex-1 relative leading-[22px]">
                Activity Logs
              </div>
              <img
                className="h-[18px] w-[18px] relative hidden"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-10 flex flex-row items-start justify-start py-0 px-3.5 box-border text-dark">
        <div className="self-stretch flex-1 rounded-md bg-bg flex flex-row items-start justify-start py-[9px] px-4 gap-[8px]">
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            alt=""
            src="/settings1.svg"
          />
          <div className="flex-1 relative leading-[22px] font-semibold">
            Profile
          </div>
          <div className="self-stretch w-[22px] rounded-xl bg-light-opacity-color-primary-primary-16 hidden flex-row items-center justify-center py-1 px-1.5 box-border text-center text-smi text-light-solid-color-primary-primary-500-base">
            <div className="self-stretch w-[9px] relative leading-[14px] font-semibold inline-block shrink-0">
              3
            </div>
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu4;
