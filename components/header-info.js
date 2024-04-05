const HeaderInfo = () => {
  const onNavItemContainerClick = () => {
    // Please sync "User Management" to the project
  };

  const onNavItemContainer1Click = () => {
    // Please sync "User Management" to the project
  };

  const onNavItemContainer2Click = () => {
    // Please sync "User Management" to the project
  };

  const onNavItemContainer3Click = () => {
    // Please sync "User Management" to the project
  };

  return (
    <nav className="m-0 self-stretch rounded-t-md rounded-b-none flex flex-row items-start justify-start [row-gap:20px] whitespace-nowrap text-left text-mini text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-light-solid-color-extra-divider mq675:flex-wrap">
      <button className="cursor-pointer [border:none] p-2 bg-[transparent] w-[85px] rounded-tl-md rounded-tr-none rounded-b-none box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[2px] border-solid border-primary hover:bg-slateblue">
        <div className="relative text-mini leading-[22px] font-semibold font-light-basic-typography-paragraph text-primary text-left">
          Active
        </div>
      </button>
      <div
        className="w-[95px] rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border cursor-pointer"
        onClick={onNavItemContainerClick}
      >
        <div className="relative leading-[22px]">Inactive</div>
      </div>
      <div
        className="rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-center justify-center py-2 pr-4 pl-5 cursor-pointer"
        onClick={onNavItemContainer1Click}
      >
        <div className="relative leading-[22px]">Verification Pending</div>
      </div>
      <div
        className="w-[97px] rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border cursor-pointer"
        onClick={onNavItemContainer2Click}
      >
        <div className="relative leading-[22px]">Blocked</div>
      </div>
      <div
        className="w-[124px] rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border cursor-pointer"
        onClick={onNavItemContainer3Click}
      >
        <div className="relative leading-[22px]">Deactivated</div>
      </div>
    </nav>
  );
};

export default HeaderInfo;
