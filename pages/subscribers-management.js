import ZintlrLogo from "../components/zintlr-logo";
import OctoberReport from "../components/october-report";
import Navbar11 from "../components/navbar1";
import SubscribersInfo from "../components/subscribers-info";
import SubscriberSearchBar from "../components/subscriber-search-bar";
import TableHeaderRow from "../components/table-header-row";
import TableRow3 from "../components/table-row3";
import TableRow2 from "../components/table-row2";
import SubscriptionTable from "../components/subscription-table";
import SubscriptionFooter from "../components/subscription-footer";

const SubscribersManagement = () => {
  return (
    <div className="w-full relative bg-bg-light overflow-hidden flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[19px] tracking-[normal] mq1025:pl-5 mq1025:box-border">
      <div className="w-[274px] bg-light-solid-color-extra-card-background flex flex-col items-start justify-start pt-0 px-0 pb-[631px] box-border mq1025:hidden mq1025:pb-[410px] mq1025:box-border mq750:pb-[266px] mq750:box-border">
        <ZintlrLogo propDisplay="inline-block" zINTLRMargin="unset" />
        <OctoberReport />
      </div>
      <main className="h-[1106px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-2 pb-0 px-0 box-border relative gap-[23px] opacity-[0.9] mr-[-2px] pr-0.5 max-w-[calc(100%_-_293px)] text-left text-mini text-mediumslateblue font-light-basic-typography-paragraph mq1025:h-auto mq1025:max-w-full">
        <section className="w-[1128px] h-[952px] absolute !m-[0] right-[-2px] bottom-[-58px] rounded-2xl bg-light-solid-color-extra-card-background shrink-0" />
        <div className="w-[1128px] overflow-x-auto shrink-0 hidden flex-col items-start justify-start py-0 px-6 box-border max-w-full z-[1]">
          <div className="w-[1080px] flex-1 box-border overflow-x-auto flex flex-row items-center justify-start text-smi text-grey border-b-[1px] border-solid border-light-solid-color-extra-divider">
            <div className="self-stretch flex-[0.9544] flex flex-row items-center justify-start py-2 px-5 gap-[4px]">
              <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
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
              <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
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
              <div className="h-[15px] flex-1 relative uppercase font-medium inline-block">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
            <div className="w-[148.4px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
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
        <Navbar11 />
        <SubscribersInfo />
        <SubscriberSearchBar />
        <section className="mr-[-2px] mb-[-85px] self-stretch h-[971px] overflow-y-auto shrink-0 flex flex-col items-start justify-start max-w-full z-[1] mq1025:h-auto">
          <TableHeaderRow />
          <TableRow3
            done="Active"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright1@2x.png"
          />
          <TableRow3
            done="Inactive"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright2@2x.png"
            propBackgroundColor="unset"
            propBackgroundColor1="rgba(201, 201, 201, 0.16)"
            propColor="#8b909a"
          />
          <TableRow2
            done="Active"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright1@2x.png"
          />
          <TableRow2
            done="Active"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright1@2x.png"
            propBackgroundColor="#f2f4f6"
            propFlexWrap="wrap"
            propRowGap="20px"
            propHeight="unset"
            propOverflowX="unset"
            propFlex="1"
            propMinWidth="146px"
            propHeight1="unset"
            propAlignSelf="unset"
            propWidth="unset"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="unset"
            propHeight2="unset"
            propAlignSelf2="unset"
            propAlignSelf3="unset"
            propWidth1="unset"
            propHeight3="unset"
            propBackgroundColor1="rgba(40, 199, 111, 0.16)"
            propBorder="none"
            propHeight4="unset"
            propWidth2="unset"
            propColor="#28c76f"
            propAlignSelf4="unset"
            propFlex3="unset"
            propDisplay="inline-block"
            propHeight5="unset"
            propAlignSelf5="unset"
            propWidth3="unset"
            propAlignSelf6="unset"
            propFlex4="unset"
            propAlignSelf7="unset"
            propFlex5="unset"
          />
          <SubscriptionTable />
          <TableRow2
            done="Inactive"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright2@2x.png"
            propBackgroundColor="unset"
            propFlexWrap="wrap"
            propRowGap="20px"
            propHeight="unset"
            propOverflowX="unset"
            propFlex="1"
            propMinWidth="146px"
            propHeight1="unset"
            propAlignSelf="unset"
            propWidth="unset"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="unset"
            propHeight2="unset"
            propAlignSelf2="unset"
            propAlignSelf3="unset"
            propWidth1="unset"
            propHeight3="unset"
            propBackgroundColor1="rgba(201, 201, 201, 0.16)"
            propBorder="none"
            propHeight4="unset"
            propWidth2="unset"
            propColor="#8b909a"
            propAlignSelf4="unset"
            propFlex3="unset"
            propDisplay="inline-block"
            propHeight5="unset"
            propAlignSelf5="unset"
            propWidth3="unset"
            propAlignSelf6="unset"
            propFlex4="unset"
            propAlignSelf7="unset"
            propFlex5="unset"
          />
          <TableRow2
            done="Active"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright1@2x.png"
            propBackgroundColor="unset"
            propFlexWrap="wrap"
            propRowGap="20px"
            propHeight="unset"
            propOverflowX="unset"
            propFlex="1"
            propMinWidth="146px"
            propHeight1="unset"
            propAlignSelf="unset"
            propWidth="unset"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="unset"
            propHeight2="unset"
            propAlignSelf2="unset"
            propAlignSelf3="unset"
            propWidth1="unset"
            propHeight3="unset"
            propBackgroundColor1="rgba(40, 199, 111, 0.16)"
            propBorder="none"
            propHeight4="unset"
            propWidth2="unset"
            propColor="#28c76f"
            propAlignSelf4="unset"
            propFlex3="unset"
            propDisplay="inline-block"
            propHeight5="unset"
            propAlignSelf5="unset"
            propWidth3="unset"
            propAlignSelf6="unset"
            propFlex4="unset"
            propAlignSelf7="unset"
            propFlex5="unset"
          />
          <TableRow2
            done="Active"
            materialSymbolskeyboardAr="/materialsymbolskeyboardarrowright1@2x.png"
            propBackgroundColor="unset"
            propFlexWrap="unset"
            propRowGap="unset"
            propHeight="92px"
            propOverflowX="auto"
            propFlex="unset"
            propMinWidth="unset"
            propHeight1="67px"
            propAlignSelf="stretch"
            propWidth="105px"
            propFlex1="1"
            propAlignSelf1="stretch"
            propFlex2="1"
            propHeight2="22px"
            propAlignSelf2="stretch"
            propAlignSelf3="stretch"
            propWidth1="84px"
            propHeight3="22px"
            propBackgroundColor1="rgba(40, 199, 111, 0.16)"
            propBorder="unset"
            propHeight4="24px"
            propWidth2="59px"
            propColor="#28c76f"
            propAlignSelf4="stretch"
            propFlex3="1"
            propDisplay="inline-block"
            propHeight5="48px"
            propAlignSelf5="stretch"
            propWidth3="36px"
            propAlignSelf6="stretch"
            propFlex4="1"
            propAlignSelf7="stretch"
            propFlex5="1"
          />
          <SubscriptionFooter />
        </section>
      </main>
    </div>
  );
};

export default SubscribersManagement;
