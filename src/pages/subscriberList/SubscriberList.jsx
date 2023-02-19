import "./subscriberList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { subscriberRows } from "../../dummyData";
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
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1,
    //COMMENT out for now
    //method used when this is a special column ie. not just fetching a value from rows, but a combo of values/styling/inserting custom value
    // renderCell: (params) => {
    //   return (
    //     <div c lassName="subscriberListTablesubscriber">
    //       <img src={params.row.avatar} alt="" className="subscriberListTableImg" />
    //       {params.row.subscribername}
    //     </div>
    //   );
    // },
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
    field: "paymentAmount",
    headerName: "Payment Amount",
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
          <DeleteOutline className="subscriberListTableDelete" />
        </>
      );
    },
  },
];

const SubscriberList = () => {
  return (
    <div className="subscriberList">
      <h3 className="subscriberListTitle">Subscribers</h3>
      <DataGrid
        className="subscriberListTable"
        rows={subscriberRows}
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
export default SubscriberList;
