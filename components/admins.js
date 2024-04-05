import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const Admins = () => {
  return (
    <div className="self-stretch rounded-2xl bg-light-solid-color-extra-card-background flex flex-col items-start justify-start p-5 box-border gap-[10px] max-w-full text-left text-lg text-dark font-light-basic-typography-paragraph">
      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[26px] font-semibold font-inherit">
        Admins
      </h3>
      <div className="w-[1083px] bg-light-solid-color-extra-card-background overflow-x-auto flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border max-w-full text-mini">
        <div className="w-[1059px] box-border overflow-x-auto flex flex-row items-start justify-start py-0 pr-6 pl-4 text-smi text-grey border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">name</div>
          </div>
          <div className="w-[280px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">Email</div>
          </div>
          <div className="w-[191px] shrink-0 flex flex-row items-center justify-start py-4 px-5 box-border">
            <div className="relative uppercase font-medium">Last Usage</div>
          </div>
          <div className="flex flex-row items-center justify-start py-4 pr-[25px] pl-5">
            <div className="relative uppercase font-medium">
              No. of Sessions
            </div>
          </div>
          <div className="h-12 w-[62px] shrink-0 flex flex-row items-center justify-start py-[13px] px-5 box-border">
            <img
              className="h-[22px] w-[22px] relative hidden"
              alt=""
              src="/trash.svg"
            />
          </div>
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Amardeep Singh
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                bill.sanders@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            loading="lazy"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Hillery Moses
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                nathan.roberts@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Bhavna Goyal
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                kenzi.lawson@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Mohd Hadi
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                tim.jennings@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Sunil Bhadouriya
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[210px] relative leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
                dolores.chambers@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Lalita Thakur
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                debbie.baker@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] box-border flex flex-row items-center justify-start py-0 pr-[39px] pl-4 border-b-[1px] border-solid border-lavender-100">
          <div className="w-[260px] flex flex-row items-center justify-start py-2.5 px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                Kailash Chaurasia
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2.5 pr-12 pl-5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
                curtis.weaver@example.com
              </div>
            </div>
          </div>
          <div className="w-[191px] flex flex-row items-center justify-start py-[21px] pr-[21px] pl-5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="relative leading-[22px] font-medium whitespace-nowrap">
                00:36
              </div>
              <div className="self-stretch relative text-xs leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
                November 7, 2017
              </div>
            </div>
          </div>
          <div className="w-[165px] flex flex-row items-center justify-start py-[21px] px-5 box-border">
            <div className="w-[150px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[22px] font-medium">
                22,234
              </div>
            </div>
          </div>
          <img
            className="h-14 w-[110px] object-contain"
            alt=""
            src="/table-cell@2x.png"
          />
        </div>
        <div className="w-[1059px] flex flex-row items-center justify-between py-[30px] px-10 box-border gap-[20px] text-sm text-darkslategray font-inter">
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
                    src="/polygon-3-1.svg"
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
    </div>
  );
};

export default Admins;
