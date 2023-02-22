import "./subscriptionList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { subscriptionRows } from "../../data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

const SubscriptionList = () => {
  const [subscriptionRows, setSubscriptionRows] = useState([
    {
      id: 0,
      name: "test",
      price: "$0",
      cost: "$0",
    },
  ]);
  //GET REQUEST to users model model
  useEffect(() => {
    const fetchSubscriptions = async () => {
      const response = await axios.get(
        `http://localhost:8080/users/allTypes/${usersId}`,
        config
      );
      const result = response.data.allTypes;

      console.log(result);
      setSubscriptionRows(result);
    };
    fetchSubscriptions();
  }, []);
  //DELETE REQUEST to users model
  const handleDelete = async (id) => {
    //id goes here
    const response = await axios.delete(
      `http://localhost:8080/users/deleteType/${id}`,
      config
    );
    if (response.status === 200) {
      //updates data grid without refreshing the page
      window.location.reload(false);
    }
  };
  const subscriptionColumns = [
    {
      field: "id",
      headerName: "Id",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },

    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
    },
    // {
    //   field: "usersId",
    //   headerName: "Subscribers",
    //   flex: 1,
    // },
    {
      field: "action",
      headerName: "Action",
      flex: 1,

      renderCell: (params) => {
        return (
          <>
            {/* relative path to individual subscriber */}
            <Link to={`${params.row.id}`}>
              <button className="subscriptionListTableEdit">Edit</button>
            </Link>
            {/* AXIOS DELETE REQUEST HERE*/}
            <DeleteOutline
              className="subscriptionListTableDelete"
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
      <div className="subscriptionList">
        <h3 className="subscriptionListTitle">Your Subscriptions</h3>
        <DataGrid
          className="subscriptionListTable"
          autoHeight
          rows={subscriptionRows}
          columns={subscriptionColumns}
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
export default SubscriptionList;
