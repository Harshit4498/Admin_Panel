import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const PlatformSignup = () => {
  return (
    <div className="w-[457px] rounded-2xl bg-light-solid-color-extra-card-background flex flex-col items-center justify-start pt-6 pb-9 pr-6 pl-[23px] box-border gap-[51px] min-w-[457px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph mq450:gap-[25px_51px] mq750:pt-5 mq750:pb-[23px] mq750:box-border mq750:min-w-full mq1050:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px_32px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[26px] font-semibold font-inherit inline-block max-w-[calc(100%_-_22px)]">
            Platform Signups
          </h3>
          <img
            className="h-[22px] w-[22px] relative"
            alt=""
            src="/dotsvertical1.svg"
          />
        </div>
        <div className="w-[400px] flex flex-row items-start justify-between max-w-full gap-[20px] text-13xl mq450:flex-wrap">
          <b className="w-[111px] relative tracking-[-0.02em] leading-[32px] inline-block shrink-0 mq450:text-lgi mq450:leading-[19px] mq1050:text-7xl mq1050:leading-[26px]">
            16.5K
          </b>
          <div className="w-[161px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-sm text-mediumseagreen-100">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/materialsymbolsarrowdownwardrounded@2x.png"
                />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  6%
                </div>
              </div>
              <FormControl
                className="h-[41px] flex-1 font-light-basic-typography-paragraph font-medium text-sm text-grey"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#f3f5f8",
                  borderRadius: "0px 0px 0px 0px",
                  width: "68.94409937888199%",
                  height: "41px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#8b909a",
                    fontSize: 14,
                    fontWeight: "Medium",
                    fontFamily: "Public Sans",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "10px",
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
                      width="21px"
                      height="21px"
                      src="/iconparkdown-1.svg"
                      style={{ marginRight: "10px" }}
                    />
                  )}
                >
                  <MenuItem>vs last day</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full text-center text-smi text-grey">
        <div className="flex-1 flex flex-row items-start justify-start gap-[19px] max-w-full mq450:flex-wrap">
          <div className="flex flex-col items-end justify-start gap-[23px]">
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">
              50k
            </div>
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              40k
            </div>
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              30k
            </div>
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              20k
            </div>
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              10k
            </div>
            <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              0k
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[232px] max-w-full">
            <div className="w-[263px] flex flex-row items-center justify-start gap-[1px]">
              <div className="h-[173px] flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <img
                className="h-[225px] w-px relative"
                alt=""
                src="/vector-7.svg"
              />
            </div>
            <div className="self-stretch h-[30px] box-border flex flex-row items-end justify-between pt-0 px-0 pb-0 gap-[20px] border-t-[1px] border-solid border-light-solid-color-extra-divider">
              <div className="flex flex-col items-start justify-start py-0 pr-[17px] pl-0">
                <div className="relative leading-[20px]">12am</div>
              </div>
              <div className="w-[46px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
                <div className="relative leading-[20px]">8am</div>
              </div>
              <div className="mt-[-1px] flex flex-row items-start justify-start gap-[14px]">
                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                  <div className="relative leading-[20px]">4pm</div>
                </div>
                <div className="h-1 w-1 relative rounded-[50%] bg-lightcoral-100 z-[1]" />
              </div>
              <div className="relative leading-[20px]">11pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSignup;
