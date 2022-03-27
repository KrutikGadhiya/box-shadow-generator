import { useState } from "react";
import { Layout } from "antd";
import { Navbar, SidebarLeft, SideBarRight } from "./components";

const { Header, Content, Sider } = Layout;

function App() {
	const [shadows, setShadows] = useState([
		{
			isActive: true,
			isInset: false,
			horizontalOffset: 0,
			verticalOffset: 0,
			blurRadius: 0,
			spreadRadius: 0,
			color: "#000000",
		},
	]);
	const [porperties, setProperties] = useState({
		bgColor: "#ffffff",
		borderColor: "#ffffff",
		borderRadius: 2,
		height: 20,
		width: 20,
	});

	const handleChangeRight = (name, value) => {
		setProperties({ ...porperties, [name]: value });
	};

	const handleChangeLeft = (i, name, value) => {
		const tmpShadows = [...shadows];
		tmpShadows[i][name] = value;
		setShadows(tmpShadows);
	};
	const handleShadowRemove = (i) => {
		if (shadows.length === 1) return;
		const tmpShadows = [...shadows];
		tmpShadows.splice(i, 1);
		setShadows(tmpShadows);
	};
	const handleShadowAdd = () => {
		setShadows([
			...shadows,
			{
				isActive: true,
				isInset: false,
				horizontalOffset: 0,
				verticalOffset: 0,
				blurRadius: 0,
				spreadRadius: 0,
				color: "#000000",
			},
		]);
	};
	return (
		<>
			<Layout>
				<Header className="header">
					<Navbar />
				</Header>
				<Layout className="main">
					<Sider width={350} className="sidebar" theme="light">
						<SidebarLeft
							shadows={shadows}
							handleChange={handleChangeLeft}
							handleShadowAdd={handleShadowAdd}
							handleShadowRemove={handleShadowRemove}
						/>
					</Sider>
					<Content className="content">
						<div
							style={{
								backgroundColor: porperties.bgColor,
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: porperties.borderColor,
								borderRadius: `${porperties.borderRadius}rem`,
								height: `${porperties.height}rem`,
								width: `${porperties.width}rem`,
							}}
							className="target"></div>
					</Content>
					<Sider width={350} className="sidebar" theme="light">
						<SideBarRight
							porperties={porperties}
							handleChange={handleChangeRight}
						/>
					</Sider>
				</Layout>
			</Layout>
		</>
	);
}

export default App;
