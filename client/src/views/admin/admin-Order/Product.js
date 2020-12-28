import React, { useEffect, useState } from "react";
import AdminNavbar from "components/Navbars/AdminNavbar";
import { useDispatch } from "react-redux";

import { allProducts } from "../../../_actions/porduct_action";

function Product() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    dispatch(allProducts()).then((response) => {
      console.log(response.payload);
      setProductList(response.payload.productinfo);
    });
  }, []);
  return (
    <>
      <AdminNavbar />
      <div style={{ marginTop: "100px" }}>상품 등록 페이지</div>
      <div>
        {productList.length !== 0 ? (
          productList.map((element) => (
            <div>
              {element._id}
              {element.name}
              {element.price}
              {element.picture}
            </div>
          ))
        ) : (
          <div>등록된 상품이 없습니다</div>
        )}
        <button>상품등록</button>
      </div>
    </>
  );
}

export default Product;
