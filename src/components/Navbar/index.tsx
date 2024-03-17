import React from "react";
import { Button, Avatar, Dropdown, Typography } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useGlobalStore } from '../../utils/store'
import styles from "./Navbar.module.scss";

const index: React.FC = () => {
	const State = {
		globalStore: {
			isSidebarCollapsed: useGlobalStore((state:any) => state.isSidebarCollapsed),
		},
	};

	const Update = {
		globalStore: {
			isSidebarCollapsed: useGlobalStore(
				(state:any) => state.setIsSidebarCollapsed
			),
		},
	};

	const toggleCollapsed = () => {
		Update.globalStore.isSidebarCollapsed(
			!State.globalStore.isSidebarCollapsed
		);
	};

	const userMenuItems = [
		{
			key: "1",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.antgroup.com"
				>
					1st menu item
				</a>
			),
		},
		{
			key: "2",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.aliyun.com"
				>
					2nd menu item
				</a>
			),
		},
		{
			key: "3",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.luohanacademy.com"
				>
					3rd menu item
				</a>
			),
		},
	];

	return (
		<div className={styles.NavbarMain}>
			<Button onClick={toggleCollapsed} type="default">
				{State.globalStore.isSidebarCollapsed ? (
					<MenuUnfoldOutlined />
				) : (
					<MenuFoldOutlined />
				)}
			</Button>

			<div
				className={styles.NavbarMenuContainer}
			>
				<Typography.Link
					href="#API"
					style={{
						color: "black",
						fontWeight: "bold",
					}}
				>
					OPT 1
				</Typography.Link>

				<Typography.Link
					href="#API"
					style={{
						color: "black",
						fontWeight: "bold",
					}}
				>
					OPT 2
				</Typography.Link>

				<Typography.Link
					href="#API"
					style={{
						color: "black",
						fontWeight: "bold",
					}}
				>
					OPT 3
				</Typography.Link>
			</div>
			
			<Dropdown
				menu={{
					items: userMenuItems,
				}}
				trigger={["click"]}
			>
				<Avatar
					icon={<UserOutlined />}
					className={styles.UserAvatar}
				/>
			</Dropdown>
		</div>
	);
};

export default index;
