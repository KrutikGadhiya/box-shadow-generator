import React from "react";
import { Button, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Navbar = () => {
	return (
		<>
			<Text className="title">Box Shadow Generator</Text>
			<div>
				<a href="#" className="link">
					<GithubOutlined />
				</a>
				<Button className="btn" type="primary">
					Show Code
				</Button>
			</div>
		</>
	);
};

export default Navbar;
