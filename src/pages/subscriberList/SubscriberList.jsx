// Objective
// GET REQUEST to subscribers model
//DELETE REQUEST to subscribers model

import "./subscriberList.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { subscriberRows } from "../../data";
import { Link } from "react-router-dom";
import axios from "axios";

const SubscriberList = () => {
  // const [subscriberRows, setSubscriberRows] = useState(null);

  // GET REQUEST to subscribers model
  // useEffect(() => {
  //   const fetchMeetings = async () => {
  //     const response = await axios.get("http://localhost:4444/api/meetings");
  //     const { data } = response;
  //     setSubscriberRows(data);
  //   };
  //   //send request everytime there's a change to subscriberRows state
  //   fetchMeetings();
  // }, [subscriberRows]);

  //DELETE REQUEST to subscribers model
  const handleDelete = async (id) => {
    //id goes here
    const response = await axios.delete(``);
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
    },
    {
      field: "subscriptionType",
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
            <Link to={`${params.row.id}`}>
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
    <div className="subscriberList">
      <h3 className="subscriberListTitle">Subscribers</h3>
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
  );
};
export default SubscriberList;
