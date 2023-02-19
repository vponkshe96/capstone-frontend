import "./subscriptionList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { subscriptionRows } from "../../dummyData";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Subscription Name",
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
  {
    field: "activeSubscribers",
    headerName: "Active Subscribers",
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
            <button className="subscriptionListTableEdit">Edit</button>
          </Link>
          {/* AXIOS DELETE REQUEST HERE*/}
          <DeleteOutline className="subscriptionListTableDelete" />
        </>
      );
    },
  },
];

const SubscriptionList = () => {
  return (
    <div className="subscriptionList">
      <h3 className="subscriptionListTitle">Subscriptions</h3>
      <DataGrid
        className="subscriptionListTable"
        rows={subscriptionRows}
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
export default SubscriptionList;
