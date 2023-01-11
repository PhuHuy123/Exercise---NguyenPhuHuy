import React, { useCallback, useEffect } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import "./Login.scss";
import { toast } from "react-toastify";
import { addUser } from "../../config/apiService";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    if(values.password === values.passwordConfirm){
      let res = await addUser(values);
    if (res && res.status === 200) {
      toast.success(res.message);
        navigate("/auth/login");
    } else {
      toast.error(res.message);
    }
    }else{
      toast.error("password không đúng");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="center" className="login">
      <Col className="login-parrent" md={8} sm={18} xs={20}>
        <h2>Sign up</h2>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
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
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: "Please input your Confirm password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Link to="/auth/login">Login</Link>
        </Form>
      </Col>
    </Row>
  );
};
export default Signup;
