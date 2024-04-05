import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const PageFooter = () => {
  return (
    <div className="w-[1128px] flex flex-row items-center justify-between py-[30px] px-10 box-border gap-[20px] z-[1] text-left text-sm text-darkslategray font-inter">
      <div className="flex flex-row items-center justify-start gap-[5px]">
        <div className="relative tracking-[0.05em] font-semibold">
          Rows per page:
        </div>
        <FormControl
          className="font-inter font-semibold text-sm text-darkslategray"
          variant="standard"
          sx={{
            borderRadius: "0px 0px 0px 0px",
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
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty />
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
            loading="lazy"
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
  );
};

export default PageFooter;
