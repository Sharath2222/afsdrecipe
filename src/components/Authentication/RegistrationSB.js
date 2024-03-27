import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

function RegistrationSB() {
  //sharath.boyini@npci.org.in
  const [formData, setFormData] = useState({
    userNameSharath: '',
    lastNameSharath: '',
    emailSharath: '',
    passwordSharath: '',
    confirmPasswordSharath: '',
    phoneNumberSharath: ''
  });

  //sharath.boyini@npci.org.in

  const handleInputChangeSharathRegistrationForm = (e) => {
    const { name, value } = e.target;
    console.log("sharath code");
    setFormData({
      ...formData,
      [name]: value
    });
    console.log("sharath code");

  };
  

  //sharath.boyini@npci.org.in
  const onFinishSharath = () => {
    console.log('Form submitted:', formData);
    console.log("sharath code");

    localStorage.setItem('userNameSharath', formData.userNameSharath);
    console.log(formData.passwordSharath);
    console.log("sharath code");

    localStorage.setItem('passwordSharath', formData.passwordSharath);
    window.location.href = '/';
  };
  //sharath.boyini@npci.org.in
  return (
    <div style={{ backgroundColor: 'lightseagreen', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 500, padding: 20 }}>
        <h2>Welcome to Registration page Sharath</h2>
        <Form
          name="registration_form"
          initialValues={{ remember: true }}
          onFinish={onFinishSharath}
        >
             {/* sharath.boyini@npci.org.in */}

          <Form.Item
            name="userNameSharath"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
                                {/* sharath.boyini@npci.org.in */}

            <Input 
              name="userNameSharath"
              placeholder="Username"
              value={formData.userNameSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
                                {/* sharath.boyini@npci.org.in */}

          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input 
              name="lastName"
              placeholder="Last Name"
              value={formData.lastNameSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
                                {/* sharath.boyini@npci.org.in */}

          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address!' }
            ]}
          >
                                {/* sharath.boyini@npci.org.in */}

            <Input 
              name="email"
              placeholder="Email"
              value={formData.emailSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
          </Form.Item>
                              {/* sharath.boyini@npci.org.in */}


          <Form.Item
            name="passwordSharath"
            rules={[{ required: true, message: 'Please input your passwordSharath!' }]}
          >
            <Input.Password 
              name="passwordSharath"
              placeholder="Password"
              value={formData.passwordSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['passwordSharath']}
            rules={[
              { required: true, message: 'Please confirm your passwordSharath Sharath' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('passwordSharath') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match Sharath'));
                },
              }),
            ]}
          >
            <Input.Password 
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPasswordSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
                                {/* sharath.boyini@npci.org.in */}

            <Input 
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumberSharath}
              onChange={handleInputChangeSharathRegistrationForm}
            />
          </Form.Item>

          <Form.Item>
                                {/* sharath.boyini@npci.org.in */}

            <Button type="primary" htmlType="submit">
              Register Sharath
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default RegistrationSB;
