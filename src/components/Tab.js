import React from "react";
import ToggleUp from "./icons/ToggleUp";
import ToggleDown from "./icons/ToggleDown";
const Tab = ({ tab, isOpened, onClick, index }) => {
	return (
		<div className="max-w-[334px] w-full rounded-md py-[13px] px-[18px] bg-white ">
			<div className="flex w-full justify-between items-center ">
				<p className="max-w-[217px] font-normal text-black text-base ">
					{tab?.title}
				</p>
				<button
					className="cursor-pointer"
					onClick={() => {
						onClick(index);
					}}
				>
					{isOpened ? <ToggleUp /> : <ToggleDown />}
				</button>
			</div>
			{isOpened && (
				<div className=" mt-[26px] ">
					<div className="w-[98px] h-[1px] bg-[#1F9EFA]"></div>
					<p className="mt-[14px] text-sm leading-5 max-w-[302px] ">
						{tab?.content}
					</p>
				</div>
			)}
		</div>
	);
};

export default Tab;
