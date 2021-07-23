import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons"
import {userRows} from '../../dummyData';

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 180, renderCell: (params)=>{
        return(
            <div className="userList_user">
                <img className="userList_img" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
        field: "transaction",
        headerName: "Transaction",
        width: 150,
      },
      {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell: (params) =>{
            return(
                <>
                    <button className="userList_edit" >Edit</button>
                    <DeleteOutline className="delete_icon"/>
                </>
            )
        }
      },
  ];
  return (
    <div className="user_list">
      <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default UserList;
