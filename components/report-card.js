import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const ReportCard = () => {
  return (
    <div className="flex-1 rounded-2xl bg-light-solid-color-extra-card-background flex flex-col items-center justify-start pt-0 px-0 pb-[23px] box-border gap-[31px] min-w-[420px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph mq750:gap-[15px_31px] mq750:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-start pt-6 px-6 pb-0 box-border max-w-full [row-gap:20px] mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[374px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[2px] max-w-full mq750:flex-wrap">
            <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[26px] font-semibold font-inherit inline-block min-w-[50px] max-w-full">
              Reports
            </h3>
            <FormControl
              className="h-[41px] w-[85px] font-light-basic-typography-paragraph font-medium text-sm text-grey"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#f3f5f8",
                borderRadius: "0px 0px 0px 0px",
                width: "85px",
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
                    src="/iconparkdown.svg"
                    style={{ marginRight: "10px" }}
                  />
                )}
              >
                <MenuItem>Yearly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <img
          className="h-[22px] w-[22px] relative"
          alt=""
          src="/dotsvertical1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[45px] pl-6 box-border max-w-full text-5xl mq750:pr-[22px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px_46px]">
          <div className="w-[380px] flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
            <div className="flex-1 [background:linear-gradient(180deg,_rgba(15,_96,_255,_0),_rgba(15,_96,_255,_0.04))] box-border flex flex-col items-start justify-start py-[15px] px-2 gap-[8px] min-w-[78px] border-b-[3px] border-solid border-mediumslateblue">
              <b className="relative leading-[22px] mq450:text-lgi mq450:leading-[18px]">
                24k
              </b>
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey">
                Yearly Revenue
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col items-center justify-start py-[15px] px-2 gap-[8px] min-w-[78px] border-b-[1px] border-solid border-lavender-100">
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative leading-[22px] mq450:text-lgi mq450:leading-[18px]">
                  4k
                </b>
              </div>
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey">
                Monthly Revenue
              </div>
            </div>
            <div className="w-[100px] box-border flex flex-col items-start justify-start py-[15px] px-2 gap-[8px] border-b-[1px] border-solid border-lavender-100">
              <b className="relative leading-[22px] mq450:text-lgi mq450:leading-[18px]">
                3.5M
              </b>
              <div className="relative text-smi tracking-[-0.02em] leading-[18px] font-medium text-grey">
                Users
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full text-center text-smi">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-end justify-start gap-[16px]">
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
                <div className="h-[203px] flex-1 relative min-w-[340px] min-h-[203px] flex items-center justify-center">
                  <img
                    className="h-full flex-1 max-w-full overflow-hidden min-w-[340px] min-h-[203px] object-contain absolute left-[6px] top-[0px] w-full [transform:scale(1.023)] mq750:min-w-full"
                    loading="lazy"
                    alt=""
                    src="/chart.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[10px] max-w-full">
                <div className="self-stretch h-0 flex flex-row items-center justify-end max-w-full">
                  <div className="h-px w-[507px] relative box-border max-w-[calc(100%_-_0px)] border-t-[1px] border-solid border-light-solid-color-extra-divider" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border gap-[19.90909090909091px] max-w-full mq750:flex-wrap">
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jan
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Feb
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Mar
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Apr
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    May
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Jun
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:w-full mq750:h-[17px]">
                    Jul
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Aug
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Sept
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Oct
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Nov
                  </div>
                  <div className="relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Dec
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
