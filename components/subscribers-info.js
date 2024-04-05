const SubscribersInfo = () => {
  const onNavItemContainerClick = () => {
    // Please sync "Subscribers Management" to the project
  };

  const onNavItemContainer1Click = () => {
    // Please sync "Subscribers Management" to the project
  };

  return (
    <nav className="m-0 self-stretch rounded-t-md rounded-b-none flex flex-row items-center justify-start [row-gap:20px] shrink-0 whitespace-nowrap text-left text-mini text-grey font-light-basic-typography-paragraph border-b-[1px] border-solid border-light-solid-color-extra-divider mq450:flex-wrap">
      <button className="cursor-pointer [border:none] py-2 px-[7px] bg-[transparent] w-[113px] rounded-tl-md rounded-tr-none rounded-b-none box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[2px] border-solid border-primary hover:bg-slateblue">
        <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-paragraph text-primary text-left">
          Recurring
        </div>
      </button>
      <div
        className="rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-center justify-center py-2 pr-[17px] pl-5 cursor-pointer"
        onClick={onNavItemContainerClick}
      >
        <div className="relative tracking-[0.43px] font-medium">
          Non Recurring
        </div>
      </div>
      <div
        className="rounded-tl-md rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-center justify-center py-2 pr-[17px] pl-5 cursor-pointer"
        onClick={onNavItemContainer1Click}
      >
        <div className="relative leading-[22px]">B2B APIs</div>
      </div>
    </nav>
  );
};

export default SubscribersInfo;
