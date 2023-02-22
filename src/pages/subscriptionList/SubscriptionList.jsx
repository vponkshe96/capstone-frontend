// // Objective
// // GET REQUEST to subscribers model
// //DELETE REQUEST to subscribers model
// import "./subscriptionList.css";
// import { DataGrid } from "@mui/x-data-grid";
// import { DeleteOutline } from "@mui/icons-material";
// // import { subscriptionRows } from "../../data";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import jwt_decode from "jwt-decode";

// //info required to make requests to backend
// const token = localStorage.getItem("token");
// const decodedToken = jwt_decode(token);
// const usersId = decodedToken.id;
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     flex: 1,
//   },
//   {
//     field: "name",
//     headerName: "Subscription Name",
//     flex: 1,
//   },

//   {
//     field: "price",
//     headerName: "Price",
//     flex: 1,
//   },
//   {
//     field: "cost",
//     headerName: "Cost",
//     flex: 1,
//   },
//   {
//     field: "activeSubscribers",
//     headerName: "Subscribers",
//     flex: 1,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     flex: 1,

//     renderCell: (params) => {
//       return (
//         <>
//           {/* relative path to individual subscriber */}
//           <Link to={`${params.row.id}`}>
//             <button className="subscriptionListTableEdit">Edit</button>
//           </Link>
//           {/* AXIOS DELETE REQUEST HERE*/}
//           <DeleteOutline className="subscriptionListTableDelete" />
//         </>
//       );
//     },
//   },
// ];

// const SubscriptionList = () => {
//   const [subscriptionRows, setSubscriptionRows] = useState("");
//   //GET REQUEST to subscribers model
//   useEffect(() => {
//     const fetchSubscribers = async () => {
//       const response = await axios.get(
//         `http://localhost:8080/subscribers/allSubscriber/${usersId}`,
//         config
//       );
//       const { data } = response;
//       console.log(response);
//     };
//     fetchSubscribers();
//   }, []);
//   return (
//     <div className="subscriptionList">
//       <h3 className="subscriptionListTitle">Subscriptions</h3>
//       <DataGrid
//         className="subscriptionListTable"
//         autoHeight
//         // rows={subscriptionRows}
//         columns={columns}
//         pageSize={10}
//         //need it to set page size
//         rowsPerPageOptions={[10]}
//         checkoxSelection
//         //to prevent entire row from being selected when edit/delete button is clicked
//         disableSelectionOnClick
//         //can also consider making certain columns editable
//       />
//     </div>
//   );
// };
// export default SubscriptionList;
