import PersonalInfo from "./personal-info";
import TechnicalInfo from "./technical-info";

const UserInfo = () => {
  return (
    <div className="w-[1128px] rounded-2xl bg-bg-light flex flex-row items-start justify-start pt-6 pb-[29px] pr-[26px] pl-10 box-border gap-[24px] z-[1] text-left text-lg text-dark font-light-basic-typography-paragraph">
      <div className="h-48 w-[1128px] relative rounded-2xl bg-bg-light hidden max-w-full" />
      <PersonalInfo />
      <div className="h-[139px] w-px relative box-border z-[1] border-r-[1px] border-solid border-light-solid-color-extra-divider" />
      <TechnicalInfo />
    </div>
  );
};

export default UserInfo;
