// @ts-nocheck
import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginFormSB() {
    console.log(localStorage.getItem('userNameSharath'));
    console.log(localStorage.getItem('passwordSharath'));

  const onFinishSharath = (values) => {
    const { username, password } = values; 
    const storedUsernameSharath = localStorage.getItem('userNameSharath');
    const storedPasswordSharath = localStorage.getItem('passwordSharath');
    console.log(username,password);
    console.log(storedPasswordSharath);
    console.log(storedUsernameSharath);
    if (username === storedUsernameSharath && password === storedPasswordSharath) {
      localStorage.setItem('isLoggedIn', true);
      window.location.href = '/dash';
    } else {
      alert('Invalid username or password sharath');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:'lightskyblue' }}>
      <Card style={{ width: 500,color:'crimson' }}>
        <h2>Welcome to Recipe Finder Sharath </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinishSharath}
        >
          <Form.Item
            name="username" // Corrected field name here
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password" // Corrected field name here
            rules={[{ required: true, message: 'Please enter your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Sharath Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in Sharath
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginFormSB;
