import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { getAllProducts } from "../../services/api";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Products = () => {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [columnDefs] = useState([
    {
      field: "id",
      filter: "agTextColumnFilter",
      suppressMenu: true,
      floatingFilter: true,
    },
    {
      field: "title",
      filter: "agTextColumnFilter",
      suppressMenu: false,
      floatingFilter: true,
    },
    {
      field: "price",
      filter: "agTextColumnFilter",
      suppressMenu: true,
      floatingFilter: true,
    },
  ]);

  useEffect(() => {
    getAllProducts(token).then((res) => {
      setProducts(res.data.products);
    });
  }, [token]);

  return (
    <div className="vh-100">
      <div className="ag-theme-alpine w-100 h-100">
        <AgGridReact
          rowData={products}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={17}></AgGridReact>
      </div>
    </div>
  );
};
export default Products;
