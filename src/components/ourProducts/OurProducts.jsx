import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addProductCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";

export const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  function handleMsgAdded() {
    MySwal.fire({
      title: "Added!",
      icon: "success",
      confirmButtonColor: "#505050",
    });
  }

  function handlerMsgErr() {
    MySwal.fire({
      title: "Warning!",
      text: "This functionality escapes from the scope of the project.",
      icon: "warning",
      confirmButtonText: "Cancel",
      confirmButtonColor: "#f8bb86",
    });
  }

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      setOurProducts(response.data.slice(0, 8));
    };
    listProducts();
  }, []);

  function handleAddCart(product) {
    dispatch(addProductCart({ productDetail: product, quantityProduct: 1 }));
    handleMsgAdded();
  }

  return (
    <div className="product-area section-space-top-100">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title mb-0">Our Products</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav product-tab-nav tab-style-1" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="active ourProductsBtn"
                  id="featured-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="featured"
                  aria-selected="true"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="bestseller-tab"
                  className="active ourProductsBtn"
                  data-bs-toggle="tab"
                  to="#bestseller"
                  role="tab"
                  aria-controls="bestseller"
                  aria-selected="false"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Bestseller
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="latest-tab"
                  className="active ourProductsBtn"
                  data-bs-toggle="tab"
                  to="#latest"
                  role="tab"
                  aria-controls="latest"
                  aria-selected="false"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Latest
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="featured"
                role="tabpanel"
                aria-labelledby="featured-tab"
              >
                <div className="product-item-wrap row">
                  {ourProducts.map((product, index) => {
                    return (
                      <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
                        <div className="product-item">
                          <div className="product-img">
                            <Link to={`/product/${product.slug}`}>
                              <img
                                className="primary-img"
                                src={product.image[3]}
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img secondary-img-bg"
                                src={product.image[4]}
                                alt="Product Images"
                              />
                            </Link>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <button
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                    className="whislistBtn"
                                    onClick={() => {
                                      handlerMsgErr();
                                    }}
                                  >
                                    <i className="pe-7s-like"></i>
                                  </button>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <Link
                                    to={`/product/${product.slug}`}
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </Link>
                                </li>
                                <li>
                                  <button
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                    className="whislistBtn"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleAddCart(product);
                                    }}
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <Link className="product-name" to={`/product/${product.slug}`}>
                              {product.productName}
                            </Link>
                            <div className="price-box pb-1">
                              <span className="new-price">${product.price}</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
