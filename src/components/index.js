import React, { useState, useEffect } from "react";
import BirdLogo from "./icons/BirdLogo";
import PricingCard from "./PricingCard";
import validator from "validator";

import CardIcon from "./icons/CardIcon";
import CryptoIcon from "./icons/cryptoIcon";
import SupportIcon from "./icons/SupportIcon";
import StripeIcon from "./icons/StripeIcon";

import Tab from "./Tab";
import TabsData from "../data/TabsData.json";


import Button from "./Button";
import useAnalyticsEventTracker from "../utils/useAnalyticsEventTracker";

const Index = () => {
	const gaEventTracker = useAnalyticsEventTracker('Live Support');
	

	const [Tabs, setTabs] = React.useState([true, false, false, false]);
	const [value, setValue] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const onClick = (index) => {
		
		const newTabs = [...Tabs];
		const array = newTabs.map((item, i) => {
			if (i === index) {
				gaEventTracker('FAQ',TabsData[i].title);
				return !item;
			}
			return false;
		});
		// newTabs[index] = !newTabs[index];

		setTabs(array);
	};

	useEffect(() => {
		
		setIsValidEmail(validator.isEmail(value));
	}, [value]);
	return (
		<>
			<main className="min-w-screen  h-full bg-[#F1F7FF]">
				<div className="mx-auto pb-24 max-w-[540px] w-full">
					<div className="max-w-[334px] pl-[10px] pt-[57px] w-full mx-auto ">
						<div className="flex items-center ">
							<BirdLogo />
							<p className="text-[20px] leading-[60px] f-lato">Verbyo</p>
						</div>
						<h1 className="font-black text-[28px] leading-[37px] ">
							PREMIUM UPGRADE
						</h1>
					</div>
					<p className="max-w-[320px] leading-[22px] mt-4 mx-auto">
						This is a text that later will be updated with the correct text
						before launching.
					</p>
					<div className="bg-[#E2EDFB] px-4 rounded-t-[20px] w-full relative top-[100px]">
						<PricingCard
							value={value}
							isValidEmail={isValidEmail}
							setValue={setValue}
						/>
						<div
							className={`pb-4 ${
								isValidEmail ? "text-white" : "text-black"
							} flex flex-col items-center justify-center relative bottom-14 gap-4 mx-auto`}
						>
							<Button
							    onClick={gaEventTracker}
								disabled={!isValidEmail}
								icon={<CardIcon />}
								text={"Pay with card"}
							/>
							<div className="ml-64 block ">
								<StripeIcon />
							</div>
							<Button
							    onClick={gaEventTracker}

								disabled={!isValidEmail}
								icon={<CryptoIcon />}
								text={"Pay with crypto"}
							/>
							<div className="ml-64 block ">
								<img src="./coin.png" width={76} alt="Coin Icon" />
							</div>
							<span className="text-xs  text-black">
								You will be redirected to merchant page.
							</span>
						</div>
						<div className="flex flex-col gap-5 items-center justify-center ">
						<h3 className="text-[20px] font-medium f-rubik leading-6" >FAQ's</h3> 
							{TabsData?.map((tab, index) => {
								return (
									<Tab
										isOpened={Tabs[index]}
										onClick={onClick}
										tab={tab}
										index={index}
										key={index}
									/>
								);
							})}
						</div>
						<div className="text-white flex flex-col w-full items-center pb-6 justify-center pt-[58px]">
							<a
								href="https://t.me/@id"
								target={"_blank"}
								rel="noreferrer"
								className="w-full max-w-[334px] mx-auto"
							>
								<Button icon={<SupportIcon />} text={"Live Support"} />
							</a>
							<span className="text-xs  text-black mt-5">
								You can contact us, using your Telegram.
							</span>
							<span className="text-xs  mt-[400px] text-black ">
								Copyright: 2019 Verbyo LLC
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Index;
