import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

// Using DataGrid component from mui
// Need to define rows and columns for it to work
//importing rows to make this component partially reusable

const columns = [
  {
    field: "id",
    //value of id key fetched from rows
    //col value
    headerName: "ID",
    //col title
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
    //COMMENT out for now
    //method used when this is a special column ie. not just fetching a value from rows, but a combo of values/styling/inserting custom value
    // renderCell: (params) => {
    //   return (
    //     <div className="userListTableUser">
    //       <img src={params.row.avatar} alt="" className="userListTableImg" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "subscriptionType",
    headerName: "Subscription Type",
    width: 150,
  },
  {
    field: "paymentAmount",
    headerName: "Payment Amount",
    width: 120,
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,

    renderCell: (params) => {
      return (
        <>
          {/* relative path to individual user */}
          <Link to={`${params.row.id}`}>
            <button className="userListTableEdit">Edit</button>
          </Link>
          {/* AXIOS DELETE REQUEST HERE*/}
          <DeleteOutline className="userListTableDelete" />
        </>
      );
    },
  },
];

const UserList = () => {
  return (
    <div className="userList">
      <h3 className="userListTitle">Users</h3>
      <DataGrid
        className="userListTable"
        rows={userRows}
        columns={columns}
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
export default UserList;
