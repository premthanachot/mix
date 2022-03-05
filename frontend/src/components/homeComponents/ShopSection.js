import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import Loader from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Action/ProductActions";
import "./styteHome.css";

const ShopSection = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loader />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div class="card">
                          <div className="border-product">
                            <Link to={`/products/${product._id}`}>
                              <div className="shopBack">
                                <img src={product.image} alt={product.name} />
                              </div>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`/products/${product._id}`}>
                                  {product.name}
                                </Link>
                              </p>
                              <h3>{product.price} ฿</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
