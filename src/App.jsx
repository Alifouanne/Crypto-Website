import "./App.css";

import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Layout, Space, Typography } from "antd";
import {
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
  Navbar,
  News
} from "./components";

const App = () => {
  return (
    <div className="app ">
      <div className="navbar ">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/homepage">Home</Link>

            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
