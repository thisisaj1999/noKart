import React from "react";
import styles from "./Dashboard.module.scss";
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { Divider, Menu } from "antd";
type MenuItem = Required<MenuProps>['items'][number];
import { IUser } from "../../contracts/IUser";

interface DashboardProps {
  user: IUser
}

function getItem(label?: React.ReactNode, key?: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

import { useGlobalStore } from "../../utils/store";
import Navbar from "../../components/Navbar";
import MainPage from "../../pages/MainPage";

const items = [
	getItem(),
	getItem(),
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("Option 3", "3", <ContainerOutlined />),
	getItem("Navigation One", "sub1", <MailOutlined />, [
		getItem("Option 5", "5"),
		getItem("Option 6", "6"),
		getItem("Option 7", "7"),
		getItem("Option 8", "8"),
	]),
	getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
		getItem("Option 9", "9"),
		getItem("Option 10", "10"),
		getItem("Submenu", "sub3", null, [
			getItem("Option 11", "11"),
			getItem("Option 12", "12"),
		]),
	]),
];

const index: React.FC<DashboardProps>  = ({user}) => {
	const State = {
		globalStore: {
			isSidebarCollapsed: useGlobalStore(
				(state) => state.isSidebarCollapsed
			),
		},
	};

	return (
		<div className={styles.DashboardMain}>
			<div
				className={styles.DashboardSideMenu}
				style={{
					width: State.globalStore.isSidebarCollapsed ? 80 : 200,
				}}
			>
				<Menu
					defaultSelectedKeys={["1"]}
					mode="inline"
					className={styles.SidebarMenu}
					theme="dark"
					inlineCollapsed={State.globalStore.isSidebarCollapsed}
					items={items}
				/>
			</div>
			<div
				className={styles.DashboardContent}
				style={{
					width: State.globalStore.isSidebarCollapsed
						? "calc(100% - 80px)"
						: "calc(100% - 200px)",
				}}
			>
				<Navbar />
				<Divider className={styles.DashboardDivider} />
				<MainPage />
        <h1>Hello {user?.name}</h1>
			</div>
		</div>
	);
};
export default index;
