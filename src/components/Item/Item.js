import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  //   let pricefinal = product.price - (product.price*product.discount/100)
  return (
    <>
            <article  className="containercard ">
    <Link to={`/detail/${prod.id}`}>
                <div className="containerimg">
                  <div className="boximage"><img
                  className="product"
                  src={prod.image}
                  alt="imagen"
                />
                </div>

                <div className="detalles">
                  <h4 className="titlecard ">{prod.name}</h4>
                  <p
                    className={prod.discount !== 0 ? "pricecard2" : "pricecard"}
                  >
                    {prod.price}$
                  </p>
                  {prod.price - (prod.price * prod.discount) / 100 !==
                    prod.price && (
                    <p className="pricefinal">
                      {prod.discount !== 0 &&
                        prod.price - (prod.price * prod.discount) / 100}
                      $
                    </p>
                  )}
                  <p className="colorcard">c</p>
                  {prod.discount !== 0 && (
                    <p className="discountcard">{prod.discount}%</p>
                  )}
                </div>
                </div>
            </Link>
            </article>
    </>
  );
};

export default Item;
