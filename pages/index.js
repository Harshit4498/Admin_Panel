import Menu1 from "../components/menu";
import Navbar1 from "../components/navbar";
import ReportCard from "../components/report-card";
import PlatformSignup from "../components/platform-signup";
import PaymentMatrix from "../components/payment-matrix";
import CampaignCalender from "../components/campaign-calender";
import Admins from "../components/admins";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-bg-light overflow-hidden flex flex-row items-start justify-start py-0 pr-[22px] pl-0 box-border gap-[19px] tracking-[normal] mq1050:pl-[22px] mq1050:box-border">
      <Menu1 />
      <main className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-[calc(100%_-_293px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-base text-dark font-light-basic-typography-paragraph">
          <Navbar1 />
          <div className="self-stretch rounded bg-mediumseagreen-300 flex flex-row items-end justify-start py-0 px-2.5 relative">
            <div className="relative tracking-[-0.02em] leading-[26px]">
              New Year campaign coming up in 3 days.
            </div>
            <div className="!m-[0] absolute top-[1px] left-[289px] flex flex-row items-start justify-start py-[3px] px-2.5 z-[1]">
              <img
                className="h-[19.5px] w-[16.2px] relative object-contain"
                alt=""
                src="/table-cells.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq1050:flex-wrap">
            <ReportCard />
            <PlatformSignup />
          </div>
          <PaymentMatrix />
          <CampaignCalender />
          <Admins />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
