import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data,setData] =useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 180,
          renderCell: (params) => {
            return (
              <div className="productList_user">
                <img className="productList_img" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 130,
        },
        {
          field: "price",
          headerName: "Price",
          width: 150,
        },
        {
          field: "action",
          headerName: "Action",
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productList_edit">Edit</button>
                </Link>
                <DeleteOutline
                  className="delete_icon"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <div className="product">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
