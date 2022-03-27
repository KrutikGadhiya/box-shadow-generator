import React, { useState } from "react";
import { Button, Checkbox, Input, Typography, Slider, Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const SideBarLeft = ({
	shadows,
	handleChange,
	handleShadowAdd,
	handleShadowRemove,
}) => {
	return (
		<>
			<div className="topbar">
				<Text className="title">Customize Shadow</Text>
				<Button type="primary" onClick={handleShadowAdd}>
					Add Shadow
				</Button>
			</div>
			<Collapse className="shadows" expandIconPosition="right">
				{shadows.map((shadw, i) => (
					<Collapse.Panel header={`shadow ${i + 1}`} key={i}>
						<div className="bools">
							<Checkbox
								name="isActive"
								checked={shadw.isActive}
								onChange={(e) => handleChange(i, "isActive", e.target.checked)}>
								Active
							</Checkbox>
							<Checkbox
								name="isInset"
								checked={shadw.isInset}
								onChange={(e) => handleChange(i, "isInset", e.target.checked)}>
								Inset
							</Checkbox>
							<Button
								className="deleteBtn"
								type="primary"
								onClick={() => handleShadowRemove(i)}
								danger
								icon={<DeleteOutlined />}
							/>
						</div>
						<div className="sliders">
							<Text className="textlabel">
								Horizontal Offset
								<span className="value">{shadw.horizontalOffset}</span>{" "}
							</Text>
							<Slider
								min={-100}
								max={100}
								name="horizontalOffset"
								value={shadw.horizontalOffset}
								onChange={(e) => handleChange(i, "horizontalOffset", e)}
								defaultValue={0}
								trackStyle={{ background: "transparent" }}
							/>
							<Text className="textlabel">
								Vertical Offset
								<span className="value">{shadw.verticalOffset}</span>{" "}
							</Text>
							<Slider
								min={-100}
								max={100}
								defaultValue={0}
								name="verticalOffset"
								value={shadw.verticalOffset}
								onChange={(e) => handleChange(i, "verticalOffset", e)}
								trackStyle={{ background: "transparent" }}
							/>
							<Text className="textlabel">
								Blur Radius
								<span className="value">{shadw.blurRadius}</span>{" "}
							</Text>
							<Slider
								min={0}
								max={100}
								defaultValue={0}
								name="blurRadius"
								value={shadw.blurRadius}
								onChange={(e) => handleChange(i, "blurRadius", e)}
								trackStyle={{ background: "transparent" }}
							/>
							<Text className="textlabel">
								Spread Radius
								<span className="value">{shadw.spreadRadius}</span>{" "}
							</Text>
							<Slider
								min={-100}
								max={100}
								defaultValue={0}
								name="spreadRadius"
								value={shadw.spreadRadius}
								onChange={(e) => handleChange(i, "spreadRadius", e)}
								trackStyle={{ background: "transparent" }}
							/>
							<Text className="textlabel">Color</Text>
							<Input
								name="color"
								value={shadw.color}
								onChange={(e) => handleChange(i, "color", e.target.value)}
								type={"color"}
							/>
						</div>
					</Collapse.Panel>
				))}
			</Collapse>
		</>
	);
};

export default SideBarLeft;
