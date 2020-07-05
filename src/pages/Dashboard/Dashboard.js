import React, { useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../components/Home/Home";
import CreateInvoice from "../../components/CreateInvoice/CreateInvoice";
import Navbar from '../../components/Navbar/Navbar';
import "./Dashboard.css";
import UpdateInvoice from "../../components/UpdateInvoice/UpdateInvoice";
import Metric from "../../components/Metric/Metric";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <Navbar />
        <Switch>
          <Route
            path="/dashboard/home"
            component={(props) => <Home {...props} />}
          />
          <Route
            path="/dashboard/create"
            component={(props) => <CreateInvoice {...props} />}
          />
          <Route
            path="/dashboard/update/:id"
            component={(props) => <UpdateInvoice {...props} />}
          />
          <Route
            path="/dashboard/metric"
            component={(props) => <Metric {...props} />}
          />
          <Route
            path="/dashboard/*"
            render={() => <Redirect to="/dashboard/home" />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;