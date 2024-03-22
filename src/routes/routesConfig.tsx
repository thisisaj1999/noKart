import { useMemo } from "react";
import Login from "../layouts/Auth/Login";
import Register from "../layouts/Auth/Register";
import Dashboard from "../layouts/Dashboard";
import { useGlobalStore } from "../utils/store";
import { IRouteConfig } from "../contracts/IRouteConfig";

const RoutesConfig = () => {
	const State = {
		globalState: {
			isLoggedIn: useGlobalStore((state) => state.isLoggedIn),
		},
	};

	return useMemo(() => {
		// public routes
		let routesArray: IRouteConfig[] = [
			{
				path: `/login`,
				component: Login,
				exact: true,
			},
			{
				path: `/register`,
				component: Register,
				exact: true,
			},
		];

		// protected routes
		if (State.globalState.isLoggedIn) {
			routesArray = [
				...routesArray,
				{
					path: `/`,
					component: Dashboard,
					exact: true,
				},
			];
		}

		return routesArray;
	}, [State.globalState.isLoggedIn]);

	// return routes
};

export default RoutesConfig;
