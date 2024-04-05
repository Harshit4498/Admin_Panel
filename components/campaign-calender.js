import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent1 from "./frame-component1";
import FrameComponent from "./frame-component";

const CampaignCalender = () => {
  return (
    <div className="w-[1115px] rounded-[15.45px] bg-light-solid-color-extra-card-background shadow-[0px_0.8px_0.82px_rgba(0,_0,_0,_0.12)] flex flex-col items-start justify-start py-[28.96103858947754px] pr-[29px] pl-[28.96103858947754px] box-border max-w-full text-left text-mid-1 text-darkgray-100 font-inter mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border max-w-full [row-gap:20px] text-lg text-dark font-light-basic-typography-paragraph">
        <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[25.1px] font-semibold font-inherit inline-block min-w-[128px] max-w-full">
          Campaign Calendar
        </h3>
        <div className="flex flex-row items-center justify-start pt-0 pb-[26.1208438873291px] pr-0.5 pl-0 gap-[8.162764549255371px] text-light-grayscale-200 font-inter">
          <img
            className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0 object-contain min-h-[26px]"
            loading="lazy"
            alt=""
            src="/ioncaretforwardoutline.svg"
          />
          <b className="relative">May, 2022</b>
          <img
            className="h-[26.1px] w-[26.1px] relative overflow-hidden shrink-0 min-h-[26px]"
            alt=""
            src="/ioncaretforwardoutline-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[35.6px] bg-bg-light flex flex-row items-start justify-start">
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="SUN"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "6.530210971832275px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="MON"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="TUE"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="WED"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="THUR"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="FRI"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-9 flex-1 font-inter font-medium text-sm-1 text-darkgray-100"
          placeholder="SAT"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e8e8e8" },
            "& .MuiInputBase-root": {
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "0px 6.530210971832275px 0px 0px",
              fontSize: "13.1px",
            },
            "& .MuiInputBase-input": { color: "#969696" },
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1050:flex-wrap">
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">1</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">2</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">3</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">4</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">5</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">6</div>
        </div>
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between p-[9.795316696166992px] min-w-[149px] max-w-[152px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">7</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1050:flex-wrap">
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[11px] pl-[9.795316696166992px] min-w-[99px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">8</div>
          <div className="self-stretch flex flex-col items-start justify-start py-[1.6325527429580688px] pr-1.5 pl-[1.6325527429580688px] gap-[4.897658348083496px] text-xs-4 text-limegreen">
            <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_186,_52,_0.1),_rgba(0,_186,_52,_0.1)),_#fff] flex flex-col items-start justify-start py-[2.448829174041748px] pr-[3px] pl-[3.2651054859161377px]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative font-medium">Start</div>
              </div>
            </div>
            <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] px-[3.2651054859161377px] whitespace-nowrap text-dodgerblue">
              <div className="relative font-medium">Campaign Name</div>
            </div>
            <div className="flex flex-col items-start justify-start text-2xs-6 text-midnightblue font-light-basic-typography-paragraph">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[3.2651054859161377px]">
                  <div className="rounded-[3.27px] bg-lavender-200 flex flex-row items-center justify-start py-[4.0813822746276855px] pr-[5px] pl-[8.162764549255371px] gap-[5.713934421539307px] whitespace-nowrap">
                    <img
                      className="h-[10.6px] w-[10.6px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/solarfilelinear1.svg"
                    />
                    <div className="relative leading-[11.43px] font-semibold">
                      Related Discounts
                    </div>
                  </div>
                  <img
                    className="h-[13.1px] w-[13.1px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/phcrownfill.svg"
                  />
                </div>
                <div className="self-stretch h-[18px] relative text-3xs-8 leading-[17.96px] text-dark hidden overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
                  manhhachkt08@gmail.com
                </div>
              </div>
              <div className="self-stretch h-[18px] relative text-3xs-8 leading-[17.96px] text-dark hidden overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
                manhhachkt08@gmail.com
              </div>
            </div>
            <div className="w-[51px] rounded-[3.27px] [background:linear-gradient(rgba(255,_59,_59,_0.1),_rgba(255,_59,_59,_0.1)),_#fff] hidden flex-col items-start justify-start py-[2.448829174041748px] pr-[3px] pl-[3.2651054859161377px] box-border text-light-red-base">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch h-3.5 relative font-medium inline-block">
                  Red Tag
                </div>
              </div>
            </div>
            <div className="w-[72px] rounded-[3.27px] bg-light-grayscale-400 hidden flex-row items-start justify-start py-[2.448829174041748px] pr-1 pl-[3.2651054859161377px] box-border whitespace-nowrap text-light-grayscale-200">
              <div className="h-3.5 flex-1 relative font-medium inline-block whitespace-nowrap shrink-0">
                Regular Tag
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1 prop="9" />
        <FrameComponent1 prop="10" propBorderRadius="unset" />
        <FrameComponent1 prop="11" propBorderRadius="unset" />
        <FrameComponent1 prop="12" propBorderRadius="unset" />
        <FrameComponent1 prop="13" propBorderRadius="unset" />
        <FrameComponent1 prop="14" propBorderRadius="unset" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq1050:flex-wrap">
        <FrameComponent1 prop="15" propBorderRadius="unset" />
        <FrameComponent1 prop="16" propBorderRadius="unset" />
        <FrameComponent1 prop="17" propBorderRadius="unset" />
        <FrameComponent1 prop="18" propBorderRadius="unset" />
        <div className="flex-1 bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[11px] pl-[9.795316696166992px] min-w-[99px] min-h-[158px] shrink-0 border-[0.8px] border-solid border-light-grayscale-400 mq1050:min-h-[auto]">
          <div className="relative font-medium">19</div>
          <div className="self-stretch h-[22px]" />
          <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] pr-px pl-[3.2651054859161377px] whitespace-nowrap text-xs-4 text-dodgerblue">
            <div className="relative font-medium">Campaign Name</div>
          </div>
        </div>
        <FrameComponent1 prop="20" propBorderRadius="unset" />
        <div className="h-[158.82px] bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[45px] pl-[9.795316696166992px] text-xs-4 border-[0.8px] border-solid border-light-grayscale-400">
          <div className="relative text-mid-1 font-medium">21</div>
          <div className="flex flex-col items-start justify-start text-light-grayscale-400">
            <div className="relative font-medium">-</div>
          </div>
          <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] pr-px pl-[3.2651054859161377px] whitespace-nowrap text-dodgerblue">
            <div className="relative font-medium">Campaign Name</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center [row-gap:20px] lg:flex-wrap">
        <FrameComponent1 prop="22" propBorderRadius="unset" />
        <FrameComponent1 prop="23" propBorderRadius="unset" />
        <FrameComponent1 prop="24" propBorderRadius="unset" />
        <FrameComponent1 prop="25" propBorderRadius="unset" />
        <FrameComponent1 prop="26" propBorderRadius="unset" />
        <FrameComponent1 prop="27" propBorderRadius="unset" />
        <FrameComponent1 prop="28" propBorderRadius="0px 0px 6.53px 0px" />
      </div>
      <div className="w-[453px] flex flex-row items-start justify-center max-w-full [row-gap:20px] text-xs-4 text-dodgerblue mq450:flex-wrap">
        <FrameComponent prop="29" blueTag="Design" />
        <FrameComponent
          prop="30"
          blueTag="Development"
          propBorderRadius="unset"
          propBackground="linear-gradient(rgba(255, 150, 27, 0.1), rgba(255, 150, 27, 0.1)), #fff"
          propColor="#ff9f2d"
        />
        <div className="h-[158.82px] bg-light-solid-color-extra-card-background box-border flex flex-col items-start justify-between py-[9.795316696166992px] pr-[11px] pl-[9.795316696166992px] text-mid-1 text-darkgray-100 border-[0.8px] border-solid border-light-grayscale-400">
          <div className="relative font-medium">31</div>
          <div className="flex flex-col items-start justify-start py-[1.6325527429580688px] pr-1.5 pl-[1.6325527429580688px] gap-[4.897658348083496px] text-xs-4 text-light-grayscale-200">
            <div className="rounded-[3.27px] bg-light-grayscale-400 flex flex-row items-start justify-start py-[2.448829174041748px] pr-[3px] pl-[3.2651054859161377px]">
              <div className="relative font-medium whitespace-nowrap">End</div>
            </div>
            <div className="rounded-[3.27px] [background:linear-gradient(rgba(0,_133,_255,_0.1),_rgba(0,_133,_255,_0.1)),_#fff] flex flex-row items-start justify-start py-[2.448829174041748px] px-[3.2651054859161377px] whitespace-nowrap text-dodgerblue">
              <div className="relative font-medium">Campaign Name</div>
            </div>
            <div className="flex flex-col items-start justify-start text-2xs-6 text-midnightblue font-light-basic-typography-paragraph">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[3.2651054859161377px]">
                  <div className="rounded-[3.27px] bg-lavender-200 flex flex-row items-center justify-start py-[4.0813822746276855px] pr-[5px] pl-[8.162764549255371px] gap-[5.713934421539307px] whitespace-nowrap">
                    <img
                      className="h-[10.6px] w-[10.6px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/solarfilelinear-1.svg"
                    />
                    <div className="relative leading-[11.43px] font-semibold">
                      Related Discounts
                    </div>
                  </div>
                  <img
                    className="h-[13.1px] w-[13.1px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/phcrownfill.svg"
                  />
                </div>
                <div className="self-stretch h-[18px] relative text-3xs-8 leading-[17.96px] text-dark hidden overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
                  manhhachkt08@gmail.com
                </div>
              </div>
              <div className="self-stretch h-[18px] relative text-3xs-8 leading-[17.96px] text-dark hidden overflow-hidden text-ellipsis whitespace-nowrap z-[2]">
                manhhachkt08@gmail.com
              </div>
            </div>
            <div className="w-[51px] rounded-[3.27px] [background:linear-gradient(rgba(255,_59,_59,_0.1),_rgba(255,_59,_59,_0.1)),_#fff] hidden flex-col items-start justify-start py-[2.448829174041748px] pr-[3px] pl-[3.2651054859161377px] box-border text-light-red-base">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch h-3.5 relative font-medium inline-block">
                  Red Tag
                </div>
              </div>
            </div>
            <div className="w-[72px] rounded-[3.27px] bg-light-grayscale-400 hidden flex-row items-start justify-start py-[2.448829174041748px] pr-1 pl-[3.2651054859161377px] box-border whitespace-nowrap">
              <div className="h-3.5 flex-1 relative font-medium inline-block whitespace-nowrap shrink-0">
                Regular Tag
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCalender;
