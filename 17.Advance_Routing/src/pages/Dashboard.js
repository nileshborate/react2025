import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Link to="settings">Go to Settings</Link>
      <hr />
      <Outlet />
    </>
  );
};

export default Dashboard;
