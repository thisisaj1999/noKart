import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../utils/store";

const Redirect: React.FC = () => {

	const State = {
		globalState: {
			isLoggedIn: useGlobalStore((state) => state.isLoggedIn),
		}
	};

	const navigate = useNavigate();

	useEffect(() => {
		navigate(State.globalState.isLoggedIn ? "/" : "/login");
	}, [State.globalState.isLoggedIn, navigate]);

	return null;
};

export default Redirect;