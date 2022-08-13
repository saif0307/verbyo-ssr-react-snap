import React from "react";
import PricingBadge from "./icons/PricingBadge";
import Checkmark from "./icons/Checkmark";
import PercentOff from "./icons/PercentOff";

const PricingCard = ({ value, isValidEmail, setValue }) => {
	return (
		<div className="max-w-[334px] mx-auto flex  flex-col justify-center w-full relative bottom-[70px]   rounded-[10px]">
			<div className="flex justify-between">
				<h2 className="absolute top-[14px] left-[28px] text-[#1F9EFA] tracking-[2px]">
					LIMITED TIME
				</h2>
				<div className="absolute top-0 right-0">
					<PricingBadge />
				</div>
			</div>
			<div className="pl-[27px] rounded-[10px] pt-3 bg-white">
				<div className="flex pt-[30px] items-center gap-3">
					<h1 className="font-black  text-[30px] leading-[40px]">100,000 Rp</h1>
					<span className="text-lg font-medium mt-1 leading-6 text-[#A49E9E]">
						/ lifetime
					</span>
				</div>
				<div className="flex flex-col gap-3 mt-7 relative z-10 pb-[50px]">
					<div className="flex gap-2 mt- items-center">
						<Checkmark />
						<p className=" font-normal leading-4">Better paid offers</p>
					</div>
					<div className="flex gap-2 mt- items-center">
						<Checkmark />
						<p className=" font-normal leading-4">10,000 Social Points Gift</p>
					</div>
					<div className="flex gap-2 mt- items-center">
						<Checkmark />
						<p className=" font-normal leading-4">Exclusive Raffles</p>
					</div>
					<div className="flex gap-2 mt- items-center">
						<Checkmark />
						<p className=" font-normal leading-4">Live Support Priority</p>
					</div>
				</div>
			</div>
			<div className="ml-[20px] relative bottom-2">
				<PercentOff />
			</div>
			<div className="px-[27px] rounded-[10px] pb-11 bg-white relative bottom-4">
				<h1 className="mt-8 leading-6 text-[20px] font-medium tracking-[1px]">
					Email address
				</h1>
				<p className="text-sm text-[#636161] leading-5 tracking-[1px] mt-3">
					Enter your email address that you used to SignUp with Verbyo.
				</p>
				<input
					value={value}
					placeholder="Enter your email"
					onChange={(e) => {
						setValue(e.target.value);
					}}
					className="border-b mt-9 border-[#707070] w-full pb-1 outline-none"
				/>
				<span
					className={`${value ? "block" : "invisible"} ${
						isValidEmail ? "text-[#1EE510]" : " text-[#F81515]"
					} mt-2`}
				>
					{isValidEmail ? "email looks valid" : "email looks invalid"}
				</span>
			</div>
		</div>
	);
};

export default PricingCard;
