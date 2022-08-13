import React from "react";

const Button = ({ icon, text, disabled,onClick }) => {
	return (
		<button 
		onClick={()=>{onClick("purchase",text)}}
			className="flex py-3 disabled:bg-[#C9C9C9] bg-[#1F9EFA] hover:opacity-90 leading-6 font-medium text-[20px]  max-w-[334px] w-full rounded-[10px] items-center gap-4 justify-center"
			disabled={disabled}
		>
			<span className="min-w-[20px] flex items-center justify-center">
				{icon}
			</span>
			{text}
		</button>
	);
};

export default Button;
