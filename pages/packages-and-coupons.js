import { useRouter } from "next/router";
import Menu2 from "../components/menu2";
import FrameComponent2 from "../components/frame-component2";
import PackageDiscountHeader from "../components/package-discount-header";
import TableDropDownData from "../components/table-drop-down-data";
import TableHeader from "../components/table-header";
import TableData from "../components/table-data";
import TableRow4 from "../components/table-row4";
import PackageFooter from "../components/package-footer";

const PackagesAndCoupons = () => {
  const router = useRouter();

  const onBackgroundClick = () => {
    router.push("/profile");
  };

  return (
    <div className="w-full relative bg-bg-light overflow-hidden flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[19px] tracking-[normal] text-left text-mini text-mediumslateblue font-light-basic-typography-paragraph mq1050:pl-[19px] mq1050:pr-[19px] mq1050:box-border">
      <Menu2 />
      <div className="h-[396px] w-[1128px] overflow-x-auto shrink-0 hidden flex-col items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="w-[1080px] flex-1 box-border overflow-x-auto flex flex-row items-center justify-start text-smi text-grey border-b-[1px] border-solid border-light-solid-color-extra-divider">
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-2 px-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
              ID
            </div>
            <div className="h-8 hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/fichevronup.svg"
              />
              <img
                className="w-[18px] h-[18px] relative z-[2] mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="h-12 w-[216px] shrink-0 hidden flex-row items-center justify-start py-2 px-5 box-border gap-[30px]">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/trendingup.svg"
            />
            <div className="h-8 flex flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative z-[2] mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
              Issued Date
            </div>
            <div className="h-8 hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative z-[2] mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-2 px-5 gap-[4px]">
            <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
              Total
            </div>
            <div className="h-8 hidden flex-col items-start justify-start">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/fichevronup-1.svg"
              />
              <img
                className="w-[18px] h-[18px] relative z-[2] mt-[-4px]"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-[16.5px] px-5">
            <div className="self-stretch flex-1 relative uppercase font-medium">
              ACTIONS
            </div>
          </div>
        </div>
        <div className="w-[1080px] flex-1 flex flex-row items-center justify-start py-0.5 px-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 pr-2.5 pl-5">
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <input
              className="m-0 h-[30px] w-[30px] rounded-11xl"
              type="checkbox"
            />
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
            <div className="self-stretch w-[70px] relative leading-[22px] inline-block shrink-0">
              #5089
            </div>
          </div>
          <div className="w-[216px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
            <div className="h-[30px] w-[30px] rounded-11xl bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-center p-1 box-border">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/circlecheck.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[140px] relative leading-[22px] inline-block shrink-0">
              31 March 2023
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 text-dark">
            <div className="self-stretch w-[97px] relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
              $1200
            </div>
          </div>
          <div className="self-stretch flex-[0.9583] flex flex-row items-center justify-start py-4 px-5 gap-[16px]">
            <div className="self-stretch relative leading-[22px]">
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
      <main className="flex-1 flex flex-col items-start justify-start gap-[22.5px] max-w-[calc(100%_-_293px)] mq1050:max-w-full">
        <FrameComponent2
          moonStars="/moonstars1@2x.png"
          layoutGridAdd="/layoutgridadd1@2x.png"
          onBackgroundClick={onBackgroundClick}
        />
        <PackageDiscountHeader />
        <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
          <form className="m-0 h-[1424px] flex-1 relative max-w-full mq1050:h-auto mq1050:min-h-[1424]">
            <TableDropDownData />
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-light-solid-color-extra-card-background w-[1128px] flex flex-col items-start justify-start pt-[7px] pb-[13.5px] pr-0 pl-4 box-border gap-[784px] max-w-full">
              <div className="self-stretch h-[1356.5px] relative rounded-2xl bg-light-solid-color-extra-card-background hidden" />
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <TableHeader />
                <TableData days="15 Days" />
                <TableRow4 durationOptions="7 Days" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <TableRow4
                  durationOptions="30 Days"
                  propBackgroundColor="unset"
                  propMinWidth="57px"
                />
                <TableData days="90 Days" propMinWidth="57px" />
                <TableData days="180 Days" propMinWidth="63px" />
                <TableRow4
                  durationOptions="Infinite"
                  propBackgroundColor="unset"
                  propMinWidth="50px"
                />
              </div>
            </div>
            <PackageFooter />
          </form>
        </section>
      </main>
    </div>
  );
};

export default PackagesAndCoupons;
