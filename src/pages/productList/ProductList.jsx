import React, { useContext, useEffect} from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/movieCalls";

const ProductList = () => {
    const {movies,dispatch} = useContext(MovieContext);

    useEffect(()=>{
      getMovies(dispatch);
    },[dispatch])
    

    const handleDelete = (id) => {
        deleteMovie(id,dispatch)
      };
      console.log(movies)
      const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
          field: "movie",
          headerName: "Movie",
          width: 180,
          renderCell: (params) => {
            return (
              <div className="productList_user">
                <img className="productList_img" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "genre", headerName: "genre", width: 120 },
        { field: "year", headerName: "year", width: 120 },
        { field: "limit", headerName: "limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },
        {
          field: "action",
          headerName: "Action",
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={{pathname:"/movie/" + params.row._id, movie:params.row}}>
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
    <div className="product">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
};

export default ProductList;
