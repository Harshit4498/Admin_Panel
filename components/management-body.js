import AdminInfo from "./admin-info";
import UserInfo from "./user-info";
import FinanceInfo from "./finance-info";
import PageFooter from "./page-footer";

const ManagementBody = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-left text-mini text-dark font-light-basic-typography-paragraph">
      <div className="flex-1 rounded-2xl bg-light-solid-color-extra-card-background overflow-x-auto flex flex-col items-start justify-start pt-2 px-0 pb-px box-border max-w-full">
        <div className="w-[1128px] h-[1068px] relative rounded-2xl bg-light-solid-color-extra-card-background hidden" />
        <div className="w-[1128px] box-border overflow-x-auto flex flex-row items-start justify-start py-0 pr-px pl-4 z-[1] text-smi text-grey border-b-[1px] border-solid border-lavender-100">
          <div className="w-[206px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">Name</div>
          </div>
          <div className="w-48 shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">Phone</div>
          </div>
          <button className="cursor-pointer [border:none] py-4 pr-[45px] pl-5 bg-[transparent] flex flex-row items-center justify-start">
            <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left">
              Joining Date
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-4 pr-4 pl-5 bg-[transparent] flex flex-row items-center justify-center">
            <div className="relative text-smi uppercase font-medium font-light-basic-typography-paragraph text-grey text-left">
              Authentication
            </div>
          </button>
          <div className="w-[175px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">Manager</div>
          </div>
          <div className="flex flex-row items-center justify-start py-4 pr-[59px] pl-5">
            <div className="relative uppercase font-medium">Last Access</div>
          </div>
          <div className="h-12 w-[62px] shrink-0 flex flex-row items-center justify-start py-[13px] px-5 box-border">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash.svg"
            />
          </div>
        </div>
        <div className="w-[1128px] box-border flex flex-row items-center justify-start py-0 pr-[11px] pl-4 z-[1] border-b-[1px] border-solid border-lavender-100">
          <div className="flex flex-row items-center justify-start py-[13px] pr-[35px] pl-5">
            <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Nandan Raikwar
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="w-32 relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                binhan628@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[193px] flex flex-row items-center justify-start py-6 px-5 box-border">
            <div className="relative leading-[22px]">(704) 555-0127</div>
          </div>
          <div className="w-[156.5px] flex flex-row items-center justify-start p-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                05:12
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[150px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
            <div className="relative leading-[22px]">
              <p className="m-0">O-Auth</p>
              <p className="m-0">Google</p>
            </div>
          </div>
          <div className="w-[175px] flex flex-row items-center justify-start py-[13px] px-5 box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">Self</div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="w-[150px] h-[22px] relative text-xs leading-[22px] hidden items-center overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
                manhhachkt08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[157px] flex flex-row items-center justify-start py-[23px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:05
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                May 29, 2017
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-6 px-5 gap-[8px]">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/down.svg"
            />
          </div>
        </div>
        <div className="w-[1128px] box-border flex flex-row items-center justify-start py-0 pr-[11px] pl-4 z-[1] border-b-[1px] border-solid border-lavender-100">
          <div className="flex-1 flex flex-row items-center justify-start py-[13px] pr-[35px] pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Amardeep Singh
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                manhhachkt08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[193px] flex flex-row items-center justify-start py-6 px-5 box-border">
            <div className="relative leading-[22px]">(209) 555-0104</div>
          </div>
          <div className="w-[156.5px] flex flex-row items-center justify-start p-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                12:34
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                October 24, 2018
              </div>
            </div>
          </div>
          <div className="w-[150px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
            <div className="relative leading-[22px]">
              <p className="m-0">O-Auth</p>
              <p className="m-0">Microsoft</p>
            </div>
          </div>
          <div className="w-[175px] flex flex-row items-center justify-start py-[13px] pr-[5px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Lalita Thakur
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                manhhachkt08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[157px] flex flex-row items-center justify-start py-[23px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                01:17
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                December 19, 2013
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-6 px-5 gap-[8px]">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/down.svg"
            />
          </div>
        </div>
        <AdminInfo />
        <UserInfo />
        <FinanceInfo />
        <div className="w-[1128px] box-border flex flex-row items-center justify-start py-0 pr-[11px] pl-4 z-[1] border-b-[1px] border-solid border-lavender-100">
          <div className="flex flex-row items-center justify-start py-[13px] pr-[35px] pl-5">
            <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Nandan Raikwar
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="w-32 relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                binhan628@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[193px] flex flex-row items-center justify-start py-6 px-5 box-border">
            <div className="relative leading-[22px]">(704) 555-0127</div>
          </div>
          <div className="w-[156.5px] flex flex-row items-center justify-start p-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                05:12
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[150px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
            <div className="relative leading-[22px]">
              <p className="m-0">O-Auth</p>
              <p className="m-0">Google</p>
            </div>
          </div>
          <div className="w-[175px] flex flex-row items-center justify-start py-[13px] pr-[5px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Amardeep Singh
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                manhhachkt08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[157px] flex flex-row items-center justify-start py-[23px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:05
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                May 29, 2017
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-6 px-5 gap-[8px]">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/down.svg"
            />
          </div>
        </div>
        <div className="w-[1128px] box-border flex flex-row items-center justify-start py-0 pr-[11px] pl-4 z-[1] border-b-[1px] border-solid border-lavender-100">
          <div className="flex-1 flex flex-row items-center justify-start py-[13px] pr-[35px] pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Kumar Raikwar
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
              <div className="w-32 relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                binhan628@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[193px] flex flex-row items-center justify-start py-6 px-5 box-border">
            <div className="relative leading-[22px]">(704) 555-0127</div>
          </div>
          <div className="w-[156.5px] flex flex-row items-center justify-start p-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                05:12
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[150px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
            <div className="relative leading-[22px]">
              <p className="m-0">O-Auth</p>
              <p className="m-0">Microsoft</p>
            </div>
          </div>
          <div className="w-[175px] flex flex-row items-center justify-start py-[13px] pr-[5px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Amardeep Singh
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/phcrownfill1.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                manhhachkt08@gmail.com
              </div>
            </div>
          </div>
          <div className="w-[157px] flex flex-row items-center justify-start py-[23px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:05
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                May 29, 2017
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-6 px-5 gap-[8px]">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/down.svg"
            />
          </div>
        </div>
        <PageFooter />
      </div>
    </footer>
  );
};

export default ManagementBody;
