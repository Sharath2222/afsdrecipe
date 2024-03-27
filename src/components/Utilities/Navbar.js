import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import RecipeFinderSB from '../Recipes/RecipeFinderSB';

const { Header } = Layout;

function Navbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/ ">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DashboardOutlined />}>
          <Link to="/registration">Registration</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          <Link to="/recipes">Recipes</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DashboardOutlined />}>
          <Link to="/dash">Dashboard</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
