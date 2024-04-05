import Menu5 from "../components/menu5";
import Navbar2 from "../components/navbar2";
import ActivitySearch from "../components/activity-search";
import ActivutyHeader from "../components/activuty-header";
import ActivityRow from "../components/activity-row";
import ActivityFooter from "../components/activity-footer";

const ManageAdmins = () => {
  return (
    <div className="w-full relative bg-bg-light overflow-hidden flex flex-row items-start justify-start py-0 pr-[18px] pl-0 box-border gap-[19px] tracking-[normal] text-left text-mini text-mediumslateblue font-light-basic-typography-paragraph mq1050:pl-[19px] mq1050:pr-[19px] mq1050:box-border">
      <Menu5 />
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
          <div className="h-12 w-[148px] shrink-0 hidden flex-row items-center justify-start py-2 px-5 box-border gap-[30px]">
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
      <main className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-[calc(100%_-_293px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <Navbar2 />
          <ActivitySearch />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 rounded-2xl bg-light-solid-color-extra-card-background flex flex-row items-start justify-start pt-2 px-0 pb-9 box-border max-w-full lg:pt-5 lg:pb-[23px] lg:box-border mq1050:pb-5 mq1050:box-border">
              <div className="h-[1666px] w-[1128px] relative rounded-2xl bg-light-solid-color-extra-card-background hidden max-w-full" />
              <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start max-w-full z-[1]">
                <ActivutyHeader />
                <ActivityRow
                  devideMilkingGroupForBett="Devide milking group for better hierarchy"
                  low="Low"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Stabilise feeding pattern"
                  low="High"
                  propBackgroundColor="#ffeeee"
                  propColor="#e35454"
                  propMinWidth="30px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Change bedding for all cows"
                  low="Medium"
                  propBackgroundColor="#d8f3ff"
                  propColor="#0fb7ff"
                  propMinWidth="50px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="High"
                  propBackgroundColor="#ffeeee"
                  propColor="#e35454"
                  propMinWidth="30px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Change bedding for all cows"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Stabilise feeding pattern"
                  low="Medium"
                  propBackgroundColor="#d8f3ff"
                  propColor="#0fb7ff"
                  propMinWidth="50px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Devide milking group for better hierarchy"
                  low="Medium"
                  propBackgroundColor="#d8f3ff"
                  propColor="#0fb7ff"
                  propMinWidth="50px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Adjust concentrates to behaviour and stage"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="High"
                  propBackgroundColor="#ffeeee"
                  propColor="#e35454"
                  propMinWidth="30px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Stabilise feeding pattern"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Devide milking group for better hierarchy"
                  low="Medium"
                  propBackgroundColor="#d8f3ff"
                  propColor="#0fb7ff"
                  propMinWidth="50px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Adjust concentrates to behaviour and stage"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="High"
                  propBackgroundColor="#ffeeee"
                  propColor="#e35454"
                  propMinWidth="30px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Change bedding for all cows"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Push feed after milking"
                  low="High"
                  propBackgroundColor="#ffeeee"
                  propColor="#e35454"
                  propMinWidth="30px"
                />
                <ActivityRow
                  devideMilkingGroupForBett="Change bedding for all cows"
                  low="Low"
                  propBackgroundColor="#dcf6e8"
                  propColor="#28c76f"
                  propMinWidth="25px"
                />
                <ActivityFooter />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageAdmins;
