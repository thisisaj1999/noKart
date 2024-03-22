import React, { useEffect, useState } from "react";
import { Button, Form, Input, Tooltip, Typography, Divider } from "antd";
import styles from "./Login.module.scss";
import { getRandomColor } from "../../../utils/services/other";
import { useNavigate, useLocation } from 'react-router-dom'
import GoogleLogo from "../../../assets/google-logo.svg";
import { useGlobalStore } from "../../../utils/store";


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
    if(location.pathname === '/login'){
      Update.Global.currentPage('login')
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

	const navigateToRegister = () => {
		navigate("/register");	
	}

  const onFinish = async (values:any) => {
    // const Response = await Auth.SignIn(values.email, values.password)
		// if(Response?.Success){
		// 	localStorage.setItem('isAuth', true);
		// 	router.push("/sale");
		// 	enqueueSnackbar("Sign Up successfull", { variant: 'success' });
		// }else{
		// 	if (Response?.Error && Response.Error.includes("invalid") && Response.Error.includes("credential")) {
		// 		enqueueSnackbar("Invalid Credentials", { variant: 'warning' });
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
          Log{" "}
          <span style={isHovered ? hoveredStyle : notHoveredStyle}>
            In
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
                <img src={GoogleLogo} alt="GoogleLogo" /> Sign in with Google
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
            <Input style={{height: '40px'}} type="email" placeholder="johndoe@email.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{height: '40px'}}  />
          </Form.Item>

          <Form.Item>
            <Button className={styles.AuthFormSubmitBtn} type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>

          <div className={styles.AuthFormLink}>
            <Tooltip title="Sign Up">
              <Typography.Link onClick={navigateToRegister}>
                {"You don't have an account?"}
              </Typography.Link>
            </Tooltip>
          </div>
        </Form>
      </div>
    </div>
	);
};
export default index;