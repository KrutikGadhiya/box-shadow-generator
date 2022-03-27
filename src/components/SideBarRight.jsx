import React, { useState } from "react";
import { Input, Slider, Typography } from "antd";

const { Text } = Typography;

const SideBarRight = ({ porperties, handleChange }) => {
	return (
		<>
			<div className="topbar">
				<Text className="title">Box Properties</Text>
			</div>
			<div className="sliders">
				<Text className="textlabel">Background Color</Text>
				<Input
					className="color"
					name="bgColor"
					value={porperties.bgColor}
					onChange={(e) => handleChange("bgColor", e.target.value)}
					type={"color"}
				/>
				<Text className="textlabel">Border Color</Text>
				<Input
					className="color"
					name="borderColor"
					value={porperties.borderColor}
					onChange={(e) => handleChange("borderColor", e.target.value)}
					type={"color"}
				/>
				<Text className="textlabel">
					Border Radius
					<span className="value">{porperties.borderRadius}rem</span>
				</Text>
				<Slider
					min={0}
					max={25}
					name="borderRadius"
					value={porperties.borderRadius}
					onChange={(e) => handleChange("borderRadius", e)}
					trackStyle={{ background: "transparent" }}
				/>
				<Text className="textlabel">
					Height
					<span className="value">{porperties.height}rem</span>
				</Text>
				<Slider
					min={0}
					max={50}
					name="height"
					value={porperties.height}
					onChange={(e) => handleChange("height", e)}
					trackStyle={{ background: "transparent" }}
				/>
				<Text className="textlabel">
					Width
					<span className="value">{porperties.width}rem</span>
				</Text>
				<Slider
					min={0}
					max={50}
					name="width"
					value={porperties.width}
					onChange={(e) => handleChange("width", e)}
					trackStyle={{ background: "transparent" }}
				/>
			</div>
		</>
	);
};

export default SideBarRight;
