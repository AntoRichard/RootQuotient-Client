import React, { useEffect, useState } from "react";
import Barchat from "../Barchart/Barchart";
import UserService from "../../services/User";
import { withRouter } from "react-router-dom";

const UsersInvoice = (props) => {
  const { invoicesProp } = props;
  const [users, setUsers] = useState([]);
  const [invoices, setInvoices] = useState(invoicesProp);
  const [barchart, setBarchart] = useState({});
  useEffect(() => {
    UserService.getAllUsersService(
      () => {},
      (res) => {
        console.log(res.data);
        setUsers(res.data.users);
      },
      (err) => {
        console.log(err);
        props.history.push("/");
      },
      () => {}
    );
  }, []);

  const createData = () => {
    let data = {};
    users.forEach((user) => {
      let matched = invoices.filter((invoice) => invoice.userid === user._id);
      data[user.username] = matched.length;
    });
    console.log({ data, users });
    return data;
  };

  useEffect(() => {
    setInvoices(invoicesProp);
  }, [invoicesProp]);

  return (
    <div className="card-container" style={{ marginBottom: 50 }}>
      <div className="invoice-card">
        <Barchat data={createData()} title="User Details" />
      </div>
    </div>
  );
};

export default withRouter(UsersInvoice);