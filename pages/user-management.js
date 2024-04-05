import ZintlrLogo from "../components/zintlr-logo";
import { useRouter } from "next/router";
import HeaderInfo from "../components/header-info";
import SearchBar from "../components/search-bar";
import ManagementBody from "../components/management-body";

const UserManagement = () => {
  const router = useRouter();

  const onListContainerClick = () => {
    router.push("/");
  };

  const onListContainer2Click = () => {
    router.push("/subscribers-management");
  };

  const onListContainer3Click = () => {
    router.push("/packages-and-coupons");
  };

  const onListContainer4Click = () => {

  };

  const onListContainer5Click = () => {
    
  };

  const onListContainer1Click = () => {
    router.push("/manage-admins");
  };

  const onListContainer6Click = () => {
    router.push("/profile");
  };

  const onBackgroundClick = () => {
    router.push("/profile");
  };

  return (
    <form className="m-0 w-full relative bg-bg-light overflow-hidden flex flex-row items-start justify-start pt-0 pb-[34px] pr-[18px] pl-0 box-border gap-[19px] tracking-[normal] mq825:pl-[19px] mq825:pr-[19px] mq825:box-border">
      <div className="w-[274px] bg-light-solid-color-extra-card-background flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border mq825:hidden">
        <ZintlrLogo />
        <div className="self-stretch rounded-md flex flex-row items-center justify-start py-[15px] px-[30px]">
          <div className="relative text-2xs leading-[14px] font-light-basic-typography-paragraph text-grey text-left">
            MAIN MENU
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5 gap-[8px]">
          <div
            className="rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainerClick}
          >
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/smarthome.svg"
            />
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Dashboard
            </div>
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="self-stretch rounded-md bg-bg flex flex-row items-start justify-start py-[9px] px-4 gap-[8px]">
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              alt=""
              src="/users1.svg"
            />
            <div className="flex-1 relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-dark text-left">
              User Management
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
          </div>
          <div
            className="rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainer2Click}
          >
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/box.svg"
            />
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Subscribers Management
            </div>
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div
            className="rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainer3Click}
          >
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/ticket.svg"
            />
            <div className="relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Packages and Discounts
            </div>
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div
            className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainer4Click}
          >
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/uilimagev1.svg"
            />
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Banners
            </div>
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-md flex flex-row items-end justify-start pt-[30px] px-[30px] pb-[15px]">
          <div className="relative text-2xs leading-[14px] font-light-basic-typography-paragraph text-grey text-left">
            ADMIN
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3.5 pb-2 gap-[8px]">
          <div
            className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainer5Click}
          >
            <img
              className="h-[22px] w-[22px] relative min-h-[22px]"
              loading="lazy"
              alt=""
              src="/usercircle.svg"
            />
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Manage Admins
            </div>
            <div className="self-stretch w-[22px] rounded-xl bg-light-opacity-color-primary-primary-16 hidden flex-row items-center justify-center py-1 px-1.5 box-border">
              <div className="self-stretch w-[9px] relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-primary-primary-500-base text-center inline-block shrink-0">
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
            className="self-stretch rounded-md flex flex-row items-center justify-start py-[9px] px-4 gap-[8px] cursor-pointer"
            onClick={onListContainer1Click}
          >
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/humbleiconsactivity.svg"
            />
            <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
              Activity Logs
            </div>
            <img
              className="h-[18px] w-[18px] relative hidden"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[9px] px-[30px] gap-[8px] cursor-pointer"
          onClick={onListContainer6Click}
        >
          <img
            className="h-[22px] w-[22px] relative min-h-[22px]"
            loading="lazy"
            alt=""
            src="/settings.svg"
          />
          <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-paragraph text-grey text-left">
            Profile
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/chevronright.svg"
          />
        </div>
      </div>
      <div className="h-[396px] w-[1128px] overflow-x-auto shrink-0 hidden flex-col items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="w-[1080px] flex-1 box-border overflow-x-auto flex flex-row items-center justify-start border-b-[1px] border-solid border-light-solid-color-extra-divider">
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-2 px-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left inline-block">
              ID
            </div>
            <div className="hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/fichevronup.svg"
              />
              <img
                className="w-[18px] h-[18px] relative mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="w-[148px] shrink-0 hidden flex-row items-center justify-start py-2 px-5 box-border gap-[30px]">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/trendingup.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left inline-block">
              Issued Date
            </div>
            <div className="hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-2 px-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left inline-block">
              Total
            </div>
            <div className="hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="self-stretch flex-1 relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left">
              ACTIONS
            </div>
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[140px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5">
            <div className="self-stretch w-[97px] relative text-mini leading-[22px] font-light-basic-typography-paragraph text-dark text-left inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative text-mini leading-[22px] font-light-basic-typography-paragraph text-mediumslateblue text-left">
              View Detail
            </div>
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/mail.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/eye.svg"
            />
            <img
              className="h-[22px] w-[22px] relative hidden min-h-[22px]"
              alt=""
              src="/dotsvertical.svg"
            />
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-[calc(100%_-_293px)] mq825:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[24px] max-w-full">
            <div className="self-stretch rounded-md shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row flex-wrap items-center justify-start py-3 px-0 box-border gap-[0px_24px] max-w-full">
              <img
                className="h-[26px] w-[26px] relative hidden"
                alt=""
                src="/search.svg"
              />
              <h2 className="m-0 flex-1 relative text-5xl leading-[22px] font-semibold font-light-basic-typography-paragraph text-dark text-left inline-block min-w-[163px] max-w-full mq450:text-lgi mq450:leading-[18px]">
                User Management
              </h2>
              <div className="h-[26px] w-[26px] relative rounded-81xl overflow-hidden shrink-0 hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#a8aaae]" />
                  <div className="absolute h-[80.38%] w-[80.38%] top-[9.62%] right-[10%] bottom-[10%] left-[9.62%] rounded-81xl" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <img
                className="h-[26px] w-[26px] relative object-cover hidden"
                alt=""
                src="/moonstars11@2x.png"
              />
              <img
                className="h-[26px] w-[26px] relative object-cover hidden"
                alt=""
                src="/layoutgridadd1@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[19px]">
                <div className="w-[19px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-px pl-0 box-border">
                  <div className="self-stretch h-[18px] relative">
                    <div className="absolute top-[0.3px] left-[-0.3px] rounded-[50%] bg-light-solid-color-danger-danger-500-base w-full h-full z-[1]" />
                    <div className="absolute top-[2px] left-[5px] flex flex-row items-start justify-start">
                      <img
                        className="h-[26px] w-[26px] absolute !m-[0] bottom-[-14px] left-[-18.6px]"
                        loading="lazy"
                        alt=""
                        src="/bell.svg"
                      />
                      <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-extra-card-background text-center z-[2]">
                        4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-0 px-0 pb-px relative">
                  <div className="h-[37px] flex flex-row items-start justify-end pt-0 px-0 pb-0 box-border">
                    <div className="mt-[-1px] h-[38px] w-[38px] relative rounded-81xl overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <div
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0] cursor-pointer"
                          onClick={onBackgroundClick}
                        />
                        <div className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl z-[1]" />
                      </div>
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                    </div>
                  </div>
                  <div className="w-2 h-2 absolute !m-[0] right-[-1.8px] bottom-[-2.7px] rounded-[50%] bg-light-solid-color-success-success-500-base box-border z-[3] border-[0px] border-solid border-light-solid-color-extra-card-background" />
                </div>
              </div>
            </div>
            <HeaderInfo />
            <SearchBar />
          </div>
          <ManagementBody />
        </section>
      </main>
    </form>
  );
};

export default UserManagement;
