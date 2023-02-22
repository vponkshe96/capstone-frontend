import "./subscriberList.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/sidebar/Sidebar";

//info required to make requests to backend
const token = localStorage.getItem("token");
let decodedToken = "";
try {
  decodedToken = jwt_decode(token);
} catch (error) {
  console.log(error);
}
const usersId = decodedToken.id;
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const SubscriberList = () => {
  //DataGrid needs an initial row value
  const [subscriberRows, setSubscriberRows] = useState([
    {
      id: 0,
      fullName: "test",
      email: "test",
      date: "test",
      subscriptionType: "test",
    },
  ]);

  // GET REQUEST to subscribers model
  useEffect(() => {
    const fetchSubscribers = async () => {
      const response = await axios.get(
        `http://localhost:8080/subscribers/allSubscriber/${usersId}`,
        config
      );
      const result = response.data.allSubscribers;
      setSubscriberRows(result);
    };
    //send request everytime there's a change to subscriberRows state
    fetchSubscribers();
  }, []);

  //DELETE REQUEST to subscribers model
  const handleDelete = async (id) => {
    //id goes here
    const response = await axios.delete(
      `http://localhost:8080/subscribers/deleteSubscriber/${id}`,
      config
    );
    if (response.status === 200) {
      //updates data grid without refreshing the page
      window.location.reload(false);
    }
  };

  const subscriberColumns = [
    {
      field: "id",
      //value of id key fetched from rows
      //col value
      headerName: "ID",
      //col title
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      //converting date provided by backend into the right format
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: "typesId",
      headerName: "Subscription Type",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {/* relative path to individual subscriber */}
            {/* to={`${params.row.id}`} */}
            <Link
              to={{
                pathname: `/subscribers/${params.row.id}`,
                state: { id: params.row.id },
              }}
            >
              <button className="subscriberListTableEdit">Edit</button>
            </Link>
            {/* AXIOS DELETE REQUEST HERE*/}
            <DeleteOutline
              className="subscriberListTableDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="subscriberList">
        <h3 className="subscriberListTitle">Your Subscribers</h3>
        <DataGrid
          className="subscriberListTable"
          //height will adjust to its content
          autoHeight
          rows={subscriberRows}
          columns={subscriberColumns}
          pageSize={10}
          //need it to set page size
          rowsPerPageOptions={[10]}
          checkoxSelection
          //to prevent entire row from being selected when edit/delete button is clicked
          disableSelectionOnClick
          //can also consider making certain columns editable
        />
      </div>
    </>
  );
};
export default SubscriberList;
