import React, { useContext, useEffect } from "react";
import "./moviesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/listCalls";

const MoviesList = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);
console.log(dispatch)
  const handleDelete = (id) => {
    deleteList(id,dispatch)
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "genre", headerName: "Genre", width: 160 },
    { field: "type", headerName: "Type", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className="productList_edit">Edit</button>
            </Link>
            <DeleteOutline
              className="delete_icon"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="movieList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default MoviesList;
