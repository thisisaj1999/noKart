import React, { useState, useEffect } from "react";
import { Button, Form, Input, Tooltip, Typography, Divider } from "antd";
import styles from "./Register.module.scss";
import { getRandomColor } from "../../../utils/services/other";
import { useGlobalStore } from "../../../utils/store"
import GoogleLogo from "../../../assets/google-logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const index:React.FC = () => {
	
	const location = useLocation()
  const navigate = useNavigate()
	
	const [isHovered, setIsHovered] = useState(false);

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

  useEffect(()=>{
    if(location.pathname === '/register'){
      Update.Global.currentPage('register')
    }
  },[location])

	const hoveredStyle = {
		color: getRandomColor(),
		transition: "all 0.3s ease-in-out",
	};

	const notHoveredStyle = {
		color: "black",
		transition: "all 1s ease-in-out",
	};

	const navigateToLogin = () => {
		navigate("/login");
	};

	const onFinish = async (values:any) => {
    // const Response = await Auth.SignUp(values.email, values.password)
		// if(Response?.Success){
		// 	localStorage.setItem('isAuth', true);
		// 	router.push("/sale");
		// 	enqueueSnackbar("Sign Up successfull", { variant: 'success' });
		// }else{
		// 	if (Response?.Error && Response.Error.includes("email") && Response.Error.includes("already") && Response.Error.includes("in") && Response.Error.includes("use")) {
		// 		enqueueSnackbar("Email already in use!", { variant: 'warning' });
		// 	}
		// }
    console.log(values)
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

	return (
		<div className={styles.AuthBgMain}>
			<div
				className={styles.AuthFormMain}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<h1 className={styles.AuthFormHeading}>
					Regis
					<span style={isHovered ? hoveredStyle : notHoveredStyle}>
						ter
					</span>
				</h1>
					<Form
						layout="vertical"
						style={{
							maxWidth: 600,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
					>

						<Form.Item className={styles.AuthFormOAuthBtns}>
							<Button
								className={styles.AuthFormGoogleBtn}
								type="primary"
								// onClick={async () => await GoogleAuthentication()}
							>
								<img src={GoogleLogo} alt="GoogleLogo" /> Sign up with
								Google
							</Button>
						</Form.Item>

						<Divider>OR</Divider>

						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									type: 'email',
									message: 'The input is not valid Email',
								},
								{
									required: true,
									message: 'Please input your Email',
								},
							]}
						>
							<Input 	style={{height: '40px'}} type="email" placeholder="johndoe@email.com" />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
								{
									min: 8,
									message: "Password must contain atlease 8 characters",
								}
							]}
							hasFeedback
						>
							<Input.Password 	style={{height: '40px'}} />
						</Form.Item>

						<Form.Item
							label="Confirm password"
							name="confirm"
							dependencies={['password']}
							rules={[
								{
									required: true,
									message: 'Please confirm your password!',
								},
								{
									min: 8,
									message: "Password must contain atlease 8 characters",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}
										return Promise.reject(new Error('The new password that you entered do not match!'));
									},
								}),
							]}
						>
							<Input.Password 	style={{height: '40px'}} />
						</Form.Item>

						<div className={styles.AuthFormStepsSubmitBtns}>
							<Form.Item>
								<Button
									type="primary"
									className={styles.AuthFormSubmitBtn}
									htmlType="submit"
								>
									Sign Up
								</Button>
							</Form.Item>

						</div>
							<div className={styles.AuthFormLink}>
							<Tooltip title="Log In">
								<Typography.Link onClick={navigateToLogin}>
									You already have an account ?
								</Typography.Link>
							</Tooltip>
						</div>
					</Form>
			</div>
		</div>
	);
};

export default index;