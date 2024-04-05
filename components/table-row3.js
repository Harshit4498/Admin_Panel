import { useState, useMemo } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TableRow3 = ({
  done,
  materialSymbolskeyboardAr,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
}) => {
  const [tableCellDateTimePickerValue, setTableCellDateTimePickerValue] =
    useState(new Date("2019-10-25"));
  const tableRow1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const reportStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const done1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-11 pl-4 [row-gap:20px] text-left text-mini text-dark font-light-basic-typography-paragraph border-b-[1px] border-solid border-lavender-100 mq1125:pr-[22px] mq1125:box-border"
        style={tableRow1Style}
      >
        <div className="flex-1 flex flex-row items-center justify-start py-[13px] pr-[55px] pl-5 box-border min-w-[146px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[22px] font-medium">
                Vikas Tiwari
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/phcrownfill1.svg"
              />
            </div>
            <div className="w-[150px] relative text-xs leading-[22px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px]">
              danghoang87hl@gmail.com
            </div>
          </div>
        </div>
        <div className="w-[191px] flex flex-row items-center justify-start py-6 px-5 box-border">
          <div className="relative leading-[22px]">
            <p className="m-0">Annual Plus</p>
            <p className="m-0">#35647464</p>
          </div>
        </div>
        <div className="w-[214px]">
          <DatePicker
            value={tableCellDateTimePickerValue}
            onChange={(newValue) => {
              setTableCellDateTimePickerValue(newValue);
            }}
            sx={{
              fieldset: {
                borderColor: "#dbdade",
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                borderLeftWidth: 0,
              },
              "&:hover": {
                fieldset: { borderColor: "#dbdade" },
                ".MuiOutlinedInput-notchedOutline": { borderColor: "#dbdade" },
              },
              "& input::placeholder": { textColor: "#23272e", fontSize: 14 },
              input: {
                color: "#23272e",
                fontSize: 14,
                textAlign: "left",
                fontWeight: "400",
              },
              "& .MuiInputBase-root": {
                height: 62,
                gap: "8px",
                flexDirection: { flexDirection: "row" },
              },
            }}
            slotProps={{
              textField: {
                size: "medium",
                fullWidth: false,
                required: false,
                autoFocus: false,
                error: false,
                color: "primary",
              },
              openPickerIcon: {
                component: () => <></>,
              },
            }}
          />
        </div>
        <div className="w-[199px] flex flex-row items-center justify-start py-[19px] px-5 box-border">
          <button
            className="cursor-pointer [border:none] py-[5px] px-2.5 bg-mediumseagreen-300 rounded flex flex-row items-center justify-start gap-[10px] hover:bg-mediumseagreen-200"
            style={reportStyle}
          >
            <div
              className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-paragraph text-light-solid-color-success-success-500-base text-left"
              style={done1Style}
            >
              {done}
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src={materialSymbolskeyboardAr}
            />
          </button>
        </div>
        <div className="w-[175px] flex flex-row items-center justify-start py-[13px] px-5 box-border">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[22px] whitespace-nowrap">
                $154
              </div>
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
        <div className="w-16 flex flex-row items-center justify-start py-6 px-5 box-border gap-[8px]">
          <img
            className="h-[22px] w-[22px] relative hidden"
            alt=""
            src="/trash1.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/down.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
            loading="lazy"
            alt=""
            src="/solarmenudotsbold@2x.png"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TableRow3;
