import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const RecentPayments = () => {
  return (
    <div className="flex-1 rounded-2xl bg-light-solid-color-extra-card-background flex flex-col items-start justify-start min-w-[552px] min-h-[479px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph mq750:min-w-full mq1050:min-h-[auto]">
      <div className="self-stretch flex flex-row items-start justify-start pt-6 px-6 pb-0 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[313px] max-w-full">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[26px] font-semibold font-inherit">
            Recent Payments
          </h3>
        </div>
        <img
          className="h-[22px] w-[22px] relative"
          alt=""
          src="/dotsvertical1.svg"
        />
      </div>
      <div className="self-stretch h-[372px] flex flex-col items-start justify-start p-6 box-border gap-[18px] text-mini mq450:pt-5 mq450:pb-5 mq450:box-border mq750:h-auto">
        <div className="self-stretch bg-whitesmoke-100 flex flex-row items-center justify-start [row-gap:20px] shrink-0 text-smi text-grey border-b-[1px] border-solid border-light-solid-color-extra-divider mq750:flex-wrap">
          <div className="h-12 w-[146px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[4px]">
            <div className="flex-1 relative uppercase font-medium">ID</div>
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
          <div className="h-12 w-[235px] flex flex-row items-center justify-start py-2 pr-[9px] pl-5 box-border gap-[4px]">
            <div className="flex-1 relative uppercase font-medium">
              Customer
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
          <div className="w-[146px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border">
            <div className="flex-1 relative uppercase font-medium">Amount</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-2 px-4 gap-[32px] shrink-0 mq750:flex-wrap mq750:gap-[32px_16px]">
          <div className="w-[116px] relative leading-[22px] font-semibold flex items-center shrink-0">
            #6548
          </div>
          <div className="w-[204px] flex flex-col items-start justify-start">
            <div className="w-[150px] relative leading-[22px] font-medium inline-block">
              Török Melinda
            </div>
            <a
              className="w-[142px] relative text-xs leading-[22px] text-[inherit] flex items-center overflow-hidden text-ellipsis whitespace-nowrap [text-decoration:none] mt-[-3px]"
              href="mailto:jackson.graham@example.com"
              target="_blank"
            >
              felicia.reid@example.com
            </a>
          </div>
          <div className="w-[87px] relative leading-[22px] font-medium flex items-center min-w-[47px] whitespace-nowrap">
            $999.29
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-2 px-4 gap-[32px] shrink-0 mq750:flex-wrap mq750:gap-[32px_16px]">
          <div className="w-[116px] relative leading-[22px] font-semibold flex items-center shrink-0">
            #6548
          </div>
          <div className="w-[204px] flex flex-col items-start justify-start">
            <div className="w-[150px] relative leading-[22px] font-medium inline-block">
              Török Melinda
            </div>
            <a
              className="w-[142px] relative text-xs leading-[22px] text-[inherit] flex items-center overflow-hidden text-ellipsis whitespace-nowrap [text-decoration:none] mt-[-3px]"
              href="mailto:jackson.graham@example.com"
              target="_blank"
            >
              felicia.reid@example.com
            </a>
          </div>
          <div className="w-[87px] relative leading-[22px] font-medium flex items-center min-w-[39px] whitespace-nowrap">
            $72.40
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-2 px-4 gap-[32px] shrink-0 mq750:flex-wrap mq750:gap-[32px_16px]">
          <div className="w-[116px] relative leading-[22px] font-semibold flex items-center shrink-0">
            #6548
          </div>
          <div className="w-[204px] flex flex-col items-start justify-start">
            <div className="w-[150px] relative leading-[22px] font-medium inline-block">
              Török Melinda
            </div>
            <a
              className="w-[142px] relative text-xs leading-[22px] text-[inherit] flex items-center overflow-hidden text-ellipsis whitespace-nowrap [text-decoration:none] mt-[-3px]"
              href="mailto:jackson.graham@example.com"
              target="_blank"
            >
              felicia.reid@example.com
            </a>
          </div>
          <div className="w-[87px] relative leading-[22px] font-medium flex items-center min-w-[40px] whitespace-nowrap">
            $99.90
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-2 px-4 gap-[32px] shrink-0 mq750:flex-wrap mq750:gap-[32px_16px]">
          <div className="w-[116px] relative leading-[22px] font-semibold flex items-center shrink-0">
            #6548
          </div>
          <div className="w-[204px] flex flex-col items-start justify-start">
            <div className="w-[150px] relative leading-[22px] font-medium inline-block">
              Török Melinda
            </div>
            <a
              className="w-[142px] relative text-xs leading-[22px] text-[inherit] flex items-center overflow-hidden text-ellipsis whitespace-nowrap [text-decoration:none] mt-[-3px]"
              href="mailto:jackson.graham@example.com"
              target="_blank"
            >
              felicia.reid@example.com
            </a>
          </div>
          <div className="w-[87px] relative leading-[22px] font-medium flex items-center min-w-[47px] whitespace-nowrap">
            $249.99
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-2.5 px-10 gap-[20px] text-sm text-darkslategray font-inter mq750:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <div className="relative tracking-[0.05em] font-semibold">
            Rows per page:
          </div>
          <FormControl
            className="h-[21px] w-[43px] font-inter font-semibold text-sm text-darkslategray"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "7px",
              width: "43px",
              height: "21px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "21px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "21px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "21px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "21px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#2a373f",
                fontSize: 14,
                fontWeight: "Semi Bold",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "4px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="8px"
                  height="5px"
                  src="/polygon-3.svg"
                  style={{ marginRight: "4px" }}
                />
              )}
            >
              <MenuItem>15</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="flex flex-row items-center justify-start gap-[19px]">
          <div className="relative tracking-[0.05em] font-semibold">
            1-10 of 432 Results
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-[17px] w-[11px] relative min-h-[17px]"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="h-[17px] w-[11px] relative object-contain min-h-[17px]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPayments;
