import RecentPayments from "./recent-payments";
import ConsumptionMatrix from "./consumption-matrix";

const PaymentMatrix = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph mq1050:flex-wrap">
      <RecentPayments />
      <ConsumptionMatrix />
    </div>
  );
};

export default PaymentMatrix;
