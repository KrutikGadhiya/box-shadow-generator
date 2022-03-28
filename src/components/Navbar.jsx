import React, { useState } from "react";
import { Button, Modal, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const Navbar = ({ boxShadow }) => {
	const [isVisible, setIsVisible] = useState(false);
	const handleClose = () => {
		setIsVisible(false);
	};
	const handleOpen = () => {
		setIsVisible(true);
	};

	return (
		<>
			<Text className="title">Box Shadow Generator</Text>
			<div>
				<a
					href="https://github.com/KrutikGadhiya/box-shadow-generator"
					className="link"
					target="_blank">
					<GithubOutlined />
				</a>
				<Button onClick={handleOpen} className="btn" type="primary">
					Show Code
				</Button>
			</div>
			<Modal
				title="Generated Styles"
				visible={isVisible}
				onCancel={handleClose}
				footer={
					<Button type="primary" onClick={handleClose}>
						Close
					</Button>
				}>
				<Paragraph>This is the Generated CSS code.</Paragraph>
				<Paragraph className="code" copyable code>
					box-shadow: {boxShadow};
				</Paragraph>
			</Modal>
		</>
	);
};

export default Navbar;
