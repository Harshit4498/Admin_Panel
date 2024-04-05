const ActivityFooter = () => {
  return (
    <div className="w-[1128px] flex flex-row items-center justify-between py-[30px] px-10 box-border gap-[20px] z-[9] text-left text-sm text-darkslategray font-inter">
      <div className="flex flex-row items-center justify-start gap-[5px]">
        <div className="relative tracking-[0.05em] font-semibold inline-block min-w-[114px]">
          Rows per page:
        </div>
        <select className="h-[21px] rounded-6xs bg-light-solid-color-extra-card-background [border:none] flex flex-row items-center justify-start py-0.5 px-1 box-border font-inter font-semibold text-sm text-darkslategray" />
      </div>
      <div className="flex flex-row items-center justify-start gap-[19px]">
        <div className="relative tracking-[0.05em] font-semibold">
          1-10 of 432 Results
        </div>
        <div className="h-[17px] flex flex-row items-start justify-start gap-[20px]">
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

export default ActivityFooter;
