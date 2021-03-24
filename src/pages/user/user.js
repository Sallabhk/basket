import React from 'react';
import 'antd/dist/antd.css';
import './user.css';
import data from './data'
import { Form, Input, Button ,message } from 'antd';
import { useHistory } from 'react-router';




const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const initialValues = {
  username: "",
  password: "",
};
export const User = () => {
  const [values, setValues] = React.useState(initialValues);

  const history = useHistory();

  const handleSubmit = () => {
    const user = data.find(user => user.name == values.username && user.password === values.password)
    if(user) {
      history.push('/homepage')
      console.log(user.permission)
      
    }

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onFinish = () => {
    message.success("Logged in Successfully");
  };

  const onFinishFailed = () => {
   message.error('Unable to login wrong credentials');
  };

  return (
    <div className="container">
    <div className='login-container'>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        
      >
        <input  value={values.username} name="username" onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
      >
     <input type="password"   value={values.password}   name="password" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
